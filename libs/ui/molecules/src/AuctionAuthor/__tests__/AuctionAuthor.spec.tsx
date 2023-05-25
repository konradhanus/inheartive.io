import { render } from '@testing-library/react-native';

import { AuctionAuthor } from '../AuctionAuthor';
import { NativeBaseProvider } from 'native-base';
import { usersMock } from '@inheartive-data';

describe('AuctionAuthor', () => {
    it('should render successfully', () => {
        const { container } = render(
            <NativeBaseProvider>
                <AuctionAuthor author={usersMock[0]} />
            </NativeBaseProvider>
        );
        expect(container).toBeTruthy();
    });
});
