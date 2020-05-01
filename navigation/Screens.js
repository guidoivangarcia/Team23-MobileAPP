import React from "react";
import { Easing, Animated } from "react-native";
import {
  createStackNavigator,
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
import Calendar from "../screens/Calendar";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Recuperar from "../screens/Recuperar";
import Elements from "../screens/Elements";
import MapDirections from "../screens/MapDirections";
import MapDirections2 from "../screens/MapDirections2";
import Articles from "../screens/Articles";
import ListaDeCompras from "../screens/ListaDeCompras";
import ListasGuardadas from "../screens/ListasGuardadas";
import MapaTiendas from "../screens/MapOnly";
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

const ListasGuardadasStack = createStackNavigator(
  {
    ListasGuardadas: {
      screen: ListasGuardadas,
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

const RecuperarStack = createStackNavigator(
  {
    Recuperar: {
      screen: Recuperar,
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

const MapDirectionsStack = createStackNavigator(
  {
    MapDirections: {
      screen: MapaTiendas,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Mapa" iconColor={'#FFF'} navigation={navigation} />
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

const RutaMapaStack = createStackNavigator(
  {
    RutaMapa: {
      screen: MapDirections,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Mapa" iconColor={'#FFF'} navigation={navigation} />
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

const RutaMapa2Stack = createStackNavigator(
  {
    RutaMapa: {
      screen: MapDirections2,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header white transparent title="Mapa" iconColor={'#FFF'} navigation={navigation} />
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

const ListaDeComprasStack = createStackNavigator(
  {
    ListaDeCompras: {
      screen: ListaDeCompras,
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
    ListasGuardadas: {
      screen: ListasGuardadasStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="ListasGuardadas" title="Tasks" />
        )
      })
    },
    RutaMapa: {
      screen: RutaMapaStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    RutaMapa2: {
      screen: RutaMapa2Stack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    ListaDeCompras: {
      screen: ListasGuardadasStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="ListasGuardadas" title="" />
        )
      })
    },
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
    Recuperar: {
      screen: RecuperarStack,
      navigationOptions: navOpt => ({
        drawerLabel: () => {}
      })
    }
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
