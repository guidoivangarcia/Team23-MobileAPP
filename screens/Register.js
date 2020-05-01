import React from "react";
import {
  Alert,
 // TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import ApiController from '../controller/ApiController';
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: null,
        email: null,
        password: null,
    }
}

handleUsername = (text) => {
  this.setState({ username: text })
}
handlePassword = (text) => {
    this.setState({ password: text })
}
handleEmail = (text) => {
  this.setState({ email: text })
}

  registrarUsuario = (username, password, email) => {
    let usuarioRegister = {
      email: email,
      username: username,
      password: password,
    }

    if (this.state.email == null || this.state.password == null || this.state.username == null || this.state.email == ' ' || this.state.password == ' ' || this.state.username == ' ') {
      Alert.alert("Error", "Try Again", [
        {
          text: "Accept"
        }
      ]);
    } else {
      ApiController.registrarUsuario(this.okRegister.bind(this), this.noOkRegister.bind(this), usuarioRegister);
      //Alert.alert("Bienvenido",'Hola ' + username + ', tu cuenta ha sido creada con exito!  seras redirigido al inicio...');
    }
  }

noOkRegister()
{
  alert("Username already exist");
}
okRegister()
{
  Alert.alert("Welcome",'Hello, your account has been created successfully! You will learn our values and principles and then you will be redirected to the home screen...');
  //lert("Usuario creado!");
  this.props.navigation.navigate('Mission');
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
                    Create a new Team23 Account
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="User"
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
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        onChangeText={this.handleEmail}
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
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          Password Security:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          Secure
                        </Text>
                      </Block>
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.TEAM23}
                        label="I am Agree with terms & conditions"
                      />
                     
                    </Block>
                    <Block middle>
                      <Button onPress={() => this.registrarUsuario(this.state.username, this.state.password, this.state.email)} color="primary" style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.TEAM23}>
                          REGISTER
                        </Text>
                      </Button>
                      <Button onPress={() => navigation.navigate("Onboarding")} color="primary" style={styles.createButton}>
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
    height: height * 0.87,
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
  team23Logo: {
    width: '70%',
    height: 90
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
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    backgroundColor: argonTheme.COLORS.BLACK
  }
});

export default Register;
