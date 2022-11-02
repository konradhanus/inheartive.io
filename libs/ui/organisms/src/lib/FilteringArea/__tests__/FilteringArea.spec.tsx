import { categoriesMock, SortDirection, SortKey } from '@inheartive/data';
import { render } from '@inheartive/ui/testing';

import { FilteringArea } from '../FilteringArea';

describe('FilteringArea', () => {
  it('should render successfully', () => {
    const { container } = render(
      <FilteringArea
        categories={categoriesMock}
        selectedCategoryID={categoriesMock[0].id}
        onCategoryChange={() => 0}
        sortBy={SortKey.ExpirationDate}
        onSortByChange={() => 0}
        sortDir={SortDirection.ASC}
        onSortDirChange={() => 0}
      />
    );

    expect(container).toBeTruthy();
  });
});
