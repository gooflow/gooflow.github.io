(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DemoXml"],{d0c4:function(e,t,a){"use strict";a.r(t);var o=a("f2bf"),n={id:"DemoXml"},r={style:{"margin-left":"auto","margin-right":"15px"}},i=Object(o["h"])("textarea",{style:{width:"900px",height:"300px"},id:"xmlResult",readonly:""},null,-1);function s(e,t,a,s,l,d){var m=Object(o["A"])("goo-flow");return Object(o["t"])(),Object(o["g"])("div",n,[Object(o["k"])(m,{property:l.myProps,global:l.global,plugIns:l.plugIns,ref:"gooFlow"},{headerCustom:Object(o["H"])((function(){return[Object(o["h"])("div",r,[Object(o["h"])("button",{type:"button",onClick:t[0]||(t[0]=function(e){return d.loadXmlAjax()})},"AJAX载入XML数据"),Object(o["h"])("button",{type:"button",onClick:t[1]||(t[1]=function(e){return d.exportXml()})},"导出XML数据"),Object(o["h"])("button",{type:"button",onClick:t[2]||(t[2]=function(e){return d.DownloadFile("flowJson","json")})},"下载JSON"),Object(o["h"])("button",{type:"button",onClick:t[3]||(t[3]=function(e){return d.DownloadFile("flowXml","xml")})},"下载XML")])]})),_:1},8,["property","global","plugIns"]),i])}var l=a("1fde"),d=a("4676"),m=a("02d1"),p=a("0c15"),c=a("f871"),h=a("a10d"),f=a("e725"),u=a("53ca"),g=(a("ac1f"),a("5319"),a("b0c0"),"  "),v=g+g,b=v+g,w='<?xml version="1.0" encoding="UTF-8"?>\n<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"\n'+g+'xmlns:activiti="http://activiti.org/bpmn"\n'+g+'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n'+g+'targetNamespace="${targetNamespace}"\n'+g+'xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL\n'+g+'http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">\n',x="</definitions>",N=function(e,t,a){var o=a.left+","+a.top+","+a.width+","+a.height;return v+"<"+t+' id="'+e+'" g="'+o+'"'},j=function e(t,a,o,n){var r=(n?"":"\n")+o+"<"+t,i="",s="",l=!1;for(var d in a)"object"===Object(u["a"])(a[d])?s+=e(d,a[d],o+g):"text"===d?(s+=a[d],l=!0):i+=" "+d+'="'+a[d]+'"';return""===s||l||(s+="\n"+o),r+=i+(""===s?"/>":">"+s+"</"+t+">"),r},F=function(e){return!isNaN(parseFloat(e))&&isFinite(e)?parseFloat(e):"true"===e||"false"!==e&&e},y=function e(t,a){for(var o=0;o<t.attributes.length;++o){var n=t.attributes[o];"id"!==n.nodeName&&(a[n.nodeName]=F(n.nodeValue))}if(1===t.childNodes.length&&"string"===typeof t.childNodes[0].data)a.text=t.childNodes[0].data;else for(var r=0;r<t.childNodes.length;++r){var i=t.childNodes[r];"string"!==typeof i.data&&(a[i.tagName]={},e(i,a[i.tagName]))}},O={flag:"xml",methods:{exportBpmnXML:function(e){"undefined"===typeof e&&(e={});var t=w.replace("${targetNamespace}",this.prop.$extra.targetNamespace||"Examples");for(var a in this.prop.$extra)if("targetNamespace"!==a&&"id"!==a){var o=this.prop.$extra[a];"object"===Object(u["a"])(o)?t+=j(a,o,g,!0)+"\n":t+=g+"<"+a+">"+o+"</"+a+">\n"}var n=this.prop.$extra.id||"myProcess",r=this.prop.$title||"My Process";for(var i in t+=g+"<initNum>"+this.prop.$max+"</initNum>\n",t+=g+'<process id="'+n+'" name="'+r+'">\n',this.prop.$areas){var s=this.prop.$areas[i],l="swimlane";t+=N(i,l,s),t+=' name="'+i+'" title="'+s.name+'"';var d="";for(var m in s)"left"!==m&&"top"!==m&&"width"!==m&&"height"!==m&&"name"!==m&&("object"===Object(u["a"])(s[m])?d+=j(m,s[m],b):t+=" "+m+'="'+s[m]+'"');t+=""===d?"/>\n":">"+d+"\n"+v+"</swimlane>\n"}for(var p in this.prop.$memos){var c=this.prop.$memos[p],h="memo";t+=N(p,h,c),t+=">"+c.text+"\n"+v+"</memo>\n"}for(var f in this.prop.$nodes){var F=this.prop.$nodes[f],y=e[F.type]||F.type;t+=N(f,y,F);var O="";for(var X in F)"left"!==X&&"top"!==X&&"width"!==X&&"height"!==X&&"type"!==X&&("areaId"===X&&null!=F.areaId?t+=' swimlane="'+F.areaId+'"':"object"===Object(u["a"])(F[X])?O+=j(X,F[X],b):t+=" "+X+'="'+F[X]+'"');t+=""===O?"/>\n":">"+O+"\n"+v+"</"+y+">\n"}for(var M in this.prop.$lines){var $=this.prop.$lines[M];t+=v+'<sequenceFlow id="'+M+'" sourceRef="'+$.from+'" targetRef="'+$.to+'"';var D="";for(var A in $)"from"!==A&&"to"!==A&&("object"===Object(u["a"])($[A])?D+=j(A,$[A],b):t+=" "+A+'="'+$[A]+'"');t+=""===D?"/>\n":">"+D+"\n"+v+"</sequenceFlow>\n"}return t+=g+"</process>\n"+x,t},loadBpmnXML:function(e,t){"undefined"===typeof t&&(t={});var a={extra:{}};if("string"===typeof e){var o=e;window.ActiveXObject||"ActiveXObject"in window||navigator.userAgent.indexOf("Edge")>-1?(e=new ActivexObject("MSXML2.DOMDocument"),e.loadXML(o)):e=(new DOMParser).parseFromString(o,"text/xml")}var n=e.getElementsByTagName("definitions")[0];a.extra.targetNamespace=n.getAttribute("targetNamespace");for(var r=0;r<n.childNodes.length;r++){var i=n.childNodes[r];if("string"!==typeof i.data){var s=i.tagName;if("process"!==s){if("initNum"===s){a.initNum=parseInt(i.textContent,10);continue}a.extra[s]={},i.childNodes.length>0&&"string"===typeof i.childNodes[0].data?a.extra[s]=i.childNodes[0].data:y(i,a.extra[s])}else{a.extra.id=i.getAttribute("id"),a.title=i.getAttribute("name"),a.lines={},a.nodes={},a.areas={};for(var l=0;l<i.childNodes.length;++l){var d=i.childNodes[l];if("string"!==typeof d.data){var m=d.tagName,p=d.getAttribute("id");if("swimlane"===m){a.areas[p]={},y(d,a.areas[p]),delete a.areas[p].id,a.areas[p].name=a.areas[p].title,delete a.areas[p].title;var c=a.areas[p].g.split(",");delete a.areas[p].g,a.areas[p].left=parseFloat(c[0]),a.areas[p].top=parseFloat(c[1]),a.areas[p].width=parseFloat(c[2]),a.areas[p].height=parseFloat(c[3])}else if("memo"===m){"object"!==Object(u["a"])(a.memos)&&(a.memos={}),a.memos[p]={},y(d,a.memos[p]),delete a.memos[p].id;var h=a.memos[p].g.split(",");delete a.memos[p].g,a.memos[p].left=parseFloat(h[0]),a.memos[p].top=parseFloat(h[1]),a.memos[p].width=parseFloat(h[2]),a.memos[p].height=parseFloat(h[3])}else if("sequenceFlow"===m)a.lines[p]={},y(d,a.lines[p]),delete a.lines[p].id,a.lines[p].from=a.lines[p]["sourceRef"],a.lines[p].to=a.lines[p]["targetRef"],delete a.lines[p]["sourceRef"],delete a.lines[p]["targetRef"];else{a.nodes[p]={},y(d,a.nodes[p]),delete a.nodes[p].id,"undefined"!==typeof a.nodes[p]["swimlane"]&&(a.nodes[p].areaId=a.nodes[p]["swimlane"],delete a.nodes[p]["swimlane"]);var f=a.nodes[p].g.split(",");delete a.nodes[p].g,a.nodes[p].left=parseFloat(f[0]),a.nodes[p].top=parseFloat(f[1]),a.nodes[p].width=parseFloat(f[2]),a.nodes[p].height=parseFloat(f[3]),a.nodes[p].type=t[d.tagName]||d.tagName}}}}}}this.loadData(a)}}},X=a("bc3a"),M=a.n(X),$=a("abf2"),D={name:"DemoXml",components:{GooFlow:l["a"]},data:function(){return{myProps:{id:"aaaabbb",width:"900",height:"600",haveHead:!0,headLabel:!0,headBtns:["new","open","save","undo","redo","reload","print"],haveTool:!0,useOperStack:!0,haveMulti:!0,haveDirDashed:!0,haveSegment:!0,haveSegDashed:!0,toolBtns:["start round mix","end round","task","node","chat","state","plug","join","fork","complex mix"],toolTextWidth:60,auth:$["a"]},global:d["a"],plugIns:[m["a"],p["a"],c["a"],h["a"],f["a"],O]}},methods:{DownloadFile:function(e,t){this.$refs.gooFlow.exportDataFile(e,t)},exportXml:function(){document.getElementById("xmlResult").value=this.$refs.gooFlow.exportBpmnXML({"start round mix":"startEvent","end round mix":"endEvent"})},loadXmlAjax:function(){var e=this.$refs.gooFlow;M.a.get("./demo/data2.xml",{}).then((function(t){e.loadBpmnXML(t.data,{startEvent:"start round mix",endEvent:"end round mix"})}))}},mounted:function(){this.loadXmlAjax()}},A=a("6b0d"),L=a.n(A);const B=L()(D,[["render",s]]);t["default"]=B}}]);