import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const MyComponent = (props) => (
    <Card mode="contained">
        <TouchableOpacity onPress={props.onPress}>
        <Card.Cover style={styles.image} source={props.require}/>
        </TouchableOpacity>
        <Card.Content>
            <Title>{props.title}</Title>
            <Paragraph>{props.paragraph}</Paragraph>
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    image:{
        height:600,
        resizeMode: "stretch",
    },
})

export default MyComponent;