import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddPost = ({ onSavePost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSave = async () => {
    if (title && body) {
      const newPost = { id: Math.random().toString(), title, body };
      onSavePost(newPost);
      setTitle('');
      setBody('');

      try {
        
        // Save the new post to local storage
        const existingPosts = await AsyncStorage.getItem('posts');
        const parsedPosts = existingPosts ? JSON.parse(existingPosts) : [];
        const updatedPosts = [...parsedPosts, newPost];
        await AsyncStorage.setItem('posts', JSON.stringify(updatedPosts));
        console.log("DATA SAVED ASYNC")
      } catch (error) {
        console.error('Error saving post:', error);
      }
    } else {
      Alert.alert('Error', 'Please enter both title and body for the post.');
    }
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        onChangeText={text => setTitle(text)}
        value={title}
        placeholder="Enter title..."
      />
      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, marginTop: 10 }}
        onChangeText={text => setBody(text)}
        value={body}
        placeholder="Enter post body..."
        multiline
      />
      <Button title="Save Post" onPress={handleSave} />
    </View>
  );
};

export default AddPost;
