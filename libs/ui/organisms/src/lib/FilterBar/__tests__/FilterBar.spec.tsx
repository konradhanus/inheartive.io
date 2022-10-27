import { categoriesMock, SortDirection, SortKey } from '@inheartive/data';
import { render } from '@inheartive/ui/testing';

import { FilterBar } from '../FilterBar';

describe('FilterBar', () => {
  it('should render successfully', () => {
    const { container } = render(
      <FilterBar
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
