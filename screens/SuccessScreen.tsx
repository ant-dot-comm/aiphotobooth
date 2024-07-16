import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

// ...

const SuccessScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.message}>Thank you! Hope you enjoy your photos.</Text>
      <Button title="Done" onPress={() => navigation.navigate('PhotoTaking')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default SuccessScreen;
