(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{UhD9:function(e,t,a){"use strict";a.r(t);a("IzEo");var s=a("bx4M"),i=a("p0pE"),r=a.n(i),n=(a("5NDa"),a("5rEg")),c=(a("Znn+"),a("ZTPi")),o=a("mrSG"),m=a("q1tI"),l=a.n(m),h=a("MuoO"),p=a("vOnD"),u=a("LLXN"),y=a("mNhR"),d=a("mOtZ"),g=a("WqWh"),E=a("faBS"),b=a("/88p"),v=a("gmfD"),Q=a("usdK"),f=c["a"].TabPane,q=n["a"].Search,C=p["a"].div`
  padding: 60px;

  .search {
    width: 600px;
    margin: 40px auto;
  }
`,D=class extends m["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,t=this.props.dispatch;e&&(t({type:"post/queryList",payload:{query:{title:e},addon:{type:"search"}}}),t({type:"animate/queryList",payload:{query:{title:e},addon:{type:"search"}}}),t({type:"comic/queryList",payload:{query:{title:e},addon:{type:"search"}}}))}),this.searchChange=((e,t)=>{var a=this.props.dispatch,s=Object(E["b"])({query:e}),i=this.state.slug;a({type:`${t}/queryList`,payload:{query:r()({},s,{title:i}),addon:{type:"search"}}})}),this.listQuery={animate:e=>{var t=this.state.animateQuery,a=r()({},t,e);this.setState({animateQuery:a}),this.searchChange(a,"animate")},comic:e=>{var t=this.state.comicQuery,a=r()({},t,e);this.setState({comicQuery:a}),this.searchChange(a,"comic")},post:e=>{var t=this.state.postQuery,a=r()({},t,e);this.setState({query:a}),this.searchChange(a,"post")}},this.searchSubmit=(e=>{Q["a"].replace({pathname:`/search/${e}`})}),this.state={slug:e.match.params.slug,animateQuery:{key:"time",sort:!1,list:!1,size:20,page:1},comicQuery:{key:"time",sort:!1,list:!1,size:20,page:1},postQuery:{key:"time",sort:!1,list:!1,size:20,page:1}}}static getDerivedStateFromProps(e,t){return e.match.params.slug!==t.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.slug!==this.state.slug&&this.initData()}render(){var e=this.props,t=e.post,a=e.post.search,i=e.comic,n=e.comic.search,o=e.animate,m=e.animate.search,h=e.loadingPost,p=e.loadingComic,E=e.loadingAnimate,Q=this.state,D=Q.animateQuery,O=Q.comicQuery,S=Q.postQuery,L={animate:o.total.search||0,comic:i.total.search||0,post:t.total.search||0};return l.a.createElement(C,null,l.a.createElement("div",{className:"container"},l.a.createElement(s["a"],{bordered:!1},l.a.createElement("div",{className:"search"},l.a.createElement(q,{placeholder:Object(u["formatMessage"])({id:"common.input.tips"}),size:"large",onSearch:this.searchSubmit,enterButton:l.a.createElement(l.a.Fragment,null,l.a.createElement(y["a"],{type:"icon-sousuo"}),l.a.createElement("span",null,Object(u["formatMessage"])({id:"common.search"})))})),l.a.createElement(c["a"],{defaultActiveKey:"1",onChange:()=>{}},l.a.createElement(f,{tab:Object(u["formatMessage"])({id:"common.animate"}),key:"1"},l.a.createElement(s["a"],{bordered:!1,style:{marginBottom:"20px"},loading:E},l.a.createElement(d["a"],{value:D,onChange:this.listQuery.animate}),D.list?l.a.createElement(b["b"],{type:"animate",list:m}):l.a.createElement(b["a"],{type:"animate",list:m}),l.a.createElement(g["a"],{value:r()({},D,{total:L.animate}),onChange:this.listQuery.animate}))),l.a.createElement(f,{tab:Object(u["formatMessage"])({id:"common.comic"}),key:"2"},l.a.createElement(s["a"],{bordered:!1,style:{marginBottom:"20px"},loading:p},l.a.createElement(d["a"],{value:O,onChange:this.listQuery.comic}),O.list?l.a.createElement(b["b"],{type:"comic",list:n}):l.a.createElement(b["a"],{type:"comic",list:n}),l.a.createElement(g["a"],{value:r()({},O,{total:L.comic}),onChange:this.listQuery.comic}))),l.a.createElement(f,{tab:Object(u["formatMessage"])({id:"common.post"}),key:"3"},l.a.createElement(s["a"],{bordered:!1,style:{marginBottom:"20px"},loading:h},l.a.createElement(v["b"],{list:a}),l.a.createElement(g["a"],{value:r()({},S,{total:L.post}),onChange:this.listQuery.post})))))))}};D=o["a"]([Object(h["connect"])(e=>{var t=e.animate,a=e.comic,s=e.post,i=e.loading;return{post:s,animate:t,comic:a,loadingPost:i.effects["post/queryList"],loadingAnimate:i.effects["animate/queryList"],loadingComic:i.effects["comic/queryList"]}})],D),t["default"]=D}}]);