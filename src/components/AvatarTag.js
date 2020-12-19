import React from 'react';
import { Dimensions, StyleSheet, View, Image} from 'react-native';
import { images } from '../common/images';

const width = Dimensions.get('window').width

export default class AvatarTag extends React.Component {

  render() {
    return (
      <View >
        <Image source={images.img_user2} style={styles.circle} />
        <Image source={images.icon_dank} style={styles.dank} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    width: width / 8,
    height: width / 8,
    borderRadius: width / 16,
    borderColor: '#ddd',
    borderWidth: 1
  },
  dank: {
    width: width / 30,
    height: width / 24,
    left: width / 10,
    bottom:16
  },
});
