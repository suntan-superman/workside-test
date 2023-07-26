import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  Color,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const ActiveRequests1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activeRequests}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <Text
        style={[
          styles.login,
          styles.loginLayout,
          styles.loginTypo,
          styles.loginTypo1,
        ]}
      >
        ELK HILLS 26Z 383
      </Text>
      <Text
        style={[
          styles.login1,
          styles.loginLayout,
          styles.loginTypo,
          styles.loginTypo1,
        ]}
      >
        GPS 84
      </Text>
      <View style={[styles.newRequest, styles.requestSpaceBlock]}>
        <Text style={[styles.loginLayout, styles.loginTypo]}>NEW REQUEST</Text>
      </View>
      <View style={[styles.requestDetails, styles.requestSpaceBlock]}>
        <Text style={styles.loginTypo}>REQUEST DETAILS</Text>
      </View>
      <View style={[styles.requestWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.request}>Request</Text>
      </View>
      <View
        style={[
          styles.reqDateWrapper,
          styles.goBackAgainLayout,
          styles.wrapperFlexBox,
        ]}
      >
        <Text style={[styles.reqDate, styles.statusTypo]}>
          <Text style={styles.req}>Req</Text>
          <Text style={styles.date}>Date</Text>
        </Text>
      </View>
      <View style={[styles.reqTimeWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.reqDate, styles.statusTypo]}>
          <Text style={styles.req}>Req</Text>
          <Text style={styles.date}>Time</Text>
        </Text>
      </View>
      <View style={[styles.statusWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.status, styles.statusTypo]}>Status</Text>
      </View>
      <View style={[styles.etaWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.status, styles.statusTypo]}>ETA</Text>
      </View>
      <View
        style={[
          styles.frameParent,
          styles.frameParentPosition,
          styles.frameParentPosition1,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Welder</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>03/15</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>08:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Active</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>09:00</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameGroup,
          styles.frameParentPosition,
          styles.framePosition,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>M Electr</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>03/15</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>09:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Active</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>10:00</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameContainer,
          styles.frameParentPosition,
          styles.frameParentPosition1,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Vacuum</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>03/16</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>08:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Active</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>08:00</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameParent1,
          styles.frameParentPosition,
          styles.framePosition,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Wireline</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>03/16</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>12:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Pending</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>12:00</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameParent2,
          styles.frameParentPosition,
          styles.frameParentPosition1,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Packer</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>03/16</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>15:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>Pending</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.status, styles.statusTypo]}>15:00</Text>
        </View>
      </View>
      <View style={[styles.goBackAgain, styles.goBackAgainLayout]}>
        <Image
          style={styles.goBackAgainChild}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <View style={styles.noAlarm}>
        <Image
          style={styles.alarmIcon}
          resizeMode="cover"
          source={require("../assets/alarm3.png")}
        />
      </View>
      <View style={styles.menuBars}>
        <Image
          style={styles.menuBarsChild}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
        <Image
          style={[styles.menuBarsChild, styles.mt4]}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
        <Image
          style={[styles.menuBarsChild, styles.mt4]}
          resizeMode="cover"
          source={require("../assets/line-11.png")}
        />
      </View>
      <Pressable
        style={styles.dropMenu}
        onPress={() => navigation.navigate("ActiveProjects")}
      >
        <Pressable onPress={() => navigation.navigate("ActiveProjects")}>
          <Text style={[styles.activeProjects1, styles.projectsTypo]}>
            Active Projects
          </Text>
        </Pressable>
        <Pressable
          style={styles.mt14}
          onPress={() => navigation.navigate("PendingProjects")}
        >
          <Text style={[styles.pendingProjects1, styles.projectsTypo]}>
            Pending Projects
          </Text>
        </Pressable>
        <Pressable
          style={styles.mt14}
          onPress={() => navigation.navigate("ArchivedProjects")}
        >
          <Text style={[styles.archivedProjects1, styles.projectsTypo]}>
            Archived Projects
          </Text>
        </Pressable>
        <Image
          style={[styles.dropMenuChild, styles.mt14]}
          resizeMode="cover"
          source={require("../assets/line-4.png")}
        />
        <Pressable
          style={styles.mt14}
          onPress={() => navigation.navigate("WorksideLogin4")}
        >
          <Text style={[styles.logout1, styles.loginLayout]}>Logout</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_xs,
  },
  mt14: {
    marginTop: Margin.m_lg,
  },
  loginLayout: {
    height: 31,
    fontSize: FontSize.size_base,
    color: Color.backgroundPrimary,
  },
  loginTypo: {
    width: 289,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    height: 31,
    textAlign: "center",
  },
  loginTypo1: {
    left: 69,
    width: 289,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    position: "absolute",
  },
  requestSpaceBlock: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    width: 359,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "space-between",
    left: "50%",
    top: 283,
    flexDirection: "row",
  },
  goBackAgainLayout: {
    width: 61,
    padding: Padding.p_md,
    position: "absolute",
  },
  statusTypo: {
    color: Color.gray_200,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameParentPosition: {
    opacity: 0.5,
    alignItems: "center",
    width: 428,
    top: "50%",
    marginLeft: -214,
    padding: Padding.p_sm,
    justifyContent: "space-between",
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  frameParentPosition1: {
    backgroundColor: Color.silver_100,
    alignItems: "center",
    width: 428,
    top: "50%",
    marginLeft: -214,
  },
  framePosition: {
    alignItems: "center",
    width: 428,
    top: "50%",
    marginLeft: -214,
    backgroundColor: Color.labelPrimary,
  },
  projectsTypo: {
    fontSize: FontSize.size_base,
    width: 235,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    top: 159,
  },
  login1: {
    top: 190,
  },
  newRequest: {
    top: 834,
    left: 34,
  },
  requestDetails: {
    top: 749,
    left: 35,
  },
  request: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    color: Color.backgroundPrimary,
  },
  requestWrapper: {
    marginLeft: -209,
    width: 54,
    padding: Padding.p_md,
    position: "absolute",
  },
  req: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  date: {
    margin: Margin.m_4xs,
  },
  reqDate: {
    textAlign: "center",
    color: Color.gray_200,
  },
  reqDateWrapper: {
    marginLeft: -121.75,
  },
  reqTimeWrapper: {
    marginLeft: -27.5,
    width: 50,
    padding: Padding.p_md,
    position: "absolute",
  },
  status: {
    textAlign: "left",
  },
  statusWrapper: {
    marginLeft: 55.75,
    width: 65,
    padding: Padding.p_md,
    position: "absolute",
  },
  etaWrapper: {
    marginLeft: 154,
    width: 55,
    padding: Padding.p_md,
    position: "absolute",
  },
  welderWrapper: {
    padding: Padding.p_md,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: -138,
  },
  frameGroup: {
    marginTop: -91,
  },
  frameContainer: {
    marginTop: -44,
  },
  frameParent1: {
    marginTop: 3,
  },
  frameParent2: {
    marginTop: 50,
  },
  goBackAgainChild: {
    width: 41,
    height: 22,
  },
  goBackAgain: {
    top: 20,
    left: 19,
    height: 20,
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
    top: 0,
    left: 307,
    width: 60,
    height: 60,
    position: "absolute",
  },
  menuBarsChild: {
    height: 3,
    width: 38,
  },
  menuBars: {
    top: 16,
    left: 378,
    height: 14,
    width: 38,
    position: "absolute",
  },
  activeProjects1: {
    height: 33,
    width: 235,
  },
  pendingProjects1: {
    height: 35,
    width: 235,
  },
  archivedProjects1: {
    width: 235,
  },
  dropMenuChild: {
    width: 224,
    height: 4,
  },
  logout1: {
    width: 235,
    textAlign: "left",
    height: 31,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dropMenu: {
    top: 47,
    left: 194,
    backgroundColor: "#b0f6a5",
    height: 200,
    width: 235,
    padding: Padding.p_sm,
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
