const _ = {} // theme object


// Base colors

_.color = {
  white: `#fff`,
  gray100: `#f8f9fa`,
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
  color: _.color.gray900
};


// Link

_.link = {
  borderWidth: `1px`,
  borderColor: `#f5cac4`,
  color: _.primary,
  decoration: `none`
};

_.link.hover = {
  bg: `transparent`,
  borderColor: `transparent`,
  color: _.body.color,
  decoration: `none`
};

_.link.active = {
  color: _.body.color,
  bg: `rgba(0, 0, 0, .08)`,
  borderColor: `transparent`
}


// Paragraph

_.paragraph = {
  marginBottom: `1em`
};


// Grid breakpoints

_.breakpoint = {
  xs:  `0`,
  sm:  `576px`,
  md:  `768px`,
  lg:  `992px`,
  xl:  `1200px`
};


// Grid containers

_.container = {
  sm:  `540px`,
  md:  `720px`,
  lg:  `920px`,
  xl:  `1080px`
};


// Components

_.border = {
  base: `1px solid ${_.color.gray300}`,
  width: `1px`,
  color: _.color.gray300,
  radius: `.25rem`
};

_.boxShadow = {
  base: `0 .5rem 1rem rgba(0, 0, 0, .15)`,
  hover: `0 1rem 3rem rgba(0, 0, 0, .175)`
};

_.transition = {
  speed: `86ms`,
  easing: `ease-in-out`,
  base: `all 86ms ease-in-out`
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

_.fontWeight = {
  light: 300,
  normal: 400,
  bold: 700,
  black: 900
}

_.heading = {
  marginBottom: `${parseFloat(_.spacer) / 2}rem`,
  fontFamily: `inherit`,
  fontWeight: 700,
  lineHeight: _.lineHeight.tightest,
  color: `inherit`
};

_.hr ={
  borderColor: `rgba(0, 0, 0, .1)`,
  // borderWidth: _.border.width,
  // marginY: _.spacer
};


// Buttons

_.btn = {
  paddingY: `.375rem`,
  paddingX: `.75rem`,
  fontSize: _.fontSize.base,
  fontWeight: 400,
  lineHeight: _.lineHeight.normal,
  borderWidth: _.border.width,
};


// Header

// _.header = {
//   paddingY: _.spacer,
//   paddingX: _.spacer,
// };


// Nav

_.nav = {};

_.nav.link = {
  paddingY: `.375rem`,
  paddingX: `.75rem`,
  fontWeight: 700,
  color: _.body.color,
};

_.nav.link.hover = {
  color: _.link.color,
};






export default _;
