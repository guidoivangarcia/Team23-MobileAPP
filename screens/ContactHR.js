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
import { Asset } from 'expo-asset';
import { HitTestResultTypes } from 'expo/build/AR';

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
                    source={require("../assets/HR.jpeg")}
                    style={styles.avatar}
                  />
                </Block>
                
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                    HR Manager
                    </Text>
                    
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    
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
                    <Text bold size={12} color="#525F7F" style={{paddingBottom:5}}>Arrange a meeting</Text>

                    <Checkbox style={{paddingBottom: 5}} color="success" initialValue={false} label="Yes" />
                    <Checkbox color="success" initialValue={false} label="No" />

                  </Block>
                  
                  <Block
                    flex
                    style={{ paddingVertical: 5 }}
                  >
  
                  <Block flex style={{paddingBottom: 5 }}>
                    <Text bold size={12} color="#525F7F">
                        Meeting Date:
                    </Text>
                      <Input
                        placeholder="28/05/2020"
                        style={{ borderColor: "green" }}
                        help=" "
                        bottomHelp
                        placeholderTextColor="#4F8EC9"
                      />
                    </Block>
                  <Block flex style={{paddingBottom: 5 }}>
                  <Text bold size={12} color="#525F7F">
                    Message:
                    </Text>
                    <Block style={styles.textAreaContainer}>
                      <TextInput style = {{height :120}}
                      placeholderTextColor="#4F8EC9"
                      placeholder="Type something"
                      numberOfLines={10}
                      multiline={true}
                      
                       />
                       </Block>
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
    marginTop: -80,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
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
  textAreaContainer: {
    borderTopLeftRadius: 6,
    borderTopRightRadius : 6,
    borderBottomRightRadius : 6,
    borderBottomLeftRadius : 6,
    marginTop : 10,
    borderColor:  "green",
    borderWidth: 1,
    padding: 10,
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
