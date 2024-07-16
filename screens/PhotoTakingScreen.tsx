import React, {useRef} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {NavigationProp} from '@react-navigation/native';

const PhotoTakingScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const cameraRef = useRef<RNCamera | null>(null);

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      // const options = {quality: 0.5, base64: true};
      // const data = await cameraRef.current.takePictureAsync(options);
      // navigation.navigate('ShareOptions', {photo: data.uri});
      navigation.navigate('ShareOptions');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Your Logo</Text>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={styles.controls}>
        <Button title="Flip Camera" onPress={() => {}} />
        <Button title="Take Picture" onPress={handleTakePicture} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    top: 10,
    fontSize: 24,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    position: 'absolute',
    bottom: 0,
  },
});

export default PhotoTakingScreen;
