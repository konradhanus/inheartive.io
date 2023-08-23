import { categoriesMock, SortDirection, SortKey } from '../../../../../data';
import { render } from '../../../../testing';

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
      />,
    );

    expect(container).toBeTruthy();
  });
});
