import React from 'react';
import {Platform, StatusBar, StyleSheet, View,Dimensions, ScrollView, Image, AsyncStorage, SafeAreaView} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import store from './store'
import {width, height} from "./constants/Layout";
import {Provider} from 'react-redux'
import {  Button, Text } from 'native-base';
// import { ScreenOrientation } from 'expo';


export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
    //默认是第一次打开
    firstOpen: false,
    // firstOpen: true,
  };


  async componentWillMount(){
      await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      await Font.loadAsync(
        'antoutline',
        // eslint-disable-next-line
        require('@ant-design/icons-react-native/fonts/antoutline.ttf')
      );
  
      await Font.loadAsync(
        'antfill',
        // eslint-disable-next-line
        require('@ant-design/icons-react-native/fonts/antfill.ttf')
      );
      AsyncStorage.getItem('firstOpen')
          .then((value) => {
              if( value !== 'false'){
                  this.setState({ firstOpen: true });
              }
          })
  }
  _handleIsOpenClick = () => {
        AsyncStorage.setItem('firstOpen', 'false', (error, result) => {
            if (!error) {
                // console.log("设置成功")
                this.setState({ firstOpen: false });
            }
        });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
        if (this.state.firstOpen ) {
            return (
                    <ScrollView
                    contentContainerStyle={{
                        width: Dimensions.get('window').width * 4,
                        height: Dimensions.get('window').height
                    }}
                    bounces={false}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>

                    <Image style={start.backgroundImage} source={require('./assets/images/guide1.png')}/>
                    <View style={{
                        position: "absolute",
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                        zIndex: 9998,
                        left: 0,
                    }}>
                        <View style={{flex: 1}}/>
                        <View style={{ flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                            <Button onPress={() => {
                                this._handleIsOpenClick()
                            }} style={styles.welcome} rounded>
                                <Text style={{fontSize: 19}}>现在就加入</Text>
                            </Button>
                        </View>
                    </View>
                    <Image style={start.backgroundImage} source={require('./assets/images/guide2.png')}/>
                    <View style={{
                        position: "absolute",
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                        zIndex: 9998,
                        left: Dimensions.get("window").width,
                    }}>
                        <View style={{flex: 1}}/>
                        <View style={{ flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                            <Button onPress={() => {
                                this._handleIsOpenClick()
                            }} style={styles.welcome} rounded>
                                <Text style={{fontSize: 19}}>现在就加入</Text>
                            </Button>
                        </View>
                    </View>
                    <Image style={start.backgroundImage} source={require('./assets/images/guide3.png')}/>
                    <View style={{
                        position: "absolute",
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                        zIndex: 9998,
                        right: Dimensions.get("window").width,
                    }}>
                        <View style={{flex: 1}}/>
                        <View style={{ flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                            <Button onPress={() => {
                                this._handleIsOpenClick()
                            }} style={styles.welcome} rounded>
                                <Text style={{fontSize: 19}}>现在就加入</Text>
                            </Button>
                        </View>
                    </View>
                    <Image style={start.backgroundImage} source={require('./assets/images/guide4.png')}/>

                    <View style={{
                        position: "absolute",
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                        zIndex: 9999,
                        right: 0
                    }}>
                        <View style={{flex: 1}}/>
                        <View style={{ flexDirection : "row",justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                            <Button onPress={() => {
                                this._handleIsOpenClick()
                            }} style={styles.welcome} rounded>
                            <Text style={{fontSize: 19}}>现在就加入</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <SafeAreaView style={styles.safeArea}>
                    <Provider store={store}>
                        <View style={styles.container}>
                            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                            <AppNavigator />
                        </View>
                        {/*<Container style={styles.container}>*/}
                            {/*{Platform.OS === 'ios' && <StatusBar barStyle="default" />}*/}
                            {/*<AppNavigator />*/}
                        {/*</Container>*/}
                    </Provider>
                </SafeAreaView>
                    

            );
        }

    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/menu11.png'),
        require('./assets/images/guide1.png'),
        require('./assets/images/guide2.png'),
        require('./assets/images/guide3.png'),
        require('./assets/images/guide4.png'),
        require('./assets/images/Advertisement1.png'),
        require('./assets/images/Advertisement2.png'),
        require('./assets/images/Advertisement3.png'),
        require('./assets/icons/facebookIcon.png'),
        // require('./assets/icons/getVerifiyCode.png'),
        require('./assets/icons/wechatIcon.png'),
      ]),
      Font.loadAsync({
        // ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    width: width*271.5,
    height: height*49,
    backgroundColor: '#EB632E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#eee'
  }
});
const start = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }

});
