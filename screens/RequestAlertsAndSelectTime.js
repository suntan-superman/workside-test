import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  View,
  Image,
} from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Color,
} from "../GlobalStyles";

const RequestAlertsAndSelectTime = () => {
  const [rectangleDatePicker, setRectangleDatePicker] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.requestAlertsAndSelectTime}>
      <Text style={[styles.workside, styles.text3Typo, styles.welderTypo]}>
        WORKSIDE
      </Text>
      <Text style={[styles.login, styles.loginTypo, styles.loginPosition]}>
        ELK HILLS 26Z 383
      </Text>
      <Text style={[styles.login1, styles.loginTypo, styles.loginPosition]}>
        GPS 84
      </Text>
      <Pressable style={[styles.requestDetails, styles.continueSpaceBlock]}>
        <Text style={[styles.requestDetails1, styles.loginTypo]}>
          REQUEST DETAILS
        </Text>
      </Pressable>
      <TextInput
        style={[
          styles.requestAlertsAndSelectTimeChild,
          styles.frameChildFlexBox,
          styles.requestChildPosition,
        ]}
        placeholder="Request"
        keyboardType="default"
        placeholderTextColor="#000"
      />
      <TextInput
        style={[
          styles.requestAlertsAndSelectTimeItem,
          styles.goBackAgainLayout,
          styles.frameChildFlexBox,
          styles.requestChildPosition,
        ]}
        placeholder={`Req
Date`}
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[
          styles.requestAlertsAndSelectTimeInner,
          styles.frameChildFlexBox,
          styles.requestChildPosition,
        ]}
        placeholder={`Req
Time`}
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[
          styles.frameTextinput,
          styles.frameChildFlexBox,
          styles.requestChildPosition,
        ]}
        placeholder="Status"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <TextInput
        style={[
          styles.requestAlertsAndSelectTimeChild1,
          styles.frameChildFlexBox,
          styles.requestChildPosition,
        ]}
        placeholder="ETA"
        keyboardType="default"
        placeholderTextColor="rgba(0, 0, 0, 0.99)"
      />
      <View
        style={[
          styles.frameParent,
          styles.text9Position,
          styles.frameChildFlexBox,
        ]}
      >
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.text3Typo, styles.welderTypo]}>
            Welder
          </Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.text3Typo, styles.welderTypo]}>
            03/15
          </Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.text3Typo, styles.welderTypo]}>
            08:00
          </Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.text3Typo, styles.welderTypo]}>
            Active
          </Text>
        </View>
        <View style={styles.welderWrapper}>
          <Text style={[styles.welder, styles.text3Typo, styles.welderTypo]}>
            09:00
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.goBackAgain, styles.goBackAgainLayout]}
        onPress={() => navigation.navigate("RequestAlerts")}
      >
        <Image
          style={styles.goBackAgainChild}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <Text style={[styles.login2, styles.loginTypo, styles.loginPosition]}>
        AlERTS
      </Text>
      <Text style={[styles.callAtThis, styles.text3Typo, styles.welderTypo]}>
        Call At This Time
      </Text>
      <RNKDatepicker
        date={rectangleDatePicker}
        onSelect={setRectangleDatePicker}
        controlStyle={styles.rectangleDatePickerValue}
      />
      <View style={styles.datetimePickerBlack}>
        <View style={styles.darkyes}>
          <View style={[styles.header, styles.frameWrapperPosition]}>
            <View style={styles.june2020Parent}>
              <Text style={[styles.june2020, styles.amTypo]}>June 2020</Text>
              <View style={[styles.frameView, styles.ml3]}>
                <Text
                  style={[styles.text3, styles.pmLayout1, styles.text3Typo]}
                >
                  􀆊
                </Text>
              </View>
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text4, styles.textTypo1, styles.textTypo2]}>
                􀆊
              </Text>
              <Text style={[styles.text5, styles.textTypo1, styles.textTypo2]}>
                􀆉
              </Text>
            </View>
          </View>
          <View style={styles.timeParent}>
            <Text style={[styles.time, styles.textTypo2]}>Time</Text>
            <View
              style={[styles.timePickerParent, styles.frameWrapperPosition]}
            >
              <View style={[styles.timePicker, styles.pickerBg]}>
                <Text style={[styles.hours, styles.hoursTypo]}>11</Text>
                <Text style={[styles.colon, styles.textTypo]}>:</Text>
                <Text style={[styles.minutes, styles.hoursTypo]}>38</Text>
              </View>
              <View style={[styles.ampmPicker, styles.ml8, styles.pickerBg]}>
                <View style={[styles.option2, styles.pmLayout]}>
                  <Text
                    style={[
                      styles.pm,
                      styles.pmLayout,
                      styles.pmLayout1,
                      styles.pmTypo,
                    ]}
                  >
                    PM
                  </Text>
                </View>
                <View style={[styles.option1, styles.amLayout]}>
                  <Text
                    style={[
                      styles.am,
                      styles.amLayout,
                      styles.pmLayout1,
                      styles.amTypo,
                      styles.pmTypo,
                    ]}
                  >
                    AM
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.darkyesInner, styles.parentPosition]}>
            <View style={styles.frameGroup}>
              <View style={[styles.sunWrapper, styles.dateFlexBox]}>
                <Text
                  style={[
                    styles.sun,
                    styles.pmLayout1,
                    styles.amTypo,
                    styles.pmTypo,
                  ]}
                >
                  sun
                </Text>
              </View>
              <View style={[styles.sunWrapper, styles.ml4, styles.dateFlexBox]}>
                <Text
                  style={[
                    styles.sun,
                    styles.pmLayout1,
                    styles.amTypo,
                    styles.pmTypo,
                  ]}
                >
                  mon
                </Text>
              </View>
              <View style={[styles.sunWrapper, styles.ml4, styles.dateFlexBox]}>
                <Text
                  style={[
                    styles.sun,
                    styles.pmLayout1,
                    styles.amTypo,
                    styles.pmTypo,
                  ]}
                >
                  tue
                </Text>
              </View>
              <View style={[styles.sunWrapper, styles.ml4, styles.dateFlexBox]}>
                <Text
                  style={[
                    styles.sun,
                    styles.pmLayout1,
                    styles.amTypo,
                    styles.pmTypo,
                  ]}
                >
                  wed
                </Text>
              </View>
              <View style={[styles.sunWrapper, styles.ml4, styles.dateFlexBox]}>
                <Text
                  style={[
                    styles.sun,
                    styles.pmLayout1,
                    styles.amTypo,
                    styles.pmTypo,
                  ]}
                >
                  thu
                </Text>
              </View>
              <View style={[styles.sunWrapper, styles.ml4, styles.dateFlexBox]}>
                <Text
                  style={[
                    styles.sun,
                    styles.pmLayout1,
                    styles.amTypo,
                    styles.pmTypo,
                  ]}
                >
                  fri
                </Text>
              </View>
              <View style={[styles.sunWrapper, styles.ml4, styles.dateFlexBox]}>
                <Text
                  style={[
                    styles.sun,
                    styles.pmLayout1,
                    styles.amTypo,
                    styles.pmTypo,
                  ]}
                >
                  sat
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.parentPosition]}>
            <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date, styles.dateFlexBox]} />
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    1
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    2
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    3
                  </Text>
                </View>
                <View style={[styles.dateLayout, styles.ml4]}>
                  <View style={[styles.dateChild, styles.text9Position]} />
                  <Text
                    style={[
                      styles.text9,
                      styles.textTypo1,
                      styles.text9Position,
                    ]}
                  >
                    4
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    5
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    6
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    7
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    8
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    9
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    10
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    11
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    12
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    13
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper2, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    14
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    15
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    16
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    17
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    18
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    19
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    20
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper3, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    21
                  </Text>
                </View>
                <View style={[styles.date22, styles.ml4, styles.dateLayout]}>
                  <Text
                    style={[styles.text27, styles.textTypo, styles.textTypo2]}
                  >
                    22
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    23
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    24
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    25
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    26
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    27
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper4, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    28
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    29
                  </Text>
                </View>
                <View style={[styles.date1, styles.ml4, styles.dateFlexBox]}>
                  <Text
                    style={[styles.text6, styles.textTypo, styles.textTypo2]}
                  >
                    30
                  </Text>
                </View>
                <View style={[styles.date, styles.ml4, styles.dateFlexBox]} />
                <View style={[styles.date, styles.ml4, styles.dateFlexBox]} />
                <View style={[styles.date, styles.ml4, styles.dateFlexBox]} />
                <View style={[styles.date, styles.ml4, styles.dateFlexBox]} />
              </View>
            </View>
          </View>
          <Pressable
            style={styles.selectButton}
            onPress={() => navigation.navigate("RequestAlerts")}
          >
            <View style={styles.selectButton1}>
              <View style={styles.continueButtonWrapper}>
                <View style={styles.continueButton}>
                  <View
                    style={[
                      styles.continue,
                      styles.continuePosition,
                      styles.continueSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.signUpWith, styles.loginTypo]}>
                      Sign Up With Email
                    </Text>
                  </View>
                  <Text style={[styles.continue1, styles.continuePosition]}>
                    SELECT
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDatePickerValue: {
    position: "absolute",
    top: 434,
    left: 23,
    width: 360,
    height: 30,
    backgroundColor: "#c4c4c4",
  },
  ml3: {
    marginLeft: Margin.m_2xs,
  },
  ml8: {
    marginLeft: Margin.m_md,
  },
  ml4: {
    marginLeft: Margin.m_xs,
  },
  text3Typo: {
    textAlign: "left",
    fontWeight: "700",
  },
  welderTypo: {
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
  },
  loginTypo: {
    height: 31,
    width: 289,
    letterSpacing: 0.5,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
  },
  loginPosition: {
    left: 69,
    width: 289,
    display: "flex",
    letterSpacing: 0.5,
    position: "absolute",
  },
  continueSpaceBlock: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  frameChildFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  requestChildPosition: {
    left: "50%",
    top: 283,
    justifyContent: "space-between",
  },
  goBackAgainLayout: {
    width: 61,
    padding: Padding.p_md,
    position: "absolute",
  },
  text9Position: {
    top: "50%",
    left: "50%",
  },
  frameWrapperPosition: {
    right: 0,
    position: "absolute",
  },
  amTypo: {
    fontFamily: FontFamily.sFProTextSemibold,
    fontWeight: "600",
  },
  pmLayout1: {
    lineHeight: 18,
    fontSize: FontSize.footnote_size,
  },
  parentPosition: {
    right: 16,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.sFProDisplayMedium,
    fontWeight: "500",
    color: Color.userAccent,
    textAlign: "center",
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.header2_size,
    lineHeight: 24,
  },
  pickerBg: {
    backgroundColor: Color.fillTertiary,
    height: 36,
  },
  hoursTypo: {
    width: 28,
    textAlign: "right",
    marginTop: -14,
    fontFamily: FontFamily.title2Regular,
    lineHeight: 28,
    fontSize: FontSize.title2Regular_size,
    color: Color.labelPrimary,
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.title2Regular,
    textAlign: "center",
  },
  pmLayout: {
    height: 32,
    width: 48,
    position: "absolute",
  },
  pmTypo: {
    textAlign: "center",
    fontSize: FontSize.footnote_size,
  },
  amLayout: {
    width: 51,
    height: 32,
    position: "absolute",
  },
  dateFlexBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateLayout: {
    borderRadius: Border.br_2xl,
    height: 51,
    flex: 1,
  },
  continuePosition: {
    left: "0%",
    position: "absolute",
  },
  workside: {
    top: 50,
    left: 84,
    fontSize: FontSize.size_lg,
    color: Color.backgroundPrimary,
    position: "absolute",
  },
  login: {
    top: 159,
    display: "flex",
    color: Color.backgroundPrimary,
  },
  login1: {
    top: 190,
    display: "flex",
    color: Color.backgroundPrimary,
  },
  requestDetails1: {
    display: "flex",
    color: Color.backgroundPrimary,
  },
  requestDetails: {
    top: 834,
    left: 34,
    backgroundColor: Color.lightgreen_100,
    width: 359,
    position: "absolute",
  },
  requestAlertsAndSelectTimeChild: {
    marginLeft: -209,
    width: 54,
    padding: Padding.p_md,
    position: "absolute",
  },
  requestAlertsAndSelectTimeItem: {
    marginLeft: -121.75,
  },
  requestAlertsAndSelectTimeInner: {
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
  requestAlertsAndSelectTimeChild1: {
    marginLeft: 154,
    width: 55,
    padding: Padding.p_md,
    position: "absolute",
  },
  welder: {
    fontSize: FontSize.size_4xs,
    color: Color.gray_200,
  },
  welderWrapper: {
    padding: Padding.p_md,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: -138,
    marginLeft: -214,
    backgroundColor: Color.red,
    width: 428,
    padding: Padding.p_sm,
    opacity: 0.5,
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
  },
  login2: {
    top: 231,
    color: Color.crimson_100,
    display: "flex",
  },
  callAtThis: {
    top: 402,
    left: 24,
    fontSize: FontSize.size_base,
    color: Color.backgroundPrimary,
    position: "absolute",
  },
  june2020: {
    fontSize: FontSize.size_2xs,
    color: Color.labelPrimary,
    lineHeight: 24,
    fontFamily: FontFamily.sFProTextSemibold,
    letterSpacing: 0,
    textAlign: "left",
  },
  text3: {
    fontFamily: FontFamily.sFProTextBold,
    color: Color.userAccent,
    fontSize: FontSize.footnote_size,
    textAlign: "left",
    fontWeight: "700",
  },
  frameView: {
    paddingTop: Padding.p_xs,
  },
  june2020Parent: {
    left: 16,
    top: 14,
    flexDirection: "row",
    position: "absolute",
  },
  text4: {
    left: 43,
    letterSpacing: 0,
    top: 0,
  },
  text5: {
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  parent: {
    width: 56,
    height: 24,
    top: 14,
  },
  header: {
    height: 44,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  time: {
    top: 6,
    fontFamily: FontFamily.sFProDisplaySemibold,
    color: Color.labelPrimary,
    letterSpacing: 0,
    left: 0,
    fontWeight: "600",
    fontSize: FontSize.header2_size,
    textAlign: "left",
    position: "absolute",
  },
  hours: {
    left: 4,
  },
  colon: {
    marginTop: -16,
    left: 33,
    width: 6,
    lineHeight: 28,
    fontSize: FontSize.title2Regular_size,
    fontFamily: FontFamily.title2Regular,
    color: Color.labelPrimary,
    top: "50%",
    position: "absolute",
  },
  minutes: {
    left: 38,
  },
  timePicker: {
    borderRadius: Border.br_xs,
    width: 74,
  },
  pm: {
    fontFamily: FontFamily.footnote,
    color: Color.labelPrimary,
    letterSpacing: 0,
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  option2: {
    left: 49,
    top: 2,
  },
  am: {
    color: Color.labelPrimary,
    letterSpacing: 0,
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  option1: {
    left: 2,
    borderRadius: Border.br_sm,
    backgroundColor: Color.grayGray2,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.04)",
    borderWidth: 0.5,
    top: 2,
  },
  ampmPicker: {
    borderRadius: Border.br_lg,
    width: 100,
    overflow: "hidden",
  },
  timePickerParent: {
    justifyContent: "flex-end",
    top: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  timeParent: {
    top: 361,
    height: 36,
    right: 16,
    left: 16,
    position: "absolute",
  },
  sun: {
    color: Color.labelTertiary,
    textTransform: "uppercase",
  },
  sunWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  frameGroup: {
    right: -11,
    left: -9,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  darkyesInner: {
    top: 51,
    height: 18,
    left: 16,
  },
  date: {
    height: 51,
    alignItems: "center",
    justifyContent: "center",
  },
  text6: {
    color: Color.labelPrimary,
    textTransform: "uppercase",
  },
  date1: {
    height: 51,
    alignItems: "center",
    justifyContent: "center",
  },
  dateChild: {
    marginTop: -22,
    marginLeft: -22.93,
    borderRadius: Border.br_xl,
    backgroundColor: Color.dodgerblue_200,
    width: 44,
    height: 44,
    position: "absolute",
  },
  text9: {
    marginTop: -14.5,
    marginLeft: -8.43,
    lineHeight: 29,
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
  },
  dateParent: {
    right: -12,
    left: -12,
    paddingLeft: Padding.p_2xs,
    top: 0,
    flexDirection: "row",
    position: "absolute",
  },
  frameWrapper: {
    height: 51,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frameWrapper1: {
    top: 56,
    height: 51,
    left: 0,
    overflow: "hidden",
  },
  frameWrapper2: {
    top: 112,
    height: 51,
    left: 0,
    overflow: "hidden",
  },
  text27: {
    color: Color.userAccent,
    textTransform: "uppercase",
  },
  date22: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameWrapper3: {
    top: 168,
    height: 51,
    left: 0,
    overflow: "hidden",
  },
  frameWrapper4: {
    top: 224,
    height: 51,
    left: 0,
    overflow: "hidden",
  },
  frameContainer: {
    top: 79,
    height: 275,
    left: 16,
  },
  signUpWith: {
    display: "none",
    color: Color.backgroundPrimary,
  },
  continue: {
    height: "100%",
    width: "99.02%",
    top: "0%",
    right: "0.98%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.labelPrimary,
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_3xs,
  },
  continue1: {
    height: "49.21%",
    top: "25.4%",
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.3,
    justifyContent: "center",
    alignItems: "flex-end",
    fontFamily: FontFamily.workSansSemibold,
    left: "0%",
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
    color: Color.backgroundPrimary,
    width: "100%",
  },
  continueButton: {
    width: 97,
    height: 44,
  },
  continueButtonWrapper: {
    padding: Padding.p_md,
  },
  selectButton1: {
    width: 115,
    height: 60,
  },
  selectButton: {
    top: 401,
    left: 116,
    position: "absolute",
  },
  darkyes: {
    backgroundColor: Color.backgroundPrimary,
    width: 375,
    height: 461,
  },
  datetimePickerBlack: {
    top: 441,
    left: 5,
    borderRadius: Border.br_2xs,
    borderStyle: "dashed",
    borderColor: "#7b61ff",
    borderWidth: 1,
    width: 404,
    height: 446,
    padding: Padding.p_lg,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  requestAlertsAndSelectTime: {
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.labelPrimary,
  },
});

export default RequestAlertsAndSelectTime;
