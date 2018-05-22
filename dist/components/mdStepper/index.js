/*!
* Vue Material v0.7.4
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.DocutapUi=e():t.DocutapUi=e()})(this,(function(){return (function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=590)})({1:function(t,e){t.exports=function(t,e,n,i,r){var s,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,o=t.default);var u="function"==typeof o?o.options:o;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),i&&(u._scopeId=i);var p;if(r?(p=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=p):n&&(p=n),p){var c=u.functional,d=c?u.render:u.beforeCreate;c?u.render=function(t,e){return p.call(e),d(t,e)}:u.beforeCreate=d?[].concat(d,p):[p]}return{esModule:s,exports:o,options:u}}},10:function(t,e,n){var i=n(14),r=n(31),s=n(28),o=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=s(e,!0),i(n),r)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=i,t.exports=e.default},12:function(t,e,n){var i=n(10),r=n(18);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},14:function(t,e,n){var i=n(7);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},15:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},16:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},17:function(t,e,n){var i=n(3),r=n(5),s=n(29),o=n(12),a="prototype",u=function(t,e,n){var p,c,d,l=t&u.F,f=t&u.G,m=t&u.S,h=t&u.P,v=t&u.B,S=t&u.W,b=f?r:r[e]||(r[e]={}),_=b[a],x=f?i:m?i[e]:(i[e]||{})[a];f&&(n=e);for(p in n)c=!l&&x&&void 0!==x[p],c&&p in b||(d=c?x[p]:n[p],b[p]=f&&"function"!=typeof x[p]?n[p]:v&&c?s(d,i):S&&x[p]==d?(function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[a]=t[a],e})(d):h&&"function"==typeof d?s(Function.call,d):d,h&&((b.virtual||(b.virtual={}))[p]=d,t&u.R&&_&&!_[p]&&o(_,p,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},18:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},19:function(t,e,n){var i=n(32),r=n(22);t.exports=Object.keys||function(t){return i(t,r)}},2:function(t,e,n){"use strict";function i(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||i(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return i(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t?t:"default")}},t.exports=e.default},20:function(t,e,n){var i=n(23)("keys"),r=n(21);t.exports=function(t){return i[t]||(i[t]=r(t))}},21:function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},22:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},222:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){t.component("md-stepper",o.default),t.component("md-step",u.default),t.component("md-step-header-container",c.default),t.component("md-step-header",l.default),t.material.styles.push(m.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var s=n(470),o=i(s),a=n(468),u=i(a),p=n(234),c=i(p),d=n(469),l=i(d),f=n(405),m=i(f);t.exports=e.default},23:function(t,e,n){var i=n(3),r="__core-js_shared__",s=i[r]||(i[r]={});t.exports=function(t){return s[t]||(s[t]={})}},234:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),s=i(r);e.default={functional:!0,props:{mdVertical:{type:Boolean,default:!1}},render:function(t,e){var n=e.children,i=e.props,r=function(e){return e.reduce((function(e,n,i,r){if(e.push(n),i<r.length-1){var o=t("md-divider",{key:"divider-"+(0,s.default)()});e.push(o)}return e}),[])};return i.mdVertical||(n=r(n)),t("div",{class:"md-steps-navigation-container"},n)}},t.exports=e.default},24:function(t,e,n){var i=n(15);t.exports=function(t){return Object(i(t))}},25:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},26:function(t,e,n){var i=n(7),r=n(3).document,s=i(r)&&i(r.createElement);t.exports=function(t){return s?r.createElement(t):{}}},27:function(t,e,n){var i=n(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},28:function(t,e,n){var i=n(7);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},29:function(t,e,n){var i=n(34);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},298:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),s=i(r),o=n(11),a=i(o);e.default={name:"md-step",props:{id:[String,Number],mdActive:Boolean,mdButtonBack:{type:String,default:"BACK"},mdButtonContinue:{type:String,default:"CONTINUE"},mdContinue:{type:Boolean,default:!0},mdDisabled:Boolean,mdEditable:{type:Boolean,default:!0},mdIcon:String,mdLabel:[String,Number],mdMessage:[String],mdToolTip:String,mdTooltipDelay:{type:String,default:"0"},mdTooltipDirection:{type:String,default:"bottom"}},data:function(){return{index:0,left:"0px",mounted:!1,parentStepper:void 0,stepId:this.id||"step-"+(0,s.default)(),vertical:!1,width:"0px"}},watch:{mdActive:function(){this.updateStepData()},mdContinue:function(){this.updateStepData()},mdEditable:function(){this.updateStepData()},mdDisabled:function(){this.updateStepData()},mdIcon:function(){this.updateStepData()},mdLabel:function(){this.updateStepData()},mdMessage:function(){this.updateStepData()},mdToolTip:function(){this.updateStepData()},mdTooltipDelay:function(){this.updateStepData()},mdTooltipDirection:function(){this.updateStepData()}},computed:{canGoBack:function(){if(0===this.index)return!1;if(!this.parentStepper)return!1;var t=this.parentStepper.getPreviousStep(this.stepId);return!(void 0!==t&&!t.editable)},continueText:function(){return this.parentStepper&&this.index+1===this.parentStepper.getStepsCount()&&"CONTINUE"===this.mdButtonContinue?"FINISH":this.mdButtonContinue},isCurrentStep:function(){return this.index===this.parentStepper.activeStepNumber},styles:function(){return this.vertical?{}:{width:this.width,left:this.left}}},methods:{getStepData:function(){return{id:this.stepId,label:this.mdLabel,message:this.mdMessage,icon:this.mdIcon,active:this.mdActive,continue:this.mdContinue,editable:this.mdEditable,disabled:this.mdDisabled,toolTip:this.mdToolTip,tooltipDelay:this.mdTooltipDelay,tooltipDirection:this.mdTooltipDirection,ref:this}},moveNextStep:function(){this.parentStepper.moveNextStep()},movePreviousStep:function(){this.parentStepper.movePreviousStep()},setActiveStep:function(){this.parentStepper.setActiveStep(this.getStepData())},updateStepData:function(){this.parentStepper.updateStep(this.getStepData())}},mounted:function(){var t=this.getStepData();if(this.parentStepper=(0,a.default)(this.$parent,"md-stepper"),!this.parentStepper)throw new Error("You must wrap the md-step in a md-stepper");this.mounted=!0,this.parentStepper.updateStep(t),this.mdActive&&this.parentStepper.setActiveStep(t),this.vertical=this.parentStepper.mdVertical,this.index=this.parentStepper.getStepIndex(this.stepId)},beforeDestroy:function(){this.parentStepper.unregisterStep(this.getStepData())}},t.exports=e.default},299:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),s=i(r);e.default={props:{step:Object,mdAlternateLabels:Boolean},data:function(){return{index:Number,parentStepper:{}}},computed:{isCompleted:function(){return this.index<this.parentStepper.activeStepNumber},getHeaderClasses:function(){return{"md-active":this.parentStepper.activeStep===this.step.id,"md-alternate-labels":this.mdAlternateLabels,"md-disabled":this.step.disabled,"md-has-sub-message":this.step.message,"md-primary":this.isCompleted}},icon:function(){return!this.step.disabled&&this.step.editable&&this.isCompleted?"mode_edit":!this.step.disabled&&this.isCompleted?"check":this.step.icon},stepNumber:function(){return this.index+1}},mounted:function(){var t=this;this.$nextTick((function(){if(t.parentStepper=(0,s.default)(t.$parent,"md-stepper"),!t.parentStepper)throw t.$destroy(),new Error("You should wrap the md-step-header in a md-stepper");t.index=t.parentStepper.getStepIndex(t.step.id)}))}},t.exports=e.default},3:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},30:function(t,e,n){var i=n(16),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},300:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(39),s=i(r),o=n(2),a=i(o),u=n(51),p=i(u);e.default={name:"md-stepper",props:{mdAlternateLabels:{type:Boolean,default:!1},mdElevation:{type:[String,Number],default:1},mdVertical:{type:Boolean,default:!1}},mixins:[a.default],data:function(){return{stepList:{},activeStep:null,activeStepNumber:0,contentHeight:"0px",contentWidth:"0px"}},computed:{navigationClasses:function(){return{"md-alternate-labels":this.mdAlternateLabels}},stepsClasses:function(){return{"md-steps-vertical":this.mdVertical}}},methods:{getNextStep:function(t){var e=this.getStepIndex(t);if(e!==this.stepList.length){var n=(0,s.default)(this.stepList)[e+1],i=this.stepList[n];return i}},getPreviousStep:function(t){var e=this.getStepIndex(t);if(0!==e){var n=(0,s.default)(this.stepList)[e-1],i=this.stepList[n];return i}},getStepsCount:function(){var t=(0,s.default)(this.stepList);return t.length},getStepIndex:function(t){var e=(0,s.default)(this.stepList);return e.indexOf(t)},registerStep:function(t){this.$set(this.stepList,t.id,t)},moveNextStep:function(){if(this.activeStepNumber<this.getStepsCount()-1){var t=this.getNextStep(this.activeStep);this.setActiveStep(t)}else this.$emit("completed")},movePreviousStep:function(){if(this.activeStepNumber>0&&this.activeStepNumber<this.getStepsCount()){var t=this.getPreviousStep(this.activeStep);this.setActiveStep(t)}},setActiveStep:function(t){this.activeStepNumber>this.getStepIndex(t.id)&&!t.editable||(this.activeStep=t.id,this.activeStepNumber=this.getStepIndex(this.activeStep),this.calculatePosition(),this.$emit("change",this.activeStepNumber))},unregisterStep:function(t){this.$delete(this.stepList,t.id)},updateStep:function(t){if(this.registerStep(t),t.active)if(t.disabled){if((0,s.default)(this.stepList).length){var e=(0,s.default)(this.stepList),n=e.indexOf(t.id)+1,i=e[n];i?this.setActiveStep(this.stepList[i]):this.setActiveStep(this.stepList[0])}}else this.setActiveStep(t)},observeElementChanges:function(){this.parentObserver=new MutationObserver((0,p.default)(this.calculateOnWatch,50)),this.parentObserver.observe(this.$refs.stepContent,{childList:!0,attributes:!0,subtree:!0})},calculateStepsWidthAndPosition:function(){if(this.mdVertical)this.contentWidth="initial";else{var t=this.$el.offsetWidth,e=0;this.contentWidth=t*this.activeStepNumber+"px";for(var n in this.stepList){var i=this.stepList[n];i.ref.width=t+"px",i.ref.left=t*e+"px",e++}}},calculateContentHeight:function(){var t=this;this.$nextTick((function(){if(!t.mdVertical&&(0,s.default)(t.stepList).length){var e=t.stepList[t.activeStep].ref.$el.offsetHeight;t.contentHeight=e+"px"}else t.contentHeight="initial"}))},calculatePosition:function(){var t=this;window.requestAnimationFrame((function(){t.calculateStepsWidthAndPosition(),t.calculateContentHeight()}))},debounceTransition:function(){var t=this;window.clearTimeout(this.transitionControl),this.transitionControl=window.setTimeout((function(){t.calculatePosition(),t.transitionOff=!1}),200)},calculateOnWatch:function(){this.calculatePosition(),this.debounceTransition()},calculateOnResize:function(){this.transitionOff=!0,this.calculateOnWatch()}},mounted:function(){var t=this;this.$nextTick((function(){if(t.observeElementChanges(),window.addEventListener("resize",t.calculateOnResize),(0,s.default)(t.stepList).length&&!t.activeStep){var e=(0,s.default)(t.stepList)[0];t.setActiveStep(t.stepList[e])}}))},beforeDestroy:function(){this.parentObserver&&this.parentObserver.disconnect(),window.removeEventListener("resize",this.calculateOnResize)}},t.exports=e.default},31:function(t,e,n){t.exports=!n(4)&&!n(6)((function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a}))},32:function(t,e,n){var i=n(9),r=n(8),s=n(35)(!1),o=n(20)("IE_PROTO");t.exports=function(t,e){var n,a=r(t),u=0,p=[];for(n in a)n!=o&&i(a,n)&&p.push(n);for(;e.length>u;)i(a,n=e[u++])&&(~s(p,n)||p.push(n));return p}},34:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},35:function(t,e,n){var i=n(8),r=n(30),s=n(36);t.exports=function(t){return function(e,n,o){var a,u=i(e),p=r(u.length),c=s(o,p);if(t&&n!=n){for(;p>c;)if(a=u[c++],a!=a)return!0}else for(;p>c;c++)if((t||c in u)&&u[c]===n)return t||c||0;return!t&&-1}}},356:function(t,e){},36:function(t,e,n){var i=n(16),r=Math.max,s=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):s(t,e)}},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return Math.random().toString(36).slice(4)};e.default=i,t.exports=e.default},39:function(t,e,n){t.exports={default:n(44),__esModule:!0}},4:function(t,e,n){t.exports=!n(6)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},405:function(t,e){t.exports=".THEME_NAME.md-stepper .md-step-header .md-step-icon,.THEME_NAME.md-stepper .md-step-header .md-step-number{color:BACKGROUND-CONTRAST;background-color:#bdbdbd}.THEME_NAME.md-stepper .md-step-header.md-primary .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-primary .md-step-number,.THEME_NAME.md-stepper .md-step-header.md-active .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-active .md-step-number{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-stepper .md-step-header.md-accent .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-accent .md-step-number{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-number{color:WARN-CONTRAST;background-color:WARN-COLOR}.THEME_NAME.md-stepper .md-step-header.md-disabled{color:#bdbdbd}.THEME_NAME.md-stepper .md-step-header.md-disabled .md-step-icon,.THEME_NAME.md-stepper .md-step-header.md-disabled .md-step-number{color:white;background-color:#bdbdbd}\n"},44:function(t,e,n){n(49),t.exports=n(5).Object.keys},468:function(t,e,n){var i=n(1)(n(298),n(539),null,null,null);t.exports=i.exports},469:function(t,e,n){var i=n(1)(n(299),n(556),null,null,null);t.exports=i.exports},47:function(t,e,n){var i=n(17),r=n(5),s=n(6);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],o={};o[t]=e(n),i(i.S+i.F*s((function(){n(1)})),"Object",o)}},470:function(t,e,n){function i(t){n(356)}var r=n(1)(n(300),n(510),i,null,null);t.exports=r.exports},49:function(t,e,n){var i=n(24),r=n(19);n(47)("keys",(function(){return function(t){return r(i(t))}}))},5:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},51:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){var n=!1;return function(){n||(t.call(),n=!0,window.setTimeout((function(){n=!1}),e))}};e.default=i,t.exports=e.default},510:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-stepper",class:[t.themeClass,t.stepsClasses]},[t.mdVertical?t._e():n("md-whiteframe",{ref:"stepNavigation",staticClass:"md-steps-navigation",class:t.navigationClasses,attrs:{"md-tag":"nav","md-elevation":t.mdElevation}},[n("md-step-header-container",{ref:"stepHeader",attrs:{"md-vertical":t.mdVertical}},t._l(t.stepList,(function(e,i){return n("md-step-header",{key:e.id,attrs:{step:e,"md-alternate-labels":t.mdAlternateLabels},on:{click:function(n){t.setActiveStep(e)}}})})))],1),t._v(" "),n("md-whiteframe",{attrs:{"md-elevation":t.mdElevation}},[t.mdVertical?t._e():n("div",{ref:"stepContent",staticClass:"md-steps-container",style:{height:t.contentHeight}},[n("div",{staticClass:"md-steps-wrapper",style:{transform:"translate3D(-"+t.contentWidth+", 0, 0)"}},[t._t("default")],2)]),t._v(" "),t.mdVertical?n("div",{ref:"stepContent",staticClass:"md-steps-vertical-container"},[t._t("default")],2):t._e()])],1)},staticRenderFns:[]}},539:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-step",style:t.styles,attrs:{id:t.stepId}},[t.vertical?n("md-step-header",{attrs:{step:t.getStepData()},on:{click:function(e){t.setActiveStep()}}}):t._e(),t._v(" "),!t.vertical||t.vertical&&t.isCurrentStep?n("div",{staticClass:"md-step-content"},[t._t("default"),t._v(" "),!t.vertical||t.vertical&&t.isCurrentStep?n("div",{staticClass:"md-step-actions"},[n("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:!t.mdContinue},on:{click:t.moveNextStep}},[t._v(t._s(t.continueText))]),t._v(" "),n("md-button",{attrs:{disabled:!t.canGoBack},on:{click:t.movePreviousStep}},[t._v(t._s(t.mdButtonBack))])],1):t._e()],2):t._e()],1)},staticRenderFns:[]}},556:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-step-header",class:t.getHeaderClasses},[n("div",{staticClass:"md-step-icons"},[t.icon?n("md-icon",{staticClass:"md-step-icon"},[t._v(t._s(t.icon))]):t._e(),t._v(" "),t.icon?t._e():n("div",{staticClass:"md-step-number"},[n("span",[t._v(t._s(t.stepNumber))])])],1),t._v(" "),n("div",{staticClass:"md-step-titles"},[n("div",{staticClass:"md-step-title"},[t._v(t._s(t.step.label))]),t._v(" "),t.step.message?n("small",[t._v(t._s(t.step.message))]):t._e()]),t._v(" "),t.step.toolTip?n("md-tooltip",{attrs:{"md-direction":t.step.tooltipDirection,"md-delay":t.step.tooltipDelay}},[t._v(t._s(t.step.toolTip))]):t._e()],1)},staticRenderFns:[]}},590:function(t,e,n){t.exports=n(222)},6:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8:function(t,e,n){var i=n(27),r=n(15);t.exports=function(t){return i(r(t))}},9:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}}})}));