import React from "react";
import {
  Alert,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import ApiController from '../controller/ApiController';
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { sendEmail } from './send-email';
const { width, height } = Dimensions.get("screen");

class Recuperar extends React.Component {
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
        alert("Contraseña incorrecta");
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
    const { navigate } = this.props.navigation;
    console.log(usuarioBuscado)

    if (this.state.username == null || this.state.username == ' ') {
      Alert.alert("Error", "Email can not be empty!!!", [
        {
          text: "OK"
        }
      ]);
    } else {
      //METODOS PARA ENVIAR EMAIL
      sendEmail(
        'admin@team23.de',
        'Forget Password!',
        'I forgot my Team23 account password'
    ).then(() => {
        console.log('Our email successful provided to device mail ');
    });
      navigate("Home");
      //ApiController.login(this.okLogin.bind(this), this.noOkLogin.bind(this), usuarioBuscado)
        //.then((res) => this.props.navigation.navigate('Main'))
        //.catch((err) => alert(err.message))
    }

  }

noOkLogin()
{
  Alert.alert("Error","Las credenciales ingresadas no son validas", [
    {    
      text: "OK"
    }
  ]);
}
okLogin()
{
  const { navigate } = this.props.navigation;
  console.log('username:', this.state.username + " online")
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
      <Block flex middle >
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="black" size={22}>
                    Forgot your Password?
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
                        placeholder="Email"
                        onChangeText={this.handleUsername}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                    <Block middle >
                      <Button onPress={() => this.login(this.state.username, this.state.password)} color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.TEAM23}>
                          RECOVER
                        </Text>
                      </Button>
                      <Button onPress={() => navigation.navigate("Login")} color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.TEAM23}>
                          BACK
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
    height: height * 0.39,
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
    overflow: "hidden",
    paddingBottom: -80
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
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    backgroundColor: argonTheme.COLORS.BLACK
  }
});

export default Recuperar;
