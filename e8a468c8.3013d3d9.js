(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(202)),o={id:"COMobileApplication",title:"Component Overview (Mobile Application)",sidebar_label:"Component Overview"},l={id:"COMobileApplication",title:"Component Overview (Mobile Application)",description:"# Component Overview (Mobile Application)",source:"@site/docs/Component Overview Mobile Application.md",permalink:"/docs/docs/COMobileApplication",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Component Overview Mobile Application.md",sidebar_label:"Component Overview",sidebar:"someSidebar",previous:{title:"Components Overview",permalink:"/docs/docs/ComponentsOverview"},next:{title:"Getting Started with Samargra Mobile App Package",permalink:"/docs/docs/GettingStartedMobileComponent"}},b=[{value:"App Modules",id:"app-modules",children:[]},{value:"Libraries used",id:"libraries-used",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"component-overview-mobile-application"},"Component Overview (Mobile Application)"),Object(i.b)("p",null,"Of the various products, we offer as a part of transforming ways of service delivery, mobile applications are an intrinsic part We have built the different mobile apps for Android platform leveraging various open source technologies. The mobile applications are developed using ",Object(i.b)("strong",{parentName:"p"},"multi-modular architecture"),". The app is divided into various ",Object(i.b)("strong",{parentName:"p"},"independently functioning modules"),". The sections, following will give you a deep dive into the various modules on what they offer, how you can incorporate these, and how you can customise these."),Object(i.b)("h2",{id:"app-modules"},"App Modules"),Object(i.b)("p",null,"The various modules used by us, with their respective features offered are mentioned below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Module Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null})))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Form Management Module"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Offers the facility of MDC (mobile data collection), written on the top of ODK Collect",Object(i.b)("br",null),"2. Downloading of forms, based on user's roles, managing form entry and sending it to server.",Object(i.b)("br",null),"3. Ability to see the sent forms.",Object(i.b)("br",null),"4. Working of form Management Module even in offline scenario.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ancilliary Screen Module"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User can view custom designed screens at various points in the user flows such as:",Object(i.b)("br",null),"1. Start of the application (Splash screen)",Object(i.b)("br",null),"2. First-time login (Guided Onboarding screens)",Object(i.b)("br",null),"3. View information about the app (About Us screen)",Object(i.b)("br",null),"4. App usage guide/tutorials screen",Object(i.b)("br",null),"5. Functionality to reset App password using OTP.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Profile Screen Module"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User can manage his/her profile and conduct the following functions:",Object(i.b)("br",null),"1. View all editable and non-editable profile fields",Object(i.b)("br",null),"2. Edit profile details",Object(i.b)("br",null),"3. Reset passwords using OTP method")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Offline Handling Module"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User can use the application in offline mode:",Object(i.b)("br",null),"1. Add/Edit/Delete any data in different sections of the application",Object(i.b)("br",null),"2. Data is automatically synced for the user once the device is online")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cascading Dropdown Module"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User can select fields from the application metadata and have the following based on the data selection:",Object(i.b)("br",null),"1. Change in the forms shown to the users (users can view different forms based on the dropdown)",Object(i.b)("br",null),"2. Pre-fill in the data input forms (based on the variable mapping pre-defined in the data input form)",Object(i.b)("br",null),"3. In addition, cascading dropdown as pre-fill based on the profile of the users (Program Mission Director only sees cascading dropdown for 6/10 districts where the mission is ongoing)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Push Notification Module"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Integrating FCM firebase token to send push notifications",Object(i.b)("br",null),"2. Ability to generate push notifications",Object(i.b)("br",null),"3. Generate in-app notifications")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mobile Application Logging Module"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Generate Logs for Application",Object(i.b)("br",null),"2. Receive Crash Notifications via Email",Object(i.b)("br",null),"3. Remote crash logging",Object(i.b)("br",null),"4. Push User App logs for further debugging")))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"../img/architecture.png",alt:"alt-text"}))),Object(i.b)("h2",{id:"libraries-used"},"Libraries used"),Object(i.b)("p",null,"We are using the following libraries to drive the functionalites within our app package."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Libraries Used"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Features offered"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Dagger2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Android Dependency injection framework")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"RxJava",Object(i.b)("br",null),"RxAndroidNetworking"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Java based implementation of Reactive Programming",Object(i.b)("br",null),"Android library for doing any type of networking call in Android applications which is made on top of Retrofit")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Butterknife"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"View binding tool for Android layouts.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Timber"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Android App Logging")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sentry"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Android Crash Monitoring")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Firebase"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. FCM for push notifications",Object(i.b)("br",null),"2. Firebase Remote config to control remote user-related variables")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Android Work Manager"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Android library used to enqueue deferrable work that is guaranteed to execute sometime after its Constraints are met.",Object(i.b)("br",null),"2. We use it to store user actions performed in offline environments")))))}p.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,O=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?a.a.createElement(O,l({ref:t},c,{components:n})):a.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);