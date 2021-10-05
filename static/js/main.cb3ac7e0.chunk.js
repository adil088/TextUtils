(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"Home",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"Home",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"Enabled Dark Mode"})]})]})]})})}function d(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",placeholder:"Enter text here",value:c,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my- 1",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to Uppercase","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my- 1",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to Lowercase","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my- 1",onClick:function(){var t=c.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");s(t),e.showAlert("Punctuations has been removed","success")},children:"Remove Punctuations"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my- 1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my- 1",onClick:function(){s(""),e.showAlert("Clear","success")},children:"Clear"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[c.split(" ").filter((function(e){return 0!==e.length})).length," words and ",c.length," charecters"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:c})]})]})}function b(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})}i.defaultProps={title:"Set title here",aboutText:"About"};var h=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),h=r[0],m=r[1],u=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",u("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(c("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:u,heading:"Enter the text to analyze Below.",mode:a})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.cb3ac7e0.chunk.js.map