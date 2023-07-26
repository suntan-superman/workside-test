import * as React from "react";
import { Text, 
  StyleSheet, 
  View,
  Pressable, 
  Image,
  Alert,
  TouchableOpacity, 
  FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ActiveProjects = () => {
  const navigation = useNavigation();
  
  const projectData = [
    {
      id: 1,
      reqField: 'Elk Hills',
      reqLease: '26Z',
      reqWell: '383',
      reqRigCo: 'GPS',
      reqRigNumber: '28',
    },
    {
      id: 2,
      reqField: 'Elk Hills',
      reqLease: '26R',
      reqWell: '387',
      reqRigCo: 'GPS',
      reqRigNumber: '30',
   },
  {
    id: 3,
    reqField: 'Lost Hills',
    reqLease: '26',
    reqWell: '28Z',
    reqRigCo: 'GPS',
    reqRigNumber: '47',
  },
  {
    id: 4,
    reqField: 'Lost Hills',
    reqLease: '35',
    reqWell: '30Z',
    reqRigCo: 'GPS',
    reqRigNumber: '38',
  },
];

  return (
    <View style={styles.activeProjects}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <Text style={[styles.login, styles.loginTypo]}>ACTIVE PROJECTS</Text>
      <Pressable
        style={styles.projectDetails}
        onPress={() => navigation.navigate("ActiveRequests2")}
      >
        <Text style={styles.loginTypo}>PROJECT DETAILS</Text>
      </Pressable>
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
      <View style={styles.alarm}>
        <Pressable
          style={[styles.noAlarm, styles.iconLayout]}
          onPress={() => navigation.navigate("RequestAlerts")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/no-alarm.png")}
          />
        </Pressable>
      </View>
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
    top: 287,
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
  iconLayout: {
    height: "100%",
    width: "100%",
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
  projectDetails: {
    top: 830,
    left: 34,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightgreen_100,
    width: 359,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_lg,
    flexDirection: "row",
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
    marginTop: -134,
  },
  frameGroup: {
    marginTop: -87,
  },
  frameContainer: {
    marginTop: -40,
  },
  frameParent1: {
    marginTop: 7,
  },
  frameParent2: {
    marginTop: 54,
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
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  noAlarm: {
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  alarm: {
    top: 0,
    left: 368,
    width: 60,
    height: 60,
    position: "absolute",
  },
  activeProjects: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.labelPrimary,
  },
});

export default ActiveProjects;
