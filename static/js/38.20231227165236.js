webpackJsonp([38],{"3Xo3":function(t,e){},Deoy:function(t,e,s){"use strict";e.a={data:function(){return{form:{},rules:{},btnLoading:!1}},created:function(){this.initDict(),this.resetForm()},methods:{initDict:function(){},resetForm:function(){},saveData:function(){}}}},F9yv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),n=s.n(a),o={name:"",components:{},mixins:[s("Deoy").a],props:{},data:function(){return{form:{courseName:"",classID:"",className:""},rules:{courseName:{required:!0,min:1,max:60,message:"长度在 1 到 60 个字符",trigger:"blur"},classID:{required:!0,message:"请选择班级",trigger:"blur"}},classOptions:[]}},computed:{},watch:{},created:function(){},methods:{initDict:function(){var t=this;this.classOptions=[],this.$http.get(this.$api.ClsList).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&e.Datas.forEach(function(e){t.classOptions.push({label:e.ClassName,value:e.ClassID})})}).catch(function(t){})},selectClass:function(t){var e=this.classOptions.find(function(e){return e.value===t});this.form.className=e.label||""},saveData:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$message({showClose:!0,message:"请输入正确格式",type:"error"}),!1;e.btnLoading=!0,e.$http.post(e.$api.CourseTemplateAdd,n()({},e.form,{ctID:e.$api.uuid(),userID:e.$http.getUser().UserID})).then(function(t){t.Result?(e.$message({message:"创建成功！",type:"success"}),setTimeout(function(){history.go(-1)},200)):t.message&&e.$message(n()({showClose:!0},t)),e.btnLoading=!1}).catch(function(t){e.btnLoading=!1})})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"new-csTemp"}},[s("div",{staticClass:"main"},[t._m(0),t._v(" "),s("div",{staticClass:"concent"},[s("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px","label-position":"top"}},[s("el-form-item",{attrs:{label:"科目",prop:"courseName"}},[s("el-input",{model:{value:t.form.courseName,callback:function(e){t.$set(t.form,"courseName",e)},expression:"form.courseName"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"班级",prop:"classID"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择班级"},on:{change:t.selectClass},model:{value:t.form.classID,callback:function(e){t.$set(t.form,"classID",e)},expression:"form.classID"}},t._l(t.classOptions,function(e,a){return s("el-option",{key:a,attrs:{label:e.label},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"item.value"}})}),1)],1),t._v(" "),s("el-form-item",[s("el-button",{on:{click:function(e){t.$router.go(-1)}}},[t._v("返回")]),t._v(" "),s("el-button",{attrs:{loading:t.btnLoading,type:"primary"},on:{click:function(e){t.saveData("form")}}},[t._v("立即创建")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top"},[e("div",{staticClass:"tt"},[this._v("创建班级模板")])])}]};var r=s("VU/8")(o,i,!1,function(t){s("3Xo3")},"data-v-38095a80",null);e.default=r.exports}});
//# sourceMappingURL=38.20231227165236.js.map