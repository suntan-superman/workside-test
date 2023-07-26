import { createStackNavigator } from '@react-navigation/stack';
import RequestAlerts from "../screens/RequestAlerts";
import PendingProjects from "../screens/PendingProjects";
import ArchivedProjects from "../screens/ArchivedProjects";
import ActiveProjects from "../screens/ActiveProjects";

const screens = {
    ActiveProjects: {
    screen: ActiveProjects,
    navigationOptions: {
        title: 'Active Projects',
        }
    },
    PendingProjects: {
    screen: PendingProjects,
    navigationOptions: {
        title: 'Pending Projects',
        }
    },
    ArchivedProjects: {
    screen: ArchivedProjects,
    navigationOptions: {
        title: 'Archived Projects',
        }
    },
    RequestAlerts: {
    screen: RequestAlerts,
    navigationOptions: {
        title: 'Request Alerts',
        }
    },
    };

const MiscStack = createStackNavigator();

const MiscStackScreen = ({navigation}) => (
    <MiscStack.Navigator headerShown='false'>
        <MiscStack.Screen name="ActiveProjects" component={ActiveProjects}/>
        <MiscStack.Screen name="PendingProjects" component={PendingProjects}/>
        <MiscStack.Screen name="ArchivedProjects" component={ArchivedProjects}/>
        <MiscStack.Screen name="RequestAlerts" component={RequestAlerts}/>
    </MiscStack.Navigator>
  );

export default MiscStackScreen;
