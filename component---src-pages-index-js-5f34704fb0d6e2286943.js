(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"24ww":function(e,t,a){e.exports=a.p+"static/resume-376f399fc6c16705eb6fc39a870e1c9d.pdf"},H6An:function(e,t,a){e.exports=a.p+"static/chronx-c7694dcb6eacb81670cc2239f52b7c2b.jpg"},"HF/j":function(e,t,a){e.exports=a.p+"static/me-5d6ac8963bef4081ef1445c8a4c0ae42.jpg"},Kfvu:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.OutboundLink=c,t.trackCustomEvent=function(e){var t=e.category,a=e.action,n=e.label,i=e.value,r=e.nonInteraction,s=void 0!==r&&r,o=e.transport,c=e.hitCallback,l=e.callbackTimeout,u=void 0===l?1e3:l;if("undefined"!=typeof window&&window.ga){var m={eventCategory:t,eventAction:a,eventLabel:n,eventValue:i,nonInteraction:s,transport:o};c&&"function"==typeof c&&(m.hitCallback=function(e,t){void 0===t&&(t=1e3);var a=!1,n=function(){a||(a=!0,e())};return setTimeout(n,t),n}(c,u)),window.ga("send","event",m)}};var i=n(a("pVnL")),r=n(a("8OQS")),s=n(a("q1tI")),o=n(a("17x9"));function c(e){var t=e.eventCategory,a=e.eventAction,n=e.eventLabel,o=e.eventValue,c=(0,r.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return s.default.createElement("a",(0,i.default)({},c,{onClick:function(i){"function"==typeof e.onClick&&e.onClick(i);var r=!0;return(0!==i.button||i.altKey||i.ctrlKey||i.metaKey||i.shiftKey||i.defaultPrevented)&&(r=!1),e.target&&"_self"!==e.target.toLowerCase()&&(r=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:a||"click",eventLabel:n||e.href,eventValue:o,transport:r?"beacon":"",hitCallback:function(){r&&(document.location=e.href)}}):r&&(document.location=e.href),!1}}))}c.propTypes={href:o.default.string,target:o.default.string,eventCategory:o.default.string,eventAction:o.default.string,eventLabel:o.default.string,eventValue:o.default.number,onClick:o.default.func}},PhnR:function(e,t,a){e.exports=a.p+"static/gradeguide-4b008b26ec494cf0a38d3181956009a9.png"},RXBc:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.r(t);var i=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("Bl7J"),c=a("Kfvu"),l=a("24ww"),u=a.n(l),m=function(e){return s.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"inner"},s.a.createElement("h1",null,"Ryan Siu"),s.a.createElement("p",null,e.description," "))),s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(c.OutboundLink,{href:"javascript:work;",onClick:function(){e.onOpenArticle("work")}},"Work")),s.a.createElement("li",null,s.a.createElement(c.OutboundLink,{href:"javascript:about;",onClick:function(){e.onOpenArticle("about")}},"About")),s.a.createElement("li",null,s.a.createElement(c.OutboundLink,{href:"javascript:contact;",onClick:function(){e.onOpenArticle("contact")}},"Contact")),s.a.createElement("li",null,s.a.createElement(c.OutboundLink,{href:u.a},"Resume")))))},p=a("uCF/"),d=a.n(p),h=a("hhDs"),f=a.n(h),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=s.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return s.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},s.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Work"),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.a}}),t),s.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"About"),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:f.a}}),t),s.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Contact"),s.a.createElement("form",{method:"post",action:"https://formspree.io/rsiu05@gmail.com"},s.a.createElement("div",{className:"field half first"},s.a.createElement("label",{htmlFor:"name"},"Name"),s.a.createElement("input",{type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"field half"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"text",name:"email",id:"email"})),s.a.createElement("div",{className:"field"},s.a.createElement("label",{htmlFor:"message"},"Message"),s.a.createElement("textarea",{name:"message",id:"message",rows:"4"})),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),s.a.createElement("li",null,s.a.createElement("input",{type:"reset",value:"Reset"})))),t))},t}(s.a.Component),b=function(e){return s.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},s.a.createElement("ul",{className:"icons"},s.a.createElement("li",null,s.a.createElement(c.OutboundLink,{href:"https://medium.com/@ryansiu",className:"icon fa-medium"},s.a.createElement("span",{className:"label"},"Medium"))),s.a.createElement("li",null,s.a.createElement(c.OutboundLink,{href:"mailto:rsiu05@gmail.com",className:"icon fa-envelope"},s.a.createElement("span",{className:"label"},"Email"))),s.a.createElement("li",null,s.a.createElement(c.OutboundLink,{href:"https://github.com/siuryan",className:"icon fa-github"},s.a.createElement("span",{className:"label"},"GitHub")))),s.a.createElement("p",{className:"copyright"},"© 2019 Ryan Siu"))},v=["Software Developer","Student @ UMich","Problem Solver","Maker","Competitor"],y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading",currentWord:0,currentLetter:0,currentDescription:""},a.handleOpenArticle=a.handleOpenArticle.bind(n(a)),a.handleCloseArticle=a.handleCloseArticle.bind(n(a)),a.setWrapperRef=a.setWrapperRef.bind(n(a)),a.handleClickOutside=a.handleClickOutside.bind(n(a)),a.typeEffect=a.typeEffect.bind(n(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""});var t=setInterval(e.typeEffect,125);e.setState({typeInterval:t})}),100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),clearInterval(this.state.typeInterval),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.typeEffect=function(){var e=this.state.currentLetter,t=this.state.currentWord;e++;var a=v[t].length;e>a&&e<a+10?this.setState({currentLetter:e}):(e>a&&(e=0,t++),t%=v.length,this.setState({currentLetter:e,currentWord:t,currentDescription:v[t].substring(0,e)}))},a.render=function(){return s.a.createElement(o.a,{location:this.props.location},s.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},s.a.createElement("div",{id:"wrapper"},s.a.createElement(m,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout,description:this.state.currentDescription}),s.a.createElement(g,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),s.a.createElement(b,{timeout:this.state.timeout})),s.a.createElement("div",{id:"bg"})))},t}(s.a.Component);t.default=y},VRus:function(e,t,a){e.exports=a.p+"static/cow-1351e94e02e0b24de6ce9f5ffad26e2c.gif"},hhDs:function(e,t,a){e.exports='<p><span class="image main"><img src="'+a("HF/j")+'" alt="" /></span></p>\n<p>I&#39;m a software developer from NYC currently attending the University of Michigan.</p>\n\x3c!-- I work with: --\x3e\n\x3c!-- - HTML5/CSS3/Javascript --\x3e\n\x3c!-- - React.js --\x3e\n\x3c!-- - GatsbyJS --\x3e\n\x3c!-- - Jekyll --\x3e\n\x3c!-- - Python --\x3e\n\x3c!-- - SQL --\x3e\n\x3c!-- - DigitalOcean --\x3e\n\x3c!-- - Git --\x3e\n\x3c!-- - Ubuntu --\x3e\n\x3c!-- - Android --\x3e\n\x3c!-- - Java --\x3e\n\x3c!-- - C/C++ --\x3e\n\x3c!-- - Arduino --\x3e\n'},"uCF/":function(e,t,a){e.exports='<p><span class="image main"><img src="'+a("H6An")+'" alt="chronx.jpg" /></span></p>\n<h3 id="chron-x">Chron-x</h3>\n<p>Chron-x is an open source, Arduino-based, Bluetooth-enabled smartwatch that can receive notifications from your Android phone once connected via an app.</p>\n<p>| <a href="https://github.com/siuryan/watch">GitHub</a> | <a href="https://medium.com/@ryansiu/how-to-make-your-own-smartwatch-35ff8306c160">Medium</a> |</p>\n<hr>\n<h3 id="augury">Augury</h3>\n<p>Augury is a web app that uses machine learning to display stock trading recommendations, based on public sentiment on Twitter.</p>\n<p>| <a href="https://github.com/siuryan/augury">GitHub</a> | <a href="https://devpost.com/software/augury">Devpost</a> |</p>\n<hr>\n<p><span class="image main"><img src="'+a("PhnR")+'" alt="gradeguide.png" /></span></p>\n<h3 id="gradeguide">GradeGuide</h3>\n<p>GradeGuide is a tool for students to visualize grade distributions for classes at the University of Michigan. I worked as a backend developer and am currently a senior software developer and project manager.</p>\n<p>| <a href="https://gradeguide.com">Website</a> |</p>\n<hr>\n<p><span class="image main"><img src="'+a("VRus")+'" alt="cow.gif" /></span></p>\n<h3 id="graphics-engine">Graphics Engine</h3>\n<p>Created for a graphics class in high school, this command-based graphics engine, written in C,  generates 2D and 3D images with realistic lighting and polygon meshes. It can also take <code>.mdl</code> script files as input to generate an image, and it can create basic animations as GIFs.</p>\n<p>| <a href="https://github.com/siuryan/graphics-engine">GitHub</a> |</p>\n<hr>\n<h3 id="simplicity">Simplicity</h3>\n<p>Simplicity is an airline simulator game where you manage an airline company. Fly planes across the country as you try to build your fleet, and send your airplanes on the best routes to make the most money! This project was written for APCS / Data Structures and Algorithms, and implements a priority queue and Dijkstra&#39;s algorithm, amongst other data structures and algorithms.</p>\n<p>| <a href="https://github.com/siuryan/Simplicity">GitHub</a> |</p>\n<hr>\n<h3 id="first-tech-challenge-stuy-fission-team-310">FIRST Tech Challenge: Stuy Fission Team 310</h3>\n<p>As the Head of Software Engineering on Stuy Fission, I created the Stuy Fission website and wrote the robot code for the &#39;17-&#39;18 season, Relic Recovery.\nBuilt using Jekyll and Materialize, the website served as a portfolio and a blog. The robot code, another “relic” of my time on Stuy Fission, was developed throughout the competition season and controlled our robot&#39;s driver-controlled and autonomous movement.</p>\n<p>| <a href="https://github.com/fission310">GitHub Organization</a> | <a href="https://github.com/fission310/fission310.github.io">GitHub Website</a> | <a href="https://github.com/fission310/relic-recovery">GitHub Robot</a> |</p>\n'}}]);
//# sourceMappingURL=component---src-pages-index-js-5f34704fb0d6e2286943.js.map