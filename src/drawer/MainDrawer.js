import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, LoginScreen, RegistrationScreen } from "../screens";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function MainDrawer() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Logout" component={RegistrationScreen} />
      </Drawer.Navigator>
  );
}
