import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      {/* 頂部關閉按鈕 */}
      <Pressable onPress={() => router.back()} style={styles.closeButton}>
        <Text style={styles.closeText}>✕</Text>
      </Pressable>

      <View style={styles.profileSection}>
        <Image source={require('../assets/img_avatar.png')} style={styles.avatar} />
        <Text style={styles.userName}>May</Text>
      </View>
      
      <View style={styles.divider} />
      
      <Pressable style={styles.menuItem} onPress={() => router.push('/')}>
        <Image source={require('../assets/icon_home.png')} style={styles.menuIcon} />
        <Text style={styles.menuText}>Home</Text>
      </Pressable>
      
      <Pressable style={styles.menuItem}>
        <Image source={require('../assets/icon_account.png')} style={styles.menuIcon} />
        <Text style={styles.menuText}>Account</Text>
      </Pressable>
      
      <Pressable style={styles.menuItem}>
        <Image source={require('../assets/icon_settings.png')} style={styles.menuIcon} />
        <Text style={styles.menuText}>Setting</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 40 },
  closeButton: { alignSelf: 'flex-end', padding: 10 },
  closeText: { fontSize: 24, color: '#333' },
  profileSection: { marginBottom: 20, marginTop: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 15 },
  userName: { fontSize: 24, fontWeight: 'bold' },
  divider: { borderBottomWidth: 1, borderBottomColor: '#EEE', borderStyle: 'dashed', marginBottom: 30 },
  menuItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  menuIcon: { width: 26, height: 26, marginRight: 20, tintColor: '#555' },
  menuText: { fontSize: 18, color: '#333' }
});