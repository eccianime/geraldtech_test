import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from '../screens/App/Contact';
import HomeStack from './HomeStack';

const { Navigator, Screen } = createBottomTabNavigator();

const renderIcon = (name: string, focused: boolean) => {
  let iconName: keyof typeof Ionicons.glyphMap;
  switch (name) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Contact':
      iconName = focused ? 'person' : 'person-outline';
      break;
    default:
      iconName = 'help-circle-outline';
      break;
  }
  return <Ionicons name={iconName} size={20} color='black' />;
};

export default function AppTab() {
  return (
    <Navigator
      screenOptions={({ route: { name } }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => renderIcon(name, focused),
      })}
      sceneContainerStyle={{
        backgroundColor: '#FFF',
      }}
    >
      <Screen name='Home' component={HomeStack} />
      <Screen name='Contact' component={Contact} />
    </Navigator>
  );
}
