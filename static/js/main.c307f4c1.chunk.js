(window.webpackJsonpgiphytask=window.webpackJsonpgiphytask||[]).push([[0],[,,,,,,,,,function(n,t,e){n.exports=e(17)},,,,,function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),r=e(3),i=e.n(r),c=(e(14),e(4)),s=e(5),h=e(7),m=e(6),l=e(1),d=e(8),u=(e(15),function(n){var t=n.onInputChange,e=n.searchApi,a=n.onRandom,r=n.onTrending;return o.a.createElement("div",{className:"menu-container"},o.a.createElement("div",{className:"menu-1"},o.a.createElement("input",{onChange:t,type:"text",placeholder:"search giphies"}),o.a.createElement("button",{className:"btn1",onClick:e},"Search")),o.a.createElement("div",{className:"menu-2"},o.a.createElement("button",{className:"btn2",onClick:a},"Random"),o.a.createElement("button",{className:"btn3",onClick:r},"Trending")))}),g=function(n){var t=n.searchdata,e=n.randomColor;if(t.data){var a=t.data.map((function(n,t){return o.a.createElement("img",{style:{border:"20px solid "+e[Math.floor(5*Math.random())]},key:t,src:n.images.original.url,alt:""})}));return o.a.createElement("div",{className:"main-content"},a)}return o.a.createElement("p",null,"Make a search :)")},p=(e(16),"haCNw7hoMOlTH6jMatt4WMJvyFRmSuQ3"),f=0,v=["rgb(199, 193, 40)","rgb(222, 63, 63)","rgba(190, 117, 240, 0.88)","rgb(207, 115, 49)","rgb(54, 153, 61)"],w=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this,n))).fetchTrendingData=function(){fetch("https://api.giphy.com/v1/gifs/trending?api_key=".concat(p,"&limit=30")).then((function(n){return n.json()})).then((function(n){e.setState({trending:n})})).catch((function(n){return console.log("Error",n)}))},e.fetchRandomData=function(){f<10&&(fetch("https://api.giphy.com/v1/gifs/random?api_key=haCNw7hoMOlTH6jMatt4WMJvyFRmSuQ3").then((function(n){return n.json()})).then((function(n){e.setState((function(t){return{random:t.random.concat(n)}}))})).catch((function(n){return console.log("Error",n)})),f+=1,e.fetchRandomData())},e.check=function(){var n=Object(l.a)(e);window.onscroll=function(){window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&"random"===n.state.show&&(console.log("reached bottom"),f=0,n.fetchRandomData())}},e.onRandom=function(){e.setState({show:"random",random:[]}),f=0,e.fetchRandomData()},e.searchApi=function(){e.setState({show:"search"}),""!==e.state.searchInput?(fetch("https://api.giphy.com/v1/gifs/search?q=".concat(e.state.searchInput,"&api_key=").concat(p,"&limit=30")).then((function(n){return n.json()})).then((function(n){return e.setState({searchData:n})})),document.querySelector('input[type="text"]').value=""):alert("Invalid search"),e.setState({searchInput:"",searchData:[]})},e.onInputChange=function(n){e.setState({searchInput:n.target.value.toLowerCase()})},e.onTrending=function(){e.setState({show:"trending"}),f=0,e.fetchTrendingData()},e.state={random:[],searchData:[],searchInput:"",trending:[],show:"trending",counter:0},e}return Object(d.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchTrendingData(),this.check()}},{key:"render",value:function(){return"search"===this.state.show?o.a.createElement("div",{className:"container"},o.a.createElement(u,{searchApi:this.searchApi,onRandom:this.onRandom,onTrending:this.onTrending,onInputChange:this.onInputChange}),o.a.createElement(g,{randomColor:v,searchdata:this.state.searchData})):"random"===this.state.show?o.a.createElement("div",{className:"container"},o.a.createElement(u,{searchApi:this.searchApi,onRandom:this.onRandom,onTrending:this.onTrending,onInputChange:this.onInputChange}),o.a.createElement("div",{className:"main-content"},this.state.random.map((function(n,t){return o.a.createElement("img",{style:{border:"20px solid "+v[Math.floor(5*Math.random())]},key:t,src:n.data.images.original.url,alt:""})})))):"trending"===this.state.show?this.state.trending.data?o.a.createElement("div",{className:"container"},o.a.createElement(u,{searchApi:this.searchApi,onRandom:this.onRandom,onTrending:this.onTrending,onInputChange:this.onInputChange}),o.a.createElement("div",{className:"main-content"},this.state.trending.data.map((function(n,t){return o.a.createElement("img",{style:{border:"20px solid "+v[Math.floor(5*Math.random())]},key:t,src:n.images.original.url,alt:""})})))):o.a.createElement("div",{className:"container"},o.a.createElement(u,{searchApi:this.searchApi,onRandom:this.onRandom,onTrending:this.onTrending,onInputChange:this.onInputChange}),o.a.createElement("h3",null,"Loading...")):void 0}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c307f4c1.chunk.js.map