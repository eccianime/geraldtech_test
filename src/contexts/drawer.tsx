import { VStack } from 'native-base';
import { ReactNode, createContext, useContext } from 'react';
import { Dimensions } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type DrawerContextProps = {
  progress: number;
  toggleDrawer: VoidFunction;
};

const DrawerContext = createContext({} as DrawerContextProps);
const AnimatedVStack = Animated.createAnimatedComponent(VStack);

const DrawerProvider = ({
  children,
  customDrawer,
}: {
  children: ReactNode;
  customDrawer: ReactNode;
}) => {
  const progress = useSharedValue(0);

  const toggleDrawer = () => {
    progress.value = withTiming(progress.value === 1 ? 0 : 1, {
      duration: 200,
      easing: Easing.linear,
    });
  };

  const drawerStyles = useAnimatedStyle(() => ({
    marginTop: interpolate(progress.value, [0, 1], [0, 35]),
  }));

  const screenWidth = Dimensions.get('screen').width * 0.7;

  const contentStyles = useAnimatedStyle(() => ({
    marginLeft: interpolate(progress.value, [0, 1], [0, screenWidth]),
    marginTop: interpolate(progress.value, [0, 1], [0, 50]),
    borderRadius: interpolate(progress.value, [0, 1], [0, 30]),
    paddingTop: interpolate(progress.value, [0, 1], [30, 0]),
    transform: [
      {
        rotateZ: `${-progress.value * 10}deg`,
      },
    ],
  }));

  return (
    <DrawerContext.Provider
      value={{
        progress: progress.value,
        toggleDrawer,
      }}
    >
      <AnimatedVStack
        borderTopLeftRadius={30}
        bg='primary.500'
        position={'absolute'}
        w='full'
        h='full'
        style={drawerStyles}
      >
        {customDrawer}
      </AnimatedVStack>
      <AnimatedVStack
        bg='white'
        overflow={'hidden'}
        position={'absolute'}
        w='full'
        h='full'
        style={contentStyles}
      >
        {children}
      </AnimatedVStack>
    </DrawerContext.Provider>
  );
};

function useDrawerContext(): DrawerContextProps {
  return useContext(DrawerContext);
}

export { DrawerProvider, useDrawerContext };
