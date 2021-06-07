import React, {useEffect, useRef, useState} from 'react';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const App = () => {
  const [card, setCard] = useState('');
  const {createToken} = useStripe();

  const cardSubmit = () => {
    createToken(card)
      .then(res => {
        console.log('Response', res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          // backgroundColor: 'red',
          textColor: '#000000',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
        }}
        style={{
          width: '95%',
          height: 50,
          marginVertical: 30,
          marginHorizontal: 10,
        }}
        onCardChange={cardDetails => {
          setCard(cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: '5%',
          alignItems: 'center',
          width: '50%',
          alignSelf: 'center',
        }}
        onPress={cardSubmit}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
