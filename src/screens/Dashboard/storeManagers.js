import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import i from '../../common/i';
import Header from '../../components/Header';
import { colors } from '../../common/colors';
import MaterialTabs from 'react-native-material-tabs';
import CheckBox from '@react-native-community/checkbox';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

export function StoreManagers() {

    const [selectedTab, setSelectedTab] = useState(0);

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <View style={i.container}>
            <Header title={'Store Managers'} />

            <MaterialTabs
                items={['Approved', 'Logged In', 'Logged Out', 'Deleted']}
                selectedIndex={selectedTab}
                onChange={(e) => setSelectedTab(e)}
                barColor={colors.WHITE}
                indicatorColor={colors.GREEN}
                activeTextColor={colors.DARK}
                inactiveTextColor={colors.GREY3}

            />

            <View style={styles.content}>
                <View style={styles.btnGroup}>
                    
                    {selectedTab === 0 && <TouchableOpacity style={[i.btn, { backgroundColor: colors.RED }]}>
                        <Text style={{ color: '#fff' }}>Delete</Text>
                    </TouchableOpacity>}
                    {selectedTab === 0 && <TouchableOpacity style={i.btn}>
                        <Text style={{ color: '#fff' }}>Add</Text>
                    </TouchableOpacity>}
                    {selectedTab === 1 && <TouchableOpacity style={i.btn}>
                        <Text style={{ color: '#fff' }}>Logout</Text>
                    </TouchableOpacity>}
                    {selectedTab === 3 && <TouchableOpacity style={[i.btn, { backgroundColor: colors.RED }]}>
                        <Text style={{ color: '#fff' }}>Permanent Delete</Text>
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

const Item = ({ item, key }) => (
    <View style={styles.item} key={key}>
        <View style={styles.row}>
            <Text style={i.normalText}>{'SL NO'}</Text>
            <Text style={i.normalText}>{item.id}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'NAME'}</Text>
            <Text style={i.normalText}>{item.name}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'EMAIL'}</Text>
            <Text style={i.normalText}>{item.email}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'PHONE'}</Text>
            <Text style={i.normalText}>{item.phone}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'APP VERSION'}</Text>
            <Text style={i.normalText}>{item.app_version}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'OPTION'}</Text>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={[i.btn, { backgroundColor: colors.GREY1 }]}>
                    <Feather name="edit" color={colors.WHITE} size={15} />
                </TouchableOpacity>
                <TouchableOpacity style={[i.btn, { backgroundColor: colors.BLUE }]}>
                    <FontAwesome name="mobile-phone" color={colors.WHITE} size={15} />
                </TouchableOpacity>
                <TouchableOpacity style={[i.btn, { backgroundColor: colors.GREY1 }]}>
                    <AntDesign name="sync" color={colors.WHITE} size={15} />
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
        name: 'stef',
        email: 'sfe@gmail.com',
        phone: '+31 64923909',
        app_version: '0.0.1',
    },
];