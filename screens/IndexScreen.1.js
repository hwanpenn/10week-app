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
import { Carousel } from '@ant-design/react-native';
// import { Grid } from '@ant-design/react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import {width, height} from "./constants/Layout";


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
class IndexScreen extends Component {
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
                    username:value?value:''
                })
            })
        // console.log(width)
    }
    handleMenuClick01 = () => {
        this.props.navigation.navigate( 'Recipe');
    };
    handleMenuClick02 = () => {
        this.props.navigation.navigate( 'News');
    };
    handleMenuClick03 = () => {
        this.props.navigation.navigate( 'News');
    };
    handleMenuClick04 = () => {
        this.props.navigation.navigate( 'News');
    };
    handleMenuClick05 = () => {
        this.props.navigation.navigate( 'News');
    };
    handleMenuClick06 = () => {
        this.props.navigation.navigate( 'News');
    };
    handleMenuClick07 = () => {
        this.props.navigation.navigate( 'News');
    };
    handleMenuClick08 = () => {
        this.props.navigation.navigate( 'News');
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
                    
                    </Right>
                </Header>
              

                <Carousel
                style={styles.wrapper}
                selectedIndex={2}
                autoplay
                infinite
                afterChange={this.onHorizontalSelectedIndexChange}
              >
                <View
                  style={[styles.containerHorizontal]}
                >
                <Image style={{ width: width*351,height: height*137.5,  flex: 1 }} source={cards[0].image} />
                </View>
                <View
                  style={[styles.containerHorizontal]}
                >
                <Image style={{width: width*351,height: height*137.5,  flex: 1 }} source={cards[1].image} />
                </View>
                <View
                  style={[
                    styles.containerHorizontal
                    
                  ]}
                >
                <Image style={{width: width*351,height: height*137.5,  flex: 1 }} source={cards[2].image} />
                </View>
              </Carousel>

                <Content />
                <ScrollView style={styles.container1} contentContainerStyle={styles.contentContainer}>
                    <Grid>
                        <Row style={{  height: height*182.5,
                             }}>
                            <Col style={{width:  width*182.5 }}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu11.png')}/>
                                <View style={{
                                    position: "absolute",
                                    zIndex: 9998,
                                    alignItems: 'center',justifyContent : "center"
                                }}>
                                    <View style={{flex: 1}}/>
                                    <Row style={{  height: height*65, alignItems: 'center',justifyContent : "center" }}>
                                    <Text style={{fontSize: 25,color:"black"}}>今日食谱</Text>
                                    </Row>
                                    <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                    <Text style={{fontSize: 15,color:"grey"}}>健康饮食每一天</Text>
                                    </Row>
                                    <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                    <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                        <Button onPress={() => {
                                            this.handleMenuClick01()
                                        }} style={styles.menubutton} rounded>
                                            <Text style={{fontSize: 19}}>查看食谱</Text>
                                        </Button>
                                    </View>
                                    </Row>
                                </View>
                                
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 ,}}>
                            <Image style={start.backgroundImage} source={require('../assets/images/menu11.png')}/>
                            <View style={{
                                position: "absolute",
                                zIndex: 9998,
                                alignItems: 'center',justifyContent : "center"
                            }}>
                                <View style={{flex: 1}}/>
                                <Row style={{  height: height*65, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 25,color:"black"}}>健身训练</Text>
                                </Row>
                                <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 15,color:"grey"}}>跟着训练节奏动起来</Text>
                                </Row>
                                <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                    <Button onPress={() => {
                                        this.handleMenuClick()
                                    }} style={styles.menubutton} rounded>
                                        <Text style={{fontSize: 19}}>开始训练</Text>
                                    </Button>
                                </View>
                                </Row>
                            </View>
                            </Col>
                        </Row>
                        <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
                        <Row style={{  height: height*182.5,
                             }}>
                            <Col style={{width:  width*182.5 }}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu11.png')}/>
                                <View style={{
                                    position: "absolute",
                                    zIndex: 9998,
                                    alignItems: 'center',justifyContent : "center"
                                }}>
                                    <View style={{flex: 1}}/>
                                    <Row style={{  height: height*65, alignItems: 'center',justifyContent : "center" }}>
                                    <Text style={{fontSize: 25,color:"black"}}>私人订制</Text>
                                    </Row>
                                    <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                    <Text style={{fontSize: 15,color:"grey"}}>查看定制方案</Text>
                                    </Row>
                                    <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                    <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                        <Button onPress={() => {
                                            this.handleMenuClick()
                                        }} style={styles.menubutton} rounded>
                                            <Text style={{fontSize: 19}}>查看定制方案</Text>
                                        </Button>
                                    </View>
                                    </Row>
                                </View>
                                
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 ,}}>
                            <Image style={start.backgroundImage} source={require('../assets/images/menu11.png')}/>
                            <View style={{
                                position: "absolute",
                                zIndex: 9998,
                                alignItems: 'center',justifyContent : "center"
                            }}>
                                <View style={{flex: 1}}/>
                                <Row style={{  height: height*65, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 25,color:"black"}}>健身训练</Text>
                                </Row>
                                <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 15,color:"grey"}}>跟着训练节奏动起来</Text>
                                </Row>
                                <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                    <Button onPress={() => {
                                        this.handleMenuClick()
                                    }} style={styles.menubutton} rounded>
                                        <Text style={{fontSize: 19}}>开始训练</Text>
                                    </Button>
                                </View>
                                </Row>
                            </View>
                            </Col>
                        </Row>
                        <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
                        <Row style={{  height: height*182.5,
                             }}>
                            <Col style={{width:  width*182.5 }}>
                                <Image style={start.backgroundImage} source={require('../assets/images/menu11.png')}/>
                                <View style={{
                                    position: "absolute",
                                    zIndex: 9998,
                                    alignItems: 'center',justifyContent : "center"
                                }}>
                                    <View style={{flex: 1}}/>
                                    <Row style={{  height: height*65, alignItems: 'center',justifyContent : "center" }}>
                                    <Text style={{fontSize: 25,color:"black"}}>私人订制</Text>
                                    </Row>
                                    <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                    <Text style={{fontSize: 15,color:"grey"}}>查看定制方案</Text>
                                    </Row>
                                    <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                    <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                        <Button onPress={() => {
                                            this.handleMenuClick()
                                        }} style={styles.menubutton} rounded>
                                            <Text style={{fontSize: 19}}>查看定制方案</Text>
                                        </Button>
                                    </View>
                                    </Row>
                                </View>
                                
                            </Col>
                            <Col style={{width:  width*182.5,marginLeft:width*3 ,}}>
                            <Image style={start.backgroundImage} source={require('../assets/images/menu11.png')}/>
                            <View style={{
                                position: "absolute",
                                zIndex: 9998,
                                alignItems: 'center',justifyContent : "center"
                            }}>
                                <View style={{flex: 1}}/>
                                <Row style={{  height: height*65, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 25,color:"black"}}>健身训练</Text>
                                </Row>
                                <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 15,color:"grey"}}>跟着训练节奏动起来</Text>
                                </Row>
                                <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                    <Button onPress={() => {
                                        this.handleMenuClick()
                                    }} style={styles.menubutton} rounded>
                                        <Text style={{fontSize: 19}}>开始训练</Text>
                                    </Button>
                                </View>
                                </Row>
                            </View>
                            </Col>
                        </Row>
                        <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
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
                        <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
                       
                    </Grid>
                </ScrollView>
               
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor:"#f4f4f4",
        marginTop:-(height*380)
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
    },
    wrapper: {
        backgroundColor: '#fff',
      },
      containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
      },
      containerVertical: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
      },
      text: {
        color: '#fff',
        fontSize: 36,
      },
      menubutton: {
        width: width*130,
        height: height*35,
        backgroundColor: '#EB632E',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:width*25
      },
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

export default connect(mapStateToProps,mapDispatchToProps)(IndexScreen);
