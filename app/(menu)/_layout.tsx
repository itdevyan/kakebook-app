import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/components/CustomDrawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#1e56a0",
            width: 200,
          },
          drawerActiveBackgroundColor: "#163172",
          drawerActiveTintColor: "#f7fafc",
          drawerInactiveTintColor: "#f7fafc",
          drawerStatusBarAnimation: "fade",
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="cuenta"
          options={{
            drawerLabel: "Cuentas",
            title: "Cuentas",
          }}
        />
        <Drawer.Screen
          name="invitados"
          options={{
            drawerLabel: "Invitados",
            title: "Invitados",
          }}
        />
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            drawerLabel: "Ciclo en curso",
            title: "Ciclo en curso",
          }}
        />
        <Drawer.Screen
          name="categorias"
          options={{
            drawerLabel: "Categorías",
            title: "Categorías",
          }}
        />
        <Drawer.Screen
          name="guardados"
          options={{
            drawerLabel: "Guardados",
            title: "Guardados",
          }}
        />
        <Drawer.Screen
          name="ahorros"
          options={{
            drawerLabel: "Ahorros",
            title: "Ahorros",
          }}
        />
        <Drawer.Screen
          name="mesesAnteriores"
          options={{
            drawerLabel: "Meses anteriores",
            title: "Meses Anteriores",
          }}
        />
        <Drawer.Screen
          name="configuraciones"
          options={{
            drawerLabel: "Configuraciones",
            title: "Configuraciones",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
