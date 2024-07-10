import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '@store/index';
import SvgUri from 'react-native-svg-uri';

function HomeScreenS() {
  const cart = useAppSelector(state => state.shoppingcart);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen {cart.totalProductos}</Text>
      <SvgUri
        width="200"
        height="200"
        source={require('./src/assets/icon-calendar.svg')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
