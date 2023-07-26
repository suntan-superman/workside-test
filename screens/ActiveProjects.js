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

  const headerData = [
    {
    headerName: "WORKSIDE",
    pageName: "ACTIVE PROJECTS",
    }
  ]

  const archiveData = [
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

const requestListHeader = () => (
  <View style={styles.requestListHeaderWrapper}>
c  </View>
)

const reqPressHandler =(id) => {
  console.log(id);
}

const renderProjects = ( {item}) => (
  <View style={styles.listWrapper}>
    <TouchableOpacity style={styles.row} onPress={() => reqPressHandler(item.id)}>
      <Text style={styles.row}>{item.reqField}</Text>
    </TouchableOpacity>
  {/* <Text style={styles.row}>{item.reqName}</Text> */}
  <Text style={styles.row}>{item.reqLease}</Text>
  <Text style={styles.row}>{item.reqWell}</Text>
  <Text style={styles.row}>{item.reqRigCo}</Text>
  <Text style={styles.row}>{item.reqRigNumber }</Text>
  </View>
)

const itemSeparator = () => {
  return <View style={styles.separator}/> 
}

  return (
    <View style={styles.screenFrame}>
      <Text style={styles.appTitle}>WORKSIDE</Text>
      <Text style={styles.locationStyle}>ACTIVE PROJECTS</Text>
      <View style={styles.buttonParentView}>
        <View style={styles.requestDetailsWrapper}>
          <Pressable
            style={styles.requestDetails}
            onPress={() => { Alert.alert('Project Details...');}}
          >
            <Text style={[styles.buttonLayout, styles.buttonText]}>
              PROJECT DETAILS
            </Text>
          </Pressable>
        </View>
        <View style={styles.newRequestWrapper}>
          <Pressable
            style={styles.requestDetails}
            onPress={() => { Alert.alert('Delete Project...');}}
            // navigation.navigate("WorksideWorkflow", { screen: "NewRequest" })
            >
            <Text style={[styles.buttonLayout, styles.buttonText]}>
              DELETE PROJECT
            </Text>
          </Pressable>
        </View>
        <Text style={[styles.text1, styles.textTypo]} />
        <Image
          style={styles.iconSmall}
          resizeMode="cover"
          source={require("../assets/icon--small.png")}
        />
        <Image
          style={styles.iconSmall}
          resizeMode="cover"
          source={require("../assets/icon--small.png")}
        />
      </View>
      <View style={styles.frameReqList}>
        <View style={styles.frameReqContainer}>
        </View>
            <View style={styles.requestListHeaderWrapper}>
              <Text style={styles.row}>Field</Text>
              <Text style={styles.row}>Lease</Text>
              <Text style={styles.row}>Well</Text>
              <Text style={styles.row}>Rig Co</Text>
              <Text style={styles.row}>Rig #</Text>
            </View>     
        <View style={[styles.frameReqParent, styles.frameParentReqFlexBox]}>
            <View style={[styles.requestListWrapper, styles.wrapperSpaceBlock]}>
              <FlatList
                data = {archiveData}
                renderItem = { renderProjects }
                ItemSeparatorComponent = {itemSeparator}
                ListEmptyComponent = {<Text>No Archived Data</Text>}
              />
            </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationStyle: {
    top: 100,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  unitStyle: {
    top: 120,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.backgroundPrimary,
  },
  wrapperSpaceBlock: {
    marginLeft: 3,
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  statusTypo: {
    color: Color.gray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameParentReqFlexBox: {
    opacity: 0.5,
    padding: Padding.p_8xs,
    width: '100%',
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  menuLayout: {
    height: 3,
    width: 38,
  },
  appTitle: {
    top: 78,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  loginWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  frameParent: {
    top: 152,
    left: 87,
    alignItems: "center",
    position: "absolute",
  },
  text1: {
    marginTop: 20,
  },
  buttonLayout: {
    display: "flex",
    alignItems: "center",
    width: 289,
    height: 31,
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 40,
    marginRight: 40,
    paddingVertical: 4,
  },
  buttonText: {
    fontFamily: FontFamily.workSansSemibold,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontSize: FontSize.size_5xl,
    // textAlign: "center",
    color: Color.backgroundPrimary,
  },
  requestDetails: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.lightgreen_100,
    width: 359,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
  },
  requestDetailsWrapper: {
    marginTop: 20,
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  newRequestWrapper: {
    marginTop: 20,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  iconSmall: {
    width: 16,
    height: 16,
    marginTop: 20,
  },
  buttonParentView: {
    marginLeft: 0,
    top: 650,
    width: "100%",
    height: 184,
    paddingHorizontal: 0,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  request: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.backgroundPrimary,
  },
  requestWrapper: {
    width: 54,
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  reqDate: {
    textAlign: "center",
  },
  reqDateWrapper: {
    width: 61,
    marginLeft: 33,
  },
  reqTimeWrapper: {
    width: 50,
  },
  status: {
    textAlign: "left",
  },
  statusWrapper: {
    width: 65,
  },
  etaWrapper: {
    width: 55,
  },
  frameReqContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameReqParent: {
    backgroundColor: Color.silver_100,
  },
  frameParent2: {
    backgroundColor: Color.labelPrimary,
  },
  frameReqList: {
    top: 150,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  goBackAgainChild: {
    width: 41,
    height: 22,
  },
  goBackAgain: {
    left: 19,
    height: 20,
    top: 35,
    width: 61,
    padding: Padding.p_3xs,
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
    top: 15,
    left: 307,
    width: 60,
    height: 60,
    position: "absolute",
  },
  menuBarsItem: {
    marginTop: 4,
  },
  menuBars: {
    left: 378,
    height: 14,
    width: 38,
    top: 35,
    position: "absolute",
  },
  screenFrame: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
  requestListWrapper: {
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    flexDirection: "row",
    marginBottom: 10,
  },
  requestListHeaderWrapper: {
    fontSize: 15,
    fontWeight: "800",
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
    padding: Padding.p_3xs,
    flexDirection: "row",
    marginBottom: 10,
  },
  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: '1',
  },
  headerRow: {
    backgroundColor: '##ff00ff',
    flex: 1,
    fontWeight: "800",
    fontSize: 13,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  row: {
    backgroundColor: '#ffff00',
    flex: 1,
    fontSize: 13,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  rowHighlight: {
    backgroundColor: '#fa8072',
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  requestList: {
    fontSize: 16,
  },  
  separator: {
    height: 3,
    width: "100%",
    backgroundColor: '#4169e1',
  }
});

export default ActiveProjects;
