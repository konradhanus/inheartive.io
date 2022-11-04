import { render } from '@inheartive/ui/testing';
import { AvatarDropdown } from '../AvatarDropdown';
import { NativeRouter } from 'react-router-native';

const dropdownList = [
  {
    name: 'Basic',
    route: '/signin',
  },
  {
    name: 'Basic 1',
    route: '/signin',
  },
  {
    name: 'Basic 2',
    route: '/signin',
  },
  {
    name: 'Basic 3',
    route: '/signin',
  },
];

const testId = 'test1';

describe('AvatarDropdown', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(
      <NativeRouter>
        <AvatarDropdown dropdownList={dropdownList} testID={testId} />
      </NativeRouter>
    );
    expect(getByTestId(testId)).toBeTruthy();
  });
});
