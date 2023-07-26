import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ListboxComponent from "../components/ListboxComponent";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const NewRequest2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newRequest}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <Text style={[styles.request, styles.requestTypo]}>{` `}</Text>
      <Text style={styles.datetimeRequested}>Date/Time Requested</Text>
      <View style={[styles.newRequestChild, styles.newPosition]} />
      <RNPTextInput
        style={[styles.newRequestItem, styles.newPosition]}
        label="dateReq"
        mode="outlined"
        theme={{ colors: { background: "#c4c4c4" } }}
      />
      <Text style={[styles.quantity, styles.quantityTypo]}>Quantity</Text>
      <View style={[styles.newRequestInner, styles.rectangleViewLayout]} />
      <Text style={styles.quantityTypo}>{` `}</Text>
      <RNPTextInput
        style={[styles.rectangleRnptextinput, styles.newRequestInnerPosition]}
        label="quantity"
        mode="outlined"
        theme={{ colors: { background: "#c4c4c4" } }}
      />
      <Text style={[styles.comments, styles.commentsTypo]}>Comments</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={styles.commentsTypo}>{` `}</Text>
      <RNPTextInput
        style={[styles.newRequestChild1, styles.rectangleViewPosition]}
        label="comments"
        mode="outlined"
        theme={{ colors: { background: "#c4c4c4" } }}
      />
      <Pressable
        style={styles.goBackAgain}
        onPress={() => navigation.navigate("ActiveRequests3")}
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
          source={require("../assets/alarm1.png")}
        />
      </View>
      <ListboxComponent />
      <Text style={[styles.datetimeAffirmed, styles.requestTypo]}>
        Date/Time Affirmed
      </Text>
      <View style={[styles.newRequestChild2, styles.newChildPosition]} />
      <RNPTextInput
        style={[styles.newRequestChild3, styles.newChildPosition]}
        label="timeReq"
        mode="outlined"
        theme={{ colors: { background: "#c4c4c4" } }}
      />
      <View style={[styles.showLocationButtonParent, styles.parentFlexBox]}>
        <View style={styles.saveChangesSpaceBlock}>
          <Text style={styles.login1Typo}>SHOW LOCATION</Text>
        </View>
        <Pressable
          style={[styles.saveChanges, styles.saveChangesSpaceBlock]}
          onPress={() => navigation.navigate("ActiveRequests3")}
        >
          <Text style={styles.login1Typo}>SAVE CHANGES</Text>
        </Pressable>
      </View>
      <View style={[styles.loginParent, styles.parentFlexBox]}>
        <Text style={styles.login1Typo}>ELK HILLS 26Z 383</Text>
        <Text style={[styles.login1, styles.login1Typo]}>GPS 84</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  requestTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  newPosition: {
    width: 360,
    top: 601,
    left: 27,
    position: "absolute",
  },
  quantityTypo: {
    height: 31,
    top: 315,
    fontSize: FontSize.size_5xl,
    left: 27,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 32,
    backgroundColor: Color.silver_200,
  },
  newRequestInnerPosition: {
    top: 349,
    left: 26,
    width: 360,
    position: "absolute",
  },
  commentsTypo: {
    top: 396,
    height: 32,
    left: 28,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 431,
    width: 360,
    left: 27,
    position: "absolute",
  },
  newChildPosition: {
    left: 29,
    top: 686,
    width: 360,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  saveChangesSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    width: 357,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_9xs,
  },
  login1Typo: {
    width: 289,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    height: 31,
    fontSize: FontSize.size_5xl,
    color: Color.backgroundPrimary,
  },
  workside: {
    top: 50,
    left: 84,
    fontSize: FontSize.size_29xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  request: {
    top: 194,
    left: 27,
    fontSize: FontSize.size_5xl,
  },
  datetimeRequested: {
    top: 569,
    left: 28,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  newRequestChild: {
    height: 30,
    backgroundColor: Color.silver_200,
  },
  newRequestItem: {
    height: 37,
  },
  quantity: {
    width: 102,
  },
  newRequestInner: {
    left: 26,
    top: 349,
    width: 360,
    position: "absolute",
  },
  rectangleRnptextinput: {
    height: 40,
    left: 26,
  },
  comments: {
    width: 129,
  },
  rectangleView: {
    height: 32,
    backgroundColor: Color.silver_200,
  },
  newRequestChild1: {
    height: 115,
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
    padding: Padding.p_3xs,
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
  datetimeAffirmed: {
    top: 655,
    left: 30,
    width: 233,
    height: 28,
  },
  newRequestChild2: {
    height: 29,
    backgroundColor: Color.silver_200,
  },
  newRequestChild3: {
    height: 36,
  },
  saveChanges: {
    marginTop: 10,
  },
  showLocationButtonParent: {
    top: 761,
    left: 26,
  },
  login1: {
    marginTop: 5,
  },
  loginParent: {
    top: 108,
    left: 62,
  },
  newRequest: {
    backgroundColor: Color.labelPrimary,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default NewRequest2;
