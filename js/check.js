// 模拟几条吉安站的数据
if(true){
	var JiAnData=[]
	JiAnData.push('#3主变压器变高2201开关','#3主变压器变高2202开关','#3主变压器变高2203开关')
	var TestData=[]
	TestData.push('#1主变压器变高2201开关','#2主变压器变高2202开关')
	var ZhanDianData = new Array()
	for (var i = 0; i < 5; i++) {
		ZhanDianData[i] = new Array()
	}
	ZhanDianData[0][0] = '吉安站'
	ZhanDianData[0][1] = JiAnData
	ZhanDianData[1][0] = '测试站'
	ZhanDianData[1][1] = TestData
	console.log("站点数据如下：")
	console.log(ZhanDianData)
}




// 获取该工作票的地点名称
var GetPlace = document.getElementById("functionLocationName");//吉安站
console.log("该站点的名称为："+GetPlace.value)//目前没有数据

//获取操作任务中的内容
//1.获取table中的行数GetRows
var GetRows= document.getElementById("table").children[1].rows.length;
console.log("一共获取到 "+GetRows+" 行（暂时没有区分多级）")
// console.log(GetRows)//49
// 获取table元素
var GetTable = document.getElementById("table").children[1]
// 获取 table中的每行数据，存入数组中
var ArrLargeCategory = []
for(var i=0;i<10;i++) {
	ArrLargeCategory.push(GetTable.children[i].children[1].children[0].value)
}
console.log("获取到的数据为：（这里先存10条数据）")
console.log(ArrLargeCategory)

// 开始对照数据
for (var i = 0; i < ArrLargeCategory.length; i++) {
	console.log('第'+i+'行数据是：'+ArrLargeCategory[i])
	var OType = GetOperationType(ArrLargeCategory[i])
	if(OType=='开关'){//当类型为开关，才进行处理
		var OKeyWord = GetKeyWord1(ArrLargeCategory[i])
		if(CheckSentence(OType,OKeyWord,ArrLargeCategory[i])){
			console.log("第"+i+"行数据正确")
		}else{console.log("第"+i+"行数据错误")}
	}else{console.log('此为其他类型，其他类型语句暂不做处理！')}

	
}






// 将任务步骤与字典对比检查判断是否有误string CheckOperation(data)
// 语句测试
if(true){
	// console.log('语句测试')
	// var a = '开关啊啊啊啊'
	// var type = GetOperationType(a)
	// console.log(type)
	// var s = '检查#3主变压器变高2203开关位置指示正确；'
	// var ss = GetMidName(s)
	// console.log(ss)
	// var sss = CheckName(ss)
	// console.log(sss)
	// 
	// 
	// 
	// console.log('111')
	// var test  = '检查#3主变压器变高2203开关位置指示正确'
	// console.log(test)
	// var GOT =GetOperationType(test)//获取类型
	// console.log(GOT)
	// var GMN = GetMidName(test)//获取间隔语句
	// console.log(GMN)
	// if(CheckName(GMN)){
	// 	var kw1 = GetKeyWord1(test)
	// 	console.log("kw1:"+kw1)
	// 	console.log(CheckSentence(test,GOT,kw1,GMN))
	// }
	// console.log('111')
	// 
	// 
	// //、、、、、、、、、、、、、、、
	// var as = '检查#3主变压器变高2203开关电流指示正确'
	// var kw2 = GetKeyWord1(as)//检查
	// var type2 = GetOperationType(as)//开关
	// console.log("kw2："+kw2+",type2："+type2)
	// console.log("checkSentence:"+CheckSentence(type2,kw2,as))
	// // var str = /^(检查).+(开关(三相)位置指示正确)$/
	//  // '/断开.*' + pullBreaker_arr[i] + '.*(开关)' + '(控制|操作)' + '.*(空气开关|熔断器)/';
	// // var reg_pb1_flag = dcp[j].match(eval(reg_pb1));
	// // 检查××××开关（三相）位置指示正确
	// // 检查××××开关（三相）电流指示正确
	// // 检查××××开关（三相）在分闸位置
	// var str =[/检查.*开关位置指示正确/,/检查.*开关电流指示正确/,/检查.*开关在分闸位置/]
	// console.log("str")
	// console.log(str)
	// // console.log(str.test(as))
	// console.log(as.match(eval(str[1]))[0])
	// console.log(str[0].test(as))
	// console.log(str[1].test(as))
	// console.log(str[2].test(as))
	
}


// 函数编写
// 1.匹配类别string GetOperationType(data),返回类别OperationType
function GetOperationType(data){
	var OperationType =''
	if(data.indexOf('开关')>=0&&data.indexOf('空气开关')<0&&data.indexOf('开关小车')){
		OperationType='开关'
	}
	else {
		OperationType = '其他类别'
	}
	return OperationType
}
// 2.获取间隔名称 string GetMidName(data)，返回间隔名称
// 截取#到开关前的字符串
function GetMidName(data){
	// 先获取对应的两个下标（开关）
	var str1 = data.indexOf('#')
	var str2 = data.indexOf('开关')
	var MidName = data.substring(str1,str2+2)
	return MidName
}

// 3.查询列表是否包含bool CheckName(midName)，返回对/错
function CheckName(MidName){
	// 已经知道是吉安站的票，假设已通过查询找到吉安站的数据是ZhanDianData[0]
	// 从ZhanDianData[0][0]开始查询是否含有此MidName
	var flag = false
	for (var i = 0; i <= ZhanDianData[0].length; i++) {
		console.log(ZhanDianData[0][1][i])
		if(MidName==ZhanDianData[0][1][i]){
			flag = true
			break
		}else{continue}
	}
	return flag
}

// 4.获取关键字1 string GetKeyWord1(type,data).返回关键字
function GetKeyWord1(data){
	// 截取字符串的前两位字符串
	var KeyWord1 = data.substring(0,2)
	return KeyWord1
}
// 5.匹配句型 bool CheckSentence(type，kw1，midName)
function CheckSentence(type,kw1,data){
	switch(type){
		case '开关':
		console.log('类型是开关')
			return CheckSentence_KaiGuan(data)
		case '其他':
			break
	}
}
function CheckSentence_KaiGuan(data){
	
	// 判断关键字
	switch(kw1){
		case '检查':
				// var SentancePatten = [/^(检查).+(开关(三相)位置指示正确)$/,
			// /^(检查).+(开关(三相)电流指示正确)$/,/^(检查).+(开关(三相)在分闸位置)$/]
			var SentancePatten =[/检查.*开关位置指示正确/,/检查.*开关电流指示正确/,/检查.*开关在分闸位置/]
			var result = false
			for(const id in SentancePatten){
				// console.log("SentancePatten"+[id]+":"+SentancePatten[id])
				// result = SentancePatten[id].test(data)
				// console.log("result:"+result)
				if(result){
					break
				}
			}
			return result
		default:
			console.log('其他暂未作处理')
	}
}

