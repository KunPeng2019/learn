webpackJsonp([56],{"/rZU":function(e,a){},WxJS:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("Xxa5"),o=t.n(r),l=t("exGp"),s=t.n(l),i=t("3pLw"),n=t("VsUZ"),c={name:"",components:{},props:{},data:function(){return{formLabelWidth:"160px",createLoading1:!1,form:{TeacherNo:"",TeacherCardNo:"",STInService:"",STFamous:"",InToDate:"",DeptTeacher:""},userid:"",username:"",rules:{}}},computed:{},mounted:function(){var e=i.a.getUser();e&&(this.userid=e.UserID,this.username=e.UserName),this.getdata()},methods:{getdata:function(){var e=this;return s()(o.a.mark(function a(){var t;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.get(n.a.getTeacheringInfo,{uid:e.userid,Token:i.a.getToken()});case 2:(t=a.sent).Result?null!=t.Data&&(e.form.TeacherNo=t.Data.ThcNo,e.form.TeacherCardNo=t.Data.ThcCardNo,e.form.STInService=t.Data.isinserice,e.form.STFamous=t.Data.STFamous,e.form.InToDate=t.Data.InToDate,e.form.DeptTeacher=t.Data.thlDept):e.$message({showClose:!0,message:t.message,type:t.type});case 4:case"end":return a.stop()}},a,e)}))()},resetForm:function(){this.$refs.form.resetFields(),this.$refs.form.clearValidate()}}},m={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"uploadImage"}},[t("div",{staticClass:"main"},[t("div",{staticClass:"tt"},[e._v("教学信息")]),e._v(" "),t("el-form",{ref:"form",staticStyle:{"margin-top":"60px",width:"60%"},attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"教工号:","label-width":e.formLabelWidth,prop:"TeacherNo"}},[t("el-input",{attrs:{disabled:!0,clearable:""},model:{value:e.form.TeacherNo,callback:function(a){e.$set(e.form,"TeacherNo",a)},expression:"form.TeacherNo"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"卡编号:","label-width":e.formLabelWidth,prop:"TeacherCardNo"}},[t("el-input",{attrs:{disabled:!0,clearable:""},model:{value:e.form.TeacherCardNo,callback:function(a){e.$set(e.form,"TeacherCardNo",a)},expression:"form.TeacherCardNo"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否在编：","label-width":e.formLabelWidth,prop:"STInService",loading:!0}},[t("el-input",{attrs:{disabled:!0,clearable:""},model:{value:e.form.STInService,callback:function(a){e.$set(e.form,"STInService",a)},expression:"form.STInService"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否名师：","label-width":e.formLabelWidth,prop:"STFamous",loading:!0}},[t("el-input",{attrs:{disabled:!0,clearable:""},model:{value:e.form.STFamous,callback:function(a){e.$set(e.form,"STFamous",a)},expression:"form.STFamous"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"进校年月：","label-width":e.formLabelWidth,prop:"InToDate",placement:"right"}},[t("el-input",{attrs:{disabled:!0,clearable:""},model:{value:e.form.InToDate,callback:function(a){e.$set(e.form,"InToDate",a)},expression:"form.InToDate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"所属部门：","label-width":e.formLabelWidth,prop:"DeptTeacher",loading:!0}},[t("el-input",{attrs:{disabled:!0},model:{value:e.form.DeptTeacher,callback:function(a){e.$set(e.form,"DeptTeacher",a)},expression:"form.DeptTeacher"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{disabled:!0,loading:e.createLoading1,type:"primary"},on:{click:function(a){e.comfirmFormHandler("form")}}},[t("i",{staticClass:"el-icon-check el-icon--left"}),e._v("保 存\n      ")]),e._v(" "),t("el-button",{attrs:{disabled:!0},on:{click:e.resetForm}},[t("i",{staticClass:"el-icon-close el-icon--left"}),e._v("重 置\n      ")])],1)],1)])},staticRenderFns:[]};var d=t("VU/8")(c,m,!1,function(e){t("/rZU")},null,null);a.default=d.exports}});
//# sourceMappingURL=56.20231227165236.js.map