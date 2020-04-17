(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(9),i=(r(0),r(201)),o={id:"GettingStarted",title:"Getting Started with Samargra Mobile App Package",sidebar_label:"Getting Started"},l={id:"GettingStarted",title:"Getting Started with Samargra Mobile App Package",description:"## What to expect from the tutorial",source:"@site/docs/Getting Started.md",permalink:"/docs/docs/GettingStarted",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Getting Started.md",sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Components Overview",permalink:"/docs/docs/ComponentsOverview"},next:{title:"Component Overview (Mobile Application)",permalink:"/docs/docs/COMobileApplication"}},c=[{value:"What to expect from the tutorial",id:"what-to-expect-from-the-tutorial",children:[]},{value:"Getting familiar with the basics",id:"getting-familiar-with-the-basics",children:[]},{value:"Setting up Samagra Android starter App",id:"setting-up-samagra-android-starter-app",children:[]},{value:"Configuring Home Screen",id:"configuring-home-screen",children:[]}],p={rightToc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-to-expect-from-the-tutorial"},"What to expect from the tutorial"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Attached video link for full-fledged application.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Link to executable file for the same.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Link to the code repository containing (codes for different modules, a coupled together app and a starter app)."))),Object(i.b)("h2",{id:"getting-familiar-with-the-basics"},"Getting familiar with the basics"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The Android app to be developed along the lines of this document is a modular app, developed with different modules, with a main module and different child modules attached to it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In order to start up with the development, we would like to recommend giving a read through the basic tutorial on how to build and run a basic android app via this ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/training/basics/firstapp"}),"link"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Note: In all the modules, you would come across a commons module. This module contains common functionalities that can be used by all the modules rather than duplicating the code along the modules."))),Object(i.b)("h2",{id:"setting-up-samagra-android-starter-app"},"Setting up Samagra Android starter App"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Launch Android Studio. Go to File -> New -> Import Project.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose the specific project you want to import and then click Next->Finish. It will build the Gradle automatically and'll be ready for you to use.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The starter app, basically provides a skeleton app to integrate with modules mentioned ahead. The skeleton app UI looks like the screenshot attached on the right side. ",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://lh3.googleusercontent.com/xOtDvkRhN5DlhkBK8lW8QkIk5mc0vMMtcBCcre7as6pLhO8Af2mZFqf2UKH-plbCjUp-yU5YDRPCuinuZi8Oj8wrAoypMrIdSc6S4LPN9jPAu8KbI1fKdSoBqCsp_6yiijcMKaQM",alt:null}))," '"))),Object(i.b)("h2",{id:"configuring-home-screen"},"Configuring Home Screen"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"As you will install and run the app, you will see that the home screen icons, when clicked just show a snackbar.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"This is intended to just show the functionality of MVP design pattern, where click action is listened to by the View and then the action is handled by the presenter.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can configure the home screen to redirect the user to the modules which will be discussed ahead. The steps would also be discussed in the further part of the document."))))}d.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(r),b=n,h=s["".concat(o,".").concat(b)]||s[b]||u[b]||i;return r?a.a.createElement(h,l({ref:t},p,{components:r})):a.a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);