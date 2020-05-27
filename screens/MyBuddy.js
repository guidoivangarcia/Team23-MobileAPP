import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  TextInput,
  Alert,
  View,
  Modal
} from "react-native";
import { Block, Text, theme, Input, Checkbox } from "galio-framework";
import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { Directions } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;




class MyBuddy extends React.Component {
  
  state = {
    textValue: 'EDIT',
    count: '0'
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
                 
                 
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D" style={{ marginTop: 5 }}>
                    Brad Pitt
                    </Text>
                  </Block>

                  <Block middle style={{height: 40,marginTop:5,paddingBottom:5}}>
                   <Button
                      round size="small"
                      style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                      onPress={() => navigation.navigate("Login")}
                    >
                      SEND MESSAGE
                    </Button>
                  </Block>
                

                </Block>
                
                  <Block style={styles.description}>
                    <Text flex row style={styles.texto}>Formal position title: Team Leader</Text>
                    <Text></Text>
                  </Block>
                

                <Block flex>
                  
                  <Block middle style={{ marginTop: 5, marginBottom: 16 }}>
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
                    <Text bold size={12} color="#525F7F">
                        Email:
                    </Text>
                      <Input
                        placeholder="example@team23.com"
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
    paddingHorizontal: 45,
    alignItems : 'center',
  },
  info2: {
    paddingHorizontal: 45,
    alignItems : 'flex-start',
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
    height: 45,
    marginTop: 5,
  },
  description: {
    height: 30,
    marginTop : 10,
    paddingHorizontal : 10,
    paddingBottom : 10,
    paddingRight: 30,
    alignItems : 'flex-start',

  },
  texto : {
    textAlign : 'left',
    paddingRight: 30,
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

export default MyBuddy;
