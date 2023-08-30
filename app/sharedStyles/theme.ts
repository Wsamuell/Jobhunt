export enum Colors {
  primary = '#312651',
  secondary = '#444262',
  tertiary = '#FF7754',
  gray = '#83829A',
  gray2 = '#C1C0C8',
  white = '#F3F4F8',
  lightWhite = '#FAFAFC',
}

export enum Font {
  regular = 'DMRegular',
  medium = 'DMMedium',
  bold = 'DMBold',
}

export enum Sizes {
  xSmall = 10,
  small = 12,
  medium = 16,
  large = 20,
  xLarge = 24,
  xxLarge = 32,
}

type ShadowType = {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

type Shadows = {
  small: ShadowType;
  medium: ShadowType;
};

export const Shadows: Shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};