import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import i from '../../common/i'
import Header from '../../components/Header';
import CalendarPicker from 'react-native-calendar-picker';

export function SelectTwoDates() {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const onDateChange = (date, type) => {
        if (type === 'END_DATE') {
            setEndDate(date)
        } else {
            setStartDate(date)
            setEndDate(null)
        }
    };

    return (
        <View style={i.container}>
            <Header title={'SelectTwoDates'} />

            <View style={{ flex: 1, }}>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    // minDate={minDate}
                    // maxDate={maxDate}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={onDateChange}
                />
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    calendar: {

    }
});