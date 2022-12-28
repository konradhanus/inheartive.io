import { render } from '@inheartive/ui/testing';
import { FooterMenu } from '../FooterMenu';
import { IconNameType } from '../FooterMenuTypes';

describe('FooterMenu', () => {
  it('should render successfully footer menu', () => {
    const activeIcon = IconNameType.star;
    const { getByTestId } = render(<FooterMenu activeIcon={activeIcon} />);

    expect(getByTestId('footer-menu')).toBeTruthy();
  });
});
