import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import {appReduxChange, appReduxTest} from "../actions/app";
import {connect} from "react-redux";


class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };
    // static navigationOptions = {
    //     header: null,
    // };

    render() {
        return (
            <View style={styles.container}>
                <Text>this is login~{this.props.app.username}</Text>
                <Button title="Sign in!" onPress={this._signInAsync} />
                <Button title="change" onPress={this.props.appReduxChange} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    return{
        app: state.app
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        appReduxTest: () => {
            dispatch(appReduxTest())
        },
        appReduxChange: () => {
            dispatch(appReduxChange())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInScreen);
