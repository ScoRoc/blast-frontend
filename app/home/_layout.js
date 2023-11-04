import { Text, View } from 'react-native';
import { Slot } from 'expo-router';

function Footer() {
  <View>
    <Text>Foter</Text>
  </View>;
}

function Header() {
  <View>
    <Text>Header</Text>
  </View>;
}

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
