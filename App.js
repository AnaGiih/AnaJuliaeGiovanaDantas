import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from './src/Login';

const App = () => {
  return (
   
    <SafeAreaView style={styles.container}>
<Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;