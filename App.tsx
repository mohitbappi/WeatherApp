import { Provider } from 'react-redux';
import { store } from './src/store';
import { HomeScreen } from './src/screens/HomeScreen';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <HomeScreen />
    </Provider>
  );
}
