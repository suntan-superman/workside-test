import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const NewRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newRequest}>
      <Text style={[styles.workside, styles.msaOnlyTypo1]}>WORKSIDE</Text>
      <Text style={[styles.login, styles.loginLayout]}>ELK HILLS 26Z 383</Text>
      <Text style={[styles.login1, styles.loginLayout]}>GPS 84</Text>
      <View style={[styles.saveChangesWrapper, styles.goBackAgainPosition]}>
        <Pressable
          style={styles.saveChanges}
          onPress={() =>
            navigation.navigate("WorksideWorkflow", {
              screen: "ActiveRequests",
            })
          }
        >
          <Text style={[styles.saveChanges1, styles.loginLayout]}>
            SAVE CHANGES
          </Text>
        </Pressable>
      </View>
      <Text style={[styles.request, styles.requestParentPosition]}>{` `}</Text>
      <Text style={[styles.preferredVendor, styles.requestParentPosition]}>
        Preferred Vendor
      </Text>
      <View
        style={[styles.datetimeRequestedParent, styles.requestParentPosition]}
      >
        <Text style={[styles.datetimeRequested, styles.requestTypo]}>
          Date/Time Requested
        </Text>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Pressable
          style={[styles.frameItem, styles.frameChildLayout]}
          onPress={() => navigation.navigate("NewRequestWDateTime")}
        />
      </View>
      <Text style={[styles.request1, styles.requestParentPosition]}>{` `}</Text>
      <View style={[styles.quantityParent, styles.parentPosition]}>
        <Text style={[styles.quantity, styles.loginLayout]}>Quantity</Text>
        <View style={[styles.frameInner, styles.frameChildLayout]} />
      </View>
      <Text style={[styles.request2, styles.requestTypo]}>{` `}</Text>
      <View style={[styles.commentsParent, styles.requestParentPosition]}>
        <Text style={[styles.comments, styles.requestTypo]}>Comments</Text>
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
      </View>
      <View style={[styles.linkToParent, styles.parentPosition]}>
        <Text style={[styles.datetimeRequested, styles.requestTypo]}>
          Link To
        </Text>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={[styles.frameItem, styles.frameChildLayout]} />
      </View>
      <Pressable
        style={[styles.goBackAgain, styles.goBackAgainPosition]}
        onPress={() =>
          navigation.navigate("WorksideWorkflow", { screen: "ActiveRequests" })
        }
      >
        <Image
          style={styles.goBackAgainChild}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <View style={styles.noAlarm}>
        <Image
          style={[styles.alarmIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/alarm.png")}
        />
      </View>
      <View style={styles.radioButtonParent}>
        <Image
          style={styles.radioLayout}
          resizeMode="cover"
          source={require("../assets/radio-button.png")}
        />
        <Text style={[styles.msaOnly, styles.msaOnlyTypo]}>MSA Only</Text>
        <Image
          style={[styles.radioButtonNoSelection, styles.radioLayout]}
          resizeMode="cover"
          source={require("../assets/radio-button-no-selection.png")}
        />
        <Text style={[styles.msaOnly, styles.msaOnlyTypo]}>Open Request</Text>
        <View style={styles.selectButton}>
          <View style={styles.selectButton1}>
            <View style={styles.continueButtonWrapper}>
              <View style={styles.continueButton}>
                <View style={styles.continue}>
                  <Text style={[styles.signUpWith, styles.loginLayout]}>
                    Sign Up With Email
                  </Text>
                </View>
                <Text style={[styles.continue1, styles.msaOnlyTypo]}>
                  SELECT
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.listboxComponent, styles.parentPosition]}>
        <View
          style={[styles.requestListboxComponent, styles.clipListPosition1]}
        >
          <View style={[styles.listboxTitle, styles.listboxPosition]}>
            <Text style={[styles.request3, styles.requestTypo]}>Request</Text>
          </View>
          <View style={[styles.listboxMain, styles.clipListPosition]}>
            <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
            <Image
              style={[styles.chevronIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/chevron.png")}
            />
            <View style={styles.placeholderText}>
              <Text style={[styles.selectRequest, styles.textTypo]}>
                Select Request
              </Text>
            </View>
          </View>
          <View style={[styles.clipList, styles.clipListPosition]}>
            <View style={[styles.dropdownList, styles.listboxbgShadowBox]}>
              <View style={styles.itemFlexBox}>
                <Text style={[styles.text, styles.textTypo]}>Cementing</Text>
              </View>
              <View style={[styles.item2, styles.itemFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>
                  Coiled Tubing
                </Text>
              </View>
              <View style={[styles.item2, styles.itemFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>Fishing Tool</Text>
              </View>
              <View style={[styles.item2, styles.itemFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>Wireline</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  msaOnlyTypo1: {
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  loginLayout: {
    height: 31,
    fontSize: FontSize.size_5xl,
    color: Color.backgroundPrimary,
  },
  goBackAgainPosition: {
    left: 19,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  requestParentPosition: {
    left: 27,
    position: "absolute",
  },
  requestTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "700",
  },
  frameChildLayout: {
    width: 360,
    backgroundColor: Color.silver_200,
  },
  parentPosition: {
    left: 26,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  msaOnlyTypo: {
    fontSize: FontSize.size_base,
    color: Color.backgroundPrimary,
  },
  radioLayout: {
    height: 18,
    width: 19,
  },
  clipListPosition1: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  listboxPosition: {
    left: "4.55%",
    right: "4.55%",
    width: "90.91%",
  },
  clipListPosition: {
    top: "9.69%",
    position: "absolute",
  },
  listboxbgShadowBox: {
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  itemFlexBox: {
    alignSelf: "stretch",
    height: 44,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
  workside: {
    top: 65,
    left: 84,
    fontSize: FontSize.size_29xl,
    color: Color.backgroundPrimary,
    position: "absolute",
  },
  login: {
    top: 122,
    width: 289,
    letterSpacing: 0.5,
    height: 31,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    display: "flex",
    left: 69,
    position: "absolute",
  },
  login1: {
    top: 153,
    width: 289,
    letterSpacing: 0.5,
    height: 31,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    display: "flex",
    left: 69,
    position: "absolute",
  },
  saveChanges1: {
    width: 289,
    letterSpacing: 0.5,
    height: 31,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    display: "flex",
  },
  saveChanges: {
    width: 357,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
  },
  saveChangesWrapper: {
    top: 824,
    padding: Padding.p_3xs,
  },
  request: {
    top: 194,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "700",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
  },
  preferredVendor: {
    top: 547,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontWeight: "700",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
  },
  datetimeRequested: {
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_5xl,
  },
  frameChild: {
    height: 30,
  },
  frameItem: {
    height: 37,
  },
  datetimeRequestedParent: {
    top: 623,
  },
  request1: {
    top: 315,
    height: 31,
    fontSize: FontSize.size_5xl,
    color: Color.backgroundPrimary,
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  quantity: {
    width: 102,
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  frameInner: {
    height: 32,
  },
  quantityParent: {
    width: 353,
    height: 38,
    top: 315,
  },
  request2: {
    top: 396,
    left: 28,
    height: 32,
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  comments: {
    width: 129,
    height: 32,
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_5xl,
  },
  frameChild1: {
    height: 87,
  },
  commentsParent: {
    top: 386,
    height: 78,
  },
  linkToParent: {
    top: 733,
  },
  goBackAgainChild: {
    width: 41,
    height: 22,
  },
  goBackAgain: {
    top: 46,
    width: 61,
    height: 20,
    padding: Padding.p_3xs,
  },
  alarmIcon: {
    height: "113.33%",
    width: "105%",
    right: "1.67%",
    bottom: "-13.33%",
    left: "-6.67%",
    top: "0%",
  },
  noAlarm: {
    top: 26,
    left: 369,
    width: 60,
    height: 60,
    position: "absolute",
  },
  msaOnly: {
    marginLeft: 7,
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  radioButtonNoSelection: {
    marginLeft: 7,
  },
  signUpWith: {
    display: "none",
    width: 289,
    letterSpacing: 0.5,
    height: 31,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  continue: {
    width: "99.02%",
    right: "0.98%",
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  continue1: {
    height: "49.21%",
    top: "25.4%",
    letterSpacing: 0.3,
    left: "0%",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
    display: "flex",
    position: "absolute",
    width: "100%",
  },
  continueButton: {
    width: 97,
    height: 44,
  },
  continueButtonWrapper: {
    padding: Padding.p_3xs,
  },
  selectButton1: {
    width: 115,
    height: 60,
  },
  selectButton: {
    width: 109,
    height: 70,
    marginLeft: 7,
  },
  radioButtonParent: {
    top: 564,
    left: 29,
    width: 369,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  request3: {
    fontFamily: FontFamily.montserratBold,
    color: Color.darkslategray,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  listboxTitle: {
    height: "6.92%",
    bottom: "93.08%",
    top: "0%",
    position: "absolute",
  },
  listboxbg: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
    backgroundColor: Color.labelPrimary,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_5xs,
  },
  chevronIcon: {
    height: "11.03%",
    width: "4%",
    top: "45.32%",
    right: "7.64%",
    bottom: "43.65%",
    left: "88.36%",
    opacity: 0.8,
  },
  selectRequest: {
    color: Color.dimgray_100,
    left: "0%",
    top: "0%",
  },
  placeholderText: {
    height: "33.33%",
    width: "65.71%",
    top: "33.33%",
    right: "28.57%",
    bottom: "33.33%",
    left: "5.71%",
    position: "absolute",
  },
  listboxMain: {
    height: "20.76%",
    bottom: "69.55%",
    left: "4.55%",
    right: "4.55%",
    width: "90.91%",
  },
  text: {
    top: 12,
    left: 16,
    color: Color.darkslategray,
  },
  item2: {
    marginTop: 1,
  },
  dropdownList: {
    top: 68,
    height: 1,
    opacity: 0,
    left: "4.55%",
    right: "4.55%",
    width: "90.91%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  clipList: {
    height: "90.31%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    width: "100%",
    overflow: "hidden",
  },
  requestListboxComponent: {
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  listboxComponent: {
    top: 185,
    width: 359,
    height: 250,
  },
  newRequest: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.labelPrimary,
  },
});

export default NewRequest;
