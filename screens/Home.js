import React from 'react';
import { TouchableOpacity, TouchableHighlight, Image, FlatList, StyleSheet, Dimensions, ScrollView, View, Text } from 'react-native';
import { Button, Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articulosLista';
const { width } = Dimensions.get('screen');
const extractKey = ({ categories }) => categories;

class Home extends React.Component {
  componentDidMount() {
    this.getProductos();
  }

  getProductos() {
    fetch("http://www.json-generator.com/api/json/get/ceLNpEXvIi?indent=2")
      .then(results => results.json())
      .then(results => this.setState({ rows: results }));
  }
  
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

  render() {
    const { navigation } = this.props;
    //const { rows } = this.state;
    return (
      <Block flex center style={styles.home}>

        {this.renderArticles()}
        {/* <Block flex center style={styles.boton}>
          <Button  onPress={() => navigation.navigate("ListaDeCompras")} round size="small" color="success">Button</Button>
        </Block> */}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  boton: {
    marginTop:'-22%'   
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  categoriaP: {
    alignContent: 'space-between'
  },

  categoria: {
    
  },
  view: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  image: {

  },
  rowss: {

  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  }
});

export default Home;
