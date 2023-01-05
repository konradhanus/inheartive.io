import { Auction } from '../auctions';
import { SortDirection } from './sort-direction';
import { SortKey } from './sort-key';

export function sortAuctions(auctions: Auction[], sortBy: SortKey, sortDir: SortDirection): Auction[] {
  const sortedAuctions = [...auctions];

  if (sortBy === SortKey.Price) {
    sortDir === SortDirection.ASC
      ? sortedAuctions.sort((a1, a2) => a1[sortBy] - a2[sortBy])
      : sortedAuctions.sort((a1, a2) => a2[sortBy] - a1[sortBy]);

    return sortedAuctions;
  }

  return sortByStringValue(sortedAuctions, sortBy, sortDir);
}

function sortByStringValue(auctions: Auction[], sortBy: SortKey, sortDir: SortDirection) {
  return sortDir === SortDirection.ASC
    ? auctions.sort(function (auction1, auction2) {
        return `${auction1[sortBy]}`.toLocaleLowerCase().localeCompare(`${auction2[sortBy]}`.toLocaleLowerCase());
      })
    : auctions.sort(function (auction1, auction2) {
        return `${auction2[sortBy]}`.toLocaleLowerCase().localeCompare(`${auction1[sortBy]}`.toLocaleLowerCase());
      });
}
