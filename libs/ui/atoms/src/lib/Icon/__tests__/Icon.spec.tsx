import { render } from '@inheartive/ui/testing';
import { Icon, IconType } from '../Icon';

describe('Icon', () => {
  it('should throw error if wrong enum value passed', () => {
    expect(() => render(<Icon name={IconType.add3} />)).toThrowError();
  });

  it('should throw error if random string passed', () => {
    expect(() => render(<Icon name='funny-icon-name-hahaha' />)).toThrowError();
  });
});
