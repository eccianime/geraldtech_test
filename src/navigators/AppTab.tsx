import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HStack, Icon, IconButton, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDrawerContext } from '../contexts/drawer';
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
  const { toggleDrawer } = useDrawerContext();
  return (
    <SafeAreaView style={{ flexGrow: 1, backgroundColor: '#FFF' }}>
      <HStack px={'4'} alignItems={'center'}>
        <IconButton
          onPress={toggleDrawer}
          _pressed={{
            bg: 'transparent',
          }}
          icon={
            <Icon
              size={'3xl'}
              color='#EFEFC6'
              as={<Ionicons name='menu-outline' />}
            />
          }
        />
        <Text ml={4} fontSize={'2xl'} color='#9B9B8B'>
          START
        </Text>
      </HStack>
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
    </SafeAreaView>
  );
}
