"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2353],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),d=s,E=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(E,o(o({ref:t},c),{},{components:n})):r.createElement(E,o({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91262:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),s=n(72389);function a(e){var t=e.children,n=e.fallback;return(0,s.Z)()?r.createElement(r.Fragment,null,t()):null!=n?n:null}},6254:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(83117),s=n(80102),a=n(21073);function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var i=n(67294),l=n(73935),p=!1,c=i.createContext(null),u="unmounted",f="exited",d="entering",E="entered",m="exiting",h=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var s,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(s=f,r.appearStatus=d):s=E:s=t.unmountOnExit||t.mountOnEnter?u:f,r.state={status:s},r.nextCallback=null,r}(0,a.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===u?{status:f}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==E&&(t=d):n!==d&&n!==E||(t=m)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===d?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===f&&this.setState({status:u})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,s=this.props.nodeRef?[r]:[l.findDOMNode(this),r],a=s[0],o=s[1],i=this.getTimeouts(),c=r?i.appear:i.enter;!e&&!n||p?this.safeSetState({status:E},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,o),this.safeSetState({status:d},(function(){t.props.onEntering(a,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:E},(function(){t.props.onEntered(a,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:l.findDOMNode(this);t&&!p?(this.props.onExit(r),this.safeSetState({status:m},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:f},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:f},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=s[0],o=s[1];this.props.addEndListener(a,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===u)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,s.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(c.Provider,{value:null},"function"==typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function v(){}h.contextType=c,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},h.UNMOUNTED=u,h.EXITED=f,h.ENTERING=d,h.ENTERED=E,h.EXITING=m;var x=h,g=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=o(n.className,r):n.setAttribute("class",o(n.className&&n.className.baseVal||"",r)));var n,r}))},b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),s=r[0],a=r[1];t.removeClasses(s,"exit"),t.addClass(s,a?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),s=r[0],a=r[1]?"appear":"enter";t.addClass(s,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),s=r[0],a=r[1]?"appear":"enter";t.removeClasses(s,a),t.addClass(s,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,s=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:s,activeClassName:r?s+"-active":n[e+"Active"],doneClassName:r?s+"-done":n[e+"Done"]}},t}(0,a.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&s&&(r+=" "+s),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,s=n.active,a=n.done;this.appliedClasses[t]={},r&&g(e,r),s&&g(e,s),a&&g(e,a)},n.render=function(){var e=this.props,t=(e.classNames,(0,s.Z)(e,["classNames"]));return i.createElement(x,(0,r.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.Component);b.defaultProps={classNames:""},b.propTypes={};var C=b}}]);