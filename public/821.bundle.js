"use strict";
(self["webpackChunkjob_requirement_search"] = self["webpackChunkjob_requirement_search"] || []).push([[821],{

/***/ 4821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_UserExists)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(4073);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(4111);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8466);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(1848);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(3541);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useIsFocusVisible.js + 1 modules
var useIsFocusVisible = __webpack_require__(873);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(6852);
// EXTERNAL MODULE: ./node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(7553);
// EXTERNAL MODULE: ./node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(7245);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Link/linkClasses.js


function getLinkUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiLink', slot);
}
const linkClasses = (0,generateUtilityClasses/* default */.A)('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
/* harmony default export */ const Link_linkClasses = (linkClasses);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/style.js
var style = __webpack_require__(6481);
// EXTERNAL MODULE: ./node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(771);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Link/getTextDecoration.js


const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};
const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};
const getTextDecoration = ({
  theme,
  ownerState
}) => {
  const transformedColor = transformDeprecatedColors(ownerState.color);
  const color = (0,style/* getPath */.Yn)(theme, `palette.${transformedColor}`, false) || ownerState.color;
  const channelColor = (0,style/* getPath */.Yn)(theme, `palette.${transformedColor}Channel`);
  if ('vars' in theme && channelColor) {
    return `rgba(${channelColor} / 0.4)`;
  }
  return (0,colorManipulator/* alpha */.X4)(color, 0.4);
};
/* harmony default export */ const Link_getTextDecoration = (getTextDecoration);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Link/Link.js
'use client';



const _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];














const useUtilityClasses = ownerState => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ['root', `underline${(0,capitalize/* default */.A)(underline)}`, component === 'button' && 'button', focusVisible && 'focusVisible']
  };
  return (0,composeClasses/* default */.A)(slots, getLinkUtilityClass, classes);
};
const LinkRoot = (0,styled/* default */.Ay)(Typography/* default */.A, {
  name: 'MuiLink',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${(0,capitalize/* default */.A)(ownerState.underline)}`], ownerState.component === 'button' && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  return (0,esm_extends/* default */.A)({}, ownerState.underline === 'none' && {
    textDecoration: 'none'
  }, ownerState.underline === 'hover' && {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }, ownerState.underline === 'always' && (0,esm_extends/* default */.A)({
    textDecoration: 'underline'
  }, ownerState.color !== 'inherit' && {
    textDecorationColor: Link_getTextDecoration({
      theme,
      ownerState
    })
  }, {
    '&:hover': {
      textDecorationColor: 'inherit'
    }
  }), ownerState.component === 'button' && {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },
    [`&.${Link_linkClasses.focusVisible}`]: {
      outline: 'auto'
    }
  });
});
const Link = /*#__PURE__*/react.forwardRef(function Link(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiLink'
  });
  const {
      className,
      color = 'primary',
      component = 'a',
      onBlur,
      onFocus,
      TypographyClasses,
      underline = 'always',
      variant = 'inherit',
      sx
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0,useIsFocusVisible/* default */.A)();
  const [focusVisible, setFocusVisible] = react.useState(false);
  const handlerRef = (0,useForkRef/* default */.A)(ref, focusVisibleRef);
  const handleBlur = event => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = event => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    component,
    focusVisible,
    underline,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(LinkRoot, (0,esm_extends/* default */.A)({
    color: color,
    className: (0,clsx/* default */.A)(classes.root, className),
    classes: TypographyClasses,
    component: component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState: ownerState,
    variant: variant,
    sx: [...(!Object.keys(colorTransformations).includes(color) ? [{
      color
    }] : []), ...(Array.isArray(sx) ? sx : [sx])]
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Link_Link = (Link);
// EXTERNAL MODULE: ./views/components/getters/fetchData.js + 1 modules
var fetchData = __webpack_require__(8510);
;// CONCATENATED MODULE: ./views/components/UserExists.js




const getUser = (0,fetchData/* default */.A)('http://localhost:3000/api/user');
const UserExists = () => {
  const userDetails = getUser.read();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
      variant: "h3",
      children: userDetails[0].name
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
      variant: "body1",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link_Link, {
        href: `mailto:${userDetails[0].email}`,
        children: userDetails[0].email
      })
    }), userDetails[0].links.map(link => /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
      variant: "body1",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link_Link, {
        target: "_blank",
        href: link.href,
        children: link.title
      })
    }, userDetails[0].links.indexOf(link)))]
  });
};
/* harmony default export */ const components_UserExists = (UserExists);

/***/ })

}]);