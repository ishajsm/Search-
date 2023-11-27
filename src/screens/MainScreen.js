import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feeded from '../components/Feeded';
import AddPosted from '../components/AddPosted';

const MainScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const storedPosts = await AsyncStorage.getItem('posts');
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
        console.log('DATA STORED ASYNC');
      }
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  const handleSavePost = newPost => {
    setPosts([...posts, newPost]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <AddPosted onSavePost={handleSavePost} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>All Posts</Text>
        <Feeded posts={posts} />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
