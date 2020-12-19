import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import i from '../../common/i'

import Header from '../../components/Header';
import { images } from '../../common/images';
import { colors } from '../../common/colors';
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

import text from '../../common/text';

const width = Dimensions.get('window').width

class Profile extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={i.container}>
        <Header />
        <View style={{flex:1}}>
           <View style={{flex:3, backgroundColor:'#fff', justifyContent:'center', alignItems: 'center',}}>
              <Image source={images.img_user2} style={{width: width/3.3, height: width/3.3, borderRadius:width/6.6}}/>
              <Text style={[text.m_13_dark, {marginVertical:10}]}>JANE DOE</Text>
              <View style={styles.edit}>
                <Text style={text.m_10_dark2}>EDIT</Text>
              </View>
             
           </View>
           <View style={{flex:5, paddingLeft:width/10, padding:12 }}>

              <Text style={text.m_10_dark2}>NAME</Text>
              <Text style={text.m_13_dark}>Jane Doe</Text>

              <Text style={[text.m_10_dark2, {marginTop:16}]}>ADDRESS</Text>
              <Text style={text.m_13_dark}>35 laurel velly, canada road, Ontario, Toronto</Text>

              <Text style={[text.m_10_dark2, {marginTop:16}]}>EMAIL</Text>
              <Text style={text.m_13_dark}>shopopat92@gmail.com</Text>

              <Text style={[text.m_10_dark2, {marginTop:16}]}>PHONE NUMBER</Text>
              <Text style={text.m_13_dark}>+1 436-454-6563</Text>

              <View style={[styles.payment, {marginTop:16, justifyContent:'space-between', flexDirection: 'row',}]}>
                <Text style={text.m_13_dark}>Payment information</Text>
                <MaterialCommunityIcons name="chevron-right" size={18} color={colors.GREEN}/>
              </View>

           </View>
           
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    edit:{
      borderColor:colors.GREY2,
      borderWidth: 1,
      justifyContent:'center',
      borderRadius:20,
      alignItems:'center',
      padding: 7,
      paddingHorizontal: 18,
    },
    payment:{
      borderBottomColor:colors.GREY3,
      borderBottomWidth:1,
      borderTopColor: colors.GREY3,
      borderTopWidth:1,
      paddingVertical:18
    }
});

export default Profile;