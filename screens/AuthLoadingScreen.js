import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';


export default class AuthLoadingScreen extends React.Component {
    async componentWillMount(){
        AsyncStorage.getItem('userToken')
            .then((value) => {
                    // 没有token，默认跳转登录注册页
                    // this.props.navigation.navigate(value ? 'Main' : 'Main');
                    this.props.navigation.navigate(value ? 'Main' : 'Regist');
                    // this.props.navigation.navigate(value ? 'Main' : 'Reset');
                    // this.props.navigation.navigate(value ? 'Main' : 'FindBack');
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
