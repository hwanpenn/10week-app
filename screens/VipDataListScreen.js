import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { WebBrowser } from 'expo';
import { viewurl } from '../cfg/cfg.js';
import {  Row } from 'react-native-easy-grid';
import { height} from "../constants/Layout";
import Loadinggif from '../components/Loadinggif';
import { WebView,StatusBar} from 'react-native';

export default class VipDataListScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // headerTitle: 'null'
    
  };
  state={
    id:''
};
  async componentDidMount(){
    const thisTemp = this;
    AsyncStorage.getItem('id')
        .then((value) => {
          thisTemp.setState({
              id:value?value:'5cae30c19a6c6264b51fc555'
            })
        })
}
  renderLoading = ()=>{
    return(<Loadinggif />)
  }
  handleMessage = (e)=> {

    if(e.nativeEvent.data==="Index"){
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    const patchPostMessageFunction = function() {
      var originalPostMessage = window.postMessage;
    
      var patchedPostMessage = function(message, targetOrigin, transfer) { 
        originalPostMessage(message, targetOrigin, transfer);
      };
    
      patchedPostMessage.toString = function() { 
        return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
      };
    
      window.postMessage = patchedPostMessage;
    };
    
    const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';
    
    return (
      <View style={styles.container}>
       {Platform.OS === 'ios' ?<StatusBar barStyle='dark-content' />:<Row style={{ height: height*20 , backgroundColor: 'black'}}><StatusBar barStyle='dark-content' /></Row>}
     <WebView scrollEnabled={false}
        source={{uri: viewurl+"/mobile/vipdatalistpage/"+this.state.id}}
        style={{marginTop: Platform.OS === 'ios' ?0:5}}
        useWebKit={true}
        mixedContentMode='always'
        renderLoading={this.renderLoading}
        startInLoadingState
        injectedJavaScript={patchPostMessageJsCode}
        onMessage={(e) => {
          this.handleMessage(e)
      }}
      />
    </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );
      const learnMoreButtonBaidu = (
        <Text onPress={this._handleLearnMorePressBaidu} style={styles.helpLinkText}>
          BaiDu
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}.and {learnMoreButtonBaidu}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };
  _handleLearnMorePressBaidu = () => {
    WebBrowser.openBrowserAsync('https://baidu.com');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
