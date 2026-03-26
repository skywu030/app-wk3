import { View, Text, FlatList, StyleSheet, Pressable, Image, ScrollView } from 'react-native';

const popularBooks = [
  { id: '1', title: 'Fashionopolis', author: 'Dana Thomas', image: require('../assets/img_book_fashinopolis.png') },
  { id: '2', title: 'Chanel', author: 'Patrick Mauriès', image: require('../assets/img_book_chanel.png') },
  { id: '3', title: 'Calligraphy', author: 'June', image: require('../assets/img_book_calligraphy.png') },
];

const newestBooks = [
  { id: '4', title: 'Yves Saint Laurent', author: 'Catwalk', image: require('../assets/img_book_ysl.png'), rating: 4 },
  { id: '5', title: 'The Book of Signs', author: 'Rudolf Koch', image: require('../assets/img_book_tbos.png'), rating: 3 },
  { id: '6', title: 'Stitched Up', author: 'Tansy E. Hoskins', image: require('../assets/img_book_stitchedup.png'), rating: 5 },
];

export default function HomeScreen() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= rating ? require('../assets/icon_star_filled.png') : require('../assets/icon_star_empty.png')}
          style={styles.starIcon}
        />
      );
    }
    return <View style={styles.starRow}>{stars}</View>;
  };

  const renderBookItem = ({ item }) => (
    <View style={styles.bookCard}>
      <Image source={item.image} style={styles.bookCover} resizeMode="cover" />
      {item.rating !== undefined && renderStars(item.rating)}
      <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.bookAuthor} numberOfLines={1}>{item.author}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentArea} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Popular Books</Text>
        <FlatList
          data={popularBooks}
          renderItem={renderBookItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.bookList}
        />

        <Text style={styles.sectionTitle}>Newest</Text>
        <FlatList
          data={newestBooks}
          renderItem={renderBookItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.bookList}
        />
        <View style={{ height: 20 }} /> 
      </ScrollView>

      <View style={styles.bottomTabBar}>
        <Pressable style={styles.tabItem}>
          <Image source={require('../assets/icon_home.png')} style={[styles.tabIcon, { tintColor: '#6200EE' }]} />
          <Text style={styles.tabTextActive}>Home</Text>
        </Pressable>
        <Pressable style={styles.tabItem}>
          <Image source={require('../assets/icon_bookmark.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Wishlist</Text>
        </Pressable>
        <Pressable style={styles.tabItem}>
          <Image source={require('../assets/icon_mybook.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>My books</Text>
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
  bottomTabBar: { height: 56, flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#E0E0E0', backgroundColor: '#FFFFFF', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 4 },
  tabItem: { alignItems: 'center', justifyContent: 'center' },
  tabIcon: { width: 24, height: 24, marginBottom: 2 },
  tabText: { fontSize: 12, color: '#888' },
  tabTextActive: { fontSize: 12, color: '#6200EE', fontWeight: 'bold' }
});