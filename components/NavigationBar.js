import React, { useEffect, useContext } from "react";
import { View } from "react-native";
// import screens
import Home from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import DiscountScreen from "../screens/Discount";
import AddScreen from "../screens/Add";
import Charts from "../screens/Charts";
import Logout from "../screens/Auth/LogoutScreen";
import Completed from "./Completed";
import LoginScreen from "../screens/Auth/LoginScreen";
import { GlobalContext } from "../context/provider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/Auth/Welcome";
import EmailSentScreen from "../screens/Auth/EmailSent";
// import bottom navigation
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../styles/theme";

//import icons
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "../styles/globalElements";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../screens/Details";
import RegisterScreen from "../screens/Auth/RegisterScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="EmailSent" component={EmailSentScreen} />
    </Stack.Navigator>
  );
};

// Screens Stack
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <ProfileStack.Screen
        name="Logout"
        component={Logout}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="completed"
        component={Completed}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabStack" component={TabStack} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const LandingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 35,
          marginHorizontal: 20,
          height: 60,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
          paddingHorizontal: 20,
        },
      }}
    >
      <Tab.Screen
        name={"HomeStack"}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? COLORS.brown10 : "gray"}
              />
            </View>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Charts"}
        component={Charts}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <AntDesign
                name="barschart"
                size={24}
                color={focused ? COLORS.brown10 : "gray"}
              />
            </View>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Add"}
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity>
              <View style={globalStyles.plusbutton}>
                <AntDesign
                  name="plus"
                  size={30}
                  color={focused ? COLORS.green : "white"}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Discount"}
        component={DiscountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <AntDesign
                name="barcode"
                size={24}
                color={focused ? COLORS.brown10 : "gray"}
              />
            </View>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name={"Profile"}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "absolute", top: "50%" }}>
              <AntDesign
                name="user"
                size={24}
                color={focused ? COLORS.brown10 : "gray"}
              />
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const NavigationBar = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);

  const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setAuthLoaded(true);

        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthenticated ? <LandingStack /> : <AuthStack />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default NavigationBar;
