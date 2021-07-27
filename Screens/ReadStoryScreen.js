import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

import db from '../config';
import StoryComponent from '../Components/StoryComponent'

export default class ReadStoryScreen extends Component {

    constructor() {
        super()
        this.state = {
            search: '',
            stories: []
        }
    }

    componentDidMount() {
        this.search(null, "!=");
    }
    search = async (word, type) => {
        var array = [];
        var story = await db.collection("stories").where("title", type, word)
            .get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    console.log(doc.data())
                    array.push(doc.data());

                })
                this.setState({
                    stories: array
                })
            }).catch((error) => {
                console.log("Error getting document:", error);
            })

    }
    
    updateSearch = (search) => {
        this.setState({
            search: search
        });

        if(search!=""){

            this.search(search, "==")

        }else{

            this.search(null, "!=")

        }

        
    };

    render() {
        return (
            <View>
                <Text style={styles.heading}>ReadStoryScreen</Text>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    containerStyle={styles.searchBox}
                    inputContainerStyle={styles.searchBoxIn}
                />

                <View>
                <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={true}
              automaticallyAdjustContentInsets={true}
              style={{ marginTop: 10, marginBottom: 10 }}>
                    {this.state.stories.map(item => {
                        return (
                            <StoryComponent key={item.title} story={item} />
                        );
                    })}

                    </ScrollView>
                </View>


            </View >
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
        marginTop: 30,

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
    searchBox: {

        marginTop: 20,
        backgroundColor: "pink"

    },

    searchBoxIn: {

        backgroundColor: "pink"

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
    }
})
