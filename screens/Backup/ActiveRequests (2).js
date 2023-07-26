import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ActiveRequests1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activeRequests}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <View style={styles.frameParent}>
        <View style={styles.loginWrapper}>
          <Text style={[styles.login, styles.loginTypo]}>
            ELK HILLS 26Z 383
          </Text>
        </View>
        <View style={styles.loginWrapper}>
          <Text style={[styles.login, styles.loginTypo]}>GPS 84</Text>
        </View>
      </View>
      <View style={styles.textParent}>
        <Text style={styles.textTypo} />
        <Text style={[styles.text1, styles.textTypo]} />
        <Text style={[styles.text1, styles.textTypo]} />
        <View style={styles.requestDetailsWrapper}>
          <Pressable
            style={styles.requestDetails}
            onPress={() =>
              navigation.navigate("WorksideWorkflow", {
                screen: "RequestDetails",
              })
            }
          >
            <Text style={[styles.requestDetails1, styles.loginTypo]}>
              REQUEST DETAILS
            </Text>
          </Pressable>
        </View>
        <View style={styles.newRequestWrapper}>
          <Pressable
            style={styles.requestDetails}
            onPress={() =>
              navigation.navigate("WorksideWorkflow", { screen: "NewRequest" })
            }
          >
            <Text style={[styles.requestDetails1, styles.loginTypo]}>
              NEW REQUEST
            </Text>
          </Pressable>
        </View>
        <Text style={[styles.text1, styles.textTypo]} />
        <Image
          style={styles.iconSmall}
          resizeMode="cover"
          source={require("../assets/icon--small.png")}
        />
        <Image
          style={styles.iconSmall}
          resizeMode="cover"
          source={require("../assets/icon--small.png")}
        />
      </View>
      <View style={styles.frameGroup}>
        <View style={styles.frameContainer}>
          <View style={styles.requestWrapper}>
            <Text style={styles.request}>Request</Text>
          </View>
          <View style={[styles.reqDateWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.reqDate, styles.statusTypo]}>{`Req
Date`}</Text>
          </View>
          <View style={[styles.reqTimeWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.reqDate, styles.statusTypo]}>{`Req
Time`}</Text>
          </View>
          <View style={[styles.statusWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.status, styles.statusTypo]}>Status</Text>
          </View>
          <View style={[styles.etaWrapper, styles.wrapperSpaceBlock]}>
            <Text style={[styles.status, styles.statusTypo]}>ETA</Text>
          </View>
        </View>
        <View>
          <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Welder</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>03/15</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>08:00</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Active</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>09:00</Text>
            </View>
          </View>
          <View style={[styles.frameParent2, styles.frameParentFlexBox]}>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>M Electr</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>03/15</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>09:00</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Active</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>10:00</Text>
            </View>
          </View>
          <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Vacuum</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>03/16</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>08:00</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Active</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>08:00</Text>
            </View>
          </View>
          <View style={[styles.frameParent2, styles.frameParentFlexBox]}>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Wireline</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>03/16</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>12:00</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Pending</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>12:00</Text>
            </View>
          </View>
          <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Packer</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>03/16</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>15:00</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>Pending</Text>
            </View>
            <View style={styles.loginWrapper}>
              <Text style={[styles.status, styles.statusTypo]}>15:00</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.goBackAgain}
        onPress={() => navigation.navigate("Auth", { screen: "WorksideLogin" })}
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
      <Pressable
        style={styles.menuBars}
        onPress={() =>
          navigation.navigate("WorksideWorkflow", { screen: "ActiveRequests" })
        }
      >
        <Image
          style={styles.menuLayout}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
        <Image
          style={[styles.menuBarsItem, styles.menuLayout]}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
        <Image
          style={[styles.menuBarsItem, styles.menuLayout]}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.backgroundPrimary,
  },
  wrapperSpaceBlock: {
    marginLeft: 33,
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  statusTypo: {
    color: Color.gray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameParentFlexBox: {
    opacity: 0.5,
    padding: Padding.p_8xs,
    width: 428,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  menuLayout: {
    height: 3,
    width: 38,
  },
  workside: {
    top: 78,
    left: 84,
    fontSize: FontSize.size_29xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  login: {
    textAlign: "center",
  },
  loginWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  frameParent: {
    top: 152,
    left: 87,
    alignItems: "center",
    position: "absolute",
  },
  text1: {
    marginTop: 20,
  },
  requestDetails1: {
    display: "flex",
    alignItems: "flex-end",
    width: 289,
    height: 31,
    justifyContent: "center",
    textAlign: "center",
  },
  requestDetails: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.lightgreen_100,
    width: 359,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  requestDetailsWrapper: {
    marginTop: 20,
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  newRequestWrapper: {
    marginTop: 20,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  iconSmall: {
    width: 16,
    height: 16,
    marginTop: 20,
  },
  textParent: {
    marginLeft: -182,
    top: 733,
    left: "50%",
    width: 370,
    height: 184,
    paddingHorizontal: 0,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  request: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.backgroundPrimary,
  },
  requestWrapper: {
    width: 54,
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  reqDate: {
    textAlign: "center",
  },
  reqDateWrapper: {
    width: 61,
    marginLeft: 33,
  },
  reqTimeWrapper: {
    width: 50,
  },
  status: {
    textAlign: "left",
  },
  statusWrapper: {
    width: 65,
  },
  etaWrapper: {
    width: 55,
  },
  frameContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent1: {
    backgroundColor: Color.silver_100,
  },
  frameParent2: {
    backgroundColor: Color.labelPrimary,
  },
  frameGroup: {
    top: 283,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  goBackAgainChild: {
    width: 41,
    height: 22,
  },
  goBackAgain: {
    left: 19,
    height: 20,
    top: 35,
    width: 61,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  alarmIcon: {
    height: "113.33%",
    width: "113.33%",
    top: "0%",
    right: "-6.67%",
    bottom: "-13.33%",
    left: "-6.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  noAlarm: {
    top: 15,
    left: 307,
    width: 60,
    height: 60,
    position: "absolute",
  },
  menuBarsItem: {
    marginTop: 4,
  },
  menuBars: {
    left: 378,
    height: 14,
    width: 38,
    top: 35,
    position: "absolute",
  },
  activeRequests: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
});

export default ActiveRequests1;
