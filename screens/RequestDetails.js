import * as React from "react";
import { useState} from 'react';
import { Text, 
  TextInput,
  StyleSheet,
  View, 
  SafeAreaView,
  Pressable, 
  Platform,
  TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import DateTimePickerModal from 'react-native-modal-datetime-picker';


function logID (id) {
  // console.log(id);
}

const RequestDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const [requestType, setRequestType] = useState( "Wireline");
  const [requestQty, setRequestQty]= useState(1);
  const [requestComment, setRequestComment]= useState("No Comments");
  const [requestVendor, setRequestVendor]= useState("Snow Well Service");
  const [requestDateTime, setRequestDateTime]= useState(new Date());
  const [requestLinkTo, setRequestLinkTo]= useState("Welder");
  const stringDateTime= new Date().toLocaleString();

  // const initialvalues = {
  //     requestID: 1,
  //     requestType: "Wireline",
  //     requestQty: 1,
  //     requestComment: "No Comments II",
  //     requestVendor: "Snow Well Service",
  //     requestDateTime: "1993/06/11",
  //     // requestDateTime: new Date(),
  //     requestLinkTo: "Welder"  
  //   };
  
  // const [reqData, setReqData] = useState(initialvalues);

  // const handleChange = (e) => {
  //     setReqData({ ...reqData, [e.target.name]: e.target.value });
  //   };


  // const [requestData, setRequestData] = useState(
  //     {
  //       requestID: 1,
  //       requestType: "Wireline",
  //       requestQty: 1,
  //       requestComment: "No Comments II",
  //       requestVendor: "Snow Well Service",
  //       requestDateTime: new Date(),
  //       requestLinkTo: "Welder"  
  //     }
  // )

// function updateType (type) {
//   setRequestData( requestData.requestType = type)
// }
  // const stateRequestData = {
  //     requestID: 1,
  //     requestType: "Wireline",
  //     requestQty: 1,
  //     requestComment: "No Comments",
  //     requestVendor: "Snow Well Service",
  //     requestDateTime: new Date(),
  //     requestLinkTo: "",
  //     };
  
      // onPress = () => {
      //   this.stateRequestData({
      //     requestType: "Cement", 
      //   });
      // };

  // const [reqType, setReqType] = useState("Wireline");
  // const [reqQty, setReqQty] = useState(1); 
  // const [reqComment, setReqComment] = useState("");
  // const [reqVendor, setVendor] = useState("");
  // const [reqDateTime, setReqDateTime] = useState(new Date());
  // const [reqLinkTo, setReqLinkTo] = useState("");

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

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

  const showMode = (currentMode) => {
   setDatePickerVisible(currentMode);
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
          navigation.navigate("ActiveRequests")
        }
      >
        <Text style={styles.buttonHolder}>SAVE CHANGES</Text>
      </Pressable>
      <Pressable
        style={[styles.viewProgressTop, styles.buttonStyle]}
        onPress={() =>
          navigation.navigate("RequestMapping")
        }
      >
        <Text style={styles.buttonHolder}>VIEW PROGRESS</Text>
      </Pressable>

{/* ***************************************************************************** */}
{  /* Request Data Field */ }
{/* ***************************************************************************** */}
      <Text style={[styles.requestLabel, styles.infoFieldStyle]}>Request</Text>
        <TextInput style={[styles.fieldHeight, styles.requestPosition]}
            value={requestType}
            // name="requestType"
            // id="requestType"
            // onChange={handleChange}
            onChangeText= {(text) => setRequestType(text)}
            editable = {true}
            // numericValue
            // placeholder="Select Product or Service"
            // multiline
            // keyboardType="numeric"
            // keyboardType="email-address"
            // keyboardType="phone-pad"
            // secureTextEntry="true"
            />
{/* ***************************************************************************** */}
{  /* Quantity Data Field */ }
{/* ***************************************************************************** */}
      <Text style={[styles.quantityLabel, styles.infoFieldStyle]}>Quantity</Text>
        {/* <Text style={[styles.fieldHeight, styles.quantityPosition]} /> */}
        <TextInput style={[styles.fieldHeight, styles.quantityPosition]}
              value={String(requestQty)}
              // value= {String(requestQty)}
              // name="requestQty"
              // id="requestQty"
              // onChange={handleChange}
              onChangeText= {(text) => setRequestQty(text)}
              editable = {true}
              numericValue
              // placeholder="Select Product or Service"
              // multiline
              keyboardType="numeric"
              // keyboardType="email-address"
              // keyboardType="phone-pad"
              // secureTextEntry="true"
                />
{/* ***************************************************************************** */}
{/* ***************************************************************************** */}
{  /* Comments Data Field */ }
{/* ***************************************************************************** */}
      <Text style={[styles.commentsLabel, styles.infoFieldStyle]}>Comments</Text>
      {/* <Text style={[styles.fieldHeight, styles.commentsPosition]} /> */}
        <TextInput style={[styles.fieldHeight, styles.commentsPosition]}
              value={requestComment}
              // name="requestComment"
              // id="requestComment"
              // onChange={handleChange}
              onChangeText= {(text) => setRequestComment(text)}
              editable = {true}
              // numericValue
              // placeholder="Select Product or Service"
              multiline
              // keyboardType="numeric"
              // keyboardType="email-address"
              // keyboardType="phone-pad"
              // secureTextEntry="true"  
              />
{/* ***************************************************************************** */}
{  /* Preferred Vendor Data Field */ }
{/* ***************************************************************************** */}
      <Text style={[styles.preferredVendorLabel, styles.infoFieldStyle]}>
        Preferred Vendor </Text>
      {/* <Text style={[styles.fieldHeight, styles.preferredVendorPosition]} /> */}
        <TextInput style={[styles.fieldHeight, styles.preferredVendorPosition]}
                  value={requestVendor}
                  // name="requestVendor"
                  // id="requestVendor"
                  // onChange={handleChange}
                  onChangeText= {(text) => setRequestVendor(text)}
                  editable = {true}
                  // numericValue
                  // placeholder="Select Product or Service"
                  // multiline
                  // keyboardType="numeric"
                  // keyboardType="email-address"
                  // keyboardType="phone-pad"
                  // secureTextEntry="true"  
                  />
{/* ***************************************************************************** */}
{/********************************************************** */}
{/* Date/Time Required Field */}
{/********************************************************** */}
<Text style={[styles.dateRequestedLabel, styles.infoFieldStyle]}>Date/Time Requested</Text>
<Text style={[styles.fieldHeight, styles.dateRequestedPosition]} 
    value= {stringDateTime}
    />
    <Pressable style={styles.selectButtonStyle}
        onPress={() => { 
          setDatePickerVisible(true)}}    
      >
      <Text>SELECT</Text>
    </Pressable>

    <Modal
      animationType= 'slide'
      transparent= {true}
      visible={isDatePickerVisible}
      >
      <View style={styles.dateTimeScreenFrame}>
        <View style={styles.dateTimePickerFrame}>
            <DateTimePickerModal
              date= {requestDateTime}
              // customHeaderIOS={"Please Select Date/Time"}
              isVisible={true}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
        </View> 
      </View>
    </Modal> 

    {/********************************************************** */}
    <Text style={[styles.linkToLabel, styles.infoFieldStyle]}>Link To</Text>
      {/* <View style={[styles.fieldHeight, styles.linkedToPosition]} /> */}
        <TextInput style={[styles.fieldHeight, styles.linkedToPosition]}
                  value={requestLinkTo}
                  // name="requestLinkTo"
                  // id="requestLinkTo"
                  // onChange={handleChange}
                  onChangeText= {(text) => setRequestLinkTo(text)}
                  editable = {true}
                  // numericValue
                  // placeholder="Select Product or Service"
                  // multiline
                  // keyboardType="numeric"
                  // keyboardType="email-address"
                  // keyboardType="phone-pad"
                  // secureTextEntry="true"  
                  />
                  {/* onChangeText= {(text) => setRequestData({requestLinkTo: text})} /> */}


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
    height: 20,
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
  requestLabel: {
    top: 100,
  },
  requestPosition: {
    top: 130,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
  quantityLabel: {
    top: 170,
  },
  quantityPosition: {
    top: 200,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
   commentsLabel: {
    top: 240,
  },
  commentsPosition: {
    top: 270,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 27,
    position: "absolute",
  },
  preferredVendorLabel: {
    top: 310,
  },
  preferredVendorPosition: {
    top: 340,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 26,
    position: "absolute",
  },
  dateRequestedLabel: {
    top: 380,
  },
  dateRequestedPosition: {
    top: 410,
    width: 250,  // 360
    backgroundColor: Color.silver_200,
    left: 27,
    position: "absolute",
  },
  dateTimeScreenFrame: {
    flex: 1,
    width: "100%",
    height: 500,
  },
  dateTimePickerFrame: {
    flex: 1,
    width: "100%",
    height: 500,
  },
  selectButtonStyle: {
    top: 410,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
    left: 280,
    textAlign: "center",
    position: "absolute",
    margin: "auto",
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontSize: FontSize.size_base,
    color: Color.backgroundPrimary,   
  },
  linkToLabel: {
    top: 450,
  },
  linkedToPosition: {
    top: 480,
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
    top: 580,
  },
  saveChangesTop: {
    top: 660,
  },
  fieldHeight: {
    height: 35,
  },
  requestDetailsItem: {
    height: 37,
  },
  buttonView: {
    height: 30,
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
