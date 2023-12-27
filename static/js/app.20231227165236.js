webpackJsonp(
  [77],
  {
    "3pLw": function(e, t, n) {
      "use strict"
      var a = n("Xxa5"),
        o = n.n(a),
        r = n("exGp"),
        c = n.n(r),
        i = n("//Fk"),
        s = n.n(i),
        u = n("mtWM"),
        l = n.n(u),
        d = n("VsUZ"),
        p = n("vB9k")
      function m(e) {
        if (e && 200 === e.status) {
          var t = e.data
          return t.Result || t.ModuleOperatings
            ? t
            : (t.Datas || t.Info || (t.Info = "没有数据"), { message: t.Info, type: "warning" })
        }
        return { message: "网络连接超时，请重新尝试！", type: "error" }
      }
      l.a.interceptors.request.use(
        function(e) {
          return e
        },
        function(e) {
          return s.a.reject(e)
        }
      ),
        l.a.interceptors.response.use(
          function(e) {
            return e
          },
          function(e) {
            return s.a.resolve(e.response)
          }
        ),
        (t.a = {
          pageSize: 12,
          backToLogin: function() {
            window.sessionStorage.setItem("last_path", window.location.href),
              setTimeout(function() {
                ;(window.location.href =
                  window.location.href.split("/")[0] + "/#/main/login/?relogin=1"),
                  window.location.reload()
              }, 1520)
          },
          post: function(e, t) {
            var n = this
            return c()(
              o.a.mark(function a() {
                var r
                return o.a.wrap(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), d.a.GetBaseURL()
                        case 2:
                          return (
                            (r = n.sent),
                            n.abrupt(
                              "return",
                              l()({
                                method: "post",
                                baseURL: r,
                                timeout: 3e4,
                                url: e,
                                async: !1,
                                data: t,
                                headers: {
                                  "X-Requested-With": "XMLHttpRequest",
                                  "Content-Type": "application/json; charset=UTF-8"
                                }
                              }).then(function(e) {
                                return m(e)
                              })
                            )
                          )
                        case 4:
                        case "end":
                          return n.stop()
                      }
                  },
                  a,
                  n
                )
              })
            )()
          },
          postFormData: function(e, t) {
            var n = this
            return c()(
              o.a.mark(function a() {
                var r
                return o.a.wrap(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), d.a.GetBaseURL()
                        case 2:
                          return (
                            (r = n.sent),
                            n.abrupt(
                              "return",
                              l()({
                                method: "post",
                                baseURL: r,
                                timeout: 3e4,
                                url: e,
                                async: !1,
                                data: t,
                                headers: {
                                  "X-Requested-With": "XMLHttpRequest",
                                  "Content-Type": "multipart/form-data"
                                }
                              }).then(function(e) {
                                return m(e)
                              })
                            )
                          )
                        case 4:
                        case "end":
                          return n.stop()
                      }
                  },
                  a,
                  n
                )
              })
            )()
          },
          postFormDataAndProgress: function(e, t, n) {
            var a = this
            return c()(
              o.a.mark(function r() {
                var c
                return o.a.wrap(
                  function(a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.next = 2), d.a.GetBaseURL()
                        case 2:
                          return (
                            (c = a.sent),
                            a.abrupt(
                              "return",
                              l()({
                                method: "post",
                                baseURL: c,
                                timeout: 3e4,
                                url: e,
                                async: !1,
                                data: t,
                                onUploadProgress: n.onUploadProgress,
                                headers: {
                                  "X-Requested-With": "XMLHttpRequest",
                                  "Content-Type": "multipart/form-data"
                                }
                              }).then(function(e) {
                                return m(e)
                              })
                            )
                          )
                        case 4:
                        case "end":
                          return a.stop()
                      }
                  },
                  r,
                  a
                )
              })
            )()
          },
          get: function(e, t) {
            var n = this
            return c()(
              o.a.mark(function a() {
                var r
                return o.a.wrap(
                  function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), d.a.GetBaseURL()
                        case 2:
                          return (
                            (r = n.sent),
                            n.abrupt(
                              "return",
                              l()({
                                method: "get",
                                baseURL: r,
                                timeout: 3e4,
                                url: e,
                                params: t
                              }).then(function(e) {
                                return m(e)
                              })
                            )
                          )
                        case 4:
                        case "end":
                          return n.stop()
                      }
                  },
                  a,
                  n
                )
              })
            )()
          },
          getToken: function() {
            var e = d.a.cookie.token
            if (p.a.get(e)) return p.a.get(e)
            this.backToLogin()
          },
          getUser: function() {
            if (p.a.get(d.a.cookie.user_infor)) {
              var e = p.a.get(d.a.cookie.user_infor)
              if (null != e && "" != e) return JSON.parse(e)
            }
          },
          getThc: function() {
            if (p.a.get(d.a.cookie.thc_infor)) {
              var e = p.a.get(d.a.cookie.thc_infor)
              return void 0 != e && null != e && "undefined" != e && "" != e ? JSON.parse(e) : null
            }
            return null
          },
          getStu: function() {
            if (p.a.get(d.a.cookie.stu_infor)) {
              var e = p.a.get(d.a.cookie.stu_infor)
              return void 0 != e && null != e && "undefined" != e && "" != e ? JSON.parse(e) : null
            }
            return null
          },
          getConfig: function() {
            if (p.a.get(d.a.cookie.video_config))
              return JSON.parse(p.a.get(d.a.cookie.video_config))
            this.backToLogin()
          },
          logined: function() {
            return !!p.a.get(d.a.cookie.token)
          }
        })
    },
    Eah7: function(e, t) {},
    NHnr: function(e, t, n) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var a = n("Xxa5"),
        o = n.n(a),
        r = n("mvHQ"),
        c = n.n(r),
        i = n("exGp"),
        s = n.n(i),
        u = n("7+uW"),
        l = (n("tvR6"), n("mtWM")),
        d = n.n(l),
        p = n("VsUZ"),
        m = {
          name: "App",
          beforeCreate: function() {
            var e = this
            return s()(
              o.a.mark(function t() {
                return o.a.wrap(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), e.$root.GetConfigJSON()
                        case 2:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  e
                )
              })
            )()
          },
          mounted: function() {
            d.a
              .get("static/config.json")
              .then(function(e) {
                window.localStorage.setItem("campus_ip", e.data.Host),
                  window.localStorage.setItem("campus_AMSip", e.data.AMSHost),
                  window.localStorage.setItem("campus_port", e.data.Port),
                  window.localStorage.setItem("campus_RECip", e.data.RECHost),
                  window.localStorage.setItem("campus_RECport", e.data.RecPort),
                  window.localStorage.setItem("campus_webSocketPort", e.data.webSocketPort),
                  window.localStorage.setItem("campus_H5port", e.data.H5Port)
                var t = e.data
                window.localStorage.setItem(p.a.SessionPrefix + "ConfigJSON", c()(t))
              })
              .catch(function(e) {
                console.log(e)
              })
          }
        },
        f = {
          render: function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t("div", { attrs: { id: "app" } }, [t("router-view")], 1)
          },
          staticRenderFns: []
        }
      var h = n("VU/8")(
          m,
          f,
          !1,
          function(e) {
            n("Eah7")
          },
          null,
          null
        ).exports,
        S = n("/ocq"),
        g = function() {
          return n.e(67).then(n.bind(null, "1azH"))
        },
        G = function() {
          return n.e(66).then(n.bind(null, "mWgn"))
        },
        v = function() {
          return n.e(31).then(n.bind(null, "1MMj"))
        },
        D = function() {
          return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, "iLWv"))
        }
      u.default.use(S.a)
      var C = [
          { path: "/", redirect: "/main" },
          {
            path: "/main",
            component: function() {
              return n.e(30).then(n.bind(null, "gk7G"))
            },
            redirect: "/main/index",
            children: [
              {
                path: "binding/:id",
                component: function() {
                  return n.e(55).then(n.bind(null, "FeVA"))
                }
              },
              {
                path: "login",
                component: function() {
                  return Promise.all([n.e(0), n.e(45)]).then(n.bind(null, "Luci"))
                }
              },
              {
                path: "index",
                name: "index",
                component: function() {
                  return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, "cn08"))
                }
              },
              {
                path: "course",
                component: g,
                redirect: "course/page",
                children: [
                  {
                    path: "page",
                    name: "course",
                    component: function() {
                      return Promise.all([n.e(0), n.e(24)]).then(n.bind(null, "w8OS"))
                    }
                  }
                ]
              },
              {
                name: "interactive",
                path: "interactive",
                component: function() {
                  return Promise.all([n.e(0), n.e(22)]).then(n.bind(null, "BIaG"))
                },
                redirect: "interactive/page",
                children: [
                  {
                    path: "page",
                    component: function() {
                      return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "M0E9"))
                    }
                  },
                  {
                    path: "detail",
                    component: function() {
                      return Promise.all([n.e(0), n.e(20)]).then(n.bind(null, "IpwE"))
                    }
                  }
                ]
              },
              {
                path: "detail",
                name: "CourseDetail",
                component: function() {
                  return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, "lt25"))
                }
              },
              {
                path: "live",
                name: "live",
                component: function() {
                  return Promise.all([n.e(0), n.e(18)]).then(n.bind(null, "SL9c"))
                }
              },
              {
                path: "resource",
                component: g,
                redirect: "resource/page",
                children: [
                  {
                    path: "page",
                    component: function() {
                      return Promise.all([n.e(0), n.e(29)]).then(n.bind(null, "GsEN"))
                    }
                  },
                  {
                    path: "detail",
                    component: function() {
                      return n.e(48).then(n.bind(null, "cJjj"))
                    }
                  }
                ]
              },
              {
                path: "field",
                component: function() {
                  return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, "xeHv"))
                }
              },
              {
                path: "teacher",
                component: function() {
                  return Promise.all([n.e(0), n.e(34)]).then(n.bind(null, "L0lY"))
                }
              },
              {
                path: "mesNotify",
                component: D,
                redirect: "mesNotify/allMes",
                children: [
                  {
                    path: "allMes",
                    component: function() {
                      return Promise.all([n.e(0), n.e(32)]).then(n.bind(null, "xil2"))
                    }
                  },
                  {
                    path: "unreadMes",
                    component: function() {
                      return n.e(72).then(n.bind(null, "qwsy"))
                    }
                  },
                  {
                    path: "readedMes",
                    component: function() {
                      return n.e(73).then(n.bind(null, "nLIh"))
                    }
                  }
                ]
              },
              {
                path: "setInfo",
                component: D,
                redirect: "setInfo/basicInfo",
                children: [
                  {
                    path: "basicInfo",
                    component: function() {
                      return n.e(47).then(n.bind(null, "XO76"))
                    }
                  },
                  {
                    path: "personalInfo",
                    component: function() {
                      return n.e(43).then(n.bind(null, "2diQ"))
                    }
                  },
                  {
                    path: "teachingInfo",
                    component: function() {
                      return n.e(56).then(n.bind(null, "WxJS"))
                    }
                  },
                  {
                    path: "uploadImage",
                    component: function() {
                      return n.e(44).then(n.bind(null, "iJ8j"))
                    }
                  },
                  {
                    path: "contactInfo",
                    component: function() {
                      return n.e(59).then(n.bind(null, "rT/m"))
                    }
                  },
                  {
                    path: "confidentialInfo",
                    component: function() {
                      return n.e(58).then(n.bind(null, "iaEq"))
                    }
                  },
                  {
                    path: "changePwd",
                    component: function() {
                      return n.e(62).then(n.bind(null, "mrSx"))
                    }
                  }
                ]
              },
              {
                path: "teacherSpace",
                component: D,
                redirect: "teacherSpace/teacherEvaluate",
                children: [
                  {
                    path: "teacherView/:id",
                    component: function() {
                      return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "pRGh"))
                    }
                  },
                  {
                    path: "teacherView/:id",
                    component: function() {
                      return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "pRGh"))
                    }
                  },
                  {
                    path: "prepare",
                    component: G,
                    redirect: "prepare/courseView",
                    children: [
                      {
                        path: "view",
                        component: function() {
                          return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, "QI9Y"))
                        }
                      },
                      {
                        path: "prepareAll",
                        component: function() {
                          return Promise.all([n.e(0), n.e(19)]).then(n.bind(null, "mHG4"))
                        }
                      },
                      {
                        name: "prepareForms",
                        path: "prepareForms",
                        component: function() {
                          return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, "XcRm"))
                        }
                      },
                      {
                        name: "courseView",
                        path: "courseView",
                        component: function() {
                          return Promise.all([n.e(0), n.e(28)]).then(n.bind(null, "Za75"))
                        }
                      },
                      {
                        name: "createCourse",
                        path: "createCourse/:courseId?/:classId?/:courseName?",
                        component: function() {
                          return Promise.all([n.e(0), n.e(37)]).then(n.bind(null, "QiXf"))
                        }
                      },
                      {
                        name: "classTemplate",
                        path: "classTemplate",
                        component: function() {
                          return Promise.all([n.e(0), n.e(63)]).then(n.bind(null, "RqR2"))
                        }
                      },
                      {
                        name: "newCsTemp",
                        path: "newCsTemp",
                        component: function() {
                          return n.e(38).then(n.bind(null, "F9yv"))
                        }
                      },
                      {
                        name: "lessonInfo",
                        path: "lessonInfo",
                        component: function() {
                          return Promise.all([n.e(0), n.e(21)]).then(n.bind(null, "ZP6n"))
                        }
                      },
                      {
                        name: "classRecord",
                        path: "classRecord",
                        component: function() {
                          return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "9cHv"))
                        }
                      },
                      {
                        name: "studentTask",
                        path: "studentTask",
                        component: function() {
                          return Promise.all([n.e(0), n.e(46)]).then(n.bind(null, "iJR7"))
                        }
                      }
                    ]
                  },
                  {
                    path: "practiceBank",
                    component: G,
                    redirect: "practiceBank/index",
                    children: [
                      {
                        name: "practiceBankIndex",
                        path: "index",
                        component: function() {
                          return Promise.all([n.e(0), n.e(57)]).then(n.bind(null, "TduY"))
                        }
                      }
                    ]
                  },
                  {
                    path: "outline",
                    component: function() {
                      return n.e(23).then(n.bind(null, "34Zm"))
                    },
                    redirect: "outline/programView",
                    children: [
                      {
                        name: "createProgram",
                        path: "createProgram",
                        component: function() {
                          return Promise.all([n.e(0), n.e(39)]).then(n.bind(null, "xnQb"))
                        }
                      },
                      {
                        name: "createContent",
                        path: "createContent",
                        component: function() {
                          return Promise.all([n.e(0), n.e(40)]).then(n.bind(null, "DIrv"))
                        }
                      },
                      {
                        name: "programView",
                        path: "programView",
                        component: function() {
                          return n.e(27).then(n.bind(null, "wEXG"))
                        }
                      },
                      {
                        name: "contentView",
                        path: "contentView",
                        component: function() {
                          return n.e(65).then(n.bind(null, "7BRI"))
                        }
                      }
                    ]
                  },
                  {
                    path: "teacherResource",
                    component: function() {
                      return n.e(69).then(n.bind(null, "/sNE"))
                    }
                  },
                  {
                    path: "teacherSearch",
                    component: function() {
                      return n.e(68).then(n.bind(null, "XaMS"))
                    }
                  },
                  {
                    path: "teacherEvaluate",
                    component: function() {
                      return n.e(74).then(n.bind(null, "gmvq"))
                    },
                    redirect: "teacherEvaluate/list",
                    children: [
                      {
                        path: "list",
                        component: function() {
                          return Promise.all([n.e(0), n.e(25)]).then(n.bind(null, "dji6"))
                        }
                      },
                      {
                        path: "Calendar",
                        component: function() {
                          return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, "IOI5"))
                        }
                      },
                      {
                        name: "detail",
                        path: "detail",
                        component: function() {
                          return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, "UlzO"))
                        }
                      },
                      {
                        name: "evaluateddetail",
                        path: "evaluateddetail",
                        component: function() {
                          return Promise.all([n.e(0), n.e(61)]).then(n.bind(null, "PsMX"))
                        }
                      }
                    ]
                  },
                  {
                    path: "person",
                    component: function() {
                      return n.e(71).then(n.bind(null, "DTSJ"))
                    }
                  },
                  {
                    path: "activites",
                    component: function() {
                      return n.e(75).then(n.bind(null, "nJ6o"))
                    }
                  },
                  {
                    path: "classMana",
                    component: function() {
                      return n.e(42).then(n.bind(null, "bT34"))
                    },
                    redirect: "classMana/list",
                    children: [
                      {
                        path: "list",
                        component: function() {
                          return n.e(60).then(n.bind(null, "/bfv"))
                        }
                      },
                      {
                        path: "view/:id",
                        component: function() {
                          return Promise.all([n.e(0), n.e(13)]).then(n.bind(null, "zDUg"))
                        }
                      },
                      {
                        path: "score/:id",
                        component: function() {
                          return Promise.all([n.e(0), n.e(51)]).then(n.bind(null, "p6eM"))
                        }
                      },
                      {
                        path: "signIn/:id",
                        component: function() {
                          return Promise.all([n.e(0), n.e(54)]).then(n.bind(null, "+zrH"))
                        }
                      },
                      {
                        path: "students/:id",
                        component: function() {
                          return n.e(52).then(n.bind(null, "2Bl3"))
                        }
                      },
                      {
                        path: "student/:stuID",
                        component: function() {
                          return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "fHyB"))
                        }
                      }
                    ]
                  },
                  {
                    path: "statistics",
                    component: function() {
                      return n.e(70).then(n.bind(null, "OW60"))
                    }
                  }
                ]
              },
              {
                path: "studentSpace",
                component: function() {
                  return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, "iLWv"))
                },
                redirect: "studentSpace/view",
                children: [
                  {
                    path: "view",
                    component: function() {
                      return n.e(49).then(n.bind(null, "G7Nu"))
                    }
                  },
                  {
                    path: "member",
                    component: function() {
                      return n.e(35).then(n.bind(null, "tcL+"))
                    }
                  },
                  {
                    path: "notes",
                    component: function() {
                      return Promise.all([n.e(0), n.e(17)]).then(n.bind(null, "eJbQ"))
                    }
                  },
                  {
                    path: "task",
                    component: g,
                    redirect: "task/list",
                    children: [
                      {
                        path: "list",
                        component: function() {
                          return Promise.all([n.e(0), n.e(16)]).then(n.bind(null, "ji4i"))
                        }
                      },
                      {
                        path: "detail/:id",
                        component: function() {
                          return n.e(26).then(n.bind(null, "jvqm"))
                        }
                      }
                    ]
                  },
                  {
                    path: "grade",
                    component: g,
                    redirect: "grade/view",
                    children: [
                      {
                        path: "view",
                        component: function() {
                          return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, "JgI/"))
                        }
                      },
                      { path: "detail/:id", component: v }
                    ]
                  },
                  {
                    path: "activities",
                    component: g,
                    redirect: "activities/view",
                    children: [
                      {
                        path: "view",
                        component: function() {
                          return Promise.all([n.e(0), n.e(53)]).then(n.bind(null, "gMTx"))
                        }
                      },
                      { path: "detail/:id", component: v }
                    ]
                  },
                  {
                    path: "lessons",
                    component: function() {
                      return Promise.all([n.e(0), n.e(41)]).then(n.bind(null, "Klxv"))
                    }
                  },
                  {
                    path: "classRecord",
                    component: function() {
                      return Promise.all([n.e(0), n.e(12)]).then(n.bind(null, "IFOP"))
                    }
                  },
                  {
                    path: "collect",
                    component: function() {
                      return Promise.all([n.e(0), n.e(64)]).then(n.bind(null, "B7OH"))
                    }
                  },
                  {
                    path: "talk",
                    component: function() {
                      return Promise.all([n.e(0), n.e(50)]).then(n.bind(null, "pKss"))
                    }
                  },
                  {
                    path: "bank",
                    component: function() {
                      return Promise.all([n.e(0), n.e(33)]).then(n.bind(null, "v7sE"))
                    }
                  },
                  {
                    path: "review",
                    component: function() {
                      return Promise.all([n.e(0), n.e(36)]).then(n.bind(null, "syJt"))
                    }
                  }
                ]
              }
            ]
          }
        ],
        w = new S.a({ routes: C }),
        P = n("zL8q"),
        b = n.n(P),
        I = n("3pLw")
      ;(u.default.prototype.$http = I.a),
        (u.default.prototype.$api = p.a),
        u.default.use(b.a),
        (u.default.config.productionTip = !1),
        new u.default({
          el: "#app",
          data: function() {
            return {
              GetConfigJSON: function() {
                var e = this
                return s()(
                  o.a.mark(function t() {
                    var n, a
                    return o.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                !(n = JSON.parse(
                                  window.localStorage.getItem(e.SessionPrefix + "ConfigJSON")
                                ))
                              ) {
                                t.next = 3
                                break
                              }
                              return t.abrupt("return", n)
                            case 3:
                              return (
                                (t.next = 5),
                                d.a.get("static/config.json").catch(function(e) {
                                  console.log(e)
                                })
                              )
                            case 5:
                              return (
                                (a = t.sent),
                                (n = a.data),
                                window.localStorage.setItem(
                                  p.a.SessionPrefix + "ConfigJSON",
                                  c()(n)
                                ),
                                t.abrupt("return", n)
                              )
                            case 9:
                            case "end":
                              return t.stop()
                          }
                      },
                      t,
                      e
                    )
                  })
                )()
              },
              GetSrvConfig: function() {
                var e = this
                return s()(
                  o.a.mark(function t() {
                    var n, a, r
                    return o.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                !(n = JSON.parse(
                                  window.localStorage.getItem(e.SessionPrefix + "ConfigInfo")
                                ))
                              ) {
                                t.next = 3
                                break
                              }
                              return t.abrupt("return", n)
                            case 3:
                              return (t.next = 5), p.a.GetBaseURL()
                            case 5:
                              return (
                                (a = t.sent),
                                (t.next = 8),
                                d.a.get(a.concat(p.a.getConfigInfo)).catch(function(e) {
                                  console.log(e)
                                })
                              )
                            case 8:
                              return (
                                (r = t.sent),
                                (n = r.data.Datas),
                                window.localStorage.setItem(
                                  p.a.SessionPrefix + "ConfigInfo",
                                  c()(n)
                                ),
                                t.abrupt("return", n)
                              )
                            case 12:
                            case "end":
                              return t.stop()
                          }
                      },
                      t,
                      e
                    )
                  })
                )()
              }
            }
          },
          router: w,
          http: I.a,
          api: p.a,
          components: { App: h },
          template: "<App/>"
        })
    },
    VsUZ: function(e, t, n) {
      "use strict"
      var a = n("Xxa5"),
        o = n.n(a),
        r = n("mvHQ"),
        c = n.n(r),
        i = n("exGp"),
        s = n.n(i),
        u = n("NC6I"),
        l = n.n(u),
        d = n("mtWM"),
        p = n.n(d),
        m = "UserService",
        f = "CourseService",
        h = "MaterialService",
        S = "TeachingContentService",
        g = "TeachingProgramService",
        G = "GaugeService",
        v = "PrepareService",
        D = "PrepareResService",
        C = "ClsActivesService",
        w = "ThcService",
        P = "StuService",
        b = "ClassRoomService",
        I = "SupervisorService",
        B = "I_CourseService",
        T = "I_CoursewareService",
        y = "I_ClassPractiseService",
        R = "I_GroupService",
        k = "I_SignService",
        A = "I_ScreenSubjectService",
        L = "I_QuestionService",
        x = "I_CourseCommentService",
        _ = window.localStorage.getItem("campus_ip"),
        N = window.localStorage.getItem("campus_AMSip"),
        M = window.localStorage.getItem("campus_port"),
        U = window.localStorage.getItem("campus_RECport"),
        E = window.localStorage.getItem("campus_RECip")
      t.a = {
        SessionPrefix: "FJRH_Campus_Learning_",
        GetBaseURL: function() {
          var e = this
          return s()(
            o.a.mark(function t() {
              var n, a
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (n = JSON.parse(
                            window.localStorage.getItem(e.SessionPrefix + "ConfigJSON")
                          ))
                        ) {
                          t.next = 7
                          break
                        }
                        return (
                          (t.next = 4),
                          p.a.get("static/config.json").catch(function(e) {
                            console.log(e)
                          })
                        )
                      case 4:
                        ;(a = t.sent),
                          (n = a.data),
                          window.localStorage.setItem(e.SessionPrefix + "ConfigJSON", c()(n))
                      case 7:
                        return t.abrupt(
                          "return",
                          "http://" + n.Host + ":" + n.Port + "/FJRH.Campus/"
                        )
                      case 8:
                      case "end":
                        return t.stop()
                    }
                },
                t,
                e
              )
            })
          )()
        },
        GetSignalrURL: function() {
          var e = this
          return s()(
            o.a.mark(function t() {
              var n, a
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (n = JSON.parse(
                            window.localStorage.getItem(e.SessionPrefix + "ConfigJSON")
                          ))
                        ) {
                          t.next = 7
                          break
                        }
                        return (
                          (t.next = 4),
                          p.a.get("static/config.json").catch(function(e) {
                            console.log(e)
                          })
                        )
                      case 4:
                        ;(a = t.sent),
                          (n = a.data),
                          window.localStorage.setItem(e.SessionPrefix + "ConfigJSON", c()(n))
                      case 7:
                        return t.abrupt("return", "http://" + n.Host + ":" + n.webSocketPort + "/")
                      case 8:
                      case "end":
                        return t.stop()
                    }
                },
                t,
                e
              )
            })
          )()
        },
        GetDownloadFileURL: function() {
          var e = this
          return s()(
            o.a.mark(function t() {
              var n, a
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (n = JSON.parse(
                            window.localStorage.getItem(e.SessionPrefix + "ConfigJSON")
                          ))
                        ) {
                          t.next = 7
                          break
                        }
                        return (
                          (t.next = 4),
                          p.a.get("static/config.json").catch(function(e) {
                            console.log(e)
                          })
                        )
                      case 4:
                        ;(a = t.sent),
                          (n = a.data),
                          window.localStorage.setItem(e.SessionPrefix + "ConfigJSON", c()(n))
                      case 7:
                        return t.abrupt(
                          "return",
                          "http://" + n.Host + ":" + n.Port + "/FJRH.Campus/Download"
                        )
                      case 8:
                      case "end":
                        return t.stop()
                    }
                },
                t,
                e
              )
            })
          )()
        },
        GetI_DownloadFileURL: function() {
          var e = this
          return s()(
            o.a.mark(function t() {
              var n, a
              return o.a.wrap(
                function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (n = JSON.parse(
                            window.localStorage.getItem(e.SessionPrefix + "I_ConfigJSON")
                          ))
                        ) {
                          t.next = 7
                          break
                        }
                        return (
                          (t.next = 4),
                          p.a.get("static/config.json").catch(function(e) {
                            console.log(e)
                          })
                        )
                      case 4:
                        ;(a = t.sent),
                          (n = a.data),
                          window.localStorage.setItem(e.SessionPrefix + "I_ConfigJSON", c()(n))
                      case 7:
                        return t.abrupt(
                          "return",
                          "http://" + n.Host + ":" + n.Port + "/FJRH.Campus/InteractDownload"
                        )
                      case 8:
                      case "end":
                        return t.stop()
                    }
                },
                t,
                e
              )
            })
          )()
        },
        cookie: {
          token: l()("user_token"),
          user_infor: "FJRH_9527",
          video_config: "FJRH_9528",
          thc_infor: "FJRH_THC",
          stu_infor: "FJRH_STU"
        },
        colors: [
          "#4EA9FF",
          "#ff6c6e",
          "#f4a814",
          "#42e1b9",
          "#9bd738",
          "#4ee5b5",
          "#66d16a",
          "#d3d94a",
          "#8fc9ff",
          "#ff7474",
          "#f5a914",
          "#eb6eaf",
          "#9b5cdb",
          "#5260e9",
          "#5285e9"
        ],
        HostIP: _,
        AMSIP: N,
        RECIP: E,
        RECPort: U,
        login: m.concat("/Login"),
        binding: m.concat("/Binding"),
        getuserData: m.concat("/GetDataByID"),
        setAnswerQuestion: m.concat("/SetAnswerQuestionByID"),
        setPhoneAndEmail: m.concat("/SetPhoneAndEmail"),
        ComparePwd: m.concat("/ComparePwd"),
        UpdatePwd: m.concat("/UpdatePwd"),
        ComparePwdByName: m.concat("/ComparePwdByName"),
        checkThirdPartyUserByLDAP: m.concat("/checkThirdPartyUserByLDAP"),
        getCurrentSch: "SchService".concat("/GetCurrentSch"),
        getConfigInfo: "".concat("/GetConfigInfo"),
        DownloadFileByMID: "".concat("/DownloadFileByMID"),
        getRandNames: f.concat("/GetRandNames"),
        getCourseBySch: f.concat("/GetCourseBySch"),
        GetCourseByState: f.concat("/GetDatasByState"),
        UploadFile: "".concat("/UploadFile"),
        getSilderPic: "SilderConfigService".concat("/GetDatas"),
        getLink: "LinkService".concat("/GetDatas"),
        getAllDiscipline: "DisciplineService".concat("/GetAllDisciplineDatas"),
        getAllGrade: "GradeService".concat("/GetAllGradeDates"),
        getMaterialInfo: h.concat("/GetDatas"),
        getMaterialInfoBycondition: h.concat("/GetDatasByCondition"),
        getCondition: h.concat("/GetResConditions"),
        getRecTaskCount: h.concat("/GetRecTaskCount"),
        getUnBeginningTask: h.concat("/GetUnBeginningTask"),
        getDatasByID: h.concat("/GetDatasByID"),
        getResourceRanks: h.concat("/GetResourceRanks"),
        GetRecTaskByCSID: "RecTaskService".concat("/GetRecTaskByCSID"),
        GetEvalPlanCsByID: I.concat("/GetEvalPlanCsByID"),
        getLive: "RecTaskService".concat("/GetBeginningTask"),
        getLiveByCondition: "RecTaskService".concat("/GetBeginningTaskByCondition"),
        getLiveMsg: "RecTaskService".concat("/GetRecTaskMsgByID"),
        getLiveVideo: "RecTaskService".concat("/GetLiveCamera"),
        getOnLiveTaskByCondition: "RecTaskService".concat("/GetOnLiveTaskByCondition"),
        getCourseDetailInfoByID: h.concat("/GetMaterialByRTID"),
        getAllCourseDatas: f.concat("/GetAllCourseDatas"),
        getTermsBySchool: "TermService".concat("/GetDatasBySchool"),
        getCurrentTerm: "TermService".concat("/GetCurrentTerm"),
        validateTeachingProgramName: g.concat("/ValidateName"),
        getTeachingProgramData: g.concat("/GetData"),
        getTeachingProgramNameList: g.concat("/GetNameList"),
        saveTeachingProgram: g.concat("/Save"),
        deleteByTPID: g.concat("/DeleteByTPID"),
        validateTeachingContentName: S.concat("/ValidateName"),
        getTeachingContentData: S.concat("/GetData"),
        getTeachingContentNameList: S.concat("/GetNameList"),
        saveTeachingContent: S.concat("/Save"),
        deleteByTCID: S.concat("/DeleteByTCID"),
        getDatasByUID: S.concat("/GetDatasByUID"),
        GetTeacherScheduleByDate: v.concat("/GetTeacherScheduleByDate"),
        getPrepareData: v.concat("/GetData"),
        savePrepareData: v.concat("/SaveData"),
        GetPrepareDatas: v.concat("/GetDatas"),
        DeletePrepare: v.concat("/Delete"),
        GetPrepareResDatas: D.concat("/GetDatas"),
        SavePrepareResData: D.concat("/SaveData"),
        GetPrepareResData: D.concat("/GetData"),
        DeletePrepareRes: D.concat("/Delete"),
        GetMaterialRootDir: D.concat("/GetMaterialRootDir"),
        UploadPrepareMaterial: D.concat("/UploadMaterial"),
        GetClsActivesDatas: C.concat("/GetDatas"),
        SaveClsActivesData: C.concat("/SaveData"),
        GetClsActivesData: C.concat("/GetData"),
        DeleteClsActives: C.concat("/Delete"),
        GetExamsAllDatas: "ExamsService".concat("/GetAllDatas"),
        GetLessionByDate: "LessonService".concat("/GetLessionByDate"),
        GetDirFiles: "DirsService".concat("/GetDirFiles"),
        getMaterialDataByID: "DirsService".concat("/GetMaterialDataByID"),
        getGaugeData: G.concat("/GetData"),
        getGauge: G.concat("/GetGaugeByUID"),
        saveGauge: G.concat("/MarkGauge"),
        getRatingAttByRfid: G.concat("/getRatingAttByRfid"),
        GetClsSKDData: "ClsSKDService".concat("/GetData"),
        saveComment: "LECommentService".concat("/Comment"),
        getComment: "LECommentService".concat("/GetCommentByCondition"),
        ThumbUp: "LECommentService".concat("/ThumbUp"),
        getAllCampusesData: "CampusesService".concat("/GetAllDatas"),
        getBuildingDatasByCT: "BuildingService".concat("/GetDatasByCT"),
        getFloorByBuilding: b.concat("/GetFloorByCampusBuilding"),
        getDatasByCampusBuildingFloors: b.concat("/GetDatasByCampusBuildingFloors"),
        getAllClassRoom: b.concat("/GetAllDatas"),
        GetAllClsDatas: b.concat("/GetAllClsDatas"),
        GetRecScreenCondition: "RecTaskService".concat("/GetRecScreenCondition"),
        GetRecTaskPlanDatas: "RecTaskService".concat("/GetRecPlanDatas"),
        getThcRatingRecTask: I.concat("/GetThcRatingRecTask"),
        GetGsScoreByID: I.concat("/GetGsScoreByID"),
        GetIndividualGsScoreByID: I.concat("/GetIndividualGsScoreByID"),
        GetCtrlInfo: "CtrlService".concat("/GetCtrlInfo"),
        GetThcByState: w.concat("/GetDatasByState"),
        getThcData: w.concat("/GetDataByUID"),
        getTeacheringInfo: w.concat("/GetTeacheringInfo"),
        getBasicInfo: w.concat("/GetBasicInfo"),
        updatebasicThc: w.concat("/updatebasicThc"),
        updatePersonThc: w.concat("/updatePersonThc"),
        getBasicInfoStu: P.concat("/getBasicInfoStu"),
        updatebasicStu: P.concat("/updatebasicStu"),
        uploadStuImg: P.concat("/UploadPhoto"),
        GetEVALCourseByID: "EVALPlanService".concat("/GetEVALCourseByID"),
        GetRatingFormDataByEPID: "EVALPlanService".concat("/GetRatingFormDataByEPID"),
        GetrfDataByRfid: "EVALPlanService".concat("/GetrfDataByRfid"),
        GetThcRatingRecTaskByWeek: I.concat("/GetThcRatingRecTaskByWeek"),
        GetThcListByWeek: I.concat("/GetThcListByWeek"),
        ClsList: "ClsService".concat("/GetAllSchoolClassDatas"),
        getNatAllData: "NatService".concat("/GetAllDatas"),
        CourseStats: B.concat("/GetCourseStats"),
        CourseList: B.concat("/GetTCDatasToSpace"),
        CourseAdd: B.concat("/AddToSpace"),
        CourseDetail: B.concat("/GetData"),
        CourseUpdate: B.concat("/Update"),
        CourseUpdateState: B.concat("/UpdateState"),
        GetDatasByTeacherID: B.concat("/GetDatasByTeacherID"),
        GetScheduleDatas: B.concat("/GetScheduleDatas"),
        GetDatasByStudentID: B.concat("/GetDatasByStudentID"),
        StuCourseDatas: B.concat("/GetStuCourseDatas"),
        GetCourseDatas: B.concat("/GetDatas"),
        CourseTemplateList: "I_CourseTemplateService".concat("/GetDatas"),
        CourseTemplateAdd: "I_CourseTemplateService".concat("/AddToSpace"),
        CourseTemplateDelete: "I_CourseTemplateService".concat("/Delete"),
        CourseWareList: T.concat("/GetDatasToTeacher"),
        CourseWareAdd: T.concat("/Add"),
        CourseWareDelete: T.concat("/Delete"),
        CourseWareUpload: T.concat("/UploadCourseWare"),
        CourseMaterialList: T.concat("/GetMaterialDatas"),
        CourseWareUpdateAttribute: T.concat("/UpdateAttribute"),
        GetCoursewareTask: T.concat("/GetCoursewareTask"),
        GetStudentTaskDatas: T.concat("/GetStudentTaskDatas"),
        AddStuCoursewareTask: T.concat("/AddStuCoursewareTask"),
        MaterialTypeList: "MaterialTypeService".concat("/GetAllDatas"),
        ClassPractiseList: y.concat("/GetCPDatas"),
        ClassPractiseAdd: y.concat("/SaveCP"),
        ClassPractiseDelete: y.concat("/DeleteCP"),
        ClassPractiseStatistics: y.concat("/GetPLDataAndStats"),
        ClassPractiseSubjectList: y.concat("/GetSubjectByCPID"),
        ClassPractiseSubjectDetail: y.concat("/GetSubjectByPSID"),
        ClassPractiseSubjectAdd: y.concat("/AddSubject"),
        ClassPractiseSubjectUpdate: y.concat("/UpdateSubject"),
        ClassPractiseSubjectDelete: y.concat("/DeleteSubject"),
        GetSubjectData: y.concat("/GetSubjectData"),
        ClassPractiseAnswerStatistics: y.concat("/GetAnswerStats"),
        ClassPractiseAnswerDetail: y.concat("/GetDatasByAnswer"),
        ClassPractiseAnswerList: y.concat("/GetAnswerDatas"),
        ClassPractiseScoreSave: y.concat("/UpdateScore"),
        ClassPractiseSurveyInfo: y.concat("/GetSurveyStats"),
        ClassPractiseGetTask: y.concat("/GetPractiseTask"),
        ClassPractiseGetPSAndPA: y.concat("/GetPSAndPA"),
        ClassPractiseSubmitAnswer: y.concat("/SubmitAnswer"),
        ClassPractiseSubmitPractise: y.concat("/SubmitPractise"),
        ClassPractisePLStatsByPLID: y.concat("/GetPLStatsByPLID"),
        GetCPStudentAnswer: y.concat("/GetCPStudentAnswer"),
        ImportPractice: y.concat("/ImportPractice"),
        PracticeBankList: y.concat("/GetPLDatasByUserID"),
        PracticeBankSave: y.concat("/SavePL"),
        PracticeBankDelete: y.concat("/DeletePL"),
        GetSSDatas: A.concat("/GetDatas"),
        GetRPDatas: "I_RandomPickService".concat("/GetRPDatas"),
        GetGSAllDatas: "I_GroupWallService".concat("/GetGSAllDatas"),
        GetGSAndGDDatas: "I_GroupWallService".concat("/GetGSAndGDDatas"),
        GetStudentGSDatas: "I_GroupWallService".concat("/GetStudentGSDatas"),
        GroupDiscussionList: "I_PrepareGroupSubjectService".concat("/GetDatas"),
        GroupDiscussionAdd: "I_PrepareGroupSubjectService".concat("/Save"),
        GroupDiscussionDelete: "I_PrepareGroupSubjectService".concat("/Delete"),
        GetGroupingDatas: R.concat("/GetGroupingDatas"),
        GetGroupRanking: R.concat("/GetGroupRanking"),
        GetGroupRankingByMember: R.concat("/GetGroupRankingByMember"),
        GetGroupMemberRanking: R.concat("/GetGroupMemberRanking"),
        GetStudentRanking: B.concat("/GetStudentRanking"),
        GetBoardNoteDatas: "I_BoardNoteService".concat("/GetDatas"),
        GetMicroLessonDatas: "I_MicroLessonService".concat("/GetDatas"),
        InteractDownload: "http://" + _ + ":" + M + "/FJRH.Campus/InteractDownload",
        GetSignData: k.concat("/GetData"),
        GetSignDatas: k.concat("/GetDatas"),
        GetSignStats: k.concat("/GetSignStats"),
        UpdateSignDatas: k.concat("/UpdateSignDatas"),
        GetSignStatsByDate: k.concat("/GetSignStatsByDate"),
        GetGroupByTypeStats: A.concat("/GetGroupByTypeStats"),
        ScreenQuestionAnswerStatistics: A.concat("/GetAnswerStats"),
        ScreenQuestionAnswerDetail: A.concat("/GetDatasByAnswer"),
        ScreenQuestionAnswerList: A.concat("/GetAnswerDatas"),
        ScreenQuestionSurveyInfo: A.concat("/GetSurveyStats"),
        ScreenQuestionScoreSave: A.concat("/UpdateScore"),
        ScreenQuestionStudentAnswer: A.concat("/GetStudentAnswer"),
        GetPAScoreStats: y.concat("/GetPAScoreStats"),
        GetStudentScore: B.concat("/GetStudentScore"),
        GetQuestionAllDatas: L.concat("/GetAllDatas"),
        GetQuestionDatas: L.concat("/GetDatas"),
        questionDataSave: L.concat("/Save"),
        questionDataDelete: L.concat("/Delete"),
        groupNoteDatas: "I_GroupNoteService".concat("/GetDatasByStudentID"),
        groupNoteAllDatas: "I_GroupNoteService".concat("/GetDatas"),
        CourseCommentList: x.concat("/GetStudentDatas"),
        CourseCommentData: x.concat("/GetStudentData"),
        CourseCommentDataByTeacher: x.concat("/GetTeacherData"),
        CourseCommentListByTeacher: x.concat("/GetTeacherAllDatas"),
        CourseCommentSave: x.concat("/Save"),
        CourseCommentMultiSave: x.concat("/BatchSave"),
        CoursewareCommentList: "I_CoursewareCommentService".concat("/GetStudentDatas"),
        CoursewareCommentData: "I_CoursewareCommentService".concat("/GetStudentData"),
        CoursewareCommentSave: "I_CoursewareCommentService".concat("/Save"),
        GetStudentNoteDatas: "I_StudentNoteService".concat("/GetStudentNoteDatas"),
        SaveStuNode: "I_StudentNoteService".concat("/Save"),
        InteractUploadFile: "".concat("/InteractUploadFile"),
        getMetadataTrees: "MetadataService".concat("/GetTrees"),
        uploadThcImg: w.concat("/UploadPhoto"),
        getStuCountByClassIds: "ClsStuService".concat("/GetStuCountByClassIds"),
        GetInteractConfig: "InteractConfigService".concat("/GetInteractConfigByClsRommID"),
        DownloadSXFileURL: "http://" + _ + ":" + M + "/FJRH.Campus/DownloadFile",
        DownloadFileByMIDURL: "http://" + _ + ":" + M + "/FJRH.Campus/DownloadFileByMID",
        uuid: function() {
          for (var e = [], t = 0; t < 32; t++)
            e[t] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1)
          ;(e[14] = "4"), (e[19] = "0123456789abcdef".substr((3 & e[19]) | 8, 1))
          var n = e.join("")
          return n
        },
        ValidateIdCardNo: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            if (
              "0" !==
              (function(e) {
                var t = 0,
                  n = e,
                  a = n.length
                if (!/^\d{17}(\d|x)$/i.test(n) && !/^\d{15}$/i.test(n)) return "非法身份证号"
                if (
                  null ==
                  {
                    11: "北京",
                    12: "天津",
                    13: "河北",
                    14: "山西",
                    15: "内蒙古",
                    21: "辽宁",
                    22: "吉林",
                    23: "黑龙 江",
                    31: "上海",
                    32: "江苏",
                    33: "浙江",
                    34: "安徽",
                    35: "福建",
                    36: "江西",
                    37: "山东",
                    41: "河南",
                    42: "湖北",
                    43: "湖南",
                    44: "广东",
                    45: "广西",
                    46: "海南",
                    50: "重庆",
                    51: "四川",
                    52: "贵州",
                    53: "云南",
                    54: "西 藏",
                    61: "陕西",
                    62: "甘肃",
                    63: "青海",
                    64: "宁夏",
                    65: "新疆",
                    71: "台湾",
                    81: "香港",
                    82: "澳门",
                    91: "国 外"
                  }[parseInt(n.substr(0, 2))]
                )
                  return "非法地区"
                if (15 == a) {
                  sBirthday =
                    "19" +
                    n.substr(6, 2) +
                    "-" +
                    Number(n.substr(8, 2)) +
                    "-" +
                    Number(n.substr(10, 2))
                  var o = new Date(sBirthday.replace(/-/g, "/")),
                    r = o.getFullYear().toString() + "-" + (o.getMonth() + 1) + "-" + o.getDate()
                  if (sBirthday != r) return "非法生日"
                  ;(n = n.substring(0, 6) + "19" + n.substring(6, 15)), (n += GetVerifyBit(n))
                }
                var c = n.substring(6, 10)
                if (c < 1900 || c > 2078) return "非法生日"
                ;(n = n.replace(/x$/i, "a")),
                  (sBirthday =
                    n.substr(6, 4) + "-" + Number(n.substr(10, 2)) + "-" + Number(n.substr(12, 2)))
                var i = new Date(sBirthday.replace(/-/g, "/"))
                if (sBirthday != i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate())
                  return "非法生日"
                for (var s = 17; s >= 0; s--)
                  t += (Math.pow(2, s) % 11) * parseInt(n.charAt(17 - s), 11)
                return t % 11 != 1 ? "非法身份证号" : "0"
              })(t)
            )
              return n(new Error("请输入正确的身份证号码"))
            n()
          }
        },
        ValidateChinese: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^[\u4e00-\u9fa5]+$/
            if ((console.log(a.test(t)), !a.test(t))) return n(new Error("只能输入中文"))
            n()
          }
        },
        ValidateRoutineAndMinus: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^[\u0391-\uFFE5\w\s\-]+$/
            if ((console.log(a.test(t)), !a.test(t)))
              return n(new Error("只能包括中文字、英文字母、空格、数字和下划线和减号"))
            n()
          }
        },
        ValidateRoutine: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^[\u0391-\uFFE5\w\s]+$/
            if ((console.log(a.test(t)), !a.test(t)))
              return n(new Error("只能包括中文字、英文字母、空格、数字和下划线"))
            n()
          }
        },
        ValidateRightfulString: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^[A-Za-z0-9_-\s]+$/
            if ((console.log(a.test(t)), !a.test(t)))
              return n(new Error("只能包括英文字母、空格、数字和下划线"))
            n()
          }
        },
        ValidateAlphanumeric: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^[a-zA-Z0-9\s]+$/
            if ((console.log(a.test(t)), !a.test(t)))
              return n(new Error("只能包括英文字母、空格和数字"))
            n()
          }
        },
        ValidateAlpha: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^[a-zA-Z\s]+$/
            if ((console.log(a.test(t)), !a.test(t))) return n(new Error("只能包括英文字母和空格"))
            n()
          }
        },
        ValidatePow: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^\d+$/
            if ((console.log(a.test(t)), !a.test(t)))
              return n(new Error("输入值必须为整数，且取值为2的N次方!!"))
            var o = parseInt(t)
            if (o <= 0) return n(new Error("输入值必须为整数，且取值为2的N次方!!"))
            for (;;) {
              if (1 == o) return n()
              if (1 == (1 & o)) return n(new Error("输入值必须为整数，且取值为2的N次方!!"))
              o >>= 1
            }
          }
        },
        ValidateTEL: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /(^(\d{3,4}-)?\d{6,8}$)|(^(\d{3,4}-)?\d{6,8}(-\d{1,5})?$)|(\d{11})/
            if ((console.log(a.test(t)), !a.test(t)))
              return n(new Error("请正确填写电话（传真）号码"))
            n()
          }
        },
        ValidateMobile: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/
            if ((console.log(a.test(t)), !a.test(t))) return n(new Error("请正确填写手机号码"))
            n()
          }
        },
        ValidatePhone: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/,
              o = /(^(\d{3,4}-)?\d{6,8}$)|(^(\d{3,4}-)?\d{6,8}(-\d{1,5})?$)|(\d{11})/
            if ((console.log(a.test(t) || o.test(t)), !a.test(t) && !o.test(t)))
              return n(new Error("请正确填写11位手机号码或加区号固定电话"))
            n()
          }
        },
        ValidatePostalCode: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^[0-9]{6}$/
            if ((console.log(a.test(t)), !a.test(t))) return n(new Error("请正确填写邮政编码"))
            n()
          }
        },
        ValidateIP: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
            if ((console.log(a.test(t)), !a.test(t))) return n(new Error("请输入正确的IP地址"))
            n()
          }
        },
        ValidateNumber: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/
            if ((console.log(a.test(t)), !a.test(t)))
              return n(new Error("必须输入合法的数字（负数，小数）。"))
            n()
          }
        },
        ValidateDigits: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^\d+$/
            if ((console.log(a.test(t)), !a.test(t))) return n(new Error("必须输入正数"))
            n()
          }
        },
        ValidatePort: function(e, t, n) {
          if (!(t > 0 && t <= 65535)) return n(new Error("值的范围为 1 - 65535 "))
          n()
        },
        ValidateCredit: function(e, t, n) {
          if (void 0 === t || null === t || "" === t) n()
          else {
            var a = /^(\d+\.\d{1,1}|\d+)$/
            if ((console.log(a.test(t)), !a.test(t))) return n(new Error("只能有 1 位小数"))
            n()
          }
        }
      }
    },
    tvR6: function(e, t) {},
    vB9k: function(e, t, n) {
      "use strict"
      t.a = {
        set: function(e, t) {
          var n = new Date()
          n.setTime(n.getTime() + 2592e6),
            (document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString())
        },
        get: function(e) {
          var t,
            n = new RegExp("(^| )" + e + "=([^;]*)(;|$)")
          return (t = document.cookie.match(n)) ? unescape(t[2]) : null
        },
        delete: function(e) {
          var t = new Date()
          t.setTime(t.getTime() - 1)
          var n = this.get(e)
          null != n && (document.cookie = e + "=" + n + ";expires=" + t.toGMTString())
        }
      }
    }
  },
  ["NHnr"]
)
//# sourceMappingURL=app.20231227165236.js.map
