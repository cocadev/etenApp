import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors } from '../common/colors'
import { AntDesign } from '@expo/vector-icons';
import { p } from '../common/normalize';

export default class Header extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.head}>Snow Cleaning Service</Text>
          <TouchableOpacity style={{ position: 'absolute', left: p(8), top:p(19) }} onPress={() => Actions.pop()}>
            <AntDesign name="arrowleft" color={colors.GREEN} size={p(20)}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: "row",
    backgroundColor: '#111',
  },
  head: {
    fontSize: p(14),
    color: colors.DARK,
    marginLeft: p(35),
    marginTop: p(10),
    fontFamily: 'Montserrat-Light',
    textAlign: 'center'
  },
  view: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    height: p(46),
    alignItems: 'center',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  }
});
