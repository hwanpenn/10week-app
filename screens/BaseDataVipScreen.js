import React from 'react';
import {Platform, ScrollView, Text,AsyncStorage,View } from 'react-native';
import {Tag,Button as ButtonAnt, InputItem, List ,Switch,DatePicker,Provider} from '@ant-design/react-native';
import axios from "axios/index";
import {  Row } from 'react-native-easy-grid';
import {urlDev} from "../constants/Url";
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Constants, ImagePicker, Permissions } from 'expo';
import {width, height} from "../constants/Layout";
import {Toast} from "antd-mobile-rn/lib/index.native";


export default class BaseDataVipScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    headerTitle: '每日打卡'
    
  };
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      id:'',

      bust: '',
      waist: '',
      hip: '',
      thigh: '',
      upperHip: '',
      strength: '',
      sitUp: '',
      flatSupport: '',
      pushUp: '',
      bobbyJump: '',
      weight: '',
      bodyFatRate: '',
      bodyMoistureRate: '',
      basalMetabolicRate: '',
      boneWeight: '',
      visceralFatGrade: '',

      editStatus: 'create',
      mark: '',
      markId: '',
      markTime: '',
      vipDay: 0,
      picture: '',
      image: null,
      uploading: false,
    };
  }
  componentDidMount() {
    const thisTemp = this;
    AsyncStorage.getItem('id')
        .then((value) => {
          console.log("id",value)
          thisTemp.setState({
              id:value?value:'5cae30c19a6c6264b51fc555'
            })
            // alert(value)
            thisTemp.getData(value)
        })
  }
  getData = (id) => {
    axios.get(urlDev+'/api/user/'+id
    ).then( (response) => {
    console.log('基础信息数据')
    console.log(response.data.data)
    // const dateTemp = new Date(response.data.data.birth);if(response.data.data.m)
    const today = this.getNowFormatDate()
    console.log("today---------------")
    console.log(today)
    let vipValue 
    if(response.data.data.markTime===today){
      vipValue = response.data.data.vipDay
      this.setState({
        editStatus:"modify"
      })
    }else{
      vipValue = response.data.data.vipDay+1
      this.setState({
        editStatus:"create"
      })
    }
    console.log("vipValue",vipValue)
    axios.get(urlDev+'/api/vipData?user='+id+'&vipDay='+(vipValue),
    ).then( (response) => {
      console.log('个人打卡数据')
    console.log(response.data.data)
    if(response.data.data.rows.length===0){
      
    }else{
      this.setState({
        rows:response.data.data.rows,
        markId: response.data.data.rows[0]._id===undefined?'':response.data.data.rows[0]._id,
        bust: response.data.data.rows[0].bust===undefined?'':response.data.data.rows[0].bust,
    waist: response.data.data.rows[0].waist===undefined?'':response.data.data.rows[0].waist,
    hip: response.data.data.rows[0].hip===undefined?'':response.data.data.rows[0].hip,
    thigh: response.data.data.rows[0].thigh===undefined?'':response.data.data.rows[0].thigh,
    upperHip: response.data.data.rows[0].upperHip===undefined?'':response.data.data.rows[0].upperHip,
    strength: response.data.data.rows[0].strength===undefined?'':response.data.data.rows[0].strength,
    sitUp: response.data.data.rows[0].sitUp===undefined?'':response.data.data.rows[0].sitUp,
    flatSupport: response.data.data.rows[0].flatSupport===undefined?'':response.data.data.rows[0].flatSupport,
    pushUp: response.data.data.rows[0].pushUp===undefined?'':response.data.data.rows[0].pushUp,
    bobbyJump: response.data.data.rows[0].bobbyJump===undefined?'':response.data.data.rows[0].bobbyJump,
    weight: response.data.data.rows[0].weight===undefined?'':response.data.data.rows[0].weight,
    bodyFatRate: response.data.data.rows[0].bodyFatRate===undefined?'':response.data.data.rows[0].bodyFatRate,
    bodyMoistureRate: response.data.data.rows[0].bodyMoistureRate===undefined?'':response.data.data.rows[0].bodyMoistureRate,
    basalMetabolicRate: response.data.data.rows[0].basalMetabolicRate===undefined?'':response.data.data.rows[0].basalMetabolicRate,
    boneWeight: response.data.data.rows[0].boneWeight===undefined?'':response.data.data.rows[0].boneWeight,
    visceralFatGrade: response.data.data.rows[0].visceralFatGrade===undefined?'':response.data.data.rows[0].visceralFatGrade,
    picture: response.data.data.rows[0].picture===undefined?'':response.data.data.rows[0].picture,   
    image: response.data.data.rows[0].picture===undefined?'':response.data.data.rows[0].picture,
    mark: response.data.data.rows[0].mark===undefined?'':response.data.data.rows[0].mark  
                  })
    }
      
      // if(response.code===0){
      //     // document.getElementById("layui-layer2").style.display='block'
      // }else {
      //     Toast.success(response.data.msg);
      // }

    })
    .catch(function (error) {
        console.log(error);
    });
     
      this.setState({
        data:response.data.data ,
        markTime:response.data.data.markTime ,
                  })
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  // onChangeTime = value => {
  //   this.setState({ birth:value });
  // };
  onChangeSubmit = value => {
    let values = {}

    values.bust= this.state.bust;
    values.waist= this.state.waist;
    values.hip= this.state.hip;
    values.thigh= this.state.thigh;
    values.upperHip= this.state.upperHip;
    values.strength= this.state.strength;
    values.sitUp= this.state.sitUp;
    values.flatSupport= this.state.flatSupport;
    values.pushUp= this.state.pushUp;
    values.bobbyJump= this.state.bobbyJump;
    values.weight= this.state.weight;
    values.bodyFatRate= this.state.bodyFatRate;
    values.bodyMoistureRate= this.state.bodyMoistureRate;
    values.basalMetabolicRate= this.state.basalMetabolicRate;
    values.boneWeight= this.state.boneWeight;
    values.visceralFatGrade= this.state.visceralFatGrade;
  
    values.name="第"+(this.state.vipDay+1)+"次打卡"
    values.vipDay=this.state.editStatus==='modify'?this.state.vipDay:(this.state.vipDay+1)
    values.user=this.state.id
    values.mark= 'true'
    values.picture= this.state.image

    if(values.vipDay===61){
      Toast.success('会员已经结束 !',1);
      let params = {}
      params.vip = "false"
      params.vipDay = '0'
      this.endVip(params)
    }
    if((values.vipDay%7)===0){
      if(values.picture===undefined){
        Toast.fail("每周必须上传一张照片");
      }else{
        if(this.state.mark==='true'){
          this.update(values)
        }else{
          this.create(values)
        }
        }
    }else{
      if(this.state.mark==='true'){
        this.update(values)
      }else{
        this.create(values)
      }
    }

  };


  create = (values) => {
    console.log(values)
    const thisTemp = this
    axios.post(urlDev+'/api/vipData',values
    ).then( (response) => {
          // console.log('/api/vipData')
          // console.log(response.data.data)
          if(response.data.code===0){
            // Toast.success(response.data.msg);
            let params = {}
            params.vipDay = values.vipDay
            params.markTime = this.getNowFormatDate()
            if(values.weight){
              params.lose = this.state.data.weight-values.weight
            }
            axios.put(urlDev+'/api/user/'+this.state.id,params
            ).then( (response) => {
                  // console.log('/api/user/')
                  // console.log(response.data.data)
                  if(response.data.code===0){
                    Toast.success('操作成功 !',1);
                    this.setState({
                      vipDay:(this.state.vipDay+1),
                      mark:"true"
                                })
                }else {
                    // Toast.success(response.data.msg);
                }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            Toast.success(response.data.msg);
        }

        })
        .catch(function (error) {
            console.log(error);
        });
  }
  update = (values) => {
    const thisTemp = this
    // values.vipDay='1'
    axios.put(urlDev+'/api/vipData/'+this.state.markId,values
    ).then( (response) => {
          // console.log('/api/vipData')
          // console.log(response.data.data)
          if(response.data.code===0){
            // Toast.success(response.data.msg);
            let params = {}
            // params.vipDay = '1'
            params.vipDay = values.vipDay
            params.markTime = this.getNowFormatDate()
            if(values.weight){
              params.lose = this.state.data.weight-values.weight
            }
            axios.put(urlDev+'/api/user/'+this.state.id,params
            ).then( (response) => {
                  // console.log('/api/user/')
                  // console.log(response.data.data)
                  if(response.data.code===0){
                    Toast.success('打卡成功 !',1);
                    this.setState({
                      vipDay:(this.state.vipDay+1),
                      mark:"true"
                                })
                      // this.props.navigation.navigate( 'Main');
                }else {
                    // Toast.success(response.data.msg);
                }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else {
            Toast.success(response.data.msg);
        }

        })
        .catch(function (error) {
            console.log(error);
        });
  }

  getNowFormatDate = ()=> {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

  endVip = (params) => {
    axios.put(urlDev+'/api/user/'+this.state.id,params
            ).then( (response) => {
                  // console.log('/api/user/')
                  // console.log(response.data.data)
                  if(response.data.code===0){
                    // Toast.success(response.data.msg);
                }else {
                    // Toast.success(response.data.msg);
                }
                })
                .catch(function (error) {
                    console.log(error);
                });
  }

  render() {
    let {
      image
    } = this.state;
    return (
      <View style={styles.container01}>
      {Platform.OS === 'ios' ?<StatusBar barStyle='dark-content' />:<Row style={{ height: height*(-20) , backgroundColor: 'black'}}><StatusBar barStyle='dark-content' /></Row>}
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={this.state.editStatus==='modify'?'更新第'+(this.state.data.vipDay)+'次打卡':'开始第'+(this.state.data.vipDay+1)+'次打卡'}>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.bust)}
            onChange={value => {
              this.setState({
                bust:value,
              });
            }}
            extra="厘米"
            // placeholder="有标签"
          >
          胸围
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.waist)}
            onChange={value => {
              this.setState({
                waist:value,
              });
            }}
            extra="厘米"
            // placeholder="有标签"
          >
          腰围
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.hip)}
            onChange={value => {
              this.setState({
                hip:value,
              });
            }}
            extra="厘米"
            // placeholder="有标签"
          >
          臀围
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.thigh)}
            onChange={value => {
              this.setState({
                thigh:value,
              });
            }}
            extra="厘米"
            // placeholder="有标签"
          >
          大腿围
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.upperHip)}
            onChange={value => {
              this.setState({
                upperHip:value,
              });
            }}
            extra="厘米"
            // placeholder="有标签"
          >
          上臀围
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.strength)}
            onChange={value => {
              this.setState({
                strength:value,
              });
            }}
            // extra="千克"
            // placeholder="有标签"
          >
          力量测试
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.sitUp)}
            onChange={value => {
              this.setState({
                sitUp:value,
              });
            }}
            extra="个"
            // placeholder="有标签"
          >
          仰卧起坐
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.flatSupport)}
            onChange={value => {
              this.setState({
                flatSupport:value,
              });
            }}
            extra="个"
            // placeholder="有标签"
          >
          平板支撑
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.pushUp)}
            onChange={value => {
              this.setState({
                pushUp:value,
              });
            }}
            extra="个"
            // placeholder="有标签"
          >
          俯卧撑
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.bobbyJump)}
            onChange={value => {
              this.setState({
                bobbyJump:value,
              });
            }}
            extra="个"
            // placeholder="有标签"
          >
          波比跳
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.weight.toString())}
            onChange={value => {
              this.setState({
                weight:value,
              });
            }}
            extra="千克"
            // placeholder="有标签"
          >
          体重
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.bodyFatRate)}
            onChange={value => {
              this.setState({
                bodyFatRate:value,
              });
            }}
            extra="%"
            // placeholder="有标签"
          >
          体脂率
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.bodyMoistureRate)}
            onChange={value => {
              this.setState({
                bodyMoistureRate:value,
              });
            }}
            extra="%"
            // placeholder="有标签"
          >
          身体水分率
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.muscleMass)}
            onChange={value => {
              this.setState({
                muscleMass:value,
              });
            }}
            extra="%"
            // placeholder="有标签"
          >
          肌肉量
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.basalMetabolicRate)}
            onChange={value => {
              this.setState({
                basalMetabolicRate:value,
              });
            }}
            extra="%"
            // placeholder="有标签"
          >
          基础代谢率
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.boneWeight)}
            onChange={value => {
              this.setState({
                boneWeight:value,
              });
            }}
            extra="%"
            // placeholder="有标签"
          >
          骨重量
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={(this.state.visceralFatGrade)}
            onChange={value => {
              this.setState({
                visceralFatGrade:value,
              });
            }}
            // extra="%"
            // placeholder="有标签"
          >
          内脏脂肪等级
          </InputItem>

          <View>
            <Text
              style={styles.exampleText}>
              上传照片: 
            </Text>
            <View style={{marginTop:20,alignItems: 'center'}}>
              <Tag selected onChange={()=>this._pickImage()} >相册</Tag>
              <Tag selected onChange={()=>this._takePhoto()} style={{marginTop:10}}>拍照</Tag>
            </View>
            {this._maybeRenderImage()}
            {this._maybeRenderUploadingOverlay()}
          </View>

          <List.Item>
            <ButtonAnt
            style={{marginTop:30}}
              onPress={() => {
                this.onChangeSubmit()
              }}
              type="primary"
            >
              确定
            </ButtonAnt>
          </List.Item>
        </List>
      </ScrollView>
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let {
      image
    } = this.state;

    if (!image) {
      return;
    }

    return (
      <View
        style={styles.maybeRenderContainer}>
        <View
          style={styles.maybeRenderImageContainer}>
          <Image source={{ uri: image }} style={styles.maybeRenderImage} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={styles.maybeRenderImageText}>
          {image?'上传成功':'上传失败'}
        </Text>
      </View>
    );
  };

  _share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  _takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        // allowsEditing: true,
        // aspect: [4, 3],
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _pickImage = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        // allowsEditing: true,
        // aspect: [4, 3],
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();
// console.log("uploadResult")
// console.log(uploadResult)
const urlTemp = urlDev+uploadResult.data.url
        this.setState({
          image: urlTemp
        });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({
        uploading: false
      });
    }
  };
}

async function uploadImageAsync(uri) {
  let apiUrl = urlDev+'/api/upload';

  // Note:
  // Uncomment this if you want to experiment with local server
  //
  // if (Constants.isDevice) {
  //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
  // } else {
  //   apiUrl = `http://localhost:3000/upload`
  // }

  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append('photo', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  return fetch(apiUrl, options);
}

const styles = StyleSheet.create({
  container01: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  exampleText: {
    fontSize: 18,
    marginTop: 40,
    marginLeft: 12,
    // marginHorizontal: 15,
    textAlign: 'left',
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  maybeRenderContainer: {
    alignItems: 'center',
    borderRadius: 3,
    // elevation: 2,
    marginTop: 30,
    // shadowColor: 'rgba(0,0,0,1)',
    // shadowOpacity: 0.2,
    // shadowOffset: {
    //   height: 4,
    //   width: 4,
    // },
    // shadowRadius: 5,
    // width: 250,
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  },
  maybeRenderImage: {
    height: 270,
    width: 180,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});