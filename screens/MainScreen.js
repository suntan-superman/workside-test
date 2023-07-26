import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MainScreen = () => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <Pressable style={[styles.signUpButton, styles.signSpaceBlock]}>
        <Text style={styles.login}>ACTIVE PROJECTS</Text>
      </Pressable>
      <Pressable style={[styles.signUpButton1, styles.signSpaceBlock]}>
        <Text style={styles.login}>PENDING PROJECTS</Text>
      </Pressable>
      <Pressable style={[styles.signUpButton2, styles.signSpaceBlock]}>
        <Text style={styles.login}>ARCHIVED PROJECTS</Text>
      </Pressable>
      <Pressable style={[styles.signUpButton3, styles.signSpaceBlock]}>
        <Text style={styles.login}>SUPPLIER REVIEW</Text>
      </Pressable>
      <Pressable style={styles.goBackAgain}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  signSpaceBlock: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    width: 359,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
    left: 35,
    position: "absolute",
  },
  workside: {
    top: 50,
    left: 84,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.backgroundPrimary,
    position: "absolute",
  },
  login: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemibold,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 289,
    height: 31,
    color: Color.backgroundPrimary,
  },
  signUpButton: {
    top: 239,
  },
  signUpButton1: {
    top: 337,
  },
  signUpButton2: {
    top: 435,
  },
  signUpButton3: {
    top: 565,
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
  mainScreen: {
    backgroundColor: Color.labelPrimary,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default MainScreen;
