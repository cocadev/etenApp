import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import i from '../../common/i';
import Header from '../../components/Header';
import { colors } from '../../common/colors';
import MaterialTabs from 'react-native-material-tabs';
import CheckBox from '@react-native-community/checkbox';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

export function Offers() {

    const [selectedTab, setSelectedTab] = useState(0);

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <View style={i.container}>
            <Header title={'Offers'} />

            <MaterialTabs
                items={['New', 'Active', 'InActive', 'Expired']}
                selectedIndex={selectedTab}
                onChange={(e) => setSelectedTab(e)}
                barColor={colors.WHITE}
                indicatorColor={colors.GREEN}
                activeTextColor={colors.DARK}
                inactiveTextColor={colors.GREY3}

            />

            <View style={styles.content}>
                <View style={styles.btnGroup}>
                    {selectedTab !== 3 && <TouchableOpacity style={[i.btn, { backgroundColor: colors.RED }]}>
                        <Text style={{ color: '#fff' }}>Delete</Text>
                    </TouchableOpacity>}
                    
                    {selectedTab === 1 && <TouchableOpacity style={i.btn}>
                        <Text style={{ color: '#fff' }}>InActive</Text>
                    </TouchableOpacity>}
                    {(selectedTab === 0 || selectedTab === 2) && <TouchableOpacity style={i.btn}>
                        <Text style={{ color: '#fff' }}>Active</Text>
                    </TouchableOpacity>}
                    {selectedTab !== 3 && <TouchableOpacity style={i.btn}>
                        <Text style={{ color: '#fff' }}>Create</Text>
                    </TouchableOpacity>}
                </View>
                <TextInput
                    style={i.textinput}
                    placeholder={'Search'}
                />
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );

}

const Item = ({ item }) => (
    <View style={styles.item}>
        <View style={styles.row}>
            <Text style={i.normalText}>{'SL NO'}</Text>
            <Text style={i.normalText}>{item.id}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'NAME'}</Text>
            <Text style={i.normalText}>{item.name}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'CITY'}</Text>
            <Text style={i.normalText}>{item.city}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'FRANCHISE'}</Text>
            <Text style={i.normalText}>{item.franchise}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'STORE'}</Text>
            <Text style={i.normalText}>{item.store}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'ACTION'}</Text>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={i.btn}>
                    <Feather name="edit" color={colors.WHITE} size={15} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'SELECT'}</Text>
            <CheckBox />
        </View>
    </View>
);

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 12
    },
    btnGroup: {
        flexDirection: 'row-reverse',
        marginBottom: 8
    },
    item: {
        padding: 10,
        marginTop: 8,
        borderColor: colors.GREY2,
        borderRadius: 6,
        borderWidth: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

const DATA = [
    {
        id: 1,
        name: 'management',
        city: 'paris',
        franchise: '+31 64923909',
        store: '0.0.1',
        application_on: '0.0.1',
        offer_type: 'PERFECT',
        discount: '0.0.1',
        minimum_purchase_quantity: '25',
        start_date: '2020-01-11',
        end_date: '2020-03-02',
        global_usage_count: '12',
    },
];