/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const meatImage = require('./bananas-01.jpg');

import VegaScrollList from 'react-native-vega-scroll-list';

import {data} from './data';
import NavigationBar from 'react-native-navbar';

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Hello, world',
};

const App: () => React$Node = () => {
  let {width} = Dimensions.get('window');
  return (
    <>
      {/* <NavigationBar title={titleConfig} rightButton={rightButtonConfig} /> */}
      <StatusBar hidden />
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#D3D3D3',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowRadius: 3,
          shadowOpacity: 0.5,
        }}>
        <Text
          style={{
            fontSize: 32,
            marginLeft: 16,
            marginTop: 50,
            fontWeight: '200',
          }}>
          Groceries
        </Text>
      </View>
      <VegaScrollList
        style={{marginTop: 8}}
        marginVertical={12}
        data={data}
        keyExtractor={item => item.index}
        renderItem={data => {
          //console.log(data.item);
          return (
            <View
              elevation={5}
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 3,
                shadowOpacity: 0.5,
                height: 70,
                width: width - 30,
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 6,
              }}>
              {/* <Text>{data.name}</Text> */}
              <Card item={data.item} />
            </View>
            // <Card item={data.item} />
          );
        }}
      />
      {/* <SafeAreaView /> */}
    </>
  );
};

const Card = ({item}) => {
  //console.log('item', item);
  let {width} = Dimensions.get('window');
  let categoryColor = '#00ff00';
  if (item.category === 'Fruit') {
    categoryColor = '#ffa500';
  } else if (item.category === 'Meat') {
    categoryColor = '#ff0000';
  }
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image
        source={item.image}
        style={{
          width: 40,
          height: 40,
          alignSelf: 'center',
          marginLeft: 10,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          height: 50,
          width: '90%',
          marginHorizontal: 10,
          marginVertical: 8,
          // marginLe,
        }}>
        <Text
          style={{
            // flex: 1,
            fontSize: 22,
            fontWeight: '200',
            // fontFamily: 'sans-serif',
            marginBottom: 4,
            color: '#808080',
          }}>
          {item.name}
        </Text>
        <Text style={{alignItems: 'flex-end', color: categoryColor}}>
          {item.category}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          height: 50,
          width: '90%',
          marginHorizontal: 20,
          marginVertical: 10,
          alignItems: 'flex-end',
          // marginLe,
        }}>
        <Text
          style={{
            // flex: 1,
            marginBottom: 4,
            fontSize: 18,
            fontWeight: '100',
            // fontFamily: 'roboto',
          }}>
          {item.price}
        </Text>
        <Text style={{alignItems: 'flex-end', color: '#808080', fontSize: 12}}>
          {item.quantity}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
