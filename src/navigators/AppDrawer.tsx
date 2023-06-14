import { DrawerProvider } from '../contexts/drawer';
import AppTab from './AppTab';

export default function AppDrawer() {
  return (
    <DrawerProvider>
      <AppTab />
    </DrawerProvider>
  );
}
