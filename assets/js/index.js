var n={};!function(l){lang.init(),l("body").load("i18n/"+lang.text+".html",function(){l.ajax({url:"/assets/info.json",dataType:"jsonp",jsonpCallback:"ck",success:function(t){n=t,console.log(n),l(".tips-small").html("V"+n.version+"&nbsp;&nbsp;|&nbsp;&nbsp;"+n.publicDate+("zh"===lang.text?" 发布":" released"))}}),l("article:last").find(".row").load("i18n/customer.html"),lang["switch"](lang.text,"zh"===lang.text?"中文":"En"),l("title").html("GooFlow - "+lang.title[lang.text]),l("body").scrollspy({target:"#navbar-wrapper"}),Prism.highlightAllUnder(l("#guide").parent()[0],!1)})}($);