import React, { useEffect, useState } from 'react';
import {
  FormControl,
  Input,
  NumberInput,
  Select,
  TextArea,
  Button,
  Column,
  Icon,
  IconType,
  Pressable,
  Row,
  ScrollView,
  Text,
  View,
} from '@inheartive/ui/atoms';
import { Controller, UseFormReturn } from 'react-hook-form';
import { AuctionFormValues } from './auction-create-form-values';
import { Link } from 'react-router-native';
import { Category, User } from '@inheartive/data';
import DatePicker from 'react-native-date-picker';
import { RoutingPath } from '../../routing';
import addMonths from 'date-fns/addMonths';
import addDays from 'date-fns/addDays';
import CategoriesPage from '../Categories/CategoriesPage';

interface Props {
  onSubmit: (data: AuctionFormValues) => void;
  categories: Category[];
  categoriesIsLoading: boolean;
  categoriesIsError: boolean;
  author: User | undefined;
  form: UseFormReturn<AuctionFormValues>;
}

const PRICE_RULES = {
  min: { value: 1, message: 'The price must be positive' },
  max: { value: 99999, message: 'Max price is 99999' },
  required: 'The price is required',
};

const initialDate = () => addDays(new Date(), 7);

export function AuctionCreateTemplate(props: Props) {
  const { categories, categoriesIsError, categoriesIsLoading, onSubmit, author, form } = props;
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = form;

  const minimumDate = initialDate();

  const [expiresAtDate, setExpiresAtDate] = useState<Date>(minimumDate);
  const [open, setOpen] = useState(false);

  const openDatepicker = () => setOpen(true);
  const closeDatepicker = () => setOpen(false);

  useEffect(() => {
    setValue('expiresAt', minimumDate);
  }, []);

  useEffect(() => {
    if (expiresAtDate) {
      setValue('expiresAt', expiresAtDate);
    }
  }, [expiresAtDate, setValue]);

  const isDisabled = !isValid;

  return (
    <ScrollView>
      <Column px={5} space={4} justifyContent='center'>
        {author && (
          <Text>
            Current author: {author.firstName} {author.lastName}
          </Text>
        )}

        <FormControl isRequired isInvalid={'title' in errors}>
          <FormControl.Label>Title</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input placeholder='My awesome auction' onChangeText={(val) => onChange(val)} value={value} />
            )}
            name='title'
            rules={{ required: 'Field is required', minLength: { value: 6, message: 'Minimum length is 6' } }}
          />
          <FormControl.ErrorMessage>{errors.title?.message}</FormControl.ErrorMessage>
        </FormControl>

        <FormControl>
          <FormControl.Label>Description</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextArea
                placeholder='Please add some description here :)'
                onChangeText={(val) => onChange(val)}
                defaultValue={value}
                autoCompleteType={undefined}
              />
            )}
            name='description'
          />
        </FormControl>

        {categoriesIsLoading && <Text>Categories loading...</Text>}

        {categoriesIsError && <Text>Error while loading categories!</Text>}

        {!categoriesIsError && !categoriesIsLoading && (
          <FormControl isRequired isInvalid={'category' in errors}>
            <FormControl.Label>Category</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  placeholder='Pick a category'
                  selectedValue={value}
                  paddingRight={5}
                  onValueChange={(itemValue: string) => {
                    onChange(itemValue);
                  }}
                  _selectedItem={{
                    bg: 'teal.500',
                  }}
                  dropdownOpenIcon={<Icon name={IconType.chevronUp} size={4} />}
                  dropdownCloseIcon={<Icon name={IconType.chevronDown} size={4} />}
                >
                  {categories.map((c) => (
                    <Select.Item key={c.id} label={c.name} value={c.id} />
                  ))}
                </Select>
              )}
              name='category'
              rules={{ required: 'Field is required' }}
            />
            <FormControl.ErrorMessage>{errors.category?.message}</FormControl.ErrorMessage>
          </FormControl>
        )}

        <FormControl isInvalid={'location' in errors}>
          <FormControl.Label>Location</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input placeholder='Wroclaw, Poland, online' onChangeText={(val) => onChange(val)} value={value} />
            )}
            name='location'
            rules={{ minLength: { value: 3, message: 'Minimum length is 3' } }}
          />
          <FormControl.ErrorMessage>{errors.location?.message}</FormControl.ErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={'price' in errors}>
          <FormControl.Label>Price</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <NumberInput placeholder='10' value={value} onChange={onChange} />
            )}
            name='price'
            rules={PRICE_RULES}
            defaultValue={10}
          />
          <FormControl.ErrorMessage>{errors.price?.message}</FormControl.ErrorMessage>
        </FormControl>

        {minimumDate && expiresAtDate && (
          <FormControl isRequired>
            <FormControl.Label>Expires at</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { value } }) => (
                <View>
                  {value && (
                    <Row space={4}>
                      <Input onPressIn={openDatepicker} flexGrow={1} value={value.toDateString()} />
                      <Pressable onPress={openDatepicker}>
                        <Icon name={IconType.calendarOutline} size={28} />
                      </Pressable>

                      <View>
                        <DatePicker
                          minimumDate={minimumDate}
                          maximumDate={addMonths(new Date(), 1)}
                          mode='date'
                          modal
                          open={open}
                          date={expiresAtDate}
                          onConfirm={(date) => {
                            closeDatepicker();
                            setExpiresAtDate(date);
                          }}
                          onCancel={closeDatepicker}
                        />
                      </View>
                    </Row>
                  )}
                </View>
              )}
              name='expiresAt'
              rules={{ required: true }}
              //todo error message
            />
          </FormControl>
        )}
        <Button
          disabled={isDisabled}
          isDisabled={isDisabled}
          onPress={(e) => {
            handleSubmit(onSubmit)(e);
          }}
        >
          Add auction
        </Button>

        <View mt={3} mb={5}>
          <Link to={RoutingPath.categories} underlayColor='transparent'>
            <Text>Categories management</Text>
          </Link>
          <CategoriesPage />
        </View>
      </Column>
    </ScrollView>
  );
}

export default AuctionCreateTemplate;
