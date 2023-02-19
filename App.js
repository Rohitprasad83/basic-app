import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
const PlaceholderImage = require('./assets/images/img1.jpg')
import ImageViewer from './components/ImageViewer'
import * as ImagePicker from 'expo-image-picker'
import Button from './components/Button'
export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageViewer
        placeholderImageSource={PlaceholderImage}
        selectedImage={selectedImage}
      />
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          pickImage={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
