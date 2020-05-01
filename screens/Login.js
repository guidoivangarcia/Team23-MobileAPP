import React from "react";
import {
  Alert,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import ApiController from '../controller/ApiController';
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: null,
        password: null,
    }
}

checkLogin() {
    ApiController.getUsuario(this.checkUsuario.bind(this), this.state.username)
}

checkUsuario(data) {
    if (data.usuarioId == this.state.username && data.password == this.state.password && this.state.username != null) {
        this.props.onPressLogin(this.state.username);
        navigation.navigate("Home");
    } else {
        alert("Incorrect Password");
    }
}

handleUsername = (text) => {
  this.setState({ username: text })
}
handlePassword = (text) => {
    this.setState({ password: text })
}

  login = (username, password) => {
    let usuarioBuscado = {
      username: username,
      password: password
    }

    console.log(usuarioBuscado)

    if (this.state.username == null || this.state.username == ' ') {
      Alert.alert("Error", "Username can not be empty!!!", [
        {
          text: "OK"
        }
      ]);
    } else {
      if (this.state.password == null || this.state.password == ' ') {
        Alert.alert("Error", "Password can not be empty!!!", [
          {
            text: "OK"
          }
        ]);
      } else {

      }
      ApiController.login(this.okLogin.bind(this), this.noOkLogin.bind(this), usuarioBuscado)
        //.then((res) => this.props.navigation.navigate('Main'))
        .catch((err) => alert(err.message))
    }

  }

noOkLogin()
{
  Alert.alert("Error","The credentials entered are not valid", [
    {    
      text: "OK"
    }
  ]);
}
okLogin()
{
  const { navigate } = this.props.navigation;
  console.log('username:', this.state.username + " online")
  //alert('Hola ' + this.state.username + ', tu cuenta ha sido creada con exito!  seras redirigido al inicio...');
  Alert.alert("Hello " + this.state.username, "You will be redirected to the Home Screen", [
    {    
      text: "OK",
      onPress: () => navigate("Home")
    }
  ]);
}


  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
              <Image 
                style={styles.team23Logo}
                source={{
                  uri: 'https://www.aitiraum.de/system/images/a8b/5a6/a21/8897/large/Team23-Logo.png',
                }}
                ></Image>
              </Block>
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={12}>
                    Login with your Team23 Account
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    {/* <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block> */}
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Username"
                        onChangeText={this.handleUsername}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        onChangeText={this.handlePassword}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />

                      <Block row width={width * 0.75}>
                        <Checkbox
                          checkboxStyle={{
                            borderWidth: 3
                          }}
                          color={argonTheme.COLORS.TEAM23}
                          label="Remember Password"
                        />
                        <Button
                          style={{ width: 100 }}
                          color="transparent"
                          textStyle={{
                            color: argonTheme.COLORS.PRIMARY,
                            fontSize: 14
                          }}
                        >

                        </Button>
                      </Block>


                      {/* <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          Complejidad de la Contraseña:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          Segura
                        </Text>
                        
                      </Block> */}
                      <Block middle row style={styles.passwordCheck2}>

                      <Button onPress={() => navigation.navigate("Recuperar")} color="primary" style={styles.createButton2}>
                      <Text size={12} 
                     // color={argonTheme.COLORS.MUTED}
                      >
                          Forgot your Password?
                        </Text>
                      </Button>

                      </Block>
                    </Block>
                    
                    <Block middle>
                      <Button onPress={() => this.login(this.state.username, this.state.password)} color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.TEAM23}>
                          LOGIN
                        </Text>
                      </Button>
                      <Button onPress={() => navigation.navigate("Register")} color="primary"  style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.TEAM23}>
                          REGISTER AN ACCOUNT
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  team23Logo: {
    width: '70%',
    height: 90
  },
  socialTextButtons: {
    color: argonTheme.COLORS.BLACK,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 18
  },
  passwordCheck2: {
    paddingLeft: 15,
    paddingTop: -15,
    paddingBottom: 5
  },
  createButton: {
    width: width * 0.5,
    marginTop: 10,
    backgroundColor: argonTheme.COLORS.BLACK
  },
  createButton2: {
    width: width * 0.34,
    marginTop: 2,
    marginRight: 12,
    backgroundColor: '#F4F5F7'
  }
});

export default Login;
