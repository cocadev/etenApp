import React, { Component } from 'react';

import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import text from './common/text';
import { colors } from './common/colors';
import { images } from './common/images';

const width = Dimensions.get('window').width

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <ScrollView style={styles.container}>
              
              <View style={{justifyContent:'center', backgroundColor:'#eaf7f8', height: 150}}>
                 <TouchableOpacity onPress={()=>Actions.profile()} style={{flexDirection:'row', alignItems:'center', marginLeft: 25,marginTop: 15,}}>
                     <Image source={images.img_user2} style={styles.avatar}/>
                     <Text style={[text.m_13_dark,{ marginLeft:16}]}>JANE DOE</Text>
                 </TouchableOpacity>
              </View>

              <View style={{ backgroundColor:'#fff', paddingLeft:width/12}}>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.wall()} >
                    <Image source={images.icon_home} style={{width:18, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>HOME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.notification()}>
                    <Image source={images.icon_sheet} style={{width:18, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>ORDERS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Image source={images.icon_gift} style={{width:18, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>PROMOTIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}>
                    <Image source={images.icon_setting} style={{width:18, height:18}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>SETTINGS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menu} onPress={()=>Actions.storeProfile()}>
                    <Image source={images.icon_users} style={{width:18, height:16}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>STORE PROFILE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.workingHours()}>
                    <Image source={images.icon_users} style={{width:18, height:16}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>WORKING HOURS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.storeManagers()}>
                    <Image source={images.icon_users} style={{width:18, height:16}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>STORE MANAGERS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu} onPress={()=>Actions.offers()}>
                    <Image source={images.icon_users} style={{width:18, height:16}}/>
                    <Text style={[text.m_15_dark, {marginLeft:22}]}>OFFERS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.signin()} style={styles.menu}>
                    <Image source={images.icon_roundback} style={{width:20, height:15}}/>
                    <Text style={[text.m_15_dark, {marginLeft:20}]}>LOGOUT</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex:2, justifyContent:'center', alignItems:'center', backgroundColor:'#eaf7f8', paddingVertical: 30}}>
                 <View style={styles.button}>
                     <Text style={text.m_10_dark_w}>BECOME A SERVICE PROVIDER</Text>
                 </View>
              </View>

            
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#111',
        paddingTop: 24,
    },
    button:{
        backgroundColor:colors.RED, 
        justifyContent:'center', 
        alignItems: 'center', 
        borderRadius:20,
        paddingVertical: 12,
        paddingHorizontal: 15,
    },
    avatar:{
        width:width/6,
        height:width/6,
        borderRadius:width/12
    },
    menu:{
        flexDirection:'row', 
        alignItems:'center',
        paddingVertical:width/20, 
        borderBottomColor: colors.GREY4, 
        borderBottomWidth: 1,
    }

});