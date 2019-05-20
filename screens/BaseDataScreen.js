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


export default class BaseDataScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    headerTitle: '基础数据'
    
  };
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      id:'',
      realName: '',
      city: '',
      email: '',
      age: '',
      height: '',
      weight: '',
      sex: '',
      birth: undefined,
      exerciseVolume: '',
      income: '',
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
    console.log(response.data.data)
    let dateTemp
    if(response.data.data.birth===''){
      dateTemp = undefined
    }else{
      dateTemp = new Date(response.data.data.birth)
    }
      this.setState({
        data:response.data.data ,
        realName: response.data.data.realName,
      city: response.data.data.city,
      email: response.data.data.email,
      age: response.data.data.age,
      height: response.data.data.height,
      weight: response.data.data.weight,
      sex: response.data.data.sex,
      birth: dateTemp,
      exerciseVolume: response.data.data.exerciseVolume,
      income: response.data.data.income,
      picture: response.data.data.picture,      
      image: response.data.data.picture,      
                  })
    })
    .catch(function (error) {
        console.log(error);
    });
  }
  onChangeTime = value => {
    this.setState({ birth:value });
  };
  onChange01 = value => {
    console.log(value)
  };
  onChange02 = value => {
    console.log(value)
  };
  onChangeSubmit = value => {
    let values = {}
    values.realName= this.state.realName;
    values.city= this.state.city;
    values.email= this.state.email;
    values.age= this.state.age;
    values.height= this.state.height;
    values.weight= this.state.weight;
    values.sex= this.state.sex;
    values.birth= this.state.birth;
    values.exerciseVolume= this.state.exerciseVolume;
    values.income= this.state.income;
    values.picture= this.state.image
    axios.put(urlDev+'/api/user/'+this.state.id,values
            ).then( (response) => {
                  console.log(response.data.data)
                  
                  if(response.data.code===0){
                    Toast.success('修改成功 !',1);
                    // this.props.navigation.navigate( 'Main');
                    // thisTemp.getData()
                    // thisTemp.props.history.push("/mobile/ranklistpage");
                }else {
                  Toast.fail(response.data.msg);
                }
        
                })
                .catch(function (error) {
                    console.log(error);
                });
  };
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
        <List renderHeader={'基础信息'}>
          <InputItem
            clear
            // error
            value={this.state.realName}
            onChange={value => {
              this.setState({
                realName:value,
              });
            }}
            // extra="元"
            // placeholder="有标签"
          >
          用户名
          </InputItem>
          <InputItem
            clear
            // error
            value={this.state.city}
            onChange={value => {
              this.setState({
                city:value,
              });
            }}
            // extra="元"
            // placeholder="有标签"
          >
          地址
          </InputItem>
          <InputItem
            clear
            // error
            value={this.state.email}
            onChange={value => {
              this.setState({
                email:value,
              });
            }}
            // extra="元"
            // placeholder="有标签"
          >
          邮件
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={this.state.age}
            onChange={value => {
              this.setState({
                age:value,
              });
            }}
            extra="岁"
            // placeholder="有标签"
          >
          年龄
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={this.state.height}
            onChange={value => {
              this.setState({
                height:value,
              });
            }}
            extra="厘米"
            // placeholder="有标签"
          >
          身高
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={this.state.weight}
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
            // type="number"
            value={this.state.sex}
            onChange={value => {
              this.setState({
                sex:value,
              });
            }}
            // extra="千克"
            // placeholder="有标签"
          >
          性别
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={this.state.exerciseVolume}
            onChange={value => {
              this.setState({
                exerciseVolume:value,
              });
            }}
            extra="难度"
            // placeholder="有标签"
          >
          运动强度
          </InputItem>
          <InputItem
            clear
            // error
            type="number"
            value={this.state.income}
            onChange={value => {
              this.setState({
                income:value,
              });
            }}
            extra="澳元"
            // placeholder="有标签"
          >
          收入
          </InputItem>
          
          <Provider>
            <View>
              <List>
                <DatePicker
                  value={this.state.birth}
                  mode="date"
                  minDate={new Date(1926, 7, 6)}
                  maxDate={new Date(2036, 11, 3)}
                  onChange={this.onChangeTime}
                  format="YYYY-MM-DD"
                >
                  <List.Item arrow="horizontal">出生日期</List.Item>
                </DatePicker>
              </List>
            </View>
          </Provider>

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