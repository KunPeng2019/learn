webpackJsonp([17],{"1i87":function(t,e){},"9HjM":function(t,e){},BfFP:function(t,e,a){"use strict";(function(t){var s=a("Xxa5"),n=a.n(s),o=a("exGp"),i=a.n(o),r=a("tN6b"),l=a("bBGM"),c=a("oAV5"),d=a("VsUZ");e.a={components:{noteContainer:r.a,summerNote:l.a},data:function(){return{todayNotes:[],dataTotal:0,snid:"",nodata:!0,dateRange:[],CourseOptions:[],inputSearch:"",formData:{startDate:"",endDate:"",psize:20,pno:1},weekNotes:[],isFormShow:!1,isDetailFormShow:!1,addLoading:!1,form:{Name:"",Lesson:"",Subject:"",Desc:""},rules:{},fileList:[],subjectOptions:[],SnName:"",snCourse:""}},mounted:function(){this.dateRange=[],this.dateRange[0]=new Date,this.dateRange[1]=new Date,this.formData.startDate=Object(c.b)(new Date,"yyyy-MM-dd"),this.formData.endDate=Object(c.b)(new Date,"yyyy-MM-dd"),this.searchData(),this.loadAllCourse()},methods:{pageChange:function(t){this.formData.pno=t,this.searchData()},addNote:function(){this.isFormShow=!0},resetForm:function(){this.$set(this.form,"Name",""),this.$set(this.form,"Lesson",""),this.$set(this.form,"Subject",""),this.$set(this.form,"Desc",""),this.isFormShow=!1,this.isDetailFormShow=!1,this.snid="",this.SnName="",this.snCourse="",t(".summernote").summernote("code","")},comfirmFormHandler:function(){var e=this;if(""!=this.form.Name)if(""!=this.form.Lesson){this.addLoading=!0,this.addLoading=!1,this.isFormShow=!1;var a=t(".summernote").summernote("code").replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,function(t,e){return'<img src="picture/'+e.split("=")[1].split("&")[0]+'/5" alt="" />'});this.$http.post(this.$api.SaveStuNode,{snID:this.snid,title:this.form.Name,content:a,courseID:this.form.Lesson,studentID:this.$http.getStu().StudentID}).then(function(t){t.Result?(e.$message({dangerouslyUseHTMLString:!0,showClose:!0,message:"数据保存成功！",type:"success"}),e.searchData()):e.$message({dangerouslyUseHTMLString:!0,showClose:!0,message:t.Info,type:"warning"})}).catch(function(t){})}else this.$message({dangerouslyUseHTMLString:!0,showClose:!0,message:"请选择课程",type:"warning"});else this.$message({dangerouslyUseHTMLString:!0,showClose:!0,message:"请填写笔记名称",type:"warning"})},selectDateRange:function(){2===this.dateRange.length&&(this.formData.startDate=this.dateRange[0],this.formData.endDate=this.dateRange[1])},searchData:function(){var t=this;this.weekNotes=[],this.$http.get(this.$api.GetStudentNoteDatas,{startDate:this.formData.startDate,endDate:this.formData.endDate,psize:this.formData.psize,pno:this.formData.pno,snid:"",stuid:this.$http.getStu().StudentID,estate:1,key:this.inputSearch}).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&(t.nodata=!1,e.Datas.forEach(function(e){t.weekNotes.push({snid:e.Key.SNID,title:e.Key.SNTtile,coursename:e.Value.CourseName,date:Object(c.b)(e.Key.CreateTime,"yyyy-MM-dd hh:mm:ss")})})),e.Result?t.dataTotal=e.RowsCount||0:t.dataTotal=0}).catch(function(t){})},loadAllCourse:function(){var t=this;return i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.tempCourse=[],t.$http.get(t.$api.GetDatasByStudentID,{studentID:t.$http.getStu().StudentID}).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&e.Datas.forEach(function(e){t.tempCourse.push({label:e.CourseName+"(上课时间："+Object(c.b)(e.ClassDate,"yyyy-MM-dd")+")",value:e.CourseID})}),t.CourseOptions=t.tempCourse}).catch(function(t){});case 2:case"end":return e.stop()}},e,t)}))()},remoteMethodOther:function(t){var e=this;setTimeout(function(){e.CourseOptions=e.tempCourse.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})},200)},showdetail:function(e){var a=this;return i()(n.a.mark(function s(){var o;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a.snid=e.snid,s.next=3,d.a.GetI_DownloadFileURL();case 3:o=s.sent,a.$http.get(a.$api.GetStudentNoteDatas,{startDate:a.formData.startDate,endDate:a.formData.endDate,snid:e.snid,stuid:a.$http.getStu().StudentID,estate:1,key:a.inputSearch}).then(function(e){e.Result&&e.Datas&&e.Datas.length>0&&(a.isFormShow=!0,e.Datas.forEach(function(e){a.form.Name=e.Key.SNTtile,a.form.Lesson=e.Key.CourseID;var s=e.Key.SNContent.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,function(t,e){var a=e.split("/")[1];return'<img src="'+o+"?filename="+a+'&fileType=5" alt="" />'});setTimeout(function(){t(".summernote").summernote("code",s)},500)})),e.Result&&(a.dataTotal=e.RowsCount||0)}).catch(function(t){});case 5:case"end":return s.stop()}},s,a)}))()}}}}).call(e,a("4kSj"))},PIjF:function(t,e){},eJbQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("BfFP"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personnal-detail-wrap"},[a("div",{staticClass:"personnal-detail-wrap-head"},[a("span",{staticClass:"personnal-detail-wrap-head-title"},[t._v("笔记管理")]),t._v(" "),a("div",[a("el-date-picker",{staticStyle:{width:"360px"},attrs:{size:"small",type:"daterange",align:"right","unlink-panels":"",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.selectDateRange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}}),t._v(" "),a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入内容",size:"small"},model:{value:t.inputSearch,callback:function(e){t.inputSearch=e},expression:"inputSearch"}},[a("el-button",{attrs:{slot:"append",type:"primary"},on:{click:t.searchData},slot:"append"},[t._v("搜索")])],1)],1),t._v(" "),a("span",{staticClass:"personnal-detail-wrap-head-add",on:{click:t.addNote}},[a("i",{staticClass:"iconfont icon-tianjiahuabu"}),t._v("\n      添加\n    ")])]),t._v(" "),a("note-container",{attrs:{title:"",datas:t.weekNotes},on:{showdetail:t.showdetail}}),t._v(" "),t.nodata?a("div",[t._v("未找到数据")]):t._e(),t._v(" "),a("div",{staticClass:"personal-bottom-pager"},[a("el-pagination",{staticClass:"personnal-detail-wrap-pager",attrs:{layout:"prev, pager, next","current-page":t.formData.pno,"page-size":t.formData.psize,total:t.dataTotal,"prev-text":"上一页","next-text":"下一页"},on:{"update:currentPage":function(e){t.$set(t.formData,"pno",e)},"current-change":t.pageChange}})],1),t._v(" "),a("el-dialog",{staticClass:"student-add-note-dialog",attrs:{title:"添加/修改笔记","close-on-click-modal":!1,visible:t.isFormShow,"before-close":t.resetForm},on:{"update:visible":function(e){t.isFormShow=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"90px"}},[a("el-form-item",{attrs:{label:"笔记名称：",prop:"Name",placement:"right"}},[a("el-input",{attrs:{clearable:""},model:{value:t.form.Name,callback:function(e){t.$set(t.form,"Name",e)},expression:"form.Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"课程名称：",prop:"Lesson",placement:"right"}},[a("el-select",{attrs:{filterable:"",remote:"","collapse-tags":"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":t.remoteMethodOther},model:{value:t.form.Lesson,callback:function(e){t.$set(t.form,"Lesson",e)},expression:"form.Lesson"}},t._l(t.CourseOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"笔记内容：",prop:"Desc",placement:"right"}},[a("summer-note",{attrs:{filetype:5}})],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{loading:t.addLoading,type:"primary",size:"small"},on:{click:t.comfirmFormHandler}},[a("i",{staticClass:"el-icon-check el-icon--left"}),t._v("确 定\n      ")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:t.resetForm}},[a("i",{staticClass:"el-icon-close el-icon--left"}),t._v("取 消\n      ")])],1)],1)],1)},staticRenderFns:[]};var o=function(t){a("1i87")},i=a("VU/8")(s.a,n,!1,o,null,null);e.default=i.exports},tN6b:function(t,e,a){"use strict";var s={props:{item:Object},methods:{showdetail:function(){this.$emit("showdetail",this.item)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"note-card",on:{click:t.showdetail}},[t._m(0),t._v(" "),a("div",{staticClass:"note-card-detail fr"},[a("div",{staticClass:"note-card-detail-title"},[t._v(t._s(t.item.title))]),t._v(" "),a("div",{staticClass:"note-card-detail-title"},[t._v(t._s(t.item.coursename))]),t._v(" "),a("div",{staticClass:"note-card-detail-date"},[t._v(t._s(t.item.date))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"note-card-icon fl"},[e("i",{staticClass:"iconfont icon-biji"})])}]};var o={components:{noteCard:a("VU/8")(s,n,!1,function(t){a("PIjF")},"data-v-160f2d54",null).exports},props:{datas:Array,title:{type:String,default:""}},methods:{showdetail:function(t){this.$emit("showdetail",t)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personnal-detail-wrap-note-container"},[a("div",{staticClass:"personnal-detail-wrap-note-container-head"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"personnal-detail-wrap-note-container-box"},[t._l(t.datas,function(e,s){return a("note-card",{key:s,staticClass:"fl",class:{mgr0:(s+1)%4==0},attrs:{item:e},on:{showdetail:t.showdetail}})}),t._v(" "),a("div",{staticClass:"clear"})],2)])},staticRenderFns:[]};var r=a("VU/8")(o,i,!1,function(t){a("9HjM")},"data-v-f00d03a8",null);e.a=r.exports}});
//# sourceMappingURL=17.20231227165236.js.map