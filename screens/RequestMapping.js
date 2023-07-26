import * as React from "react";
import { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import * as Location from 'expo-location';
// import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

let locationsOfInterest= [
  {
    title: "Rig Location",
    location: {
      latitude: 35.2,
      longitude: -119.3
    },
    description: "Rig 45",
    icon: "account-hard-hat",
  },
  {
    title: "Supplier Location",
    location: {
      latitude: 35.4,
      longitude: -118.9
    },
    description: "San Joaquin Bit",
    icon: "truck-fast",
  }
]
/******************************************************************** */
/***** Display Current Delivery Status */
/******************************************************************** */

const RequestMapping = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  onRegionChange = (region) => {
    // console.log(region);
  }

  const ShowLocations = () => {
    return locationsOfInterest.map((item, index) => {
      return (
          <Marker 
            key={index}
            coordinate={item.location}
            title={item.title}
            description={item.description}
          >
            <Icon style={{
              textAlign: 'center',
              top: 5,
            }} name= {item.icon} size={30} color='#E74c3c' />
          </Marker>
        )
    })
  }
  
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(text);
  }

  return (
    <View style={styles.screenFrame}>
      <Text style={styles.appTitle}>WORKSIDE</Text>
      <Text style={[styles.vendorStyle]}>HALLIBURTON</Text>
      <Text style={[styles.serviceStyle]}>FRAC TRUCK</Text>

      <MapView 
        style= {styles.requestMapView}
        onRegionChange={onRegionChange}
        initialRegion={{
          "latitude": 35.411544488071556,
          "latitudeDelta": 0.7141989335803416,
          "longitude": -119.09790278932303,
          "longitudeDelta": 0.9062909038644165,

          // "latitude": 35.35027296071274,
          // "latitudeDelta": 0.7141989335803416,
          // "longitude": -118.96378819351659,
          // "longitudeDelta": 0.9062909038644165,
        }}
        >
          {ShowLocations()}
      </MapView>

      <Pressable style={[styles.saveChangesTop, styles.buttonStyle]}>
        <Text style={styles.buttonHolder}>SAVE CHANGES</Text>
      </Pressable>
      <Pressable style={[styles.contactRigButtonTop, styles.buttonStyle]}>
        <Text style={styles.buttonHolder}>CONTACT RIG</Text>
      </Pressable>
      <Text style={[styles.textTypo, styles.departureLabel]}>Departure Time</Text>
      <Text style={[styles.textTypo, styles.textClr, styles.departureTime]}>07:30</Text>
      <Text style={[styles.textTypo, styles.etaLabel]}>ETA</Text>
      <Text style={[styles.textTypo, styles.textClr, styles.etaTime]}>08:14</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenFrame: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.labelPrimary,
  },
  appTitle: {
    top: 20,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    position: "absolute",
  },
  vendorStyle: {
    top: 40,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  serviceStyle: {
    top: 60,
    width: '100%',
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.backgroundPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  saveChangesSpaceBlock: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    width: 359,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
    left: 39,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textClr: {
    color: Color.crimson_200,
  },
  departureLabel: {
    top: 500,
    left: 40,
    color: Color.backgroundPrimary,
  },
  departureTime: {
    top: 500,
    left: 250,
  },
  etaLabel: {
    top: 540,
    left: 40,
    color: Color.backgroundPrimary,
  },
  etaTime: {
     top: 540,
     left: 250,
  },
  buttonHolder: {
    height: 20,
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
  saveChangesTop: {
    top: 580,
  },
  contactRigButtonTop: {
    top: 640,
  },
  buttonStyle: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    width: 359,
    backgroundColor: Color.lightgreen_100,
    borderRadius: Border.br_3xs,
    left: 34,
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
  requestMapView: {
    top: 85,
    left: 0,
    width: "100%",
    height: 400,
    position: "absolute",
    overflow: "hidden",
  },
  saveChangesButton: {
    top: 580,
  },
  contactRigButton: {
    top: 640,
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
  requestMapping: {
    backgroundColor: Color.labelPrimary,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default RequestMapping;
