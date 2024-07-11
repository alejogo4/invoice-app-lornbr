import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '@src/components/header/header';
import InvoiceCreate from '@src/screens/invoice/InvoiceCreate';
import InvoiceDetail from '@src/screens/invoice/InvoiceDetail';
import InvoiceEdit from '@src/screens/invoice/InvoiceEdit';
import InvoiceList from '@src/screens/invoice/InvoiceList';
import RootStackParamList from '@src/types/InvoiceRoute';
import React from 'react';



const Stack = createNativeStackNavigator<RootStackParamList>();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
