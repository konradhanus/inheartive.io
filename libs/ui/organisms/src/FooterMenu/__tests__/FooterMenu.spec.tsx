import { render } from '@inheartive-testing';
import { FooterMenu } from '../FooterMenu';
import { IconNameType } from '../FooterMenuTypes';

describe('FooterMenu', () => {
    const testID = 'FooterMenuId';

    it('should render successfully footer menu', () => {
        const activeIcon = IconNameType.star;
        const { getByTestId } = render(
            <FooterMenu testID={testID} activeIcon={activeIcon} />
        );

        expect(getByTestId(testID)).toBeTruthy();
    });
});
