import{_ as R,r as f,u as G,D as b,b as r,o as M,c as T,e,w as l,a as p,f as h,E as v,g as $,G as z}from"./index-CJd5nHo2.js";import{b as H}from"./alumnus-EJ8dTzHo.js";import{s as m}from"./request-vRFKru4k.js";const J={class:"container"},K=["src"],L=["src"],U="http://127.0.0.1:8000/upload/file",O={__name:"AlumnusAdd",setup(P){const w=f(null),k=G(),i=f([]),_=f(null),g=f(null),a=b({alumnus_id:"",alumnus_name:"",alumnus_gender:"",birthday:"",nationality:"",native_place:"",nation:"",politics_status:"",photo:"",old_photo:"",alumnus_type:"",alumnus_category:"",important_alumnus_type:"",enrollment_year:"",graduation_year:"",student_number:"",education_background:"",department:"",major:"",class_name:"",show:!1}),E=b({alumnus_id:[{required:!0,message:"校友ID不能为空",trigger:"blur"},{min:1,max:200,message:"校友ID长度必须在1到200之间",trigger:"blur"}],alumnus_name:[{required:!0,message:"校友名称不能为空",trigger:"blur"},{min:1,max:200,message:"校友名称长度必须在1到200之间",trigger:"blur"}],alumnus_gender:[{required:!0,message:"校友性别不能为空",trigger:"blur"}],birthday:[{required:!0,message:"校友生日不能为空",trigger:"blur"}],nationality:[{required:!0,message:"校友国籍不能为空",trigger:"blur"}],politics_status:[{required:!0,message:"校友政治面貌不能为空",trigger:"blur"}],native_place:[{required:!0,message:"校友籍贯不能为空",trigger:"blur"}],photo:[{required:!0,message:"请上传校友照片",trigger:"blur"}],old_photo:[{required:!0,message:"请上传校友老照片",trigger:"blur"}]});function q(d){i.value.push(d.filename),a.photo=d.filename,m("success","头像上传成功")}function I(d){m("error","头像上传失败")}const S=d=>{_.value.clearFiles();const t=d[0];t.uid=z(),_.value.handleStart(t),_.value.submit()};function A(d){i.value.push(d.filename),a.old_photo=d.filename,m("success","老照片上传成功")}function D(d){m("error","老照片上传失败")}const j=d=>{g.value.clearFiles();const t=d[0];t.uid=z(),g.value.handleStart(t),g.value.submit()},B=d=>{d.validate(t=>{if(!t)return!1;H(a).then(s=>{m("success","添加校友成功"),k.push("/admin/alumnus")}).catch(s=>{m("error",s.message)})})};return(d,t)=>{const s=r("el-input"),o=r("el-form-item"),n=r("el-col"),y=r("el-row"),c=r("el-card"),x=r("el-icon"),V=r("el-upload"),C=r("el-switch"),F=r("el-button"),N=r("el-form");return M(),T("div",J,[e(N,{ref_key:"formRef",ref:w,model:a,rules:E,style:{width:"100%"},"label-width":"auto","label-position":"left"},{default:l(()=>[e(c,null,{header:l(()=>t[20]||(t[20]=[p("div",{class:"card-header"},[p("span",null,"个人基本信息")],-1)])),default:l(()=>[e(y,{gutter:10},{default:l(()=>[e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"alumnus_id",label:"校友ID"},{default:l(()=>[e(s,{modelValue:a.alumnus_id,"onUpdate:modelValue":t[0]||(t[0]=u=>a.alumnus_id=u),class:"w-50 m-2",placeholder:"校友ID",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"alumnus_name",label:"校友姓名"},{default:l(()=>[e(s,{modelValue:a.alumnus_name,"onUpdate:modelValue":t[1]||(t[1]=u=>a.alumnus_name=u),class:"w-50 m-2",placeholder:"校友姓名",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"alumnus_gender",label:"校友性别"},{default:l(()=>[e(s,{modelValue:a.alumnus_gender,"onUpdate:modelValue":t[2]||(t[2]=u=>a.alumnus_gender=u),class:"w-50 m-2",placeholder:"校友性别",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"birthday",label:"校友生日"},{default:l(()=>[e(s,{modelValue:a.birthday,"onUpdate:modelValue":t[3]||(t[3]=u=>a.birthday=u),class:"w-50 m-2",placeholder:"校友生日",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"nationality",label:"校友国籍"},{default:l(()=>[e(s,{modelValue:a.nationality,"onUpdate:modelValue":t[4]||(t[4]=u=>a.nationality=u),class:"w-50 m-2",placeholder:"校友国籍",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"nationality",label:"校友民族"},{default:l(()=>[e(s,{modelValue:a.nation,"onUpdate:modelValue":t[5]||(t[5]=u=>a.nation=u),class:"w-50 m-2",placeholder:"校友民族",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"politics_status",label:"政治面貌"},{default:l(()=>[e(s,{modelValue:a.politics_status,"onUpdate:modelValue":t[6]||(t[6]=u=>a.politics_status=u),class:"w-50 m-2",placeholder:"政治面貌",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"native_place",label:"校友籍贯"},{default:l(()=>[e(s,{modelValue:a.native_place,"onUpdate:modelValue":t[7]||(t[7]=u=>a.native_place=u),class:"w-50 m-2",placeholder:"校友籍贯",size:"large",type:"text"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{class:"mt-1"},{header:l(()=>t[21]||(t[21]=[p("div",{class:"card-header"},[p("span",null,"上传校友头像/老照片")],-1)])),default:l(()=>[e(y,{gutter:10},{default:l(()=>[e(n,{span:12},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"photo",label:"头像"},{default:l(()=>[e(V,{ref_key:"upload",ref:_,action:U,"list-type":"picture-card","auto-upload":!0,"show-file-list":!0,"v-model":i.value,limit:1,onSuccess:q,onError:I,onExceed:S,accept:"image/*"},{file:l(({file:u})=>[p("div",null,[p("img",{class:"el-upload-list__item-thumbnail",src:u.url,alt:""},null,8,K)])]),default:l(()=>[e(x,null,{default:l(()=>[e(h(v))]),_:1})]),_:1},8,["v-model"])]),_:1})]),_:1}),e(n,{span:12},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"old_photo",label:"老照片"},{default:l(()=>[e(V,{ref_key:"upload1",ref:g,action:U,"list-type":"picture-card","auto-upload":!0,"show-file-list":!0,"v-model":i.value,limit:1,onSuccess:A,onError:D,onExceed:j,accept:"image/*"},{file:l(({file:u})=>[p("div",null,[p("img",{class:"el-upload-list__item-thumbnail",src:u.url,alt:""},null,8,L)])]),default:l(()=>[e(x,null,{default:l(()=>[e(h(v))]),_:1})]),_:1},8,["v-model"])]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{class:"mt-1"},{header:l(()=>t[22]||(t[22]=[p("div",{class:"card-header"},[p("span",null,"校友设置")],-1)])),default:l(()=>[e(y,{gutter:10},{default:l(()=>[e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"alumnus_type",label:"校友类型"},{default:l(()=>[e(s,{modelValue:a.alumnus_type,"onUpdate:modelValue":t[8]||(t[8]=u=>a.alumnus_type=u),class:"w-50 m-2",placeholder:"校友类型",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"alumnus_category",label:"校友类别"},{default:l(()=>[e(s,{modelValue:a.alumnus_category,"onUpdate:modelValue":t[9]||(t[9]=u=>a.alumnus_category=u),class:"w-50 m-2",placeholder:"校友类别",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"important_alumnus_type",label:"重点类型"},{default:l(()=>[e(s,{modelValue:a.important_alumnus_type,"onUpdate:modelValue":t[10]||(t[10]=u=>a.important_alumnus_type=u),class:"w-50 m-2",placeholder:"重点校友类型",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"enrollment_year",label:"入学年份"},{default:l(()=>[e(s,{modelValue:a.enrollment_year,"onUpdate:modelValue":t[11]||(t[11]=u=>a.enrollment_year=u),class:"w-50 m-2",placeholder:"入学年份",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"graduation_year",label:"毕业年份"},{default:l(()=>[e(s,{modelValue:a.graduation_year,"onUpdate:modelValue":t[12]||(t[12]=u=>a.graduation_year=u),class:"w-50 m-2",placeholder:"毕业年份",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"student_number",label:"校友学号"},{default:l(()=>[e(s,{modelValue:a.student_number,"onUpdate:modelValue":t[13]||(t[13]=u=>a.student_number=u),class:"w-50 m-2",placeholder:"校友学号",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"education_background",label:"校友学历"},{default:l(()=>[e(s,{modelValue:a.education_background,"onUpdate:modelValue":t[14]||(t[14]=u=>a.education_background=u),class:"w-50 m-2",placeholder:"校友学历",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"department",label:"校友院系"},{default:l(()=>[e(s,{modelValue:a.department,"onUpdate:modelValue":t[15]||(t[15]=u=>a.department=u),class:"w-50 m-2",placeholder:"校友院系",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"major",label:"校友专业"},{default:l(()=>[e(s,{modelValue:a.major,"onUpdate:modelValue":t[16]||(t[16]=u=>a.major=u),class:"w-50 m-2",placeholder:"校友专业",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"class_name",label:"校友班级"},{default:l(()=>[e(s,{modelValue:a.class_name,"onUpdate:modelValue":t[17]||(t[17]=u=>a.class_name=u),class:"w-50 m-2",placeholder:"校友班级",size:"large",type:"text",style:{width:"40%","min-width":"240px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(o,{style:{"margin-top":"10px"},prop:"show",label:"是否展示在首页"},{default:l(()=>[e(C,{modelValue:a.show,"onUpdate:modelValue":t[18]||(t[18]=u=>a.show=u),class:"w-50 m-2"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(o,{style:{margin:"50px 0"},type:"submit"},{default:l(()=>[e(F,{type:"primary",onClick:t[19]||(t[19]=u=>B(w.value)),plain:"",style:{width:"100%"},size:"large",round:""},{default:l(()=>t[23]||(t[23]=[$("创建新校友")])),_:1})]),_:1})]),_:1},8,["model","rules"])])}}},Y=R(O,[["__scopeId","data-v-40a560c1"]]);export{Y as default};