import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontFamily,
  FontSize,
  Color,
  Padding,
  Border,
} from "../GlobalStyles";

const ActiveRequests = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.activeRequests}>
      <Text style={[styles.workside, styles.welderTypo]}>WORKSIDE</Text>
      <Text style={[styles.login, styles.loginTypo]}>CURRENT REQUESTS</Text>
      <Pressable
        style={styles.requestDetails}
        onPress={() => navigation.navigate("NewRequest")}
      >
        <Text style={styles.loginTypo}>REQUEST DETAILS</Text>
      </Pressable>
      <TextInput
        style={[styles.activeRequestsChild, styles.activeChildFlexBox]}
        placeholder="Request"
        keyboardType="default"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[
          styles.activeRequestsItem,
          styles.goBackAgainLayout,
          styles.activeChildFlexBox,
        ]}
        placeholder={`Req
Date`}
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.activeRequestsInner, styles.activeChildFlexBox]}
        placeholder={`Req
Time`}
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.frameTextinput, styles.activeChildFlexBox]}
        placeholder="Status"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.activeRequestsChild1, styles.activeChildFlexBox]}
        placeholder="ETA"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <View
        style={[
          styles.frameParent,
          styles.frameParentPosition,
          styles.frameParentSpaceBlock,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Welder</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>03/15</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>08:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Open</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>09:00</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameGroup,
          styles.frameParentPosition,
          styles.frameSpaceBlock,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>M Electr</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>03/15</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>09:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Open</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>10:00</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameContainer,
          styles.frameParentPosition,
          styles.frameParentSpaceBlock,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Vacuum</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>03/16</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>08:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Pending</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>08:00</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameParent1,
          styles.frameParentPosition,
          styles.frameSpaceBlock,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Wireline</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>03/16</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>12:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Assigned</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>12:00</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameParent2,
          styles.frameParentPosition,
          styles.frameParentSpaceBlock,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Packer</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>03/16</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>15:00</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>Assigned</Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.welderTypo]}>15:00</Text>
        </View>
      </View>
      <Pressable
        style={[styles.goBackAgain, styles.goBackAgainLayout]}
        onPress={() => navigation.navigate("WorksideLogin4")}
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
      <Pressable
        style={styles.menuBars}
        onPress={() => navigation.navigate("ActiveRequests1")}
      >
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_xs,
  },
  welderTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  activeChildFlexBox: {
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
  frameParentPosition: {
    opacity: 0.5,
    alignItems: "center",
    padding: Padding.p_sm,
    width: 428,
    top: "50%",
    marginLeft: -214,
    justifyContent: "space-between",
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  frameParentSpaceBlock: {
    backgroundColor: Color.silver_100,
    alignItems: "center",
    padding: Padding.p_sm,
    width: 428,
    top: "50%",
    marginLeft: -214,
  },
  frameSpaceBlock: {
    alignItems: "center",
    padding: Padding.p_sm,
    width: 428,
    top: "50%",
    marginLeft: -214,
    backgroundColor: Color.labelPrimary,
  },
  workside: {
    top: 50,
    left: 84,
    fontSize: FontSize.size_lg,
    color: Color.backgroundPrimary,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  login: {
    top: 159,
    left: 69,
    position: "absolute",
  },
  requestDetails: {
    top: 844,
    left: 35,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightgreen_100,
    width: 359,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
    position: "absolute",
  },
  activeRequestsChild: {
    marginLeft: -209,
    width: 54,
    padding: Padding.p_md,
    position: "absolute",
  },
  activeRequestsItem: {
    marginLeft: -121.75,
  },
  activeRequestsInner: {
    marginLeft: -27.5,
    width: 50,
    padding: Padding.p_md,
    position: "absolute",
  },
  frameTextinput: {
    marginLeft: 55.75,
    width: 65,
    padding: Padding.p_md,
    position: "absolute",
  },
  activeRequestsChild1: {
    marginLeft: 154,
    width: 55,
    padding: Padding.p_md,
    position: "absolute",
  },
  welder: {
    fontSize: FontSize.size_4xs,
    color: Color.gray_200,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
  activeRequests: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
});

export default ActiveRequests;
