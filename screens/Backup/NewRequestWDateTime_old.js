import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const NewRequestWDateTime = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newRequestWdatetime}>
      <Text style={[styles.workside, styles.textTypo3]}>WORKSIDE</Text>
      <Text style={[styles.login, styles.loginTypo]}>ELK HILLS 26Z 383</Text>
      <Text style={[styles.login1, styles.loginTypo]}>GPS 84</Text>
      <Text style={[styles.request, styles.requestTypo]}>{` `}</Text>
      <Text style={[styles.request1, styles.requestTypo]}>{` `}</Text>
      <Text style={styles.request2}>{` `}</Text>
      <View style={styles.goBackAgain}>
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
          source={require("../assets/alarm.png")}
        />
      </View>
      <View style={styles.datetimePickerBlack}>
        <View style={styles.darkyes}>
          <View style={[styles.header, styles.frameWrapperPosition]}>
            <View style={styles.june2020Parent}>
              <Text style={[styles.june2020, styles.amTypo]}>June 2020</Text>
              <View style={styles.wrapper}>
                <Text style={[styles.text, styles.pmLayout1]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text1, styles.textTypo1]}>􀆊</Text>
              <Text style={[styles.text2, styles.textTypo1]}>􀆉</Text>
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
              <View style={[styles.ampmPicker, styles.pickerBg]}>
                <View style={[styles.option2, styles.pmLayout]}>
                  <Text style={[styles.pm, styles.pmLayout]}>PM</Text>
                </View>
                <View style={[styles.option1, styles.amLayout]}>
                  <Text style={[styles.am, styles.amLayout]}>AM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.darkyesInner, styles.parentPosition]}>
            <View style={styles.frameParent}>
              <View style={[styles.sunWrapper, styles.dateFlexBox1]}>
                <Text style={[styles.sun, styles.pmLayout1]}>sun</Text>
              </View>
              <View style={[styles.monWrapper, styles.dateFlexBox]}>
                <Text style={[styles.sun, styles.pmLayout1]}>mon</Text>
              </View>
              <View style={[styles.monWrapper, styles.dateFlexBox]}>
                <Text style={[styles.sun, styles.pmLayout1]}>tue</Text>
              </View>
              <View style={[styles.monWrapper, styles.dateFlexBox]}>
                <Text style={[styles.sun, styles.pmLayout1]}>wed</Text>
              </View>
              <View style={[styles.monWrapper, styles.dateFlexBox]}>
                <Text style={[styles.sun, styles.pmLayout1]}>thu</Text>
              </View>
              <View style={[styles.monWrapper, styles.dateFlexBox]}>
                <Text style={[styles.sun, styles.pmLayout1]}>fri</Text>
              </View>
              <View style={[styles.monWrapper, styles.dateFlexBox]}>
                <Text style={[styles.sun, styles.pmLayout1]}>sat</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.parentPosition]}>
            <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date, styles.dateFlexBox1]} />
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>2</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>3</Text>
                </View>
                <View style={styles.dateLayout}>
                  <View style={[styles.dateChild, styles.text6Position]} />
                  <Text style={[styles.text6, styles.text6Position]}>4</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>5</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>6</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date7, styles.dateFlexBox1]}>
                  <Text style={[styles.text3, styles.textTypo]}>7</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>8</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>9</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>10</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>11</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>12</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>13</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date7, styles.dateFlexBox1]}>
                  <Text style={[styles.text3, styles.textTypo]}>14</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>15</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>16</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>17</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>18</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>19</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>20</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date7, styles.dateFlexBox1]}>
                  <Text style={[styles.text3, styles.textTypo]}>21</Text>
                </View>
                <View style={[styles.date22, styles.dateLayout]}>
                  <Text style={[styles.text24, styles.textTypo]}>22</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>23</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>24</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>25</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>26</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>27</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper2, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={[styles.date7, styles.dateFlexBox1]}>
                  <Text style={[styles.text3, styles.textTypo]}>28</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>29</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text3, styles.textTypo]}>30</Text>
                </View>
                <View style={[styles.date31, styles.dateFlexBox]} />
                <View style={[styles.date31, styles.dateFlexBox]} />
                <View style={[styles.date31, styles.dateFlexBox]} />
                <View style={[styles.date31, styles.dateFlexBox]} />
              </View>
            </View>
          </View>
          <Pressable
            style={styles.selectButton}
            onPress={() =>
              navigation.navigate("WorksideWorkflow", { screen: "NewRequest" })
            }
          >
            <View style={styles.selectButton1}>
              <View style={styles.continueButtonWrapper}>
                <View style={styles.continueButton}>
                  <View style={[styles.continue, styles.continuePosition]}>
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
  textTypo3: {
    textAlign: "left",
    fontWeight: "700",
  },
  loginTypo: {
    width: 289,
    letterSpacing: 0.5,
    height: 31,
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: FontSize.size_5xl,
    color: Color.backgroundPrimary,
  },
  requestTypo: {
    left: 27,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
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
    top: "50%",
    color: Color.labelPrimary,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.title2Regular,
    textAlign: "center",
  },
  pmLayout: {
    width: 48,
    height: 32,
    position: "absolute",
  },
  amLayout: {
    width: 51,
    height: 32,
    position: "absolute",
  },
  dateFlexBox1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateFlexBox: {
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text6Position: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  dateLayout: {
    borderRadius: Border.br_7xl,
    height: 51,
    marginLeft: 4,
    flex: 1,
  },
  continuePosition: {
    left: "0%",
    position: "absolute",
  },
  workside: {
    top: 65,
    left: 84,
    fontSize: FontSize.size_29xl,
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  login: {
    top: 122,
    height: 31,
    display: "flex",
    left: 69,
    width: 289,
    letterSpacing: 0.5,
    position: "absolute",
  },
  login1: {
    top: 153,
    height: 31,
    display: "flex",
    left: 69,
    width: 289,
    letterSpacing: 0.5,
    position: "absolute",
  },
  request: {
    top: 194,
  },
  request1: {
    top: 315,
    height: 31,
  },
  request2: {
    top: 396,
    left: 28,
    height: 32,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  goBackAgainChild: {
    width: 41,
    height: 22,
  },
  goBackAgain: {
    top: 46,
    left: 19,
    width: 61,
    height: 20,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  alarmIcon: {
    height: "113.33%",
    width: "106.67%",
    right: "0%",
    bottom: "-13.33%",
    left: "-6.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  noAlarm: {
    top: 26,
    left: 368,
    width: 60,
    height: 60,
    position: "absolute",
  },
  june2020: {
    fontSize: FontSize.size_mid,
    color: Color.labelPrimary,
    lineHeight: 24,
    fontFamily: FontFamily.sFProTextSemibold,
    letterSpacing: 0,
    textAlign: "left",
  },
  text: {
    fontFamily: FontFamily.sFProTextBold,
    color: Color.userAccent,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.footnote_size,
  },
  wrapper: {
    paddingTop: Padding.p_11xs,
    marginLeft: 3,
  },
  june2020Parent: {
    left: 16,
    top: 14,
    flexDirection: "row",
    position: "absolute",
  },
  text1: {
    left: 43,
    fontSize: FontSize.header2_size,
    lineHeight: 24,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  text2: {
    fontSize: FontSize.header2_size,
    lineHeight: 24,
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
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
    top: "50%",
    fontFamily: FontFamily.title2Regular,
    color: Color.labelPrimary,
    position: "absolute",
  },
  minutes: {
    left: 38,
  },
  timePicker: {
    borderRadius: Border.br_7xs,
    width: 74,
  },
  pm: {
    fontFamily: FontFamily.footnote,
    lineHeight: 18,
    fontSize: FontSize.footnote_size,
    color: Color.labelPrimary,
    letterSpacing: 0,
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
  option2: {
    left: 49,
    top: 2,
  },
  am: {
    lineHeight: 18,
    fontSize: FontSize.footnote_size,
    color: Color.labelPrimary,
    fontFamily: FontFamily.sFProTextSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
  option1: {
    left: 2,
    borderRadius: Border.br_6xs,
    backgroundColor: Color.grayGray2,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.04)",
    borderWidth: 0.5,
    top: 2,
  },
  ampmPicker: {
    borderRadius: Border.br_4xs,
    width: 100,
    marginLeft: 8,
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
    fontFamily: FontFamily.sFProTextSemibold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.footnote_size,
    textTransform: "uppercase",
  },
  sunWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  monWrapper: {
    flexDirection: "row",
  },
  frameParent: {
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
  text3: {
    fontSize: FontSize.header2_size,
    lineHeight: 24,
    color: Color.labelPrimary,
    textTransform: "uppercase",
  },
  date1: {
    height: 51,
  },
  dateChild: {
    marginTop: -22,
    marginLeft: -22.93,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.dodgerblue_100,
    width: 44,
    height: 44,
  },
  text6: {
    marginTop: -14.5,
    marginLeft: -8.43,
    lineHeight: 29,
    fontFamily: FontFamily.sFProDisplayMedium,
    fontWeight: "500",
    color: Color.userAccent,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_5xl,
    left: "50%",
  },
  dateParent: {
    right: -12,
    left: -12,
    paddingLeft: Padding.p_12xs,
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
  date7: {
    height: 51,
    alignItems: "center",
    justifyContent: "center",
  },
  frameContainer: {
    top: 56,
    height: 51,
    left: 0,
    overflow: "hidden",
  },
  frameView: {
    top: 112,
    height: 51,
    left: 0,
    overflow: "hidden",
  },
  text24: {
    fontSize: FontSize.header2_size,
    lineHeight: 24,
    color: Color.userAccent,
    textTransform: "uppercase",
  },
  date22: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameWrapper1: {
    top: 168,
    height: 51,
    left: 0,
    overflow: "hidden",
  },
  date31: {
    height: 51,
  },
  frameWrapper2: {
    top: 224,
    height: 51,
    left: 0,
    overflow: "hidden",
  },
  frameGroup: {
    top: 79,
    height: 275,
    left: 16,
  },
  signUpWith: {
    display: "none",
    height: 31,
  },
  continue: {
    height: "100%",
    width: "99.02%",
    right: "0.98%",
    bottom: "0%",
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    top: "0%",
    left: "0%",
    backgroundColor: Color.labelPrimary,
  },
  continue1: {
    height: "49.21%",
    top: "25.4%",
    fontSize: FontSize.size_base,
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
    padding: Padding.p_3xs,
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
    top: 292,
    left: 14,
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#7b61ff",
    borderWidth: 1,
    width: 399,
    height: 492,
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  newRequestWdatetime: {
    height: 926,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.labelPrimary,
  },
});

export default NewRequestWDateTime;
