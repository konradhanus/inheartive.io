import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Badge } from '../Badge';
import { NativeBaseProvider, VStack } from 'native-base';
import { theme } from '@inheartive-theme';

storiesOf('Badge', module)
    .addDecorator((story) => (
        <NativeBaseProvider theme={theme}>
            {
                <VStack
                    mt={4}
                    space={{
                        base: 4,
                        sm: 4,
                    }}
                    mx={{
                        base: 'auto',
                        md: 0,
                    }}
                >
                    {story()}
                </VStack>
            }
        </NativeBaseProvider>
    ))
    .add('Basic', () => <Badge>Basic</Badge>)
    .add('Color Scheme', () => (
        <>
            <Badge colorScheme='primary'>PRIMARY</Badge>
            <Badge colorScheme='secondary'>SECONDARY</Badge>

            <Badge colorScheme='success'>SUCCESS</Badge>
            <Badge colorScheme='info'>INFO</Badge>
            <Badge colorScheme='warning'>WARNING</Badge>
            <Badge colorScheme='danger'>DANGER</Badge>

            <Badge colorScheme='fuchsia'>FUCHSIA</Badge>
        </>
    ))
    .add('Variant', () => (
        <>
            <Badge variant='solid'>SOLID</Badge>
            <Badge variant='outline'>OUTLINE</Badge>
            <Badge variant='subtle'>SUBTLE</Badge>
        </>
    ))
    .add('Rounded', () => (
        <>
            <Badge borderRadius={4} colorScheme='primary'>
                Border radius 4
            </Badge>
            <Badge borderRadius={8} colorScheme='primary'>
                Border radius 8
            </Badge>
            <Badge borderRadius={12} colorScheme='primary'>
                Border radius 12
            </Badge>
            <Badge borderRadius={16} colorScheme='primary'>
                Border radius 16
            </Badge>
        </>
    ))
    .add('Background', () => (
        <>
            <Badge bg={'primary.50'}>Primary 50</Badge>
            <Badge bg={'primary.100'}>Primary 100</Badge>
            <Badge bg={'primary.200'}>Primary 200</Badge>
            <Badge bg={'primary.300'}>Primary 300</Badge>
            <Badge bg={'primary.400'}>Primary 400</Badge>
            <Badge bg={'primary.500'}>Primary 500</Badge>
            <Badge bg={'primary.600'}>Primary 600</Badge>
            <Badge bg={'primary.700'}>Primary 700</Badge>
            <Badge bg={'primary.800'}>Primary 800</Badge>
            <Badge bg={'primary.900'}>Primary 900</Badge>
        </>
    ))
    .add('Example', () => (
        <Badge bg={'primary.600'} variant='solid' borderRadius={12}>
            Ends in: 02:30:45
        </Badge>
    ));
