import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import {NavigationProp} from '@react-navigation/native';

// ...

const EventSelectionScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const events = [
    {
      id: '1',
      name: 'Event 1',
      date: '2024-01-01',
      promptTitle: 'promptTitle',
      prompt: 'Prompt 1',
      exclusionPrompt: 'Prompt 1',
      renderImages: '4',
    },
    {
      id: '2',
      name: 'Event 2',
      date: '2024-01-02',
      promptTitle: 'promptTitle',
      prompt: 'Prompt 1',
      exclusionPrompt: 'Prompt 1',
      renderImages: '4',
    },
    {
      id: '3',
      name: 'Event 3',
      date: '2024-01-03',
      promptTitle: 'promptTitle',
      prompt: 'Prompt 1',
      exclusionPrompt: 'Prompt 1',
      renderImages: '4',
    },
    // Add more events as needed
  ];

  const handleCreateEvent = () => {
    navigation.navigate('CustomizeEvent');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search events" />
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.eventCard}>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
            <Text>{item.promptTitle}</Text>
          </View>
        )}
      />
      <Button title="Create New Event" onPress={handleCreateEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  eventCard: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
});

export default EventSelectionScreen;
