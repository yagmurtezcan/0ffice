import React, {useState} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({navigation}) {
  const logOut = () => {
    AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{name: 'StartScreen'}],
    });
  };

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={() => logOut()}>
        Logout
      </Button>
    </Background>
  );
}
