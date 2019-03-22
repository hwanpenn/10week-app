import { Dimensions } from 'react-native';

export const width = Dimensions.get('window').width/375;
export const height = Dimensions.get('window').height/667;

// export default {
//   window: {
//     width,
//     height,
//   },
//   isSmallDevice: width < 375,
// };
