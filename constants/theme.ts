// Define types for your constants
type ColorPalette = {
  primary: string;
  secondary: string;
  tertiary: string;
  gray: string;
  gray2: string;
  white: string;
  lightWhite: string;
};

type FontWeights = {
  regular: string;
  medium: string;
  bold: string;
};

type Sizes = {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
};

type Shadows = {
  small: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  medium: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
};

// Define the constants with their respective types
const COLORS: ColorPalette = {
  primary: '#312651',
  secondary: '#444262',
  tertiary: '#FF7754',
  gray: '#83829A',
  gray2: '#C1C0C8',
  white: '#F3F4F8',
  lightWhite: '#FAFAFC',
};

const FONT: FontWeights = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const SIZES: Sizes = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS: Shadows = {
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

export { COLORS, FONT, SIZES, SHADOWS };
