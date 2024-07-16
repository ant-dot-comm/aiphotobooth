import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';

import {NavigationProp} from '@react-navigation/native';

const CustomizeEventScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  //const [logo, setLogo] = useState(null);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [promptTitle, setPromptTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [exclusionPrompts, setExclusionPrompts] = useState('');
  const [imagesToRender, setImagesToRender] = useState('');

  const handleImagePicker = () => {
    // launchImageLibrary({ mediaType: 'photo' }, (response) => {
    //   if (response.assets && response.assets.length > 0) {
    //     setLogo(response.assets[0].uri);
    //   }
    // });
  };

  const handleSave = () => {
    // Save the event details
    navigation.navigate('PhotoTaking');
  };

  return (
    <View style={styles.container}>
      <Button title="Upload Logo" onPress={handleImagePicker} />
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={eventName}
        onChangeText={setEventName}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Date"
        value={eventDate}
        onChangeText={setEventDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Prompt Title"
        value={promptTitle}
        onChangeText={setPromptTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Prompt"
        value={prompt}
        onChangeText={setPrompt}
      />
      <TextInput
        style={styles.input}
        placeholder="Exclusion Prompts"
        value={exclusionPrompts}
        onChangeText={setExclusionPrompts}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Images to Render"
        value={imagesToRender}
        onChangeText={setImagesToRender}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CustomizeEventScreen;
