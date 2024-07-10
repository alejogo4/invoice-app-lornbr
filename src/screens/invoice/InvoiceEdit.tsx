import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const InvoiceEdit = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Text>Hello From Invoice Edit</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default InvoiceEdit;
