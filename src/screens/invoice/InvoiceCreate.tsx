import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const InvoiceCreate = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Text>Hello From Invoice Create</Text>
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

export default InvoiceCreate;
