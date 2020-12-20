import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { colors } from '../../common/colors';
import i from '../../common/i'
import Header from '../../components/Header';
import { MaterialIcons } from '@expo/vector-icons'; 

export function AddStripeAccount() {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={i.container}>
            <Header title={'Add Stripe Account'} />

            <ScrollView style={{ padding: 12}}>

                <Text style={i.labelText}>Photo ID*</Text>
                <MaterialIcons name="photo-filter" size={64} color="black" />

               <Text style={i.labelText}>First Name*</Text>
               <TextInput style={i.textinput} />

               <Text style={i.labelText}>Last Name*</Text>
               <TextInput style={i.textinput} />

               <Text style={i.labelText}>Date of Birth*</Text>
               <TextInput style={i.textinput} />

               <Text style={i.labelText}>SSN*</Text>
               <TextInput style={i.textinput} />

               <Text style={i.labelText}>Address*</Text>
               <TextInput style={i.textinput} />

               <Text style={i.labelText}>City*</Text>
               <TextInput style={i.textinput} />

               <Text style={i.labelText}>State*</Text>
               <TextInput style={i.textinput} />

               <Text style={i.labelText}>Zip Code*</Text>
               <TextInput style={i.textinput} />
               
               <View style={{height: 20}}/>

            </ScrollView>

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