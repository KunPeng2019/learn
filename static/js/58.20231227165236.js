webpackJsonp([58],{iaEq:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Xxa5"),a=s.n(r),n=s("exGp"),o=s.n(n),i=s("3pLw"),u=s("VsUZ"),c={name:"",components:{},props:{},data:function(){return{createLoading1:!1,TeacherID:"",userid:"",username:"",formLabelWidth:"160px",form:{UserQuestion:"",UserAnswerQuestion:""},rules:{}}},computed:{},watch:{},mounted:function(){var e=i.a.getUser();e&&(this.userid=e.UserID,this.username=e.UserName),this.getdata()},methods:{getdata:function(){var e=this;return o()(a.a.mark(function t(){var s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get(u.a.getuserData,{id:e.userid,Token:i.a.getToken()});case 2:(s=t.sent).Result?null!=s.Data&&(e.form.UserQuestion=s.Data.UserQuestion,e.form.UserAnswerQuestion=s.Data.UserAnswerQuestion):e.$message({showClose:!0,message:s.message,type:s.type});case 4:case"end":return t.stop()}},t,e)}))()},comfirmFormHandler:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({showClose:!0,message:"请输入正确格式",type:"error"}),!1;t.savesubmit()})},savesubmit:function(){var e=o()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.createLoading1=!0,this.saveData({id:this.userid,question:this.form.UserQuestion,answer:this.form.UserAnswerQuestion,Token:i.a.getToken()});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),saveData:function(e){var t=this;return o()(a.a.mark(function s(){var r;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,i.a.post(u.a.setAnswerQuestion,e);case 2:(r=s.sent).Result?t.$message({showClose:!0,message:"数据保存成功！",type:"success"}):t.$message({showClose:!0,message:r.message,type:r.type}),t.createLoading1=!1;case 5:case"end":return s.stop()}},s,t)}))()},resetForm:function(){this.$refs.form.resetFields(),this.$refs.form.clearValidate()}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"uploadImage"}},[s("div",{staticClass:"main"},[s("div",{staticClass:"tt"},[e._v("保密信息")]),e._v(" "),s("el-form",{ref:"form",staticStyle:{"margin-top":"60px",width:"60%"},attrs:{model:e.form,rules:e.rules}},[s("el-form-item",{attrs:{label:"密保问题:","label-width":e.formLabelWidth,prop:"UserQuestion"}},[s("el-input",{attrs:{clearable:""},model:{value:e.form.UserQuestion,callback:function(t){e.$set(e.form,"UserQuestion",t)},expression:"form.UserQuestion"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码提示答案:","label-width":e.formLabelWidth,prop:"UserAnswerQuestion"}},[s("el-input",{attrs:{clearable:""},model:{value:e.form.UserAnswerQuestion,callback:function(t){e.$set(e.form,"UserAnswerQuestion",t)},expression:"form.UserAnswerQuestion"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{loading:e.createLoading1,type:"primary"},on:{click:function(t){e.comfirmFormHandler("form")}}},[s("i",{staticClass:"el-icon-check el-icon--left"}),e._v("保 存\n      ")]),e._v(" "),s("el-button",{on:{click:e.resetForm}},[s("i",{staticClass:"el-icon-close el-icon--left"}),e._v("重 置\n      ")])],1)],1)])},staticRenderFns:[]};var m=s("VU/8")(c,l,!1,function(e){s("trq5")},null,null);t.default=m.exports},trq5:function(e,t){}});
//# sourceMappingURL=58.20231227165236.js.map