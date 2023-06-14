import { createStackNavigator } from '@react-navigation/stack';

import { Screen1, Screen2 } from '../screens/App/Home';

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}
    >
      <Screen name='Screen 1' component={Screen1} />
      <Screen name='Screen 2' component={Screen2} />
    </Navigator>
  );
}
