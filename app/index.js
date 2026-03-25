import { View, Text } from 'react-native';

// 這個 export default 就是 Expo 正在尋找的「畫面」！
export default function IndexScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>太棒了！紅字消失了！</Text>
    </View>
  );
}