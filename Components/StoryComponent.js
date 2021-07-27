import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default class ReadStoryScreen extends Component {
    render() {
        return (

            <View>
                <TouchableOpacity style = {styles.touchableOpacity}>
                    <Text style={styles.text}>{this.props.story.title}</Text>
                    <Text style={styles.text}>by {this.props.story.author}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({

    touchableOpacity: {

        alignSelf: 'center',
        backgroundColor: "white",       
        alignItems: 'center',
        borderWidth:3,
        width:"100%",
        borderColor:"#777777",
        justifyContent: 'center',
    },
    text: {

        color: "pink",
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    }
})
