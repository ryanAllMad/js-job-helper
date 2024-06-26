"use strict";
(self["webpackChunkjob_requirement_search"] = self["webpackChunkjob_requirement_search"] || []).push([[687],{

/***/ 9940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7437);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
'use client';





function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .Global */ .mL, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;

/***/ }),

/***/ 9495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GlobalStyles: () => (/* reexport */ GlobalStyles/* default */.A),
  StyledEngineProvider: () => (/* reexport */ StyledEngineProvider),
  ThemeContext: () => (/* reexport */ emotion_element_43c6fea0_browser_esm.T),
  css: () => (/* reexport */ emotion_react_browser_esm/* css */.AH),
  "default": () => (/* binding */ styled),
  internal_processStyles: () => (/* binding */ internal_processStyles),
  keyframes: () => (/* reexport */ emotion_react_browser_esm/* keyframes */.i7)
});

// EXTERNAL MODULE: ./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js + 2 modules
var emotion_styled_browser_esm = __webpack_require__(1479);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js
var emotion_element_43c6fea0_browser_esm = __webpack_require__(85);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 1 modules
var emotion_cache_browser_esm = __webpack_require__(6319);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js
'use client';






// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

let cache;
if (typeof document === 'object') {
  cache = (0,emotion_cache_browser_esm/* default */.A)({
    key: 'css',
    prepend: true
  });
}
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst && cache ? /*#__PURE__*/(0,jsx_runtime.jsx)(emotion_element_43c6fea0_browser_esm.C, {
    value: cache,
    children: children
  }) : children;
}
 false ? 0 : void 0;
// EXTERNAL MODULE: ./node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js
var GlobalStyles = __webpack_require__(9940);
;// CONCATENATED MODULE: ./node_modules/@mui/styled-engine/index.js
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use client';

/* eslint-disable no-underscore-dangle */

function styled(tag, options) {
  const stylesFactory = (0,emotion_styled_browser_esm/* default */.A)(tag, options);
  if (false) {}
  return stylesFactory;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const internal_processStyles = (tag, processor) => {
  // Emotion attaches all the styles as `__emotion_styles`.
  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};




/***/ }),

/***/ 771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(4994);
__webpack_unused_export__ = ({
  value: true
});
exports.X4 = alpha;
__webpack_unused_export__ = blend;
__webpack_unused_export__ = void 0;
exports.e$ = darken;
__webpack_unused_export__ = decomposeColor;
__webpack_unused_export__ = emphasize;
exports.eM = getContrastRatio;
__webpack_unused_export__ = getLuminance;
__webpack_unused_export__ = hexToRgb;
__webpack_unused_export__ = hslToRgb;
exports.a = lighten;
__webpack_unused_export__ = private_safeAlpha;
__webpack_unused_export__ = void 0;
__webpack_unused_export__ = private_safeDarken;
__webpack_unused_export__ = private_safeEmphasize;
__webpack_unused_export__ = private_safeLighten;
__webpack_unused_export__ = recomposeColor;
__webpack_unused_export__ = rgbToHex;
var _formatMuiErrorMessage2 = _interopRequireDefault(__webpack_require__(2108));
var _clamp = _interopRequireDefault(__webpack_require__(6379));
/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value, min = 0, max = 1) {
  if (false) {}
  return (0, _clamp.default)(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}
function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error( false ? 0 : (0, _formatMuiErrorMessage2.default)(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error( false ? 0 : (0, _formatMuiErrorMessage2.default)(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = color => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val).join(' ');
};
__webpack_unused_export__ = colorChannel;
const private_safeColorChannel = (color, warning) => {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
__webpack_unused_export__ = private_safeColorChannel;
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }
  return `${type}(${values})`;
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }
  const {
    values
  } = decomposeColor(color);
  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Blend a transparent overlay color with a background color, resulting in a single
 * RGB color.
 * @param {string} background - CSS color
 * @param {string} overlay - CSS color
 * @param {number} opacity - Opacity multiplier in the range 0 - 1
 * @param {number} [gamma=1.0] - Gamma correction factor. For gamma-correct blending, 2.2 is usual.
 */
function blend(background, overlay, opacity, gamma = 1.0) {
  const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
  const backgroundColor = decomposeColor(background);
  const overlayColor = decomposeColor(overlay);
  const rgb = [blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2])];
  return recomposeColor({
    type: 'rgb',
    values: rgb
  });
}

/***/ }),

/***/ 6461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(4994);
__webpack_unused_export__ = ({
  value: true
});
exports.Ay = createStyled;
__webpack_unused_export__ = shouldForwardProp;
__webpack_unused_export__ = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(4634));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(4893));
var _styledEngine = _interopRequireWildcard(__webpack_require__(9495));
var _deepmerge = __webpack_require__(819);
var _capitalize = _interopRequireDefault(__webpack_require__(8217));
var _getDisplayName = _interopRequireDefault(__webpack_require__(1172));
var _createTheme = _interopRequireDefault(__webpack_require__(3142));
var _styleFunctionSx = _interopRequireDefault(__webpack_require__(3857));
const _excluded = ["ownerState"],
  _excluded2 = ["variants"],
  _excluded3 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
/* eslint-disable no-underscore-dangle */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = __webpack_unused_export__ = (0, _createTheme.default)();
const lowercaseFirstLetter = string => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme,
  theme,
  themeId
}) {
  return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
function processStyleArg(callableStyle, _ref) {
  let {
      ownerState
    } = _ref,
    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const resolvedStylesArg = typeof callableStyle === 'function' ? callableStyle((0, _extends2.default)({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap(resolvedStyle => processStyleArg(resolvedStyle, (0, _extends2.default)({
      ownerState
    }, props)));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === 'object' && Array.isArray(resolvedStylesArg.variants)) {
    const {
        variants = []
      } = resolvedStylesArg,
      otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded2);
    let result = otherStyles;
    variants.forEach(variant => {
      let isMatch = true;
      if (typeof variant.props === 'function') {
        isMatch = variant.props((0, _extends2.default)({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach(key => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        result.push(typeof variant.style === 'function' ? variant.style((0, _extends2.default)({
          ownerState
        }, props, ownerState)) : variant.style);
      }
    });
    return result;
  }
  return resolvedStylesArg;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  const systemSx = props => {
    return (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
      theme: resolveTheme((0, _extends2.default)({}, props, {
        defaultTheme,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
    (0, _styledEngine.internal_processStyles)(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
    const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
      } = inputOptions,
      options = (0, _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded3);

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let label;
    if (false) {}
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = (0, _styledEngine.default)(tag, (0, _extends2.default)({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = stylesArg => {
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg || (0, _deepmerge.isPlainObject)(stylesArg)) {
        return props => processStyleArg(stylesArg, (0, _extends2.default)({}, props, {
          theme: resolveTheme({
            theme: props.theme,
            defaultTheme,
            themeId
          })
        }));
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = resolveTheme((0, _extends2.default)({}, props, {
            defaultTheme,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0, _extends2.default)({}, props, {
              theme
            }));
          });
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          var _theme$components;
          const theme = resolveTheme((0, _extends2.default)({}, props, {
            defaultTheme,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg({
            variants: themeVariants
          }, (0, _extends2.default)({}, props, {
            theme
          }));
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill('');
        // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (false) {}
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}

/***/ }),

/***/ 2967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9940);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2791);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
'use client';






function GlobalStyles({
  styles,
  themeId,
  defaultTheme = {}
}) {
  const upperTheme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(defaultTheme);
  const globalStyles = typeof styles === 'function' ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);

/***/ }),

/***/ 3788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useRtl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);


const _excluded = (/* unused pure expression or super */ null && (["value"]));



const RtlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
function RtlProvider(_ref) {
  let {
      value
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_jsx(RtlContext.Provider, _extends({
    value: value != null ? value : true
  }, props));
}
 false ? 0 : void 0;
const useRtl = () => {
  const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RtlContext);
  return value != null ? value : false;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (RtlProvider)));

/***/ }),

/***/ 3018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createStack)
});

// UNUSED EXPORTS: style

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(4521);
// EXTERNAL MODULE: ./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(7245);
// EXTERNAL MODULE: ./node_modules/@mui/utils/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(4111);
// EXTERNAL MODULE: ./node_modules/@mui/styled-engine/index.js + 1 modules
var styled_engine = __webpack_require__(9495);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/createTheme/createTheme.js + 2 modules
var createTheme = __webpack_require__(8749);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx = __webpack_require__(3571);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/createStyled.js


const _excluded = ["ownerState"],
  _excluded2 = ["variants"],
  _excluded3 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
/* eslint-disable no-underscore-dangle */






function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = (0,createTheme/* default */.A)();
const lowercaseFirstLetter = string => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme,
  theme,
  themeId
}) {
  return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
function processStyleArg(callableStyle, _ref) {
  let {
      ownerState
    } = _ref,
    props = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, _excluded);
  const resolvedStylesArg = typeof callableStyle === 'function' ? callableStyle((0,esm_extends/* default */.A)({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap(resolvedStyle => processStyleArg(resolvedStyle, (0,esm_extends/* default */.A)({
      ownerState
    }, props)));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === 'object' && Array.isArray(resolvedStylesArg.variants)) {
    const {
        variants = []
      } = resolvedStylesArg,
      otherStyles = (0,objectWithoutPropertiesLoose/* default */.A)(resolvedStylesArg, _excluded2);
    let result = otherStyles;
    variants.forEach(variant => {
      let isMatch = true;
      if (typeof variant.props === 'function') {
        isMatch = variant.props((0,esm_extends/* default */.A)({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach(key => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        result.push(typeof variant.style === 'function' ? variant.style((0,esm_extends/* default */.A)({
          ownerState
        }, props, ownerState)) : variant.style);
      }
    });
    return result;
  }
  return resolvedStylesArg;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  const systemSx = props => {
    return (0,styleFunctionSx/* default */.A)((0,esm_extends/* default */.A)({}, props, {
      theme: resolveTheme((0,esm_extends/* default */.A)({}, props, {
        defaultTheme,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
    (0,styled_engine.internal_processStyles)(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
    const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
      } = inputOptions,
      options = (0,objectWithoutPropertiesLoose/* default */.A)(inputOptions, _excluded3);

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let label;
    if (false) {}
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = (0,styled_engine["default"])(tag, (0,esm_extends/* default */.A)({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = stylesArg => {
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg || (0,deepmerge/* isPlainObject */.Q)(stylesArg)) {
        return props => processStyleArg(stylesArg, (0,esm_extends/* default */.A)({}, props, {
          theme: resolveTheme({
            theme: props.theme,
            defaultTheme,
            themeId
          })
        }));
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = resolveTheme((0,esm_extends/* default */.A)({}, props, {
            defaultTheme,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0,esm_extends/* default */.A)({}, props, {
              theme
            }));
          });
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          var _theme$components;
          const theme = resolveTheme((0,esm_extends/* default */.A)({}, props, {
            defaultTheme,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg({
            variants: themeVariants
          }, (0,esm_extends/* default */.A)({}, props, {
            theme
          }));
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill('');
        // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (false) {}
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/styled.js

const styled = createStyled();
/* harmony default export */ const esm_styled = (styled);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(6606);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(9599);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(9452);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(8248);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/Stack/createStack.js


const createStack_excluded = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];













const defaultTheme = (0,createTheme/* default */.A)();
// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = esm_styled('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault(props) {
  return (0,useThemeProps/* default */.A)({
    props,
    name: 'MuiStack',
    defaultTheme
  });
}

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(children, separator) {
  const childrenArray = react.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/react.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = (0,esm_extends/* default */.A)({
    display: 'flex',
    flexDirection: 'column'
  }, (0,breakpoints/* handleBreakpoints */.NI)({
    theme
  }, (0,breakpoints/* resolveBreakpointValues */.kW)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), propValue => ({
    flexDirection: propValue
  })));
  if (ownerState.spacing) {
    const transformer = (0,spacing/* createUnarySpacing */.LX)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: (0,spacing/* getValue */._W)(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        '& > :not(style):not(style)': {
          margin: 0
        },
        '& > :not(style) ~ :not(style)': {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0,spacing/* getValue */._W)(transformer, propValue)
        }
      };
    };
    styles = (0,deepmerge/* default */.A)(styles, (0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = (0,breakpoints/* mergeBreakpointsInOrder */.iZ)(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiStack'
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ['root']
    };
    return (0,composeClasses/* default */.A)(slots, slot => (0,generateUtilityClass/* default */.Ay)(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /*#__PURE__*/react.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = (0,extendSxProp/* default */.A)(themeProps); // `color` type conflicts with html color attribute.
    const {
        component = 'div',
        direction = 'column',
        spacing = 0,
        divider,
        children,
        className,
        useFlexGap = false
      } = props,
      other = (0,objectWithoutPropertiesLoose/* default */.A)(props, createStack_excluded);
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /*#__PURE__*/(0,jsx_runtime.jsx)(StackRoot, (0,esm_extends/* default */.A)({
      as: component,
      ownerState: ownerState,
      ref: ref,
      className: (0,clsx/* default */.A)(classes.root, className)
    }, other, {
      children: divider ? joinChildren(children, divider) : children
    }));
  });
   false ? 0 : void 0;
  return Stack;
}

/***/ }),

/***/ 9452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EU: () => (/* binding */ createEmptyBreakpointObject),
/* harmony export */   NI: () => (/* binding */ handleBreakpoints),
/* harmony export */   iZ: () => (/* binding */ mergeBreakpointsInOrder),
/* harmony export */   kW: () => (/* binding */ resolveBreakpointValues),
/* harmony export */   vf: () => (/* binding */ removeUnusedBreakpoints),
/* harmony export */   zu: () => (/* binding */ values)
/* harmony export */ });
/* unused harmony export computeBreakpointsBase */
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4521);





// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function breakpoints(styleFunction) {
  // false positive
  // eslint-disable-next-line react/function-component-definition
  const newStyleFunction = props => {
    const theme = props.theme || {};
    const base = styleFunction(props);
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    const extended = themeBreakpoints.keys.reduce((acc, key) => {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(_extends({
          theme
        }, props[key]));
      }
      return acc;
    }, null);
    return merge(base, extended);
  };
  newStyleFunction.propTypes =  false ? 0 : {};
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl', ...styleFunction.filterProps];
  return newStyleFunction;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => (0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(prev, next), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}

// compute base for responsive values; e.g.,
// [1,2,3] => {xs: true, sm: true, md: true}
// {xs: 1, sm: 2, md: 3} => {xs: true, sm: true, md: true}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  // fixed value
  if (typeof breakpointValues !== 'object') {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach(breakpoint => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === 'object') {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (breakpoints)));

/***/ }),

/***/ 7413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4164);
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9495);
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3571);
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9599);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2791);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
'use client';



const _excluded = ["className", "component"];






function createBox(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = (0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_2__["default"])('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(_styleFunctionSx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
  const Box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Box(inProps, ref) {
    const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(defaultTheme);
    const _extendSxProp = (0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(inProps),
      {
        className,
        component = 'div'
      } = _extendSxProp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(_extendSxProp, _excluded);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BoxRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({
      as: component,
      ref: ref,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme
    }, other));
  });
  return Box;
}

/***/ }),

/***/ 8336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ applyStyles)
/* harmony export */ });
/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/experimental-api/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 *
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={theme => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles(key, styles) {
  // @ts-expect-error this is 'any' type
  const theme = this;
  if (theme.vars && typeof theme.getColorSchemeSelector === 'function') {
    // If CssVarsProvider is used as a provider,
    // returns '* :where([data-mui-color-scheme="light|dark"]) &'
    const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, '*:where($1)');
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

/***/ }),

/***/ 8094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createBreakpoints)
/* harmony export */ });
/* unused harmony export breakpointKeys */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8587);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8168);


const _excluded = ["values", "unit", "step"];
// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const breakpointKeys = (/* unused pure expression or super */ null && (['xs', 'sm', 'md', 'lg', 'xl']));
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
      },
      unit = 'px',
      step = 5
    } = breakpoints,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(breakpoints, _excluded);
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

/***/ }),

/***/ 8749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createTheme_createTheme)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/@mui/utils/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(4521);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/createTheme/createBreakpoints.js
var createBreakpoints = __webpack_require__(8094);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/createTheme/shape.js
const shape = {
  borderRadius: 4
};
/* harmony default export */ const createTheme_shape = (shape);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/spacing.js + 1 modules
var esm_spacing = __webpack_require__(8248);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/createTheme/createSpacing.js


// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }

  // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://m2.material.io/design/layout/understanding-layout.html
  const transform = (0,esm_spacing/* createUnarySpacing */.LX)({
    spacing: spacingInput
  });
  const spacing = (...argsInput) => {
    if (false) {}
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx = __webpack_require__(3571);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js + 5 modules
var defaultSxConfig = __webpack_require__(4188);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/createTheme/applyStyles.js
var applyStyles = __webpack_require__(8336);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/createTheme/createTheme.js


const _excluded = ["breakpoints", "palette", "spacing", "shape"];







function createTheme(options = {}, ...args) {
  const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(options, _excluded);
  const breakpoints = (0,createBreakpoints/* default */.A)(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = (0,deepmerge/* default */.A)({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: (0,esm_extends/* default */.A)({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: (0,esm_extends/* default */.A)({}, createTheme_shape, shapeInput)
  }, other);
  muiTheme.applyStyles = applyStyles/* default */.A;
  muiTheme = args.reduce((acc, argument) => (0,deepmerge/* default */.A)(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = (0,esm_extends/* default */.A)({}, defaultSxConfig/* default */.A, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return (0,styleFunctionSx/* default */.A)({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
/* harmony default export */ const createTheme_createTheme = (createTheme);

/***/ }),

/***/ 3142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   private_createBreakpoints: () => (/* reexport safe */ _createBreakpoints__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   unstable_applyStyles: () => (/* reexport safe */ _applyStyles__WEBPACK_IMPORTED_MODULE_2__.A)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8749);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8094);
/* harmony import */ var _applyStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8336);




/***/ }),

/***/ 4620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4521);

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return (0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);

/***/ }),

/***/ 8248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LX: () => (/* binding */ createUnarySpacing),
  MA: () => (/* binding */ createUnaryUnit),
  _W: () => (/* binding */ getValue),
  Lc: () => (/* binding */ margin),
  Ms: () => (/* binding */ padding)
});

// UNUSED EXPORTS: default, getStyleFromPropValue, marginKeys, paddingKeys

// EXTERNAL MODULE: ./node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(9452);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/style.js
var style = __webpack_require__(6481);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/merge.js
var merge = __webpack_require__(4620);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/memoize.js
function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/spacing.js





const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = (0,style/* getPath */.Yn)(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (false) {}
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (false) {}
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (false) {}
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === 'number') {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return (0,breakpoints/* handleBreakpoints */.NI)(props, propValue, styleFromPropValue);
}
function spacing_style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge/* default */.A, {});
}
function margin(props) {
  return spacing_style(props, marginKeys);
}
margin.propTypes =  false ? 0 : {};
margin.filterProps = marginKeys;
function padding(props) {
  return spacing_style(props, paddingKeys);
}
padding.propTypes =  false ? 0 : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return spacing_style(props, spacingKeys);
}
spacing.propTypes =  false ? 0 : {};
spacing.filterProps = spacingKeys;
/* harmony default export */ const esm_spacing = ((/* unused pure expression or super */ null && (spacing)));

/***/ }),

/***/ 6481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   BO: () => (/* binding */ getStyleValue),
/* harmony export */   Yn: () => (/* binding */ getPath)
/* harmony export */ });
/* harmony import */ var _mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8659);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9452);



function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : (0,_mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .handleBreakpoints */ .NI)(props, propValue, styleFromPropValue);
  };
  fn.propTypes =  false ? 0 : {};
  fn.filterProps = [prop];
  return fn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);

/***/ }),

/***/ 4188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ styleFunctionSx_defaultSxConfig)
});

// EXTERNAL MODULE: ./node_modules/@mui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(8248);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/style.js
var style = __webpack_require__(6481);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/merge.js
var merge = __webpack_require__(4620);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/compose.js

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return (0,merge/* default */.A)(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes =  false ? 0 : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}
/* harmony default export */ const esm_compose = (compose);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(9452);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/borders.js





function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return (0,style/* default */.Ay)({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes =  false ? 0 : {};
borderRadius.filterProps = ['borderRadius'];
const borders = esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
/* harmony default export */ const esm_borders = ((/* unused pure expression or super */ null && (borders)));
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/cssGrid.js






// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes =  false ? 0 : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes =  false ? 0 : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes =  false ? 0 : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = (0,style/* default */.Ay)({
  prop: 'gridColumn'
});
const gridRow = (0,style/* default */.Ay)({
  prop: 'gridRow'
});
const gridAutoFlow = (0,style/* default */.Ay)({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = (0,style/* default */.Ay)({
  prop: 'gridAutoColumns'
});
const gridAutoRows = (0,style/* default */.Ay)({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = (0,style/* default */.Ay)({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = (0,style/* default */.Ay)({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = (0,style/* default */.Ay)({
  prop: 'gridTemplateAreas'
});
const gridArea = (0,style/* default */.Ay)({
  prop: 'gridArea'
});
const grid = esm_compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ const cssGrid = ((/* unused pure expression or super */ null && (grid)));
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/palette.js


function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = (0,style/* default */.Ay)({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = (0,style/* default */.Ay)({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = (0,style/* default */.Ay)({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const palette = esm_compose(color, bgcolor, backgroundColor);
/* harmony default export */ const esm_palette = ((/* unused pure expression or super */ null && (palette)));
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/sizing.js



function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = (0,style/* default */.Ay)({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme2;
      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || breakpoints/* values */.zu[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = (0,style/* default */.Ay)({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = (0,style/* default */.Ay)({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = (0,style/* default */.Ay)({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = (0,style/* default */.Ay)({
  prop: 'minHeight',
  transform: sizingTransform
});
const sizeWidth = (0,style/* default */.Ay)({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
const sizeHeight = (0,style/* default */.Ay)({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = (0,style/* default */.Ay)({
  prop: 'boxSizing'
});
const sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ const esm_sizing = ((/* unused pure expression or super */ null && (sizing)));
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js





const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: spacing/* padding */.Ms
  },
  pt: {
    style: spacing/* padding */.Ms
  },
  pr: {
    style: spacing/* padding */.Ms
  },
  pb: {
    style: spacing/* padding */.Ms
  },
  pl: {
    style: spacing/* padding */.Ms
  },
  px: {
    style: spacing/* padding */.Ms
  },
  py: {
    style: spacing/* padding */.Ms
  },
  padding: {
    style: spacing/* padding */.Ms
  },
  paddingTop: {
    style: spacing/* padding */.Ms
  },
  paddingRight: {
    style: spacing/* padding */.Ms
  },
  paddingBottom: {
    style: spacing/* padding */.Ms
  },
  paddingLeft: {
    style: spacing/* padding */.Ms
  },
  paddingX: {
    style: spacing/* padding */.Ms
  },
  paddingY: {
    style: spacing/* padding */.Ms
  },
  paddingInline: {
    style: spacing/* padding */.Ms
  },
  paddingInlineStart: {
    style: spacing/* padding */.Ms
  },
  paddingInlineEnd: {
    style: spacing/* padding */.Ms
  },
  paddingBlock: {
    style: spacing/* padding */.Ms
  },
  paddingBlockStart: {
    style: spacing/* padding */.Ms
  },
  paddingBlockEnd: {
    style: spacing/* padding */.Ms
  },
  m: {
    style: spacing/* margin */.Lc
  },
  mt: {
    style: spacing/* margin */.Lc
  },
  mr: {
    style: spacing/* margin */.Lc
  },
  mb: {
    style: spacing/* margin */.Lc
  },
  ml: {
    style: spacing/* margin */.Lc
  },
  mx: {
    style: spacing/* margin */.Lc
  },
  my: {
    style: spacing/* margin */.Lc
  },
  margin: {
    style: spacing/* margin */.Lc
  },
  marginTop: {
    style: spacing/* margin */.Lc
  },
  marginRight: {
    style: spacing/* margin */.Lc
  },
  marginBottom: {
    style: spacing/* margin */.Lc
  },
  marginLeft: {
    style: spacing/* margin */.Lc
  },
  marginX: {
    style: spacing/* margin */.Lc
  },
  marginY: {
    style: spacing/* margin */.Lc
  },
  marginInline: {
    style: spacing/* margin */.Lc
  },
  marginInlineStart: {
    style: spacing/* margin */.Lc
  },
  marginInlineEnd: {
    style: spacing/* margin */.Lc
  },
  marginBlock: {
    style: spacing/* margin */.Lc
  },
  marginBlockStart: {
    style: spacing/* margin */.Lc
  },
  marginBlockEnd: {
    style: spacing/* margin */.Lc
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};
/* harmony default export */ const styleFunctionSx_defaultSxConfig = (defaultSxConfig);

/***/ }),

/***/ 9599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ extendSxProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8587);
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4521);
/* harmony import */ var _defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4188);


const _excluded = ["sx"];


const splitProps = props => {
  var _props$theme$unstable, _props$theme;
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : _defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
      sx: inSx
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, _excluded);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!(0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2__/* .isPlainObject */ .Q)(result)) {
        return systemProps;
      }
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({}, systemProps, result);
    };
  } else {
    finalSx = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({}, systemProps, inSx);
  }
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({}, otherProps, {
    sx: finalSx
  });
}

/***/ }),

/***/ 3857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _styleFunctionSx__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   extendSxProp: () => (/* reexport safe */ _extendSxProp__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   unstable_createStyleFunctionSx: () => (/* reexport safe */ _styleFunctionSx__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   unstable_defaultSxConfig: () => (/* reexport safe */ _defaultSxConfig__WEBPACK_IMPORTED_MODULE_2__.A)
/* harmony export */ });
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3571);
/* harmony import */ var _extendSxProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9599);
/* harmony import */ var _defaultSxConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4188);





/***/ }),

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   k: () => (/* binding */ unstable_createStyleFunctionSx)
/* harmony export */ });
/* harmony import */ var _mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8659);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4620);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6481);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9452);
/* harmony import */ var _defaultSxConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4188);





function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = (0,_style__WEBPACK_IMPORTED_MODULE_0__/* .getPath */ .Yn)(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = (0,_style__WEBPACK_IMPORTED_MODULE_0__/* .getStyleValue */ .BO)(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = (0,_style__WEBPACK_IMPORTED_MODULE_0__/* .getStyleValue */ .BO)(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : (0,_mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* .handleBreakpoints */ .NI)(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : _defaultSxConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = (0,_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* .createEmptyBreakpointObject */ .EU)(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = (0,_merge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = (0,_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* .handleBreakpoints */ .NI)({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme
                });
              } else {
                css = (0,_merge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, breakpointsValues);
              }
            }
          } else {
            css = (0,_merge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* .removeUnusedBreakpoints */ .vf)(breakpointsKeys, css);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleFunctionSx);

/***/ }),

/***/ 2791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_useTheme)
});

// UNUSED EXPORTS: systemDefaultTheme

// EXTERNAL MODULE: ./node_modules/@mui/system/esm/createTheme/createTheme.js + 2 modules
var createTheme = __webpack_require__(8749);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js
var emotion_element_43c6fea0_browser_esm = __webpack_require__(85);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/useThemeWithoutDefault.js
'use client';



function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = react.useContext(emotion_element_43c6fea0_browser_esm.T);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
/* harmony default export */ const useThemeWithoutDefault = (useTheme);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/useTheme.js
'use client';



const systemDefaultTheme = (0,createTheme/* default */.A)();
function useTheme_useTheme(defaultTheme = systemDefaultTheme) {
  return useThemeWithoutDefault(defaultTheme);
}
/* harmony default export */ const esm_useTheme = (useTheme_useTheme);

/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useThemeProps)
});

// EXTERNAL MODULE: ./node_modules/@mui/utils/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(6311);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js

function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return (0,resolveProps/* default */.A)(theme.components[name].defaultProps, props);
}
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/useTheme.js + 1 modules
var useTheme = __webpack_require__(2791);
;// CONCATENATED MODULE: ./node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
'use client';



function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = (0,useTheme/* default */.A)(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

/***/ }),

/***/ 2923:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

'use client';

__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(6540));
var _styledEngine = __webpack_require__(9495);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = React.useContext(_styledEngine.ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
var _default = exports.A = useTheme;

/***/ }),

/***/ 2067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassNameGenerator);

/***/ }),

/***/ 8659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ capitalize)
/* harmony export */ });
/* harmony import */ var _mui_utils_formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5697);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( false ? 0 : (0,_mui_utils_formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ 8217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _capitalize__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8659);


/***/ }),

/***/ 6379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ clamp_clamp)
});

;// CONCATENATED MODULE: ./node_modules/@mui/utils/clamp/clamp.js
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
/* harmony default export */ const clamp_clamp = (clamp);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/clamp/index.js


/***/ }),

/***/ 4111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ composeClasses)
/* harmony export */ });
function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  Object.keys(slots).forEach(
  // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        const utilityClass = getUtilityClass(key);
        if (utilityClass !== '') {
          acc.push(utilityClass);
        }
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
      }
      return acc;
    }, []).join(' ');
  });
  return output;
}

/***/ }),

/***/ 9941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createChainedFunction)
/* harmony export */ });
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

/***/ }),

/***/ 4965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ debounce)
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

/***/ }),

/***/ 4521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ deepmerge),
/* harmony export */   Q: () => (/* binding */ isPlainObject)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8168);

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

/***/ }),

/***/ 819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _deepmerge__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   isPlainObject: () => (/* reexport safe */ _deepmerge__WEBPACK_IMPORTED_MODULE_0__.Q)
/* harmony export */ });
/* harmony import */ var _deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4521);



/***/ }),

/***/ 5697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formatMuiErrorMessage)
/* harmony export */ });
/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/internal-babel-macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe if we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;
  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }
  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/***/ }),

/***/ 2108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5697);


/***/ }),

/***/ 7245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ generateUtilityClass),
/* harmony export */   li: () => (/* binding */ globalStateClasses)
/* harmony export */ });
/* unused harmony export isGlobalState */
/* harmony import */ var _ClassNameGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2067);

const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${_ClassNameGenerator__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.generate(componentName)}-${slot}`;
}
function isGlobalState(slot) {
  return globalStateClasses[slot] !== undefined;
}

/***/ }),

/***/ 7553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ generateUtilityClasses)
/* harmony export */ });
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7245);

function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)(componentName, slot, globalStatePrefix);
  });
  return result;
}

/***/ }),

/***/ 1172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ getDisplayName),
  getFunctionName: () => (/* reexport */ getFunctionName)
});

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(4363);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/getDisplayName/getDisplayName.js


// Simplified polyfill for IE11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || '';
}
function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}

/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE11 support
 */
function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }
  if (typeof Component === 'string') {
    return Component;
  }
  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case react_is.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');
      case react_is.Memo:
        return getWrappedName(Component, Component.type, 'memo');
      default:
        return undefined;
    }
  }
  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/@mui/utils/getDisplayName/index.js



/***/ }),

/***/ 6809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getScrollbarSize)
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

/***/ }),

/***/ 9069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isMuiElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);

function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element) && muiNames.indexOf( // For server components `muiName` is avaialble in element.type._payload.value.muiName
  // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
  // eslint-disable-next-line no-underscore-dangle
  (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName) !== -1;
}

/***/ }),

/***/ 6249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ 1489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6249);

function ownerWindow(node) {
  const doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ 6311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ resolveProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8168);

/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param {object} defaultProps
 * @param {object} props
 * @returns {object} resolved props
 */
function resolveProps(defaultProps, props) {
  const output = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, props);
  Object.keys(defaultProps).forEach(propName => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, defaultProps[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        // Reduce the iteration if the slot props is empty
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        // Reduce the iteration if the default slot props is empty
        output[propName] = slotProps;
      } else {
        output[propName] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, slotProps);
        Object.keys(defaultSlotProps).forEach(slotPropName => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  });
  return output;
}

/***/ }),

/***/ 3721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ setRef)
/* harmony export */ });
/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ 3833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useControlled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
'use client';

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(controlled !== undefined);
  const [valueState, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (false) {}
  const setValueIfUncontrolled = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/***/ }),

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
'use client';



/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEnhancedEffect);

/***/ }),

/***/ 6111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(173);
'use client';




/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  (0,_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEventCallback);

/***/ }),

/***/ 4871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useForkRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3721);
'use client';



function useForkRef(...refs) {
  /**
   * This will create a new function if the refs passed to this hook change and are all defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return instance => {
      refs.forEach(ref => {
        (0,_setRef__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(ref, instance);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

/***/ }),

/***/ 4953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
'use client';


let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride);
  const id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))['useId'.toString()];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

/***/ }),

/***/ 7749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useIsFocusVisible)
/* harmony export */ });
/* unused harmony export teardown */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _useTimeout_useTimeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2640);
'use client';

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
const hadFocusVisibleRecentlyTimeout = new _useTimeout_useTimeout__WEBPACK_IMPORTED_MODULE_1__/* .Timeout */ .E();
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};

/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */
function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;
  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}

/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}

/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}
function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(':focus-visible');
  } catch (error) {
    // Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  }

  // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);

  /**
   * Should be called if a blur event is fired
   */
  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      hadFocusVisibleRecentlyTimeout.start(100, () => {
        hadFocusVisibleRecently = false;
      });
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }

  /**
   * Should be called if a blur event is fired
   */
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

/***/ }),

/***/ 8591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
'use client';


const usePreviousProps = value => {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePreviousProps);

/***/ }),

/***/ 2640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Timeout),
  A: () => (/* binding */ useTimeout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./node_modules/@mui/utils/useLazyRef/useLazyRef.js
'use client';


const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = react.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
;// CONCATENATED MODULE: ./node_modules/@mui/utils/useOnMount/useOnMount.js
'use client';


const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  /* eslint-disable react-hooks/exhaustive-deps */
  react.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}
;// CONCATENATED MODULE: ./node_modules/@mui/utils/useTimeout/useTimeout.js
'use client';



class Timeout {
  constructor() {
    this.currentId = null;
    this.clear = () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    };
    this.disposeEffect = () => {
      return this.clear;
    };
  }
  static create() {
    return new Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

/***/ }),

/***/ 6572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ GaugeContainer)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mui/utils/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(4871);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(1848);
// EXTERNAL MODULE: ./node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(173);
// EXTERNAL MODULE: ./node_modules/@mui/utils/ownerWindow/ownerWindow.js
var ownerWindow = __webpack_require__(1489);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/ResponsiveChartContainer/useChartContainerDimensions.js



const useChartContainerDimensions = (inWidth, inHeight) => {
  const rootRef = react.useRef(null);
  const displayError = react.useRef(false);
  const [width, setWidth] = react.useState(0);
  const [height, setHeight] = react.useState(0);

  // Adaptation of the `computeSizeAndPublishResizeEvent` from the grid.
  const computeSize = react.useCallback(() => {
    const mainEl = rootRef?.current;
    if (!mainEl) {
      return;
    }
    const win = (0,ownerWindow/* default */.A)(mainEl);
    const computedStyle = win.getComputedStyle(mainEl);
    const newHeight = Math.floor(parseFloat(computedStyle.height)) || 0;
    const newWidth = Math.floor(parseFloat(computedStyle.width)) || 0;
    setWidth(newWidth);
    setHeight(newHeight);
  }, []);
  react.useEffect(() => {
    // Ensure the error detection occurs after the first rendering.
    displayError.current = true;
  }, []);
  (0,useEnhancedEffect/* default */.A)(() => {
    if (inWidth !== undefined && inHeight !== undefined) {
      return () => {};
    }
    computeSize();
    const elementToObserve = rootRef.current;
    if (typeof ResizeObserver === 'undefined') {
      return () => {};
    }
    let animationFrame;
    const observer = new ResizeObserver(() => {
      // See https://github.com/mui/mui-x/issues/8733
      animationFrame = requestAnimationFrame(() => {
        computeSize();
      });
    });
    if (elementToObserve) {
      observer.observe(elementToObserve);
    }
    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (elementToObserve) {
        observer.unobserve(elementToObserve);
      }
    };
  }, [computeSize, inHeight, inWidth]);
  if (false) {}
  return [rootRef, inWidth ?? width, inHeight ?? height];
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/context/InteractionProvider.js



const InteractionContext = /*#__PURE__*/react.createContext({
  item: null,
  axis: {
    x: null,
    y: null
  },
  useVoronoiInteraction: false,
  dispatch: () => null
});
if (false) {}
const dataReducer = (prevState, action) => {
  switch (action.type) {
    case 'enterItem':
      return _extends({}, prevState, {
        item: action.data
      });
    case 'exitChart':
      if (prevState.item === null && prevState.axis.x === null && prevState.axis.y === null) {
        return prevState;
      }
      return _extends({}, prevState, {
        axis: {
          x: null,
          y: null
        },
        item: null
      });
    case 'updateVoronoiUsage':
      return _extends({}, prevState, {
        useVoronoiInteraction: action.useVoronoiInteraction
      });
    case 'leaveItem':
      if (prevState.item === null || Object.keys(action.data).some(key => action.data[key] !== prevState.item[key])) {
        // The item is already something else
        return prevState;
      }
      return _extends({}, prevState, {
        item: null
      });
    case 'updateAxis':
      if (action.data.x === prevState.axis.x && action.data.y === prevState.axis.y) {
        return prevState;
      }
      return _extends({}, prevState, {
        axis: action.data
      });
    default:
      return prevState;
  }
};
function InteractionProvider(props) {
  const {
    children
  } = props;
  const [data, dispatch] = React.useReducer(dataReducer, {
    item: null,
    axis: {
      x: null,
      y: null
    },
    useVoronoiInteraction: false
  });
  const value = React.useMemo(() => _extends({}, data, {
    dispatch
  }), [data]);
  return /*#__PURE__*/_jsx(InteractionContext.Provider, {
    value: value,
    children: children
  });
}

;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/BarChart/extremums.js
const getBaseExtremum = params => {
  const {
    axis
  } = params;
  const minX = Math.min(...(axis.data ?? []));
  const maxX = Math.max(...(axis.data ?? []));
  return [minX, maxX];
};
const getValueExtremum = params => {
  const {
    series,
    axis,
    isDefaultAxis
  } = params;
  return Object.keys(series).filter(seriesId => series[seriesId].yAxisKey === axis.id || isDefaultAxis && series[seriesId].yAxisKey === undefined).reduce((acc, seriesId) => {
    const [seriesMin, seriesMax] = series[seriesId].stackedData?.reduce((seriesAcc, values) => [Math.min(...values, ...(seriesAcc[0] === null ? [] : [seriesAcc[0]])), Math.max(...values, ...(seriesAcc[1] === null ? [] : [seriesAcc[1]]))], series[seriesId].stackedData[0]) ?? [null, null];
    return [acc[0] === null ? seriesMin : Math.min(seriesMin, acc[0]), acc[1] === null ? seriesMax : Math.max(seriesMax, acc[1])];
  }, [null, null]);
};
const getExtremumX = params => {
  // Notice that bar should be all horizontal or all vertical.
  // Don't think it's a problem for now
  const isHorizontal = Object.keys(params.series).some(seriesId => params.series[seriesId].layout === 'horizontal');
  if (isHorizontal) {
    return getValueExtremum(params);
  }
  return getBaseExtremum(params);
};
const getExtremumY = params => {
  const isHorizontal = Object.keys(params.series).some(seriesId => params.series[seriesId].layout === 'horizontal');
  if (isHorizontal) {
    return getBaseExtremum(params);
  }
  return getValueExtremum(params);
};
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/ScatterChart/extremums.js
const mergeMinMax = (acc, val) => {
  if (acc[0] === null || acc[1] === null) {
    return val;
  }
  if (val[0] === null || val[1] === null) {
    return acc;
  }
  return [Math.min(acc[0], val[0]), Math.max(acc[1], val[1])];
};
const extremums_getExtremumX = params => {
  const {
    series,
    axis,
    isDefaultAxis
  } = params;
  return Object.keys(series).filter(seriesId => series[seriesId].xAxisKey === axis.id || series[seriesId].xAxisKey === undefined && isDefaultAxis).reduce((acc, seriesId) => {
    const seriesMinMax = series[seriesId].data.reduce((accSeries, {
      x
    }) => {
      const val = [x, x];
      return mergeMinMax(accSeries, val);
    }, [null, null]);
    return mergeMinMax(acc, seriesMinMax);
  }, [null, null]);
};
const extremums_getExtremumY = params => {
  const {
    series,
    axis,
    isDefaultAxis
  } = params;
  return Object.keys(series).filter(seriesId => series[seriesId].yAxisKey === axis.id || series[seriesId].yAxisKey === undefined && isDefaultAxis).reduce((acc, seriesId) => {
    const seriesMinMax = series[seriesId].data.reduce((accSeries, {
      y
    }) => {
      const val = [y, y];
      return mergeMinMax(accSeries, val);
    }, [null, null]);
    return mergeMinMax(acc, seriesMinMax);
  }, [null, null]);
};
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/LineChart/extremums.js
const LineChart_extremums_getExtremumX = params => {
  const {
    axis
  } = params;
  const minX = Math.min(...(axis.data ?? []));
  const maxX = Math.max(...(axis.data ?? []));
  return [minX, maxX];
};
function getSeriesExtremums(getValues, stackedData) {
  if (stackedData.length === 0) {
    return [null, null];
  }
  return stackedData.reduce((seriesAcc, stackedValue) => {
    const [base, value] = getValues(stackedValue);
    if (seriesAcc[0] === null) {
      return [Math.min(base, value), Math.max(base, value)];
    }
    return [Math.min(base, value, seriesAcc[0]), Math.max(base, value, seriesAcc[1])];
  }, getValues(stackedData[0]));
}
const LineChart_extremums_getExtremumY = params => {
  const {
    series,
    axis,
    isDefaultAxis
  } = params;
  return Object.keys(series).filter(seriesId => series[seriesId].yAxisKey === axis.id || isDefaultAxis && series[seriesId].yAxisKey === undefined).reduce((acc, seriesId) => {
    const {
      area,
      stackedData
    } = series[seriesId];
    const isArea = area !== undefined;
    const getValues = isArea ? d => d : d => [d[1], d[1]]; // Since this series is not used to display an area, we do not consider the base (the d[0]).

    const seriesExtremums = getSeriesExtremums(getValues, stackedData);
    if (acc[0] === null) {
      return seriesExtremums;
    }
    if (seriesExtremums[0] === null) {
      return acc;
    }
    const [seriesMin, seriesMax] = seriesExtremums;
    return [Math.min(seriesMin, acc[0]), Math.max(seriesMax, acc[1])];
  }, [null, null]);
};
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/context/CartesianContextProvider.js













const DEFAULT_CATEGORY_GAP_RATIO = 0.2;
const DEFAULT_BAR_GAP_RATIO = 0.1;

// TODO: those might be better placed in a distinct file
const xExtremumGetters = {
  bar: getExtremumX,
  scatter: extremums_getExtremumX,
  line: LineChart_extremums_getExtremumX
};
const yExtremumGetters = {
  bar: getExtremumY,
  scatter: extremums_getExtremumY,
  line: LineChart_extremums_getExtremumY
};
const CartesianContext = /*#__PURE__*/react.createContext({
  xAxis: {},
  yAxis: {},
  xAxisIds: [],
  yAxisIds: []
});
if (false) {}
function CartesianContextProvider(props) {
  const {
    xAxis: inXAxis,
    yAxis: inYAxis,
    dataset,
    children
  } = props;
  const formattedSeries = React.useContext(SeriesContext);
  const drawingArea = React.useContext(DrawingContext);
  const xAxis = React.useMemo(() => inXAxis?.map(axisConfig => {
    const dataKey = axisConfig.dataKey;
    if (dataKey === undefined || axisConfig.data !== undefined) {
      return axisConfig;
    }
    if (dataset === undefined) {
      throw Error('MUI X Charts: x-axis uses `dataKey` but no `dataset` is provided.');
    }
    return _extends({}, axisConfig, {
      data: dataset.map(d => d[dataKey])
    });
  }), [inXAxis, dataset]);
  const yAxis = React.useMemo(() => inYAxis?.map(axisConfig => {
    const dataKey = axisConfig.dataKey;
    if (dataKey === undefined || axisConfig.data !== undefined) {
      return axisConfig;
    }
    if (dataset === undefined) {
      throw Error('MUI X Charts: y-axis uses `dataKey` but no `dataset` is provided.');
    }
    return _extends({}, axisConfig, {
      data: dataset.map(d => d[dataKey])
    });
  }), [inYAxis, dataset]);
  const value = React.useMemo(() => {
    const axisExtremumCallback = (acc, chartType, axis, getters, isDefaultAxis) => {
      const getter = getters[chartType];
      const series = formattedSeries[chartType]?.series ?? {};
      const [minChartTypeData, maxChartTypeData] = getter({
        series,
        axis,
        isDefaultAxis
      });
      const [minData, maxData] = acc;
      if (minData === null || maxData === null) {
        return [minChartTypeData, maxChartTypeData];
      }
      if (minChartTypeData === null || maxChartTypeData === null) {
        return [minData, maxData];
      }
      return [Math.min(minChartTypeData, minData), Math.max(maxChartTypeData, maxData)];
    };
    const getAxisExtremum = (axis, getters, isDefaultAxis) => {
      const charTypes = Object.keys(getters);
      return charTypes.reduce((acc, charType) => axisExtremumCallback(acc, charType, axis, getters, isDefaultAxis), [null, null]);
    };
    const allXAxis = [...(xAxis?.map((axis, index) => _extends({
      id: `defaultized-x-axis-${index}`
    }, axis)) ?? []),
    // Allows to specify an axis with id=DEFAULT_X_AXIS_KEY
    ...(xAxis === undefined || xAxis.findIndex(({
      id
    }) => id === DEFAULT_X_AXIS_KEY) === -1 ? [{
      id: DEFAULT_X_AXIS_KEY,
      scaleType: 'linear'
    }] : [])];
    const completedXAxis = {};
    allXAxis.forEach((axis, axisIndex) => {
      const isDefaultAxis = axisIndex === 0;
      const [minData, maxData] = getAxisExtremum(axis, xExtremumGetters, isDefaultAxis);
      const range = axis.reverse ? [drawingArea.left + drawingArea.width, drawingArea.left] : [drawingArea.left, drawingArea.left + drawingArea.width];
      if (isBandScaleConfig(axis)) {
        const categoryGapRatio = axis.categoryGapRatio ?? DEFAULT_CATEGORY_GAP_RATIO;
        const barGapRatio = axis.barGapRatio ?? DEFAULT_BAR_GAP_RATIO;
        completedXAxis[axis.id] = _extends({
          categoryGapRatio,
          barGapRatio
        }, axis, {
          scale: scaleBand(axis.data, range).paddingInner(categoryGapRatio).paddingOuter(categoryGapRatio / 2),
          tickNumber: axis.data.length
        });
      }
      if (isPointScaleConfig(axis)) {
        completedXAxis[axis.id] = _extends({}, axis, {
          scale: scalePoint(axis.data, range),
          tickNumber: axis.data.length
        });
      }
      if (axis.scaleType === 'band' || axis.scaleType === 'point') {
        // Could be merged with the two previous "if conditions" but then TS does not get that `axis.scaleType` can't be `band` or `point`.
        return;
      }
      const scaleType = axis.scaleType ?? 'linear';
      const extremums = [axis.min ?? minData, axis.max ?? maxData];
      const tickNumber = getTickNumber(_extends({}, axis, {
        range,
        domain: extremums
      }));
      const niceScale = getScale(scaleType, extremums, range).nice(tickNumber);
      const niceDomain = niceScale.domain();
      const domain = [axis.min ?? niceDomain[0], axis.max ?? niceDomain[1]];
      completedXAxis[axis.id] = _extends({}, axis, {
        scaleType,
        scale: niceScale.domain(domain),
        tickNumber
      });
    });
    const allYAxis = [...(yAxis?.map((axis, index) => _extends({
      id: `defaultized-y-axis-${index}`
    }, axis)) ?? []), ...(yAxis === undefined || yAxis.findIndex(({
      id
    }) => id === DEFAULT_Y_AXIS_KEY) === -1 ? [{
      id: DEFAULT_Y_AXIS_KEY,
      scaleType: 'linear'
    }] : [])];
    const completedYAxis = {};
    allYAxis.forEach((axis, axisIndex) => {
      const isDefaultAxis = axisIndex === 0;
      const [minData, maxData] = getAxisExtremum(axis, yExtremumGetters, isDefaultAxis);
      const range = axis.reverse ? [drawingArea.top, drawingArea.top + drawingArea.height] : [drawingArea.top + drawingArea.height, drawingArea.top];
      if (isBandScaleConfig(axis)) {
        const categoryGapRatio = axis.categoryGapRatio ?? DEFAULT_CATEGORY_GAP_RATIO;
        completedYAxis[axis.id] = _extends({
          categoryGapRatio,
          barGapRatio: 0
        }, axis, {
          scale: scaleBand(axis.data, [range[1], range[0]]).paddingInner(categoryGapRatio).paddingOuter(categoryGapRatio / 2),
          tickNumber: axis.data.length
        });
      }
      if (isPointScaleConfig(axis)) {
        completedYAxis[axis.id] = _extends({}, axis, {
          scale: scalePoint(axis.data, [range[1], range[0]]),
          tickNumber: axis.data.length
        });
      }
      if (axis.scaleType === 'band' || axis.scaleType === 'point') {
        // Could be merged with the two previous "if conditions" but then TS does not get that `axis.scaleType` can't be `band` or `point`.
        return;
      }
      const scaleType = axis.scaleType ?? 'linear';
      const extremums = [axis.min ?? minData, axis.max ?? maxData];
      const tickNumber = getTickNumber(_extends({}, axis, {
        range,
        domain: extremums
      }));
      const niceScale = getScale(scaleType, extremums, range).nice(tickNumber);
      const niceDomain = niceScale.domain();
      const domain = [axis.min ?? niceDomain[0], axis.max ?? niceDomain[1]];
      completedYAxis[axis.id] = _extends({}, axis, {
        scaleType,
        scale: niceScale.domain(domain),
        tickNumber
      });
    });
    return {
      xAxis: completedXAxis,
      yAxis: completedYAxis,
      xAxisIds: allXAxis.map(({
        id
      }) => id),
      yAxisIds: allYAxis.map(({
        id
      }) => id)
    };
  }, [drawingArea.height, drawingArea.left, drawingArea.top, drawingArea.width, formattedSeries, xAxis, yAxis]);

  // @ts-ignore
  return /*#__PURE__*/_jsx(CartesianContext.Provider, {
    value: value,
    children: children
  });
}

// EXTERNAL MODULE: ./node_modules/@mui/x-charts/esm/context/DrawingProvider.js + 2 modules
var DrawingProvider = __webpack_require__(4631);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/internals/isBandScale.js
function isBandScale(scale) {
  return scale.bandwidth !== undefined;
}
// EXTERNAL MODULE: ./node_modules/@mui/x-charts/esm/internals/utils.js
var utils = __webpack_require__(2955);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/hooks/useAxisEvents.js






function getAsANumber(value) {
  return value instanceof Date ? value.getTime() : value;
}
const useAxisEvents = disableAxisListener => {
  const svgRef = react.useContext(DrawingProvider/* SvgContext */.w7);
  const {
    width,
    height,
    top,
    left
  } = react.useContext(DrawingProvider/* DrawingContext */.wf);
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = react.useContext(CartesianContext);
  const {
    dispatch
  } = react.useContext(InteractionContext);
  const usedXAxis = xAxisIds[0];
  const usedYAxis = yAxisIds[0];

  // Use a ref to avoid rerendering on every mousemove event.
  const mousePosition = react.useRef({
    x: -1,
    y: -1
  });
  react.useEffect(() => {
    const element = svgRef.current;
    if (element === null || disableAxisListener) {
      return () => {};
    }
    const getUpdate = (axisConfig, mouseValue) => {
      if (usedXAxis === null) {
        return null;
      }
      const {
        scale,
        data: axisData,
        reverse
      } = axisConfig;
      if (!isBandScale(scale)) {
        const value = scale.invert(mouseValue);
        if (axisData === undefined) {
          return {
            value
          };
        }
        const valueAsNumber = getAsANumber(value);
        const closestIndex = axisData?.findIndex((pointValue, index) => {
          const v = getAsANumber(pointValue);
          if (v > valueAsNumber) {
            if (index === 0 || Math.abs(valueAsNumber - v) <= Math.abs(valueAsNumber - getAsANumber(axisData[index - 1]))) {
              return true;
            }
          }
          if (v <= valueAsNumber) {
            if (index === axisData.length - 1 || Math.abs(getAsANumber(value) - v) < Math.abs(getAsANumber(value) - getAsANumber(axisData[index + 1]))) {
              return true;
            }
          }
          return false;
        });
        return {
          value: closestIndex !== undefined && closestIndex >= 0 ? axisData[closestIndex] : value,
          index: closestIndex
        };
      }
      const dataIndex = scale.bandwidth() === 0 ? Math.floor((mouseValue - Math.min(...scale.range()) + scale.step() / 2) / scale.step()) : Math.floor((mouseValue - Math.min(...scale.range())) / scale.step());
      if (dataIndex < 0 || dataIndex >= axisData.length) {
        return null;
      }
      if (reverse) {
        const reverseIndex = axisData.length - 1 - dataIndex;
        return {
          index: reverseIndex,
          value: axisData[reverseIndex]
        };
      }
      return {
        index: dataIndex,
        value: axisData[dataIndex]
      };
    };
    const handleMouseOut = () => {
      mousePosition.current = {
        x: -1,
        y: -1
      };
      dispatch({
        type: 'exitChart'
      });
    };
    const handleMouseMove = event => {
      const svgPoint = (0,utils/* getSVGPoint */.PO)(svgRef.current, event);
      mousePosition.current = {
        x: svgPoint.x,
        y: svgPoint.y
      };
      const outsideX = svgPoint.x < left || svgPoint.x > left + width;
      const outsideY = svgPoint.y < top || svgPoint.y > top + height;
      if (outsideX || outsideY) {
        dispatch({
          type: 'exitChart'
        });
        return;
      }
      const newStateX = getUpdate(xAxis[usedXAxis], svgPoint.x);
      const newStateY = getUpdate(yAxis[usedYAxis], svgPoint.y);
      dispatch({
        type: 'updateAxis',
        data: {
          x: newStateX,
          y: newStateY
        }
      });
    };
    element.addEventListener('mouseout', handleMouseOut);
    element.addEventListener('mousemove', handleMouseMove);
    return () => {
      element.removeEventListener('mouseout', handleMouseOut);
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [svgRef, dispatch, left, width, top, height, usedYAxis, yAxis, usedXAxis, xAxis, disableAxisListener]);
};
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/ChartsSurface.js


const _excluded = ["children", "width", "height", "viewBox", "disableAxisListener", "className", "title", "desc"];






const ChartChartsSurfaceStyles = (0,styled/* default */.Ay)('svg', {
  name: 'MuiChartsSurface',
  slot: 'Root'
})(() => ({}));
const ChartsSurface = /*#__PURE__*/react.forwardRef(function ChartsSurface(props, ref) {
  const {
      children,
      width,
      height,
      viewBox,
      disableAxisListener = false,
      title,
      desc
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const svgView = (0,esm_extends/* default */.A)({
    width,
    height,
    x: 0,
    y: 0
  }, viewBox);
  useAxisEvents(disableAxisListener);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ChartChartsSurfaceStyles, (0,esm_extends/* default */.A)({
    width: width,
    height: height,
    viewBox: `${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("title", {
      children: title
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("desc", {
      children: desc
    }), children]
  }));
});
 false ? 0 : void 0;

// EXTERNAL MODULE: ./node_modules/@mui/x-charts/esm/Gauge/GaugeProvider.js + 1 modules
var GaugeProvider = __webpack_require__(9683);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/Gauge/GaugeContainer.js


const GaugeContainer_excluded = ["width", "height", "margin", "title", "desc", "value", "valueMin", "valueMax", "startAngle", "endAngle", "outerRadius", "innerRadius", "cornerRadius", "cx", "cy", "children"];









const ResizableContainer = (0,styled/* default */.Ay)('div', {
  name: 'MuiGauge',
  slot: 'Container'
})(({
  ownerState,
  theme
}) => ({
  width: ownerState.width ?? '100%',
  height: ownerState.height ?? '100%',
  display: 'flex',
  position: 'relative',
  flexGrow: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '&>svg': {
    width: '100%',
    height: '100%'
  },
  '& text': {
    fill: (theme.vars || theme).palette.text.primary
  }
}));
const GaugeContainer = /*#__PURE__*/react.forwardRef(function GaugeContainer(props, ref) {
  const {
      width: inWidth,
      height: inHeight,
      margin,
      title,
      desc,
      value,
      valueMin = 0,
      valueMax = 100,
      startAngle,
      endAngle,
      outerRadius,
      innerRadius,
      cornerRadius,
      cx,
      cy,
      children
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GaugeContainer_excluded);
  const [containerRef, width, height] = useChartContainerDimensions(inWidth, inHeight);
  const svgRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.A)(ref, svgRef);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResizableContainer, (0,esm_extends/* default */.A)({
    ref: containerRef,
    ownerState: {
      width: inWidth,
      height: inHeight
    },
    role: "meter",
    "aria-valuenow": value === null ? undefined : value,
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax
  }, other, {
    children: width && height ? /*#__PURE__*/(0,jsx_runtime.jsx)(DrawingProvider/* DrawingProvider */.QN, {
      width: width,
      height: height,
      margin: (0,esm_extends/* default */.A)({
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }, margin),
      svgRef: svgRef,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(GaugeProvider/* GaugeProvider */.pu, {
        value: value,
        valueMin: valueMin,
        valueMax: valueMax,
        startAngle: startAngle,
        endAngle: endAngle,
        outerRadius: outerRadius,
        innerRadius: innerRadius,
        cornerRadius: cornerRadius,
        cx: cx,
        cy: cy,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ChartsSurface, {
          width: width,
          height: height,
          ref: handleRef,
          title: title,
          desc: desc,
          disableAxisListener: true,
          "aria-hidden": "true",
          children: children
        })
      })
    }) : null
  }));
});
 false ? 0 : void 0;


/***/ }),

/***/ 9683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pu: () => (/* binding */ GaugeProvider),
  _Q: () => (/* binding */ useGaugeState)
});

// UNUSED EXPORTS: GaugeContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mui/x-charts/esm/context/DrawingProvider.js + 2 modules
var DrawingProvider = __webpack_require__(4631);
// EXTERNAL MODULE: ./node_modules/@mui/x-charts/esm/internals/utils.js
var utils = __webpack_require__(2955);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/Gauge/utils.js
function deg2rad(angle) {
  return Math.PI * angle / 180;
}
function getPoint(angle) {
  const radAngle = deg2rad(angle);
  return [Math.sin(radAngle), -Math.cos(radAngle)];
}

/**
 * Retruns the ratio of the arc bounding box and its center.
 * @param startAngle The start angle (in deg)
 * @param endAngle The end angle (in deg)
 */
function getArcRatios(startAngle, endAngle) {
  // Set the start, end and center point.
  const points = [[0, 0], getPoint(startAngle), getPoint(endAngle)];

  // Add cardinal points included in the arc
  const minAngle = Math.min(startAngle, endAngle);
  const maxAngle = Math.max(startAngle, endAngle);
  const initialAngle = Math.floor(minAngle / 90) * 90;
  for (let step = 1; step <= 4; step += 1) {
    const cartinalAngle = initialAngle + step * 90;
    if (cartinalAngle < maxAngle) {
      points.push(getPoint(cartinalAngle));
    }
  }
  const minX = Math.min(...points.map(([x]) => x));
  const maxX = Math.max(...points.map(([x]) => x));
  const minY = Math.min(...points.map(([, y]) => y));
  const maxY = Math.max(...points.map(([, y]) => y));
  return {
    cx: -minX / (maxX - minX),
    cy: -minY / (maxY - minY),
    minX,
    maxX,
    minY,
    maxY
  };
}
function getAvailableRadius(cx, cy, width, height, {
  minX,
  maxX,
  minY,
  maxY
}) {
  return Math.min(...[{
    ratio: Math.abs(minX),
    space: cx
  }, {
    ratio: Math.abs(maxX),
    space: width - cx
  }, {
    ratio: Math.abs(minY),
    space: cy
  }, {
    ratio: Math.abs(maxY),
    space: height - cy
  }].map(({
    ratio,
    space
  }) => {
    if (ratio < 0.00001) {
      return Infinity;
    }
    return space / ratio;
  }));
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/Gauge/GaugeProvider.js
// @ignore - do not document.





const GaugeContext = /*#__PURE__*/react.createContext({
  value: null,
  valueMin: 0,
  valueMax: 0,
  startAngle: 0,
  endAngle: 0,
  innerRadius: 0,
  outerRadius: 0,
  cornerRadius: 0,
  cx: 0,
  cy: 0,
  maxRadius: 0,
  valueAngle: null
});
if (false) {}
function GaugeProvider(props) {
  const {
    value = null,
    valueMin = 0,
    valueMax = 100,
    startAngle = 0,
    endAngle = 360,
    outerRadius: outerRadiusParam,
    innerRadius: innerRadiusParam,
    cornerRadius: cornerRadiusParam,
    cx: cxParam,
    cy: cyParam,
    children
  } = props;
  const {
    width,
    height,
    top,
    left
  } = react.useContext(DrawingProvider/* DrawingContext */.wf);
  const ratios = getArcRatios(startAngle, endAngle);
  const innerCx = cxParam ? (0,utils/* getPercentageValue */.cN)(cxParam, width) : ratios.cx * width;
  const innerCy = cyParam ? (0,utils/* getPercentageValue */.cN)(cyParam, height) : ratios.cy * height;
  let cx = left + innerCx;
  let cy = top + innerCy;
  const maxRadius = getAvailableRadius(innerCx, innerCy, width, height, ratios);

  // If the center is not defined, after computation of the available radius, udpate the center to use the remaining space.
  if (cxParam === undefined) {
    const usedWidth = maxRadius * (ratios.maxX - ratios.minX);
    cx = left + (width - usedWidth) / 2 + ratios.cx * usedWidth;
  }
  if (cyParam === undefined) {
    const usedHeight = maxRadius * (ratios.maxY - ratios.minY);
    cy = top + (height - usedHeight) / 2 + ratios.cy * usedHeight;
  }
  const outerRadius = (0,utils/* getPercentageValue */.cN)(outerRadiusParam ?? maxRadius, maxRadius);
  const innerRadius = (0,utils/* getPercentageValue */.cN)(innerRadiusParam ?? '80%', maxRadius);
  const cornerRadius = (0,utils/* getPercentageValue */.cN)(cornerRadiusParam ?? 0, outerRadius - innerRadius);
  const contextValue = react.useMemo(() => {
    const startAngleRad = Math.PI * startAngle / 180;
    const endAngleRad = Math.PI * endAngle / 180;
    return {
      value,
      valueMin,
      valueMax,
      startAngle: startAngleRad,
      endAngle: endAngleRad,
      outerRadius,
      innerRadius,
      cornerRadius,
      cx,
      cy,
      maxRadius,
      valueAngle: value === null ? null : startAngleRad + (endAngleRad - startAngleRad) * (value - valueMin) / (valueMax - valueMin)
    };
  }, [value, valueMin, valueMax, startAngle, endAngle, outerRadius, innerRadius, cornerRadius, cx, cy, maxRadius]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GaugeContext.Provider, {
    value: contextValue,
    children: children
  });
}
function useGaugeState() {
  return react.useContext(GaugeContext);
}

/***/ }),

/***/ 4923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ GaugeReferenceArc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6182);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1848);
/* harmony import */ var _GaugeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9683);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);






const StyledPath = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)('path', {
  name: 'MuiGauge',
  slot: 'ReferenceArc',
  overridesResolver: (props, styles) => styles.referenceArc
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.divider
}));
function GaugeReferenceArc(props) {
  const {
    startAngle,
    endAngle,
    outerRadius,
    innerRadius,
    cornerRadius,
    cx,
    cy
  } = (0,_GaugeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useGaugeState */ ._Q)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledPath, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({
    transform: `translate(${cx}, ${cy})`,
    d: (0,d3_shape__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)().cornerRadius(cornerRadius)({
      startAngle,
      endAngle,
      innerRadius,
      outerRadius
    })
  }, props));
}

/***/ }),

/***/ 1667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ GaugeValueArc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6182);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1848);
/* harmony import */ var _GaugeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9683);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);






const StyledPath = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)('path', {
  name: 'MuiGauge',
  slot: 'ReferenceArc',
  overridesResolver: (props, styles) => styles.referenceArc
})(({
  theme
}) => ({
  fill: (theme.vars || theme).palette.primary.main
}));
function GaugeValueArc(props) {
  const {
    value,
    valueMin,
    valueMax,
    startAngle,
    endAngle,
    outerRadius,
    innerRadius,
    cornerRadius,
    cx,
    cy
  } = (0,_GaugeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useGaugeState */ ._Q)();
  if (value === null) {
    return null;
  }
  const valueAngle = startAngle + (value - valueMin) / (valueMax - valueMin) * (endAngle - startAngle);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledPath, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({
    transform: `translate(${cx}, ${cy})`,
    d: (0,d3_shape__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)().cornerRadius(cornerRadius)({
      startAngle,
      endAngle: valueAngle,
      innerRadius,
      outerRadius
    })
  }, props));
}

/***/ }),

/***/ 4631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  wf: () => (/* binding */ DrawingContext),
  QN: () => (/* binding */ DrawingProvider),
  w7: () => (/* binding */ SvgContext)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mui/utils/useId/useId.js
var useId = __webpack_require__(4953);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/constants.js
const DEFAULT_X_AXIS_KEY = 'DEFAULT_X_AXIS_KEY';
const DEFAULT_Y_AXIS_KEY = 'DEFAULT_Y_AXIS_KEY';
const DEFAULT_MARGINS = {
  top: 50,
  bottom: 50,
  left: 50,
  right: 50
};
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/hooks/useChartDimensions.js



const useChartDimensions = (width, height, margin) => {
  const defaultizedMargin = (0,esm_extends/* default */.A)({}, DEFAULT_MARGINS, margin);
  const drawingArea = react.useMemo(() => ({
    left: defaultizedMargin.left,
    top: defaultizedMargin.top,
    right: defaultizedMargin.right,
    bottom: defaultizedMargin.bottom,
    width: Math.max(0, width - defaultizedMargin.left - defaultizedMargin.right),
    height: Math.max(0, height - defaultizedMargin.top - defaultizedMargin.bottom)
  }), [width, height, defaultizedMargin.top, defaultizedMargin.bottom, defaultizedMargin.left, defaultizedMargin.right]);
  return drawingArea;
};
/* harmony default export */ const hooks_useChartDimensions = (useChartDimensions);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@mui/x-charts/esm/context/DrawingProvider.js





/**
 * Defines the area in which it is possible to draw the charts.
 */

const DrawingContext = /*#__PURE__*/react.createContext({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 300,
  width: 400,
  chartId: ''
});
if (false) {}
const SvgContext = /*#__PURE__*/react.createContext({
  current: null
});
if (false) {}
function DrawingProvider(props) {
  const {
    width,
    height,
    margin,
    svgRef,
    children
  } = props;
  const drawingArea = hooks_useChartDimensions(width, height, margin);
  const chartId = (0,useId/* default */.A)();
  const value = react.useMemo(() => (0,esm_extends/* default */.A)({
    chartId: chartId ?? ''
  }, drawingArea), [chartId, drawingArea]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SvgContext.Provider, {
    value: svgRef,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(DrawingContext.Provider, {
      value: value,
      children: children
    })
  });
}

/***/ }),

/***/ 2955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PO: () => (/* binding */ getSVGPoint),
/* harmony export */   cN: () => (/* binding */ getPercentageValue)
/* harmony export */ });
/* unused harmony exports getSymbol, cleanId */
// Returns the index of a defined shape
function getSymbol(shape) {
  const symbolNames = 'circle cross diamond square star triangle wye'.split(/ /);
  return symbolNames.indexOf(shape) || 0;
}
/**
 * Transform mouse event position to corrdinates inside the SVG.
 * @param svg The SVG element
 * @param event The mouseEvent to transform
 */
function getSVGPoint(svg, event) {
  const pt = svg.createSVGPoint();
  pt.x = event.clientX;
  pt.y = event.clientY;
  return pt.matrixTransform(svg.getScreenCTM().inverse());
}

/**
 * Helper that converts values and percentages into values.
 * @param value The value provided by the developer. Can either be a number or a string with '%' or 'px'.
 * @param refValue The numerical value associated to 100%.
 * @returns The numerical value associated to the provided value.
 */
function getPercentageValue(value, refValue) {
  if (typeof value === 'number') {
    return value;
  }
  if (value === '100%') {
    // Avoid potential rounding issues
    return refValue;
  }
  if (value.endsWith('%')) {
    const percentage = Number.parseFloat(value.slice(0, value.length - 1));
    if (!Number.isNaN(percentage)) {
      return percentage * refValue / 100;
    }
  }
  if (value.endsWith('px')) {
    const val = Number.parseFloat(value.slice(0, value.length - 2));
    if (!Number.isNaN(val)) {
      return val;
    }
  }
  throw Error(`MUI-Charts: Received an unknown value "${value}". It should be a number, or a string with a percentage value.`);
}

/**
 * Remove spaces to have viable ids
 */
function cleanId(id) {
  return id.replace(' ', '_');
}

/***/ }),

/***/ 4798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ AdapterDayjs)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(4353);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/weekOfYear.js
var weekOfYear = __webpack_require__(8134);
var weekOfYear_default = /*#__PURE__*/__webpack_require__.n(weekOfYear);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/customParseFormat.js
var customParseFormat = __webpack_require__(445);
var customParseFormat_default = /*#__PURE__*/__webpack_require__.n(customParseFormat);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/localizedFormat.js
var localizedFormat = __webpack_require__(5750);
var localizedFormat_default = /*#__PURE__*/__webpack_require__.n(localizedFormat);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isBetween.js
var isBetween = __webpack_require__(7872);
var isBetween_default = /*#__PURE__*/__webpack_require__.n(isBetween);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/advancedFormat.js
var advancedFormat = __webpack_require__(7375);
var advancedFormat_default = /*#__PURE__*/__webpack_require__.n(advancedFormat);
;// CONCATENATED MODULE: ./node_modules/@mui/x-date-pickers/internals/utils/warning.js
const buildDeprecatedPropsWarning = message => {
  let alreadyWarned = false;
  if (true) {
    return () => {};
  }
  const cleanMessage = Array.isArray(message) ? message.join('\n') : message;
  return deprecatedProps => {
    const deprecatedKeys = Object.entries(deprecatedProps).filter(([, value]) => value !== undefined).map(([key]) => `- ${key}`);
    if (!alreadyWarned && deprecatedKeys.length > 0) {
      alreadyWarned = true;
      console.warn([cleanMessage, 'deprecated props observed:', ...deprecatedKeys].join('\n'));
    }
  };
};
const buildWarning = (message, gravity = 'warning') => {
  let alreadyWarned = false;
  const cleanMessage = Array.isArray(message) ? message.join('\n') : message;
  return () => {
    if (!alreadyWarned) {
      alreadyWarned = true;
      if (gravity === 'error') {
        console.error(cleanMessage);
      } else {
        console.warn(cleanMessage);
      }
    }
  };
};
;// CONCATENATED MODULE: ./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js

/* eslint-disable class-methods-use-this */







dayjs_min_default().extend((localizedFormat_default()));
dayjs_min_default().extend((weekOfYear_default()));
dayjs_min_default().extend((isBetween_default()));
dayjs_min_default().extend((advancedFormat_default()));
const localeNotFoundWarning = buildWarning(['Your locale has not been found.', 'Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale', "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", 'fallback on English locale']);
const formatTokenMap = {
  // Year
  YY: 'year',
  YYYY: {
    sectionType: 'year',
    contentType: 'digit',
    maxLength: 4
  },
  // Month
  M: {
    sectionType: 'month',
    contentType: 'digit',
    maxLength: 2
  },
  MM: 'month',
  MMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  MMMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  // Day of the month
  D: {
    sectionType: 'day',
    contentType: 'digit',
    maxLength: 2
  },
  DD: 'day',
  Do: {
    sectionType: 'day',
    contentType: 'digit-with-letter'
  },
  // Day of the week
  d: {
    sectionType: 'weekDay',
    contentType: 'digit',
    maxLength: 2
  },
  dd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  ddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  dddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  // Meridiem
  A: 'meridiem',
  a: 'meridiem',
  // Hours
  H: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  HH: 'hours',
  h: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  hh: 'hours',
  // Minutes
  m: {
    sectionType: 'minutes',
    contentType: 'digit',
    maxLength: 2
  },
  mm: 'minutes',
  // Seconds
  s: {
    sectionType: 'seconds',
    contentType: 'digit',
    maxLength: 2
  },
  ss: 'seconds'
};
const defaultFormats = {
  year: 'YYYY',
  month: 'MMMM',
  monthShort: 'MMM',
  dayOfMonth: 'D',
  dayOfMonthFull: 'Do',
  weekday: 'dddd',
  weekdayShort: 'dd',
  hours24h: 'HH',
  hours12h: 'hh',
  meridiem: 'A',
  minutes: 'mm',
  seconds: 'ss',
  fullDate: 'll',
  keyboardDate: 'L',
  shortDate: 'MMM D',
  normalDate: 'D MMMM',
  normalDateWithWeekday: 'ddd, MMM D',
  fullTime: 'LT',
  fullTime12h: 'hh:mm A',
  fullTime24h: 'HH:mm',
  keyboardDateTime: 'L LT',
  keyboardDateTime12h: 'L hh:mm A',
  keyboardDateTime24h: 'L HH:mm'
};
const MISSING_UTC_PLUGIN = ['Missing UTC plugin', 'To be able to use UTC or timezones, you have to enable the `utc` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc'].join('\n');
const MISSING_TIMEZONE_PLUGIN = ['Missing timezone plugin', 'To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone'].join('\n');
const withLocale = (dayjs, locale) => !locale ? dayjs : (...args) => dayjs(...args).locale(locale);
/**
 * Based on `@date-io/dayjs`
 *
 * MIT License
 *
 * Copyright (c) 2017 Dmitriy Kovalenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class AdapterDayjs {
  constructor({
    locale: _locale,
    formats
  } = {}) {
    this.isMUIAdapter = true;
    this.isTimezoneCompatible = true;
    this.lib = 'dayjs';
    this.dayjs = void 0;
    this.locale = void 0;
    this.formats = void 0;
    this.escapedCharacters = {
      start: '[',
      end: ']'
    };
    this.formatTokenMap = formatTokenMap;
    this.setLocaleToValue = value => {
      const expectedLocale = this.getCurrentLocaleCode();
      if (expectedLocale === value.locale()) {
        return value;
      }
      return value.locale(expectedLocale);
    };
    this.hasUTCPlugin = () => typeof (dayjs_min_default()).utc !== 'undefined';
    this.hasTimezonePlugin = () => typeof (dayjs_min_default()).tz !== 'undefined';
    this.isSame = (value, comparing, comparisonTemplate) => {
      const comparingInValueTimezone = this.setTimezone(comparing, this.getTimezone(value));
      return value.format(comparisonTemplate) === comparingInValueTimezone.format(comparisonTemplate);
    };
    /**
     * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
     */
    this.cleanTimezone = timezone => {
      switch (timezone) {
        case 'default':
          {
            return undefined;
          }
        case 'system':
          {
            return dayjs_min_default().tz.guess();
          }
        default:
          {
            return timezone;
          }
      }
    };
    this.createSystemDate = value => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const timezone = dayjs_min_default().tz.guess();

        // We can't change the system timezone in the tests
        /* istanbul ignore next */
        if (timezone !== 'UTC') {
          return dayjs_min_default().tz(value, timezone);
        }
        return dayjs_min_default()(value);
      }
      return dayjs_min_default()(value);
    };
    this.createUTCDate = value => {
      /* istanbul ignore next */
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }
      return dayjs_min_default().utc(value);
    };
    this.createTZDate = (value, timezone) => {
      /* istanbul ignore next */
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }

      /* istanbul ignore next */
      if (!this.hasTimezonePlugin()) {
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      const keepLocalTime = value !== undefined && !value.endsWith('Z');
      return dayjs_min_default()(value).tz(this.cleanTimezone(timezone), keepLocalTime);
    };
    this.getLocaleFormats = () => {
      const locales = (dayjs_min_default()).Ls;
      const locale = this.locale || 'en';
      let localeObject = locales[locale];
      if (localeObject === undefined) {
        localeNotFoundWarning();
        localeObject = locales.en;
      }
      return localeObject.formats;
    };
    /**
     * If the new day does not have the same offset as the old one (when switching to summer day time for example),
     * Then dayjs will not automatically adjust the offset (moment does).
     * We have to parse again the value to make sure the `fixOffset` method is applied.
     * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
     */
    this.adjustOffset = value => {
      if (!this.hasTimezonePlugin()) {
        return value;
      }
      const timezone = this.getTimezone(value);
      if (timezone !== 'UTC') {
        const fixedValue = value.tz(this.cleanTimezone(timezone), true);
        // @ts-ignore
        if ((fixedValue.$offset ?? 0) === (value.$offset ?? 0)) {
          return value;
        }
        return fixedValue;
      }
      return value;
    };
    this.date = (value, timezone = 'default') => {
      if (value === null) {
        return null;
      }
      let parsedValue;
      if (timezone === 'UTC') {
        parsedValue = this.createUTCDate(value);
      } else if (timezone === 'system' || timezone === 'default' && !this.hasTimezonePlugin()) {
        parsedValue = this.createSystemDate(value);
      } else {
        parsedValue = this.createTZDate(value, timezone);
      }
      if (this.locale === undefined) {
        return parsedValue;
      }
      return parsedValue.locale(this.locale);
    };
    this.getInvalidDate = () => dayjs_min_default()(new Date('Invalid date'));
    this.getTimezone = value => {
      if (this.hasTimezonePlugin()) {
        // @ts-ignore
        const zone = value.$x?.$timezone;
        if (zone) {
          return zone;
        }
      }
      if (this.hasUTCPlugin() && value.isUTC()) {
        return 'UTC';
      }
      return 'system';
    };
    this.setTimezone = (value, timezone) => {
      if (this.getTimezone(value) === timezone) {
        return value;
      }
      if (timezone === 'UTC') {
        /* istanbul ignore next */
        if (!this.hasUTCPlugin()) {
          throw new Error(MISSING_UTC_PLUGIN);
        }
        return value.utc();
      }

      // We know that we have the UTC plugin.
      // Otherwise, the value timezone would always equal "system".
      // And it would be caught by the first "if" of this method.
      if (timezone === 'system') {
        return value.local();
      }
      if (!this.hasTimezonePlugin()) {
        if (timezone === 'default') {
          return value;
        }

        /* istanbul ignore next */
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      return dayjs_min_default().tz(value, this.cleanTimezone(timezone));
    };
    this.toJsDate = value => {
      return value.toDate();
    };
    this.parse = (value, format) => {
      if (value === '') {
        return null;
      }
      return this.dayjs(value, format, this.locale, true);
    };
    this.getCurrentLocaleCode = () => {
      return this.locale || 'en';
    };
    this.is12HourCycleInCurrentLocale = () => {
      /* istanbul ignore next */
      return /A|a/.test(this.getLocaleFormats().LT || '');
    };
    this.expandFormat = format => {
      const localeFormats = this.getLocaleFormats();

      // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
      const t = formatBis => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
      return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
        const B = b && b.toUpperCase();
        return a || localeFormats[b] || t(localeFormats[B]);
      });
    };
    this.isValid = value => {
      if (value == null) {
        return false;
      }
      return value.isValid();
    };
    this.format = (value, formatKey) => {
      return this.formatByString(value, this.formats[formatKey]);
    };
    this.formatByString = (value, formatString) => {
      return this.dayjs(value).format(formatString);
    };
    this.formatNumber = numberToFormat => {
      return numberToFormat;
    };
    this.isEqual = (value, comparing) => {
      if (value === null && comparing === null) {
        return true;
      }
      if (value === null || comparing === null) {
        return false;
      }
      return value.toDate().getTime() === comparing.toDate().getTime();
    };
    this.isSameYear = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY');
    };
    this.isSameMonth = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY-MM');
    };
    this.isSameDay = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY-MM-DD');
    };
    this.isSameHour = (value, comparing) => {
      return value.isSame(comparing, 'hour');
    };
    this.isAfter = (value, comparing) => {
      return value > comparing;
    };
    this.isAfterYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, 'year');
      }
      return !this.isSameYear(value, comparing) && value.utc() > comparing.utc();
    };
    this.isAfterDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, 'day');
      }
      return !this.isSameDay(value, comparing) && value.utc() > comparing.utc();
    };
    this.isBefore = (value, comparing) => {
      return value < comparing;
    };
    this.isBeforeYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, 'year');
      }
      return !this.isSameYear(value, comparing) && value.utc() < comparing.utc();
    };
    this.isBeforeDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, 'day');
      }
      return !this.isSameDay(value, comparing) && value.utc() < comparing.utc();
    };
    this.isWithinRange = (value, [start, end]) => {
      return value >= start && value <= end;
    };
    this.startOfYear = value => {
      return this.adjustOffset(value.startOf('year'));
    };
    this.startOfMonth = value => {
      return this.adjustOffset(value.startOf('month'));
    };
    this.startOfWeek = value => {
      return this.adjustOffset(value.startOf('week'));
    };
    this.startOfDay = value => {
      return this.adjustOffset(value.startOf('day'));
    };
    this.endOfYear = value => {
      return this.adjustOffset(value.endOf('year'));
    };
    this.endOfMonth = value => {
      return this.adjustOffset(value.endOf('month'));
    };
    this.endOfWeek = value => {
      return this.adjustOffset(value.endOf('week'));
    };
    this.endOfDay = value => {
      return this.adjustOffset(value.endOf('day'));
    };
    this.addYears = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'year') : value.add(amount, 'year'));
    };
    this.addMonths = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'month') : value.add(amount, 'month'));
    };
    this.addWeeks = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'week') : value.add(amount, 'week'));
    };
    this.addDays = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'day') : value.add(amount, 'day'));
    };
    this.addHours = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'hour') : value.add(amount, 'hour'));
    };
    this.addMinutes = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'minute') : value.add(amount, 'minute'));
    };
    this.addSeconds = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'second') : value.add(amount, 'second'));
    };
    this.getYear = value => {
      return value.year();
    };
    this.getMonth = value => {
      return value.month();
    };
    this.getDate = value => {
      return value.date();
    };
    this.getHours = value => {
      return value.hour();
    };
    this.getMinutes = value => {
      return value.minute();
    };
    this.getSeconds = value => {
      return value.second();
    };
    this.getMilliseconds = value => {
      return value.millisecond();
    };
    this.setYear = (value, year) => {
      return this.adjustOffset(value.set('year', year));
    };
    this.setMonth = (value, month) => {
      return this.adjustOffset(value.set('month', month));
    };
    this.setDate = (value, date) => {
      return this.adjustOffset(value.set('date', date));
    };
    this.setHours = (value, hours) => {
      return this.adjustOffset(value.set('hour', hours));
    };
    this.setMinutes = (value, minutes) => {
      return this.adjustOffset(value.set('minute', minutes));
    };
    this.setSeconds = (value, seconds) => {
      return this.adjustOffset(value.set('second', seconds));
    };
    this.setMilliseconds = (value, milliseconds) => {
      return this.adjustOffset(value.set('millisecond', milliseconds));
    };
    this.getDaysInMonth = value => {
      return value.daysInMonth();
    };
    this.getWeekArray = value => {
      const cleanValue = this.setLocaleToValue(value);
      const start = this.startOfWeek(this.startOfMonth(cleanValue));
      const end = this.endOfWeek(this.endOfMonth(cleanValue));
      let count = 0;
      let current = start;
      const nestedWeeks = [];
      while (current < end) {
        const weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = this.addDays(current, 1);
        count += 1;
      }
      return nestedWeeks;
    };
    this.getWeekNumber = value => {
      return value.week();
    };
    this.getYearRange = ([start, end]) => {
      const startDate = this.startOfYear(start);
      const endDate = this.endOfYear(end);
      const years = [];
      let current = startDate;
      while (this.isBefore(current, endDate)) {
        years.push(current);
        current = this.addYears(current, 1);
      }
      return years;
    };
    this.dayjs = withLocale((dayjs_min_default()), _locale);
    this.locale = _locale;
    this.formats = (0,esm_extends/* default */.A)({}, defaultFormats, formats);

    // Moved plugins to the constructor to allow for users to use options on the library
    // for reference: https://github.com/mui/mui-x/pull/11151
    dayjs_min_default().extend((customParseFormat_default()));
  }
  getDayOfWeek(value) {
    return value.day() + 1;
  }
}

/***/ }),

/***/ 5737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ LocalizationProvider)
/* harmony export */ });
/* unused harmony export MuiPickersAdapterContext */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);


const _excluded = ["localeText"];




const MuiPickersAdapterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (false) {}
/**
 * Demos:
 *
 * - [Date format and localization](https://mui.com/x/react-date-pickers/adapters-locale/)
 * - [Calendar systems](https://mui.com/x/react-date-pickers/calendar-systems/)
 * - [Translated components](https://mui.com/x/react-date-pickers/localization/)
 * - [UTC and timezones](https://mui.com/x/react-date-pickers/timezone/)
 *
 * API:
 *
 * - [LocalizationProvider API](https://mui.com/x/api/date-pickers/localization-provider/)
 */
const LocalizationProvider = function LocalizationProvider(inProps) {
  const {
      localeText: inLocaleText
    } = inProps,
    otherInProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(inProps, _excluded);
  const {
    utils: parentUtils,
    localeText: parentLocaleText
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MuiPickersAdapterContext) ?? {
    utils: undefined,
    localeText: undefined
  };
  const props = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: 'MuiLocalizationProvider'
  });
  const {
    children,
    dateAdapter: DateAdapter,
    dateFormats,
    dateLibInstance,
    adapterLocale,
    localeText: themeLocaleText
  } = props;
  const localeText = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const utils = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (!DateAdapter) {
      if (parentUtils) {
        return parentUtils;
      }
      return null;
    }
    const adapter = new DateAdapter({
      locale: adapterLocale,
      formats: dateFormats,
      instance: dateLibInstance
    });
    if (!adapter.isMUIAdapter) {
      throw new Error(['MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`', "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", 'More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation'].join(`\n`));
    }
    return adapter;
  }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentUtils]);
  const defaultDates = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (!utils) {
      return null;
    }
    return {
      minDate: utils.date('1900-01-01T00:00:00.000'),
      maxDate: utils.date('2099-12-31T00:00:00.000')
    };
  }, [utils]);
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      utils,
      defaultDates,
      localeText
    };
  }, [defaultDates, utils, localeText]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MuiPickersAdapterContext.Provider, {
    value: contextValue,
    children: children
  });
};
 false ? 0 : void 0;

/***/ })

}]);