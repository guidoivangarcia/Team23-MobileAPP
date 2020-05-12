import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Button, TextInput, Alert, StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme, Checkbox } from 'galio-framework';
import data from '../constants/articulosLista';
import { argonTheme } from '../constants';


// const data = [{arts}]

class Card2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
 

  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];
 
  
    return (
      
      <Block row={horizontal} card flex style={cardContainer}>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('')}>
          <Block flex space="between" style={styles.cardDescription}>
            
            <Text size={18} style={styles.cardTitle}>{item.title}</Text>

          </Block>

        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

Card.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: -5,
    fontSize:40
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  botones: {
    fontSize:40,
    fontWeight: 'bold',
  },
  boton2: {
    fontWeight: 'bold',
    fontSize:40,
    marginLeft:10,
    backgroundColor: 'blue'

  },
  cardBoton: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: -15,
    fontSize:45
  },
  cantidad: {
    flex: 1,
    fontWeight: 'bold',
    flexDirection: 'row',
    paddingLeft:50,
    paddingRight:45,
    paddingTop:12
  },
  cantidadTexto: {
    paddingLeft:10
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,

  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(Card2);