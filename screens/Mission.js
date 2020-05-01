import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

export default class Mission extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <ImageBackground
            source={Images.Onboarding}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block>
              <Block>
                <Image source={Images.ArgonLogo}
                  style={{ marginBottom: theme.SIZES.BASE * 1.5 }}/>
              </Block>
              <Block >
                <Block>
                  <Text color="white" size={60}></Text>
                </Block>
                <Block>
                  <Text color="white" size={60}>Mission</Text>
                </Block>
                <Block row>
                  <Text color="white" size={60}></Text>
                  {/* <Block middle style={styles.pro}>
                    <Text size={16} color="white">PRO</Text>
                  </Block> */}
                </Block>
              </Block>
              <Text size={16} color='rgba(255,255,255,0.6)' style={{ marginTop: 35 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in dui rhoncus, pulvinar justo eget, aliquet eros. Cras gravida mattis nulla a porta.
              </Text>
              <Block row style={{ marginTop: theme.SIZES.BASE * 1.5, marginBottom: theme.SIZES.BASE * 4 }}>
                <Image
                  source={Images.iOSLogo}
                  style={{ height: 38, width: 82, marginRight: theme.SIZES.BASE * 1.5 }} />
                <Image
                  source={Images.androidLogo}
                  style={{ height: 38, width: 140 }} />
              </Block>
              <Button
                shadowless
                style={styles.button}
                color={argonTheme.COLORS.INFO}
                onPress={() => navigation.navigate('Vission')}>
                <Text bold color={theme.COLORS.WHITE}>NEXT</Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  pro: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
    marginTop: 15
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
});
