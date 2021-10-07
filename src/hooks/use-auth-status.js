import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const useAuthStatus = () => {
  const [status, setStatus] = useState();

  useEffect(() => {
    AsyncStorage.getItem('loginStatus').then(savedStatus => {
      setStatus(savedStatus ?? false);
    });
  }, []);

  return {
    status,
  };
};

export default useAuthStatus;
