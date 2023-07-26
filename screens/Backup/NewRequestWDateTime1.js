import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const NewRequestWDateTime1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newRequestWdatetime, styles.clipListLayout]}>
      <Text style={[styles.workside, styles.text4Typo]}>WORKSIDE</Text>
      <Text style={[styles.login, styles.loginTypo]}>ELK HILLS 26Z 383</Text>
      <Text style={[styles.login1, styles.loginTypo]}>GPS 84</Text>
      <View style={styles.saveChanges}>
        <Text style={[styles.saveChanges1, styles.loginTypo]}>
          SAVE CHANGES
        </Text>
      </View>
      <Text style={[styles.request, styles.linkToTypo]}>{` `}</Text>
      <Text style={[styles.preferredVendor, styles.linkToTypo]}>
        Preferred Vendor
      </Text>
      <Text style={styles.datetimeRequested}>Date/Time Requested</Text>
      <View style={[styles.newRequestWdatetimeChild, styles.newPosition]} />
      <View style={[styles.newRequestWdatetimeItem, styles.newPosition]} />
      <Text style={[styles.quantity, styles.quantityTypo]}>Quantity</Text>
      <View
        style={[styles.newRequestWdatetimeInner, styles.rectangleViewPosition]}
      />
      <Text style={styles.quantityTypo}>{` `}</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.comments, styles.commentsTypo]}>Comments</Text>
      <View
        style={[styles.newRequestWdatetimeChild1, styles.newChildPosition1]}
      />
      <Text style={styles.commentsTypo}>{` `}</Text>
      <View
        style={[styles.newRequestWdatetimeChild2, styles.newChildPosition1]}
      />
      <Text style={[styles.linkTo, styles.linkToTypo]}>Link To</Text>
      <View
        style={[styles.newRequestWdatetimeChild3, styles.newChildPosition]}
      />
      <View
        style={[styles.newRequestWdatetimeChild4, styles.newChildPosition]}
      />
      <View style={styles.goBackAgain}>
        <Image
          style={styles.goBackAgainChild}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
      <View style={styles.noAlarm}>
        <Image
          style={[styles.alarmIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/alarm.png")}
        />
      </View>
      <Image
        style={[styles.radioButtonIcon, styles.radioLayout]}
        resizeMode="cover"
        source={require("../assets/radio-button.png")}
      />
      <Text style={[styles.msaOnly, styles.msaOnlyTypo]}>MSA Only</Text>
      <Image
        style={[styles.radioButtonNoSelection, styles.radioLayout]}
        resizeMode="cover"
        source={require("../assets/radio-button-no-selection.png")}
      />
      <Text style={[styles.openRequest, styles.msaOnlyTypo]}>Open Request</Text>
      <View style={styles.selectButton}>
        <View style={styles.selectButton1}>
          <View style={styles.continueButtonWrapper}>
            <View style={styles.continueButton}>
              <View style={[styles.continue, styles.continuePosition]}>
                <Text style={[styles.signUpWith, styles.loginTypo]}>
                  Sign Up With Email
                </Text>
              </View>
              <Text style={[styles.continue1, styles.msaOnlyTypo]}>SELECT</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.listboxComponent, styles.rectangleViewPosition]}>
        <View style={[styles.requestListboxComponent, styles.continuePosition]}>
          <View style={[styles.listboxTitle, styles.listboxPosition]}>
            <Text style={[styles.request3, styles.text4Typo]}>Request</Text>
          </View>
          <View style={[styles.listboxMain, styles.clipListPosition]}>
            <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
            <Image
              style={[styles.chevronIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/chevron11.png")}
            />
            <View style={styles.placeholderText}>
              <Text style={[styles.selectRequest, styles.textTypo3]}>
                Select Request
              </Text>
            </View>
          </View>
          <View style={[styles.clipList, styles.clipListPosition]}>
            <View style={[styles.dropdownList, styles.listboxbgShadowBox]}>
              <View style={styles.itemFlexBox}>
                <Text style={[styles.text, styles.textTypo3]}>Cementing</Text>
              </View>
              <View style={[styles.item2, styles.itemFlexBox]}>
                <Text style={[styles.text, styles.textTypo3]}>
                  Coiled Tubing
                </Text>
              </View>
              <View style={[styles.item2, styles.itemFlexBox]}>
                <Text style={[styles.text, styles.textTypo3]}>
                  Fishing Tool
                </Text>
              </View>
              <View style={[styles.item2, styles.itemFlexBox]}>
                <Text style={[styles.text, styles.textTypo3]}>Wireline</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.datetimePickerBlack}>
        <View style={styles.darkyes}>
          <View style={[styles.header, styles.frameWrapperPosition]}>
            <View style={styles.june2020Parent}>
              <Text style={[styles.june2020, styles.amTypo]}>June 2020</Text>
              <View style={styles.wrapper}>
                <Text style={[styles.text4, styles.pmLayout1]}>􀆊</Text>
              </View>
            </View>
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text5, styles.textTypo1]}>􀆊</Text>
              <Text style={[styles.text6, styles.textTypo1]}>􀆉</Text>
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
              <View style={styles.sunWrapper}>
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
                <View style={styles.date} />
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>1</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>2</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>3</Text>
                </View>
                <View style={styles.dateLayout}>
                  <View style={[styles.dateChild, styles.text10Position]} />
                  <Text style={[styles.text10, styles.text10Position]}>4</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>5</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>6</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={styles.date7}>
                  <Text style={[styles.text7, styles.textTypo]}>7</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>8</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>9</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>10</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>11</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>12</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>13</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={styles.date7}>
                  <Text style={[styles.text7, styles.textTypo]}>14</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>15</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>16</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>17</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>18</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>19</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>20</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={styles.date7}>
                  <Text style={[styles.text7, styles.textTypo]}>21</Text>
                </View>
                <View style={[styles.date22, styles.dateLayout]}>
                  <Text style={[styles.text28, styles.textTypo]}>22</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>23</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>24</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>25</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>26</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>27</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameWrapper2, styles.frameWrapperPosition]}>
              <View style={styles.dateParent}>
                <View style={styles.date7}>
                  <Text style={[styles.text7, styles.textTypo]}>28</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>29</Text>
                </View>
                <View style={[styles.date1, styles.dateFlexBox]}>
                  <Text style={[styles.text7, styles.textTypo]}>30</Text>
                </View>
                <View style={[styles.date31, styles.dateFlexBox]} />
                <View style={[styles.date31, styles.dateFlexBox]} />
                <View style={[styles.date31, styles.dateFlexBox]} />
                <View style={[styles.date31, styles.dateFlexBox]} />
              </View>
            </View>
          </View>
          <Pressable
            style={styles.selectButton2}
            onPress={() => navigation.navigate("NewRequest")}
          >
            <View style={styles.selectButton1}>
              <View style={styles.continueButtonWrapper}>
                <View style={styles.continueButton}>
                  <View style={[styles.continue2, styles.continuePosition]}>
                    <Text style={[styles.signUpWith, styles.loginTypo]}>
                      Sign Up With Email
                    </Text>
                  </View>
                  <Text style={[styles.continue1, styles.msaOnlyTypo]}>
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
  clipListLayout: {
    width: "100%",
    overflow: "hidden",
  },
  text4Typo: {
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
    fontSize: FontSize.size_5xl,
    color: Color.backgroundPrimary,
  },
  linkToTypo: {
    left: 27,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  newPosition: {
    width: 360,
    backgroundColor: Color.silver_200,
    top: 655,
    left: 27,
    position: "absolute",
  },
  quantityTypo: {
    top: 315,
    left: 27,
    height: 31,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleViewPosition: {
    left: 26,
    position: "absolute",
  },
  commentsTypo: {
    top: 396,
    height: 32,
    left: 28,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  newChildPosition1: {
    top: 431,
    width: 360,
    backgroundColor: Color.silver_200,
    left: 27,
    position: "absolute",
  },
  newChildPosition: {
    top: 765,
    left: 26,
    width: 360,
    backgroundColor: Color.silver_200,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  radioLayout: {
    width: 19,
    height: 18,
    top: 587,
    position: "absolute",
  },
  msaOnlyTypo: {
    fontSize: FontSize.size_base,
    color: Color.backgroundPrimary,
    position: "absolute",
  },
  continuePosition: {
    bottom: "0%",
    left: "0%",
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
  textTypo3: {
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
  dateFlexBox: {
    marginLeft: 4,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text10Position: {
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
  workside: {
    top: 50,
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
    display: "flex",
    left: 69,
    width: 289,
    letterSpacing: 0.5,
    position: "absolute",
  },
  login1: {
    top: 153,
    display: "flex",
    left: 69,
    width: 289,
    letterSpacing: 0.5,
    position: "absolute",
  },
  saveChanges1: {
    display: "flex",
  },
  saveChanges: {
    top: 834,
    width: 357,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    backgroundColor: Color.lightgreen_100,
    left: 29,
    position: "absolute",
  },
  request: {
    top: 194,
  },
  preferredVendor: {
    top: 547,
  },
  datetimeRequested: {
    top: 623,
    left: 28,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  newRequestWdatetimeChild: {
    height: 30,
  },
  newRequestWdatetimeItem: {
    height: 37,
  },
  quantity: {
    width: 102,
  },
  newRequestWdatetimeInner: {
    height: 32,
    top: 349,
    left: 26,
    width: 360,
    backgroundColor: Color.silver_200,
  },
  rectangleView: {
    height: 40,
    top: 349,
    left: 26,
    width: 360,
    backgroundColor: Color.silver_200,
  },
  comments: {
    width: 129,
  },
  newRequestWdatetimeChild1: {
    height: 32,
  },
  newRequestWdatetimeChild2: {
    height: 116,
  },
  linkTo: {
    top: 733,
  },
  newRequestWdatetimeChild3: {
    height: 30,
  },
  newRequestWdatetimeChild4: {
    height: 37,
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
    padding: Padding.p_3xs,
    position: "absolute",
  },
  alarmIcon: {
    height: "113.33%",
    width: "106.67%",
    bottom: "-13.33%",
    left: "-6.67%",
    right: "0%",
    top: "0%",
  },
  noAlarm: {
    left: 368,
    width: 60,
    height: 60,
    top: 0,
    position: "absolute",
  },
  radioButtonIcon: {
    height: 18,
    left: 29,
    width: 19,
  },
  msaOnly: {
    left: 57,
    top: 587,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  radioButtonNoSelection: {
    left: 142,
    height: 18,
  },
  openRequest: {
    left: 170,
    top: 587,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  signUpWith: {
    display: "none",
  },
  continue: {
    left: "0%",
    right: "0.98%",
    width: "99.02%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    borderRadius: Border.br_9xs,
    position: "absolute",
    backgroundColor: Color.lightgreen_100,
  },
  continue1: {
    height: "49.21%",
    top: "25.4%",
    letterSpacing: 0.3,
    left: "0%",
    justifyContent: "center",
    fontSize: FontSize.size_base,
    alignItems: "flex-end",
    fontFamily: FontFamily.workSansSemibold,
    display: "flex",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
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
    top: 564,
    left: 284,
    width: 119,
    height: 70,
    position: "absolute",
  },
  request3: {
    fontFamily: FontFamily.montserratBold,
    color: Color.darkslategray,
    left: "0%",
    top: "0%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  listboxTitle: {
    height: "6.92%",
    bottom: "93.08%",
    top: "0%",
    position: "absolute",
  },
  listboxbg: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.labelPrimary,
  },
  chevronIcon: {
    height: "10.96%",
    width: "4%",
    top: "45.35%",
    right: "7.64%",
    bottom: "43.69%",
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
    alignItems: "center",
    left: "4.55%",
    right: "4.55%",
    width: "90.91%",
    justifyContent: "center",
    overflow: "hidden",
  },
  clipList: {
    height: "90.31%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  requestListboxComponent: {
    left: "0%",
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  listboxComponent: {
    top: 185,
    width: 359,
    height: 257,
  },
  june2020: {
    fontSize: FontSize.size_mid,
    color: Color.labelPrimary,
    lineHeight: 24,
    fontFamily: FontFamily.sFProTextSemibold,
    letterSpacing: 0,
    textAlign: "left",
  },
  text4: {
    fontFamily: FontFamily.sFProTextBold,
    color: Color.userAccent,
    textAlign: "left",
    fontWeight: "700",
  },
  wrapper: {
    paddingTop: Padding.p_11xs,
    marginLeft: 3,
  },
  june2020Parent: {
    top: 14,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  text5: {
    left: 43,
    fontSize: FontSize.header2_size,
    lineHeight: 24,
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  text6: {
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
    left: 0,
    height: 44,
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
    alignItems: "center",
    top: 0,
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
    alignItems: "center",
    top: 0,
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
    alignItems: "center",
    top: 0,
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
    flex: 1,
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
    left: 16,
    height: 18,
  },
  date: {
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text7: {
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
  text10: {
    marginTop: -14.5,
    marginLeft: -8.43,
    lineHeight: 29,
    fontFamily: FontFamily.sFProDisplayMedium,
    fontWeight: "500",
    color: Color.userAccent,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_5xl,
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
    flex: 1,
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
  text28: {
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
  continue2: {
    left: "0%",
    right: "0.98%",
    width: "99.02%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    borderRadius: Border.br_9xs,
    position: "absolute",
    backgroundColor: Color.labelPrimary,
  },
  selectButton2: {
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
    top: 412,
    left: 8,
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#7b61ff",
    borderWidth: 1,
    width: 399,
    height: 492,
    padding: Padding.p_base,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  newRequestWdatetime: {
    height: 926,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.labelPrimary,
  },
});

export default NewRequestWDateTime1;
