import React from "react";
import {
  Card,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Button } from "../components";
import articles from '../constants/articulosLista';
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class TasksGoals extends React.Component {

  renderArticles = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex style={{   
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Card item={articles[0]} horizontal  /> 
          <Card item={articles[1]} horizontal  /> 
          <Card item={articles[2]} horizontal  />
          <Card item={articles[3]} horizontal  /> 
          <Card item={articles[4]} horizontal  /> 

            
        </Block>
        
      </ScrollView>
    )
  }

  renderTasksGoals = () => {
    return (
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex >
          {/* <Card item={articles[0]} horizontal  /> */}
          <Block flex row >
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} >
            </Card>
            <Card item={articles[2]} />

          </Block>
          
          
        </Block>
        
      </ScrollView>
    )
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
                
                <Block style={styles.info}>
                  
                  <Block row space="between">
                    <Block middle>
                      
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={25} color="#32325D">
                      Tasks & Goals
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 5 }}>
                      This are your Tasks and Goals
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                  {/* {this.renderTasksGoals()} */}
                  {/* {this.renderArticles()} */}
                  </Block>
                  <Block
                    row
                    style={{ paddingVertical: 14, alignItems: "baseline" }}
                  >
                  </Block>
                  <Block
                    row
                    style={{ paddingBottom: 20, justifyContent: "flex-end" }}
                  >
                  </Block>
                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    
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
    marginTop: 35,
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
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -100
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 5
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

export default TasksGoals;
