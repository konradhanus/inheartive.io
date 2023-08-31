import React from 'react';
import { render } from '../../../../testing';
import { Image } from '../Image';
import { placeholder } from '../../../../../../assets';

const uri = 'https://via.placeholder.com/400x250/7dbdb7/ffffff/.png?text=Basic+layout+of+the+Image';
describe('Image', () => {
  it('Should render successfully', () => {
    const { container } = render(<Image source={placeholder} alt='Basic layout of the Image' />);
    expect(container).toBeTruthy();
  });
  it('Should be created and rendered successfully Image component', () => {
    const { getByTestId } = render(<Image source={placeholder} alt='Basic layout of the Image' testID='test1' />);
    expect(getByTestId('test1')).toBeTruthy();
  });
  it('Should be created and rendered successfully Image component with uri', () => {
    const { getByTestId } = render(
      <Image
        source={{
          uri: { uri },
        }}
        alt='Basic layout of the Image'
        width={400}
        height={250}
        resizeMode='cover'
        testID='test2'
      />
    );
    expect(getByTestId('test2')).toBeTruthy();
  });
});
