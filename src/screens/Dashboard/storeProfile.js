import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import i from '../../common/i'
import Header from '../../components/Header';
import { colors } from '../../common/colors';
import MaterialTabs from 'react-native-material-tabs';

export function StoreProfile() {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={i.container}>
            <Header title={'Store Profile'} />

            <MaterialTabs
                items={['Details', 'Social Settings']}
                selectedIndex={selectedTab}
                onChange={(e) => setSelectedTab(e)}
                barColor={colors.WHITE}
                indicatorColor={colors.GREEN}
                activeTextColor={colors.DARK}
                inactiveTextColor={colors.GREY3}
            />
            <View style={{ flex: 1, backgroundColor: 'brown' }}>
                <Text>{selectedTab}</Text>
            </View>


        </View>
    );

}

const styles = StyleSheet.create({

});