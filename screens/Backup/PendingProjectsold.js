import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const PendingProjects = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pendingProjects}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <Text style={[styles.login, styles.loginTypo]}>PENDING PROJECTS</Text>
      <View style={[styles.fieldWrapper, styles.rigWrapperFlexBox]}>
        <Text style={[styles.field, styles.fieldTypo]}>Field</Text>
      </View>
      <View
        style={[
          styles.leaseWrapper,
          styles.goBackAgainLayout,
          styles.rigWrapperFlexBox,
        ]}
      >
        <Text style={[styles.lease, styles.fieldTypo]}>Lease</Text>
      </View>
      <View style={[styles.wellWrapper, styles.rigWrapperFlexBox]}>
        <Text style={[styles.lease, styles.fieldTypo]}>Well</Text>
      </View>
      <View style={[styles.rigCoWrapper, styles.rigWrapperFlexBox]}>
        <Text style={[styles.lease, styles.fieldTypo]}>Rig Co</Text>
      </View>
      <View style={[styles.rigWrapper, styles.rigWrapperFlexBox]}>
        <Text style={[styles.lease, styles.fieldTypo]}>Rig #</Text>
      </View>
      <View
        style={[
          styles.frameParent,
          styles.frameParentPosition,
          styles.frameParentSpaceBlock,
        ]}
      >
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>Elk Hills</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>26Z</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>183</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>GPS</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>UA</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameGroup,
          styles.frameParentPosition,
          styles.frameSpaceBlock,
        ]}
      >
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>Elk Hills</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>26R</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>213</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>GPS</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>97</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameContainer,
          styles.frameParentPosition,
          styles.frameParentSpaceBlock,
        ]}
      >
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>Lost Hills</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>18G</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>222</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>GPS</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>UA</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameParent1,
          styles.frameParentPosition,
          styles.frameSpaceBlock,
        ]}
      >
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>Lost Hills</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>17G</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>287</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>Basic</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>143</Text>
        </View>
      </View>
      <View
        style={[
          styles.frameParent2,
          styles.frameParentPosition,
          styles.frameParentSpaceBlock,
        ]}
      >
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>Lost Hills</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>7R</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>143</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>Basic</Text>
        </View>
        <View style={styles.elkHillsWrapper}>
          <Text style={[styles.lease, styles.fieldTypo]}>27</Text>
        </View>
      </View>
      <Pressable
        style={[styles.goBackAgain, styles.goBackAgainLayout]}
        onPress={() => navigation.navigate("ActiveRequests2")}
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
        style={styles.saveChanges}
        onPress={() => navigation.navigate("ActiveRequests2")}
      >
        <Text style={styles.loginTypo}>NEW PROJECT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  rigWrapperFlexBox: {
    justifyContent: "space-between",
    left: "50%",
    top: 249,
    flexDirection: "row",
  },
  fieldTypo: {
    fontSize: FontSize.size_4xs,
    textAlign: "left",
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
    flexDirection: "row",
    left: "50%",
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
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  login: {
    top: 186,
    left: 69,
    position: "absolute",
  },
  field: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    color: Color.backgroundPrimary,
    fontSize: FontSize.size_4xs,
  },
  fieldWrapper: {
    marginLeft: -209,
    width: 54,
    padding: Padding.p_md,
    position: "absolute",
  },
  lease: {
    color: Color.gray_200,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  leaseWrapper: {
    marginLeft: -121.75,
  },
  wellWrapper: {
    marginLeft: -27.5,
    width: 50,
    padding: Padding.p_md,
    position: "absolute",
  },
  rigCoWrapper: {
    marginLeft: 55.75,
    width: 65,
    padding: Padding.p_md,
    position: "absolute",
  },
  rigWrapper: {
    marginLeft: 154,
    width: 55,
    padding: Padding.p_md,
    position: "absolute",
  },
  elkHillsWrapper: {
    padding: Padding.p_md,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: -172,
  },
  frameGroup: {
    marginTop: -125,
  },
  frameContainer: {
    marginTop: -78,
  },
  frameParent1: {
    marginTop: -31,
  },
  frameParent2: {
    marginTop: 16,
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
  saveChanges: {
    top: 837,
    left: 42,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightgreen_100,
    width: 357,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
    position: "absolute",
  },
  pendingProjects: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
});

export default PendingProjects;
