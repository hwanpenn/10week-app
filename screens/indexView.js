import React, { Component } from 'react';
// import { Container, Header,Text,Item, Input, Icon,Content,Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {appReduxChange, appReduxTest} from "../actions/app";
import {width, height} from "../constants/Layout";
import {connect} from "react-redux";
import {AsyncStorage, Dimensions, Platform, StyleSheet,TouchableHighlight,Image,View,StatusBar} from "react-native";
import {
    ScrollView,
} from 'react-native';
// import {   } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {  Footer, FooterTab, Badge } from 'native-base';
import { Text,Item, Input,Content,DeckSwiper, Card, CardItem, Thumbnail } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {urlDev} from "../constants/Url";
import axios from "axios/index";
import {Toast} from "antd-mobile-rn/lib/index.native";

const cards = [
    {
        text: 'Card 1',
        name: 'One',
        image: require('../assets/images/Advertisement1.png'),
    },
    {
        text: 'Card 2',
        name: 'One',
        image: require('../assets/images/Advertisement2.png'),
    },
    {
        text: 'Card 3',
        name: 'One',
        image: require('../assets/images/Advertisement3.png'),
    },

];
class RegistScreen extends Component {
    state={
        gettingCode:false,
    gettingCodeTime:0,
        username:''
    };
    static navigationOptions = {
        header: null,
    };
    async componentDidMount(){
        const thisTemp = this;
        AsyncStorage.getItem('username')
            .then((value) => {
                thisTemp.setState({
                    username:value
                })
            })
        // console.log(width)
    }
    _handleIsOpenClick = () => {
        this.setState({ gettingCode: true, gettingCodeTime:60});
        let stateTemp = this;
        let timer = null;
        timer = setInterval(function () {
            if (stateTemp.state.gettingCodeTime > 0) {
                stateTemp.setState({ gettingCodeTime: stateTemp.state.gettingCodeTime-1 });
            }else if(stateTemp.state.gettingCodeTime === 0){
                stateTemp.setState({ gettingCode: false });
            }
            else {
                clearInterval(timer);
            }
        }, 1000);
    };
    _handleIsOpenClick1 = () => {
        AsyncStorage.setItem('firstOpen', JSON.stringify('false'), (error, result) => {
            if (!error) {
                console.log("设置成功")
                this.setState({ firstOpen: false });
            }
        });
    };
    _handleIsOpenClick3 = () => {
        AsyncStorage.setItem('firstOpen', JSON.stringify('false'), (error, result) => {
            if (!error) {
                console.log("设置成功")
                this.setState({ firstOpen: false });
            }
        });
    };
    render() {
        // const
        return (
            <Container>
                {/*<Header />*/}
                <Row style={{  height: height*12 }}> </Row>
                <Header transparent>
                    {/*<Left>*/}
                        {/*<Button transparent>*/}
                            {/*<Icon style={{marginLeft:width*15 }} name="arrow-back" />*/}
                        {/*</Button>*/}
                    {/*</Left>*/}
                    <Body style={{}} >
                    <Title style={{fontSize: 25,width:width*300,marginLeft:width*60}}>欢迎{this.state.username.slice(0,1)}加入十周挑战</Title>
                    // <Title style={{fontSize: 25,width:width*300,marginLeft:width*60}}>欢迎{this.state.username.substring(realName.length-1)}加入十周挑战</Title>
                    // <Title style={{fontSize: 25,width:width*300,marginLeft:width*60}}>欢迎{this.state.username.substring(realName.length-1)}加入十周挑战</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="envelope" type='SimpleLineIcons'/>
                            <Badge style={{ height: height*15,width:width*15,marginLeft:-(width*8),marginTop:-(width*0)}}><Text style={{marginLeft:-(width*3),marginTop:-(width*5),fontSize: 10}} >2</Text></Badge>

                        </Button>
                    </Right>
                </Header>
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                        <Card style={{width: width*351, elevation: 3 ,marginLeft:width*12}}>
                            {/*<CardItem>*/}
                                {/*<Left>*/}
                                    {/*<Thumbnail source={item.image} />*/}
                                    {/*<Body>*/}
                                    {/*<Text>{item.text}</Text>*/}
                                    {/*<Text note>NativeBase</Text>*/}
                                    {/*</Body>*/}
                                {/*</Left>*/}
                            {/*</CardItem>*/}
                            <CardItem  cardBody>
                                <Image style={{ width: width*351,height: height*137.5, flex: 1 }} source={item.image} />
                            </CardItem>
                            {/*<CardItem>*/}
                                {/*<Icon name="heart" style={{ color: '#ED4A6A' }} />*/}
                                {/*<Text>{item.name}</Text>*/}
                            {/*</CardItem>*/}
                        </Card>
                    }
                />
                <Content />
                <ScrollView style={styles.container1} contentContainerStyle={styles.contentContainer}>
                    <Grid>
                        {/*<Col style={{  height: 200 }}></Col>*/}
                        {/*<Col style={{ , height: 200 }}></Col>*/}
                        <Row style={{  height: height*182.5,
                             }}>
                            {/*<Text style={{fontSize: 18}}>重置密码</Text>*/}
                            <Col style={{width:  width*182.5 ,}}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu1.png')}/>
                                {/*<Row style={{ backgroundColor: '#635DB7', height: height*88 }}></Row>*/}
                                {/*<Row style={{ backgroundColor: '#635DB7', height: height*88 }}></Row>*/}
                                {/*<Row style={{ backgroundColor: '#635DB7', height: height*88 }}></Row>*/}
                                {/*<Ionicons name="ios-arrow-back" size={30} color="black" />*/}
                                {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                    {/*this._handleClickVideo()*/}
                                {/*}}>*/}
                                    {/*<Image style={start.backgroundImage1} source={require('../assets/images/menu1.png')}/>*/}
                                {/*</TouchableHighlight>*/}
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 ,}}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu2.png')}/>
                                {/*<Grid>*/}
                                    {/*<Row style={{  height: height*25,marginTop:height*20*/}
                                    {/*}}>*/}
                                        {/*<Text style={{fontSize: 18}}>私人订制</Text>*/}
                                    {/*</Row>*/}
                                    {/*<Row style={{ height: height*16.5,marginTop:height*20 }}>*/}
                                        {/*<Text style={{fontSize: 12}}>快速私人订制运动方案</Text>*/}
                                    {/*</Row>*/}
                                    {/*<Row style={{  height: height*40,marginTop:height*33.5*/}
                                    {/*}}>*/}
                                        {/*<Button onPress={() => {*/}
                                            {/*this._handleIsOpenClick1()*/}
                                        {/*}} style={styles.registButton} rounded>*/}
                                            {/*<Text style={{ fontSize:22 }} >查看定制方案</Text>*/}
                                        {/*</Button>*/}
                                    {/*</Row>*/}
                                {/*</Grid>*/}
                                {/*<Text style={{fontSize: 18}}>重置密码</Text>*/}
                                {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                    {/*this._handleClickHealth()*/}
                                {/*}}>*/}
                                    {/*<Image style={start.backgroundImage2} source={require('../assets/images/menu2.png')}/>*/}
                                {/*</TouchableHighlight>*/}
                            </Col>
                        </Row>
                        <Row style={{ height: height*3 }}></Row>
                        <Row style={{  height: height*182.5,
                            }}>
                            {/*<Text style={{fontSize: 18}}>重置密码</Text>*/}
                            <Col style={{width:  width*182.5 ,}}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu3.png')}/>
                                {/*<Ionicons name="ios-arrow-back" size={30} color="black" />*/}
                                {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                    {/*this._handleClickVideo()*/}
                                {/*}}>*/}
                                    {/*<Image style={start.backgroundImage1} source={require('../assets/images/menu1.png')}/>*/}
                                {/*</TouchableHighlight>*/}
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 }}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu4.png')}/>
                                {/*<Text style={{fontSize: 18}}>重置密码</Text>*/}
                                {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                    {/*this._handleClickHealth()*/}
                                {/*}}>*/}
                                    {/*<Image style={start.backgroundImage2} source={require('../assets/images/menu2.png')}/>*/}
                                {/*</TouchableHighlight>*/}
                            </Col>
                        </Row>
                        <Row style={{ height: height*3 }}></Row>
                        <Row style={{  height: height*182.5,}}>
                            {/*<Text style={{fontSize: 18}}>重置密码</Text>*/}
                            <Col style={{width:  width*182.5 ,}}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu5.png')}/>
                                {/*<Ionicons name="ios-arrow-back" size={30} color="black" />*/}
                                {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                    {/*this._handleClickVideo()*/}
                                {/*}}>*/}
                                    {/*<Image style={start.backgroundImage1} source={require('../assets/images/menu1.png')}/>*/}
                                {/*</TouchableHighlight>*/}
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 }}>
                                {/*<Text style={{fontSize: 18}}>重置密码</Text>*/}
                                {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                    {/*this._handleClickHealth()*/}
                                {/*}}>*/}
                                    {/*<Image style={start.backgroundImage2} source={require('../assets/images/menu2.png')}/>*/}
                                {/*</TouchableHighlight>*/}
                            </Col>
                        </Row>
                    </Grid>

                    {/*<View style={{flexDirection : "row", justifyContent : "flex-start",height:191,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >*/}
                        {/*<View style={{padding:10,width: 183,height:191,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >*/}
                            {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                {/*this._handleClickVideo()*/}
                            {/*}}>*/}
                                {/*<Image style={start.backgroundImage1} source={require('../assets/images/menu1.png')}/>*/}
                            {/*</TouchableHighlight>*/}
                        {/*</View>*/}
                        {/*<View style={{width: 183,height:156,marginLeft:Platform.OS === "ios" ? 10 : 8,marginTop:Platform.OS === "ios" ? 0 : 0  }} >*/}
                            {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                {/*this._handleClickHealth()*/}
                            {/*}}>*/}
                                {/*<Image style={start.backgroundImage2} source={require('../assets/images/menu2.png')}/>*/}
                            {/*</TouchableHighlight>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                    {/*<View style={{flexDirection : "row", justifyContent : "flex-start",height:191,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >*/}
                        {/*<View style={{padding:10,width: 183,height:156,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >*/}
                            {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                {/*this._handleClickPunch()*/}
                            {/*}}>*/}
                                {/*<Image style={start.backgroundImage3} source={require('../assets/images/menu3.png')}/>*/}
                            {/*</TouchableHighlight>*/}
                        {/*</View>*/}
                        {/*<View style={{width: 183,height:191,marginLeft:Platform.OS === "ios" ? 10 : 8,marginTop:Platform.OS === "ios" ? 0 : 0  }} >*/}
                            {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                {/*this._handleClickCustom()*/}
                            {/*}}>*/}
                                {/*<Image style={start.backgroundImage4} source={require('../assets/images/menu4.png')}/>*/}
                            {/*</TouchableHighlight>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                    {/*<View style={{flexDirection : "row", justifyContent : "flex-start",height:191,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >*/}
                        {/*<View style={{padding:10,width: 183,height:156,marginLeft:Platform.OS === "ios" ? 0 : 0,marginTop:Platform.OS === "ios" ? 0 : 0  }} >*/}
                            {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                {/*this._handleClickWorkout()*/}
                            {/*}}>*/}
                                {/*<Image style={start.backgroundImage5} source={require('../assets/images/menu5.png')}/>*/}
                            {/*</TouchableHighlight>*/}
                        {/*</View>*/}
                    {/*</View>*/}


                </ScrollView>
                <Footer style={{height:height*49,backgroundColor: '#ffffff'}}>
                    <FooterTab >
                        <Button  vertical>
                            <Icon active name="ios-home" />
                            <Text style={{fontSize:12}}>首页</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="ios-time" />
                            <Text>记录</Text>
                        </Button>
                        <Button vertical>
                            <Image style={start.iconImage} source={require('../assets/icons/plus.png')}/>
                        </Button>
                        <Button vertical >
                            <Icon  name="ios-stats" />
                            <Text>排行榜</Text>
                        </Button>
                        <Button active vertical>
                            <Icon name="ios-apps" />
                            <Text>我的</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     getCode: {
//         width: width*85,
//         height: height*26,
//         // backgroundColor: '#EB632E',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop:width*10,
//         borderStyle:'solid',
//         borderWidth:1,
//         borderColor:'#EB632E',
//     },
//     gettingCode: {
//         width: width*85,
//         height: height*26,
//         // backgroundColor: '#EB632E',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop:width*10,
//         borderStyle:'solid',
//         borderWidth:1,
//         borderColor:'#868686',
//     },
//     welcomeWord: {
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     registButton: {
//         width: width*200,
//         height:height*49,
//         backgroundColor: '#EB632E',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor:"#f4f4f4",
        marginTop:-(height*250)
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonContainer1: {
        width: Platform.OS === "ios" ? 24 : 24,
        height: Platform.OS === "ios" ? 24 : 24,
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: height*5,
        paddingLeft: height*3.5,

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
    menuButton: {
        width: width*150,
        height:height*40,
        backgroundColor: '#EB632E',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
const start = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconImage: {
        width: width*44,
        height: height*44,
    },
    backgroundImage: {
        width: width*182.5,
        height: height*182.5,
    },
    backgroundImage1: {
        // marginTop:-10,
        // marginLeft:-10,
        width: width*182.5,
        height: height*182.5,
    },
    backgroundImage2: {
        width: width*182.5,
        height: height*182.5,
    },
    backgroundImage3: {
        marginTop:0,
        marginLeft:-10,
        width: Platform.OS === "ios" ? 183 : 144,
        height: Platform.OS === "ios" ? 156 : 123,
    },
    backgroundImage4: {
        marginTop:-24,
        marginLeft:0,
        width: Platform.OS === "ios" ? 183 : 144,
        height: Platform.OS === "ios" ? 191 : 150,
    },
    backgroundImage5: {
        marginTop:-24,
        marginLeft:-10,
        width: Platform.OS === "ios" ? 183 : 144,
        height: Platform.OS === "ios" ? 156 : 123,
    }

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

export default connect(mapStateToProps,mapDispatchToProps)(RegistScreen);
