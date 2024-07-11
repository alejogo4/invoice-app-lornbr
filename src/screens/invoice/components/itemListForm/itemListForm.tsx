import TrasIcon from '@src/assets/icons/icon-delete.svg';
import IconButton from '@src/components/button/button';
import Paragraph from '@src/components/paragraph/paragraph';
import TextInput from '@src/components/textInput/textInput';
import {styled} from 'nativewind';
import React, {useEffect} from 'react';
import {Controller, useFieldArray, useFormContext} from 'react-hook-form';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AddIcon from '@src/assets/icons/icon-plus.svg';
const StyledView = styled(View);

const ItemListForm: React.FC = () => {
  const {control, watch, setValue} = useFormContext();
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'items',
  });

  const items = watch('items');

  useEffect(() => {
    fields.forEach((item, index) => {
      const quantity = items[index]?.quantity || 0;
      const price = items[index]?.price || 0;
      const total = quantity * price;
      setValue(`items[${index}].total`, total);
    });
  }, [items, fields, setValue]);

  return (
    <View style={{marginTop: 20}}>
      <Paragraph size="large" addClass="text-light-100 mt-8 mb-4" bold>
        Items List
      </Paragraph>
      {fields.map((item, index) => {
        console.log(item);
        return (
          <View key={item.id} style={styles.itemContainer}>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  placeholder="Item Name"
                />
              )}
              name={`items[${index}].name`}
              defaultValue=""
            />
            
            <StyledView className="flex flex-row">
              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value.toString()}
                    placeholder="Qty."
                    keyboardType="numeric"
                    style={styles.inputSpace}
                  />
                )}
                name={`items[${index}].quantity`}
              />
              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value.toString()}
                    placeholder="Price"
                    keyboardType="numeric"
                    style={styles.inputSpace}
                  />
                )}
                name={`items[${index}].price`}
              />
              <Controller
                control={control}
                render={({field: {value}}) => (
                  <StyledView className="flex">
                    <Paragraph size="small" addClass="opacity-30">
                      Total:
                    </Paragraph>
                    <Paragraph
                      bold
                      size="small"
                      addClass="opacity-30 text-center mt-4">
                      {value}
                    </Paragraph>
                  </StyledView>
                )}
                name={`items[${index}].total`}
              />
              <TouchableOpacity
                onPress={() => remove(index)}
                style={{marginLeft: 50, marginTop: 38}}>
                <TrasIcon width={13} height={16} />
              </TouchableOpacity>
            </StyledView>
          </View>
        );
      })}
      <IconButton
        icon={<AddIcon />}
        title="Add Item"
        onPress={() => append({name: '', quantity: 0, price: 0, total: 0})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  inputSpace: {
    marginRight: 8,
  },
});

export default ItemListForm;
