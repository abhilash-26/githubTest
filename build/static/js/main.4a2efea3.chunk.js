(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a,r,o,c,s,i,l,u,d,j=n(0),b=n.n(j),p=n(36),h=n.n(p),x=(n(45),n(46),n(19)),O=n(2),g=n(5),f=n.n(g),m=n(7),v=n(15),w=n(14),y=n(13),k=n(3),C=n(8),S=n.n(C),I=n(4),A=n(1),E=I.a.div(a||(a=Object(k.a)(["\n  height: auto;\n  width: 50%;\n  padding: 20px;\n  box-shadow: 10px 10px 5px #aaaaaa;\n  border-radius: 10px;\n  @media screen and (max-width: 700px) {\n    width: 100%;\n  }\n"]))),z=I.a.p(r||(r=Object(k.a)(["\n  font-size: 22px;\n  font-weight: 600;\n  font-family: Lato;\n"]))),B=I.a.div(o||(o=Object(k.a)(["\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),L=I.a.label(c||(c=Object(k.a)(["\n  font-family: Lato;\n  font-weight: 500;\n  margin-right: 10px;\n"]))),P=I.a.input(s||(s=Object(k.a)(["\n  width: 50%;\n  border: none;\n  border-bottom: 1px solid grey;\n  outline: none;\n"]))),F=(I.a.select(i||(i=Object(k.a)(["\n  width: 30%;\n  border-radius: 5px;\n"]))),I.a.option(l||(l=Object(k.a)([""]))),I.a.textarea(u||(u=Object(k.a)(["\n  border-radius: 5px;\n"]))),I.a.button(d||(d=Object(k.a)(["\n  border: none;\n  background-color: orange;\n  border-radius: 8px;\n  width: 100px;\n  height: 40px;\n  color: white;\n  cursor: pointer;\n  font-size: 20px;\n"]))));var N,D,T,U,_,J,M,q,G,H,K,Q,R,V=function(){var e=Object(j.useState)({email:"",password:""}),t=Object(y.a)(e,2),n=t[0],a=t[1],r=function(e){a(Object(w.a)(Object(w.a)({},n),{},Object(v.a)({},e.target.name,e.target.value)))},o=Object(O.f)(),c=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S()({method:"post",url:"http://localhost:8080/api/user/login",data:n});case 3:0==(t=e.sent).data.status?(localStorage.setItem("userId",t.data.user._id),localStorage.setItem("role",t.data.user.role),"A"===t.data.user.role?o.push("/admin-home"):o.push("/user-home")):alert(t.data.message),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(A.jsxs)(E,{children:[Object(A.jsx)(z,{children:"SignIn"}),Object(A.jsxs)(B,{children:[Object(A.jsx)(L,{children:"Email :-"}),Object(A.jsx)(P,{name:"email",value:n.email,onChange:r})]}),Object(A.jsxs)(B,{children:[Object(A.jsx)(L,{children:"Password :-"}),Object(A.jsx)(P,{name:"password",value:n.password,onChange:r})]}),Object(A.jsx)(F,{onClick:c,children:"Login"}),Object(A.jsxs)("p",{children:["Don't have a account yet?"," ",Object(A.jsx)(x.b,{style:{textDecoration:"none"},to:"/register",children:"signUp"})]})]})},W=I.a.div(N||(N=Object(k.a)(["\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  height: 200px;\n  width: 150px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),X=I.a.p(D||(D=Object(k.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  /* margin: auto; */\n"]))),Y=function(e){var t=e.name,n=e.blog,a=Object(O.f)();return console.log(n,"blog"),Object(A.jsx)(W,{onClick:function(){return t?a.push({pathname:"/all-blog-by-one-user",state:t}):a.push({pathname:"/blog",state:n})},children:Object(A.jsxs)(X,{children:[null===t||void 0===t?void 0:t.name,null===n||void 0===n?void 0:n.title]})})},Z=I.a.div(T||(T=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),$=I.a.button(U||(U=Object(k.a)(["\n  margin-top: 20px;\n  width: auto;\n  padding: 10px;\n  height: auto;\n  border-radius: 8px;\n  cursor: pointer;\n  border: none;\n  background-color: orange;\n  font-size: 14px;\n  font-weight: 550;\n"]))),ee=I.a.div(_||(_=Object(k.a)(["\n  height: 500px;\n  width: 600px;\n  border: 1px solid red;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),te=function(){var e=Object(j.useState)([]),t=Object(y.a)(e,2),n=t[0],a=t[1];Object(j.useEffect)((function(){console.log("ruuuu");var e=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({method:"post",url:"http://localhost:8080/api/user/get-all-author"});case 2:t=e.sent,console.log(t),a(t.data.allUser);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var r=Object(O.f)();return Object(A.jsxs)(Z,{children:[Object(A.jsx)($,{onClick:function(){return r.push("/add-user")},children:"Add new user"}),Object(A.jsx)(z,{children:"All users"}),Object(A.jsx)(ee,{children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(A.jsx)(Y,{name:e})}))})]})},ne=function(){var e=Object(j.useState)([]),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(O.g)().state;return console.log(r,"jjjjj"),Object(j.useEffect)((function(){var e=function(){var e=Object(m.a)(f.a.mark((function e(t,n){var o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S()({method:"post",url:"http://localhost:8080/api/blog/get-all",data:{author:r._id}});case 3:o=e.sent,console.log(o,"dfg"),a(o.data.blog),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();e()}),[]),Object(A.jsxs)(E,{style:{boxShadow:"none",border:"1px solid red"},children:[Object(A.jsx)("h2",{children:"All Blogs are "}),null===n||void 0===n?void 0:n.map((function(e,t){return Object(A.jsx)(Y,{blog:e},t)})),0==n.length&&Object(A.jsx)("h2",{children:"No blogs found !!"})]})},ae=I.a.div(J||(J=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),re=I.a.button(M||(M=Object(k.a)(["\n  border: none;\n  border-radius: 7px;\n  padding: 8px;\n  background-color: blue;\n  width: max-content;\n  color: white;\n"]))),oe=function(){var e=Object(j.useState)({name:"",email:"",password:"",phone:""}),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(O.f)(),o=function(e){a(Object(w.a)(Object(w.a)({},n),{},Object(v.a)({},e.target.name,e.target.value)))},c=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(n.name&&n.email&&n.password&&n.phone)){e.next=4;break}alert("plaese fill all the fields"),e.next=9;break;case 4:return e.next=6,S()({method:"post",url:"http://localhost:8080/api/user/register",data:n});case 6:t=e.sent,console.log(t),0==t.data.status&&r.push("/admin-home");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.jsxs)(ae,{children:[Object(A.jsx)("p",{children:"Enter the user details you want to add"}),Object(A.jsxs)(B,{children:[Object(A.jsx)(L,{children:"Name"}),Object(A.jsx)(P,{name:"name",value:n.name,onChange:o})]}),Object(A.jsxs)(B,{children:[Object(A.jsx)(L,{children:"Email"}),Object(A.jsx)(P,{name:"email",value:n.email,onChange:o})]}),Object(A.jsxs)(B,{children:[Object(A.jsx)(L,{children:"Password"}),Object(A.jsx)(P,{name:"password",value:n.password,onChange:o,type:"password"})]}),Object(A.jsxs)(B,{children:[Object(A.jsx)(L,{children:"Phone"}),Object(A.jsx)(P,{name:"phone",type:"number",value:n.phone,onChange:o})]}),Object(A.jsx)(re,{onClick:c,children:"Create User"})]})},ce=I.a.div(q||(q=Object(k.a)([""]))),se=I.a.input(G||(G=Object(k.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  width: 400px;\n"]))),ie=I.a.textarea(H||(H=Object(k.a)(["\n  height: 300px;\n  width: 400px;\n  border-radius: 10px;\n  padding: 10px;\n"]))),le=I.a.button(K||(K=Object(k.a)(["\n  border-radius: 8px;\n  border: none;\n  background-color: orange;\n  padding: 10px;\n  cursor: pointer;\n"]))),ue=function(){var e=localStorage.getItem("userId"),t=Object(O.f)(),n=Object(j.useState)({author:e,title:"",content:""}),a=Object(y.a)(n,2),r=a[0],o=a[1],c=function(){var e=Object(m.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!=(r.title&&r.content)){e.next=5;break}alert("fill all the fields"),e.next=10;break;case 5:return e.next=7,S()({method:"post",url:"http://localhost:8080/api/blog/create",data:r});case 7:n=e.sent,console.log(n),0==n.data.status&&t.push("/user-home");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),s=function(e){o(Object(w.a)(Object(w.a)({},r),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(A.jsxs)(ce,{children:[Object(A.jsx)(z,{children:"Add a new blog..."}),Object(A.jsxs)(B,{children:[Object(A.jsx)(L,{children:"Title"}),Object(A.jsx)(se,{name:"title",value:r.title,onChange:s})]}),Object(A.jsxs)(B,{children:[Object(A.jsx)(L,{children:"description"}),Object(A.jsx)(ie,{name:"content",value:r.content,onChange:s})]}),Object(A.jsx)(le,{onClick:c,children:"Click to submit"})]})},de=I.a.button(Q||(Q=Object(k.a)(["\n  border: none;\n  border-radius: 8px;\n  padding: 10px;\n  background-color: orange;\n"]))),je=function(){var e=Object(O.f)(),t=localStorage.getItem("userId"),n=Object(j.useState)([]),a=Object(y.a)(n,2),r=a[0],o=a[1];return console.log(t),Object(j.useEffect)((function(){var e=function(){var e=Object(m.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,S()({method:"post",url:"http://localhost:8080/api/blog/get-all-approved",data:{userId:t}});case 3:n=e.sent,o(n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(A.jsxs)(E,{children:[Object(A.jsx)(de,{onClick:function(){return e.push("/create-blog")},children:"Add a new blog"}),Object(A.jsx)(z,{children:"All blogs by me"}),Object(A.jsxs)(B,{children:[null===r||void 0===r?void 0:r.map((function(e,t){return Object(A.jsx)(Y,{blog:e})})),0==r.length&&Object(A.jsx)("h3",{children:"If you have created a blog then wait till it get approved !!!! or create new"})]})]})},be=I.a.p(R||(R=Object(k.a)(["\n  font-size: 12px;\n"]))),pe=function(){var e=localStorage.getItem("role");console.log(e,"rol");var t=Object(O.g)().state,n=Object(O.f)(),a=function(){var e=Object(m.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({method:"post",url:"http://localhost:8080/api/blog/approve-blog",data:{Id:t._id}});case 2:a=e.sent,console.log(a),n.push("/all-blog-by-one-user");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.jsxs)(E,{children:["A"==t.approved&&Object(A.jsx)("p",{children:"Blog is approved"}),Object(A.jsx)(z,{children:t.title}),Object(A.jsx)(be,{children:t.content}),"A"==e&&"N"==t.approved&&Object(A.jsx)("button",{onClick:a,children:"Approve Blog"})]})};var he=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(x.a,{children:Object(A.jsxs)(O.c,{children:[Object(A.jsx)(O.a,{exact:!0,path:"/",component:V}),Object(A.jsx)(O.a,{path:"/admin-home",component:te}),Object(A.jsx)(O.a,{path:"/user-home",component:je}),Object(A.jsx)(O.a,{path:"/all-blog-by-one-user",component:ne}),Object(A.jsx)(O.a,{path:"/add-user",component:oe}),Object(A.jsx)(O.a,{path:"/create-blog",component:ue}),Object(A.jsx)(O.a,{path:"/blog",component:pe})]})})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};h.a.render(Object(A.jsx)(b.a.StrictMode,{children:Object(A.jsx)(he,{})}),document.getElementById("root")),xe()}},[[71,1,2]]]);
//# sourceMappingURL=main.4a2efea3.chunk.js.map