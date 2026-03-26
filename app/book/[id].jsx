import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { allBooks } from '../../data';

export default function BookDetailScreen() {
  const { id } = useLocalSearchParams();
  const book = allBooks.find(b => b.id === id);
  const [isBookmarked, setIsBookmarked] = useState(false);
  if (!book) return <View style={styles.container}><Text>Book not found</Text></View>;

  const renderStars = (rating) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<Image key={i} source={require('../../assets/icon_star_filled.png')} style={styles.star} />);
      } else if (i === floorRating + 1 && rating % 1 >= 0.5) {
        stars.push(<Image key={i} source={require('../../assets/icon_star_filled.png')} style={styles.star} />);
      } else {
        stars.push(<Image key={i} source={require('../../assets/icon_star_empty.png')} style={styles.star} />);
      }
    }
    return <View style={styles.ratingRow}>{stars}<Text style={styles.ratingText}>{book.rating.toFixed(1)} / 5.0</Text></View>;
  };

  return (
    <View style={styles.container}>
      {/* 自訂頂部導覽列 */}
      <View style={styles.customHeader}>
        {/* 左上角：回到上一步 */}
        <Pressable onPress={() => router.back()} style={styles.headerButton}>
          <Image source={require('../../assets/icon_back.png')} style={styles.headerIcon} resizeMode="contain" />
        </Pressable>
        
        {/* 右上角：收藏按鈕 (點擊切換狀態與圖片) */}
        <Pressable onPress={() => setIsBookmarked(!isBookmarked)} style={styles.headerButton}>
          <Image 
            source={isBookmarked ? require('../../assets/icon_bookmark_actived.png') : require('../../assets/icon_nav_bookmark.png')} 
            style={styles.headerIcon} 
            resizeMode="contain"
          />
        </Pressable>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 放大的書本封面 */}
        <View style={styles.imageContainer}>
          <Image source={book.image} style={styles.largeCover} resizeMode="cover" />
        </View>

        {/* 書籍資訊 */}
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        
        {/* 評星與分數 */}
        {renderStars(book.rating)}

        {/* 描述與按鈕 */}
        <Text style={styles.description}>{book.desc}</Text>

        <Pressable style={styles.buyButton}>
          <Text style={styles.buyButtonText}>BUY NOW FOR ${book.price}</Text>
        </Pressable>
        <View style={{ height: 40 }}/>
      </ScrollView>

      {/* 底部導覽列 (與首頁一致) */}
      <View style={styles.bottomTabBar}>
        <Pressable style={styles.tabItem} onPress={() => router.push('/')}>
          <Image source={require('../../assets/icon_home.png')} style={[styles.tabIcon, { tintColor: '#6200EE' }]} />
          <Text style={styles.tabTextActive}>Home</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => router.push('/')}>
          <Image source={require('../../assets/icon_bookmark.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Wishlist</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => router.push('/')}>
          <Image source={require('../../assets/icon_mybook.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>My books</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingTop: 50 },
  customHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 10 },
  headerButton: { padding: 10 }, // 增加點擊區域
  headerIcon: { width: 24, height: 24 },
  content: { flex: 1, paddingHorizontal: 30 },
  imageContainer: { alignItems: 'center', marginTop: 10, marginBottom: 25 },
  largeCover: { width: 220, height: 320, borderRadius: 12 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  author: { fontSize: 14, color: '#888', textAlign: 'center', marginBottom: 15 },
  ratingRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  star: { width: 16, height: 16, marginRight: 4 },
  ratingText: { fontSize: 14, color: '#888', marginLeft: 8 },
  description: { fontSize: 14, color: '#555', textAlign: 'center', lineHeight: 22, marginBottom: 30 },
  buyButton: { backgroundColor: '#6200EE', paddingVertical: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  buyButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  bottomTabBar: { height: 60, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#E0E0E0', backgroundColor: '#FFFFFF', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 5 },
  tabItem: { alignItems: 'center', justifyContent: 'center' },
  tabIcon: { width: 24, height: 24, marginBottom: 4 },
  tabText: { fontSize: 12, color: '#888' },
  tabTextActive: { fontSize: 12, color: '#6200EE', fontWeight: 'bold' }
});