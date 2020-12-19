import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import i from '../../common/i';
import Header from '../../components/Header';
import { colors } from '../../common/colors';
import MaterialTabs from 'react-native-material-tabs';

export function WorkingHours() {

    const [selectedTab, setSelectedTab] = useState(0);

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <View style={i.container}>
            <Header title={'Working Hours'} />

            <MaterialTabs
                items={['Active', 'Expired', 'Deleted']}
                selectedIndex={selectedTab}
                onChange={(e) => setSelectedTab(e)}
                barColor={colors.WHITE}
                indicatorColor={colors.GREEN}
                activeTextColor={colors.DARK}
                inactiveTextColor={colors.GREY3}
            />

            <View style={styles.content}>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={i.btn}>
                        <Text style={{ color: '#fff' }}>Add</Text>
                    </TouchableOpacity>
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
            <Text style={i.normalText}>{'START DATE'}</Text>
            <Text style={i.normalText}>{item.start_date}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'END DATE'}</Text>
            <Text style={i.normalText}>{item.end_date}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'START TIME'}</Text>
            <Text style={i.normalText}>{item.start_time}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'WORKING DAYS'}</Text>
            <Text style={i.smallText}>{item.working_days}</Text>
        </View>
        <View style={styles.row}>
            <Text style={i.normalText}>{'NOTES'}</Text>
            <Text style={i.normalText}>{item.notes}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    content: {
        flex: 1,
        padding: 12
    },
    btnGroup: {
        flexDirection: 'row',
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
      start_date: '2020-06-08',
      end_date: '2020-10-09',
      start_time: '06:00',
      end_time: '05:59',
      working_days: 'Mon Tue Wed Thu Fri Sat Sun',
      notes: 'test',
    },
    {
      id: 2,
      start_date: '2020-04-08',
      end_date: '2020-12-09',
      start_time: '16:00',
      end_time: '15:59',
      working_days: 'Mon Tue Wed',
      notes: 'test',
    },
    {
      id: 3,
      start_date: '2020-03-08',
      end_date: '2020-10-09',
      start_time: '06:10',
      end_time: '05:29',
      working_days: 'Mon Tue Wed Thu Fri Sat Sun',
      notes: 'test',
    },
  ];