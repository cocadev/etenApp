import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../common/colors';
import i from '../../common/i'
import Header from '../../components/Header';

export function BankDetails() {

    return (
        <View style={i.container}>
            <Header title={'Bank Details'} />

            <View style={{ backgroundColor: '#f0f0f0', flex: 1}}>

                <View style={styles.card}>
                    <Text style={i.smallText}>{'STEP 1: CONNECT ATO YOUR STRIPE ACCOUNT'}</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={i.normalText}>Connect stripe account</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={i.smallText}>{'STEP 2: LINK BANK ACCOUNT'}</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={i.normalText}>Link bank account</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.GREY3,
        padding: 20,
        marginHorizontal: 12,
        marginTop: 20,
    },
    btn: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.BLUE,
        padding: 10,
        marginTop: 8
    }
    
});