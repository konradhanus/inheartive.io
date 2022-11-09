import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '@inheartive/ui/theme';

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
import { InterfaceIconProps } from 'native-base/src/components/primitives/Icon/types';

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

interface IIconProps extends InterfaceIconProps {
  name: IconType;
}

function Icon(props: IIconProps) {
  const iconProperties = {
    size: props.size || 17,
    color: props.color || colors.primary[600],
    testID: props.testID,
  };

  switch (props.name) {
    case 'add':
      return <AddIcon {...iconProperties} />;

    case 'arrow-back':
      return <ArrowBackIcon {...iconProperties} />;

    case 'arrow-forward':
      return <ArrowForwardIcon {...iconProperties} />;

    case 'arrow-up':
      return <ArrowUpIcon {...iconProperties} />;

    case 'arrow-down':
      return <ArrowDownIcon {...iconProperties} />;

    case 'check':
      return <CheckIcon {...iconProperties} />;

    case 'check-circle':
      return <CheckCircleIcon {...iconProperties} />;

    case 'chevron-down':
      return <ChevronDownIcon {...iconProperties} />;

    case 'chevron-left':
      return <ChevronLeftIcon {...iconProperties} />;

    case 'chevron-right':
      return <ChevronRightIcon {...iconProperties} />;

    case 'chevron-up':
      return <ChevronUpIcon {...iconProperties} />;

    case 'circle':
      return <CircleIcon {...iconProperties} />;

    case 'close':
      return <CloseIcon {...iconProperties} />;

    case 'small-close':
      return <SmallCloseIcon {...iconProperties} />;

    case 'menu':
      return <HamburgerIcon {...iconProperties} />;

    case 'info':
      return <InfoIcon {...iconProperties} />;

    case 'info-outline':
      return <InfoOutlineIcon {...iconProperties} />;

    case 'minus':
      return <MinusIcon {...iconProperties} />;

    case 'moon':
      return <MoonIcon {...iconProperties} />;

    case 'question':
      return <QuestionIcon {...iconProperties} />;

    case 'question-outline':
      return <QuestionOutlineIcon {...iconProperties} />;

    case 'search':
      return <SearchIcon {...iconProperties} />;

    case 'sun':
      return <SunIcon {...iconProperties} />;

    case 'warning-1':
      return <WarningIcon {...iconProperties} />;

    case 'warning-2':
      return <WarningTwoIcon {...iconProperties} />;

    case 'warning-outline':
      return <WarningOutlineIcon {...iconProperties} />;

    case 'three-dots':
      return <ThreeDotsIcon {...iconProperties} />;

    case 'share':
      return <ShareIcon {...iconProperties} />;

    case 'play':
      return <PlayIcon {...iconProperties} />;

    case 'favourite':
      return <FavouriteIcon {...iconProperties} />;

    case 'delete':
      return <DeleteIcon {...iconProperties} />;

    case 'star':
      return <MaterialIcon name='star' {...iconProperties} />;

    case 'star-outline':
      return <MaterialIcon name='star-outline' {...iconProperties} />;

    case 'home':
      return <Ionicons name='home' {...iconProperties} />;

    case 'home-outline':
      return <Ionicons name='home-outline' {...iconProperties} />;

    case 'favorite-outline':
      return <Ionicons name='ios-heart-outline' {...iconProperties} />;

    case 'favorite':
      return <Ionicons name='ios-heart-sharp' {...iconProperties} />;

    case 'plus-circle':
      return <Feather name='plus-circle' {...iconProperties} />;

    default:
      // eslint-disable-next-line no-throw-literal
      throw `Wrong icon name passed! Icon name: ${props.name}`;
  }
}

export { Icon, IconType };
