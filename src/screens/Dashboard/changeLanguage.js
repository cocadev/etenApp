import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../common/colors';
import i from '../../common/i'
import Header from '../../components/Header';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 

export function ChangeLanguage() {
    const [lng, setLng] = useState(0)
    return (
        <View style={i.container}>
            <Header title={'Change Language'} />

            <View style={{ backgroundColor: '#f0f0f0', flex: 1}}>

            <TouchableOpacity style={styles.card} onPress={()=>setLng(0)}>
                    <Text style={i.smallText}>{'Ditcj, Flemish'}</Text>
                    {lng === 0 && <AntDesign name="checkcircleo" size={24} color={colors.BLUE} />}
                    {lng === 1 && <FontAwesome name="circle-thin" size={28} color={colors.BLUE} />}
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={()=>setLng(1)}>
                    <Text style={i.smallText}>{'English'}</Text>
                    {lng === 0 && <FontAwesome name="circle-thin" size={28} color={colors.BLUE} />}
                    {lng === 1 && <AntDesign name="checkcircleo" size={24} color={colors.BLUE} />}

                </TouchableOpacity>

            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.GREY3,
        padding: 12,
        marginHorizontal: 4,
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50
    },

    
});