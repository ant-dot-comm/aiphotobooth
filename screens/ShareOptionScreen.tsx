import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const ShareOptionsScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailShare = async () => {
    // await sendEmail(email, photo);
    navigation.navigate('Success');
  };

  const handleTextShare = async () => {
    navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share Your Photo</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Send Email" onPress={handleEmailShare} />
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Send Text" onPress={handleTextShare} />
      <Button title="Retake Photo" onPress={() => navigation.goBack()} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default ShareOptionsScreen;
