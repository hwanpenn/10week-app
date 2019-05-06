import React from 'react';
import {
  ActivityIndicator
} from '@ant-design/react-native';
 
export default class Loading extends React.Component {
  render() {
    return <ActivityIndicator animating={true} toast color="gray" size="large" text="正在加载" />
  }
}

