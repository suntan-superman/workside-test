import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const ActiveRequests3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activeRequests}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={[styles.requestWrapper, styles.wrapperFlexBox]}>
            <Text style={styles.request}>Request</Text>
          </View>
          <View
            style={[
              styles.goBackAgainLayout,
              styles.ml33,
              styles.wrapperFlexBox,
            ]}
          >
            <Text style={[styles.reqDate, styles.statusTypo]}>
              <Text style={styles.req}>Req</Text>
              <Text style={styles.date}>Date</Text>
            </Text>
          </View>
          <View
            style={[styles.reqTimeWrapper, styles.ml33, styles.wrapperFlexBox]}
          >
            <Text style={[styles.reqDate, styles.statusTypo]}>
              <Text style={styles.req}>Req</Text>
              <Text style={styles.date}>Time</Text>
            </Text>
          </View>
          <View
            style={[styles.statusWrapper, styles.ml33, styles.wrapperFlexBox]}
          >
            <Text style={[styles.status, styles.statusTypo]}>Status</Text>
          </View>
          <View style={[styles.etaWrapper, styles.ml33, styles.wrapperFlexBox]}>
            <Text style={[styles.status, styles.statusTypo]}>ETA</Text>
          </View>
        </View>
        <ScrollView
          style={styles.frameContainer}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={[styles.frameView, styles.frameFlexBox]}>
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
          <View style={[styles.frameParent1, styles.frameFlexBox]}>
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
          <View style={[styles.frameView, styles.frameFlexBox]}>
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
          <View style={[styles.frameParent1, styles.frameFlexBox]}>
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
          <View style={[styles.frameView, styles.frameFlexBox]}>
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
        </ScrollView>
      </View>
      <Pressable
        style={[styles.goBackAgain, styles.goBackAgainLayout]}
        onPress={() => navigation.navigate("ActiveProjects1")}
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
        style={[styles.saveChanges, styles.saveChangesFlexBox]}
        onPress={() => navigation.navigate("NewRequest2")}
      >
        <Text style={styles.saveChanges1}>NEW REQUEST</Text>
      </Pressable>
      <View style={[styles.viewProgress, styles.saveChangesFlexBox]}>
        <Text style={styles.saveChanges1}>REQUEST DETAILS</Text>
      </View>
      <RNPTextInput
        style={styles.activeRequestsChild}
        label="projectName"
        mode="outlined"
        placeholderTextColor="#000"
        theme={{ colors: { text: "#000" } }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml33: {
    marginLeft: Margin.m_2xl,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  mt4: {
    marginTop: Margin.m_xs,
  },
  wrapperFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  statusTypo: {
    color: Color.gray_200,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameFlexBox: {
    opacity: 0.5,
    padding: Padding.p_sm,
    width: 428,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  goBackAgainLayout: {
    width: 61,
    padding: Padding.p_md,
  },
  saveChangesFlexBox: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    width: 359,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
    left: 33,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
  request: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    color: Color.backgroundPrimary,
  },
  requestWrapper: {
    width: 54,
    padding: Padding.p_md,
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
  },
  reqTimeWrapper: {
    width: 50,
    padding: Padding.p_md,
  },
  status: {
    textAlign: "left",
  },
  statusWrapper: {
    width: 65,
    padding: Padding.p_md,
  },
  etaWrapper: {
    width: 55,
    padding: Padding.p_md,
  },
  frameGroup: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  welderWrapper: {
    padding: Padding.p_md,
    flexDirection: "row",
  },
  frameView: {
    backgroundColor: Color.silver_100,
  },
  frameParent1: {
    backgroundColor: Color.labelPrimary,
  },
  frameContainer: {
    flex: 1,
  },
  frameParent: {
    top: 283,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  goBackAgainChild: {
    width: 41,
    height: 22,
  },
  goBackAgain: {
    top: 20,
    left: 19,
    height: 20,
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
  saveChanges1: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.workSansSemibold,
    display: "flex",
    alignItems: "flex-end",
    width: 289,
    height: 31,
    textAlign: "center",
    justifyContent: "center",
    color: Color.backgroundPrimary,
  },
  saveChanges: {
    top: 823,
  },
  viewProgress: {
    top: 747,
  },
  activeRequestsChild: {
    top: 118,
    left: 65,
    alignItems: "center",
    position: "absolute",
  },
  activeRequests: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.labelPrimary,
  },
});

export default ActiveRequests3;
