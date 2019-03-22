import React, { Component } from 'react';
import { Container, Header,Text,Item, Input, Icon,Content,Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {appReduxChange, appReduxTest} from "../actions/app";
import {width, height} from "../constants/Layout";
import {connect} from "react-redux";
import {AsyncStorage, Dimensions, Platform, StyleSheet,TouchableHighlight,Image,View,StatusBar} from "react-native";
// import {   } from 'native-base';
import {   Left, Body, Right, Title } from 'native-base';
import {urlDev} from "../constants/Url";
import axios from "axios/index";
import {Toast} from "antd-mobile-rn/lib/index.native";

class LoginScreen extends Component {
    state={
        gettingCode:false,
    gettingCodeTime:0,
    password:'',
    mobile:''
    };
    static navigationOptions = {
        header: null,
    };
    async componentWillMount(){
        // console.log(width)
        // const isAvailable = await Expo.SMS.isAvailableAsync();
        // if (isAvailable) {
        //     const { result } = await Expo.SMS.sendSMSAsync(['18770025870'], 'My sample HelloWorld message');
        // // do your SMS stuff here
        // } else {
        // // misfortune... there's no SMS available on this device
        // }
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
        const thisaTemp = this;
        // alert(this.state.username)
        if(this.state.mobile===''){
            Toast.fail('手机号不能为空 !',1);
        }else
        if(this.state.password===''){
            Toast.fail('密码不能为空 !',1);
        }else {
            // let params ={
            //     realName: this.state.username,
            //     mobile: '',
            //     password: this.state.password,
            // }
            AsyncStorage.getItem('mobile')
                .then((value) => {
                    const params ={
                        // realName: this.state.username,
                        mobile: this.state.mobile,
                        password: this.state.password,
                        // role: this.state.roleId,
                    }
                    // console.log(params)
                    axios.post(urlDev+'/api/user/access/login',params)
                        .then(function (response) {
                            console.log("登录反回结果");
                            console.log(response.data);
                            // console.log(response.data.data.realName);
                            if(response.data.code===0){
                                Toast.success('登录成功 !',1);
                                AsyncStorage.setItem('username', (response.data.data.realName), (error, result) => {
                                    if (!error) {
                                        // console.log("设置成功")
                                        // this.setState({ firstOpen: false });
                                    }
                                });
                                AsyncStorage.setItem('token', (response.data.data.token), (error, result) => {
                                    if (!error) {
                                        // console.log("设置成功")
                                        // this.setState({ firstOpen: false });
                                    }
                                });
                                // thisaTemp.props.navigation.navigate( 'Index');
                            }else {
                                Toast.fail(response.data.msg,1);
                            }
                            // this.setState({mobile:''})
                            // thisTemp.setState({
                            //     code:response.data.data.code
                            // })
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
        }
    };
    _handleIsOpenClick3 = () => {
        this.props.navigation.navigate( 'FindBack');
        // AsyncStorage.setItem('firstOpen', JSON.stringify('false'), (error, result) => {
        //     if (!error) {
        //         console.log("设置成功")
        //         this.setState({ firstOpen: false });
        //     }
        // });
    };
    render() {
        // const
        return (
            <Container>
                {/*<StatusBar*/}
                    {/*// backgroundColor="blue"*/}
                    {/*backgroundColor={'green'}*/}
                    {/*barStyle="light-content"*/}
                {/*/>*/}
                {/*<Header />*/}
                <Grid>
                    {/*<Row style={{ backgroundColor: '#635DB7', height: height*88 }}></Row>*/}
                    {/*<Col style={{ backgroundColor: '#635DB7', height: height*88 }}></Col>*/}
                    {/*<Row style={{  height: height*88 }}></Row>*/}
                    <Row style={{  height: height*12 }}></Row>
                    {/*<Row style={{  height: height*76 }}>*/}
                        <Header  transparent>
                            <Left>
                                <Button onPress={() => this.props.navigation.goBack()} transparent>
                                    <Icon style={{marginLeft:width*15 }} name="arrow-back" />
                                </Button>
                            </Left>
                            <Body>
                            {/*<Title style={{fontSize: 18}}>重置密码</Title>*/}
                            </Body>
                            <Right>
                                <Button transparent>
                                    {/*<Text>Cancel</Text>*/}
                                </Button>
                            </Right>
                        </Header>
                    {/*</Row>*/}
                    <Row style={{  height: height*12 }}></Row>
                    <Row style={{  height: height*114,
                        justifyContent: 'center' }}>
                        <Text style={{fontSize: 32}}>欢迎回来</Text>
                    </Row>
                    <Row style={{  height: height*67,
                        justifyContent: 'center' }}>
                        {/* <Content  > */}
                            <Item style={{  width: width*315,marginBottom:30 }} >
                                <Input onChangeText={(text) => this.setState({mobile:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888"  placeholder='手机号'/>
                                {/*<Icon name='checkmark-circle' />*/}
                            </Item>
                        {/* </Content> */}
                    </Row>
                    <Row style={{  height: height*55,
                        justifyContent: 'center' }}>
                        {/* <Content  > */}
                            <Item style={{  width: width*315,marginBottom:15 }} >
                                <Input secureTextEntry={true} inputType="textPassword" type="password" onChangeText={(text) => this.setState({password:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888" placeholder='密码'/>
                            </Item>
                        {/* </Content> */}
                    </Row>
                    <Row style={{  height: height*40,
                        justifyContent: 'flex-end', marginRight:width*30}}>
                        <Text style={{fontSize: 13,color:'#444444',}} onPress={() => {
                        this._handleIsOpenClick3()
                        }}>忘记密码？</Text>
                    </Row>
                    <Row style={{  height: height*75,
                        justifyContent: 'center' }}>
                        <Button onPress={() => {
                            this._handleIsOpenClick1()
                        }} style={styles.registButton} rounded>
                            <Text style={{ fontSize:22 }} >登录</Text>
                        </Button>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    getCode: {
        width: width*85,
        height: height*26,
        // backgroundColor: '#EB632E',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:width*10,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#EB632E',
    },
    gettingCode: {
        width: width*85,
        height: height*26,
        // backgroundColor: '#EB632E',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:width*10,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#868686',
    },
    welcomeWord: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    registButton: {
        width: width*200,
        height:height*49,
        backgroundColor: '#EB632E',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => {
    return{
        LoginScreen: state.LoginScreen
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

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);
