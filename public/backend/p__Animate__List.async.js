(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{o4wt:function(e,t,a){"use strict";a.r(t);a("IzEo");var i,n,l,r=a("bx4M"),o=(a("g9YV"),a("wCAj")),s=(a("14J3"),a("BMrR")),c=(a("jCWc"),a("kPKH")),d=(a("qVdP"),a("jsC+")),m=(a("Pwec"),a("CtXQ")),u=(a("+L6B"),a("2/Rp")),f=(a("lUTK"),a("BvKs")),g=(a("/zsF"),a("PArb")),p=(a("Awhp"),a("KrTs")),b=(a("2qtc"),a("kLXV")),y=a("2Taf"),h=a.n(y),j=a("vZ4D"),O=a.n(j),M=a("l4Ni"),E=a.n(M),k=a("ujKo"),v=a.n(k),w=a("rlhR"),x=a.n(w),q=a("MhPg"),S=a.n(q),C=(a("5NDa"),a("5rEg")),I=a("q1tI"),D=a.n(I),A=a("MuoO"),R=a("7DNP"),K=a("LLXN"),N=a("wd/R"),T=a.n(N),V=(a("nRaC"),a("5RzL")),B=(a("y8nQ"),a("Vl3Y")),P=a("jehZ"),F=a.n(P),z=(a("OaEy"),a("2fM7")),L=a("p0pE"),U=a.n(L),Y=a("+n12"),_=function(e){function t(){var e,a;h()(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return a=E()(this,(e=v()(t)).call.apply(e,[this].concat(n))),a.state={},a.handleSubmit=function(e){return function(){var t=a.props,i=t.modal,n=t.form;n.validateFields(function(t,a){t||(i.confirm(U()({},a,{slugData:e})),n.resetFields())})}},a.handleCancel=function(){var e=a.props,t=e.modal,i=e.form;t.cancel(),i.resetFields()},a}return S()(t,e),O()(t,[{key:"render",value:function(){var e=z["a"].Option,t=this.props.form.getFieldDecorator,a=this.props,i=a.show,n=a.data,l=a.modal,r=a.category,o=r.area,s=r.year,c=r.kind,d=Object(Y["i"])(o),m=Object(Y["i"])(s),u=Object(Y["i"])(c),f={labelCol:{span:4},wrapperCol:{span:18}},g=n||{},p=g.title,y=g.slug,h=g.status,j=g.area,O=g.year,M=g.kind;return D.a.createElement(b["a"],{title:Object(K["formatMessage"])({id:"common.quick.edit"}),visible:i,maskClosable:!1,forceRender:"true",onOk:this.handleSubmit(y),onCancel:this.handleCancel},D.a.createElement(B["a"],{onSubmit:l.submit},n&&D.a.createElement(B["a"].Item,F()({},f,{label:Object(K["formatMessage"])({id:"animate.title"})}),t("title",{initialValue:p,rules:[{required:!0,message:Object(K["formatMessage"])({id:"animate.tips.fill.title"})}]})(D.a.createElement(C["a"],{placeholder:Object(K["formatMessage"])({id:"animate.tips.fill.title"})}))),n&&D.a.createElement(B["a"].Item,F()({},f,{label:Object(K["formatMessage"])({id:"animate.slug"})}),t("slug",{initialValue:y,rules:[{required:!0,message:Object(K["formatMessage"])({id:"animate.tips.fill.slug"})}]})(D.a.createElement(C["a"],{placeholder:Object(K["formatMessage"])({id:"animate.tips.fill.slug"})}))),D.a.createElement(B["a"].Item,F()({},f,{label:Object(K["formatMessage"])({id:"animate.category.area"})}),t("area",{initialValue:j})(D.a.createElement(V["a"],{treeData:d,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,placeholder:Object(K["formatMessage"])({id:"animate.tips.fill.area"})}))),D.a.createElement(B["a"].Item,F()({},f,{label:Object(K["formatMessage"])({id:"animate.category.year"})}),t("year",{initialValue:O})(D.a.createElement(V["a"],{treeData:m,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,placeholder:Object(K["formatMessage"])({id:"animate.tips.fill.year"})}))),D.a.createElement(B["a"].Item,F()({},f,{label:Object(K["formatMessage"])({id:"animate.category.kind"})}),t("kind",{initialValue:M})(D.a.createElement(V["a"],{treeData:u,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,placeholder:Object(K["formatMessage"])({id:"animate.tips.fill.kind"})}))),D.a.createElement(B["a"].Item,F()({},f,{label:Object(K["formatMessage"])({id:"animate.status"})}),t("status",{initialValue:h||"draft",rules:[{required:!0,message:Object(K["formatMessage"])({id:"animate.tips.fill.status"})}]})(D.a.createElement(z["a"],{placeholder:Object(K["formatMessage"])({id:"animate.tips.fill.status"})},D.a.createElement(e,{value:"draft"},Object(K["formatMessage"])({id:"common.draft"})),D.a.createElement(e,{value:"publish"},Object(K["formatMessage"])({id:"common.publish"})),D.a.createElement(e,{value:"reject"},Object(K["formatMessage"])({id:"common.reject"})))))))}}]),t}(I["PureComponent"]),J=B["a"].create()(_),H=C["a"].Search,Q=(i=Object(A["connect"])(function(e){var t=e.animate,a=e.category,i=e.loading;return{animate:t,category:a,loading:i.models.animate}}),i((l=function(e){function t(){var e,a;h()(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return a=E()(this,(e=v()(t)).call.apply(e,[this].concat(n))),a.state={selectedRowKeys:[],quickEditStatus:!1,quickEditData:null},a.query={title:null,size:null,page:null,sort:null,area:null,kind:null,year:null,isUpdate:null,status:null},a.list={quickEdit:function(e){return function(){a.setState({quickEditData:{title:e.title,slug:e.slug,area:e.category.area?e.category.area._id:null,year:e.category.year?e.category.year._id:null,kind:e.category.kind?e.category.kind._id:null,status:e.status}}),a.modal.show()}},fullEdit:function(e){return function(){var t=a.props.dispatch;t(R["routerRedux"].push("/animate/slug/".concat(e)))}},fulldelete:function(e){return function(){var t=a.props.dispatch;t({type:"animate/deleteAnimate",payload:{params:{slug:e}}})}}},a.table={addNew:function(){var e=a.props.dispatch;e(R["routerRedux"].push("/animate/create"))},batchEdit:function(){a.setState({quickEditStatus:!0})},batchDelete:function(){b["a"].confirm({title:Object(K["formatMessage"])({id:"animate.list.delete.animate"}),content:Object(K["formatMessage"])({id:"animate.list.delete.animate.tips"}),okText:Object(K["formatMessage"])({id:"common.confirm"}),cancelText:Object(K["formatMessage"])({id:"common.cancel"}),onOk:function(){a.deleteBatch(!1),a.setState({selectedRowKeys:[]})}})},moreOption:function(e){switch(e.key){case"edit":a.table.allEdit();break;case"delete":a.table.allDelete();break;default:break}},allEdit:function(){a.setState({quickEditStatus:!0})},allDelete:function(){b["a"].confirm({title:Object(K["formatMessage"])({id:"animate.list.delete.animate"}),content:Object(K["formatMessage"])({id:"animate.list.delete.animate.all.tips"}),okText:Object(K["formatMessage"])({id:"common.confirm"}),cancelText:Object(K["formatMessage"])({id:"common.cancel"}),onOk:function(){a.deleteBatch(!0),a.setState({selectedRowKeys:[]})}})}},a.modal={show:function(){a.setState({quickEditStatus:!0})},cancel:function(){a.setState({quickEditStatus:!1,quickEditData:null})},confirm:function(e){var t=e.area,i=e.kind,n=e.slug,l=e.status,r=e.title,o=e.year,s=e.slugData,c=a.props.dispatch,d=a.state.selectedRowKeys;a.modal.cancel(),n?c({type:"animate/putAnimateInfo",payload:{params:{slug:s},data:{status:l,title:r,slug:n,"category.area":t,"category.year":o,"category.kind":i}}}):d.length>0?(c({type:"animate/putAnimateBatch",payload:{data:{type:"batch",list:d,data:{"category.area":t,"category.year":o,"category.kind":i,status:l}}},addon:a.query}),a.setState({selectedRowKeys:[]})):c({type:"animate/putAnimateBatch",payload:{data:{type:"all",data:{"category.area":t,"category.year":o,"category.kind":i,status:l}}},addon:a.query})}},a.deleteBatch=function(e){var t=a.props.dispatch,i=a.state.selectedRowKeys;t(e?{type:"animate/deleteAnimateBatch",payload:{data:{type:"all"}},addon:a.query}:{type:"animate/deleteAnimateBatch",payload:{data:{type:"batch",list:i}},addon:a.query})},a.onSearchVideo=function(e){a.query.title=e,a.queryAnimate()},a.onChangeTable=function(e,t,i){var n=e.current,l=e.pageSize,r=t["category.area.slug"]?t["category.area.slug"][0]:null,o=t["category.kind.slug"]?t["category.kind.slug"][0]:null,s=t["category.year.slug"]?t["category.year.slug"][0]:null,c=t["information.isUpdate"]?t["information.isUpdate"][0]:null,d=t.status?t.status[0]:null,m=null;if(i.order){var u="descend"===i.order?"-":"",f=i.field;m="".concat(u).concat(f)}a.query={size:l,page:n,sort:m,area:r,kind:o,year:s,isUpdate:c,status:d},a.queryAnimate()},a.queryAnimate=function(){var e=x()(a),t=e.query,i=a.props.dispatch;i({type:"animate/queryAnimate",payload:{query:t}})},a}return S()(t,e),O()(t,[{key:"componentDidMount",value:function(){this.queryAnimate()}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedRowKeys,i=t.quickEditStatus,n=t.quickEditData,l=this.props,b=l.animate,y=b.list,h=b.total,j=l.category,O=l.category,M=O.area,E=O.year,k=O.kind,v=l.loading,w={area:Object(Y["g"])(M).map(function(e){return{text:e.slug,value:e._id}}),year:Object(Y["g"])(E).map(function(e){return{text:e.slug,value:e._id}}),kind:Object(Y["g"])(k).map(function(e){return{text:e.slug,value:e._id}})},x={draft:{text:Object(K["formatMessage"])({id:"common.draft"}),badge:"processing",value:"draft"},publish:{text:Object(K["formatMessage"])({id:"common.publish"}),badge:"success",value:"publish"},reject:{text:Object(K["formatMessage"])({id:"common.reject"}),badge:"error",value:"reject"}},q=[{text:Object(K["formatMessage"])({id:"common.update.in"}),value:!0},{text:Object(K["formatMessage"])({id:"common.update.out"}),value:!1}],S=[{title:Object(K["formatMessage"])({id:"animate.title"}),dataIndex:"title",key:"title",width:200,sorter:!0,render:function(t,a){return D.a.createElement("span",null,D.a.createElement("a",{onClick:e.list.fullEdit(a.slug)},t))}},{title:Object(K["formatMessage"])({id:"animate.slug"}),dataIndex:"slug",sorter:!0},{title:Object(K["formatMessage"])({id:"animate.author"}),dataIndex:"author.name",sorter:!0},{title:Object(K["formatMessage"])({id:"animate.update"}),dataIndex:"information.isUpdate",filters:Object.values(q),filterMultiple:!1,render:function(e){return e?Object(K["formatMessage"])({id:"common.update.in"}):Object(K["formatMessage"])({id:"common.update.out"})}},{title:Object(K["formatMessage"])({id:"animate.comment"}),dataIndex:"count.comment",sorter:!0},{title:Object(K["formatMessage"])({id:"animate.danmu"}),dataIndex:"count.danmu",sorter:!0},{title:Object(K["formatMessage"])({id:"animate.play"}),dataIndex:"count.play",sorter:!0},{title:Object(K["formatMessage"])({id:"animate.like"}),dataIndex:"count.like",sorter:!0},{title:Object(K["formatMessage"])({id:"animate.level"}),dataIndex:"play.level",sorter:!0},{title:Object(K["formatMessage"])({id:"animate.category.area"}),dataIndex:"category.area.slug",filters:w.area,filterMultiple:!1},{title:Object(K["formatMessage"])({id:"animate.category.year"}),dataIndex:"category.year.slug",filters:w.year,filterMultiple:!1},{title:Object(K["formatMessage"])({id:"animate.category.kind"}),dataIndex:"category.kind.slug",filterMultiple:!1,filters:w.kind},{title:Object(K["formatMessage"])({id:"animate.status"}),dataIndex:"status",filters:Object.values(x),filterMultiple:!1,render:function(e){return D.a.createElement(p["a"],{status:x[e].badge,text:x[e].text})}},{title:Object(K["formatMessage"])({id:"animate.updatedTime"}),dataIndex:"updatedAt",sorter:!0,width:120,align:"center",render:function(e){return T()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(K["formatMessage"])({id:"animate.option"}),key:"action",dataIndex:"slug",render:function(t,a){return D.a.createElement("span",null,D.a.createElement("a",{onClick:e.list.quickEdit(a)},Object(K["formatMessage"])({id:"animate.option.quick.edit"})),D.a.createElement(g["a"],{type:"vertical"}),D.a.createElement("a",{onClick:e.list.fullEdit(t)},Object(K["formatMessage"])({id:"animate.option.full.edit"})),D.a.createElement(g["a"],{type:"vertical"}),D.a.createElement("a",{onClick:e.list.fulldelete(t)},Object(K["formatMessage"])({id:"animate.option.full.delete"})))}}],C=D.a.createElement(f["b"],{onClick:this.table.moreOption},D.a.createElement(f["b"].Item,{key:"edit"},Object(K["formatMessage"])({id:"animate.option.batch.all.edit"})),D.a.createElement(f["b"].Item,{key:"delete"},Object(K["formatMessage"])({id:"animate.option.batch.all.delete"}))),I={selectedRowKeys:a,onChange:function(t){e.setState({selectedRowKeys:t})}},A={showSizeChanger:!0,showQuickJumper:!0,total:h,showTotal:function(e){return"".concat(Object(K["formatMessage"])({id:"common.all.total"})," ").concat(e," ").concat(Object(K["formatMessage"])({id:"common.all.item"}))}};return D.a.createElement(r["a"],{className:"tableList",bordered:!1},D.a.createElement(s["a"],{className:"head"},D.a.createElement(c["a"],{span:16},D.a.createElement(u["a"],{icon:"plus",type:"primary",onClick:this.table.addNew},Object(K["formatMessage"])({id:"common.add.new"})),a.length>0&&D.a.createElement("span",null,D.a.createElement(u["a"],{onClick:this.table.batchEdit},Object(K["formatMessage"])({id:"animate.option.batch.some.edit"})),D.a.createElement(u["a"],{onClick:this.table.batchDelete},Object(K["formatMessage"])({id:"animate.option.batch.some.delete"}))),D.a.createElement(d["a"],{overlay:C},D.a.createElement(u["a"],null,Object(K["formatMessage"])({id:"common.more.option"})," ",D.a.createElement(m["a"],{type:"down"})))),D.a.createElement(c["a"],{span:8},D.a.createElement(H,{placeholder:Object(K["formatMessage"])({id:"animate.search"}),onSearch:this.onSearchVideo,enterButton:!0}))),D.a.createElement(s["a"],null,D.a.createElement(o["a"],{className:"longTable",loading:v,rowKey:"slug",rowSelection:I,columns:S,onChange:this.onChangeTable,dataSource:y,pagination:A})),D.a.createElement(J,{show:i,data:n,category:j,modal:this.modal}))}}]),t}(I["Component"]),n=l))||n);t["default"]=Q}}]);