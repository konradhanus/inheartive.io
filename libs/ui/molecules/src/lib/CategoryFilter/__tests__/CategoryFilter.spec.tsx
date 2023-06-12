import { render } from '@inheartive/ui/testing';

import { CategoryFilter } from '../CategoryFilter';
import { categoriesMock } from '@inheartive/data';
import { mapCategoriesToSelect } from '../utils/mapCategoriesToSelect';

describe('CategoryFilter', () => {
  it('should render successfully', () => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { container } = render(<CategoryFilter items={mapCategoriesToSelect(categoriesMock)} onChange={() => {}} />);

    expect(container).toBeTruthy();
  });
});
