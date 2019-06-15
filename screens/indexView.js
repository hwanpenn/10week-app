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
        AsyncStorage.setItem('firstOpen', ('false'), (error, result) => {
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
                <Row style={{  height: height*12 }}> </Row>
                <Header transparent>
                    <Body style={{}} >
                    <Title style={{fontSize: 25,width:width*300,marginLeft:width*60}}>欢迎{this.state.username.slice(0,1)}加入十周挑战</Title>
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
                            <CardItem  cardBody>
                                <Image style={{ width: width*351,height: height*137.5, flex: 1 }} source={item.image} />
                            </CardItem>
                        </Card>
                    }
                />
                <Content />
                <ScrollView style={styles.container1} contentContainerStyle={styles.contentContainer}>
                    <Grid>
                        <Row style={{  height: height*182.5,
                             }}>
                            <Col style={{width:  width*182.5 ,}}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu1.png')}/>
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 ,}}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu2.png')}/>
                            </Col>
                        </Row>
                        <Row style={{ height: height*3 }}></Row>
                        <Row style={{  height: height*182.5,
                            }}>
                            <Col style={{width:  width*182.5 ,}}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu3.png')}/>
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 }}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu4.png')}/>
                            </Col>
                        </Row>
                        <Row style={{ height: height*3 }}></Row>
                        <Row style={{  height: height*182.5,}}>
                            <Col style={{width:  width*182.5 ,}}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu5.png')}/>
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 }}>
                            </Col>
                        </Row>
                    </Grid>
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
