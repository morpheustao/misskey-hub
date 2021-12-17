"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[7900],{7900:(e,l,s)=>{s.r(l),s.d(l,{default:()=>B});var a=s(6252),c=s(3577);const i=e=>((0,a.dD)("data-v-d3b968b6"),e=e(),(0,a.Cn)(),e),n={class:"mk-schema-viewer-item"},d={key:0},t={key:1,class:"nullable"},u={key:1,class:"string"},m=i((()=>(0,a._)("code",null,"string",-1))),r={key:0,class:"nullable"},k={key:1,class:"enum"},o=(0,a.Uk)("enum: "),h={key:2,class:"nullable"},w=(0,a.Uk)("default: "),b={key:3,class:"description"},p={key:2,class:"number"},y=i((()=>(0,a._)("code",null,"number",-1))),v={key:0,class:"nullable"},g={key:1,class:"nullable"},f=(0,a.Uk)("default: "),D={key:2,class:"description"},q={key:3,class:"boolean"},_=i((()=>(0,a._)("code",null,"boolean",-1))),z={key:0,class:"nullable"},$={key:1,class:"nullable"},U=(0,a.Uk)("default: "),j={key:2,class:"description"},C={key:4,class:"array"},I=i((()=>(0,a._)("div",{class:"label"},"Array of:",-1))),L={key:0,class:"description"},O={key:1,class:"nullable"},W={key:2,class:"nullable"},Z=(0,a.Uk)("default: "),A={key:5,class:"object"},H=i((()=>(0,a._)("div",{class:"label"},"Object:",-1))),K={key:0,class:"description"},N={class:"kv"},P={class:"k"},Y={class:"v"},M={key:1,class:"nullable"},R={key:2,class:"nullable"},S=(0,a.Uk)("default: ");var V=s(7621);const x={props:{schema:{type:Object,required:!0}},setup(e){const l=(0,V.I)(),s=e.schema.$ref?e.schema.$ref.replace("misskey://",""):null;return{refName:s,refPath:e.schema.$ref?`${l.value}docs/api/entity/${a=s,a[0].toLowerCase()+a.slice(1,a.length).replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}.html`:null};var a}},B=(0,s(3744).Z)(x,[["render",function(e,l,s,i,V,x){const B=(0,a.up)("RouterLink"),E=(0,a.up)("MkSchemaViewerItem",!0);return(0,a.wg)(),(0,a.iD)("div",n,[s.schema.$ref?((0,a.wg)(),(0,a.iD)("div",d,[s.schema.$ref.startsWith("misskey://")?((0,a.wg)(),(0,a.j4)(B,{key:0,to:i.refPath},{default:(0,a.w5)((()=>[(0,a.Uk)((0,c.zw)(i.refName),1)])),_:1},8,["to"])):(0,a.kq)("",!0),s.schema.nullable?((0,a.wg)(),(0,a.iD)("span",t,"(nullable)")):(0,a.kq)("",!0)])):"string"===s.schema.type?((0,a.wg)(),(0,a.iD)("div",u,[m,s.schema.nullable?((0,a.wg)(),(0,a.iD)("span",r,"(nullable)")):(0,a.kq)("",!0),s.schema.enum?((0,a.wg)(),(0,a.iD)("div",k,[o,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.schema.enum,(e=>((0,a.wg)(),(0,a.iD)("code",null,(0,c.zw)(e),1)))),256))])):(0,a.kq)("",!0),void 0!==s.schema.default?((0,a.wg)(),(0,a.iD)("div",h,[w,(0,a._)("code",null,(0,c.zw)(s.schema.default),1)])):(0,a.kq)("",!0),s.schema.description?((0,a.wg)(),(0,a.iD)("div",b,(0,c.zw)(s.schema.description),1)):(0,a.kq)("",!0)])):"number"===s.schema.type?((0,a.wg)(),(0,a.iD)("div",p,[y,s.schema.nullable?((0,a.wg)(),(0,a.iD)("span",v,"(nullable)")):(0,a.kq)("",!0),void 0!==s.schema.default?((0,a.wg)(),(0,a.iD)("div",g,[f,(0,a._)("code",null,(0,c.zw)(s.schema.default),1)])):(0,a.kq)("",!0),s.schema.description?((0,a.wg)(),(0,a.iD)("div",D,(0,c.zw)(s.schema.description),1)):(0,a.kq)("",!0)])):"boolean"===s.schema.type?((0,a.wg)(),(0,a.iD)("div",q,[_,s.schema.nullable?((0,a.wg)(),(0,a.iD)("span",z,"(nullable)")):(0,a.kq)("",!0),void 0!==s.schema.default?((0,a.wg)(),(0,a.iD)("div",$,[U,(0,a._)("code",null,(0,c.zw)(s.schema.default),1)])):(0,a.kq)("",!0),s.schema.description?((0,a.wg)(),(0,a.iD)("div",j,(0,c.zw)(s.schema.description),1)):(0,a.kq)("",!0)])):"array"===s.schema.type?((0,a.wg)(),(0,a.iD)("div",C,[I,s.schema.description?((0,a.wg)(),(0,a.iD)("div",L,(0,c.zw)(s.schema.description),1)):(0,a.kq)("",!0),(0,a.Wm)(E,{schema:s.schema.items},null,8,["schema"]),s.schema.nullable?((0,a.wg)(),(0,a.iD)("span",O,"(nullable)")):(0,a.kq)("",!0),void 0!==s.schema.default?((0,a.wg)(),(0,a.iD)("div",W,[Z,(0,a._)("code",null,(0,c.zw)(s.schema.default),1)])):(0,a.kq)("",!0)])):"object"===s.schema.type?((0,a.wg)(),(0,a.iD)("div",A,[H,s.schema.description?((0,a.wg)(),(0,a.iD)("div",K,(0,c.zw)(s.schema.description),1)):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries(s.schema.properties),(([e,l])=>((0,a.wg)(),(0,a.iD)("div",N,[(0,a._)("div",P,(0,c.zw)(e),1),(0,a._)("div",Y,[(0,a.Wm)(E,{schema:l},null,8,["schema"])])])))),256)),s.schema.nullable?((0,a.wg)(),(0,a.iD)("span",M,"(nullable)")):(0,a.kq)("",!0),void 0!==s.schema.default?((0,a.wg)(),(0,a.iD)("div",R,[S,(0,a._)("code",null,(0,c.zw)(s.schema.default),1)])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])}],["__scopeId","data-v-d3b968b6"]])},3744:(e,l)=>{l.Z=(e,l)=>{for(const[s,a]of l)e[s]=a;return e}}}]);