/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { PixelRatio, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Box, Button, Image, View } from '../../libs/ui/atoms';
import { LoginFormControl } from '../../libs/ui/molecules';
import { logo } from '../../assets/index';
import { useNavigate } from 'react-router-native';
import { RoutingPath } from '../../routing';
import VersionText from '../../assets/styles';
import packages from '../../../package.json'

export function SignInTemplate() {
    const navigate = useNavigate();
    const onPress = () => navigate(RoutingPath.register);
    return (
        <View style={styles.rootContainer}>
            <View style={styles.helperView}/>
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.scrollContentContainer}
                scrollEnabled={false}
            >
                <Image source={logo} alt='Logo' />

                <Box w='100%' mt={10}>
                    <LoginFormControl />
                    <Button mt={3} variant='outline' onPress={onPress}>
                        Register
                    </Button>
                </Box>
                <VersionText>Version: {packages.version}</VersionText>
            </KeyboardAwareScrollView>
            <View style={styles.helperView}/>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    scrollContentContainer: {
        paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(16),
        paddingTop: PixelRatio.getPixelSizeForLayoutSize(10),
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        maxWidth: PixelRatio.getPixelSizeForLayoutSize(1024),
    },
    helperView: {
        flex: 1,
    }
});

export default SignInTemplate;
