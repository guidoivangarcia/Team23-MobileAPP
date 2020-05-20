import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TextInput,
  Alert
} from "react-native";
import { Block, Text, theme, Input, Checkbox } from "galio-framework";
import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;


class ContactHR extends React.Component {
  state = {
    textValue: 'EDIT',
    count: '0'
  }

  onPress = () => {
    this.setState({
      textValue: 'SAVE'
    })
    if(count == '1'){
    Alert.alert("Message","The information has been updated", [
        {    
          text: "OK"
        }
      ]);
    }else{ 
      this.setState({
        count: '1'
      })
    }
    
  }
  
  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.INFO }}
                      onPress={this.onPress}
                    >
                      {this.state.textValue}
                    </Button>
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                      onPress={() => navigation.navigate("Login")}
                    >
                      LOGOUT
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2
                      </Text>
                      <Text size={12}>Tasks Done</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >
                        5
                      </Text>
                      <Text size={12}>Total Tasks</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >
                        89
                      </Text>
                      <Text size={12}>Points</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                    Brad Pitt
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                      Augsburg, DE
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    
                  </Block>
                  
                  <Block
                    flex
                    style={{ paddingVertical: 5 }}
                  >
                  <Block flex style={{paddingBottom: 5 }}>
                    <Text bold size={12} color="#525F7F">
                        Birth Date:
                    </Text>
                      <Input
                        placeholder="02/04/1997"
                        style={{ borderColor: "green" }}
                        help=" "
                        bottomHelp
                        placeholderTextColor="#4F8EC9"
                      />
                    </Block>
                  <Block flex style={{paddingBottom: 5 }}>
                  <Text bold size={12} color="#525F7F">
                    Adress:
                    </Text>
                    <Input
                        placeholder="Deutschenbaurstraße 39"
                        style={{ borderColor: "green" }}
                        help=" "
                        bottomHelp
                        placeholderTextColor="#4F8EC9"
                      />
                  </Block>

                  <Block flex style={{paddingBottom: 5 }}>
                  <Text bold size={12} color="#525F7F">
                    Phone number:
                    </Text>
                    <Input
                        placeholder="+49 137 123456"
                        style={{ borderColor: "green" }}
                        help=" "
                        bottomHelp
                        placeholderTextColor="#4F8EC9"
                      />
                  </Block>

                  <Block flex style={{paddingBottom: 5 }}>

                  <Checkbox color="success" initialValue={true} label="Availability to travel" iconFamily="font-awesome" iconName="plane" />
                  </Block>
                    <Block flex style={{ paddingBottom: 10 }}>
                    <Checkbox color="success" initialValue={false} label="Smoke?" iconFamily="font-awesome" iconName="smoke" />
                  
                    </Block>
                  <Block flex style={{paddingBottom: 5 }}>
                  <Checkbox color="success" initialValue={false} label="Driver License?" iconFamily="font-awesome" iconName="smoke" />
                  </Block>
                  
                  </Block>
                  
                  
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default ContactHR;
