(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{110:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i(29),c=i.n(a),s=i(7),r=(i(79),i(31)),o=(i(80),i(10)),l=i(24),d=i(3);var b=function(e){var t=Object(o.f)(),i=Object(n.useState)(t.pathname),a=Object(s.a)(i,2),c=a[0],b=a[1],j=Object(n.useState)(!0),p=Object(s.a)(j,2),h=p[0],m=p[1],u=Object(n.useState)(!0),g=Object(s.a)(u,2),x=g[0],v=g[1],O=Object(n.useState)(!0),f=Object(s.a)(O,2),y=f[0],k=f[1],w=Object(l.useSpring)({x:h?1:0,config:{duration:1e3}}),N=Object(l.useSpring)({x:x?1:0,config:{duration:1e3}}),S=Object(l.useSpring)({x:y?1:0,config:{duration:1e3}});function C(e){return{transform:e.x.to({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]}).to((function(e){return"scale(".concat(e,") Rotate(270deg)")}))}}return Object(d.jsxs)("div",{id:"Navbar",onClick:function(i){var n=i.target.getAttribute("id");console.log(n),b("/".concat(n));var a=t.pathname;switch(console.log(a),n){case"about":"/projects"===a&&e.handleReverse(!0),"/contact"===a&&e.handleReverse(!0),m((function(e){return!e}));break;case"projects":"/"===a&&e.handleReverse(!1),"/contact"===a&&e.handleReverse(!0),v((function(e){return!e}));break;case"github":"/"!==a&&"/projects"!==a||e.handleReverse(!1),k((function(e){return!e}))}},children:[Object(d.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"inherit",backgroundColor:"inherit",width:"15vh",height:"34px"},children:Object(d.jsx)(l.animated.div,{className:"/about"===c||"/"===c?"sub-Navbar activeNavbar":"sub-Navbar",id:"about",style:C(w),children:"ABOUT"})}),Object(d.jsx)(r.b,{to:"/projects",style:{textDecoration:"none",color:"inherit",backgroundColor:"inherit",width:"15vh",height:"34px"},children:Object(d.jsx)(l.animated.div,{className:"/projects"===c?"sub-Navbar activeNavbar":"sub-Navbar",id:"projects",style:C(N),children:"PROJECTS"})}),Object(d.jsx)(r.b,{to:"/contact",style:{textDecoration:"none",color:"inherit",backgroundColor:"inherit",width:"15vh",height:"34px"},children:Object(d.jsx)(l.animated.div,{className:"/contact"===c?"sub-Navbar activeNavbar":"sub-Navbar",id:"contact",style:C(S),children:"CONTACT"})}),Object(d.jsx)("div",{className:"underline",style:function(){switch(c){case"/":case"/about":return{marginBottom:"64vh"};case"/projects":return{};case"/contact":return{marginTop:"64vh"}}}()})]})},j=(i(88),i(132)),p=i.p+"static/media/vsumargo-photo.2361c828.png";i(89);var h=function(e){var t=Object(n.useState)(!1),i=Object(s.a)(t,2),a=i[0],c=i[1],r=a?{display:"flex"}:{display:"none"};return Object(d.jsxs)("div",{className:"svgContainer",onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)},children:[Object(d.jsx)("img",{className:"svgIcon",src:e.iconImage,alt:"svg-icon"}),Object(d.jsx)("div",{className:"iconName",style:r,children:e.name})]})},m=i.p+"static/media/bootstrap.997c463d.svg",u=i.p+"static/media/css3.1d74424c.svg",g=i.p+"static/media/expressjs.75fff9be.svg",x=i.p+"static/media/react.ae626225.svg",v=i.p+"static/media/nodejs.52cbf9a8.svg",O=i.p+"static/media/MongoDB_Logo_FullColorWhite_RGB.658ebe63.svg",f=i.p+"static/media/mysql.2cfbd8c8.svg",y=i.p+"static/media/html5.5804150e.svg",k=i.p+"static/media/javascript.07314975.svg",w=i.p+"static/media/jquery.429008ec.svg";var N=function(){return Object(d.jsxs)(j.a,{container:!0,style:{padding:"5vw",maxWidth:"100%"},spacing:3,children:[Object(d.jsx)(j.a,{item:!0,xs:12,children:Object(d.jsx)("div",{children:"Hello, I'm"})}),Object(d.jsx)(j.a,{item:!0,xs:12,children:Object(d.jsx)("h1",{children:"VINCENT SUMARGO"})}),Object(d.jsx)(j.a,{item:!0,xs:3,children:Object(d.jsx)("img",{src:p,alt:"profile",width:"100%",height:""})}),Object(d.jsxs)(j.a,{item:!0,xs:9,children:[Object(d.jsx)("h2",{children:"ABOUT ME"}),Object(d.jsxs)("h6",{children:["Full-Stack Web Developer ",Object(d.jsx)("span",{children:"/"})," Civil Engineer"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"A passionate and aspiring full-stack web developer, well versed in Javascript based libraries and frameworks and great interest in learning other programming language."}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"With 10 years of Civil Engineering experience and 3 years of Business Management experience as a business owner, I have develop and polish my skills to think logically, to solve problem, to understanding design and build process, to manage businesses and combining with programming and coding skills, I believe that I can be a solution to your needs."})]})]}),Object(d.jsx)(j.a,{item:!0,xs:12,children:Object(d.jsx)("h1",{children:" LANGUAGE, FRAMEWORK & LIBARIES"})}),Object(d.jsx)(j.a,{item:!0,xs:12,id:"iconsContainer",style:{display:"flex",flexDirection:"column",maxHeight:"170px",overflowX:"auto",flexWrap:"wrap",flexBasis:"none",justifyContent:"center",alignItems:"flex-start"},children:[{img:x,name:"React.js"},{img:v,name:"Node.js"},{img:g,name:"Express.js"},{img:O,name:"MongoDB"},{img:f,name:"MySQL"},{img:k,name:"Javascript"},{img:w,name:"jQuery"},{img:m,name:"Bootstrap"},{img:y,name:"HTML5"},{img:u,name:"CSS3"}].map((function(e,t){return Object(d.jsx)(h,{iconImage:e.img,name:e.name},t)}))})]})},S=(i(90),[{img:[i.p+"static/media/Upcycle-Searchpage-min.acd2284c.JPG",i.p+"static/media/Upcycle-Notifications-min.d3b56bec.JPG",i.p+"static/media/Upcycle-ViewItempage-min.0936f098.JPG"],title:"Upcycle",subtitle:"Upcycle Marketplace",description:"A MERN stack web application for user to buy and sell their preloved items",frontEnd:"React.js, Material-UI",backEnd:"Node.js, Express, MongoDB",url:"https://upcycle-marketplace-reactjs.herokuapp.com/",github:"https://github.com/vsumargo/Upcycle-Marketplace-React.Js"},{img:[i.p+"static/media/company-dashboard-min.9714b8bc.PNG",i.p+"static/media/company-calendar-min.6fae9099.PNG",i.p+"static/media/company-view-posted-jobs-min.5b8be3d6.PNG"],title:"Jiffy",subtitle:"Jiffy",description:"A web application that link Construction companies with labourers.",frontEnd:"Javascript, Bootstrap, CSS3",backEnd:"Node.js, Express, MySQL, Sequelize",url:"https://project2-will.herokuapp.com/",github:"https://github.com/vsumargo/sos-labour"},{img:[i.p+"static/media/saved_recipe-min.a8ae1d56.png",i.p+"static/media/list_of_12-min.6cb59a5d.png",i.p+"static/media/detailed_recipe-min.2852c69c.png"],title:"Reci-bits",subtitle:"Reci-bits",description:"A recipe generator as user input ingredients inside their fridge and pantry",frontEnd:"jQuery, Materialize, CSS3",backEnd:"none",url:"https://vsumargo.github.io/reci-bits/",github:"https://github.com/vsumargo/reci-bits"}]),C=i(134),E=i(72),M=i(137),I=i(136),B=i(57),R=i.n(B),A=i(58),G=i.n(A),J=i(71),U=i.n(J),W=Object(C.a)((function(e){return{root:{maxWidth:"100%",height:"100%",maxHeight:"100%",flexGrow:1,position:"relative"},img:{maxHeight:"30vw",display:"block",overflow:"hidden",width:"100%",zIndex:9},onHover:{position:"absolute",display:"block",top:0,left:0,width:"100%",height:"calc(20vh + 15vw)",padding:"16px",fontWeight:500,backgroundColor:"rgba(136, 136, 136, 0.65)",color:"white",textShadow:"0 0 2px black",textAlign:"center",fontSize:"calc(0.5vw + 1vh)",zIndex:10},linkContainer:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexGrow:1,flexWrap:"wrap"}}}));var D=function(e){var t=e.details,i=W(),a=Object(E.a)(),c=Object(n.useState)(0),r=Object(s.a)(c,2),o=r[0],l=r[1],b=Object(n.useState)(!1),j=Object(s.a)(b,2),p=j[0],h=j[1],m=t.img.length;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:i.root,onMouseEnter:function(){console.log("mouse enter"),h(!0)},onMouseLeave:function(){console.log("mouse leave"),h(!1)},children:[Object(d.jsx)(U.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){l(e)},enableMouseEvents:!0,children:t.img.map((function(e,t){return Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",height:"calc(20vh + 15vw)",border:"1px solid rgba(161, 161, 161, 0.5)"},children:Math.abs(o-t)<=2?Object(d.jsx)("img",{className:i.img,src:e,alt:"projects-images"}):null},t)}))}),Object(d.jsxs)("div",{className:i.onHover,style:p?{display:"block"}:{display:"none"},children:[Object(d.jsx)("h6",{style:{textDecoration:"underline",fontWeight:700,letterSpacing:"2px"},children:t.title.toUpperCase()}),Object(d.jsx)("p",{children:t.description}),Object(d.jsx)("div",{style:{textAlign:"left",padding:"4px"},children:"Front End:  ".concat(t.frontEnd)}),Object(d.jsx)("div",{style:{textAlign:"left",borderBottom:"2px solid white",padding:"4px",marginBottom:"8px"},children:"Back End:  ".concat(t.backEnd)}),Object(d.jsxs)("div",{className:i.linkContainer,children:[Object(d.jsxs)("span",{children:["Website:"," ",Object(d.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.title})]}),Object(d.jsxs)("span",{children:["Code:"," ",Object(d.jsx)("a",{href:t.github,target:"_blank",rel:"noreferrer",children:"Github"})]})]})]})]}),Object(d.jsx)(M.a,{style:{padding:0},steps:m,position:"static",variant:"dots",activeStep:o,nextButton:Object(d.jsxs)(I.a,{style:{fontSize:"0.6rem"},onClick:function(){l((function(e){return e+1}))},disabled:o===m-1,children:["Next","rtl"===a.direction?Object(d.jsx)(R.a,{}):Object(d.jsx)(G.a,{})]}),backButton:Object(d.jsxs)(I.a,{style:{fontSize:"0.6rem"},onClick:function(){l((function(e){return e-1}))},disabled:0===o,children:["rtl"===a.direction?Object(d.jsx)(G.a,{}):Object(d.jsx)(R.a,{}),"Back"]})})]})};var T=function(){return Object(d.jsx)(j.a,{container:!0,style:{padding:"5vw",maxWidth:"100%"},children:Object(d.jsx)(j.a,{item:!0,xs:12,children:Object(d.jsx)(j.a,{container:!0,className:"projectpage-image-container",spacing:2,alignItems:"flex-end",children:S.map((function(e){return Object(d.jsx)(j.a,{item:!0,xs:12,sm:6,xl:3,children:Object(d.jsx)(D,{details:e})},e.title)}))})})})};var _=function(){return Object(d.jsx)("h1",{children:"Contact Me"})};var L=function(e){var t=Object(o.f)();return Object(l.useTransition)(t,{initial:{position:"absolute",y:"0vh"},from:{position:"absolute",y:e.reverse?"-130vh":"130vh"},enter:{y:"0vh"},leave:{y:e.reverse?"130vh":"-130vh"},config:{duration:1e3}})((function(e,t){return Object(d.jsx)(l.animated.div,{style:e,children:Object(d.jsxs)(o.c,{location:t,children:[Object(d.jsx)(o.a,{exact:!0,path:"/projects",component:T}),Object(d.jsx)(o.a,{exact:!0,path:"/contact",component:_}),Object(d.jsx)(o.a,{path:"/",component:N})]})})}))},z=i(135);var H=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(z.a,{}),Object(d.jsx)(r.a,{children:Object(d.jsxs)(j.a,{container:!0,children:[Object(d.jsx)(j.a,{item:!0,xs:2,md:1,children:Object(d.jsx)(b,{handleReverse:function(e){a(e)}})}),Object(d.jsx)(j.a,{item:!0,xs:10,md:11,className:"mainContent",style:{position:"relative"},children:Object(d.jsx)(L,{reverse:i})})]})})]})};i(109);c.a.render(Object(d.jsx)(H,{}),document.getElementById("root"))},79:function(e,t,i){},80:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){}},[[110,1,2]]]);
//# sourceMappingURL=main.3fb289ec.chunk.js.map