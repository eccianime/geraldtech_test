import { HStack, Icon, IconButton, Text, VStack } from 'native-base';
import { useDrawerContext } from '../../../contexts/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Screen1() {
  const { toggleDrawer } = useDrawerContext();
  return (
    <VStack flexGrow={1}>
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
        <Text ml={4} fontSize={'2xl'} color='#9B9B8B' letterSpacing={'2xl'}>
          START
        </Text>
      </HStack>
    </VStack>
  );
}
