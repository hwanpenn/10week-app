import React, { Component } from 'react';
import { Text,Item, Input } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {  Row, Grid } from 'react-native-easy-grid';
import {appReduxChange, appReduxTest} from "../actions/app";
import {width, height} from "../constants/Layout";
import {connect} from "react-redux";
import {AsyncStorage, StyleSheet} from "react-native";
import {urlDev} from "../constants/Url";
import axios from "axios/index";
import {Toast} from "antd-mobile-rn/lib/index.native";

class ResetPassword extends Component {
    state={
        gettingCode:false,
    gettingCodeTime:0,
        passwordCfm:'',
        password:'',
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
                        mobile: value,
                        password: this.state.password,
                    }
                    axios.put(urlDev+'/api/userUpdate',params)
                        .then(function (response) {
                            console.log(response.data);
                            if(response.data.code===0){
                                Toast.success('修改成功 !',1);
                                thisaTemp.props.navigation.navigate( 'Login');
                            }else {
                                Toast.fail(response.data.msg,1);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
        }
    };
    _handleIsOpenClick3 = () => {
        AsyncStorage.setItem('firstOpen', ('false'), (error, result) => {
            if (!error) {
                console.log("设置成功")
                this.setState({ firstOpen: false });
            }
        });
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
                    <Title style={{fontSize: 18}}>重置密码</Title>
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
                            <Item style={{  width: width*315 ,marginBottom:30}} >
                                <Input secureTextEntry={true} onChangeText={(text) => this.setState({password:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888"  placeholder='新密码'/>
                            </Item>
                    </Row>
                    <Row style={{  height: height*55,
                        justifyContent: 'center' }}>
                            <Item style={{  width: width*315,marginBottom:15 }} >
                                <Input secureTextEntry={true} onChangeText={(text) => this.setState({passwordCfm:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888" placeholder='再次输入密码'/>
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
        ResetPassword: state.ResetPassword
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

export default connect(mapStateToProps,mapDispatchToProps)(ResetPassword);
