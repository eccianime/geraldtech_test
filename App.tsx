import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import theme from './src/config/theme';
import AppDrawer from './src/navigators/AppDrawer';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
