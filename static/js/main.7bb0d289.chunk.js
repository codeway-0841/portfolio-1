(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),i=n(12),c=n.n(i),o=n(6),s=n(29),l=(n(37),n(1)),d=function(e){return e?Object(l.jsx)("button",{disabled:!0,style:{cursor:"default",color:"var(--green)",backgroundColor:"var(--bg-green)",border:"1px var(--green) solid"},children:"Thank you !"}):Object(l.jsx)("button",{type:"submit",children:"Send"})};function u(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),c=Object(o.a)(i,2),u=c[0],j=c[1],h=Object(r.useState)(""),b=Object(o.a)(h,2),m=b[0],f=b[1],p=Object(r.useState)(""),g=Object(o.a)(p,2),x=g[0],v=g[1],O=Object(r.useState)(!1),w=Object(o.a)(O,2),y=w[0],k=w[1];return Object(l.jsxs)("div",{className:"contact",id:"contact",children:[Object(l.jsxs)("div",{className:"form-wrapper",children:[Object(l.jsx)("h1",{id:"title",children:"Contact me"}),Object(l.jsx)("p",{id:"description",children:"If you have an opportunity for me, feel free to leave a message !"}),Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),n&&u&&m&&x){if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(m).toLowerCase()))return void alert("Please enter a valid email.");var t={name:n,company:u,mail:m,message:x};s.a.send("service_zc8fbku","template_3bx52ox",t,"user_9U9sUmHvHS3HJaGwi8WGv").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)})),a(""),j(""),f(""),v(""),k(!0)}else alert("Please fill in all fields.")},children:[Object(l.jsx)("input",{type:"text",placeholder:"Name",value:n,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Company",value:u,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Email",value:m,onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("textarea",{placeholder:"Message",value:x,onChange:function(e){return v(e.target.value)}}),d(y)]})]}),Object(l.jsxs)("p",{id:"footer",children:["\xa9 ",(new Date).getFullYear()," M\xe9d\xe9ric Carriat"]})]})}var j=n(8),h=n(23),b=n.n(h),m={p:[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180,151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],vertexShader:'\n    #include <common>\n    \n    varying float maxDelta;\n    varying float delta;\n      \n    uniform int[512] p; \n    uniform mat4 modelTransposeInv;\n    uniform float time;\n    uniform float freq;\n    uniform float amplitude;\n    \n    // Permutation array, repeated to avoid overflow\n    \n    // Smooth function\n    float fade(float v)\n    {\n      return (v * v * v * (v * (v * 6.0 - 15.0) + 10.0));\n    }\n    \n    // Pseudo-random direction : compute dot product between distance vector (fx, fy, fz) \n    // in the cube with a random gradient vector (12 possibilities)\n    float grad(int hash, float x, float y, float z)\n    {\n      switch(hash & 15)\n      {\n        case 0: return  x + y;\n        case 1: return -x + y;\n        case 2: return  x - y;\n        case 3: return -x - y;\n        case 4: return  x + z;\n        case 5: return -x + z;\n        case 6: return  x - z;\n        case 7: return -x - z;\n        case 8: return  y + z;\n        case 9: return -y + z;\n        case 10: return  y - z;\n        case 11: return -y - z;\n        case 12: return  y + x;\n        case 13: return -y + z;\n        case 14: return  y - x;\n        case 15: return -y - z;\n        default: return 0.0;\n      }\n    }\n    \n    // Noise function based on pseudo-random gradient values\n    // Perlin, Ken. 2002. "Improving Noise." \n    float noise(float x, float y, float z)\n    {\n      // Unit cube of the point (bounds are [i, i+1])\n      int ix = int(floor(x)) & 255;\n      int iy = int(floor(y)) & 255;\n      int iz = int(floor(z)) & 255;\n    \n      // Position in the cube (fractional part)\n      float fx = x - float(ix);\n      float fy = y - float(iy);\n      float fz = z - float(iz);\n    \n      // Smooth the coordinates for smoother transition between gradients\n      float u = fade(fx);\n      float v = fade(fy);\n      float w = fade(fz);\n    \n      // Hash coordinates of cube corners\n      int A =  p[ix     ] + iy;\n      int B =  p[ix  + 1] + iy;\n      int AA = p[A      ] + iz;\n      int BA = p[B      ] + iz;\n      int AB = p[A   + 1] + iz;\n      int BB = p[B   + 1] + iz;\n    \n      // Interpolate axis by axis\n      return mix(\n        mix(\n          mix(\n            grad(p[AA  ], fx  , fy  , fz  ),\n            grad(p[BA  ], fx-1.0, fy  , fz  ),\n            u\n          ),\n          mix(\n            grad(p[AB  ], fx  , fy-1.0, fz  ),\n            grad(p[BB  ], fx-1.0, fy-1.0, fz  ),\n            u\n          ),\n          v\n        ),\n        mix(\n          mix(\n            grad(p[AA+1], fx  , fy  , fz-1.0),\n            grad(p[BA+1], fx-1.0, fy  , fz-1.0),\n            u\n          ),\n          mix(\n            grad(p[AB+1], fx  , fy-1.0, fz-1.0),\n            grad(p[BB+1], fx-1.0, fy-1.0, fz-1.0),\n            u\n          ),\n          v\n        ),\n        w\n      );\n    }\n    \n    void main()\n    {\n      // Conversion to clip\n      vec4 pos = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);\n      pos.xyz /= pos.w;\n      pos.w = 1.0 / pos.w;\n      pos.xyz += vec3(15);\n      pos.xy *= vec2(1000);\n    \n      maxDelta = amplitude;\n      delta = noise(pos.x*freq, pos.y*freq, time) * amplitude;\n      //delta = noise(pos.x*freq, pos.y*freq, time) * amplitude;\n    \n      vec3 FragWorldPosDisplaced = vec3(modelMatrix * vec4(position + normal * delta, 1.0));\n      gl_Position = projectionMatrix * viewMatrix * vec4(FragWorldPosDisplaced, 1.0);\n    }\n    ',fragmentShader:"\n    #include <common>\n\n    varying float maxDelta;\n    varying float delta;\n      \n    uniform float time;\n    uniform vec4 color1;\n    uniform vec4 color2;\n\n\n    void main()\n    {\n        vec4 color = mix(color1, color2, delta / maxDelta);\n        gl_FragColor = color;\n    } \n    "},f=(n(39),new j.h({antialias:!0}));function p(e){var t=e.darkTheme,n=e.active,a=Object(r.useRef)(null),i=Object(r.useState)(null),c=Object(o.a)(i,2),s=c[0],d=c[1];return Object(r.useEffect)((function(){var e,r,i,c=a.current,o=Date.now(),l=new j.e,u=new j.c(75,window.innerWidth/window.innerHeight,.1,1e3);f.setClearColor(t?0:16250871,1),f.setSize(window.innerWidth,window.innerHeight),a.current.appendChild(f.domElement);t?(e=new j.d(12,2,70,50),i=new j.a(53759),r=new j.a(265045)):(e=new j.d(12,2,70,50),i=new j.a(5387176),r=new j.a(1549275));var h=new j.f({wireframe:!0,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,uniforms:{p:{value:m.p},time:{value:0},freq:{value:.0075},amplitude:{value:.2},color1:{value:new j.g(r.r,r.g,r.b,1)},color2:{value:new j.g(i.r,i.g,i.b,1)}}}),b=new j.b(e,h);b.rotateX(-1.1),b.position.z=2,b.position.y=-1.15,l.add(b);var p=new j.b(e,h);p.rotateX(1.1),p.position.z=2,p.position.y=1.15,l.add(p),u.position.z=5;return window.addEventListener("resize",(function(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}),!1),function e(){if(!n)return cancelAnimationFrame(s),void d(null);d(requestAnimationFrame(e));var t=Date.now()-o;b.material.uniforms.time.value=t/1e3/2,b.material.uniforms.time.value%=1e3,f.render(l,u)}(),function(){return c.removeChild(f.domElement)}}),[t,n]),Object(l.jsxs)("div",{className:"intro",id:"intro",children:[Object(l.jsx)("div",{id:"c",ref:a}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("h1",{children:"M\xe9d\xe9ric Carriat"}),Object(l.jsx)("h4",{children:"Software Engineer looking for a 6-month internship"})]}),Object(l.jsx)("a",{className:"arrow",href:"#experience",children:Object(l.jsx)(b.a,{})})]})}var g=n.p+"static/media/epita.f88f36c3.png",x=n.p+"static/media/ens.c48c41c3.png",v=n.p+"static/media/siemens.4aa8efa4.png",O=n.p+"static/media/concordia.586d2aff.png",w=n.p+"static/media/pathtracer.7fb61344.png",y=n.p+"static/media/website.9319c4d9.png",k=n.p+"static/media/wce.a743c1d0.png",C=n.p+"static/media/stoch.8e4b04f6.png",A=n.p+"static/media/tau.8b7e67b6.png",S=n.p+"static/media/tiger.09d00f4c.jpg",D=[{company:"EPITA",logo:g,title:"Bachelor in Computer Science",startDate:new Date(2017,9),endDate:new Date(2020,7),description:[Object(l.jsx)("p",{children:"Courses in programming, mathematics, algorithmics, computer architecture."}),Object(l.jsxs)("p",{children:["Tags : ",Object(l.jsx)("b",{children:"OCaml, Python, C, C++, Unix"})]})],color:"blue",position:"center"},{company:"Concordia",logo:O,title:"Volunteering",startDate:new Date(2018,7,1),endDate:new Date(2018,8,31),description:[Object(l.jsx)("p",{children:"Renovation of Latresnes' church with 10 other international students."})],color:"red",position:"bottom"},{company:"Tampere University",logo:g,title:"Exchange semester in Finland",startDate:new Date(2019,1,1),endDate:new Date(2019,5),description:[Object(l.jsx)("p",{children:"Courses in Machine Learning, Signal Compression and Software Engineering."}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"3rd out of 105 teams"})," at the university's ",Object(l.jsx)("u",{children:Object(l.jsx)("a",{href:"https://www.kaggle.com/c/robotsurface/overview",children:"Kaggle competition"})}),"."]})],color:"purple",position:"top"},{company:"ENS - PSL",logo:x,title:"Internship",startDate:new Date(2019,5,1),endDate:new Date(2019,8,31),description:[Object(l.jsxs)("p",{children:["Benchmarking of the ",Object(l.jsx)("u",{children:Object(l.jsx)("a",{href:"https://divime.readthedocs.io/en/latest/initial_questions.html#what-is-the-aclew-divime",children:"DiViMe"})})," speech processing tool."]}),Object(l.jsxs)("p",{children:["Implementation of the ",Object(l.jsx)("u",{children:Object(l.jsx)("a",{href:"https://www.sciencedirect.com/science/article/pii/S0167639318304205",children:"automatic word count estimation algorithm"})})," (R\xe4s\xe4nen, Okko, et al., 2019)."]}),Object(l.jsxs)("p",{children:["Tags: ",Object(l.jsx)("b",{children:"MATLAB, Python, Docker"})]})],color:"yellow",position:"bottom"},{company:"EPITA",logo:g,title:"Master in Image Processing and Computer Graphics",startDate:new Date(2020,9,1),endDate:new Date(2022,7),description:[Object(l.jsx)("p",{children:"Courses in Image Processing, Computer Vision and Computer Graphics."}),Object(l.jsxs)("p",{children:["Tags: ",Object(l.jsx)("b",{children:"C++, Python, OpenGL, CUDA"})]})],color:"blue",position:"center"},{company:"Factonics",logo:"data:image/png;base64,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",title:"Internship",startDate:new Date(2020,9,1),endDate:new Date(2021,2,31),description:[Object(l.jsxs)("p",{children:["Improvement of Factonics' ",Object(l.jsx)("b",{children:"ML deployment"})," platform."]}),Object(l.jsxs)("p",{children:["Development of a ",Object(l.jsx)("b",{children:"Named-entity recognition "}),"program specific to the French health system."]}),Object(l.jsxs)("p",{children:["PoC for a ",Object(l.jsx)("b",{children:"newsletter recommendation"})," system on behalf of ",Object(l.jsx)("i",{children:"BPI France"}),"."]}),Object(l.jsxs)("p",{children:["Tags: ",Object(l.jsx)("b",{children:"Python, AWS, Docker"})]})],color:"orange",position:"bottom"},{company:"Siemens Healthineers",logo:v,title:"End-of-study project",startDate:new Date(2021,3,15),endDate:new Date(2022,2,31),description:[Object(l.jsxs)("p",{children:["Research of a web based solution for ",Object(l.jsx)("b",{children:"real-time transparency"}),"."]}),Object(l.jsxs)("p",{children:["Implementation of ",Object(l.jsx)("u",{children:Object(l.jsx)("a",{href:"https://luebke.us/publications/StochasticTransparency_I3D2010.pdf",children:"Stochastic Transparency"})})," (Enderton, Eric, et al., 2010) with ThreeJS."]}),Object(l.jsxs)("p",{children:["Tags: ",Object(l.jsx)("b",{children:"Typescript, GLSL, ThreeJS"})]})],color:"green",position:"bottom"}],I=[{id:0,title:"Word count estimator",image:k,link:"https://github.com/bootphon/word-count-estimator",description:Object(l.jsxs)("p",{children:["Implementation of the ",Object(l.jsx)("b",{children:Object(l.jsx)("a",{href:"https://www.sciencedirect.com/science/article/pii/S0167639318304205",children:"automatic word count estimation algorithm"})})," (R\xe4s\xe4nen, Okko, et al., 2019)."]}),tags:[{text:"Python",color:"var(--green)",backgroundColor:"var(--bg-green)"},{text:"ML",color:"var(--red)",backgroundColor:"var(--bg-red)"},{text:"2019",color:"var(--gray)",backgroundColor:"var(--bg-gray)"}]},{id:1,title:"Robot Surface Detection",image:A,description:Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Kaggle competition"})," : recognize floor surfaces using data collected from Inertial Sensors."]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Third team"})," out of 105."]})]}),link:"https://www.kaggle.com/c/robotsurface/overview",tags:[{text:"Python",color:"var(--green)",backgroundColor:"var(--bg-green)"},{text:"ML",color:"var(--red)",backgroundColor:"var(--bg-red)"},{text:"2019",color:"var(--gray)",backgroundColor:"var(--bg-gray)"}]},{id:2,title:"Tiger Compiler",image:S,description:Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:["Semester long school project to build the ",Object(l.jsx)("b",{children:"frontend of a Tiger compiler"})]})}),link:"https://assignments.lrde.epita.fr/index.html",tags:[{text:"C++",color:"var(--blue)",backgroundColor:"var(--bg-blue)"},{text:"2020",color:"var(--gray)",backgroundColor:"var(--bg-gray)"}]},{id:3,title:"Real-time transparency",image:C,description:Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Stochastic methods"})," for real-time transparency in the ",Object(l.jsx)("b",{children:"browser"}),"."]}),link:"https://github.com/SabineHU/PFEE_Stochastic_Transparency",tags:[{text:"JS",color:"var(--orange)",backgroundColor:"var(--bg-orange)"},{text:"ThreeJS",color:"var(--cyan)",backgroundColor:"var(--bg-cyan)"},{text:"GLSL",color:"var(--pink)",backgroundColor:"var(--bg-pink)"},{text:"2021",color:"var(--gray)",backgroundColor:"var(--bg-gray)"}]},{id:4,title:"Path tracer",image:w,description:Object(l.jsxs)("p",{children:["Path tracing in C++ for Physically Based Rendering. ",Object(l.jsx)("b",{children:"CPU parallelized"})," and optimized with ",Object(l.jsx)("b",{children:"Bounding Volume Hierarchy"}),"."]}),link:"https://github.com/MedericCar/pathtracer",tags:[{text:"C++",color:"var(--blue)",backgroundColor:"var(--bg-blue)"},{text:"2021",color:"var(--gray)",backgroundColor:"var(--bg-gray)"}]},{id:5,title:"Personal website",image:y,description:Object(l.jsxs)("p",{children:["Website made from scratch in ",Object(l.jsx)("b",{children:"functional React"}),". Features a ",Object(l.jsx)("b",{children:"homepage 3D animation"}),"."]}),link:"https://github.com/MedericCar/portfolio",tags:[{text:"React",color:"var(--purple)",backgroundColor:"var(--bg-purple)"},{text:"ThreeJS",color:"var(--cyan)",backgroundColor:"var(--bg-cyan)"},{text:"GLSL",color:"var(--pink)",backgroundColor:"var(--bg-pink)"},{text:"2021",color:"var(--gray)",backgroundColor:"var(--bg-gray)"}]}],E=n(13),T=n(68);n(46);function P(e){var t=e.data,n=e.idx,a=e.darkTheme,i=e.smallWindow,c=Object(r.useState)(-1),s=Object(o.a)(c,2),d=s[0],u=s[1],j=Object(r.useState)(!1),h=Object(o.a)(j,2),b=h[0],m=h[1],f=i?{height:t.width,top:t.startPos}:{width:t.width,left:t.startPos};return Object(l.jsx)("div",{className:"timeline-element ".concat(t.position),style:Object(E.a)(Object(E.a)({},f),{},{background:"var(--".concat(a?"bg-":"").concat(t.color,")")}),onMouseEnter:function(){return u(n)},onMouseLeave:function(){return u(-1)},children:Object(l.jsx)("div",{className:"info",style:{},children:Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h3",{children:t.company}),Object(l.jsx)("h5",{children:function(){var e=t.startDate.getFullYear(),n=t.endDate.getFullYear();return n===e?"".concat(e):"".concat(e," - ").concat(n)}()}),Object(l.jsx)("p",{className:"title",children:t.title}),Object(l.jsx)(T.a,{in:d===n&&!i,timeout:{enter:300,exit:200},classNames:"description",onEntered:function(){return m(!0)},onExited:function(){return m(!1)},unmountOnExit:!0,children:Object(l.jsx)("div",{className:"description",children:function(e,t){if(t)return Object(l.jsx)("ul",{children:e.description.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})}(t,b)})})]})})})}n(47);function B(e){var t=e.experience,n=e.darkTheme,r=e.smallWindow,a=function(e){var t=e.reduce((function(e,t){return e.startDate>t.startDate?t:e})),n=e.reduce((function(e,t){return e.endDate<t.endDate?t:e}));return[t.startDate,n.endDate]}(t),i=Object(o.a)(a,2);return function(e,t,n){var r=function(e){var t=(e.endDate-e.startDate)/864e5;e.width="".concat(t/o*100,"%")},a=function(e){var n=(e.startDate-t)/864e5;e.startPos="".concat(n/o*100,"%")},i=function(e,t){var r;r=t?(t.startDate-e.startDate)/864e5:(n-e.startDate)/864e5,e.textLim="".concat(r/o*100*.9,"vw")},c=function(e){var t,n;e.sort((function(e,t){return e.startDate>t.startDate}));for(var c=0;c<e.length-1;c++)t=e[c],n=e[c+1],r(t),a(t),i(t,n);r(n),a(n),i(n)},o=(n-t)/864e5;c(e.filter((function(e){return"top"===e.position||"center"===e.position}))),c(e.filter((function(e){return"bottom"===e.position})))}(t,i[0],i[1]),Object(l.jsx)("div",{className:"timeline",id:"timeline",children:t.map((function(e,t){return Object(l.jsx)(P,{data:e,idx:t,darkTheme:n,smallWindow:r},t)}))})}n(48);function z(e){var t=e.darkTheme,n=e.smallWindow;return Object(l.jsxs)("div",{className:"experience",id:"experience",children:[Object(l.jsx)("h1",{id:"title",children:"Hi, I'm M\xe9d\xe9ric"}),Object(l.jsxs)("div",{id:"description",children:[Object(l.jsxs)("p",{children:["Student at ",Object(l.jsx)("b",{children:Object(l.jsx)("a",{href:"https://www.epita.fr/",children:"EPITA"})})," currently in the last year of the Image Processing & Computer Graphics Master, I am looking for a ",Object(l.jsx)("b",{children:"6-month internship"})," starting in ",Object(l.jsx)("b",{children:"February"}),"."]}),Object(l.jsxs)("p",{children:["This is what I've been up to the ",Object(l.jsx)("b",{children:"last 5 years"}),"."]})]}),Object(l.jsx)(B,{experience:D,darkTheme:t,smallWindow:n})]})}n(49);function L(e){var t=e.data,n=e.onClick,r=e.active,a="tag ".concat(r?"active":"inactive"," ").concat(n?"clickable":""),i={color:t.color,backgroundColor:t.backgroundColor,cursor:n?"pointer":"default"};return Object(l.jsx)("div",{className:a,style:i,onClick:function(){return n?n():null},children:t.text})}n(50);function F(e){var t=e.data,n=e.show,r=e.selectedTags;return n?Object(l.jsx)("div",{className:"project-card",style:{animation:"fadeIn 1s"},children:Object(l.jsxs)("a",{href:t.link,children:[Object(l.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(t.image,")")}}),Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h3",{children:t.title}),Object(l.jsx)("div",{className:"tags",children:t.tags.map((function(e,t){return Object(l.jsx)(L,{data:e,active:r[e.text]||r.All},t)}))}),Object(l.jsx)("p",{className:"description",children:t.description})]})]})}):Object(l.jsx)("div",{className:"project-card",style:{display:"none"}})}n(51);var J=function(e){var t=e.data,n=e.showCards,r=e.selectedTags;return Object(l.jsx)("div",{className:"row",children:t.map((function(e){return Object(l.jsx)(F,{data:e,show:n,selectedTags:r},e.id)}))})},W=function(e){var t=e.tags,n=e.selectedTags,r=e.setSelectedTags,a={text:"All",color:"var(--gray2)",backgroundColor:"var(--gray5)"};return Object(l.jsxs)("div",{className:"filter-list",children:[Object(l.jsx)(L,{data:a,onClick:function(){return function(e){var t=Object.assign({},n);n.All||Object.keys(n).forEach((function(e){return t[e]=!1})),t.All=!n.All,r(t)}()},active:n.All},-1),t.map((function(e,t){return Object(l.jsx)(L,{data:e,onClick:function(){return function(e){var t=Object.assign({},n);n[e]||(t.All=!1),t[e.text]=!n[e.text],r(t)}(e)},active:n[e.text]},t)}))]})};function R(){var e=function(e){var t=e.map((function(e){return e.tags}));t=[].concat.apply([],t);var n=[];return{totTags:t=t.filter((function(e){return!n.includes(e.text)&&(n.push(e.text),!0)})),totLabels:n}}(I),t=e.totTags,n=e.totLabels;t.sort((function(e,t){return-e.text.localeCompare(t.text)}));var a=Object.fromEntries(n.map((function(e){return[e,!1]})));a=Object(E.a)(Object(E.a)({},a),{},{All:!0});var i=Object(r.useState)(a),c=Object(o.a)(i,2),s=c[0],d=c[1],u=Object(r.useState)([]),j=Object(o.a)(u,2),h=j[0],b=j[1],m=Object(r.useState)(!0),f=Object(o.a)(m,2),p=f[0],g=f[1];Object(r.useEffect)((function(){g(!1),setTimeout((function(){return g(!0)}),300),b(Object.keys(s).filter((function(e){return s[e]&&parseInt(e)}))),I.sort((function(e,t){return parseInt(e.tags[e.tags.length-1].text)<parseInt(t.tags[t.tags.length-1].text)?1:-1}))}),[s]);var x;return Object(l.jsxs)("div",{className:"projects",id:"projects",children:[Object(l.jsx)("h1",{id:"title",children:"Projects"}),Object(l.jsx)("div",{id:"description",children:Object(l.jsx)("p",{children:"Here is a list of projects I have done on my personal time or for work/studies."})}),Object(l.jsx)(W,{tags:t,selectedTags:s,setSelectedTags:d}),Object(l.jsx)("div",{className:"cards",children:(x=I,function(e,t){for(var n=[],r=0;r<e.length;r+=t){var a=e.slice(r,r+t);n.push(a)}return n}(x.filter((function(e){return function(e){var t=e.tags.map((function(e){return e.text})),n=Object.keys(s).filter((function(e){return s[e]&&!parseInt(e)}));return!!s.All||(0===n.length?t.some((function(e){return s[e]})):!(0!==h.length&&!t.some((function(e){return h.includes(e)})))&&t.some((function(e){return s[e]&&!h.includes(e)})))}(e)})),3).map((function(e,t){return Object(l.jsx)(J,{data:e,showCards:p,selectedTags:s},t)})))})]})}var M=n(25),N=n.n(M),H=n(26),K=n.n(H),U=n(27),G=n.n(U),Q=n(28),V=n.n(Q),Y=(n(52),function(e){var t=e.idx,n=e.href,r=e.text,a=e.activePage,i=e.setActivePage,c=e.setLinkClick,o=[!1,!1,!1,!1];return o[t]=!0,Object(l.jsx)("a",{href:n,onClick:function(){i(o),c(!0),setTimeout((function(){return c(!1)}),1e3)},className:"".concat(a[t]?"active":""),children:r})}),Z=function(e){return e.smallWindow?null:Object(l.jsxs)("div",{className:"socials",children:[Object(l.jsx)("a",{href:"https://github.com/MedericCar",title:"Github",children:Object(l.jsx)(N.a,{})}),Object(l.jsx)("a",{href:"mailto: carriatmederic@gmail.com",title:"Mail",children:Object(l.jsx)(K.a,{})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/m%C3%A9d%C3%A9ric-carriat-17705a181/",title:"LinkedIn",children:Object(l.jsx)(G.a,{})}),Object(l.jsx)("a",{href:"TODO",title:"Resume",children:Object(l.jsx)(V.a,{})})]})};function q(e){var t=e.toShow,n=e.activePage,r=e.setActivePage,a=e.setLinkClick,i=e.smallWindow;return Object(l.jsx)(T.a,{in:t,timeout:400,classNames:"topbar",children:Object(l.jsx)("div",{className:"topbar",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("a",{href:"#intro",children:Object(l.jsx)("h1",{color:"secondary",children:"MC"})})}),Object(l.jsx)(Z,{smallWindow:i}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)(Y,{idx:0,href:"#intro",text:"Home",activePage:n,setActivePage:r,setLinkClick:a}),Object(l.jsx)(Y,{idx:1,href:"#experience",text:"About",activePage:n,setActivePage:r,setLinkClick:a}),Object(l.jsx)(Y,{idx:2,href:"#projects",text:"Projects",activePage:n,setActivePage:r,setLinkClick:a}),Object(l.jsx)(Y,{idx:3,href:"#contact",text:"Contact",activePage:n,setActivePage:r,setLinkClick:a})]})]})})})}n(53);function X(e){var t=e.darkTheme,n=e.setDarkTheme;return Object(l.jsxs)("div",{className:"switch",onClick:function(){return n(!t)},children:[Object(l.jsx)("input",{type:"checkbox",defaultChecked:!1,checked:t}),Object(l.jsx)("div",{children:Object(l.jsx)("span",{})})]})}n(54);var _=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(0),s=Object(o.a)(c,2),d=s[0],j=s[1],h=Object(r.useState)(null),b=Object(o.a)(h,2),m=b[0],f=b[1];Object(r.useEffect)((function(){var e=document.getElementsByClassName("sections")[0],t=function(){var t=e.scrollTop,n=t-d<0?"down":"up";j(t),f(n)};return e.addEventListener("scroll",t,{passive:!0}),function(){return e.removeEventListener("scroll",t)}}),[d]);var g=a.a.useState(window.innerHeight),x=Object(o.a)(g,2),v=x[0],O=x[1],w=a.a.useState(window.innerWidth<991),y=Object(o.a)(w,2),k=y[0],C=y[1];Object(r.useEffect)((function(){var e=function(){O(window.innerHeight),C(window.innerWidth<=991),document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px"))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var A=Object(r.useState)([!0,!1,!1,!1]),S=Object(o.a)(A,2),D=S[0],I=S[1],E=Object(r.useState)(!1),T=Object(o.a)(E,2),P=T[0],B=T[1];return Object(r.useEffect)((function(){if(d%v!==0&&!P){var e=[!1,!1,!1,!1];e["up"===m?Math.ceil(d/v):Math.floor(d/v)]=!0,I(e)}}),[v,m,d,P]),Object(r.useEffect)((function(){var e=function(e){var t=[!1,!1,!1,!1];t[Math.floor(d/v)]=!0,I(t)};return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[v,d]),Object(l.jsxs)("div",{className:"app ".concat(n?"theme-dark":"theme-light"),children:[Object(l.jsx)(q,{toShow:d>=v/2,activePage:D,setActivePage:I,setLinkClick:B,smallWindow:k}),Object(l.jsx)("div",{className:"lightModeSwitch",children:Object(l.jsx)(X,{darkTheme:n,setDarkTheme:i})}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(p,{darkTheme:n,active:d<v}),Object(l.jsx)(z,{darkTheme:n,smallWindow:k}),Object(l.jsx)(R,{}),Object(l.jsx)(u,{})]})]})};c.a.render(Object(l.jsx)(_,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.7bb0d289.chunk.js.map