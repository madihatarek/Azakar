import * as React from 'react';
// import React, { Component } from 'react';
import {
    View,
    Text,
   
} from 'react-native';
export default class TestApp extends React.Component {
    render()
    {
        return(
            <>
            <View style={{
                backgroundColor:"#ff0",
                justifyContent:"center",alignItems:"center"
            
            }}>
                <Text style={{
                    fontSize:50,
                    color:"#fff",
                }}>madiha</Text>
            </View>
            
            </>
        )
    }
}