// chrome.contextMenus.create({
// 	type:"normal",//类型
// 	title:"编辑——1.填写",//标题
// 	contexts:["selection","all"],//作用于是链接
// 	onclick:function(t){//点击事件
// 		chrome.tabs.executeScript(null, {file: 'js/edit_tianxie.js'});
// 	}
// },function(){
// })
// 
// chrome.contextMenus.create({
// 	type:"normal",//类型
// 	title:"编辑——2.待签发",//标题
// 	contexts:["selection","all"],//作用于是链接
// 	onclick:function(t){//点击事件
// 		chrome.tabs.executeScript(null, {file: 'js/edit_daiqianfa.js'});
// 	}
// },function(){
// })
// 
// chrome.contextMenus.create({
// 	type:"normal",//类型
// 	title:"编辑——3.待会签",//标题
// 	contexts:["selection","all"],//作用于是链接
// 	onclick:function(t){//点击事件
// 		chrome.tabs.executeScript(null, {file: 'js/edit_daihuiqian.js'});
// 	}
// },function(){
// })
// 
// 
// chrome.contextMenus.create({
// 	type:"normal",//类型
// 	title:"编辑——4.待接收状态",//标题
// 	contexts:["selection","all"],//作用于是链接
// 	onclick:function(t){//点击事件
// 		chrome.tabs.executeScript(null, {file: 'js/edit_daijieshou.js'});
// 		// alert("checkbox！")
// 	}
// },function(){
// })
// 
// chrome.contextMenus.create({
// 	type:"normal",//类型
// 	title:"编辑——5.待许可状态",//标题
// 	contexts:["selection","all"],//作用于是链接
// 	onclick:function(t){//点击事件
// 		chrome.tabs.executeScript(null, {file: 'js/edit_daixuke.js'});
// 		// alert("checkbox！")
// 	}
// },function(){
// })
// 
// 
// chrome.contextMenus.create({
// 	type:"normal",//类型
// 	title:"编辑——6.待终结状态",//标题
// 	contexts:["selection","all"],//作用于是链接
// 	onclick:function(t){//点击事件
// 		chrome.tabs.executeScript(null, {file: 'js/edit_daizhongjie.js'});
// 		// alert("checkbox！")
// 	}
// },function(){
// }) 
// 
// chrome.contextMenus.create({
// 	type:"normal",//类型
// 	title:"编辑——7.已终结状态",//标题
// 	contexts:["selection","all"],//作用于是链接
// 	onclick:function(t){//点击事件
// 		chrome.tabs.executeScript(null, {file: 'js/edit_yizhongjie.js'});
// 		// alert("checkbox！")
// 	}
// },function(){
// }) 
// 
// chrome.contextMenus.create({
// 	type:"normal",//类型
// 	title:"检验表单内容",//标题
// 	contexts:["selection","all"],//作用于是链接
// 	onclick:function(t){//点击事件
// 		chrome.tabs.executeScript(null, {file: 'js/examine.js'});
// 		// alert("checkbox！")
// 	}
// },function(){
// }) 


chrome.contextMenus.create({
	type:"normal",//类型
	title:"check",//标题
	contexts:["selection","all"],//作用于是链接
	onclick:function(t){//点击事件
		chrome.tabs.executeScript(null, {file: 'js/check.js'});
		// alert("checkbox！")
	}
},function(){
}) 