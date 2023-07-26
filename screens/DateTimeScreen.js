import * as React from "react";
import { useState} from 'react';
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateTimeScreen = ({route}) => {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(true);

  console.log('Date and Time: ' + route.params.reqDate);
  
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
      navigation.navigate("NewRequest")
  };

  const handleConfirm = (date) => {
    const currentDate = date;
    setDatePickerVisible(Platform.OS === 'ios');
    setSelectedDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDay() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();  
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes(); 

    // setText(fDate + '\n' + fTime)
    // console.log(fDate + ' (' + fTime + ')')
  
    setSelectedDate(date);
    console.log('Date: ' + date);
    hideDatePicker();
  };

    const showMode = (currentMode) => {
    //  setDatePickerVisible(currentMode);
      console.log("Pressed " + isDatePickerVisible)
    };

  return (
    <View style={styles.screenFrame}>
      {/********************************************************** */}
      {/* Go Back Button */}
      {/********************************************************** */}      
        {/* <View style={styles.goBackAgain}>
          <Image
            style={styles.goBackAgainChild}
            resizeMode="cover"
            source={require("../assets/arrow-1.png")}
          />
        </View>
      {/********************************************************** */}
      {/* Alarm Button */}
      {/********************************************************** */}      
        {/* <View style={styles.noAlarm}>
            <Image
              style={styles.alarmIcon}
              resizeMode="cover"
              source={require("../assets/alarm.png")}
            />
        </View> */}
    <View style={styles.datePickerFrame}>
        <DateTimePickerModal
          date={selectedDate}
          isVisible={Boolean(isDatePickerVisible)}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
    </View>
      {/********************************************************** */}
      {/* Select Button */}
      {/********************************************************** */}
        {/* <Pressable
            style={styles.selectButton}
            onPress={() =>
              navigation.navigate("WorksideWorkflow", {
                screen: "NewRequest",
              })
            }
          >
            <Text>SELECT</Text>
        </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screenFrame: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
  datePickerFrame: {
    top: 100,
    padding: 50,
  },
});

export default DateTimeScreen;
