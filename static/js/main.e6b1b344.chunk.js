(this.webpackJsonpsnowflake=this.webpackJsonpsnowflake||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),s=a.n(r),c=(a(14),a(15),a(16),a(1)),i=a(2),l=a(4),u=a(3),d=a(5);a(7);function v(e){var t=e.ctx,a=e.x,n=e.y,o=e.radius,r=e.color;t.beginPath(),t.arc(a,n,o,0,2*Math.PI,!1),t.fillStyle=r,t.fill(),t.stroke(),t.closePath()}var m,f,h=0,p=0,g=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleMouseDown=function(e){console.log("mouse down"),a.isMouseDown=!0;var t=document.getElementById("canvas");m=t.offsetLeft,f=t.offsetTop,h=e.pageX-m-400,p=e.pageY-f-400},a.handleMouseUp=function(e){console.log("mouse up"),a.isMouseDown=!1},a.handleMouseMove=function(e){var t=e.pageX-m-400,n=e.pageY-f-400;(t>390||t<-390||n>390||n<-390)&&(a.isMouseDown=!1);var o=a.refs.canvas.getContext("2d");if(a.isMouseDown){for(var r=0;r<6;r++)o.beginPath(),o.moveTo(h,p),o.lineTo(t,n),o.stroke(),o.closePath(),o.scale(-1,1),o.beginPath(),o.moveTo(h,p),o.lineTo(t,n),o.stroke(),o.closePath(),o.scale(-1,1),o.rotate(60*Math.PI/180);h=t,p=n}},a.state={};return a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateCanvas(),this.drawCoordinateLine();var e=document.getElementById("canvas");m=e.offsetLeft,f=e.offsetTop}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=this.refs.canvas.getContext("2d");e.translate(400,400),e.clearRect(0,0,800,800),v({ctx:e,x:0,y:0,radius:400,color:"#2B5F75"})}},{key:"drawCoordinateLine",value:function(){var e=this.refs.canvas.getContext("2d");e.strokeStyle="#FFFFFB";for(var t=0;t<3;t++){for(var a=0;a<20;a+=2)e.moveTo(0,800-40*(a+11.5)),e.lineTo(0,800-40*(a+10.5));e.stroke(),e.rotate(2*Math.PI/6)}}},{key:"clearCanvas",value:function(){var e=document.getElementById("canvas").getContext("2d");e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,800,800),e.restore(),v({ctx:e,x:0,y:0,radius:400,color:"#2B5F75"}),e.strokeStyle="#FFFFFB";for(var t=0;t<3;t++){for(var a=0;a<20;a+=2)e.moveTo(0,800-40*(a+11.5)),e.lineTo(0,800-40*(a+10.5));e.stroke(),e.rotate(2*Math.PI/6)}}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("canvas",{id:"canvas",onMouseUp:this.handleMouseUp,onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,ref:"canvas",width:800,height:800}),o.a.createElement("button",{onClick:this.clearCanvas,class:"btn btn--stripe",style:{width:"200px",height:"60px",fontSize:"20px"}},"Clear Canvas"))}}]),t}(o.a.Component);o.a.Component,a(17);function w(){var e=document.getElementById("canvas").toDataURL("image/jpeg",1),t=document.getElementById("filenameTextArea").value;0===t.length&&(t="untitled"),function(e,t){var a=document.createElement("a");a.href=e,a.download=t,document.body.appendChild(a),a.click()}(e,t+".jpeg")}var k={border:0,borderRadius:"5px",backgroundColor:"#FFFFFF",width:"200px",height:"57px",fontSize:"40px"};var y=function(){return o.a.createElement("div",{className:"App",style:{backgroundColor:"#6699A1"}},o.a.createElement("header",{className:"containerH"},o.a.createElement("div",{className:"containerV"},o.a.createElement("div",{className:"Heading2"},"Draw a snowflake    "),o.a.createElement("div",{className:"Heading2"},"\u753b\u4e2a\u96ea\u82b1\u513f    ")),o.a.createElement(g,null)),o.a.createElement("div",{className:"containerH"},o.a.createElement("div",{className:"Heading2"},"\u8d77\u540d\u513f: "),o.a.createElement("textarea",{id:"filenameTextArea",style:k}),o.a.createElement("div",{className:"spaceBar"}),o.a.createElement("div",null,o.a.createElement("button",{class:"btn btn--stripe",onClick:w},"Save as Image"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e6b1b344.chunk.js.map