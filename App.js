const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import WorksideAnimation from "./screens/WorksideAnimation";
import WorksideLogin from "./screens/WorksideLogin";
import DateTimeScreen from "./screens/DateTimeScreen";
import RequestMapping from "./screens/RequestMapping";
import NewRequest from "./screens/NewRequest";
import RequestAlertsAndSelectTime from "./screens/RequestAlertsAndSelectTime";
import RequestAlerts from "./screens/RequestAlerts";
import SignUpScreen from "./screens/SignUpScreen";
import PendingProjects from "./screens/PendingProjects";
import RequestDetails from "./screens/RequestDetails";
import ActiveRequests from "./screens/ActiveRequests";
import ArchivedProjects from "./screens/ArchivedProjects";
import ActiveProjects from "./screens/ActiveProjects";
import MainScreen from "./screens/MainScreen";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import RootDrawerNavigator from './routes/Drawer';

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Authorization">
      <Stack.Screen
        name="LoginScreen"
        component={WorksideLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const WorksideWorkflow = () => {
  // Stack Navigator for Workside Process Screens
  return (
    <Stack.Navigator initialRouteName="WorksideProcessScreens">
      <Stack.Screen
        name="DateTimeScreen"
        component={DateTimeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RequestMapping"
        component={RequestMapping}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewRequest"
        component={NewRequest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActiveRequests"
        component={ActiveRequests}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RequestAlertsAndSelectTime"
        component={RequestAlertsAndSelectTime}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RequestAlerts"
        component={RequestAlerts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PendingProjects"
        component={PendingProjects}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RequestDetails"
        component={RequestDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ArchivedProjects"
        component={ArchivedProjects}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActiveProjects"
        component={ActiveProjects}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Work Sans": require("./assets/fonts/Work_Sans.ttf"),
    "Work Sans_semibold": require("./assets/fonts/Work_Sans_semibold.ttf"),
    "Work Sans_bold": require("./assets/fonts/Work_Sans_bold.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    "SF Pro Text": require("./assets/fonts/SF_Pro_Text.ttf"),
    "SF Pro Text_Regular": require("./assets/fonts/SF_Pro_Text_Regular.ttf"),
    "SF Pro Text_Semibold": require("./assets/fonts/SF_Pro_Text_Semibold.ttf"),
    "SF Pro Text_Bold": require("./assets/fonts/SF_Pro_Text_Bold.ttf"),
    "SF Pro Display": require("./assets/fonts/SF_Pro_Display.ttf"),
    "SF Pro Display_Regular": require("./assets/fonts/SF_Pro_Display_Regular.ttf"),
    "SF Pro Display_Medium": require("./assets/fonts/SF_Pro_Display_Medium.ttf"),
    "SF Pro Display_Semibold": require("./assets/fonts/SF_Pro_Display_Semibold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="SplashScreen">
            {/* SplashScreen which will come once for 5 Seconds */}
            <Stack.Screen
              name="SplashScreen"
              component={WorksideAnimation}
              // Hiding header for Splash Screen
              options={{ headerShown: false }}
            />
            {/* Auth Navigator: Include Login and Signup */}
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="WorksideWorkflow"
              component={WorksideWorkflow}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="RootDrawer"
              component={RootDrawerNavigator}
              options={{ headerShown: false }}
            />
            {/* <RootDrawerNavigator/> */}
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
