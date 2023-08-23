import { render } from '../../../../testing';
import { AppFooter } from '../AppFooter';
import { FooterIcon } from '../footer-icon';

describe('AppFooter', () => {
  it('should render successfully footer menu', () => {
    const activeIcon = FooterIcon.addAuction;
    const { getByTestId } = render(<AppFooter activeIcon={activeIcon} />);

    expect(getByTestId('footer-menu')).toBeTruthy();
  });
});
