/* CODIGO */
#include <WiFi.h>
#include <DHT.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <mDNS.h>

/************************* DEFINICION DE PINES *********************************/

//Reles
#define Relay1            26
#define Relay2            27
#define Relay3            14

//DHT11 pin
#define DHTPIN            13

//pin analogico para la fotoresistencia
const int  portPin=12;

int sensorValue = 0;



String temp;
String hum;
String light;


// elegimos el tipo de senso
#define DHTTYPE DHT11     // DHT 11

DHT dht(DHTPIN, DHTTYPE);

// datos de red local.
const char* ssid = "LGFDP";
const char* password = "awadeowo";

WebServer server(80);

void handleRoot() {

  server.send(200, "text/plain", "SISTEMA HIDROPONICO EN MARCHA!");

}

void handleNotFound() {

  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);

}


void setup()
{
  // Debug console
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  dht.begin();


  pinMode(12, INPUT);
  pinMode(Relay1, OUTPUT);
  pinMode(Relay2, OUTPUT);
  pinMode(Relay3, OUTPUT);


//SERVIDOR LOCAL

  server.on("/", handleRoot); // http://localIPAddress/
  //PARA SENSORES

  server.on("/dht-temp", []() // http://localIPAddress/dht-temp
  {
    int t = dht.readTemperature();
    temp = String(t);
    server.send(200, "text/plain", temp);
  });

  server.on("/dht-hum", []()  // http://localIPAddress/dht-hum
  {
    int h = dht.readHumidity();
    hum = String(h);
    server.send(200, "text/plain", hum);
  });
  server.on("/ligthValue", []() // http://localIPAddress/ligthValue
  {
    sensorValue = analogRead(portPin);
    delay (50);
    String light = String(sensorValue);
     
    server.send(200, "text/plain", light );
  });
  //PARA ACTUADORES
  server.on("/relay2/on", []()  // http://localIPAddress/relay2/on
  {
    server.send(200, "text/plain", "Relay 2 turned ON");
    digitalWrite(Relay1, HIGH);
  });

  server.on("/relay2/off", []()  // http://localIPAddress/relay2/off
  {
    server.send(200, "text/plain", "Relay 2 turned OFF");
    digitalWrite(Relay1, LOW);
  });

  server.on("/relay3/on", []()  // http://localIPAddress/relay3/on
  {
    server.send(200, "text/plain", "Relay 3 turned ON");
    digitalWrite(Relay2, HIGH);
  });

  server.on("/relay3/off", []()  // http://localIPAddress/relay3/off
  {
    server.send(200, "text/plain", "Relay 3 turned OFF");
    digitalWrite(Relay2, LOW);
  });

  server.on("/relay4/on", []()  // http://localIPAddress/relay4/on
  {
    server.send(200, "text/plain", "Relay 4 turned ON");
    digitalWrite(Relay3, HIGH);
  });

  server.on("/relay4/off", []()  // http://localIPAddress/relay4/off
  {
    server.send(200, "text/plain", "Relay 4 turned OFF");
    digitalWrite(Relay3, LOW);
  });

    server.send(200, "text/plain", "Sensor 4 Data");


  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");

}

void loop()
{
  
  server.handleClient();


}
