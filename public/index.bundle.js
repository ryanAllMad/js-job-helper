/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3792:
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ 9266:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(815);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(4073);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(9828);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(8239);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./views/components/Layout/Header.js




const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("header", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(AppBar/* default */.A, {
      position: "sticky",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("nav", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
          container: true,
          spacing: 4,
          component: "ul",
          sx: {
            listStyle: 'none',
            marginTop: '0'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
            item: true,
            component: "li",
            sx: {
              paddingTop: '16px'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* NavLink */.k2, {
              to: "/",
              children: "User Info"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
            item: true,
            component: "li",
            sx: {
              paddingTop: '16px'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* NavLink */.k2, {
              to: "/add-job",
              children: "Add a Job"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
            item: true,
            component: "li",
            sx: {
              paddingTop: '16px'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* NavLink */.k2, {
              to: "/update-qualifications",
              children: "Update Qualifications"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
            item: true,
            component: "li",
            sx: {
              paddingTop: '16px'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* NavLink */.k2, {
              to: "/search-resume",
              children: "Search Resume"
            })
          })]
        })
      })
    })
  });
};
/* harmony default export */ const Layout_Header = (Header);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(538);
;// CONCATENATED MODULE: ./views/components/Layout/MainBody.js




const MainBody = props => {
  const {
    children,
    sx
  } = props;
  const [isClient, setIsClient] = react.useState(false);
  react.useEffect(() => {
    setIsClient(true);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: isClient && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Layout_Header, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("main", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A, {
          sx: {
            padding: '2em',
            position: 'relative',
            maxWidth: '1200px',
            margin: '0 auto',
            ...sx
          },
          elevation: 2,
          children: children
        })
      })]
    })
  });
};
/* harmony default export */ const Layout_MainBody = (MainBody);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(5724);
// EXTERNAL MODULE: ./node_modules/@mui/material/Input/Input.js
var Input = __webpack_require__(7623);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(4433);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(9785);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(779);
;// CONCATENATED MODULE: ./views/components/Blocks/BasicInput.js



const BasicInput = props => {
  const {
    children,
    label,
    id,
    sx,
    labelSx
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.A, {
      sx: {
        ...sx,
        marginTop: '2em'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
        sx: {
          ...labelSx
        },
        htmlFor: id,
        children: label
      }), children]
    })
  });
};
/* harmony default export */ const Blocks_BasicInput = (BasicInput);
// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(6990);
;// CONCATENATED MODULE: ./views/components/Blocks/ContainedButton.js



const ContainedButton = props => {
  const {
    children,
    type,
    onClick,
    sx,
    disabled,
    ariaPressed
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A, {
    "aria-pressed": ariaPressed,
    disabled: disabled,
    type: type,
    onClick: onClick,
    variant: "contained",
    sx: {
      ...sx,
      maxWidth: 250,
      marginTop: '2em',
      marginRight: '1em'
    },
    size: "medium",
    children: children
  });
};
/* harmony default export */ const Blocks_ContainedButton = (ContainedButton);
;// CONCATENATED MODULE: ./views/components/Blocks/UserLinkInputs.js




const UserLinkInputs = props => {
  const {
    titleInput,
    hrefInput,
    deleteOne,
    key
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
      fullWidth: true,
      container: true,
      spacing: 2,
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
        xs: 12,
        md: 4,
        item: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormControl/* default */.A, {
          children: titleInput
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
        xs: 12,
        md: 4,
        item: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormControl/* default */.A, {
          children: hrefInput
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
        xs: 12,
        md: 4,
        item: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          onClick: deleteOne,
          type: "button",
          children: "Delete Link"
        })
      })]
    }, key)
  });
};
/* harmony default export */ const Blocks_UserLinkInputs = (UserLinkInputs);
;// CONCATENATED MODULE: ./views/components/Blocks/ExperienceForm.js





const ExperienceForm = props => {
  const {
    companyNameComp,
    jobTitleComp,
    startDateComp,
    endDateComp,
    deleteOne,
    key,
    idComp,
    idTitle,
    idStart,
    idEnd
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.A, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
      id: idComp,
      label: "Company Name",
      children: companyNameComp
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
      id: idTitle,
      label: "Job Title",
      children: jobTitleComp
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
      sx: {
        marginTop: '50px'
      },
      htmlFor: idStart,
      children: "Start Date:"
    }), startDateComp, /*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
      sx: {
        marginTop: '50px'
      },
      htmlFor: idEnd,
      children: "End Date:"
    }), endDateComp, /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
      fullWidth: true,
      container: true,
      spacing: 2,
      alignItems: "center",
      justifyContent: "center",
      sx: {
        marginTop: '0'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          onClick: deleteOne,
          type: "button",
          children: "Delete Experience"
        })
      })
    })]
  }, key);
};
/* harmony default export */ const Blocks_ExperienceForm = (ExperienceForm);
;// CONCATENATED MODULE: ./views/components/getters/wrapPromise.js
const wrapPromise = promise => {
  let status = 'pending';
  let response;
  const suspender = promise.then(res => {
    status = 'success';
    response = res;
  }, err => {
    status = 'error';
    response = err;
  });
  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response;
      default:
        return response;
    }
  };
  return {
    read
  };
};
/* harmony default export */ const getters_wrapPromise = (wrapPromise);
;// CONCATENATED MODULE: ./views/components/getters/fetchData.js

const fetchData = url => {
  const promise = fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(res => res.data);
  return getters_wrapPromise(promise);
};
/* harmony default export */ const getters_fetchData = (fetchData);
;// CONCATENATED MODULE: ./views/components/Blocks/EditUserComponent.js









const getUser = getters_fetchData('http://localhost:3000/api/user');
const EditUserComponent = () => {
  const userDetails = getUser.read();
  const allSavedLinks = userDetails && userDetails.length > 0 ? userDetails[0].links : null;
  const allSavedExp = userDetails && userDetails.length > 0 ? userDetails[0].experience : null;
  const {
    handleSubmit,
    control,
    formState: {
      isValid
    }
  } = (0,index_esm/* useForm */.mN)();
  const [linksArr, setLinksArr] = react.useState(allSavedLinks);
  const [newLinksArr, setNewLinksArr] = react.useState([]);
  const [expArr, setExpArr] = react.useState(allSavedExp);
  const [newExpsArr, setNewExpsArr] = react.useState([]);
  const addMoreLinks = () => {
    setNewLinksArr(prev => prev.concat(prev.length));
  };
  const deleteNewLinks = id => {
    if (newLinksArr.length === 1) {
      setNewLinksArr([]);
    } else {
      setNewLinksArr(prev => prev.splice(id, 1));
    }
  };
  const addMoreExp = () => {
    setNewExpsArr(prev => prev.concat(prev.length));
  };
  const deleteNewExp = id => {
    if (newExpsArr.length === 1) {
      setNewExpsArr([]);
    } else {
      setNewExpsArr(prev => prev.splice(id, 1));
    }
  };
  const deleteThisLink = async id => {
    const promise = await fetch(`http://localhost:3000/api/user/links/${id}/${userDetails[0]._id}`, {
      method: 'DELETE'
    });
    const newLinksArr = userDetails[0].links.filter(link => link._id !== id);
    setLinksArr(newLinksArr);
    return promise;
  };
  const deleteThisExp = async id => {
    const promise = await fetch(`http://localhost:3000/api/user/experience/${id}/${userDetails[0]._id}`, {
      method: 'DELETE'
    });
    const newExpArr = userDetails[0].experience.filter(exp => exp._id !== id);
    setExpArr(newExpArr);
    return promise;
  };
  const parseDate = date => {
    const dateFormat = new Date(date);
    const year = dateFormat.getFullYear();
    const month = dateFormat.toLocaleString('en-US', {
      month: '2-digit'
    });
    const day = dateFormat.toLocaleString('en-US', {
      day: '2-digit'
    });
    return `${year}-${month}-${day}`;
  };
  const getEditedLinkData = data => {
    let linksArr = [];
    if (!allSavedLinks || allSavedLinks.length === 0) {
      return;
    }
    const dataExist = allSavedLinks.filter(l => l._id);
    const linkIds = dataExist.map(d => d._id);
    linkIds.forEach(link => {
      let obj = {};
      const linkTitle = `link_title_${link}`;
      const linkHref = `link_href_${link}`;
      if (linkTitle) {
        obj['title'] = data[linkTitle];
      }
      if (linkHref) {
        obj['href'] = data[linkHref];
      }
      obj['_id'] = link;
      linksArr.push(obj);
    });
    return linksArr;
  };
  const getNewLinkData = data => {
    let linksArr = [];
    const dataKeys = Object.keys(data);
    const linkData = dataKeys.filter(d => d.includes('link_title'));
    linkData.forEach((key, idx) => {
      let obj = {};
      const linkTitle = `link_title_${idx}`;
      const linkHref = `link_href_${idx}`;
      if (!linkTitle) {
        return;
      }
      if (linkTitle) {
        obj['title'] = data[linkTitle];
      }
      if (linkHref) {
        obj['href'] = data[linkHref];
      }
      linksArr.push(obj);
    });
    return linksArr;
  };
  const getEditedExperienceData = data => {
    let expArr = [];
    if (!allSavedExp || allSavedExp.length === 0) {
      return;
    }
    const dataExist = allSavedExp.filter(l => l._id);
    const expIds = dataExist.map(d => d._id);
    expIds.forEach(exp => {
      let obj = {};
      const expCompany = `company_name_${exp}`;
      const expTitle = `job_title_${exp}`;
      const expStart = `start_date_${exp}`;
      const expEnd = `end_date_${exp}`;
      if (expCompany) {
        obj['company'] = data[expCompany];
      }
      if (expTitle) {
        obj['title'] = data[expTitle];
      }
      if (expStart) {
        obj['year_started'] = data[expStart];
      }
      if (expEnd) {
        obj['year_ended'] = data[expEnd];
      }
      obj['_id'] = exp;
      expArr.push(obj);
    });
    return expArr;
  };
  const getNewExperienceData = data => {
    let expArr = [];
    const dataKeys = Object.keys(data);
    const expData = dataKeys.filter(d => d.includes('job_title_'));
    expData.forEach((key, idx) => {
      let obj = {};
      const expCompany = `company_name_${idx}`;
      if (!expCompany) {
        return;
      }
      const expTitle = `job_title_${idx}`;
      const expStart = `start_date_${idx}`;
      const expEnd = `end_date_${idx}`;
      if (expCompany) {
        obj['company'] = data[expCompany];
      }
      if (expTitle) {
        obj['title'] = data[expTitle];
      }
      if (expStart) {
        obj['year_started'] = data[expStart];
      }
      if (expEnd) {
        obj['year_ended'] = data[expEnd];
      }
      expArr.push(obj);
    });
    return expArr;
  };
  const handleSave = async data => {
    let validNewLinks = [];
    let validNewExp = [];
    let editedLinks = getEditedLinkData(data);
    const newLinks = getNewLinkData(data);
    let editedExp = getEditedExperienceData(data);
    const newExp = getNewExperienceData(data);
    if (newLinks && newLinks.length > 0) {
      validNewLinks = newLinks.filter(li => li.title !== undefined);
      if (editedLinks && editedLinks.length > 0) {
        validNewLinks.forEach(link => editedLinks.push(link));
      } else {
        editedLinks = validNewLinks;
      }
    }
    if (newExp && newExp.length > 0) {
      validNewExp = newExp.filter(ex => ex.title !== undefined);
      if (editedExp && editedExp.length > 0) {
        validNewExp.forEach(exp => editedExp.push(exp));
      } else {
        editedExp = validNewExp;
      }
    }
    const postUserName = await fetch(`http://localhost:3000/api/user/${userDetails[0]._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        $set: {
          links: editedLinks,
          experience: editedExp
        }
      })
    });
    return postUserName.json();
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit(data => handleSave(data)),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.A, {
        className: "user-form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
          id: "full-name",
          label: "Full Name",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: "fullName",
            rules: {
              required: true
            },
            render: _ref => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: "full-name"
              });
            },
            defaultValue: userDetails[0].name
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
          id: "email",
          label: "Email",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: "email",
            rules: {
              required: true
            },
            render: _ref2 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref2;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: "email"
              });
            },
            defaultValue: userDetails[0].email
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "body2",
          children: "Add Links"
        }), linksArr.length > 0 && linksArr.map(link => /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_UserLinkInputs, {
          defaultHref: link.href,
          deleteOne: () => deleteThisLink(link._id),
          titleInput: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
              htmlFor: `title-${link._id}`,
              children: "Title"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
              control: control,
              name: `link_title_${link._id}`,
              rules: {
                required: true
              },
              render: _ref3 => {
                let {
                  field: {
                    onChange,
                    onBlur,
                    value,
                    ref
                  }
                } = _ref3;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                  inputRef: ref,
                  type: "text",
                  id: `title-${link._id}`
                });
              },
              defaultValue: link.title
            })]
          }),
          hrefInput: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
              htmlFor: `href-${link._id}`,
              children: "Href"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
              control: control,
              name: `link_href_${link._id}`,
              rules: {
                required: true
              },
              render: _ref4 => {
                let {
                  field: {
                    onChange,
                    onBlur,
                    value,
                    ref
                  }
                } = _ref4;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                  inputRef: ref,
                  type: "text",
                  id: `href-${link._id}`
                });
              },
              defaultValue: link.href
            })]
          })
        }, link._id)), newLinksArr.length > 0 && newLinksArr.map(link => /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_UserLinkInputs, {
          deleteOne: () => deleteNewLinks(newLinksArr.indexOf(link)),
          titleInput: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
              htmlFor: `title-${newLinksArr.indexOf(link)}`,
              children: "Title"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
              control: control,
              name: `link_title_${newLinksArr.indexOf(link)}`,
              rules: {
                required: true
              },
              render: _ref5 => {
                let {
                  field: {
                    onChange,
                    onBlur,
                    value,
                    ref
                  }
                } = _ref5;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                  inputRef: ref,
                  type: "text",
                  id: `title-${newLinksArr.indexOf(link)}`
                });
              },
              defaultValue: ""
            })]
          }),
          hrefInput: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
              htmlFor: `href-${newLinksArr.indexOf(link)}`,
              children: "Href"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
              control: control,
              name: `link_href_${newLinksArr.indexOf(link)}`,
              rules: {
                required: true
              },
              render: _ref6 => {
                let {
                  field: {
                    onChange,
                    onBlur,
                    value,
                    ref
                  }
                } = _ref6;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                  inputRef: ref,
                  type: "text",
                  id: `href-${newLinksArr.indexOf(link)}`
                });
              },
              defaultValue: ""
            })]
          })
        }, newLinksArr.indexOf(link))), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          type: "button",
          onClick: addMoreLinks,
          children: "Add Links?"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.A, {
        className: "user-form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h2",
          children: "Work Experience"
        }), expArr.length > 0 && expArr.map(exp => /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ExperienceForm, {
          idComp: `company-name-${exp._id}`,
          idTitle: `job-title-${exp._id}`,
          idStart: `start-${exp._id}`,
          idEnd: `end-${exp._id}`,
          deleteOne: () => deleteThisExp(exp._id),
          companyNameComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `company_name_${exp._id}`,
            rules: {
              required: 'Please enter the company name'
            },
            render: _ref7 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref7;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: `company-name-${exp._id}`
              });
            },
            defaultValue: exp.company
          }),
          jobTitleComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `job_title_${exp._id}`,
            rules: {
              required: 'Please enter the position title you held in this role'
            },
            render: _ref8 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref8;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: `job-title-${exp._id}`
              });
            },
            defaultValue: exp.title
          }),
          startDateComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `start_date_${exp._id}`,
            rules: {
              required: 'Please enter the first date you started in this position'
            },
            render: _ref9 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  ref,
                  value
                }
              } = _ref9;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                type: "date",
                sx: {
                  maxWidth: '200px'
                },
                inputRef: ref,
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                id: `start-${exp._id}`
              });
            },
            defaultValue: parseDate(exp.year_started)
          }),
          endDateComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `end_date_${exp._id}`,
            rules: {
              required: 'Please Enter the date of your last day in this position'
            },
            render: _ref10 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  ref,
                  value
                }
              } = _ref10;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                type: "date",
                sx: {
                  maxWidth: '200px'
                },
                onChange: onChange,
                onBlur: onBlur,
                inputRef: ref,
                value: value,
                id: `end-${exp._id}`
              });
            },
            defaultValue: parseDate(exp.year_ended)
          })
        }, exp._id)), newExpsArr.length > 0 && newExpsArr.map(exp => /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ExperienceForm, {
          idComp: `company-name-${newExpsArr.indexOf(exp)}`,
          idTitle: `job-title-${newExpsArr.indexOf(exp)}`,
          idStart: `start-${newExpsArr.indexOf(exp)}`,
          idEnd: `end-${newExpsArr.indexOf(exp)}`,
          deleteOne: () => deleteNewExp(newExpsArr.indexOf(exp)),
          companyNameComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `company_name_${newExpsArr.indexOf(exp)}`,
            rules: {
              required: 'Please enter the company name'
            },
            render: _ref11 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref11;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: `company-name-${newExpsArr.indexOf(exp)}`
              });
            },
            defaultValue: ""
          }),
          jobTitleComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `job_title_${newExpsArr.indexOf(exp)}`,
            rules: {
              required: 'Please enter the position title you held in this role'
            },
            render: _ref12 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref12;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: `job-title-${newExpsArr.indexOf(exp)}`
              });
            },
            defaultValue: ""
          }),
          startDateComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `start_date_${newExpsArr.indexOf(exp)}`,
            rules: {
              required: 'Please enter the first date you started in this position'
            },
            render: _ref13 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  ref,
                  value
                }
              } = _ref13;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                type: "date",
                sx: {
                  maxWidth: '200px'
                },
                inputRef: ref,
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                id: `start-${newExpsArr.indexOf(exp)}`
              });
            },
            defaultValue: ""
          }),
          endDateComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `end_date_${newExpsArr.indexOf(exp)}`,
            rules: {
              required: 'Please Enter the date of your last day in this position'
            },
            render: _ref14 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  ref,
                  value
                }
              } = _ref14;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                type: "date",
                sx: {
                  maxWidth: '200px'
                },
                onChange: onChange,
                onBlur: onBlur,
                inputRef: ref,
                value: value,
                id: `end-${newExpsArr.indexOf(exp)}`
              });
            },
            defaultValue: ""
          })
        }, newExpsArr.indexOf(exp)))]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.A, {
        className: "user-form-group",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          onClick: addMoreExp,
          type: "button",
          sx: {
            marginBottom: '2em !important'
          },
          children: "Add Experience?"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.A, {
        className: "user-form-group",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          disabled: !isValid,
          type: "submit",
          sx: {
            marginBottom: '2em !important'
          },
          children: "Save"
        })
      })]
    })
  });
};
/* harmony default export */ const Blocks_EditUserComponent = (EditUserComponent);
;// CONCATENATED MODULE: ./views/components/Blocks/CreateUserComponent.js








const CreateUserComponent = () => {
  const {
    handleSubmit,
    control,
    formState: {
      isValid
    }
  } = (0,index_esm/* useForm */.mN)();
  const [newLinksArr, setNewLinksArr] = react.useState([]);
  const [newExpsArr, setNewExpsArr] = react.useState([]);
  const addMoreLinks = () => {
    setNewLinksArr(prev => prev.concat(prev.length));
  };
  const deleteNewLinks = id => {
    if (newLinksArr.length === 1) {
      setNewLinksArr([]);
    } else {
      setNewLinksArr(prev => prev.splice(id, 1));
    }
  };
  const addMoreExp = () => {
    setNewExpsArr(prev => prev.concat(prev.length));
  };
  const deleteNewExp = id => {
    if (newExpsArr.length === 1) {
      setNewExpsArr([]);
    } else {
      setNewExpsArr(prev => prev.splice(id, 1));
    }
  };
  const getNewLinkData = data => {
    let linksArr = [];
    const dataKeys = Object.keys(data);
    const linkData = dataKeys.filter(d => d.includes('link_title'));
    linkData.forEach((key, idx) => {
      let obj = {};
      const linkTitle = `link_title_${idx}`;
      const linkHref = `link_href_${idx}`;
      if (linkTitle) {
        obj['title'] = data[linkTitle];
      }
      if (linkHref) {
        obj['href'] = data[linkHref];
      }
      linksArr.push(obj);
    });
    return linksArr;
  };
  const getNewExperienceData = data => {
    let expArr = [];
    const dataKeys = Object.keys(data);
    const expData = dataKeys.filter(d => d.includes('job_title_'));
    expData.forEach((key, idx) => {
      let obj = {};
      const expCompany = `company_name_${idx}`;
      const expTitle = `job_title_${idx}`;
      const expStart = `start_date_${idx}`;
      const expEnd = `end_date_${idx}`;
      if (expCompany) {
        obj['company'] = data[expCompany];
      }
      if (expTitle) {
        obj['title'] = data[expTitle];
      }
      if (expStart) {
        obj['year_started'] = data[expStart];
      }
      if (expEnd) {
        obj['year_ended'] = data[expEnd];
      }
      expArr.push(obj);
    });
    return expArr;
  };
  const handleSave = async data => {
    const newLinks = getNewLinkData(data);
    const newExp = getNewExperienceData(data);
    const postUserName = await fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        links: newLinks,
        experience: newExp
      })
    });
    return postUserName.json();
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit(data => handleSave(data)),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.A, {
        className: "user-form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
          id: "full-name",
          label: "Full Name",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: "fullName",
            rules: {
              required: true
            },
            render: _ref => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: "full-name"
              });
            },
            defaultValue: ""
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
          id: "email",
          label: "Email",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: "email",
            rules: {
              required: true
            },
            render: _ref2 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref2;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: "email"
              });
            },
            defaultValue: ""
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h2",
          children: "Add Links"
        }), newLinksArr.length > 0 && newLinksArr.map(link => /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_UserLinkInputs, {
          deleteOne: () => deleteNewLinks(newLinksArr.indexOf(link)),
          titleInput: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
              htmlFor: `title-${newLinksArr.indexOf(link)}`,
              children: "Title"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
              control: control,
              name: `link_title_${newLinksArr.indexOf(link)}`,
              rules: {
                required: true
              },
              render: _ref3 => {
                let {
                  field: {
                    onChange,
                    onBlur,
                    value,
                    ref
                  }
                } = _ref3;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                  inputRef: ref,
                  type: "text",
                  id: `title-${newLinksArr.indexOf(link)}`
                });
              },
              defaultValue: ""
            })]
          }),
          hrefInput: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
              htmlFor: `href-${newLinksArr.indexOf(link)}`,
              children: "Href"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
              control: control,
              name: `link_href_${newLinksArr.indexOf(link)}`,
              rules: {
                required: true
              },
              render: _ref4 => {
                let {
                  field: {
                    onChange,
                    onBlur,
                    value,
                    ref
                  }
                } = _ref4;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                  inputRef: ref,
                  type: "text",
                  id: `href-${newLinksArr.indexOf(link)}`
                });
              },
              defaultValue: ""
            })]
          })
        }, newLinksArr.indexOf(link))), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          type: "button",
          onClick: addMoreLinks,
          children: "Add Links?"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.A, {
        className: "user-form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h2",
          children: "Work Experience"
        }), newExpsArr.length > 0 && newExpsArr.map(exp => /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ExperienceForm, {
          idComp: `company-name-${newExpsArr.indexOf(exp)}`,
          idTitle: `job-title-${newExpsArr.indexOf(exp)}`,
          idStart: `start-${newExpsArr.indexOf(exp)}`,
          idEnd: `end-${newExpsArr.indexOf(exp)}`,
          deleteOne: () => deleteNewExp(newExpsArr.indexOf(exp)),
          companyNameComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `company_name_${newExpsArr.indexOf(exp)}`,
            rules: {
              required: 'Please enter the company name'
            },
            render: _ref5 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref5;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: `company-name-${newExpsArr.indexOf(exp)}`
              });
            },
            defaultValue: ""
          }),
          jobTitleComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `job_title_${newExpsArr.indexOf(exp)}`,
            rules: {
              required: 'Please enter the position title you held in this role'
            },
            render: _ref6 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref6;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                inputRef: ref,
                type: "text",
                id: `job-title-${newExpsArr.indexOf(exp)}`
              });
            },
            defaultValue: ""
          }),
          startDateComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `start_date_${newExpsArr.indexOf(exp)}`,
            rules: {
              required: 'Please enter the first date you started in this position'
            },
            render: _ref7 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  ref,
                  value
                }
              } = _ref7;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                sx: {
                  maxWidth: '200px'
                },
                type: "date",
                inputRef: ref,
                onChange: onChange,
                onBlur: onBlur,
                value: value,
                id: `start-${newExpsArr.indexOf(exp)}`
              });
            },
            defaultValue: ""
          }),
          endDateComp: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: control,
            name: `end_date_${newExpsArr.indexOf(exp)}`,
            rules: {
              required: 'Please Enter the date of your last day in this position'
            },
            render: _ref8 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  ref,
                  value
                }
              } = _ref8;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                type: "date",
                sx: {
                  maxWidth: '200px'
                },
                onChange: onChange,
                onBlur: onBlur,
                inputRef: ref,
                value: value,
                id: `end-${newExpsArr.indexOf(exp)}`
              });
            },
            defaultValue: ""
          })
        }, newExpsArr.indexOf(exp)))]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.A, {
        className: "user-form-group",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          onClick: addMoreExp,
          type: "button",
          sx: {
            marginBottom: '2em !important'
          },
          children: "Add Experience?"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormGroup/* default */.A, {
        className: "user-form-group",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          disabled: !isValid,
          type: "submit",
          sx: {
            marginBottom: '2em !important'
          },
          children: "Save"
        })
      })]
    })
  });
};
/* harmony default export */ const Blocks_CreateUserComponent = (CreateUserComponent);
;// CONCATENATED MODULE: ./views/components/Views/UserLanding.js







const UserLanding_getUser = getters_fetchData(`http://localhost:3000/api/user`);
const UserLanding = () => {
  const userExists = UserLanding_getUser.read();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Layout_MainBody, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h1",
          children: "Your Info"
        }), userExists && userExists.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_EditUserComponent, {}) : /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_CreateUserComponent, {})]
      })
    })
  });
};
/* harmony default export */ const Views_UserLanding = (UserLanding);
// EXTERNAL MODULE: ./node_modules/@mui/material/Autocomplete/Autocomplete.js + 8 modules
var Autocomplete = __webpack_require__(6732);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 20 modules
var TextField = __webpack_require__(3176);
// EXTERNAL MODULE: ./node_modules/@mui/base/useAutocomplete/useAutocomplete.js
var useAutocomplete = __webpack_require__(5167);
;// CONCATENATED MODULE: ./views/components/Blocks/AddJobPost.js





const AddJobPost = props => {
  const {
    key,
    onSubmit,
    jobTitleInput,
    companyNameInput,
    jobFunctionInput,
    dateAppliedInput,
    submitButtonState,
    submitButtonText
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("form", {
      onSubmit: onSubmit,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h2",
          id: "job-post-form-heading",
          children: "Job You're Applying to"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
          label: "Job Title",
          id: "job-title",
          children: jobTitleInput
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
          label: "Company name",
          id: "company",
          children: companyNameInput
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
          label: "Job Function",
          id: "job-function",
          children: jobFunctionInput
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
          label: "Date Applied",
          id: "date-applied",
          labelSx: {
            marginTop: '50px'
          },
          children: dateAppliedInput
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          disabled: submitButtonState,
          type: "submit",
          children: submitButtonText
        })]
      })
    }, key)
  });
};
/* harmony default export */ const Blocks_AddJobPost = (AddJobPost);
// EXTERNAL MODULE: ./node_modules/@mui/material/Link/Link.js + 2 modules
var Link = __webpack_require__(5001);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(9799);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(2794);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 1 modules
var Box = __webpack_require__(8161);
// EXTERNAL MODULE: ./node_modules/@mui/x-charts/esm/Gauge/GaugeContainer.js + 9 modules
var GaugeContainer = __webpack_require__(6572);
// EXTERNAL MODULE: ./node_modules/@mui/x-charts/esm/Gauge/GaugeReferenceArc.js
var GaugeReferenceArc = __webpack_require__(4923);
// EXTERNAL MODULE: ./node_modules/@mui/x-charts/esm/Gauge/GaugeValueArc.js
var GaugeValueArc = __webpack_require__(1667);
;// CONCATENATED MODULE: ./views/components/Blocks/Guage.js




const Guage = props => {
  const {
    value
  } = props;
  const [color, setColor] = react.useState('#aa2e25');
  react.useEffect(() => {
    if (value > 70) {
      setColor('#357a38');
    } else {
      setColor('#aa2e25');
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Box/* default */.A, {
      sx: {
        position: 'absolute',
        width: '200px',
        height: '200px',
        top: 0,
        right: 0,
        zIndex: 2
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(GaugeContainer/* GaugeContainer */.r, {
        value: value,
        valueMax: 100,
        sx: {
          '& svg path:last-of-type': {
            fill: color
          }
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GaugeReferenceArc/* GaugeReferenceArc */.z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(GaugeValueArc/* GaugeValueArc */.D, {})]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
        sx: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 'bold',
          color: color
        },
        variant: "body1",
        children: value
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
        sx: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, 25%)',
          fontWeight: 'bold',
          color: color
        },
        variant: "body1",
        children: "Job Match"
      })]
    })
  });
};
/* harmony default export */ const Blocks_Guage = (Guage);
;// CONCATENATED MODULE: ./views/components/Blocks/PositionView.js





const PositionView_getUser = getters_fetchData('http://localhost:3000/api/user');
const PositionView = props => {
  const {
    jobTitle,
    jobFunction,
    requirements,
    guageValue
  } = props;
  const userDetails = PositionView_getUser.read();
  const [firstReqs, setFirstReqs] = react.useState();
  const [nextReqs, setNextReqs] = react.useState();
  const resumeRef = react.useRef();
  react.useEffect(() => {
    if (requirements && requirements.length > 0) {
      const expMath = Math.round(requirements.length / userDetails[0].experience.length) + 1;
      setFirstReqs(requirements.filter((req, idx) => idx < expMath));
      setNextReqs(requirements.filter((req, idx) => idx >= expMath));
    }
  }, [requirements]);
  const writeToClipboard = async () => {
    const thisResume = resumeRef.current.innerText;
    try {
      await navigator.clipboard.writeText(thisResume);
    } catch (error) {
      console.log(error.message);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A, {
      variant: "contained",
      onClick: writeToClipboard,
      children: "\u2398 Copy To clipboard"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Paper/* default */.A, {
      sx: {
        padding: '2em',
        paddingTop: '200px',
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#f3ebeb'
      },
      elevation: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_Guage, {
        value: guageValue
      }), userDetails && userDetails.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        ref: resumeRef,
        id: "resume",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h1",
          children: userDetails[0].name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h2",
          children: jobTitle
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          children: jobFunction
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "body1",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A, {
            href: `mailto:${userDetails[0].email}`,
            children: userDetails[0].email
          })
        }), userDetails[0].links.map(link => /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "body1",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A, {
            target: "_blank",
            href: link.href,
            children: link.title
          })
        }, userDetails[0].links.indexOf(link))), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h2",
          children: "Experience"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h3",
          children: userDetails[0].experience[0].title
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h4",
          children: userDetails[0].experience[0].company
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.A, {
          children: ["From: ", userDetails[0].experience[0].year_started, " - To:", ' ', userDetails[0].experience[0].year_ended]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(List/* default */.A, {
          children: requirements && requirements.length > 0 && firstReqs && firstReqs.map(req => /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
            children: req.res_content
          }, req._id))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h3",
          children: userDetails[0].experience[1].title
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h4",
          children: userDetails[0].experience[1].company
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.A, {
          children: ["From: ", userDetails[0].experience[1].year_started, " - To:", ' ', userDetails[0].experience[1].year_ended]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(List/* default */.A, {
          children: requirements && requirements.length > 0 && nextReqs && nextReqs.map(req => /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
            children: req.res_content
          }, req._id))
        })]
      })]
    })]
  });
};
/* harmony default export */ const Blocks_PositionView = (PositionView);
;// CONCATENATED MODULE: ./views/components/Blocks/Resume.js




const Resume = props => {
  const {
    fetchUrl
  } = props;
  const [job, setJob] = react.useState({});
  const [value, setValue] = react.useState(0);
  const getJob = async () => {
    try {
      const reqPromise = await fetch(fetchUrl, {
        method: 'GET'
      }).then(res => res.json()).then(res => {
        if (res.status === 'success') {
          if (!res.data) {
            console.log('no data');
          }
          return res.data;
        } else {
          console.log(res.status);
        }
      });
      return reqPromise;
    } catch (err) {
      console.log(err);
    }
  };
  react.useEffect(() => {
    if (fetchUrl) {
      getJob().then(res => {
        setJob(res[0]);
        const allRequirements = [];
        const allQualifications = [];
        res[0].requirements.forEach(req => allRequirements.push(req.req_title));
        res[0].requirements.forEach(req => {
          if (req.res_content && (req.res_content !== "" || req.res_content !== " ")) {
            allQualifications.push(req.res_content);
          }
        });
        const guage = Math.round(allQualifications.length / allRequirements.length * 100);
        setValue(guage);
      });
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
      spacing: 2,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
        variant: "h2",
        children: "Resume"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_PositionView, {
        jobTitle: job.job_title,
        jobFunction: job.job_function,
        requirements: job.requirements,
        guageValue: value
      })]
    })
  });
};
/* harmony default export */ const Blocks_Resume = (Resume);
// EXTERNAL MODULE: ./node_modules/@mui/material/LinearProgress/LinearProgress.js + 1 modules
var LinearProgress = __webpack_require__(7458);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormHelperText/FormHelperText.js + 1 modules
var FormHelperText = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 2 modules
var Dialog = __webpack_require__(643);
;// CONCATENATED MODULE: ./views/components/Blocks/ConfirmationBox.js




const ConfirmationBox = props => {
  const {
    open,
    handleClose,
    handleSubmit
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Dialog/* default */.A, {
    open: open,
    onClose: handleClose,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A, {
      sx: {
        padding: '2em'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
          children: "Did you save all of the requirements?"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          children: "Be sure you saved all of the requirements for the job post before moving forward."
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
          direction: "row",
          justifyContent: "center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
            onClick: handleSubmit,
            type: "submit",
            children: "Yes! Save and move on"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
            sx: {
              backgroundColor: '#ba000d',
              '&:hover': {
                backgroundColor: '#e72d28'
              }
            },
            onClick: handleClose,
            type: "button",
            children: "No! Go back"
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const Blocks_ConfirmationBox = (ConfirmationBox);
;// CONCATENATED MODULE: ./views/components/Blocks/AddRequirements.js





const AddRequirements = props => {
  const {
    progress,
    key,
    onSubmit,
    reqDisableState,
    children
  } = props;
  const [open, setOpen] = react.useState(false);
  const handleSubmit = () => {
    onSubmit();
    setOpen(false);
  };
  const openDialog = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(AppBar/* default */.A, {
      sx: {
        backgroundColor: '#fff',
        color: 'rgb(16 73 129)',
        boxShadow: 'none'
      },
      position: "sticky",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
          children: "Current Resume Status:"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgress/* default */.A, {
        variant: "determinate",
        value: progress
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("form", {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h2",
          id: "requirements",
          children: "Requirements"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.A, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A, {
            sx: {
              marginTop: '50px'
            },
            htmlFor: "enter-requirements",
            children: "Input Each Job Requirement & Nice to Have's"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperText/* default */.A, {
            id: "enter-requirements",
            children: "Enter the keywords for each job requirement. (Example: 'Documenting codebase'...) If a requirement exists in the dropdown that is similar to one in the job post, select the one that already exists. It's important to input ALL requirements even if you don't have those requirements. This will help your Job Match meter give you an accurate reading."
          }), children]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
          disabled: reqDisableState,
          onClick: openDialog,
          type: "button",
          children: "Save All"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ConfirmationBox, {
          open: open,
          handleClose: handleClose,
          handleSubmit: handleSubmit
        })]
      })
    }, key)]
  });
};
/* harmony default export */ const Blocks_AddRequirements = (AddRequirements);
;// CONCATENATED MODULE: ./views/components/Blocks/AddQualification.js





const AddQualification = props => {
  const {
    key,
    onSubmit,
    onMissing,
    thisReq,
    qualificationDesc,
    addButtonText,
    removeButtonText,
    addButtonState,
    addPessedButtonState,
    removePressedButtonState,
    children
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      style: {
        display: 'flex',
        flexFlow: 'row wrap'
      },
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h2",
          id: "qualifications",
          children: "Qualifications"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperText/* default */.A, {
          id: "add-response",
          children: qualificationDesc
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_BasicInput, {
        sx: {
          width: '-webkit-fill-available',
          paddingRight: '15px'
        },
        label: `Add qualifications for: ${thisReq}`,
        id: "add-response",
        children: children
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
        sx: {
          marginTop: '1em'
        },
        type: "submit",
        disabled: addButtonState,
        ariaPressed: addPessedButtonState,
        children: addButtonText
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
        sx: {
          marginTop: '1em',
          backgroundColor: '#ba000d',
          '&:hover': {
            backgroundColor: '#e72d28'
          }
        },
        type: "button",
        ariaPressed: removePressedButtonState,
        onClick: onMissing,
        children: removeButtonText
      })]
    }, key)
  });
};
/* harmony default export */ const Blocks_AddQualification = (AddQualification);
;// CONCATENATED MODULE: ./views/components/Blocks/JobForm.js











const getRequirements = getters_fetchData('http://localhost:3000/api/requirements');
const filter = (0,useAutocomplete/* createFilterOptions */.Z)();
const JobForm = props => {
  const {
    createJob,
    saveJobUrl,
    renderTags,
    defaultValueReqs,
    defaultValueJobTitle,
    defaultValueCompName,
    defaultValueJobFunc,
    defaultValueDateApplied,
    submitButtonText,
    onSaveJob
  } = props;
  const {
    control,
    handleSubmit,
    formState: {
      isValid
    }
  } = (0,index_esm/* useForm */.mN)();
  const {
    control: controlReq,
    handleSubmit: handleSubmitRequirements,
    formState: {
      isSubmitSuccessful
    }
  } = (0,index_esm/* useForm */.mN)();
  const {
    control: controlRes,
    handleSubmit: handleSubmitResponses,
    reset,
    formState: {
      isValid: qualsValid
    }
  } = (0,index_esm/* useForm */.mN)();
  const [reqIds, setReqIds] = react.useState(null);
  const [reqTitles, setReqTitles] = react.useState([]);
  const [responseState, setResponseState] = react.useState(false);
  const [progress, setProgress] = react.useState(0);
  const [requirementsArray, setRequirementsArray] = react.useState([]);
  const [reqDisableState, setReqDisableState] = react.useState(false);
  const [jobDisableState, setJobDisableState] = react.useState(false);
  const [resumeLocation, setResumeLocation] = react.useState('');
  const [addQualState, setAddQualState] = react.useState(false);
  const [remQualState, setRemQualState] = react.useState(false);
  const theRequirements = getRequirements.read();
  const hasRequirements = theRequirements.length > 0 ? theRequirements : null;
  const noMoreRequirements = react.useMemo(() => requirementsArray.length === 0, [requirementsArray]);
  const getRequirementsUpdated = async () => {
    try {
      const reqPromise = await fetch('http://localhost:3000/api/requirements/', {
        method: 'GET'
      }).then(res => res.json()).then(res => {
        if (res.status === 'success') {
          if (!res.data) {
            console.log('no data');
          }
          return res.data;
        } else {
          console.log(res.status);
        }
      });
      return reqPromise;
    } catch (err) {
      console.log(err);
    }
  };
  react.useEffect(() => {
    if (isSubmitSuccessful) {
      getRequirementsUpdated().then(res => {
        const newIds = [];
        const newReqs = [];
        res.forEach(d => {
          if (reqTitles.includes(d.req_title)) {
            newIds.push(d._id);
            if (createJob && !d.res_content) {
              newReqs.push(d);
            }
            if (!createJob) {
              newReqs.push(d);
            }
          }
        });
        setRequirementsArray(newReqs);
        setReqIds(newIds);
      });
    }
  }, [isSubmitSuccessful, setRequirementsArray, setReqIds]);
  react.useEffect(() => {
    if (progress === 60 && noMoreRequirements) {
      setProgress(100);
    }
  }, [setProgress, progress, noMoreRequirements]);
  const handleSaveRequirements = async data => {
    setReqDisableState(true);
    setProgress(30);
    const newReqTitles = [];
    const newDataToSave = data.requirements.filter(d => !d._id);
    data.requirements.forEach(d => newReqTitles.push(d.req_title));
    setReqTitles(newReqTitles);
    if (data.requirements && newDataToSave) {
      const postRequirements = await fetch('http://localhost:3000/api/requirements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDataToSave)
      });
      return postRequirements.json();
    }
  };
  const handleSaveJob = async data => {
    setJobDisableState(true);
    setProgress(60);
    const parsedCompanyName = data.company.toLowerCase().replaceAll('/', '-').replaceAll(' ', '-');
    setResumeLocation(`${parsedCompanyName}`);
    const postJob = await fetch(saveJobUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        job_title: data.jobTitle,
        company_name: parsedCompanyName,
        job_function: data.jobFunction,
        date_applied: data.dateApplied,
        requirements: reqIds
      })
    });
    setResponseState(true);
    return postJob.json();
  };
  const handleAddResponse = async (data, id) => {
    const newRequirementsArr = requirementsArray.filter(d => d._id !== id);
    if (newRequirementsArr.length === 0) {
      setProgress(100);
      onSaveJob();
    }
    const updateRequirement = await fetch(`http://localhost:3000/api/requirements/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        res_content: data.response
      })
    });
    if (updateRequirement.status === 200) {
      setAddQualState(true);
      setTimeout(() => {
        setAddQualState(false);
      }, [500]);
    }
    setRequirementsArray(newRequirementsArr);
    if (newRequirementsArr.length > 0 && newRequirementsArr[0].res_content) {
      reset({
        response: newRequirementsArr[0].res_content
      });
    } else {
      reset({
        response: ''
      });
    }
    return updateRequirement.json();
  };
  const handleNoResponse = async id => {
    if (createJob || !requirementsArray[0].res_content) {
      const newRequirementsArr = requirementsArray.filter(d => d._id !== id);
      if (newRequirementsArr.length === 0) {
        setProgress(100);
        onSaveJob();
      }
      setRequirementsArray(newRequirementsArr);
      setRemQualState(true);
      setTimeout(() => {
        setRemQualState(false);
      }, [500]);
      if (newRequirementsArr.length > 0 && newRequirementsArr[0].res_content) {
        reset({
          response: newRequirementsArr[0].res_content
        });
      } else {
        reset({
          response: ''
        });
      }
    }
    if (!createJob && requirementsArray.length > 0 && requirementsArray[0].res_content) {
      const updateRequirement = await fetch(`http://localhost:3000/api/requirements/${id}`, {
        method: 'DELETE'
      });
      if (updateRequirement.status === 204) {
        setRemQualState(true);
        reset({
          response: requirementsArray[0].res_content
        });
        setTimeout(() => {
          setRemQualState(false);
        }, [500]);
      }
      return updateRequirement;
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_AddRequirements, {
      progress: progress,
      onSubmit: handleSubmitRequirements(data => handleSaveRequirements(data)),
      reqDisableState: reqDisableState,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
        render: _ref => {
          let {
            field: {
              onChange,
              value,
              ref
            }
          } = _ref;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Autocomplete/* default */.A, {
            sx: {
              marginTop: '100px'
            },
            multiple: true,
            disabled: reqDisableState,
            id: "enter-requirements",
            filterOptions: (options, params) => {
              const filtered = filter(options, params);
              const {
                inputValue
              } = params;
              const exists = options.some(option => inputValue === option.req_title);
              if (inputValue !== '' && !exists) {
                filtered.push({
                  req_title: inputValue
                });
              }
              return filtered;
            },
            options: hasRequirements ? hasRequirements.map(req => req) : [{
              req_title: 'Example: Unit testing...'
            }],
            getOptionKey: option => option._id,
            getOptionLabel: option => option.req_title,
            renderTags: renderTags,
            renderInput: params => /*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A, {
              ...params,
              variant: "outlined"
            }),
            onChange: (e, data) => onChange(data),
            value: value,
            inputRef: ref
          });
        },
        onChange: _ref2 => {
          let [, data] = _ref2;
          return data;
        },
        name: "requirements",
        control: controlReq,
        defaultValue: defaultValueReqs
      })
    }, 1), reqIds && reqIds.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_AddJobPost, {
      onSubmit: handleSubmit(data => handleSaveJob(data)),
      jobTitleInput: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
        control: control,
        name: "jobTitle",
        rules: {
          required: true
        },
        render: _ref3 => {
          let {
            field: {
              onChange,
              onBlur,
              value,
              ref
            }
          } = _ref3;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
            onChange: onChange,
            onBlur: onBlur,
            value: value,
            inputRef: ref,
            type: "text",
            id: "job-title",
            disabled: jobDisableState
          });
        },
        defaultValue: defaultValueJobTitle
      }),
      companyNameInput: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
        control: control,
        name: "company",
        rules: {
          required: true
        },
        render: _ref4 => {
          let {
            field: {
              onChange,
              onBlur,
              value,
              ref
            }
          } = _ref4;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
            onChange: onChange,
            onBlur: onBlur,
            value: value,
            inputRef: ref,
            type: "text",
            id: "company",
            disabled: jobDisableState
          });
        },
        defaultValue: defaultValueCompName
      }),
      jobFunctionInput: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
        control: control,
        name: "jobFunction",
        rules: {
          required: true
        },
        render: _ref5 => {
          let {
            field: {
              onChange,
              onBlur,
              value,
              ref
            }
          } = _ref5;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
            onChange: onChange,
            onBlur: onBlur,
            value: value,
            inputRef: ref,
            type: "text",
            id: "job-function",
            disabled: jobDisableState
          });
        },
        defaultValue: defaultValueJobFunc
      }),
      dateAppliedInput: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
        control: control,
        name: "dateApplied",
        rules: {
          required: 'Please enter the first date you started in this position'
        },
        render: _ref6 => {
          let {
            field: {
              onChange,
              onBlur,
              ref,
              value
            }
          } = _ref6;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
            sx: {
              marginTop: '100px !important',
              maxWidth: '200px'
            },
            type: "date",
            inputRef: ref,
            onChange: onChange,
            onBlur: onBlur,
            value: value,
            id: "date-applied",
            disabled: jobDisableState
          });
        },
        defaultValue: defaultValueDateApplied
      }),
      submitButtonState: !isValid || jobDisableState,
      submitButtonText: submitButtonText
    }, 2), requirementsArray && !noMoreRequirements && responseState && /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_AddQualification, {
      onSubmit: handleSubmitResponses(data => handleAddResponse(data, requirementsArray[0]._id)),
      onMissing: () => handleNoResponse(requirementsArray[0]._id),
      thisReq: requirementsArray[0].req_title,
      addButtonState: !qualsValid,
      addPessedButtonState: addQualState,
      removePressedButtonState: remQualState,
      addButtonText: !addQualState ? 'Add Qualification' : 'Qualification Added!',
      removeButtonText: !remQualState ? 'Missing Qualification' : 'Qualification Skipped!',
      qualificationDesc: `Enter the qualifications for each job requirement you've input into the form. 
				If you don't meet this requirement, click the "Missing Qualification" button. 
				This will help your Job Match meter be more accurate."`,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
        control: controlRes,
        name: "response",
        rules: {
          required: true
        },
        render: _ref7 => {
          let {
            field: {
              onChange,
              onBlur,
              value,
              ref
            }
          } = _ref7;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
            onChange: onChange,
            onBlur: onBlur,
            placeholder: "Enter qualifications",
            value: value,
            inputRef: ref,
            type: "text",
            multiline: true,
            rows: 4,
            id: "add-response"
          });
        },
        defaultValue: createJob ? '' : requirementsArray[0].res_content
      })
    }, 3), requirementsArray && noMoreRequirements && responseState && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_Resume, {
        fetchUrl: `http://localhost:3000/api/job-post/${resumeLocation}`
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A, {
        variant: "outlined",
        sx: {
          minWidth: '100%',
          marginTop: '20px'
        },
        href: `/job-post/${resumeLocation}`,
        children: "Edit Resume"
      })]
    }), createJob && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: progress > 60 && /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
        onClick: () => window.location.reload(),
        type: "button",
        children: "Add a new job post"
      })
    })]
  });
};
/* harmony default export */ const Blocks_JobForm = (JobForm);
;// CONCATENATED MODULE: ./views/components/Blocks/CreateJob.js




const CreateJob = () => {
  const handleSaveJob = () => {
    console.log('qualifications updated');
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.A, {
      children: ["After following these 3 steps your resume will be ready at the bottom of the page. If you need to make edits after you complete this page, you can click the \"Edit Resume\" button at the bottom.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
        children: "How to add a job post:"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "1. Fill out *ALL* of the Job Requirements. ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "2. Enter the Job Post Information ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "3. Fill out your qualifications"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_JobForm, {
      createJob: true,
      saveJobUrl: 'http://localhost:3000/api/job-post',
      defaultValueJobTitle: "",
      defaultValueCompName: "",
      defaultValueJobFunc: "",
      defaultValueDateApplied: "",
      submitButtonText: "Save",
      defaultValueQualification: "",
      onSaveJob: handleSaveJob
    })]
  });
};
/* harmony default export */ const Blocks_CreateJob = (CreateJob);
;// CONCATENATED MODULE: ./views/components/Views/JobsLanding.js





const JobsLanding = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Layout_MainBody, {
      sx: {
        paddingTop: '200px'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h1",
          children: "Enter Job Post Info"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_CreateJob, {})]
      })
    })
  });
};
/* harmony default export */ const Views_JobsLanding = (JobsLanding);
;// CONCATENATED MODULE: ./views/components/Views/SearchJob.js








const getJobs = getters_fetchData('http://localhost:3000/api/job-post/');
const SearchJob = () => {
  const [resumeLocation, setResumeLocation] = react.useState(null);
  const {
    control,
    handleSubmit,
    formState: {
      isValid
    }
  } = (0,index_esm/* useForm */.mN)();
  const allJobs = getJobs.read();
  const handleSetCompanyName = data => {
    setResumeLocation(data.searchJob);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout_MainBody, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h1",
          children: "Search Your Resume's by Company Name"
        }), allJobs && allJobs.jobPost && allJobs.jobPost.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("form", {
          onSubmit: handleSubmit(data => handleSetCompanyName(data)),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormControl/* default */.A, {
            sx: {
              width: '100%'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
              container: true,
              spacing: 4,
              sx: {
                width: '100%'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
                  control: control,
                  onChange: data => data,
                  name: "searchJob",
                  rules: {
                    required: true
                  },
                  render: _ref => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(Autocomplete/* default */.A, {
                      disableClearable: true,
                      id: "job-search-input",
                      noOptionsText: "Job doesn't exist. Go to add a job page.",
                      options: allJobs.jobPost.map(job => job.company_name),
                      renderInput: params => /*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A, {
                        ...params,
                        variant: "outlined",
                        label: "Search Company Name",
                        type: "search"
                      }),
                      onChange: (e, data) => {
                        setResumeLocation(null);
                        onChange(data);
                      }
                    });
                  },
                  defaultValue: ""
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
                  disabled: !isValid,
                  type: "submit",
                  sx: {
                    margin: '0.33em auto 0.25em !important;'
                  },
                  children: "Ok"
                })
              })]
            })
          })
        }) : 'No jobs, go to job post to input new jobs']
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A, {
        elevation: 0,
        children: resumeLocation && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_Resume, {
            fetchUrl: `http://localhost:3000/api/job-post/${resumeLocation}`
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A, {
            sx: {
              minWidth: '100%',
              marginTop: '20px'
            },
            variant: "outlined",
            href: `/job-post/${resumeLocation}`,
            children: "Edit Resume"
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const Views_SearchJob = (SearchJob);
;// CONCATENATED MODULE: ./views/components/Views/UpdateRequirements.js








const UpdateRequirements_getRequirements = getters_fetchData('http://localhost:3000/api/requirements/');
const UpdateRequirements = () => {
  const {
    control,
    handleSubmit,
    formState: {
      isValid: reqValid,
      isSubmitting,
      isSubmitSuccessful
    }
  } = (0,index_esm/* useForm */.mN)();
  const {
    control: controlRes,
    handleSubmit: handleSubmitResponses,
    formState: {
      isValid
    },
    reset
  } = (0,index_esm/* useForm */.mN)();
  const allReqs = UpdateRequirements_getRequirements.read();
  const [reqIDLocation, setReqIDLocation] = react.useState(null);
  const [qualification, setQualification] = react.useState();
  const [addQualState, setAddQualState] = react.useState(false);
  const [remQualState, setRemQualState] = react.useState(false);
  const getRequriement = async reqLocation => {
    try {
      const reqPromise = await fetch(`http://localhost:3000/api/requirements/${reqLocation}`, {
        method: 'GET'
      }).then(res => res.json()).then(res => {
        if (res.status === 'success') {
          if (!res.data) {
            console.log('no data');
          }
          return res.data;
        } else {
          console.log(res.status);
        }
      });
      return reqPromise;
    } catch (err) {
      console.log(err);
    }
  };
  const handleSetReqLocation = data => {
    const thisReq = allReqs.filter(req => req.req_title === data.searchRequirements);
    if (thisReq && thisReq.length > 0) {
      if (!thisReq[0]._id) {
        return;
      }
      setReqIDLocation(thisReq[0]._id);
      getRequriement(thisReq[0]._id).then(res => {
        setQualification(res);
      });
    }
  };
  const handleAddResponse = async (data, id) => {
    const updateRequirement = await fetch(`http://localhost:3000/api/requirements/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        res_content: data.updateQualification
      })
    });
    if (updateRequirement.status === 200) {
      setAddQualState(true);
      setTimeout(() => {
        setAddQualState(false);
      }, [500]);
    }
    return updateRequirement.json();
  };
  const handleMissing = async id => {
    const updateRequirement = await fetch(`http://localhost:3000/api/requirements/${id}`, {
      method: 'DELETE'
    });
    if (updateRequirement.status === 204) {
      setRemQualState(true);
      setTimeout(() => {
        setRemQualState(false);
      }, [500]);
    }
    setReqIDLocation(null);
    return updateRequirement;
  };
  react.useEffect(() => {
    if ((isSubmitting || isSubmitSuccessful) && qualification) {
      if (!qualification.res_content) {
        reset({
          updateQualification: ''
        });
      } else {
        reset({
          updateQualification: qualification.res_content
        });
      }
    }
  }, [qualification, isSubmitting, isSubmitSuccessful]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Layout_MainBody, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A, {
          variant: "h1",
          children: "Update Your Qualifications"
        }), allReqs && allReqs.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("form", {
          onSubmit: handleSubmit(data => handleSetReqLocation(data)),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormControl/* default */.A, {
            sx: {
              width: '100%'
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.Ay, {
              container: true,
              spacing: 4,
              sx: {
                width: '100%'
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
                  control: control,
                  onChange: data => data,
                  name: "searchRequirements",
                  rules: {
                    required: true
                  },
                  render: _ref => {
                    let {
                      field: {
                        onChange,
                        value,
                        ref
                      }
                    } = _ref;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(Autocomplete/* default */.A, {
                      disableClearable: true,
                      id: "requirements-search-input",
                      noOptionsText: "Job doesn't exist. Go to add a job page.",
                      options: allReqs.map(req => req.req_title),
                      renderInput: params => /*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A, {
                        ...params,
                        variant: "outlined",
                        label: "Search Requirement Keywords",
                        type: "search"
                      }),
                      onChange: (e, data) => {
                        setReqIDLocation(null);
                        onChange(data);
                      },
                      value: value,
                      ref: ref
                    });
                  },
                  defaultValue: ""
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.Ay, {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_ContainedButton, {
                  type: "submit",
                  disabled: !reqValid,
                  sx: {
                    margin: '0.33em auto 0.25em !important;'
                  },
                  children: "Ok"
                })
              })]
            })
          })
        }, 1) : 'No job requirements have been input. Go to "add a job" to add requirements.']
      }), reqIDLocation && qualification && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [qualification.res_content && /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_AddQualification, {
          onSubmit: handleSubmitResponses(data => handleAddResponse(data, qualification._id)),
          qualificationDesc: `Update this qualification`,
          thisReq: qualification.req_title,
          addButtonText: !addQualState ? 'Update Qualification' : 'Qualification Updated!',
          removeButtonText: !remQualState ? 'Set to Missing Qualification' : 'Qualification Removed',
          addButtonState: !isValid,
          addPessedButtonState: addQualState,
          removePressedButtonState: remQualState,
          onMissing: () => handleMissing(qualification._id),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: controlRes,
            name: "updateQualification",
            rules: {
              required: true
            },
            render: _ref2 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref2;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                placeholder: "Update qualification",
                value: value,
                inputRef: ref,
                type: "text",
                multiline: true,
                rows: 4,
                id: "add-response"
              });
            },
            defaultValue: qualification.res_content
          })
        }, 2), !qualification.res_content && /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_AddQualification, {
          onSubmit: handleSubmitResponses(data => handleAddResponse(data, qualification._id)),
          qualificationDesc: `Update this qualification`,
          thisReq: qualification.req_title,
          addButtonText: !addQualState ? 'Update Qualification' : 'Qualification Updated!',
          removeButtonText: !remQualState ? 'Set to Missing Qualification' : 'Qualification Removed',
          addButtonState: !isValid,
          addPessedButtonState: addQualState,
          removePressedButtonState: remQualState,
          onMissing: () => handleMissing(qualification._id),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* Controller */.xI, {
            control: controlRes,
            name: "updateQualification",
            rules: {
              required: true
            },
            render: _ref3 => {
              let {
                field: {
                  onChange,
                  onBlur,
                  value,
                  ref
                }
              } = _ref3;
              return /*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A, {
                onChange: onChange,
                onBlur: onBlur,
                placeholder: "Update qualification",
                value: value,
                inputRef: ref,
                type: "text",
                multiline: true,
                rows: 4,
                id: "add-response"
              });
            },
            defaultValue: ""
          })
        }, 2)]
      })]
    })
  });
};
/* harmony default export */ const Views_UpdateRequirements = (UpdateRequirements);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js
var LocalizationProvider = __webpack_require__(5737);
// EXTERNAL MODULE: ./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js + 1 modules
var AdapterDayjs = __webpack_require__(4798);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(2022);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(7767);
;// CONCATENATED MODULE: ./views/components/Views/EditResume.js







const EditResume = () => {
  const location = (0,react_router_dist/* useLocation */.zy)();
  const [path, setPath] = react.useState(null);
  const [value, setValue] = react.useState(0);
  const [job, setJob] = react.useState({});
  const [pageHead, setPageHead] = react.useState('');
  react.useEffect(() => {
    if (location) {
      setPath(location.pathname);
      if (path) {
        const parsedPath = path.replaceAll('/', '').replace('job-post', '');
        setPageHead(`${parsedPath.charAt(0).toUpperCase()}${parsedPath.slice(1).replaceAll('-', ' ')}`);
        getJob().then(res => {
          if (res && res.length > 0) {
            setJob(res[0]);
            const allRequirements = [];
            const allQualifications = [];
            res[0].requirements.forEach(req => allRequirements.push(req.req_title));
            res[0].requirements.forEach(req => {
              if (req.res_content && (req.res_content !== '' || req.res_content !== ' ')) {
                allQualifications.push(req.res_content);
              }
            });
            const guage = Math.round(allQualifications.length / allRequirements.length * 100);
            setValue(guage);
          }
        });
      }
    }
  }, [location, path]);
  const getJob = async () => {
    try {
      const reqPromise = await fetch(`http://localhost:3000/api${path}`, {
        method: 'GET'
      }).then(res => res.json()).then(res => {
        if (res.status === 'success') {
          if (!res.data) {
            console.log('no data');
          }
          return res.data;
        } else {
          console.log(res.status);
        }
      });
      return reqPromise;
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdateGuage = () => {
    getJob().then(res => {
      if (res && res.length > 0) {
        const allRequirements = [];
        const allQualifications = [];
        res[0].requirements.forEach(req => allRequirements.push(req.req_title));
        res[0].requirements.forEach(req => {
          if (req.res_content && (req.res_content !== '' || req.res_content !== ' ')) {
            allQualifications.push(req.res_content);
          }
        });
        const guage = Math.round(allQualifications.length / allRequirements.length * 100);
        setValue(guage);
      }
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Layout_MainBody, {
      sx: {
        paddingTop: '200px'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Stack/* default */.A, {
        spacing: 2,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.A, {
          variant: "h1",
          children: ["Update Resume ", path && `for ${pageHead}`]
        }), path && job && job.company_name && job.requirements && /*#__PURE__*/(0,jsx_runtime.jsxs)(Paper/* default */.A, {
          elevation: 0,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_Guage, {
            value: value
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Blocks_JobForm, {
            createJob: false,
            saveJobUrl: `http://localhost:3000/api${path}`,
            renderTags: (v, getTagProps) => v.map((option, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.A, {
              ...getTagProps({
                index
              }),
              label: option.req_title
            })),
            defaultValueReqs: job.requirements.map(req => req),
            defaultValueJobTitle: job.job_title,
            defaultValueCompName: job.company_name,
            defaultValueJobFunc: job.job_function,
            defaultValueDateApplied: job.date_applied,
            onSaveJob: handleUpdateGuage,
            submitButtonText: "Update"
          })]
        }), path && (!job || !job.company_name) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.A, {
          children: ["That company name isn't found. Try searching at", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A, {
            variant: "outlined",
            href: "/search-job",
            children: "search job"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), " Or try adding a new", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A, {
            variant: "outlined",
            href: "/add-job",
            children: "job post"
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const Views_EditResume = (EditResume);
;// CONCATENATED MODULE: ./views/index.js










const router = (0,dist/* createBrowserRouter */.Ys)([{
  path: '/',
  element: /*#__PURE__*/(0,jsx_runtime.jsx)(Views_UserLanding, {})
}, {
  path: '/add-job',
  element: /*#__PURE__*/(0,jsx_runtime.jsx)(Views_JobsLanding, {})
}, {
  path: '/job-post/:company_name',
  element: /*#__PURE__*/(0,jsx_runtime.jsx)(Views_EditResume, {})
}, {
  path: '/update-qualifications',
  element: /*#__PURE__*/(0,jsx_runtime.jsx)(Views_UpdateRequirements, {})
}, {
  path: '/search-resume',
  element: /*#__PURE__*/(0,jsx_runtime.jsx)(Views_SearchJob, {})
}, {
  path: '*',
  element: /*#__PURE__*/(0,jsx_runtime.jsx)(Views_UserLanding, {})
}]);
(0,client/* hydrateRoot */.c)(document.getElementById('root'), /*#__PURE__*/(0,jsx_runtime.jsx)(LocalizationProvider/* LocalizationProvider */.$, {
  dateAdapter: AdapterDayjs/* AdapterDayjs */.R,
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* RouterProvider */.pg, {
    router: router
  })
}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjob_requirement_search"] = self["webpackChunkjob_requirement_search"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [445,222,847,530,687,783,800], () => (__webpack_require__(9266)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [445,222,847,530,687,783,800], () => (__webpack_require__(3792)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;