import React, { Component } from 'react';
import { Text,Item, Input,Content } from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {appReduxChange, appReduxTest} from "../actions/app";
import {width, height} from "../constants/Layout";
import {connect} from "react-redux";
import {AsyncStorage, Dimensions, Platform, StyleSheet,TouchableHighlight,Image,View,StatusBar} from "react-native";
// import {   } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
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
    // static navigationOptions = {
    //     title: '重置密码',
    // };
    async componentDidMount(){
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
        const thisaTemp = this;
        // alert(this.state.username)
        // if(this.state.username===''){
        //     Toast.fail('用户名不能为空 !',1);
        // }else
        if(this.state.password===''){
            Toast.fail('密码不能为空 !',1);
        }else
        if(this.state.passwordCfm===''){
            Toast.fail('密码确认不能为空 !',1);
        }else
        if(this.state.password !== this.state.passwordCfm){
            Toast.fail('两次密码不一样 !',1);

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
                        mobile: value,
                        password: this.state.password,
                        // role: this.state.roleId,
                    }
                    // console.log(params)
                    axios.put(urlDev+'/api/userUpdate',params)
                        .then(function (response) {
                            // console.log("短信请求111");
                            console.log(response.data);
                            if(response.data.code===0){
                                Toast.success('修改成功 !',1);
                                // AsyncStorage.setItem('username', (thisaTemp.state.username), (error, result) => {
                                //     if (!error) {
                                //         // console.log("设置成功")
                                //         // this.setState({ firstOpen: false });
                                //     }
                                // });
                                thisaTemp.props.navigation.navigate( 'Login');
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
                {/*<StatusBar*/}
                    {/*// backgroundColor="blue"*/}
                    {/*backgroundColor={'green'}*/}
                    {/*barStyle="light-content"*/}
                {/*/>*/}
                {/*<Header />*/}
                <Row style={{  height: height*12 }}> </Row>
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
                            {/*<Text>Cancel</Text>*/}
                        </Button>
                    </Right>
                </Header>
                <Grid>
                    {/*<Row style={{ backgroundColor: '#635DB7', height: height*88 }}></Row>*/}
                    {/*<Col style={{ backgroundColor: '#635DB7', height: height*88 }}></Col>*/}
                    {/*<Row style={{  height: height*40 }}></Row>*/}
                    {/*<Row style={{  height: height*25,*/}
                        {/*justifyContent: 'center' }}>*/}
                        {/*/!*<Text style={{fontSize: 18}}>重置密码</Text>*!/*/}
                        {/*<Col style={{width:  width*60,marginLeft:width*30 }}>*/}
                            {/*<Ionicons name="ios-arrow-back" size={30} color="black" />*/}
                        {/*</Col>*/}
                        {/*<Col style={{ marginTop:height*5 ,marginLeft:width*55 }}>*/}
                            {/*<Text style={{fontSize: 18}}>重置密码</Text>*/}
                        {/*</Col>*/}
                    {/*</Row>*/}
                    <Row style={{  height: height*41 }}></Row>
                    <Row style={{  height: height*67,
                        justifyContent: 'center' }}>
                        {/* <Content  > */}
                            <Item style={{  width: width*315 ,marginBottom:30}} >
                                <Input secureTextEntry={true} onChangeText={(text) => this.setState({password:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888"  placeholder='新密码'/>
                                {/*<Icon name='checkmark-circle' />*/}
                            </Item>
                        {/* </Content> */}
                    </Row>
                    <Row style={{  height: height*55,
                        justifyContent: 'center' }}>
                        {/* <Content  > */}
                            <Item style={{  width: width*315,marginBottom:15 }} >
                                <Input secureTextEntry={true} onChangeText={(text) => this.setState({passwordCfm:text})} style={{fontSize: 15,marginLeft: width*30}} placeholderTextColor="#888888" placeholder='再次输入密码'/>
                                {/*{this.state.gettingCode?*/}
                                    {/*<Button onPress={() => {*/}
                                    {/*this._handleIsOpenClick()*/}
                                {/*}} style={styles.gettingCode} disabled bordered rounded>*/}
                                    {/*<Text style={{fontSize: 10,color:'#868686',*/}
                                        {/*justifyContent: 'center',}}>{this.state.gettingCodeTime}秒后重新获取</Text>*/}
                                {/*</Button>:*/}
                                    {/*<Button onPress={() => {*/}
                                        {/*this._handleIsOpenClick()*/}
                                    {/*}} style={styles.getCode} bordered rounded>*/}
                                        {/*<Text style={{fontSize: 10,color:'#EB632E',*/}
                                            {/*justifyContent: 'center',}}>获取验证码</Text>*/}
                                    {/*</Button>}*/}
                            </Item>
                        {/* </Content> */}
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
                    {/*<Row style={{  height: height*77.5,*/}
                        {/*justifyContent: 'center' }}>*/}
                            {/*<Text style={{fontSize: 13,color:'#444444'}} onPress={() => {*/}
                                {/*this._handleIsOpenClick3()*/}
                            {/*}}>已有账号？登录</Text>*/}
                    {/*</Row>*/}
                    {/*<Row style={{  height: height*35,*/}
                        {/*justifyContent: 'center' }}>*/}
                            {/*<Text style={{fontSize: 15,color:'#999999'}} onPress={() => {*/}
                                {/*this._handleIsOpenClick3()*/}
                            {/*}}>其他方式登录</Text>*/}
                    {/*</Row>*/}
                    {/*<Row style={{  height: height*120,*/}
                        {/*justifyContent: 'center' }}>*/}
                        {/*<Col style={{  height: height*89 }}></Col>*/}
                        {/*<Col style={{  height: height*95,alignItems: 'center', }}>*/}
                            {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                            {/*this._handleIsOpenClick()*/}
                        {/*}}>*/}
                            {/*<Image style={{ width: width*46, height:height*46 }} source={require('../assets/icons/facebookIcon.png')}/>*/}
                        {/*</TouchableHighlight></Col>*/}
                        {/*<Col style={{  height: height*95,alignItems: 'center', }}>*/}
                            {/*<TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {*/}
                                {/*this._handleIsOpenClick()*/}
                            {/*}}>*/}
                                {/*<Image style={{ width: width*46, height:height*46 }} source={require('../assets/icons/wechatIcon.png')}/>*/}
                            {/*</TouchableHighlight>*/}
                        {/*</Col>*/}
                        {/*<Col style={{  height: height*89 }}></Col>*/}
                    {/*</Row>*/}
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
