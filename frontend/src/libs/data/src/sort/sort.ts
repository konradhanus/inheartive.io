import { Auction } from '../auctions';
import { SortDirection } from './sort-direction';
import { SortKey } from './sort-key';

const compareString = (
  firstString: string | Date,
  secondString: string | Date,
) =>
  `${firstString}`
    .toLocaleLowerCase()
    .localeCompare(`${secondString}`.toLocaleLowerCase());

const compareNumber = (a: number, b: number) => a - b;

const withStrategy =
  <Strategy extends SortKey, Auct extends Auction>(
    sortDir: boolean,
    sortBy: Strategy,
    sortStrategy: (a: Auct[Strategy], b: Auct[Strategy]) => number,
  ) =>
  (auction1: Auct, auction2: Auct) => {
    const [firstString, secondString] = sortDir
      ? [auction1, auction2]
      : [auction2, auction1];

    return sortStrategy(firstString[sortBy], secondString[sortBy]);
  };

export function sortAuctions(
  auctions: Auction[],
  sortBy: SortKey,
  sortDir: SortDirection,
): Auction[] {
  const sortedAuctions = [...auctions];
  const isAsc = sortDir === SortDirection.ASC;

  return sortBy === SortKey.Price
    ? sortedAuctions.sort(withStrategy(isAsc, sortBy, compareNumber))
    : sortedAuctions.sort(withStrategy(isAsc, sortBy, compareString));
}
