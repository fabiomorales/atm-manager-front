// FONT SIZE
export const fontSizes = {
  xxs: '10px' as const,
  xs: '12px' as const,
  sm: '14px' as const,
  md: '16px' as const,
  lg: '18px' as const,
  xl: '20px' as const,
  xxl: '24px' as const,
  xxm: '32px' as const,
  xxxl: '36px' as const,
  xxxh: '48px' as const,
};

// FONT WEIGHT
export const fontWeight = {
  regular: 400 as const,
  semibold: 500 as const,
  bold: 600 as const,
  black: 900 as const,
};

// LINE HEIGHTS
export const lineHeights = {
  xxxs: '11px' as const,
  xxs: '12px' as const,
  xs: '16px' as const,
  sm: '18px' as const,
  md: '20px' as const,
  lg: '22px' as const,
  lg2: '24px' as const,
  xl: '26px' as const,
  xxl: '30px' as const,
  xxxl: '44px' as const,
  xxxh: '48px' as const,
};

const StyleGuide = {
  typography: {
    headingsH1LargeBold: {
      fontWeight: fontWeight.black,
      fontSize: fontSizes.xxxh,
      lineHeight: lineHeights.xxxh,
    },
    headingsH1Large: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xxl,
      lineHeight: lineHeights.xxxl,
    },
    headingsH1Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.xxl,
      lineHeight: lineHeights.lg2,
    },
    headingsH1Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xxl,
      lineHeight: lineHeights.xxl,
    },
    headingsH2Medium: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.xl,
    },
    headingsH2Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.xl,
    },
    headingsH2MediumTitulos: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.xl,
    },
    headingsH2RegularTitulos: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xl,
      lineHeight: lineHeights.xl,
    },
    headingsH3Medium: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.lg,
    },
    headingsH3MediumModal: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.lg2,
    },
    headingsH3Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.lg,
      lineHeight: lineHeights.lg,
    },
    subtitleS1Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    subtitleS1Medium2: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.lg2,
    },
    buttonRegular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    subtitleS1Regular: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.lg2,
    },
    subtitleS1Bold: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.lg2,
    },
    subtitleS2Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.xs,
    },
    subtitleS2Medium2: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    subtitleS2Regular: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.xs,
    },
    subtitleS2Regular2: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.xs,
    },
    subtitleS3Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    subtitleS3Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    paragraphP1Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    paragraphP1Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.md,
    },
    paragraphP2Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
    paragraphP2Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.sm,
    },
    paragraphP3Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    paragraphP3Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    tag1Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    tag1Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    tag2Medium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.xxs,
      lineHeight: lineHeights.xxxs,
    },
    tag2Regular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xxs,
      lineHeight: lineHeights.xxxs,
    },
    captionMedium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.xxs,
      lineHeight: lineHeights.xxs,
    },
    captionRegular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xxs,
      lineHeight: lineHeights.xxs,
    },
    displayMedium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.xxxl,
      lineHeight: lineHeights.xxxl,
    },
    displayRegular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xxxl,
      lineHeight: lineHeights.xxxl,
    },
    textRegularPrimary: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.xs,
    },
    textRegular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.xs,
    },
    textMediumPrimary: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.xs,
    },
    textMedium: {
      fontWeight: fontWeight.semibold,
      fontSize: fontSizes.sm,
      lineHeight: lineHeights.xs,
    },
    textMediumRegular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.lg2,
    },
    textMediumBold: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.lg2,
    },
    textMediumModal: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.md,
      lineHeight: lineHeights.lg2,
    },
    textSmallMedium: {
      fontWeight: fontWeight.bold,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
    textSmallRegular: {
      fontWeight: fontWeight.regular,
      fontSize: fontSizes.xs,
      lineHeight: lineHeights.xs,
    },
  },
};

export const tags: { [key: string]: keyof JSX.IntrinsicElements } = {
  headingsH1Regular: 'h1',
  headingsH1Medium: 'h1',
  headingsH1Large: 'h1',
  headingsH1LargeBold: 'h1',
  headingsH2Medium: 'h2',
  headingsH2Regular: 'h2',
  headingsH2MediumTitulos: 'h2',
  headingsH2RegularTitulos: 'h2',
  headingsH3Medium: 'h3',
  headingsH3Regular: 'h3',
  subtitleS1Medium: 'h4',
  subtitleS1Regular: 'h4',
  subtitleS2Medium: 'h5',
  subtitleS2Regular: 'h5',
  subtitleS3Medium: 'h6',
  subtitleS3Regular: 'h6',
  paragraphP1Medium: 'p',
  paragraphP1Regular: 'p',
  paragraphP2Medium: 'p',
  paragraphP2Regular: 'p',
  paragraphP3Medium: 'p',
  paragraphP3Regular: 'p',
  tag1Medium: 'span',
  tag1Regular: 'span',
  tag2Medium: 'span',
  captionMedium: 'span',
  captionRegular: 'span',
  displayMedium: 'span',
  displayRegular: 'span',
  textMedium: 'p',
  textMediumRegular: 'p',
  textMediumBold: 'p',
  textRegular: 'p',
  textSmallMedium: 'p',
  textSmallRegular: 'p',
  subtitleS2Regular2: 'p',
  buttonRegular: 'p',
};

export default StyleGuide;
