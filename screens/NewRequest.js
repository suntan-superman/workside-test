import * as React from "react";
import { useState} from 'react';
import { Text, 
  TextInput,
  StyleSheet, 
  View,
  Pressable, 
  Image,
  TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import SelectDropdown from 'react-native-select-dropdown';
import Checkbox from 'expo-checkbox';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const NewRequest = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reqDateTime, setReqDateTime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  // const id = route.params.id;

  const [msaRequest, setMSARequest] = useState(true);
  const [openRequest, setOpenRequest] = useState(false);
  const [reqType, setReqType] = useState("MSA");

  const requestItems = ["Cement", "Wireline", "Welder", "Electrician"]

  const msaVendor = () => {
    setMSARequest(true);
    setOpenRequest(false);
    setReqType("MSA");
  }

  const openVendor = () => {
    setMSARequest(false);
    setOpenRequest(true);
    setReqType("OPEN");
  }

  const hideDatePicker = () => {
     setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    const currentDate = date;
    setDatePickerVisible(Platform.OS === 'ios');
    setSelectedDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDay() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();  
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes(); 

    setSelectedDate(date);
    console.log('Date: ' + date);
    hideDatePicker();
  };

  return (
    <View style={styles.screenFrame}>
      <Text style={styles.appTitle}>WORKSIDE</Text>
      <Text style={styles.locationStyle}>ELK HILLS 26Z 383</Text>
      <Text style={styles.unitStyle}>GPS 84</Text>

    {/********************************************************** */}
    {/* Save Changes Button */}
    {/********************************************************** */}
    <View style={styles.saveChangesButtonTop}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() =>
            navigation.navigate("ActiveRequests")
          }
        >
          <Text style={styles.buttonHolder}>
            SAVE CHANGES
          </Text>
        </Pressable>
      </View>
    {/********************************************************** */}
    {/* Request Dropdown */}
    {/********************************************************** */}
    <View style={styles.selectRequestView}>
      <Text style={styles.selectRequestStyle}>
        Select Request
      </Text>
    </View>
    <View style={styles.listboxComponent}>
      <SelectDropdown
          data={requestItems}
          onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
      />
    </View>
    {/********************************************************** */}
    {/* Quantity Field */}
    {/********************************************************** */}
      <Text style={[styles.quantityLabelTop, styles.infoFieldStyle]}>Quantity</Text>
      <Text style={[styles.fieldHeight, styles.quantityPosition]} />
    {/********************************************************** */}

    {/********************************************************** */}
    {/* Comments Field */}
    {/********************************************************** */}
    <Text style={[styles.commentsLabelTop, styles.infoFieldStyle]}>Comments</Text>
    <TextInput 
        style={styles.commentsInputStyle} 
        multiline={true}
        editable={false}>
    </TextInput>
    {/********************************************************** */}

    {/********************************************************** */}
    {/* Preferred Vendor Field */}
    {/********************************************************** */}
    <Text style={[styles.preferredLabelLabelTop, styles.infoFieldStyle]}>Preferred Vendor</Text>

    <View style={styles.checkBoxView}>
      <Checkbox
        style={styles.checkBoxStyle}
        value={msaRequest}
        onValueChange={msaVendor}
      />
      {/* <TouchableOpacity  onPress={msaVendor}> */}
      <TouchableOpacity  onPress= {console.log("Pressed MSA")}>
        <Text styles={styles.infoFieldStyle}>MSA</Text>
      </TouchableOpacity>
      <Checkbox 
        style={styles.checkBoxStyle}
        value={openRequest}
        onValueChange={openVendor}
      />
      <TouchableOpacity  onPress={openVendor}>
        <Text styles={styles.infoFieldStyle}>Open</Text>
        </TouchableOpacity>
      </View>

      <Pressable
        style={styles.selectButtonStyle}
        // onPress={() =>
        // }
      >
        {/* <Text style={styles.selectButtonStyle}>SELECT</Text> */}
        <Text>SELECT</Text>
      </Pressable>
    {/********************************************************** */}

    {/********************************************************** */}
    {/* Date/Time Required Field */}
    {/********************************************************** */}
    <Text style={[styles.dateTimeRequiredLabelTop, styles.infoFieldStyle]}>Date/Time Requested</Text>
      <Text style={[styles.fieldHeight, styles.dateTimePosition]}
        onPress={() => {
          setDatePickerVisible(true)}}    
      />
        <Modal
          animationType= 'slide'
          transparent= {true}
          visible={isDatePickerVisible}
          >
          <View style={styles.dateTimeScreenFrame}>
            <View style={styles.dateTimePickerFrame}>
                <DateTimePickerModal
                  date={reqDateTime}
                  // isVisible={Boolean(isDatePickerVisible)}
                  isVisible={true}
                  mode="datetime"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
            </View>
          </View> 
        </Modal>        
    {/********************************************************** */}

    {/********************************************************** */}

    {/********************************************************** */}
    {/* Link To Field */}
    {/********************************************************** */}
    <Text style={[styles.linkToLabelTop, styles.infoFieldStyle]}>Link To</Text>
      <Text style={[styles.fieldHeight, styles.linkToPosition]} />
    {/********************************************************** */}

    {/********************************************************** */}
    {/* Alarm Icon */}
    {/********************************************************** */}
    {/* <View style={styles.noAlarm}>
        <Image
          style={[styles.alarmIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/alarm.png")}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screenFrame: {
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.labelPrimary,
  },
  appTitle: {
    top: 20,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  locationStyle: {
    top: 40,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  unitStyle: {
    top: 60,
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
    margin: "auto"
  },
  selectRequestView: {
    height: "33.33%",
    width: "65.71%",
    top: 100,
    right: "28.57%",
    bottom: "33.33%",
    left: "5.71%",
    position: "absolute",
  },
  selectRequestStyle: {
    color: Color.dimgray_100,
    left: "0%",
    top: "0%",
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  requestListboxComponent: {
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  listboxComponent: {
    top: 130,
    left: 30,
    width: 359,
    height: 250,
  },
  quantityLabelTop: {
    top: 180,
  },
  quantityPosition: {
    top: 210,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
  commentsLabelTop: {
    top: 240,
  },
  commentsParentView: {
    top: 280,
    height: 78,
    left: 27,
    position: "absolute",
  },
  commentsInputStyle: {
    top: 5,
    height: 120,
    margin: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: Color.silver_200,
  },
  preferredLabelLabelTop: {
    top: 400,
  },
  checkBoxView: {
    flex: 1,
    top: 410,
    height: 78,
    left: 30,
    flexDirection: 'row',
    alignItems: "center",
    position: "absolute",
  },
  checkBoxStyle: {
    margin: 8,
  },
  selectButtonStyle: {
    top: 430,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
    left: 200,
    textAlign: "center",
    position: "absolute",
    margin: "auto",
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    color: Color.backgroundPrimary,   
  },
  dateTimeRequiredLabelTop: {
    top: 480,
  },
  dateTimePosition: {
    top: 510,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
  dateTimeScreenFrame: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
  dateTimePickerFrame: {
    top: 100,
    padding: 50,
  },
  linkToLabelTop: {
    top: 550,
  },
  linkToPosition: {
    top: 580,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
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
  fieldHeight: {
    height: 30,
  },
  screenFrame: {
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.labelPrimary,
  },
  quantityParentPosition: {
    left: 26,
    position: "absolute",
  },
  quantityParentPosition: {
    left: 28,
    position: "absolute",
  },

  saveChanges: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    width: 357,
  },
  saveChangesButtonTop: {
    top: 650,
    padding: Padding.p_3xs,
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
    width: "105%",
    right: "1.67%",
    bottom: "-13.33%",
    left: "-6.67%",
    top: "0%",
  },
  noAlarm: {
    top: 26,
    left: 369,
    width: 60,
    height: 60,
    position: "absolute",
  },
});

export default NewRequest;

      // checkedIcon={<Image source={require("../../assets/radio-button.png")}/>}
      // uncheckedIcon={<Image source={require("../../assets/radio-button-no-selection.png")}/>}
