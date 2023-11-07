// Libraries
import { Pressable, Text, View } from 'react-native';
import { Link, Redirect } from 'expo-router';

/*
 * Page
 */

export default function Page() {
  const isLoggedIn = false;

  return !isLoggedIn ? (
    <Redirect href='/users/signup' />
  ) : (
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
