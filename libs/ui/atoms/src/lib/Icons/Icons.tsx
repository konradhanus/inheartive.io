import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {
  MoonIcon,
  SunIcon,
  CheckIcon,
  CircleIcon,
  ArrowBackIcon,
  AddIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  SmallCloseIcon,
  HamburgerIcon,
  InfoIcon,
  InfoOutlineIcon,
  MinusIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  SearchIcon,
  WarningIcon,
  WarningTwoIcon,
  ThreeDotsIcon,
  WarningOutlineIcon,
  ShareIcon,
  PlayIcon,
  FavouriteIcon,
  DeleteIcon,
} from 'native-base';

enum IconsList {
  add = 'add',
  arrowBack = 'arrow-back',
  arrowForward = 'arrow-forward',
  arrowUp = 'arrow-up',
  arrowDown = 'arrow-down',
  check = 'check',
  checkCircle = 'check-circle',
  chevronDown = 'chevron-down',
  chevronLeft = 'chevron-left',
  chevronRight = 'chevron-right',
  chevronUp = 'chevron-up',
  circle = 'circle',
  close = 'close',
  smallClose = 'small-close',
  menu = 'menu',
  info = 'info',
  infoOutline = 'info-outline',
  minus = 'minus',
  moon = 'moon',
  question = 'question',
  questionOutline = 'question-outline',
  search = 'search',
  sun = 'sun',
  warning1 = 'warning-1',
  warning2 = 'warning-2',
  warningOutline = 'warning-outline',
  threeDots = 'three-dots',
  share = 'share',
  play = 'play',
  favourite = 'favourite',
  delete = 'delete',
  star = 'star',
  starOutline = 'star-outline',
  favorite = 'favorite',
  favoriteOutline = 'favorite-outline',
  home = 'home',
  homeOutline = 'home-outline',
  plusCircle = 'plus-circle',
}

interface IIconProps {
  iconName: IconsList;
}

interface IIconObject {
  icon: JSX.Element;
  iconName: string;
}

type IconType = IIconObject | undefined;
const size = 17;
const Icons = ({ iconName }: IIconProps) => {
  const icons: IIconObject[] = [
    {
      icon: <AddIcon />,
      iconName: 'add',
    },
    {
      icon: <ArrowBackIcon />,
      iconName: 'arrow-back',
    },
    {
      icon: <ArrowForwardIcon />,
      iconName: 'arrow-forward',
    },
    {
      icon: <ArrowUpIcon />,
      iconName: 'arrow-up',
    },
    {
      icon: <ArrowDownIcon />,
      iconName: 'arrow-down',
    },
    {
      icon: <CheckIcon />,
      iconName: 'check',
    },
    {
      icon: <CheckCircleIcon />,
      iconName: 'check-circle',
    },
    {
      icon: <ChevronDownIcon />,
      iconName: 'chevron-down',
    },
    {
      icon: <ChevronLeftIcon />,
      iconName: 'chevron-left',
    },
    {
      icon: <ChevronRightIcon />,
      iconName: 'chevron-right',
    },
    {
      icon: <ChevronUpIcon />,
      iconName: 'chevron-up',
    },
    {
      icon: <CircleIcon />,
      iconName: 'circle',
    },
    {
      icon: <CloseIcon />,
      iconName: 'close',
    },
    {
      icon: <SmallCloseIcon />,
      iconName: 'small-close',
    },
    {
      icon: <HamburgerIcon />,
      iconName: 'menu',
    },
    {
      icon: <InfoIcon />,
      iconName: 'info',
    },
    {
      icon: <InfoOutlineIcon />,
      iconName: 'info-outline',
    },
    {
      icon: <MinusIcon />,
      iconName: 'minus',
    },
    {
      icon: <MoonIcon />,
      iconName: 'moon',
    },
    {
      icon: <QuestionIcon />,
      iconName: 'question',
    },
    {
      icon: <QuestionOutlineIcon />,
      iconName: 'question-outline',
    },
    {
      icon: <SearchIcon />,
      iconName: 'search',
    },
    {
      icon: <SunIcon />,
      iconName: 'sun',
    },
    {
      icon: <WarningIcon />,
      iconName: 'warning-1',
    },
    {
      icon: <WarningTwoIcon />,
      iconName: 'warning-2',
    },
    {
      icon: <WarningOutlineIcon />,
      iconName: 'warning-outline',
    },
    {
      icon: <ThreeDotsIcon />,
      iconName: 'three-dots',
    },
    {
      icon: <ShareIcon />,
      iconName: 'share',
    },
    {
      icon: <PlayIcon />,
      iconName: 'play',
    },
    {
      icon: <FavouriteIcon />,
      iconName: 'favourite',
    },
    {
      icon: <DeleteIcon />,
      iconName: 'delete',
    },
    {
      icon: <MaterialIcon name='star' size={size} />,
      iconName: 'star',
    },
    {
      icon: <MaterialIcon name='star-outline' size={size} />,
      iconName: 'star-outline',
    },
    {
      icon: <Ionicons name='home' size={size} />,
      iconName: 'home',
    },
    {
      icon: <Ionicons name='home-outline' size={size} />,
      iconName: 'home-outline',
    },
    {
      icon: <Ionicons name='ios-heart-outline' size={size} />,
      iconName: 'favorite-outline',
    },
    {
      icon: <Ionicons name='ios-heart-sharp' size={size} />,
      iconName: 'favorite',
    },
    {
      icon: <Feather name='plus-circle' size={size} />,
      iconName: 'plus-circle',
    },
  ];

  const icon: IconType = icons.find((item) => item.iconName === iconName);
  return icon ? icon.icon : <></>;
};

export { Icons, IconsList };
