import CustomDrawer from '../components/CustomDrawer';
import { DrawerProvider } from '../contexts/drawer';
import AppTab from './AppTab';

export default function AppDrawer() {
  return (
    <DrawerProvider customDrawer={<CustomDrawer />}>
      <AppTab />
    </DrawerProvider>
  );
}
