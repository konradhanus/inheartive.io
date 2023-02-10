import React, { useEffect, useState } from 'react';
import {
  FormControl,
  Input,
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
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  Controller,
  Control,
  UseFormSetValue,
} from 'react-hook-form';
import { AuctionFormValues } from './auction-create-form-values';
import { Link } from 'react-router-native';
import { Category, User } from '@inheartive/data';
import DatePicker from 'react-native-date-picker';
import { RoutingPath } from '../../routing';
import CategoriesPage from '../Categories/CategoriesPage';

interface Props {
  control: Control<AuctionFormValues>;
  register: UseFormRegister<AuctionFormValues>;
  handleSubmit: UseFormHandleSubmit<AuctionFormValues>;
  errors: FieldErrors<AuctionFormValues>;
  setValue: UseFormSetValue<AuctionFormValues>;
  onSubmit: (data: AuctionFormValues) => void;
  categories: Category[];
  categoriesIsLoading: boolean;
  categoriesIsError: boolean;
  author: User | undefined;
}

const PRICE_RULES = {
  min: { value: 1, message: 'The price must be positive' },
  max: { value: 999, message: 'Max price is 999' },
  required: 'The price is required',
};

export function AuctionCreateTemplate(props: Props) {
  const {
    categories,
    categoriesIsError,
    categoriesIsLoading,
    control,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    author,
  } = props;

  const [minimumDate, setMinimumDate] = useState<Date>();
  const [expiresAtDate, setExpiresAtDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    setMinimumDate(date);
    setExpiresAtDate(date);
    setValue('expiresAt', date);
  }, []);

  useEffect(() => {
    if (expiresAtDate) {
      setValue('expiresAt', expiresAtDate);
    }
  }, [expiresAtDate, setValue]);
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

        <FormControl isRequired isInvalid={'price' in errors}>
          <FormControl.Label>Price</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='10'
                onChangeText={(value) => onChange(parseInt(value))}
                value={`${value}`}
                keyboardType='numeric'
              />
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
                      <Input onPressIn={() => setOpen(true)} flexGrow={1} value={value.toDateString()} />
                      <Pressable onPress={() => setOpen(true)}>
                        <Icon name={IconType.calendarOutline} size={28} />
                      </Pressable>

                      <View>
                        <DatePicker
                          minimumDate={minimumDate}
                          mode='date'
                          modal
                          open={open}
                          date={expiresAtDate}
                          onConfirm={(date) => {
                            setOpen(false);
                            setExpiresAtDate(date);
                          }}
                          onCancel={() => {
                            setOpen(false);
                          }}
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
          onPress={(e) => {
            handleSubmit(onSubmit)(e);
          }}
        >
          Add auction
        </Button>

        <View mt={3} mb={5}>
          <Link to={RoutingPath.categories}>
            <Text>Categories management</Text>
          </Link>
          <CategoriesPage />
        </View>
      </Column>
    </ScrollView>
  );
}

export default AuctionCreateTemplate;
