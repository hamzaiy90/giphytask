(window.webpackJsonpgiphytask=window.webpackJsonpgiphytask||[]).push([[0],[,,,,,,,,function(t,n,e){t.exports=e(16)},,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),r=e(7),i=e.n(r),c=(e(13),e(1)),s=e(2),h=e(4),m=e(3),l=e(5),d=(e(14),function(t){var n=t.onInputChange,e=t.searchApi,a=t.onRandom,r=t.onTrending;return o.a.createElement("div",{className:"menu-container"},o.a.createElement("div",{className:"menu-1"},o.a.createElement("input",{onChange:n,type:"text",placeholder:"search giphies"}),o.a.createElement("button",{className:"btn1",onClick:e},"Search")),o.a.createElement("div",{className:"menu-2"},o.a.createElement("button",{className:"btn2",onClick:a},"Random"),o.a.createElement("button",{className:"btn3",onClick:r},"Trending")))}),u=function(t){var n=t.searchdata,e=t.randomColor;if(n.data){var a=n.data.map((function(t,n){return o.a.createElement("img",{style:{border:"20px solid "+e[Math.floor(5*Math.random())]},key:n,src:t.images.original.url,alt:""})}));return o.a.createElement("div",{className:"main-content"},a)}return o.a.createElement("p",null,"Make a search :)")},g=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(h.a)(this,Object(m.a)(n).call(this,t))).state={bottom:!1},e}return Object(l.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&t.setState({bottom:!0})}}},{key:"componentWillUnmount",value:function(){window.onscroll=null,this.setState({bottom:!1})}},{key:"render",value:function(){if(this.props.random)return this.state.bottom&&console.log("Reached the bottom",this.state.bottom),o.a.createElement("div",{className:"main-content"},this.props.children)}}]),n}(o.a.Component),p=(e(15),"haCNw7hoMOlTH6jMatt4WMJvyFRmSuQ3"),f=0,b=["rgb(199, 193, 40)","rgb(222, 63, 63)","rgba(190, 117, 240, 0.88)","rgb(207, 115, 49)","rgb(54, 153, 61)"],v=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(h.a)(this,Object(m.a)(n).call(this,t))).fetchTrendingData=function(){fetch("https://api.giphy.com/v1/gifs/trending?api_key=".concat(p,"&limit=30")).then((function(t){return t.json()})).then((function(t){e.setState({trending:t})})).catch((function(t){return console.log("Error",t)}))},e.fetchRandomData=function(){f<30?(fetch("https://api.giphy.com/v1/gifs/random?api_key=".concat(p)).then((function(t){return t.json()})).then((function(t){return e.setState({random:e.state.random.concat(t)})})).catch((function(t){return console.log("Error",t)})),f+=1,e.fetchRandomData()):console.log("done")},e.onRandom=function(){e.setState({show:"random",random:[]}),f=0,e.fetchRandomData()},e.searchApi=function(){e.setState({show:"search"}),""!==e.state.searchInput?fetch("https://api.giphy.com/v1/gifs/search?q=".concat(e.state.searchInput,"&api_key=").concat(p,"&limit=30")).then((function(t){return t.json()})).then((function(t){return e.setState({searchData:t})})):alert("Invalid search")},e.onInputChange=function(t){e.setState({searchInput:t.target.value.toLowerCase()})},e.onRandom=function(){e.setState((function(t){return{show:"random",random:[]}})),f=0,e.fetchRandomData()},e.onTrending=function(){e.setState({show:"trending"}),e.fetchTrendingData()},e.state={random:[],searchData:[],searchInput:"",trending:[],show:"trending",counter:0},e}return Object(l.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchTrendingData()}},{key:"render",value:function(){return"search"===this.state.show?o.a.createElement("div",{className:"container"},o.a.createElement(d,{searchApi:this.searchApi,onRandom:this.onRandom,onTrending:this.onTrending,onInputChange:this.onInputChange}),o.a.createElement(u,{randomColor:b,searchdata:this.state.searchData})):"random"===this.state.show?o.a.createElement("div",{className:"container"},o.a.createElement(d,{searchApi:this.searchApi,onRandom:this.onRandom,onTrending:this.onTrending,onInputChange:this.onInputChange}),o.a.createElement(g,{random:this.state.random,fetchRandom:this.fetchRandomData},this.state.random.map((function(t,n){return o.a.createElement("img",{style:{border:"20px solid "+b[Math.floor(5*Math.random())]},key:n,src:t.data.images.original.url,alt:""})})))):"trending"===this.state.show?this.state.trending.data?o.a.createElement("div",{className:"container"},o.a.createElement(d,{searchApi:this.searchApi,onRandom:this.onRandom,onTrending:this.onTrending,onInputChange:this.onInputChange}),o.a.createElement("div",{className:"main-content"},this.state.trending.data.map((function(t,n){return o.a.createElement("img",{style:{border:"20px solid "+b[Math.floor(5*Math.random())]},key:n,src:t.images.original.url,alt:""})})))):o.a.createElement("div",{className:"container"},o.a.createElement(d,{searchApi:this.searchApi,onRandom:this.onRandom,onTrending:this.onTrending,onInputChange:this.onInputChange}),o.a.createElement("h3",null,"Loading...")):void 0}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.4629e0e2.chunk.js.map