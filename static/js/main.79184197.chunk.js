(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},106:function(e,t,a){},146:function(e,t,a){e.exports=a(268)},151:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),l=a.n(c),o=a(26),u=(a(151),a(152),a(153),a(154),a(291)),s=a(283),i=a(292),m=a(38);var d=function(){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"custom-navbar",variant:"dark"},r.a.createElement(s.a,null,r.a.createElement(m.LinkContainer,{to:"/Tweeter"},r.a.createElement(u.a.Brand,{className:"heading-navbar"},"Tweeter")),r.a.createElement(i.a,{className:"ms-auto"},r.a.createElement(m.LinkContainer,{to:"/Tweeter/about/"},r.a.createElement(i.a.Link,null,"About Us")),r.a.createElement(m.LinkContainer,{to:"/Tweeter/contact/"},r.a.createElement(i.a.Link,null,"Contact"))))))};a(162);var p=function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"footer"},"Copyright ",e," @ Shramey")},f=a(49),b=(a(163),a(284)),E="Welcome to Tweeter. A place to meet new like-minded people";var h=function(){return r.a.createElement("div",{className:"pitch-text"},E)};var v=function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"container-image"},r.a.createElement(f.a,{src:"/Tweeter/image.png",roundedCircle:!0,className:"img-fluid"})),r.a.createElement("div",{className:"vertical-line"}),r.a.createElement(h,null),r.a.createElement("div",{className:"buttons-home"},r.a.createElement(m.LinkContainer,{to:"/Tweeter/login/"},r.a.createElement(b.a,{className:"login-button",variant:"primary",size:"lg"},"Log In")),r.a.createElement(m.LinkContainer,{to:"/Tweeter/signup/"},r.a.createElement(b.a,{className:"signup-button",variant:"outline-dark",size:"lg"},"Sign Up"))))},g=a(12),w=a(2),O=a(9),j=a.n(O),N=a(13),x=a(3),y=(a(106),a(290)),k=a(65),C=a.n(k),T=a(289),S=a(25),I=a.n(S),L="https://blogs-app-shramey.herokuapp.com";I.a.defaults.withCredentials=!0;var B=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post(L+"/auth/signup",t,{withCredentials:!0});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post(L+"/auth/login",t,{withCredentials:!0});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(N.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(L+"/auth/logout");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(N.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(L+"/auth/session");case 3:return t=e.sent,console.log(t),e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(L),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post(L+"/auth/get-name",t,{withCredentials:!0});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.put(L+"/auth/update",{data:{user:t}},{withCredentials:!0});case 3:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post(L+"/auth/update-profile-image",{image:t});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(),e.next=4,I.a.delete(L+"/auth/delete",{data:t});case 4:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post(L+"/auth/blog/add",t,{withCredentials:!0});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(N.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(L+"/auth/blog/get-all");case 3:return t=e.sent,e.abrupt("return",t.data.blogs);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post(L+"/auth/blog/get-one",{id:t},{withCredentials:!0});case 3:return a=e.sent,e.abrupt("return",a.data.blogs);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.put(L+"/auth/blog/update",{blog:t},{withCredentials:!0});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.delete(L+"/auth/blog/delete",{data:{id:t}});case 3:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.delete(L+"/auth/blog/delete-all",{data:{user:t}});case 3:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(L),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}();var J=function(){var e=Object(g.w)(),t=Object(n.useState)({email:"",password:""}),a=Object(x.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),u=Object(x.a)(o,2),s=u[0],i=u[1],m=Object(n.useState)(!1),d=Object(x.a)(m,2),p=d[0],E=d[1],h=function(){return!(!c.email||!C.a.isEmail(c.email))},v=function(){return!(!c.password||!C.a.isStrongPassword(c.password,{minLength:6,minLowercase:0,minUppercase:0,minNumbers:0,minSymbols:0}))},O=function(){return!(!v()||!h())},k=function(){var t=Object(N.a)(j.a.mark(function t(a){var n;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!O()){t.next=13;break}return t.next=4,P(c);case 4:if(n=t.sent,console.log(n),!n){t.next=10;break}e("/Tweeter/auth/dashboard/"),t.next=11;break;case 10:return t.abrupt("return",alert("Wrong password or email"));case 11:t.next=14;break;case 13:e("/Tweeter");case 14:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"container-image"},r.a.createElement(f.a,{src:"/Tweeterimage.png",roundedCircle:!0,className:"img-fluid"})),r.a.createElement("div",{className:"pitch-text"},"Welcome back ",r.a.createElement("br",null),"\u2282(\u25c9\u203f\u25c9)\u3064"),r.a.createElement("div",{className:"vertical-line"}),r.a.createElement(y.a,{className:"login"},r.a.createElement(y.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(y.a.Control,{required:!0,name:"email",type:"email",placeholder:"Enter email",onChange:function(e){var t=e.currentTarget.value;l(Object(w.a)({},c,{email:t}))},onFocus:function(){i(!0)}}),!h()&&s&&c.email&&r.a.createElement(T.a,{className:"alert",severity:"error"},"Please enter a valid email")),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"formBasicPassword"},r.a.createElement(y.a.Control,{autoComplete:"on",required:!0,type:"password",placeholder:"Password",onChange:function(e){var t=e.currentTarget.value;l(Object(w.a)({},c,{password:t}))},onFocus:function(){E(!0)}}),!v()&&p&&c.password&&r.a.createElement(T.a,{className:"alert",severity:"error"},"Password should be atleast 6 characters long")),r.a.createElement(b.a,{disabled:!O(),className:"login-button",variant:"primary",type:"submit",size:"lg",onClick:k},"Log In")))};var Y=function(){var e=Object(g.w)(),t=Object(n.useState)({name:"",email:"",password:""}),a=Object(x.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),u=Object(x.a)(o,2),s=u[0],i=u[1],m=Object(n.useState)(!1),d=Object(x.a)(m,2),p=d[0],E=d[1],h=Object(n.useState)(!1),v=Object(x.a)(h,2),O=v[0],k=v[1],S=Object(n.useState)(""),I=Object(x.a)(S,2),L=I[0],P=I[1],F=function(){return!(!c.email||!C.a.isEmail(c.email))},D=function(){return!(!c.password||!C.a.isStrongPassword(c.password,{minLength:6,minLowercase:0,minUppercase:0,minNumbers:0,minSymbols:0}))},G=function(){return!!(D()&&F()&&c.name&&c.password&&c.email&&L===c.password)},A=function(){var t=Object(N.a)(j.a.mark(function t(a){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!G()){t.next=12;break}return t.next=4,B(c);case 4:if(!t.sent){t.next=9;break}e("/Tweeter/auth/dashboard/"),t.next=10;break;case 9:return t.abrupt("return",alert("The email is already in use"));case 10:t.next=13;break;case 12:e("/Tweeter/");case 13:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"container-image"},r.a.createElement(f.a,{src:"/Tweeterimage.png",roundedCircle:!0,className:"img-fluid"})),r.a.createElement("div",{className:"pitch-text"},"Onboarding ",r.a.createElement("br",null),"\u0295\u1d54\u1d25\u1d54\u0294"),r.a.createElement("div",{className:"vertical-line"}),r.a.createElement(y.a,{className:"signup"},r.a.createElement(y.a.Group,{className:"mb-3",controlId:"formBasicName"},r.a.createElement(y.a.Control,{required:!0,type:"text",name:"name",placeholder:"Enter your Name",onChange:function(e){var t=e.currentTarget.value;l(Object(w.a)({},c,{name:t}))}})),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(y.a.Control,{required:!0,type:"email",name:"email",placeholder:"Enter your email address",onChange:function(e){var t=e.currentTarget.value;l(Object(w.a)({},c,{email:t}))},onFocus:function(){i(!0)}}),!F()&&s&&c.email&&r.a.createElement(T.a,{className:"alert",severity:"error"},"Please enter a valid email")),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"formBasicPassword"},r.a.createElement(y.a.Control,{autoComplete:"on",required:!0,type:"password",name:"password",placeholder:"Password",onChange:function(e){var t=e.currentTarget.value;l(Object(w.a)({},c,{password:t}))},onFocus:function(){E(!0)}}),!D()&&p&&c.password&&r.a.createElement(T.a,{className:"alert",severity:"error"},"Password should be atleast 6 characters long")),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"formBasicPasswordRetype"},r.a.createElement(y.a.Control,{autoComplete:"on",required:!0,type:"password",name:"password-retyped",placeholder:"Retype the Password",onChange:function(e){var t=e.currentTarget.value;P(t)},onFocus:function(){k(!0)}}),!(c.password===L)&&O&&L.length>0&&r.a.createElement(T.a,{className:"alert",severity:"error"},"Passwords do not match!")),r.a.createElement(b.a,{disabled:!G(),className:"signup-button",variant:"outline-dark",type:"submit",size:"lg",onClick:A},"Sign Up")))},K=a(138),Q=a.n(K),V=a(137),X=a.n(V);a(266);var Z=function(){return r.a.createElement("div",null,r.a.createElement(f.a,{src:"/Tweeter/me.jpg",roundedCircle:!0,className:"about-image"}),r.a.createElement("div",{className:"about-section"},r.a.createElement("div",{className:"about-intro"},r.a.createElement("b",null,"This Blog website is created by Ayush Ranjan, a 4",r.a.createElement("sup",null,"th")," year student at IIITDM, Kancheepuram"),r.a.createElement("br",null)," ",r.a.createElement("br",null),"The frontend is written in ReactJS Typescript and the backend uses ExpressJS. The frontend is hosted on Github pages and the backend is hosted on Heroku. The database used is MongoDB hosted on MongoDB Atlas.",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{className:"about-links"},"My Resume: ",r.a.createElement("a",{href:"https://drive.google.com/file/d/1EePdW8rjaboxdApqaDd37poKwLr754-x/view?usp=sharing"},r.a.createElement("i",null,"Click here")),r.a.createElement("br",null),"Contact me: ",r.a.createElement("a",{href:"/contact"},r.a.createElement("i",null,"Click here"))),r.a.createElement("div",{className:"about-social-icons"},r.a.createElement("a",{href:"https://linkedin.com/in/ayushr2345"},r.a.createElement(X.a,{className:"social-icon"})),r.a.createElement("a",{href:"https://github.com/ayushr2345"},r.a.createElement(Q.a,{className:"social-icon"}))))))};var $=function(){return r.a.createElement("div",{className:"contact-section"},r.a.createElement("b",null,"Contact me:"),r.a.createElement("div",{className:"contact-email"},"Email: ",r.a.createElement("a",{href:"mailto:ayush.r2345@gmail.com"},"ayush.r2345@gmail.com")),r.a.createElement("div",{className:"contact-email"},"Phone: ",r.a.createElement("a",{href:"tel:+919198476520"},"+91 9198-476-520")))},ee=a(295),te=(a(100),function(e){var t=e.blog,a=Object(n.useState)({name:"",email:""}),c=Object(x.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){return G(t).then(function(e){o(e.user)}),o({name:"",email:""})},[t]),r.a.createElement("a",{href:"/Tweeter/auth/blog/"+t._id},r.a.createElement(ee.a,{className:"blog-card"},r.a.createElement(ee.a.Body,null,r.a.createElement(ee.a.Title,null,t.title),r.a.createElement(ee.a.Subtitle,{className:"mb-2 text-muted"},l.name),r.a.createElement(ee.a.Subtitle,{className:"mb-2 text-muted card-date"},t.datePublished.toString().slice(0,10)),r.a.createElement("div",{className:"image-section"},l.profileImage&&r.a.createElement("img",{className:"profile-image-dashboard",src:"".concat(l.profileImage),alt:"avatar",width:"128",height:"128"})),r.a.createElement(ee.a.Text,{className:"article-text"},t.article.slice(0,300)+"..."))))}),ae=function(e){var t=e.blog,a=Object(n.useState)(""),c=Object(x.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)(function(){return G(t).then(function(e){o(e.user.name)}),o("")},[]),r.a.createElement("a",{href:"/Tweeter/auth/blog/"+t._id},r.a.createElement(ee.a,{className:"blog-card-latest"},r.a.createElement(ee.a.Body,null,r.a.createElement(ee.a.Title,{className:"latest"},t.title),r.a.createElement(ee.a.Subtitle,{className:"mb-2 text-muted latest"},l),r.a.createElement(ee.a.Subtitle,{className:"mb-2 text-muted card-date latest"},t.datePublished.toString().slice(0,10)))))};var ne=function(){var e=new Date,t=Object(g.w)(),a=Object(n.useState)({title:"",article:"",_id:"",authorId:"",datePublished:e}),c=Object(x.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)({name:"",email:""}),s=Object(x.a)(u,2),i=s[0],d=s[1],p=Object(n.useState)([]),f=Object(x.a)(p,2),E=f[0],h=f[1],v=Object(g.z)().user;Object(n.useEffect)(function(){return v&&(d(v),H().then(function(e){h(e)})),h([])},[i]);var O=function(){return l.article.length>0&&l.title.length>0},k=function(){var a=Object(N.a)(j.a.mark(function a(n){return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),!O()){a.next=7;break}return a.next=4,q(l).then(function(){o({title:"",article:"",_id:"",authorId:"",datePublished:e})});case 4:H().then(function(e){h(e)}),a.next=8;break;case 7:t("/Tweeter/");case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),C=0;return r.a.createElement("div",{className:"blogs"},r.a.createElement(y.a,{id:"create-blog"},r.a.createElement(y.a.Label,{className:"heading"},"Post a new Article"),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"title"},r.a.createElement(y.a.Control,{required:!0,name:"title",value:l.title,type:"text",placeholder:"Title",onChange:function(e){var t=e.currentTarget.value;o(Object(w.a)({},l,{title:t}))}})),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"article"},r.a.createElement(y.a.Control,{required:!0,name:"article",value:l.article,as:"textarea",rows:5,placeholder:"Sart typing",onChange:function(e){var t=e.currentTarget.value;o(Object(w.a)({},l,{article:t}))}})),r.a.createElement("div",{className:"buttons"},r.a.createElement(b.a,{onClick:function(){o({title:"",article:"",_id:"",authorId:"",datePublished:e})},variant:"danger",type:"submit",className:"button-form-reset"},"Reset"),r.a.createElement(b.a,{disabled:!O(),onClick:k,variant:"outline-dark",type:"submit",className:"button-form-submit"},"Post"))),0==E.length?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"break-form"},"----- ALL BLOGS ----"),r.a.createElement("div",{className:"all-blogs"},E.map(function(e,t){return r.a.createElement(te,{blog:e,key:t})}),r.a.createElement("div",{className:"break"},"That's it for now")),r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"image-section"},i.profileImage&&r.a.createElement("img",{className:"profile-image",src:"".concat(i.profileImage),alt:"avatar",width:"128",height:"128"})),r.a.createElement("div",{className:"user-name"},i.name),r.a.createElement("br",null),r.a.createElement("div",{className:"user-email"},i.email,r.a.createElement("br",null),r.a.createElement("div",{className:"user-bio"},i.bio),r.a.createElement(m.LinkContainer,{className:"goto-profile",to:"/Tweeter/auth/profile/"},r.a.createElement("a",null,"Go to Profile"))),r.a.createElement("br",null),r.a.createElement("b",null,"Latest Blogs"),r.a.createElement("div",null,E.map(function(e,t){if(e.authorId!=i._id&&C<3)return C++,r.a.createElement(ae,{blog:e,key:t})})),r.a.createElement("br",null),r.a.createElement(b.a,{className:"logout-button button-form",variant:"outline-danger",size:"sm",onClick:Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t("/Tweeter");case 3:case"end":return e.stop()}},e)}))},"Log Out")),r.a.createElement(g.d,null))};var re=function(){var e=Object(n.useState)({name:"",email:"",dob:""}),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(x.a)(l,2),u=o[0],s=o[1],i=Object(n.useState)(!1),m=Object(x.a)(i,2),d=m[0],p=m[1];return Object(n.useEffect)(function(){function e(){return(e=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().then(function(e){null===e.user?(p(!1),s(!1)):(p(!0),s(!1),c(e.user))});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),c({})},[]),u?r.a.createElement(r.a.Fragment,null,"Loading"):d?r.a.createElement(g.d,{context:{user:a}}):r.a.createElement(g.b,{to:"/Tweeter/login/"})};var ce=function(){var e=Object(n.useState)(!0),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(x.a)(l,2),u=o[0],s=o[1];return Object(n.useEffect)(function(){function e(){return(e=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().then(function(e){null===e.user?(s(!1),c(!1)):(s(!0),c(!1))});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),a?r.a.createElement(r.a.Fragment,null,"Loading..."):u?r.a.createElement(g.b,{to:"/Tweeter/auth/dashboard/"}):r.a.createElement(g.d,null)};var le=function(){var e=Object(n.useState)(!0),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(x.a)(l,2),u=o[0],s=o[1];return Object(n.useEffect)(function(){function e(){return(e=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().then(function(e){null===e.user?(s(!1),c(!1)):(s(!0),c(!1))});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),a?r.a.createElement(r.a.Fragment,null,"Loading..."):u?r.a.createElement(g.b,{to:"/Tweeter/auth/dashboard/"}):r.a.createElement(g.d,null)};var oe=function(){var e=Object(g.A)().id,t=new Date,a=Object(n.useState)({title:"",article:"",_id:"",authorId:"",datePublished:t}),c=Object(x.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)({name:"",email:""}),s=Object(x.a)(u,2),i=s[0],m=s[1];return Object(n.useEffect)(function(){return G(l).then(function(e){m(e.user)}),m({})},[l]),Object(n.useEffect)(function(){return e&&R(e).then(function(e){o(e[0])}),o({title:"",article:"",_id:"",authorId:"",datePublished:t})},[]),r.a.createElement("div",null,r.a.createElement(ee.a,{className:"blog-card-blog-page"},r.a.createElement(ee.a.Body,null,r.a.createElement(ee.a.Title,null,l.title),r.a.createElement(ee.a.Subtitle,{className:"mb-2 text-muted"},i.name),r.a.createElement(ee.a.Subtitle,{className:"mb-2 text-muted card-date"},l.datePublished.toString().slice(0,10)),r.a.createElement("div",{className:"image-section"},i.profileImage&&r.a.createElement("img",{className:"profile-image-blog",src:"".concat(i.profileImage),alt:"avatar",width:"128",height:"128"})),r.a.createElement(ee.a.Text,{className:"article-text",style:{whiteSpace:"pre-wrap"}},l.article))))};var ue=function(){var e=Object(n.useState)({name:"",email:"",dob:""}),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(x.a)(l,2),u=o[0],s=o[1],i=Object(n.useState)(!1),m=Object(x.a)(i,2),d=m[0],p=m[1];return Object(n.useEffect)(function(){function e(){return(e=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().then(function(e){null===e.user?(p(!1),s(!1)):(p(!0),s(!1),c(e.user))});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),u?r.a.createElement(r.a.Fragment,null,"Loading..."):d?r.a.createElement(g.d,{context:{user:a}}):r.a.createElement(g.b,{to:"/Tweeter/login/"})},se=a(293),ie=a(288),me=a(139),de=a.n(me),pe=a(87),fe=a.n(pe),be=function(e){var t=e.blog,a=e.updateBlogList,c=new Date,l=Object(n.useState)({title:"",article:"",_id:"",authorId:"",datePublished:c}),o=Object(x.a)(l,2),u=o[0],s=o[1];Object(n.useEffect)(function(){return s(t),function(){s({title:"",article:"",_id:"",authorId:"",datePublished:c})}},[]);var i=Object(n.useState)(""),m=Object(x.a)(i,2),d=m[0],p=m[1],f=Object(n.useState)(!1),E=Object(x.a)(f,2),h=E[0],v=E[1],g=Object(n.useState)(!1),O=Object(x.a)(g,2),k=O[0],C=O[1],T=function(){v(!1),s(t)};Object(n.useEffect)(function(){return G(t).then(function(e){p(e.user.name)}),p("")},[t]);var S=function(){var e=Object(N.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(u).then(function(e){s(e.updatedBlog),T(),a()});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),I=function(){return C(!1)},L=function(){var e=Object(N.a)(j.a.mark(function e(n){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t._id).then(function(e){I(),a()});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("a",{href:"/Tweeter/auth/blog/"+t._id},r.a.createElement(ee.a,{className:"blog-card-profile"},r.a.createElement(ee.a.Body,null,r.a.createElement(ee.a.Title,null,t.title),r.a.createElement(ee.a.Subtitle,{className:"mb-2 text-muted"},d),r.a.createElement(ee.a.Subtitle,{className:"mb-2 text-muted card-date"},t.datePublished.toString().slice(0,10)),r.a.createElement(ee.a.Text,{className:"article-text"},t.article.slice(0,300)+"..."),r.a.createElement(fe.a,{className:"edit-icon",onClick:function(e){e.preventDefault(),v(!0)}}),r.a.createElement(de.a,{className:"delete-icon",onClick:function(e){e.preventDefault(),C(!0)}}),r.a.createElement(se.a,{show:h,onHide:T},r.a.createElement(se.a.Header,{closeButton:!0},r.a.createElement(se.a.Title,null,"Edit Blog")),r.a.createElement(se.a.Body,null,r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(y.a.Label,null,"Title"),r.a.createElement(y.a.Control,{type:"text",value:u.title,autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;s(Object(w.a)({},u,{title:t}))}})),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(y.a.Label,null,"Blog"),r.a.createElement(y.a.Control,{as:"textarea",rows:7,value:u.article,onChange:function(e){var t=e.currentTarget.value;s(Object(w.a)({},u,{article:t}))}})))),r.a.createElement(se.a.Footer,null,r.a.createElement(b.a,{variant:"secondary",onClick:T},"Close"),r.a.createElement(b.a,{variant:"primary",onClick:S},"Save Changes"))),r.a.createElement(se.a,{show:k,onHide:I},r.a.createElement(se.a.Header,{closeButton:!0},r.a.createElement(se.a.Title,null,"Deleting Blog")),r.a.createElement(se.a.Body,null,r.a.createElement(ie.a,{variant:"danger"},"Are you sure you want to delete this blog?")),r.a.createElement(se.a.Footer,null,r.a.createElement(b.a,{variant:"primary",onClick:I},"No"),r.a.createElement(b.a,{variant:"danger",onClick:L},"Delete"))))))};a(267);var Ee=function(){var e=Object(g.w)(),t=Object(n.useState)(""),a=Object(x.a)(t,2),c=(a[0],a[1],Object(n.useState)({name:"",email:"",bio:""})),l=Object(x.a)(c,2),o=l[0],u=l[1],s=Object(n.useState)({name:"",email:"",bio:""}),i=Object(x.a)(s,2),d=i[0],p=i[1],f=Object(n.useState)([]),E=Object(x.a)(f,2),h=E[0],v=E[1],O=Object(g.z)().user,k=Object(g.z)().getUpdatedUser;Object(n.useEffect)(function(){O&&(u(O),H().then(function(e){v(e),p(O)}))},[O]);var C=function(){H().then(function(e){v(e)})},T=function(){var e=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(d).then(function(e){console.log(e)});case 2:k(),M();case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),S=function(e){return new Promise(function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)},n.onerror=function(e){a(e)}})},I=function(){var e=Object(N.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!t.target.files[0]){e.next=9;break}return a=t.target.files[0],e.next=5,S(a);case 5:return n=e.sent,e.next=8,_(n).then(function(e){});case 8:k();case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),L=Object(n.useState)(!1),B=Object(x.a)(L,2),P=B[0],F=B[1],D=Object(n.useState)(!1),G=Object(x.a)(D,2),q=G[0],R=G[1],z=function(){return F(!1)},M=function(){R(!1),p(O)},J=function(){var t=Object(N.a)(j.a.mark(function t(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return z(),e("/Tweeter"),t.next=4,W(o);case 4:return t.next=6,U(o);case 6:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"profile"},r.a.createElement("div",null,r.a.createElement("div",{className:"image-section-profile"},o.profileImage&&r.a.createElement("img",{className:"profile-image-profile",src:"".concat(o.profileImage),alt:"avatar",width:"256",height:"256"}),r.a.createElement("label",{htmlFor:"file"},r.a.createElement("input",{type:"file",className:"hidden-form-image",id:"file",onChange:I}),r.a.createElement(fe.a,{className:"edit-profile-image"})))),r.a.createElement("div",{className:"user-name"},d.name),r.a.createElement("br",null),r.a.createElement("div",{className:"user-email"},d.email," ",r.a.createElement("br",null),r.a.createElement("div",{className:"user-bio"},o.bio),r.a.createElement(m.LinkContainer,{className:"goto-dashboard",to:"/Tweeter/auth/dashboard/"},r.a.createElement("a",null,"Go to Dashboard"))),r.a.createElement("br",null),r.a.createElement(b.a,{variant:"primary",className:"edit-profile-button",onClick:function(){return R(!0)}},"Update Profile"),r.a.createElement(se.a,{show:q,onHide:M},r.a.createElement(se.a.Header,{closeButton:!0},r.a.createElement(se.a.Title,null,"Updating Profile")),r.a.createElement(se.a.Body,null,r.a.createElement(ie.a,{variant:"warning"},"You cannot update NAME, EMAIL or DOB once it is set!"),r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(y.a.Label,null,"Name"),r.a.createElement(y.a.Control,{type:"text",value:o.name,disabled:!0})),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(y.a.Label,null,"Email"),r.a.createElement(y.a.Control,{type:"text",value:o.email,disabled:!0})),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(y.a.Label,null,"Bio"),r.a.createElement(y.a.Control,{as:"textarea",rows:3,value:d.bio,placeholder:"Write a bio",onChange:function(e){var t=e.currentTarget.value;p(Object(w.a)({},d,{bio:t}))}})),r.a.createElement(y.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1"},r.a.createElement(y.a.Label,null,"Date Of Birth"),r.a.createElement(y.a.Control,{type:"date",value:o.dob?o.dob.slice(0,10):o.dob,disabled:!!o.dob,onChange:function(e){var t=e.currentTarget.value;p(Object(w.a)({},d,{dob:t}))}})))),r.a.createElement(se.a.Footer,null,r.a.createElement(b.a,{variant:"danger",onClick:M},"Cancel"),r.a.createElement(b.a,{variant:"primary",onClick:T},"Save Changes"))),r.a.createElement("br",null),r.a.createElement(b.a,{variant:"outline-danger",className:"delete-profile-button",onClick:function(){return F(!0)}},"Delete Profile"),r.a.createElement(se.a,{show:P,onHide:z},r.a.createElement(se.a.Header,{closeButton:!0},r.a.createElement(se.a.Title,null,"Deleting Profile")),r.a.createElement(se.a.Body,null,r.a.createElement(ie.a,{variant:"danger"},"Are you sure you want to delete the profile?")),r.a.createElement(se.a.Footer,null,r.a.createElement(b.a,{variant:"primary",onClick:z},"No"),r.a.createElement(b.a,{variant:"danger",onClick:J},"Delete")))),r.a.createElement("div",{className:"my-blogs"},r.a.createElement("div",{className:"break-form"},"----- MY BLOGS ----"),r.a.createElement("div",null,h.map(function(e,t){if(e.authorId===o._id)return r.a.createElement(be,{blog:e,updateBlogList:C,key:t})}))))};var he=function(){var e=Object(n.useState)({name:"",email:"",dob:""}),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(x.a)(l,2),u=o[0],s=o[1],i=Object(n.useState)(!1),m=Object(x.a)(i,2),d=m[0],p=m[1];Object(n.useEffect)(function(){function e(){return(e=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().then(function(e){null===e.user?(p(!1),s(!1)):(p(!0),s(!1),c(e.user))});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var f=function(){var e=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().then(function(e){null===e.user?(p(!1),s(!1)):(p(!0),s(!1),c(e.user))});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return u?r.a.createElement(r.a.Fragment,null,"Loading..."):d?r.a.createElement(g.d,{context:{user:a,getUpdatedUser:f}}):r.a.createElement(g.b,{to:"/Tweeter/login/"})};var ve=function(){var e=Object(n.useState)(!0),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(x.a)(l,2),u=o[0],s=o[1];return Object(n.useEffect)(function(){function e(){return(e=Object(N.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D().then(function(e){null===e.user?(s(!1),c(!1)):(s(!0),c(!1))});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),a?r.a.createElement(r.a.Fragment,null,"Loading..."):u?r.a.createElement(g.b,{to:"/Tweeter/auth/dashboard/"}):r.a.createElement(g.d,null)};var ge=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(g.g,null,r.a.createElement(g.e,{path:"/Tweeter/",element:r.a.createElement(ve,null)},r.a.createElement(g.e,{path:"",element:r.a.createElement(v,null)})),r.a.createElement(g.e,{path:"/Tweeter/about/",element:r.a.createElement(Z,null)}),r.a.createElement(g.e,{path:"contact",element:r.a.createElement($,null)}),r.a.createElement(g.e,{path:"/Tweeter/login/",element:r.a.createElement(ce,null)},r.a.createElement(g.e,{path:"",element:r.a.createElement(J,null)})),r.a.createElement(g.e,{path:"/Tweeter/signup/",element:r.a.createElement(le,null)},r.a.createElement(g.e,{path:"",element:r.a.createElement(Y,null)})),r.a.createElement(g.e,{path:"/Tweeter/auth/dashboard/",element:r.a.createElement(re,null)},r.a.createElement(g.e,{path:"",element:r.a.createElement(ne,null)})),r.a.createElement(g.e,{path:"/Tweeter/auth/blog/:id/",element:r.a.createElement(ue,null)},r.a.createElement(g.e,{path:"",element:r.a.createElement(oe,null)})),r.a.createElement(g.e,{path:"/Tweeter/auth/profile/",element:r.a.createElement(he,null)},r.a.createElement(g.e,{path:"",element:r.a.createElement(Ee,null)}))),r.a.createElement(p,null))},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,296)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(o.BrowserRouter,null,r.a.createElement(ge,null)),document.getElementById("root")),we()}},[[146,1,2]]]);
//# sourceMappingURL=main.79184197.chunk.js.map