webpackJsonp([53],{gMTx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7GJr"),n=a("9v5J"),l={components:{commonTable:o.a,bottomPager:n.a},data:function(){return{tableColumns:[{prop:"name",label:"活动名称"},{prop:"subject",label:"所属科目"},{prop:"date",label:"发布时间"},{prop:"owner",label:"发布人"},{prop:"type",label:"活动类型"},{prop:"number",label:"参与人数"},{prop:"oprate",label:"操作",slot:!0,width:100}],tableData:[{id:"123",name:"牛津英语词典解析",subject:"大学英语",date:"2019-05-12 14:00",owner:"江丽颜",type:"头脑风暴",number:"53"}],total:1}},methods:{look:function(t){this.$router.push("/main/studentSpace/activities/detail/"+t.id)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personnal-detail-wrap"},[a("div",{staticClass:"personnal-detail-wrap-title"},[t._v("我参与的活动")]),t._v(" "),a("common-table",{attrs:{columns:t.tableColumns,datas:t.tableData,pagger:!1,"th-class":"table-innerhead",border:""},scopedSlots:t._u([{key:"oprate",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.look(e.row)}}},[t._v("查看")])]}}])}),t._v(" "),a("bottom-pager",{attrs:{total:t.total},on:{change:t.pageChange}})],1)},staticRenderFns:[]};var s=a("VU/8")(l,r,!1,function(t){a("vdl2")},"data-v-4fba2cdf",null);e.default=s.exports},vdl2:function(t,e){}});
//# sourceMappingURL=53.20231227165236.js.map