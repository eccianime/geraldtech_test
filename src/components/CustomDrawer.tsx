import { Button, IButtonProps, Text, VStack } from 'native-base';
import { useDrawerContext } from '../contexts/drawer';

export type SimpleButtonProps = IButtonProps & {
  text: string;
};

const SimpleButton = ({ text, ...props }: SimpleButtonProps) => (
  <Button
    bg='transparent'
    mb={6}
    justifyContent={'flex-start'}
    _text={{
      fontSize: 'xl',
    }}
    px={5}
    _pressed={{
      bg: 'transparent',
    }}
    {...props}
  >
    {text}
  </Button>
);

export default function CustomDrawer() {
  const { toggleDrawer } = useDrawerContext();
  return (
    <VStack flexGrow={1} pt={'20'} w='1/2' px={5}>
      <Text
        textAlign={'center'}
        color='white'
        fontWeight={'extrabold'}
        fontSize={'4xl'}
        mb={'10'}
      >
        Beka
      </Text>
      <SimpleButton
        onPress={toggleDrawer}
        text={'Start'}
        borderRadius={'xl'}
        _text={{
          fontSize: 'xl',
          color: 'primary.400',
        }}
        bg='primary.300'
      />
      <SimpleButton text={'Your Cart'} onPress={toggleDrawer} />
      <SimpleButton text={'Favorites'} onPress={toggleDrawer} />
      <SimpleButton text={'Your Orders'} mb={8} onPress={toggleDrawer} />
      <VStack borderTopWidth={1} borderTopColor={'#413D54'} w='full' mb={8} />
      <SimpleButton text={'Sign Out'} onPress={toggleDrawer} />
    </VStack>
  );
}
