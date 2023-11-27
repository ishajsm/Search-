import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList,Image,TouchableOpacity } from 'react-native';
import AppImages from '../constants/AppImages';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation=useNavigation();

  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch posts from the API
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to filter posts based on search term
  const handleSearch = text => {
    setSearchTerm(text);
    const filtered = posts.filter(post => {
      const title = post.title.toLowerCase();
      const body = post.body.toLowerCase();
      return title.includes(text.toLowerCase()) || body.includes(text.toLowerCase());
    });
    setFilteredPosts(filtered);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        onChangeText={handleSearch}
        value={searchTerm}
        placeholder="Search posts..."
      />
      <TouchableOpacity onPress={() => navigation.navigate("MainScreen", { screen: "MainScreen" }) }>
      <View style={{backgroundColor:'pink',flexDirection:'row',alignSelf:'flex-end'}}>
        <Image style=
        {{width:20,height:20}} 
        source={AppImages.rightarrow}>

        </Image>
        <Text>GO TO SAVE POST</Text>
      </View>
      </TouchableOpacity>
      <FlatList
        data={filteredPosts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ fontSize: 14 }}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Feed;
