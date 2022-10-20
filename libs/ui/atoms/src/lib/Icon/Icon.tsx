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

enum IconType {
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
  name: IconType;
}

const size = 17;

function Icon(props: IIconProps) {
  switch (props.name) {
    case 'add':
      return <AddIcon />;

    case 'arrow-back':
      return <ArrowBackIcon />;

    case 'arrow-forward':
      return <ArrowForwardIcon />;

    case 'arrow-up':
      return <ArrowUpIcon />;

    case 'arrow-down':
      return <ArrowDownIcon />;

    case 'check':
      return <CheckIcon />;

    case 'check-circle':
      return <CheckCircleIcon />;

    case 'chevron-down':
      return <ChevronDownIcon />;

    case 'chevron-left':
      return <ChevronLeftIcon />;

    case 'chevron-right':
      return <ChevronRightIcon />;

    case 'chevron-up':
      return <ChevronUpIcon />;

    case 'circle':
      return <CircleIcon />;

    case 'close':
      return <CloseIcon />;

    case 'small-close':
      return <SmallCloseIcon />;

    case 'menu':
      return <HamburgerIcon />;

    case 'info':
      return <InfoIcon />;

    case 'info-outline':
      return <InfoOutlineIcon />;

    case 'minus':
      return <MinusIcon />;

    case 'moon':
      return <MoonIcon />;

    case 'question':
      return <QuestionIcon />;

    case 'question-outline':
      return <QuestionOutlineIcon />;

    case 'search':
      return <SearchIcon />;

    case 'sun':
      return <SunIcon />;

    case 'warning-1':
      return <WarningIcon />;

    case 'warning-2':
      return <WarningTwoIcon />;

    case 'warning-outline':
      return <WarningOutlineIcon />;

    case 'three-dots':
      return <ThreeDotsIcon />;

    case 'share':
      return <ShareIcon />;

    case 'play':
      return <PlayIcon />;

    case 'favourite':
      return <FavouriteIcon />;

    case 'delete':
      return <DeleteIcon />;

    case 'star':
      return <MaterialIcon name='star' size={size} />;

    case 'star-outline':
      return <MaterialIcon name='star-outline' size={size} />;

    case 'home':
      return <Ionicons name='home' size={size} />;

    case 'home-outline':
      return <Ionicons name='home-outline' size={size} />;

    case 'favorite-outline':
      return <Ionicons name='ios-heart-outline' size={size} />;

    case 'favorite':
      return <Ionicons name='ios-heart-sharp' size={size} />;

    case 'plus-circle':
      return <Feather name='plus-circle' size={size} />;

    default:
      // eslint-disable-next-line no-throw-literal
      throw `Wrong icon name passed! Icon name: ${props.name}`;
  }
}

export { Icon, IconType };
