import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { popularBooks, newestBooks } from '../data';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= Math.floor(rating) ? require('../assets/icon_star_filled.png') : require('../assets/icon_star_empty.png')}
          style={styles.starIcon}
        />
      );
    }
    return <View style={styles.starRow}>{stars}</View>;
  };

  const renderBookItem = ({ item }) => (
    <Pressable style={styles.bookCard} onPress={() => router.push(`/book/${item.id}`)}>
      <Image source={item.image} style={styles.bookCover} resizeMode="cover" />
      {item.rating !== undefined && renderStars(item.rating)}
      <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.bookAuthor} numberOfLines={1}>{item.author}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentArea} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Popular Books</Text>
        <FlatList data={popularBooks} renderItem={renderBookItem} keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false} style={styles.bookList} />

        <Text style={styles.sectionTitle}>Newest</Text>
        <FlatList data={newestBooks} renderItem={renderBookItem} keyExtractor={(item) => item.id} horizontal={true} showsHorizontalScrollIndicator={false} style={styles.bookList} />
        <View style={{ height: 40 }} /> 
      </ScrollView>

      <View style={styles.bottomTabBar}>
        <Pressable style={styles.tabItem} onPress={() => setActiveTab('Home')}>
          <Image source={require('../assets/icon_home.png')} style={[styles.tabIcon, { tintColor: activeTab === 'Home' ? '#6200EE' : '#888' }]} />
          <Text style={activeTab === 'Home' ? styles.tabTextActive : styles.tabText}>Home</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => setActiveTab('Wishlist')}>
          <Image source={activeTab === 'Wishlist' ? require('../assets/icon_bookmark_actived.png') : require('../assets/icon_bookmark.png')} style={styles.tabIcon} />
          <Text style={activeTab === 'Wishlist' ? styles.tabTextActive : styles.tabText}>Wishlist</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => setActiveTab('My books')}>
          <Image source={require('../assets/icon_mybook.png')} style={[styles.tabIcon, { tintColor: activeTab === 'My books' ? '#6200EE' : '#888' }]} />
          <Text style={activeTab === 'My books' ? styles.tabTextActive : styles.tabText}>My books</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  contentArea: { flex: 1, paddingLeft: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, marginTop: 10 },
  bookList: { flexGrow: 0, marginBottom: 20 },
  bookCard: { width: 140, marginRight: 15 },
  bookCover: { width: 140, height: 200, borderRadius: 8, marginBottom: 8 },
  bookTitle: { fontSize: 16, fontWeight: 'bold' },
  bookAuthor: { fontSize: 12, color: '#888' },
  starRow: { flexDirection: 'row', marginBottom: 4 },
  starIcon: { width: 12, height: 12, marginRight: 2 },
  bottomTabBar: { height: 60, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#E0E0E0', backgroundColor: '#FFFFFF', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 },
  tabItem: { alignItems: 'center', justifyContent: 'center' },
  tabIcon: { width: 24, height: 24, marginBottom: 4 },
  tabText: { fontSize: 12, color: '#888' },
  tabTextActive: { fontSize: 12, color: '#6200EE', fontWeight: 'bold' }
});