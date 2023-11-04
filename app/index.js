import { Pressable, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href='/about' asChild>
        <Pressable>
          <Text>About</Text>
        </Pressable>
      </Link>

      <Link href='/foo'>Foo</Link>
    </View>
  );
}
