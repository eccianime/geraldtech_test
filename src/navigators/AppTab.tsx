import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contact from '../screens/App/Contact';
import HomeStack from './HomeStack';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppTab() {
  return (
    <Navigator>
      <Screen name='Home' component={HomeStack} />
      <Screen name='Contact' component={Contact} />
    </Navigator>
  );
}
