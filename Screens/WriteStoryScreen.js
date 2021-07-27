import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, TextInput, KeyboardAvoidingView, ToastAndroid } from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends Component {

    constructor() {
        super()
        this.state = {

            title: "",
            author: "",
            story: ""

        }
    }

    submit = () => {

        db.collection("stories").add({
            'title': this.state.title,
            'author': this.state.author,
            'story': this.state.story
        })
        ToastAndroid.show("The Story is Submitted", ToastAndroid.SHORT);
    }

    render() {
        return (

            <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding" enabled>
                <View>
                    <Text style={styles.heading}>Write a Story</Text>
                    <TextInput
                        placeholder="Story Title"
                        onChangeText={(text) => {
                            this.setState({
                                title: text
                            })
                        }}
                        placeholderTextColor='#661111'
                        value={this.state.title}
                        style={styles.textInput} />

                    <TextInput
                        placeholder="Author"
                        onChangeText={(text) => {
                            this.setState({
                                author: text
                            })
                        }}
                        placeholderTextColor='#661111'
                        value={this.state.author}
                        style={styles.textInput} />

                    <TextInput
                        placeholder="story"
                        onChangeText={(text) => {
                            this.setState({
                                story: text
                            })
                        }}
                        multiline={true}
                        placeholderTextColor='#661111'
                        value={this.state.story}
                        style={[styles.textInput, { minWidth: 200, minHeight: 200 }]} />

                    <TouchableOpacity style={styles.touchableOpacity}>
                        <Text style={styles.text} onPress={() => this.submit()}>Submit</Text>
                    </TouchableOpacity>
                </View >
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({

    touchableOpacity: {

        alignSelf: 'center',
        backgroundColor: "pink",
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 50

    },

    heading: {

        color: "pink",
        alignSelf: "center",
        fontSize: 40,

    },

    textInput: {

        borderWidth: 3,
        borderRadius: 20,
        borderColor: "#99FF99",
        width: 200,
        marginTop: 50,
        alignSelf: "center",
        textAlign: "center",

    },

    bg: {

        flex: 1,
        resizeMode: 'cover'
    },

    text: {

        color: "#000000",
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    },

    keyboardAvoidingView: {

        flex: 1,
        alignSelf: "center",
        justifyContent: "center"

    }
})
