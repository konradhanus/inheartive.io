import { Auction } from '../auctions';
import { SortDirection } from './sort-direction';
import { SortKey } from './sort-key';

const compareString = (firstString: string | Date, secondString: string | Date) =>
  `${firstString}`.toLocaleLowerCase().localeCompare(`${secondString}`.toLocaleLowerCase());

const compareNumber = (a: number, b: number) => a - b;

const withStrategy =
  <Strategy extends SortKey, Auction>(
    sortDir: boolean,
    sortBy: Strategy,
    sortStrategy: (a: Auction[Strategy], b: Auction[Strategy]) => number
  ) =>
  (auction1: Auction, auction2: Auction) => {
    const [firstString, secondString] = sortDir ? [auction1, auction2] : [auction2, auction1];

    return sortStrategy(firstString[sortBy], secondString[sortBy]);
  };

export function sortAuctions(auctions: IAuction[], sortBy: SortKey, sortDir: SortDirection): IAuction[] {
  const sortedAuctions = [...auctions];
  const isAsc = sortDir === SortDirection.ASC;

  return sortBy === SortKey.Heartcoins
    ? sortedAuctions.sort(withStrategy(isAsc, sortBy, compareNumber))
    : sortedAuctions.sort(withStrategy(isAsc, sortBy, compareString));
}
