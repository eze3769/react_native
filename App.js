import { StyleSheet, View } from 'react-native';
import HomePage from './pages/home';

export default function App() {
  return (
      <HomePage />
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
