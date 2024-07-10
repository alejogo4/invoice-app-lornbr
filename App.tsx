import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/components/header/header';
import InvoiceCreate from '@src/screens/invoice/InvoiceCreate';
import InvoiceDetail from '@src/screens/invoice/InvoiceDetail';
import InvoiceEdit from '@src/screens/invoice/InvoiceEdit';
import InvoiceList from '@src/screens/invoice/InvoiceList';
import {useAppSelector} from '@store/index';
import * as React from 'react';
import {Text, View} from 'react-native';

function HomeScreenS() {
  const cart = useAppSelector(state => state.shoppingcart);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen {cart.totalProductos}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => (
            <Header
              {...props}
              profileUri={require('./src/assets/image-avatar.jpg')}
            />
          ),
        }}>
        <Stack.Screen name="Invoices" component={InvoiceList} />
        <Stack.Screen name="InvoiceDetail" component={InvoiceDetail} />
        <Stack.Screen name="InvoiceCreate" component={InvoiceCreate} />
        <Stack.Screen name="InvoiceEdit" component={InvoiceEdit} />
        <Stack.Screen name="Home" component={HomeScreenS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
