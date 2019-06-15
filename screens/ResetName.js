import React, { Component } from 'react';
import { Text,Item, Input } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {  Row, Grid } from 'react-native-easy-grid';
import {appReduxChange, appReduxTest} from "../actions/app";
import {width, height} from "../constants/Layout";
import {connect} from "react-redux";
import {  Toast } from 'antd-mobile-rn';
import {AsyncStorage, Dimensions, StyleSheet} from "react-native";
// import {   } from 'native-base';
import {urlDev} from "../constants/Url";
import axios from "axios/index";

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');
const X_WIDTH = 375;
const X_HEIGHT = 812;
class ResetName extends Component {
    state={
        gettingCode:false,
        username:'',
        mobile:'',
        passwordCfm:'',
        password:'',
    gettingCodeTime:0,
        role:''
    };
    static navigationOptions = {
        header: null,
    };
    async componentDidMount(){
        const thisTemp = this;
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
        if(this.state.username===''){
            Toast.fail('用户名不能为空 !',1);
        }else
        if(this.state.password===''){
            Toast.fail('密码不能为空 !',1);
        }else
        if(this.state.passwordCfm===''){
            Toast.fail('密码确认不能为空 !',1);
        }else
        if(this.state.password !== this.state.passwordCfm){
            Toast.fail('两次密码不一样 !',1);

        }else {
            AsyncStorage.getItem('mobile')
                .then((value) => {
                    const params ={
                        realName: thisaTemp.state.username,
                        mobile: value,
                        password: thisaTemp.state.password,
                        role: "user",
                    }
                    axios.post(urlDev+'/api/user',params)
                        .then(function (response) {
                            if(response.data.code===0){
                                Toast.success('注册成功 !',1);
                                AsyncStorage.setItem('username', (thisaTemp.state.username), (error, result) => {
                                    if (!error) {
                                        // this.setState({ firstOpen: false });
                                    }
                                });
                                thisaTemp.props.navigation.navigate( 'Home');
                            }else {
                                Toast.fail('一个手机号只能注册一次',1);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
        }
    };
    _handleIsOpenClick3 = () => {
    };
    render() {
        return (
            <Container>
                <Row style={{  height: height*12 }}></Row>
                <Header transparent>
                    <Left>
                        <Button onPress={() => this.props.navigation.goBack()} transparent>
                            <Icon style={{marginLeft:width*15 }} name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{fontSize: 18}}>设置新用户</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        </Button>
                    </Right>
                </Header>
                <Grid>
                    <Row style={{  height: height*41 }}></Row>
                    <Row style={{  height: height*67,
                        justifyContent: 'center' }}>
                            <Item style={{  width: width*315,marginBottom:15 }} >
                                <Input onChangeText={(text) => this.setState({username:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888"  placeholder='用户名'/>
                            </Item>
                    </Row>
                    <Row style={{  height: height*55,
                        justifyContent: 'center' }}>
                            <Item style={{  width: width*315,marginBottom:15 }} >
                                <Input secureTextEntry={true} inputType="textPassword" type="password" onChangeText={(text) => this.setState({password:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888" placeholder='密码'/>
                            </Item>
                    </Row>
                    <Row style={{  height: height*55,
                        justifyContent: 'center' }}>
                            <Item style={{  width: width*315,marginBottom:15 }} >
                                <Input secureTextEntry={true} inputType="textPassword" type="password" onChangeText={(text) => this.setState({passwordCfm:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888" placeholder='确认密码'/>
                            </Item>
                    </Row>
                    <Row style={{  height: height*40 }}></Row>
                    <Row style={{  height: height*75,
                        justifyContent: 'center' }}>
                        <Button onPress={() => {
                            this._handleIsOpenClick1()
                        }} style={styles.registButton} rounded>
                            <Text style={{ fontSize:22 }} >完 成</Text>
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
        ResetName: state.ResetName
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

export default connect(mapStateToProps,mapDispatchToProps)(ResetName);
