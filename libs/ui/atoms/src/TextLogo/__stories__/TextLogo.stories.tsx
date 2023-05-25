import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TextLogo, textLogoColor } from '../TextLogo';
import { NativeBaseProvider, VStack } from 'native-base';
import { theme } from '@inheartive-theme';
import { Row } from '@inheartive-atoms';

storiesOf('TextLogo', module)
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
    .add('Basic', () => <TextLogo />)
    .add('Inverted', () => (
        <Row bg='secondary.600'>
            <TextLogo color={textLogoColor.inverted} />
        </Row>
    ));
