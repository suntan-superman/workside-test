import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const ArchivedProjects = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.archivedProjects}>
      <Text style={[styles.workside, styles.loginClr]}>WORKSIDE</Text>
      <Text style={[styles.login, styles.loginClr]}>ARCHIVED PROJECTS</Text>
      <TextInput
        style={[styles.archivedProjectsChild, styles.archivedChildPosition2]}
        placeholder="Field"
        keyboardType="default"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[styles.archivedProjectsItem, styles.archivedChildPosition2]}
        placeholder="Lease"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.archivedProjectsInner, styles.archivedChildPosition2]}
        placeholder="Well"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.frameTextinput, styles.archivedChildPosition2]}
        placeholder="Rig Co"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.archivedProjectsChild1, styles.archivedChildPosition2]}
        placeholder="Rig #"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[
          styles.archivedProjectsChild2,
          styles.archivedChildPosition1,
          styles.archivedChildLayout,
        ]}
        placeholder="Elk Hills"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.archivedProjectsChild3, styles.archivedChildPosition]}
        placeholder="Elk Hills"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.archivedProjectsChild4, styles.archivedChildPosition1]}
        placeholder="Lost Hills"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[styles.archivedProjectsChild5, styles.archivedChildPosition]}
        placeholder="Lost Hills"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[
          styles.archivedProjectsChild6,
          styles.archivedChildPosition1,
          styles.archivedChildLayout,
        ]}
        placeholder="Lost Hills"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <Pressable
        style={styles.goBackAgain}
        onPress={() => navigation.navigate("ActiveRequests2")}
      >
        <Image
          style={styles.goBackAgainChild}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginClr: {
    color: Color.backgroundPrimary,
    position: "absolute",
  },
  archivedChildPosition2: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 37,
    left: "50%",
    top: 235,
    padding: Padding.p_md,
    position: "absolute",
  },
  archivedChildPosition1: {
    opacity: 0.5,
    alignItems: "center",
    padding: Padding.p_sm,
    width: 444,
    backgroundColor: Color.silver_100,
    top: "50%",
    marginLeft: -223,
    justifyContent: "space-between",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  archivedChildLayout: {
    height: 48,
    opacity: 0.5,
    alignItems: "center",
    padding: Padding.p_sm,
    width: 444,
    backgroundColor: Color.silver_100,
    top: "50%",
    marginLeft: -223,
  },
  archivedChildPosition: {
    height: 47,
    opacity: 0.5,
    alignItems: "center",
    padding: Padding.p_sm,
    width: 444,
    top: "50%",
    marginLeft: -223,
    justifyContent: "space-between",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.labelPrimary,
  },
  workside: {
    top: 50,
    left: 84,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  login: {
    top: 186,
    left: 69,
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
  },
  archivedProjectsChild: {
    marginLeft: -218,
    width: 56,
  },
  archivedProjectsItem: {
    marginLeft: -127,
    width: 63,
  },
  archivedProjectsInner: {
    marginLeft: -29,
    width: 51,
  },
  frameTextinput: {
    marginLeft: 57,
    width: 67,
  },
  archivedProjectsChild1: {
    marginLeft: 159,
    width: 57,
  },
  archivedProjectsChild2: {
    marginTop: -186,
  },
  archivedProjectsChild3: {
    marginTop: -138,
  },
  archivedProjectsChild4: {
    marginTop: -91,
    height: 49,
    opacity: 0.5,
    alignItems: "center",
    padding: Padding.p_sm,
    width: 444,
    backgroundColor: Color.silver_100,
    top: "50%",
    marginLeft: -223,
  },
  archivedProjectsChild5: {
    marginTop: -42,
  },
  archivedProjectsChild6: {
    marginTop: 5,
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
  archivedProjects: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
});

export default ArchivedProjects;
