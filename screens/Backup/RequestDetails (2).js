import * as React from "react";
import { useState} from 'react';
import { Text, 
  StyleSheet,
  SafeAreaView, 
  View, 
  Pressable, 
  Image, 
  Platform,
  TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
// import DateTimePickerModal from 'react-native-modal-datetime-picker';


function logID (id) {
  // console.log(id);
}

const RequestDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
    // console.log("On Change")
    };

  const handleConfirm = (date) => {
    // console.log('Visible: ' + isDatePickerVisible);
    setSelectedDate(date);
    hideDatePicker();
  };

  const onChange = (event, selectedDate) => {
    // console.log("On Change")
    
    const currentDate = selectedDate || date;
    setDatePickerVisible(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();  
    let fTime = 'Hours: ' + temmpDate.getHours() + ' | Minutes: ' + tempDate.getMinutes(); 

    setText(fDate + '\n' + fTime)
    console.log(fDate + ' (' + fTime + ')')
  }

  const showMode = (currentMode) => {
  //  setDatePickerVisible(currentMode);
    console.log("Pressed " + isDatePickerVisible)
  }

  // logID(id);

  return (
    <View style={styles.screenFrame}>
      {/* <Text style={styles.worksideID}>ID: {route.params.id}</Text> */}
      <Text style={styles.appTitle}>WORKSIDE</Text>
      <Text style={styles.locationStyle}>ELK HILLS 26Z 383</Text>
      <Text style={styles.unitStyle}>GPS 84</Text>
      <Pressable
        style={[styles.saveChangesTop, styles.buttonStyle]}
        onPress={() =>
          navigation.navigate("WorksideWorkflow", { screen: "ActiveRequests" })
        }
      >
        <Text style={styles.buttonHolder}>SAVE CHANGES</Text>
      </Pressable>
      <Pressable
        style={[styles.viewProgressTop, styles.buttonStyle]}
        onPress={() =>
          navigation.navigate("WorksideWorkflow", { screen: "RequestMapping" })
        }
      >
        <Text style={styles.buttonHolder}>VIEW PROGRESS</Text>
      </Pressable>

      {  /* Request Data Field */ }
      <Text style={[styles.requestLabel, styles.infoFieldStyle]}>Request</Text>
      <Text style={[styles.fieldHeight, styles.requestPosition]} />

      {  /* Quantity Data Field */ }
      <Text style={[styles.quantityLabel, styles.infoFieldStyle]}>Quantity</Text>
      <Text style={[styles.fieldHeight, styles.quantityPosition]} />
 
      {  /* Comments Data Field */ }
      <Text style={[styles.commentsLabel, styles.infoFieldStyle]}>Comments</Text>
      <Text style={[styles.fieldHeight, styles.commentsPosition]} />

      {  /* Preferred Vendor Data Field */ }
      <Text style={[styles.preferredVendorLabel, styles.infoFieldStyle]}>
        Preferred Vendor </Text>
      <Text style={[styles.fieldHeight, styles.preferredVendorPosition]} />

      {  /* Date Requested Data Field */ }
      <Text style={[styles.dateRequested, styles.infoFieldStyle]}>
        Date Requested </Text>
      {/* <TouchableOpacity onPress={console.log("Pressed")}> */}
      <TouchableOpacity onPress={showDatePicker}>
      <Text style={[styles.fieldHeight, styles.dateRequestedPosition]} />
      </TouchableOpacity>

      {/* <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        padding: 20,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    > */}
      {  /* Time Requested Data Field */ }
      <TouchableOpacity onPress={(() => showMode('time'))}>
        <Text style={styles.timeRequested}>Time Requested</Text>
        <Text style={[styles.fieldHeight, styles.timeRequestedPosition]} />
      </TouchableOpacity>

      {/* <DateTimePickerModal
          date={selectedDate}
          isVisible={Boolean(isDatePickerVisible)}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        /> */}


{/* </View>
  </SafeAreaView> */}

      { /* Link To  Data Field */ }
      <Text style={[styles.linkTo, styles.infoFieldStyle]}>Link To</Text>
      <View style={[styles.fieldHeight, styles.linkedToPosition]} />

      { /* Alarm */ }
      {/* <View style={styles.noAlarm}>
        <Image
          style={styles.alarmIcon}
          resizeMode="cover"
          source={require("../assets/alarm.png")}
        />
      </View> */}
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
  appTitle: {
    top: 78,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  locationStyle: {
    top: 100,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  unitStyle: {
    top: 120,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  buttonHolder: {
    height: 25,
    width: 289,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    color: Color.backgroundPrimary,
  },
  buttonStyle: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    width: 359,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
    left: 34,
    position: "absolute",
  },
  infoFieldStyle: {
    left: 27,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  requestPosition: {
    top: 226,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
  quantityPosition: {
    top: 299,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
  preferredVendorPosition: {
    top: 455,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
  commentsPosition: {
    top: 375,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 27,
    position: "absolute",
  },
  dateRequestedPosition: {
    top: 531,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 27,
    position: "absolute",
  },
  timeRequestedPosition: {
    top: 609,
    left: 28,
    width: 360,
    backgroundColor: Color.silver_200,
    position: "absolute",
  },
  linkedToPosition: {
    top: 690,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
  worksideID: {
    top: 150,
    left: 84,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  viewProgressTop: {
    top: 750,
  },
  saveChangesTop: {
    top: 828,
  },
  requestLabel: {
    top: 194,
  },
  fieldHeight: {
    height: 35,
  },
  requestDetailsItem: {
    height: 37,
  },
  preferredVendorLabel: {
    top: 423,
  },
  buttonView: {
    height: 30,
  },
  dateRequested: {
    top: 499,
  },
  timeRequested: {
    top: 577,
    left: 29,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  quantityLabel: {
    top: 267,
  },
   commentsLabel: {
    top: 343,
  },
  linkTo: {
    top: 658,
  },
  goBackAgainChild: {
    width: 41,
    height: 22,
  },
  goBackAgain: {
    top: 20,
    left: 19,
    width: 61,
    height: 20,
    padding: Padding.p_md,
    position: "absolute",
  },
  alarmIcon: {
    height: "113.33%",
    width: "106.67%",
    top: "0%",
    right: "0%",
    bottom: "-13.33%",
    left: "-6.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  noAlarm: {
    top: 30,
    left: 368,
    width: 50, // 60
    height: 50, //60
    position: "absolute",
  },
  requestDetails: {
    backgroundColor: Color.labelPrimary,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default RequestDetails;
