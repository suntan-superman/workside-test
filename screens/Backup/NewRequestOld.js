import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TextInput,
  Image,
} from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const NewRequest = () => {
  const [rectangleDatePicker, setRectangleDatePicker] = useState(undefined);
  const [listboxComponentOpen, setListboxComponentOpen] = useState(false);
  const [listboxComponentValue, setListboxComponentValue] = useState("");
  const [rectangleDatePicker1, setRectangleDatePicker1] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.newRequest}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <Text style={[styles.login, styles.loginTypo, styles.loginTypo1]}>
        ELK HILLS 26Z 383
      </Text>
      <Text style={[styles.login1, styles.loginTypo, styles.loginTypo1]}>
        GPS 84
      </Text>
      <Pressable
        style={[styles.saveChanges, styles.saveChangesSpaceBlock]}
        onPress={() => navigation.navigate("ActiveRequests")}
      >
        <Text style={styles.loginTypo}>SAVE CHANGES</Text>
      </Pressable>
      <Text style={[styles.request, styles.requestTypo]}>{` `}</Text>
      <Text style={styles.datetimeRequested}>Date/Time Requested</Text>
      <View style={[styles.newRequestChild, styles.newChildLayout]} />
      <Pressable
        date={rectangleDatePicker}
        onSelect={setRectangleDatePicker}
        onPress={() => navigation.navigate("NewRequestWDateTime")}
        controlStyle={styles.rectangleDatePickerValue}
      />
      <Text style={[styles.quantity, styles.quantityTypo]}>Quantity</Text>
      <View
        style={[styles.newRequestItem, styles.newPosition, styles.newPosition1]}
      />
      <Text style={styles.quantityTypo}>{` `}</Text>
      <View
        style={[
          styles.newRequestInner,
          styles.newPosition,
          styles.newPosition1,
        ]}
      />
      <Text style={[styles.comments, styles.commentsTypo]}>Comments</Text>
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Text style={styles.commentsTypo}>{` `}</Text>
      <TextInput
        style={[styles.rectangleTextinput, styles.rectanglePosition]}
        placeholder="Placeholder text"
        keyboardType="default"
      />
      <Pressable
        style={styles.goBackAgain}
        onPress={() => navigation.navigate("ActiveRequests")}
      >
        <Image
          style={styles.goBackAgainChild}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <View style={styles.noAlarm}>
        <Image
          style={styles.alarmIcon}
          resizeMode="cover"
          source={require("../assets/alarm.png")}
        />
      </View>
      <View style={[styles.listboxComponent, styles.newPosition]}>
        <DropDownPicker
          open={listboxComponentOpen}
          setOpen={setListboxComponentOpen}
          value={listboxComponentValue}
          setValue={setListboxComponentValue}
          placeholder="Request"
          labelStyle={styles.listboxComponentValue}
          textStyle={styles.listboxComponentText}
        />
      </View>
      <Text style={[styles.datetimeAffirmed, styles.requestTypo]}>
        Date/Time Affirmed
      </Text>
      <View style={[styles.newRequestChild1, styles.newChildLayout]} />
      <Pressable
        date={rectangleDatePicker1}
        onSelect={setRectangleDatePicker1}
        onPress={() => navigation.navigate("NewRequestWDateTime")}
        controlStyle={styles.rectangleDatePicker1Value}
      />
      <Pressable
        style={[
          styles.showLocationButton,
          styles.newPosition,
          styles.saveChangesSpaceBlock,
        ]}
      >
        <Text style={styles.loginTypo}>SHOW LOCATION</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDatePickerValue: {
    position: "absolute",
    top: 601,
    left: 27,
    width: 360,
    height: 37,
    backgroundColor: "#c4c4c4",
  },
  listboxComponentValue: {
    color: "#333",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Montserrat_bold",
  },
  listboxComponentText: {
    color: "#666",
    fontSize: 16,
    fontFamily: "Montserrat_regular",
  },
  rectangleDatePicker1Value: {
    position: "absolute",
    top: 686,
    left: 29,
    width: 360,
    height: 36,
    backgroundColor: "#c4c4c4",
  },
  loginTypo: {
    height: 31,
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
  loginTypo1: {
    left: 69,
    height: 31,
    width: 289,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    position: "absolute",
  },
  saveChangesSpaceBlock: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    width: 357,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
  },
  requestTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  newChildLayout: {
    width: 360,
    backgroundColor: Color.silver_200,
    position: "absolute",
  },
  quantityTypo: {
    top: 315,
    left: 27,
    height: 31,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  newPosition: {
    left: 26,
    position: "absolute",
  },
  newPosition1: {
    top: 349,
    left: 26,
    width: 360,
    backgroundColor: Color.silver_200,
  },
  commentsTypo: {
    top: 396,
    height: 32,
    left: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectanglePosition: {
    top: 431,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 27,
    position: "absolute",
  },
  workside: {
    top: 50,
    left: 84,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  login: {
    top: 122,
  },
  login1: {
    top: 153,
  },
  saveChanges: {
    top: 834,
    left: 29,
    position: "absolute",
  },
  request: {
    top: 194,
    left: 27,
  },
  datetimeRequested: {
    top: 569,
    left: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  newRequestChild: {
    top: 601,
    height: 30,
    left: 27,
  },
  quantity: {
    width: 102,
  },
  newRequestItem: {
    height: 32,
  },
  newRequestInner: {
    height: 40,
  },
  comments: {
    width: 129,
  },
  rectangleView: {
    height: 32,
  },
  rectangleTextinput: {
    height: 116,
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
    top: 0,
    left: 368,
    width: 60,
    height: 60,
    position: "absolute",
  },
  listboxComponent: {
    top: 185,
    width: 359,
    height: 257,
  },
  datetimeAffirmed: {
    top: 655,
    left: 30,
    width: 233,
    height: 28,
  },
  newRequestChild1: {
    top: 686,
    height: 29,
    left: 29,
  },
  showLocationButton: {
    top: 761,
  },
  newRequest: {
    backgroundColor: Color.labelPrimary,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default NewRequest;
