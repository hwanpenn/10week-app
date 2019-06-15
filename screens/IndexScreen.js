import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {appReduxChange} from "../actions/app";
import {width, height} from "../constants/Layout";
import {connect} from "react-redux";
import {AsyncStorage,  Platform, StyleSheet,Image,View,StatusBar} from "react-native";
import {
    ScrollView
} from 'react-native';
import { Text,Content } from 'native-base';
import { Container, Header, Body, Right, Button, Icon, Title } from 'native-base';
import { Carousel } from '@ant-design/react-native';
import {Toast} from "antd-mobile-rn/lib/index.native";
import  {DeviceEventEmitter} from 'react-native';


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
        username:'',
        vip:'false'
    };
    static navigationOptions = {
        header: null,
    };

    async componentDidMount(){
        const thisTemp = this;
        AsyncStorage.getItem('firstOpen')
            .then((value) => {
            })
        AsyncStorage.getItem('username')
            .then((value) => {
                console.log(value)
                thisTemp.setState({
                    username:value?value:''
                })
            })
        AsyncStorage.getItem('vip')
            .then((value) => {
                thisTemp.setState({
                    vip:value?value:'false'
                })
            })
    }
    handleMenuClickNews = () => {
        // DeviceEventEmitter.emit('targetUrl','/mobile/newspagelist');
        this.props.navigation.navigate( 'News');
    };
    handleMenuClickVideo = () => {
        // DeviceEventEmitter.emit('targetUrl','/mobile/videopagelist');
        this.props.navigation.navigate( 'Video');
    };
    handleMenuClickRank = () => {
        this.props.navigation.navigate( 'Rank');
    };
    handleMenuClickBaseData = () => {
        if(this.state.username===''){
            Toast.fail('请先登录',1);
        }else{
            this.props.navigation.navigate( 'BaseData');
        }
    };
    handleMenuClickRecipe = () => {
        this.props.navigation.navigate( 'Recipe');
    };
    handleMenuClickBaseDataVip = () => {
            this.props.navigation.navigate( 'BaseDataVip');
    };
    handleMenuClickVipDataList = () => {
        this.props.navigation.navigate( 'VipDataList');
    };
    handleMenuClickChart = () => {
        this.props.navigation.navigate( 'Chart');
    };
    handleMenuClickTaskShow = () => {
        this.props.navigation.navigate( 'TaskShow');
    };
    handleMenuClickTask = () => {
        this.props.navigation.navigate( 'Task');
    };
    handleMenuClickPicture = () => {
        this.props.navigation.navigate( 'Picture');
    };
    handleMenuClickJoin = () => {
        if(this.state.username===''){
            Toast.fail('请先登录',1);
        }else{
            this.props.navigation.navigate( 'Rank');
        }
    };
    _handleIsOpenClickLogin = () => {
        AsyncStorage.setItem('username', (''), (error, result) => {
            if (!error) {
                this.setState({ username: '' });
            }
            AsyncStorage.setItem('vip', ('false'), (error, result) => {
                if (!error) {
                    this.setState({ username: '' });
                }
                this.props.navigation.navigate( 'Login');
            });
        });
    };
    _handleIsOpenClickLogout = () => {
        AsyncStorage.setItem('username', (''), (error, result) => {
            if (!error) {
                this.setState({ username: '' });
            }
            AsyncStorage.setItem('vip', ('false'), (error, result) => {
                if (!error) {
                    this.setState({ username: '' });
                }
                this.props.navigation.navigate( 'Login');
            });
        });
    };
   
    render() {
        return (
            <Container style={styles.container}>
            {Platform.OS === 'ios' ? 
            <StatusBar backgroundColor={'black'}  barStyle='dark-content' />
             : <Row style={{ height: height*20 , backgroundColor: 'black'}}>
            <StatusBar backgroundColor={'black'}  barStyle='dark-content' />
            </Row>}
               
                
                <Row style={{  height: height*10 }}></Row>
                <Header style={{  marginTop: -height*22 }} transparent>
                {Platform.OS === 'ios' ?<Body style={{alignItems: 'left',}} >
                <Title style={{textAlign:'left',marginLeft:Platform.OS === 'ios' ?width*5 : width*5 ,fontSize: 25,width:width*300,color:Platform.OS === 'ios' ?'black' : 'black'}}>{'欢迎加入十周挑战'}</Title>
                </Body>:
                <Body style={{}} >
                <Title style={{textAlign:'left',marginLeft:Platform.OS === 'ios' ?width*5 : width*5 ,fontSize: 25,width:width*300,color:Platform.OS === 'ios' ?'black' : 'black'}}>{'欢迎加入十周挑战'}</Title>
                </Body>
            }
                    
                    <Right>
                    {this.state.username===''?<Button  onPress={() => {
                        this._handleIsOpenClickLogin()
                    }} transparent>
                        <Icon style={{fontSize: 20, color: 'red'}} name="login" type='SimpleLineIcons'/>
                    </Button>:<Button  onPress={() => {
                        this._handleIsOpenClickLogout()
                    }} transparent>
                        <Icon style={{fontSize: 20, color: 'red'}} name="logout" type='SimpleLineIcons'/>
                    </Button>}
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
                           <Text style={{fontSize: 25,color:"black"}}>新闻列表</Text>
                           </Row>
                           <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                           <Text style={{fontSize: 15,color:"grey"}}>健身动态早知道</Text>
                           </Row>
                           <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                           <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                               <Button onPress={() => {
                                   this.handleMenuClickNews()
                               }} style={styles.menubutton} rounded>
                                   <Text style={{fontSize: 19}}>查看动态</Text>
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
                       <Text style={{fontSize: 25,color:"black"}}>健身视频</Text>
                       </Row>
                       <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                       <Text style={{fontSize: 15,color:"grey"}}>跟着视频学起来</Text>
                       </Row>
                       <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                       <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                           <Button onPress={() => {
                               this.handleMenuClickVideo()
                           }} style={styles.menubutton} rounded>
                               <Text style={{fontSize: 19}}>开始学习</Text>
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
                      <Text style={{fontSize: 25,color:"black"}}>排行榜</Text>
                      </Row>
                      <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                      <Text style={{fontSize: 15,color:"grey"}}>十周挑战排行版</Text>
                      </Row>
                      <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                      <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                          <Button onPress={() => {
                              this.handleMenuClickRank()
                          }} style={styles.menubutton} rounded>
                              <Text style={{fontSize: 19}}>查看榜单</Text>
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
                  <Text style={{fontSize: 25,color:"black"}}>基础数据</Text>
                  </Row>
                  <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                  <Text style={{fontSize: 15,color:"grey"}}>记录数据 对比效果</Text>
                  </Row>
                  <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                  <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                      <Button onPress={() => {
                          this.handleMenuClickBaseData()
                      }} style={styles.menubutton} rounded>
                          <Text style={{fontSize: 19}}>编辑数据</Text>
                      </Button>
                  </View>
                  </Row>
              </View>
              </Col>
          </Row>
                    <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
                     
                    {this.state.username===''? <Row style={{  height: height*182.5,
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
                           <Text style={{fontSize: 25,color:"black"}}>十周挑战</Text>
                           </Row>
                           <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                           <Text style={{fontSize: 15,color:"grey"}}>心动不如行动</Text>
                           </Row>
                           <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                           <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                               <Button onPress={() => {
                                   this.handleMenuClickJoin()
                               }} style={styles.menubutton} rounded>
                                   <Text style={{fontSize: 19}}>加入会员</Text>
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
                   </View>
                   </Col>
               </Row>:<Row></Row>}
            <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
                         


            {this.state.username!==''?<Row style={{  height: height*182.5,
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
                                            this.handleMenuClickRecipe()
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
                                <Text style={{fontSize: 25,color:"black"}}>每日打卡</Text>
                                </Row>
                                <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 15,color:"grey"}}>记录生活 记录健康</Text>
                                </Row>
                                <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                    <Button onPress={() => {
                                        this.handleMenuClickBaseDataVip()
                                    }} style={styles.menubutton} rounded>
                                        <Text style={{fontSize: 19}}>开始打卡</Text>
                                    </Button>
                                </View>
                                </Row>
                            </View>
                            </Col>
                        </Row>:<Row></Row>}
                        <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
                        


                        {this.state.username!==''?<Row style={{  height: height*182.5,
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
                                    <Text style={{fontSize: 25,color:"black"}}>打卡记录</Text>
                                    </Row>
                                    <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                    <Text style={{fontSize: 15,color:"grey"}}>打卡数据统计</Text>
                                    </Row>
                                    <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                    <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                        <Button onPress={() => {
                                            this.handleMenuClickVipDataList()
                                        }} style={styles.menubutton} rounded>
                                            <Text style={{fontSize: 19}}>查看数据</Text>
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
                                <Text style={{fontSize: 25,color:"black"}}>可视化</Text>
                                </Row>
                                <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 15,color:"grey"}}>健身数据可视化</Text>
                                </Row>
                                <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                    <Button onPress={() => {
                                        this.handleMenuClickChart()
                                    }} style={styles.menubutton} rounded>
                                        <Text style={{fontSize: 19}}>回顾统计</Text>
                                    </Button>
                                </View>
                                </Row>
                            </View>
                            </Col>
                        </Row>:<Row></Row>}
                        <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
                        
                        
                        {this.state.username!==''?<Row style={{  height: height*182.5,
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
                                    <Text style={{fontSize: 25,color:"black"}}>今日任务</Text>
                                    </Row>
                                    <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                    <Text style={{fontSize: 15,color:"grey"}}>每日任务 科学健身</Text>
                                    </Row>
                                    <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                    <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                        <Button onPress={() => {
                                            this.handleMenuClickTaskShow()
                                        }} style={styles.menubutton} rounded>
                                            <Text style={{fontSize: 19}}>查看任务</Text>
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
                                <Text style={{fontSize: 25,color:"black"}}>时间轴</Text>
                                </Row>
                                <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                                <Text style={{fontSize: 15,color:"grey"}}>记录健身每一天</Text>
                                </Row>
                                <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                                <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                    <Button onPress={() => {
                                        this.handleMenuClickTask()
                                    }} style={styles.menubutton} rounded>
                                        <Text style={{fontSize: 19}}>查看</Text>
                                    </Button>
                                </View>
                                </Row>
                            </View>
                            </Col>
                        </Row>:<Row></Row>}
                        <Row style={{ height: height*3,backgroundColor:"#fafafa" }}></Row>
                        
                        
                        {this.state.username!==''?<Row style={{  height: height*182.5,
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
                               <Text style={{fontSize: 25,color:"black"}}>前后对比</Text>
                               </Row>
                               <Row style={{  height: height*30, alignItems: 'center',justifyContent : "center" }}>
                               <Text style={{fontSize: 15,color:"grey"}}>每周对比 立竿见影</Text>
                               </Row>
                               <Row style={{ height: height*78 ,alignItems: 'center',justifyContent : "center",}}>
                               <View style={{ alignItems: 'center',justifyContent : "center",height : Platform.OS === "ios" ? 105.5 : 105.5}}>
                                   <Button onPress={() => {
                                       this.handleMenuClickPicture()
                                   }} style={styles.menubutton} rounded>
                                       <Text style={{fontSize: 19}}>照片比对</Text>
                                   </Button>
                               </View>
                               </Row>
                           </View>
                           
                       </Col>
                   </Row>:<Row></Row>}
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
        appReduxChange: (app) => {
            dispatch(appReduxChange(app))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexScreen);
