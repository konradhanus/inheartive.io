import { render } from '@inheartive/ui/testing';

import { CategoryFilter } from '../CategoryFilter';
import { categoriesMock } from '@inheartive/data';
import { mapCategoriesToSelect } from '../utils/mapCategoriesToSelect';

describe('CategoryFilter', () => {
  it('should render successfully', () => {
    const { container } = render(<CategoryFilter items={mapCategoriesToSelect(categoriesMock)} />);

    expect(container).toBeTruthy();
  });
});
