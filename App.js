import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './components/latihan-2'

export default function App() {
  return (
    <View style={styles.container}>
     <LandingPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6b8b8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
