import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const MyComponent = (props) => (
    <Card style={styles.card} onPress={props.onPress} mode="contained">
        <Card.Content>
            <Title style={styles.title}>{props.Title}</Title>
            <Paragraph>{props.subtitle}</Paragraph>
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    card:{
        flex: 1,
        height:150,
        width: 350,
        resizeMode: "stretch",
        marginHorizontal: 20,
        marginVertical: 10,
        //marginBottom: 20
    },
    title:{
        textAlign: "center",
        fontSize: 20,
    }
})

export default MyComponent;