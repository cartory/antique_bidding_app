(this["webpackJsonpantique-bidding-app"]=this["webpackJsonpantique-bidding-app"]||[]).push([[0],{155:function(e,t,n){"use strict";n.r(t);var c=n(122),r=n(211),a=n(51),i=n(22),o=n(2),s=n.n(o),l=n(5),d=n(201),u=n(202),j=n(213),b=n(198),m=n(214),x=n(216),p=n(229),h=n(220),O=n(224),g=n.p+"static/media/bid_square.baf0d3cc.svg",f=n(64),v=n(113),y=n.p+"static/media/logo.e1e74fa5.svg",k=n(0),w=n.n(k),S=n(226),I=n(215),A=n(227),C=n(228),P=n(200),z=n(81),D=n(4),B=n(17),q=n(212),F=n(217),N=n(196),T=n(207),R=n(218),M=n(208),U=n(219),$=n(206),J=n(221),L=n(222),V=n(223),E=n(55),W=n(1),_=[{value:10,label:"10$"},{value:50,label:"50$"},{value:100,label:"100$"}],G=function(){var e=Object(k.useState)({Categoryid:2,startPrice:20}),t=Object(B.a)(e,2),n=t[0],c=t[1],r=Object(E.useFetchAPI)({endpoint:"categories"}),i=Object(B.a)(r,1)[0],o=Object(E.useFetchAPI)({endpoint:"antiques",query:n,delayInMilliseconds:200}),s=Object(B.a)(o,1)[0];return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(q.a,{variant:"permanent",sx:Object(D.a)({width:240,flexShrink:0},"& .MuiDrawer-paper",{width:240,boxSizing:"border-box"}),children:[Object(W.jsx)(I.a,{}),Object(W.jsxs)(x.a,{sx:{overflow:"auto"},borderRight:0,children:[Object(W.jsx)(F.a,{children:Object(W.jsx)("h3",{children:"Filters"})}),Object(W.jsx)("br",{}),Object(W.jsxs)(F.a,{children:[Object(W.jsx)(N.a,{component:"legend",children:"Minimum bid"}),Object(W.jsx)("br",{}),Object(W.jsx)(T.a,{color:"secondary",marks:_,min:10,max:100,valueLabelDisplay:"auto",value:n.startPrice,onChange:function(e){var t=e.target;return c(Object(z.a)(Object(z.a)({},n),{},{startPrice:t.value}))}})]}),Object(W.jsx)("br",{}),Object(W.jsx)(F.a,{children:Object(W.jsxs)(R.a,{onChange:function(e){var t=e.target;return c(Object(z.a)(Object(z.a)({},n),{},{Categoryid:t.value}))},children:[Object(W.jsx)("br",{}),Object(W.jsx)(N.a,{component:"legend",children:"Category"}),Object(W.jsx)(M.a,{"aria-label":"category",defaultValue:n.Categoryid,name:"radio-buttons-group",children:null===i||void 0===i?void 0:i.map((function(e){var t=e.id,n=e.name;return Object(W.jsx)(U.a,{value:t,control:Object(W.jsx)($.a,{color:"secondary"}),label:n},t)}))})]})})]})]}),Object(W.jsx)(x.a,{component:"main",sx:{flexGrow:1,p:3,paddingTop:7},children:Object(W.jsx)(J.a,{cols:3,rowHeight:260,gap:3,variant:"quilted",style:{overflowY:"hidden"},children:s.map((function(e,t){return Object(W.jsxs)(L.a,{cols:1,rows:1,children:[Object(W.jsx)("img",{loading:"lazy",src:e.photoUrl,alt:e.name,style:{borderRadius:25,objectFit:"contain"}}),Object(W.jsx)(V.a,{title:Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("strong",{children:"$".concat(e.startPrice)}),"-".concat(e.name)]}),subtitle:e.description,style:{textOverflow:"clip",borderBottomRightRadius:25,borderBottomLeftRadius:25},actionIcon:Object(W.jsx)(a.b,{to:"/detail/".concat(e.id),style:{textDecoration:"none"},children:[Object(W.jsx)(O.a,{size:"small",color:"secondary",variant:"contained",style:{color:"white",textTransform:"none",marginRight:10},children:"Bid now"},"detail")]})})]},t)}))})})]})},H=n(119),K=n(209),Y=n(55),Q=Y.useSocket,X=Y.useFetchAPI,Z=function(e){return e.user?e.user.User_Antique.lastBid:null===e||void 0===e?void 0:e.startPrice},ee=function(e,t,n){return e?e.findIndex((function(e){var c=e.Userid,r=e.Bot_Antique,a=e.id;return c===t.id&&r.Botid===a&&r.Antiqueid===n.id})):-1},te=function(e){var t=e.context,n=Object(i.h)().id,c=Q(),r=Object(i.g)(),o=Object(k.useContext)(t),d=X({endpoint:"antiques/".concat(n)}),u=Object(B.a)(d,2),p=u[0],g=u[1];!p&&r("/home",{replace:!0});var f=Object(k.useState)(-1),v=Object(B.a)(f,2),y=v[0],w=v[1];Object(k.useEffect)((function(){w(ee(p.bots,o,p))}),[p,p.bots,p.id,o,o.id]),c.on("lastBid",(function(e){g(e)}));var S=function(){var e=Object(l.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(y<0?ee(p.bots,o,p):-1),e.prev=1,t="".concat("https://antique-bidding-app.herokuapp.com","/api/bots/").concat(o.bot.id,"?Antiqueid=").concat(Number.parseInt(n)),e.next=5,fetch(t);case 5:return c=e.sent,e.t0=console,e.next=9,c.json();case 9:e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(1),console.error(e.t2);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(W.jsxs)(x.a,{component:"main",sx:{flexGrow:1,p:0,paddingTop:5},children:[Object(W.jsx)(b.a,{}),Object(W.jsxs)(j.a,{container:!0,component:"main",sx:{height:"93vh"},children:[Object(W.jsx)(j.a,{item:!0,xs:!1,sm:4,md:7,sx:{opacity:".9",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(null===p||void 0===p?void 0:p.photoUrl,")"),backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]}}}),Object(W.jsx)(j.a,{item:!0,xs:12,sm:8,md:5,component:m.a,elevation:0,children:Object(W.jsxs)(x.a,{sx:{my:8,mx:4,display:"flex",alignItems:"start",flexDirection:"column"},children:[Object(W.jsx)(h.a,{component:"h2",variant:"h6",style:{fontWeight:"bold",textTransform:"capitalize"},children:null===p||void 0===p?void 0:p.productName}),Object(W.jsxs)("legend",{style:{color:"grey",fontSize:"110%",marginTop:0,marginBottom:0},children:["Minimum bid ",Object(W.jsxs)("strong",{children:["$",null===p||void 0===p?void 0:p.startPrice]})]}),Object(W.jsxs)(x.a,{component:"form",noValidate:!0,onSubmit:function(){},sx:{mt:1},children:[Object(W.jsxs)("p",{style:{color:"grey",fontSize:"80%"},children:[Object(W.jsx)("strong",{style:{margin:2,color:"black"},children:"Details"}),Object(W.jsx)("br",{}),null===p||void 0===p?void 0:p.description]}),Object(W.jsx)("br",{}),Object(W.jsxs)(j.a,{container:!0,direction:"row",justifyContent:"space-between",children:[Object(W.jsx)(j.a,{item:!0,children:Object(W.jsxs)("p",{style:{color:"grey",fontSize:"90%",textAlign:"start"},children:[Object(W.jsx)("strong",{style:{margin:2,color:"black"},children:"Last Bid"}),Object(W.jsx)("br",{}),p.user?"".concat(Z(p),"$ - ").concat(p.user.email):"".concat(Z(p),"$")]})}),Object(W.jsx)(j.a,{item:!0,children:Object(W.jsxs)("p",{style:{color:"grey",fontSize:"80%",textAlign:"end"},children:[Object(W.jsx)("strong",{style:{margin:2,color:"black"},children:"Available Until"}),Object(W.jsx)("br",{}),Object(W.jsx)(H.a,{date:new Date(Date.parse(null===p||void 0===p?void 0:p.endDate)),renderer:function(e){var t=e.days,n=e.hours,c=e.minutes,r=e.seconds;return e.completed?Object(W.jsx)("span",{className:"countdown",children:"Time Out!"}):Object(W.jsxs)("span",{className:"countdown",children:[t,"d:",n,"h:",c,"m:",r,"s"]})}})]})})]}),Object(W.jsx)(O.a,{fullWidth:!0,variant:"contained",children:["Place a Bid +1$"],sx:{mt:3,mb:2,textTransform:"capitalize"},onClick:function(){c.emit("bid",{Userid:o.id,Antiqueid:Number.parseInt(n),endDate:Date.parse(null===p||void 0===p?void 0:p.endDate),price:Z(p)+1})}}),Object(W.jsx)("br",{}),Object(W.jsx)(U.a,{name:"check",checked:y>=0,control:Object(W.jsx)(K.a,{color:"secondary"}),onChange:S,label:Object(W.jsxs)("p",{style:{fontSize:"75%"},children:["Activate the ",Object(W.jsx)(a.b,{to:"/settings/".concat(o.id),color:"secondary",style:{color:"#FF5D73"},children:"auto-binding"})]})})]})]})})]})]})},ne=n(203),ce=n(225),re=n(199),ae=n.p+"static/media/robo_hand.22876a0e.svg",ie=function(e){var t=e.context,n=Object(i.h)().id,c=Object(i.g)(),r=Object(k.useContext)(t);n!==r.id&&c("/",{replace:!0});var a=r.bot;return Object(W.jsxs)(x.a,{component:"main",sx:{flexGrow:1,p:0,paddingTop:5},children:[Object(W.jsx)(b.a,{}),Object(W.jsxs)(j.a,{container:!0,component:"main",sx:{height:"93vh"},children:[Object(W.jsx)(j.a,{item:!0,xs:12,sm:8,md:5,component:m.a,elevation:0,children:Object(W.jsxs)(x.a,{sx:{my:8,mx:4,display:"flex",alignItems:"start",flexDirection:"column"},children:[Object(W.jsx)("legend",{style:{color:"grey",fontSize:"90%",marginTop:0},children:"Settings"}),Object(W.jsx)(h.a,{component:"h3",variant:"h6",style:{fontWeight:"bold"},children:"Configure The Auto-bidding"}),Object(W.jsxs)(x.a,{component:"form",noValidate:!0,onSubmit:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!isNaN(a.maximumBidAmount)){e.next=5;break}alert("MaximumBidValue Not a Valid Number"),e.next=17;break;case 5:return a.maximumBidAmount=Number.parseFloat(a.maximumBidAmount),e.prev=6,e.next=9,Object(E.usePostAPI)({endpoint:"bots/".concat(a.id),body:a});case 9:a=e.sent,r.bot=a,sessionStorage.setItem("user",JSON.stringify(r)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}(),sx:{mt:1},children:[Object(W.jsxs)("p",{style:{color:"grey",fontSize:"75%"},children:[Object(W.jsx)("strong",{style:{margin:2,color:"black"},children:"Maximum bid amount"}),Object(W.jsx)("br",{}),"The maximum amount will be split between all items where we have we have activated auto-bidding"]}),Object(W.jsx)(ne.a,{size:"small",margin:"none",name:"maximumBidAmount",defaultValue:r.bot.maximumBidAmount,variant:"standard",style:{padding:0},onChange:function(e){var t=e.target;return a[t.name]=t.value},InputProps:{startAdornment:Object(W.jsx)(ce.a,{position:"start",children:[Object(W.jsx)(re.a,{},"bid")]})}}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:["Save"]})]})]})}),Object(W.jsx)(j.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(".concat(ae,")"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"75%",backgroundPosition:"center"}})]})]})},oe=function(){var e=Object(i.g)(),t=sessionStorage.getItem("user");!t&&e("/",{replace:!0});var n=JSON.parse(t),c=Object(k.createContext)(n);return Object(W.jsxs)(x.a,{sx:{display:"flex"},children:[Object(W.jsx)(b.a,{}),Object(W.jsx)(S.a,{elevation:1,position:"fixed",sx:{zIndex:function(e){return e.zIndex.drawer+1}},children:Object(W.jsx)(I.a,{style:{minHeight:"56px"},children:Object(W.jsxs)(j.a,{container:!0,direction:"row",alignItems:"center",children:[Object(W.jsx)(j.a,{item:!0,md:10,children:Object(W.jsx)(A.a,{children:Object(W.jsx)("img",{src:y,alt:y,height:50}),onClick:function(){return e("/home")}})}),Object(W.jsx)(j.a,{item:!0,md:1,sm:1,children:Object(W.jsx)("h4",{style:{textAlign:"end",paddingRight:10,textOverflow:"clip"},children:n.name})}),Object(W.jsx)(j.a,{item:!0,md:1,sm:1,children:Object(W.jsxs)(C.a,{max:2,children:[Object(W.jsx)(p.a,{alt:n.name,src:n.photoUrl,sx:{height:50,width:50}}),Object(W.jsx)(A.a,{title:"logOut",children:[Object(W.jsx)(P.a,{color:"secondary"},"logout")],onClick:Object(l.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(f.b)(),t.next=3,null===n||void 0===n?void 0:n.signOut();case 3:sessionStorage.clear(),e("/",{replace:!0});case 5:case"end":return t.stop()}}),t)})))})]})})]})})}),Object(W.jsx)(c.Provider,{value:n,children:Object(W.jsxs)(i.d,{children:[Object(W.jsx)(i.b,{path:"home",element:Object(W.jsx)(G,{})}),Object(W.jsx)(i.b,{path:"settings/:id",element:Object(W.jsx)(ie,{user:n,context:c})}),Object(W.jsx)(i.b,{path:"detail/:id",element:Object(W.jsx)(te,{user:n,context:c})})]})})]})},se={apiKey:"AIzaSyCglHy4McDNoddDzE8m4AhUM5mn9_rIyvs",authDomain:"binding-app-scopic.firebaseapp.com",projectId:"binding-app-scopic",storageBucket:"binding-app-scopic.appspot.com",messagingSenderId:"365292781659",appId:"1:365292781659:web:48faf0e16f2065b6073f7e"},le=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,c,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.b)(),n=new f.a,e.prev=2,e.next=5,Object(f.c)(t,n);case 5:return c=e.sent,r=f.a.credentialFromResult(c),e.next=9,Object(E.usePostAPI)({endpoint:"users",body:{email:c.user.email,name:c.user.displayName,photoUrl:c.user.photoURL}});case 9:return a=e.sent,sessionStorage.setItem("user",JSON.stringify(a)),sessionStorage.setItem("token",JSON.stringify({token:r.accessToken})),e.abrupt("return",!0);case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:return e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),de=function(){Object(v.a)(se);var e=Object(i.g)();return sessionStorage.getItem("user")?Object(W.jsx)(oe,{}):Object(W.jsxs)(j.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(W.jsx)(b.a,{}),Object(W.jsx)(j.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(".concat(g,")"),backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(W.jsx)(j.a,{item:!0,xs:12,sm:8,md:5,component:m.a,elevation:3,square:!0,children:Object(W.jsxs)(x.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(W.jsx)(p.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(W.jsx)(d.a,{})}),Object(W.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(W.jsx)(x.a,{sx:{mt:1},children:Object(W.jsx)(O.a,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},onClick:Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le();case 2:t.sent?e("/home",{replace:!0}):alert("Oops, Something goes wrong!!");case 4:case"end":return t.stop()}}),t)}))),startIcon:Object(W.jsx)(u.a,{}),children:"Google Sign In"})})]})})]})},ue=Object(c.a)({palette:{primary:{main:"#494949"},secondary:{main:"#FF5D73"},error:{main:"#f44336"},divider:"#7C7A7A"}}),je=function(){return Object(W.jsx)(r.a,{theme:ue,children:Object(W.jsx)(a.a,{children:Object(W.jsxs)(i.d,{children:[Object(W.jsx)(i.b,{path:"/*",element:Object(W.jsx)(de,{})}),Object(W.jsx)(i.b,{path:"*",element:Object(W.jsx)(i.a,{to:"/"})})]})})})},be=n(60),me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,231)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n.n(be).a.render(Object(W.jsx)(w.a.StrictMode,{children:Object(W.jsx)(je,{})}),document.getElementById("root")),me()},55:function(e,t,n){"use strict";n.r(t),n.d(t,"useFetchAPI",(function(){return l})),n.d(t,"usePostAPI",(function(){return d})),n.d(t,"useSocket",(function(){return u}));var c=n(2),r=n.n(c),a=n(5),i=n(17),o=n(121),s=n(0),l=function(e){var t=e.endpoint,n=void 0===t?"":t,c=e.query,o=void 0===c?{}:c,l=e.delayInMilliseconds,d=void 0===l?0:l,u=Object(s.useState)([]),j=Object(i.a)(u,2),b=j[0],m=j[1];return Object.keys(o).forEach((function(e,t){n+=(0===t?"?":"&")+"".concat(e,"=").concat(o[e])})),n="".concat("https://antique-bidding-app.herokuapp.com","/api/").concat(n),Object(s.useEffect)((function(){!function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}(fetch(n).then(function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,t.json();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)})),d)}),[n,d]),[b,m]},d=function(){var e=Object(a.a)(r.a.mark((function e(t){var n,c,a,i,o,s,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.endpoint,c=void 0===n?"":n,a=t.body,i=void 0===a?{}:a,o=t.method,s=void 0===o?"POST":o,e.prev=1,e.next=4,fetch("".concat("https://antique-bidding-app.herokuapp.com","/api/").concat(c),{method:s,headers:{Accept:"Application/json","Content-Type":"Application/json"},body:JSON.stringify(i)});case 4:return l=e.sent,e.next=7,l.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){try{return Object(o.a)("https://antique-bidding-app.herokuapp.com",{transports:["websocket"]})}catch(e){console.error(e)}return null}}},[[155,1,2]]]);
//# sourceMappingURL=main.f41416d2.chunk.js.map