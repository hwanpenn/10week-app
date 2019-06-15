import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';


export default class AuthLoadingScreen extends React.Component {
    async componentDidMount(){
        AsyncStorage.getItem('username')
            .then((value) => {
                    this.props.navigation.navigate(value ? 'Main' : 'Main');
                    // this.props.navigation.navigate(value ? 'Main' : 'Regist');
                    // this.props.navigation.navigate(value ? 'Main' : 'Reset');
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
