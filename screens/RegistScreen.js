import React, { Component } from 'react';
import { Container, Header,Text,Item, Input, Icon,Content,Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {getUser} from "../actions/registScreen";
import {width, height} from "../constants/Layout";
import {urlDev, urlPro} from "../constants/Url";
import {connect} from "react-redux";
import axios from 'axios';
import {  Toast, WhiteSpace, WingBlank } from 'antd-mobile-rn';
import {AsyncStorage, Dimensions, Platform, StyleSheet,TouchableHighlight,Image,View,StatusBar} from "react-native";
// import {   } from 'native-base';

class RegistScreen extends Component {
    state={
        gettingCode:false,
    gettingCodeTime:0,
        mobile:'',
        code:'',
        inputCode:'',
    };
    static navigationOptions = {
        header: null,
    };
    async componentWillMount(){
        // console.log("开始访问")
        // this.props.getUser();
    }

    _handleIsOpenClick = () => {
        // alert("123"+this.state.mobile)
        const params = {
            mobile:this.state.mobile
        }
        const thisTemp =this;
        if(this.state.mobile !== ''){
            axios.post(urlDev+'/api/getMsg',{
                mobile: this.state.mobile,
            })
                .then(function (response) {
                    // console.log("短信请求111");
                    // console.log(response);
                    // console.log(response.data);
                    // this.setState({mobile:''})
                    thisTemp.setState({
                        code:response.data.data.code
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
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
        }else {
            // alert("先输个手机号")
            Toast.info('先输个手机号 !');
        }


    };
    _handleIsOpenClick1 = () => {
        // this.props.navigation.navigate( 'SetName');
        if(this.state.inputCode===''||this.state.code===''){
            Toast.fail('请先验证手机号 !',1);
        }else
        if(this.state.inputCode === this.state.code){
            Toast.success('验证成功 !',1);
            this.props.navigation.navigate( 'SetName');
        }else {
            Toast.fail('验证码错误 !',1);
        }
        // console.log(this.state.mobile)
        AsyncStorage.setItem('mobile', (this.state.mobile), (error, result) => {
            if (!error) {
                // console.log("设置成功")
                // this.setState({ firstOpen: false });
            }
        });
    };
    _handleIsOpenClick3 = () => {
        this.props.navigation.navigate( 'Login');
        // AsyncStorage.setItem('firstOpen', JSON.stringify('false'), (error, result) => {
        //     if (!error) {
        //         console.log("设置成功")
        //         this.setState({ firstOpen: false });
        //     }
        // });
    };
    render() {
        // const
        // const thisTemp = this;
        return (
            <Container>
                {/* <Content >  */}
                {/*<StatusBar*/}
                    {/*// backgroundColor="blue"*/}
                    {/*backgroundColor={'green'}*/}
                    {/*barStyle="light-content"*/}
                {/*/>*/}
                {/*<Header />*/}
                <Grid>
                    {/*<Row style={{ backgroundColor: '#635DB7', height: height*88 }}></Row>*/}
                    {/*<Col style={{ backgroundColor: '#635DB7', height: height*88 }}></Col>*/}
                    <Row style={{  height: height*88 }}></Row>
                    <Row style={{  height: height*114,
                        justifyContent: 'center' }}>
                        <Text style={{fontSize: 32}}>欢迎加入十周挑战</Text>
                    </Row>
                    <Row style={{  height: height*67,
                        justifyContent: 'center' }}>
                        {/* <Content  > */}
                            <Item style={{  width: width*315,marginBottom:30}} >
                                <Input onChangeText={(text) => this.setState({mobile:text})} style={{fontSize: 15,marginLeft:30}} placeholderTextColor="#888888"  placeholder='手机号'/>
                                {/*<Icon name='checkmark-circle' />*/}
                            </Item>
                        {/* </Content> */}
                    </Row>
                    <Row style={{  height: height*55,
                        justifyContent: 'center' }}>
                        {/* <Content  > */}
                            <Item style={{  width: width*315,marginBottom:15 }} >
                                <Input onChangeText={(text) => this.setState({inputCode:text})} style={{fontSize: 15,marginLeft:30}} placeholderTextColor="#888888" placeholder='验证码'/>
                                {this.state.gettingCode?
                                    <Button onPress={() => {
                                    this._handleIsOpenClick()
                                }} style={styles.gettingCode} disabled bordered rounded>
                                    <Text style={{fontSize: 10,color:'#868686',
                                        justifyContent: 'center',}}>{this.state.gettingCodeTime}秒后重新获取</Text>
                                </Button>:
                                    <Button onPress={() => {
                                        this._handleIsOpenClick()
                                    }} style={styles.getCode} bordered rounded>
                                        <Text style={{fontSize: 10,color:'#EB632E',
                                            justifyContent: 'center',}}>获取验证码</Text>
                                    </Button>}
                            </Item>
                        {/* </Content> */}
                    </Row>
                    <Row style={{  height: height*40 }}></Row>
                    <Row style={{  height: height*75,
                        justifyContent: 'center' }}>
                        <Button onPress={() => {
                            this._handleIsOpenClick1()
                        }} style={styles.registButton} rounded>
                            <Text style={{ fontSize:22 }} >注册</Text>
                        </Button>
                    </Row>
                    <Row style={{  height: height*77.5,
                        justifyContent: 'center' }}>
                            <Text style={{fontSize: 13,color:'#444444'}} onPress={() => {
                                this._handleIsOpenClick3()
                            }}>已有账号？登录</Text>
                    </Row>
                    <Row style={{  height: height*35,
                        justifyContent: 'center' }}>
                            <Text style={{fontSize: 15,color:'#999999'}} onPress={() => {
                                this._handleIsOpenClick3()
                            }}>其他方式登录</Text>
                    </Row>
                    <Row style={{  height: height*120,
                        justifyContent: 'center' }}>
                        <Col style={{  height: height*89 }}></Col>
                        <Col style={{  height: height*95,alignItems: 'center', }}>
                            <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                            this._handleIsOpenClick()
                        }}>
                            <Image style={{ width: width*46, height:height*46 }} source={require('../assets/icons/facebookIcon.png')}/>
                        </TouchableHighlight></Col>
                        <Col style={{  height: height*95,alignItems: 'center', }}>
                            <TouchableHighlight underlayColor="rgba(52, 52, 52, 0)" onPress={() => {
                                this._handleIsOpenClick()
                            }}>
                                <Image style={{ width: width*46, height:height*46 }} source={require('../assets/icons/wechatIcon.png')}/>
                            </TouchableHighlight>
                        </Col>
                        <Col style={{  height: height*89 }}></Col>
                    </Row>
                </Grid>
                {/* </Content> */}
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
        RegistScreen: state.RegistScreen
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getUser: () => {
            dispatch(getUser())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegistScreen);
