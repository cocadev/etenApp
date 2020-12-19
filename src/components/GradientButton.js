import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../common/colors'
import { LinearGradient } from 'expo-linear-gradient';

export default class GradientButton extends React.Component {

  render() {
    return (
      <LinearGradient
        colors={[colors.GREEN, colors.SKY]}
        start={[0, 1]} end={[1, 0]}
        style={{ padding: 7, paddingHorizontal: 22, alignItems: 'center', borderRadius: 20, marginHorizontal: 12 }}>
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 10,
            color: '#fff',
            fontFamily: 'Montserrat-Medium'
          }}>
          {this.props.title}
          </Text>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({

});
