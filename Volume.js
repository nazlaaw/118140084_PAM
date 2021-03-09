import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Volume extends Component {
    render() {
        return (
            <View style={{display: 'flex'}}>
                <View style={{textAlign: 'center'}}>
                    <Text> Volume Musik : {this.props.volumeMusic} </Text>
                    <Button onPress={this.props.pressUpMusic} title="Up Volume Music"/>
                    <Button onPress={this.props.pressDownMusic} title="Down Volume Music"/>
                </View>
                <View style={{textAlign: 'center'}}>
                    <Text> Volume Mic : {this.props.volumeMic} </Text>
                    <Button onPress={this.props.pressUpMic} title="Up Volume Mic"/>
                    <Button onPress={this.props.pressDownMic} title="Down Volume Mic"/>
                </View>
            </View>
        )
    }
}

const stateToProps = (state) => {
    return {
        volumeMic: state.volumeMic,
        volumeMusic: state.volumeMusic 
    }
}

const dispatchToProps = (dispatch) => {
    return {
        // btn volume mix
        pressUpMic: () => dispatch({type: 'VOLUME_UP_MIC'}),
        pressDownMic: () => dispatch({type: 'VOLUME_DOWN_MIC'}),


        pressUpMusic: () => dispatch({type: 'VOLUME_UP_MUSIC'}),
        pressDownMusic: () => dispatch({type: 'VOLUME_DOWN_MUSIC'}),
    }
}

export default connect(stateToProps, dispatchToProps)(Volume);

