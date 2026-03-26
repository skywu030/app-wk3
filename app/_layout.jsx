import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Popular Books',
          headerShadowVisible: false, // 這裡的 false 絕對安全
        }} 
      />
    </Stack>
  );
}