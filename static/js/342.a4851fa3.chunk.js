"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[342],{2342:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,a,o,s=t(2791),c=t(9434),u=t(1413),l=t(2290),d=t(5705),m=t(168),x=t(6487),p=(0,x.zo)(d.l0)(r||(r=(0,m.Z)(["\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-top: 10px;\n  padding-left: 5px;\n  border: 1px solid;\n"]))),f=x.zo.button(i||(i=(0,m.Z)(["\n  width: 100px;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-bottom: 20px;\n  margin-right: auto;\n"]))),h=t(6916),b=function(n){return n.contacts.items},g=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},v=(0,h.P1)([b,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),y=t(3329),k=function(){var n=(0,c.v9)(b),e=(0,c.I0)();return(0,y.jsx)(d.J9,{initialValues:{name:"",number:""},onSubmit:function(t,r){var i;i=t,n.find((function(n){return n.name===i.name}))?alert("".concat(i.name," is already in contacts.")):e((0,l.uK)((0,u.Z)({},i))),r.resetForm()},children:(0,y.jsxs)(p,{children:[(0,y.jsxs)("label",{children:["Name",(0,y.jsx)(d.gN,{type:"text",name:"name",pattern:"^[\u0430-\u044f\u0410-\u042f\u0451\u0401a-zA-Z\\s]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)("label",{children:["Number",(0,y.jsx)(d.gN,{type:"tel",name:"number",pattern:"\\+\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(f,{type:"submit",children:"Add contact"})]})})},w=function(n){var e=n.item,t=e.id,r=e.name,i=e.number,a=(0,c.I0)();return(0,y.jsxs)(y.Fragment,{children:[r,": ",i,(0,y.jsx)("button",{onClick:function(){a((0,l.Tk)({id:t,name:r,number:i}))},children:"Edit"}),(0,y.jsx)("button",{onClick:function(){a((0,l.GK)(t))},children:"Delete"})]})},C=x.zo.ul(a||(a=(0,m.Z)(["\n  flex-direction: column;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),z=function(){var n=(0,c.v9)(v);return(0,y.jsx)(C,{children:n.map((function(n){return(0,y.jsx)("li",{children:(0,y.jsx)(w,{item:n})},n.id)}))})},Z=t(6895),F=x.zo.label(o||(o=(0,m.Z)(["\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-top: 10px;\n"]))),N=function(){var n=(0,c.I0)();return(0,y.jsxs)(F,{children:["Find contacts by name",(0,y.jsx)("input",{onChange:function(e){n((0,Z.x)(e.currentTarget.value))},name:"filter"})]})},A=function(){var n=(0,c.I0)(),e=(0,c.v9)(g),t=(0,c.v9)(j);return(0,s.useEffect)((function(){n((0,l.yF)())}),[n]),(0,y.jsxs)("div",{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(k,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(N,{}),e&&!t&&(0,y.jsx)("b",{children:"Request in progress..."}),(0,y.jsx)(z,{})]})}}}]);
//# sourceMappingURL=342.a4851fa3.chunk.js.map