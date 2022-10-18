import React from 'react';

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

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IIconProps {
  iconName:
    | 'add'
    | 'arrow-back'
    | 'arrow-forward'
    | 'arrow-up'
    | 'arrow-down'
    | 'check'
    | 'check-circle'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'circle'
    | 'close'
    | 'small-close'
    | 'menu'
    | 'info'
    | 'info-outline'
    | 'minus'
    | 'moon'
    | 'question'
    | 'question-outline'
    | 'search'
    | 'sun'
    | 'warning-1'
    | 'warning-2'
    | 'warning-outline'
    | 'three-dots'
    | 'share'
    | 'play'
    | 'favourite'
    | 'delete'
    | 'star'
    | 'star-outline'
    | 'home'
    | 'home-outline';
}

interface IIconObject {
  icon: JSX.Element;
  iconName: string;
}

type IconType = IIconObject | undefined;

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
      icon: <MaterialIcon name='star' size={22} />,
      iconName: 'star',
    },
    {
      icon: <MaterialIcon name='star-outline' size={22} />,
      iconName: 'star-outline',
    },
    {
      icon: <Ionicons name='home' size={22} />,
      iconName: 'home',
    },
    {
      icon: <Ionicons name='home-outline' size={22} />,
      iconName: 'home-outline',
    },
    {
      icon: <Ionicons name='ios-heart-outline' size={22} />,
      iconName: 'favorite-outline',
    },
    {
      icon: <Ionicons name='ios-heart-sharp' size={22} />,
      iconName: 'favorite',
    },
  ];

  const icon: IconType = icons.find((item) => item.iconName === iconName);

  return icon ? icon.icon : <></>;
};

export { Icons };
