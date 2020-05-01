import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Button, TextInput, Alert, StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme, Checkbox } from 'galio-framework';
import data from '../constants/articulosLista';
import { argonTheme } from '../constants';


// const data = [{arts}]

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  sumerCant = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  restarCant = () => {
    this.setState({
      count: this.state.count-1
    })
  }
  taskDone()
{
  Alert.alert("Message","The task was marked as done", [
    {    
      text: "OK"
    }
  ]);
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
 

    // onSubtract = (data, index) => {
    //   //const arts = [...this.state.data];
    //   data[1].cantidad -= 1;
    //   this.setState({ data });
    //   // item.cantidad -= 1;
    //   // this.setState({ item });
    // };
  
    // onAdd = (data, index) => {
    //  // const data = [...this.state.data];
    //   data[1].cantidad += 1;
    //   this.setState({ data });
    //   // item.cantidad += 1;
    //   // this.setState({ item });
    // };
  
    return (
      
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('')}>
          <Block flex style={imgContainer}>
            <Image source={{uri: item.image}} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('')}>
          <Block flex space="between" style={styles.cardDescription}>
            
            <Text size={18} style={styles.cardTitle}>{item.title}</Text>

            {/* <Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text> */}
            <Block style={styles.cardBoton}>
              <Button style={styles.botones}
                title="Dissmis"
                onPress={this.restarCant}
              />
                          <Checkbox color="warning" label="" />
              {/* <Checkbox color="warning" onChange={() => alert('The task is done')} label="Task done" /> */}
              {/* <Text  size={14} style={styles.cantidad}>{item.cantidad}</Text>  */}
              <Button style={styles.boton2}
                title="Done" 
                onPress={this.taskDone}
              />
            </Block>
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

export default withNavigation(Card);