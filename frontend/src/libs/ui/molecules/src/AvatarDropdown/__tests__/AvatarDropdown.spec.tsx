import { render } from '../../../../testing';
import { AvatarDropdown } from '../AvatarDropdown';
import { NativeRouter } from 'react-router-native';
import { dropdownItemsMock } from '../../../../../data';

const testId = 'test1';

describe('AvatarDropdown', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(
      <NativeRouter>
        <AvatarDropdown dropdownList={dropdownItemsMock} testID={testId} />
      </NativeRouter>,
    );
    expect(getByTestId(testId)).toBeTruthy();
  });
});
