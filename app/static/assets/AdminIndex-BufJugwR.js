import{a as v,s as b}from"./request-vRFKru4k.js";import{_ as x,r as w,j as A,k as N,b as n,o as k,c as S,e,w as t,a as s,f as _,l as T,g as o,t as i,A as G,x as L,C as B}from"./index-CJd5nHo2.js";function C(){return v({method:"get",url:"/message/admin"})}const D={class:"adin-index-container"},I={style:{display:"block"}},M={style:{"margin-top":"20px"}},V={style:{display:"block"}},j={style:{"margin-top":"20px"}},H={style:{display:"block"}},E={style:{"margin-top":"20px"}},q={style:{display:"flex","align-items":"center","justify-content":"space-between"}},z={__name:"AdminIndex",setup(F){const l=w({});A(()=>{C().then(u=>{l.value=u.data}).catch(u=>{b("error","获取后台信息失败")})});const g=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],h=N(()=>window.innerHeight-340);return(u,a)=>{const p=n("el-icon"),c=n("el-button"),d=n("el-card"),r=n("el-col"),f=n("el-row"),m=n("el-table-column"),y=n("el-table");return k(),S("div",D,[e(f,{gutter:10},{default:t(()=>[e(r,{span:8},{default:t(()=>[e(d,{style:{height:"200px"}},{default:t(()=>[s("span",I,[e(p,null,{default:t(()=>[e(_(T))]),_:1}),a[0]||(a[0]=o(" 角色 "))]),s("div",M,[e(c,{type:"warning",round:""},{default:t(()=>[o(i(l.value.admin_count)+" 超级管理员",1)]),_:1}),e(c,{type:"primary",round:""},{default:t(()=>[o(i(l.value.user_count)+" 普通用户",1)]),_:1})])]),_:1})]),_:1}),e(r,{span:8},{default:t(()=>[e(d,{style:{height:"200px"}},{default:t(()=>[s("span",V,[e(p,null,{default:t(()=>[e(_(G))]),_:1}),a[1]||(a[1]=o(" 校友 "))]),s("div",j,i(l.value.alumnus_count)+" 校友 ",1)]),_:1})]),_:1}),e(r,{span:8},{default:t(()=>[e(d,{style:{height:"200px"}},{default:t(()=>[s("span",H,[e(p,null,{default:t(()=>[e(_(L))]),_:1}),a[2]||(a[2]=o(" 搜索次数 "))]),s("div",E,i(l.value.search_count)+" 次搜索记录 ",1)]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(r,{span:24},{default:t(()=>[e(d,{style:{"margin-top":"10px"}},{header:t(()=>[s("div",q,[a[4]||(a[4]=s("div",null,"最近搜索(最近100次)",-1)),s("div",null,[e(c,{type:"warning",round:"",icon:_(B)},{default:t(()=>a[3]||(a[3]=[o("清空搜索历史")])),_:1},8,["icon"])])])]),default:t(()=>[s("div",null,[e(y,{data:g,border:"",style:{width:"100%"},height:h.value},{default:t(()=>[e(m,{prop:"date",label:"Date",width:"180"}),e(m,{prop:"name",label:"Name",width:"180"}),e(m,{prop:"address",label:"Address"})]),_:1},8,["height"])])]),_:1})]),_:1})]),_:1})])}}},O=x(z,[["__scopeId","data-v-8dbb68d9"]]);export{O as default};