import React, { Component } from 'react';
import { Container, Header,Text,Item, Input, Icon,Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {appReduxChange, appReduxTest} from "../actions/app";
import {width, height} from "../constants/Layout";
import {connect} from "react-redux";
import {AsyncStorage,  StyleSheet} from "react-native";
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
    async componentDidMount(){
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
        if(this.state.mobile===''){
            Toast.fail('手机号不能为空 !',1);
        }else
        if(this.state.password===''){
            Toast.fail('密码不能为空 !',1);
        }else {
            AsyncStorage.getItem('mobile')
                .then((value) => {
                    const params ={
                        mobile: this.state.mobile,
                        password: this.state.password,
                    }
                    axios.post(urlDev+'/api/user/access/login',params)
                        .then(function (response) {
                            if(response.data.code===0){
                                Toast.success('登录成功 !',1);
                                if(response.data.data.vip===null||response.data.data.vip===undefined){
                                    AsyncStorage.setItem('vip', ('false'), (error, result) => {
                                        if (!error) {
                                            // this.setState({ firstOpen: false });
                                        }
                                    });
                                }else{
                                    AsyncStorage.setItem('vip', (response.data.data.vip), (error, result) => {
                                        if (!error) {
                                            // this.setState({ firstOpen: false });
                                        }
                                    });
                                }
                                AsyncStorage.setItem('username', (response.data.data.realName), (error, result) => {
                                    if (!error) {
                                        // this.setState({ firstOpen: false });
                                    }
                                });
                                AsyncStorage.setItem('id', (response.data.data._id), (error, result) => {
                                    if (!error) {
                                        // this.setState({ firstOpen: false });
                                    }
                                });
                                if(response.data.data.vip===null||response.data.data.vip===undefined){
                                    AsyncStorage.setItem('token', ('false'), (error, result) => {
                                        if (!error) {
                                            // this.setState({ firstOpen: false });
                                        }
                                    });
                                }else{
                                    AsyncStorage.setItem('token', (response.data.data.token), (error, result) => {
                                        if (!error) {
                                            // this.setState({ firstOpen: false });
                                        }
                                    });
                                }
                                // thisaTemp.props.appReduxChange(response.data.data)
                                thisaTemp.props.navigation.navigate( 'Main');
                            }else {
                                Toast.fail('用户名密码错误',1);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
        }
    };
    _handleIsOpenClick3 = () => {
        this.props.navigation.navigate( 'FindBack');
    };
    _handleIsOpenClick4 = () => {
        this.props.navigation.navigate( 'Regist');
    };
    _handleIsOpenClick5 = () => {
        this.props.navigation.navigate( 'Home');
    };
    render() {
        // const
        return (
            <Container>
                <Grid>
                    <Row style={{  height: height*12 }}></Row>
                        <Header  transparent>
                            <Left>
                                <Button onPress={() => this.props.navigation.goBack()} transparent>
                                    <Icon style={{marginLeft:width*15 }} name="arrow-back" />
                                </Button>
                            </Left>
                            <Body>
                            </Body>
                            <Right>
                                <Button transparent>
                                </Button>
                            </Right>
                        </Header>
                    <Row style={{  height: height*12 }}></Row>
                    <Row style={{  height: height*114,
                        justifyContent: 'center' }}>
                        <Text style={{fontSize: 32}}>欢迎回来</Text>
                    </Row>
                    <Row style={{  height: height*67,
                        justifyContent: 'center' }}>
                            <Item style={{  width: width*315,marginBottom:30 }} >
                                <Input onChangeText={(text) => this.setState({mobile:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888"  placeholder='手机号'/>
                            </Item>
                    </Row>
                    <Row style={{  height: height*55,
                        justifyContent: 'center' }}>
                            <Item style={{  width: width*315,marginBottom:15 }} >
                                <Input secureTextEntry={true} inputType="textPassword" type="password" onChangeText={(text) => this.setState({password:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888" placeholder='密码'/>
                            </Item>
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
                    <Row style={{  height: height*77.5,
                        justifyContent: 'center' }}>
                            <Text style={{fontSize: 13,color:'#444444'}} onPress={() => {
                                this._handleIsOpenClick4()
                            }}>没有账号？去注册</Text>
                    </Row>
                    <Row style={{  height: height*35,
                        justifyContent: 'center' }}>
                            <Text style={{fontSize: 15,color:'#999999'}} onPress={() => {
                                this._handleIsOpenClick5()
                            }}>游客登录</Text>
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
        appReduxChange: (app) => {
            dispatch(appReduxChange(app))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);
