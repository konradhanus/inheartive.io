export enum IconNameType {
  homepage = 'homepage',
  search = 'search',
  heart = 'heart',
  plus = 'plus',
  star = 'star',
}

export interface FooterMenuProps {
  testID?: string;
  activeIcon: IconNameType;
}
