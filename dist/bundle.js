(()=>{"use strict";function e(){return React.createElement("div",null,React.createElement("h1",null,"composant app 2"),React.createElement("div",{className:"nav"}),React.createElement("div",{id:"router"}))}function t(){return React.createElement("div",null,React.createElement("h3",null,"page home"),React.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, voluptatibus tempora! Officiis voluptatibus harum officia nulla eos. Tempora quia necessitatibus sunt, sint soluta pariatur laborum ducimus, libero, quae vel quibusdam."))}function a(){var e=window.location.hash,t=(e=e.split("?"))[1];return React.createElement("div",null,React.createElement("h3",null,"seconde page ?",t," az"),React.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, voluptatibus tempora! Officiis voluptatibus harum officia nulla eos. Tempora quia necessitatibus sunt, sint soluta pariatur laborum ducimus, libero, quae vel quibusdam."),React.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta recusandae voluptatibus, rem repellat nostrum debitis cupiditate vel officia, quo numquam porro quod dolorum odio minus mollitia labore necessitatibus cum!"))}var n={endpointApp:"/"},i=[{id:0,hash:"",pointer:"#router",render:React.createElement(t,null)},{id:1,hash:"#/secondPage",pointer:"#router",render:React.createElement(a,null)}];function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";""!==t&&(t="?"+t);var a=i.find((function(t){return t.id===e}));history.pushState({},"",n.endpointApp+a.hash+t),ReactDOM.render(a.render,document.querySelector(a.pointer))}function r(){return document.addEventListener("DOMContentLoaded",(function(){document.querySelector("#nav_home").addEventListener("click",(function(){l(0)})),document.querySelector("#nav_secondpage").addEventListener("click",(function(){l(1,"a=a")}))})),React.createElement("div",null,React.createElement("h2",null,"composant nav in app"),React.createElement("ul",null,React.createElement("li",{id:"nav_home"},"page home2"),React.createElement("li",{id:"nav_secondpage"},"secondPage2")))}ReactDOM.render(React.createElement(e,null),document.getElementById("app")),ReactDOM.render(React.createElement(r,null),document.querySelector(".nav"));for(var c=window.location.hash,u=(c=c.split("?"))[0],o=0;o<i.length;o++){var s=i[o];if(s.hash.endsWith(u)){console.log(c[1]),c[1]?l(s.id,c[1]):l(s.id);break}}})();