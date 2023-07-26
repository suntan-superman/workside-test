import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import RootDrawerNavigator from '../routes/Drawer';

const WorksideLogin = () => {
  const navigation = useNavigation();

  const [worksideUserName, setUserName] = React.useState("User Name");
  const [worksidePassword, setPassword] = React.useState("Password");

  AsyncStorage.setItem("user_id", JSON.stringify({}));

  const MoveTo = (screen) => {
    navigation.navigate(screen);
  }

  const ValidateUser = () => {
    if (
      worksideUserName == "sroy@prologixsa.com" &&
      worksidePassword == "pinnacle"
    )
      return true;
    else return false;
  };

  return (
    <View style={styles.worksideLogin}>
      <Text style={styles.workside}>WORKSIDE</Text>
      <Text
        style={[styles.userName, styles.userNameTypo, styles.userNameTypo1]}
      >
        User Name
      </Text>
      <View style={[styles.worksideLoginChild, styles.worksidePosition]} />
      <Text
        style={[styles.userName, styles.userNameTypo, styles.userNameTypo1]}
      >
        User Name
      </Text>
      <TextInput
        name="userName"
        type="text"
        value={worksideUserName}
        style={[styles.worksideLoginItem, styles.worksidePosition]}
        onChangeText={setUserName}
        // placeholder="email address"
        keyboardType="default"
      />
      <Text
        style={[styles.password, styles.userNameTypo, styles.userNameTypo1]}
      >
        Password
      </Text>
      <View
        style={[styles.worksideLoginInner, styles.worksideLoginInnerPosition]}
      />
      <TextInput
        name="password"
        type="text"
        value={worksidePassword}
        style={[styles.rectangleTextinput, styles.worksideLoginInnerPosition]}
        onChangeText={setPassword}
        // placeholder="password"
        keyboardType="default"
      />
      <Pressable
        style={[styles.signUpButton, styles.signSpaceBlock]}
        onPress={() =>
          navigation.navigate("WorksideWorkflow", { screen: "SignUpScreen" })
        }
      >
        <Text style={[styles.signUpWith, styles.userNameTypo]}>
          Sign UP WITH EMAIL
        </Text>
      </Pressable>
      <Pressable
        style={[styles.signUpButton1, styles.signSpaceBlock]}
        disabled={worksideUserName === "" || worksidePassword === ""}
        onPress={() =>
            navigation.navigate('RootDrawer', {screen: 'Home'})
            // navigation.navigate('RootDrawer', {
            //   screen: 'Home',
            //   params: {
            //     screen: 'ActiveRequests',
            //     }
            //   })
            }
      >
        <Text style={[styles.signUpWith, styles.userNameTypo]}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  userNameTypo: {
    fontSize: FontSize.size_base,
    color: Color.backgroundPrimary,
  },
  userNameTypo1: {
    left: 41,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  worksidePosition: {
    width: 360,
    backgroundColor: Color.silver_200,
    left: 40,
    top: 250,
    position: "absolute",
  },
  worksideLoginInnerPosition: {
    top: 342,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 40,
    position: "absolute",
  },
  signSpaceBlock: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    width: 359,
    borderRadius: Border.br_3xs,
    left: 41,
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
  userName: {
    top: 218,
  },
  worksideLoginChild: {
    height: 30,
  },
  worksideLoginItem: {
    height: 51,
  },
  password: {
    top: 310,
  },
  worksideLoginInner: {
    height: 30,
  },
  rectangleTextinput: {
    height: 54,
  },
  signUpWith: {
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
  signUpButton: {
    top: 707,
    backgroundColor: Color.cornflowerblue,
  },
  signUpButton1: {
    top: 437,
    backgroundColor: Color.lightgreen_100,
  },
  worksideLogin: {
    backgroundColor: Color.labelPrimary,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default WorksideLogin;
