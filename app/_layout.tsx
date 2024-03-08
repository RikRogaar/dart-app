import { Slot } from 'expo-router';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
        <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#333',
    color: '#fff'
  }
});