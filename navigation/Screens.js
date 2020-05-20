import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Mission from "../screens/Mission";
import Vission from "../screens/Vission";
import Profile from "../screens/Profile";
import MyBuddy from "../screens/MyBuddy";
import Calendar from "../screens/Calendar";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Recover from "../screens/Recover";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import NewScreen from "../screens/NewScreen";
import TasksGoals from "../screens/TasksGoals";

// drawer
import Menu from "./Menu";
import DrawerItem from "../components/DrawerItem";

// header for screens
import Header from "../components/Header";

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = "Search";

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps &&
        screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});

const ElementsStack = createStackNavigator({
  Elements: {
    screen: Elements,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Elements" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ArticlesStack = createStackNavigator({
  Articles: {
    screen: Articles,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Articles" navigation={navigation} />
    })
  }
},{
  cardStyle: {
    backgroundColor: "#F8F9FE"
  },
  transitionConfig
});

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Profile" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);
const MyBuddyStack = createStackNavigator(
  {
    MyBuddy: {
      screen: MyBuddy,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="My Buddy" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }/*,
    SendMessage: {
      screen: SendMessage
    }*/
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const CalendarStack = createStackNavigator(
  {
    Calendar: {
      screen: Calendar,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Calendar" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const TasksGoalsStack = createStackNavigator(
  {
    TasksGoals: {
      screen: TasksGoals,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Tasks" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const RecoverStack = createStackNavigator(
  {
    Recover: {
      screen: Recover,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Reset Password" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);

const NewScreenStack = createStackNavigator(
  {
    NewScreen: {
      screen: NewScreen,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="" iconColor={'#FFF'} navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: "#FFFFFF" },
    transitionConfig
  }
);



const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header search options title="Home" navigation={navigation} />
      })
    },
    Mission: {
      screen: Mission,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="" navigation={navigation} />
        ),
        headerTransparent: true
      })
    },
    Vission: {
      screen: Vission,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header left={<Block />} white transparent title="" navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  
  {
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    transitionConfig
  }
);


// Left Menu
const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title="Home" />
        )
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Profile" />
        )
      })
    },
    Calendar: {
      screen: CalendarStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Calendar" title="Calendar" />
        )
      })
    },
    TasksGoals: {
      screen: TasksGoalsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="TasksGoals" title="Tasks" />
        )
      })
    },
    MyBuddy: {
      screen: MyBuddyStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="MyBuddy" title="My Buddy" />
        )
      })
    },
    NewScreen: {
      screen: NewScreenStack,
      navigationOptions: navOpt => ({
        drawerLabel: () => {}
      })
    },
    // Login / Logout
    Login: {
      screen: Login,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Login" title="Logout" />
        )
      })
    },
    Register: {
      screen: Register,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Recover: {
      screen: RecoverStack,
      navigationOptions: navOpt => ({
        drawerLabel: () => {}
      })
    }
  },
  Menu
);
// To separate the authentication flow
const SwitchNavigator = createSwitchNavigator({
  Onboarding: { screen: Onboarding },
  Login: { screen: Login },
  Register: { screen: Register },
  Recover: { screen: Recover },
  drawer: { screen: AppStack }
});

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
