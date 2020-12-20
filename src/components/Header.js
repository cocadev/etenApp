import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Feather, FontAwesome } from '@expo/vector-icons'; 
import { images } from '../common/images';
import Popover, { Rect, Size } from 'react-native-popover-view';
import { colors } from '../common/colors'

export default class Header extends React.Component {

  render() {
    const { title, rightE } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.head}>{title? title : ''}</Text>
          <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => Actions.drawerOpen()}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
          <View style={{ position: 'absolute', right: 15 }}>
            {rightE}
          </View>
          
          
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center',
    paddingTop: 24,
    width: '100%',
    flexDirection: "row",
    backgroundColor: '#111',
    elevation: 5
  },
  head: {
    fontSize: 18,
    color: colors.GREEN,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center'
  },
  view: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 1,
  },

});
