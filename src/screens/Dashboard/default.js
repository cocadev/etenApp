import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import i from '../../common/i'
import Header from '../../components/Header';

export function Default() {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={i.container}>
            <Header title={'Store Profile'} />

            <View style={{ flex: 1, }}>
                <Text>{selectedTab}</Text>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({

});