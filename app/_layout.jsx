import { Stack } from 'expo-router';
import { Image, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* 首頁 */}
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Popular Books',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => router.push('/menu')} style={{ marginLeft: 20 }}>
              <Image source={require('../assets/icon_menu.png')} style={{ width: 24, height: 24 }} resizeMode="contain" />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable style={{ marginRight: 20 }}>
              <Image source={require('../assets/icon_search.png')} style={{ width: 24, height: 24 }} resizeMode="contain" />
            </Pressable>
          )
        }} 
      />
      
      <Stack.Screen 
        name="menu" 
        options={{ 
          presentation: 'modal', 
          headerShown: false 
        }} 
      />

      {/* 書本詳細頁 */}
      <Stack.Screen 
        name="book/[id]" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}