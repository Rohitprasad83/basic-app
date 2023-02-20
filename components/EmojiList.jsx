import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from 'react'
import EmojiSelector, { Categories } from 'react-native-emoji-selector'
export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/emojis/emoji1.jpeg'),
    require('../assets/emojis/emoji2.png'),
    require('../assets/emojis/emoji3.png'),
    require('../assets/emojis/emoji4.jpeg'),
    require('../assets/emojis/emoji5.jpeg'),
  ])

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item)
              onCloseModal()
            }}>
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
})
