const _ = {} // theme object


// Base colors

_.color = {
  white: `#fff`,
  gray100: `#f7f8f9`,
  gray200: `#e9ecef`,
  gray300: `#dee2e6`,
  gray400: `#c7c8ca`,
  gray500: `#a8aeb3`,
  gray600: `#636466`,
  gray700: `#495057`,
  gray800: `#393939`,
  gray900: `#252526`,
  black: `#000`,

  red: `#b02f1d`,
  redLight: `#fc432a`,
  blue: `#2f1db0`, // or try 1d75fc
  green: `#1db02f` // or try 1db06a
};


// Theme colors

_.primary =                 _.color.red;
_.secondary =               _.color.gray600;
_.success =                 _.color.green;
_.light =                   _.color.gray100;
_.dark =                    _.color.gray800;


// Spacing

_.spacer =                  `1rem`;


// Body

_.body = {
  bg: _.color.white,
  color: _.color.gray800
};


// Grid breakpoints

_.breakpoint = {
  xs:  `0`,
  sm:  `576px`,
  md:  `768px`,
  lg:  `992px`,
  xl:  `1200px`
};

// Components

_.border = {
  base: `1px solid ${_.color.gray300}`,
  width: `1px`,
  color: _.color.gray300,
  radius: `.25rem`
};

_.transition = {
  speed: `116ms`,
  easing: `ease-in-out`,
  base: `all 116ms ease-in-out`
};


// Typography

_.fontFamily = {
  sans: `'ATC Overlook', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  serif: `Georgia, serif`,
  mono: `'SF Mono', 'Fira Mono', 'Roboto Mono', Monaco, monospace;`
};

_.fontSize = {
  base: `1rem`,
  small: `80%`,
  h1: `2.5rem`,
  h2: `2rem`,
  h3: `1.75rem`,
  h4: `1.5rem`,
  h5: `1.25rem`,
  h6: `1rem`
};

_.lineHeight = {
  tightest: 1.1,
  tight: 1.3333,
  normal: 1.5,
  loose: 1.6666
};



export default _;
