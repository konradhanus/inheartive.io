import { render } from '@inheartive/ui/testing';
import { FooterMenu, IconNameType } from '../FooterMenu';

const testID = 'FooterMenuId';
const quantity = 1000;

describe('FooterMenu', () => {
  it('should render successfully footer menu', () => {
    const { getByText, getByTestId } = render(
      <FooterMenu testID={testID} activeIcon={'search'} onChange={() => console.log('FooterMenu - test')} />
    );

    expect(getByTestId(testID)).toBeTruthy();
    expect(getByText(String(quantity))).toBeTruthy();
  });
});
