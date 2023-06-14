import { VStack } from 'native-base';
import { ReactNode, createContext, useContext } from 'react';
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

const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const progress = useSharedValue(0);
  const contentRotateZ = useSharedValue('0deg');

  const toggleDrawer = () => {
    progress.value = withTiming(progress.value === 1 ? 0 : 1, {
      duration: 200,
      easing: Easing.linear,
    });
    contentRotateZ.value = withTiming(
      progress.value === 1 ? '0deg' : '-20deg',
      {
        duration: 200,
        easing: Easing.linear,
      }
    );
  };

  const drawerStyles = useAnimatedStyle(() => ({
    marginTop: interpolate(progress.value, [0, 1], [0, 35]),
  }));

  const contentStyles = useAnimatedStyle(() => ({
    marginLeft: interpolate(progress.value, [0, 1], [0, 200]),
    marginTop: interpolate(progress.value, [0, 1], [0, 50]),
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
      />
      <AnimatedVStack
        borderTopRadius={30}
        overflow={'hidden'}
        position={'absolute'}
        w='full'
        h='full'
        style={[
          contentStyles,
          {
            transform: [
              {
                rotateZ: contentRotateZ.value,
              },
            ],
          },
        ]}
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
