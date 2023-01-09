// TODO move to env
const apiUrlPrefix = 'http://localhost:3333/api';

export const apiRoutes = {
  auctions: `${apiUrlPrefix}/auctions`,
  auction: `${apiUrlPrefix}/auctions/:id`,
  categories: `${apiUrlPrefix}/categories`,
  users: `${apiUrlPrefix}/users`,
} as const;

export const routeWithId = (route: string, id: string) => {
  return route.replace(':id', id);
};
