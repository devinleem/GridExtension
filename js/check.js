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
	console.log(ZhanDianData)
}



alert("想要输出的文字")


// 获取该工作票的地点名称
var GetPlace = document.getElementById("functionLocationName");//吉安站
console.log(GetPlace.value)

//获取操作任务中的内容
//1.获取table中的行数GetRows
var GetRows= document.getElementById("table").children[1].rows.length;
console.log(GetRows)//49
// 获取table元素
var GetTable = document.getElementById("table").children[1]
// 获取 table中的每行数据，存入数组中
var ArrLargeCategory = []
for(var i=0;i<GetRows;i++) {
	ArrLargeCategory.push(GetTable.children[i].children[1].children[0].value)
}



// 将任务步骤与字典对比检查判断是否有误string CheckOperation(data)

// 语句测试
if(true){
	console.log('语句测试')
	var a = '开关啊啊啊啊'
	var type = GetOperationType(a)
	console.log(type)
	var s = '检查#3主变压器变高2203开关位置指示正确；'
	var ss = GetMidName(s)
	console.log(ss)
	var sss = CheckName(ss)
	console.log(sss)
	
	
	
	console.log('111')
	var test  = '检查#3主变压器变高2203开关位置指示正确'
	console.log(test)
	var GOT =GetOperationType(test)//获取类型
	console.log(GOT)
	var GMN = GetMidName(test)//获取间隔语句
	console.log(GMN)
	if(CheckName(GMN)){
		var kw1 = GetKeyWord1(test)
		console.log("kw1:"+kw1)
		console.log(CheckSentence(test,GOT,kw1,GMN))
	}
	console.log('111')
	
	
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
function CheckSentence(data,type,kw1,midName){
	var CheckFlag = false
	if(type=='开关'){
		// 1.检查关键字为‘断开’的语句
		if(kw1=='断开'){
			// 组合语句
			var CombinedStatement = '断开' + midName +'开关'
			// 开始跟数组中的语句匹配
			for (var i = 0; i <= ZhanDianData[0][1].length; i++) {
				if(CombinedStatement==ZhanDianData[0][1][i]){
					CheckFlag = true
					break
				}else{
					continue
				}
			}
			// return CheckFlag
		}
		// 2.检查关键字为‘检查’的语句
		else if(kw1=='检查'){
			console.log("data："+data)
			var CombinedStatement1 = '检查' + midName +'位置指示正确'
			var CombinedStatement2 = '检查' + midName +'电流指示正确'
			var CombinedStatement3 = '检查' + midName +'在分闸位置'
			console.log('CombinedStatement1:'+CombinedStatement1)
			console.log('CombinedStatement2:'+CombinedStatement2)
			console.log('CombinedStatement3:'+CombinedStatement3)
			// for(var i = 0; i <= ZhanDianData[0][1].length; i++) {
			// 	console.log("吉安站语句："+ZhanDianData[0][1][i])
			// 	// if(ZhanDianData[0][1][i]==CombinedStatement1||ZhanDianData[0][1][i]==CombinedStatement2||ZhanDianData[0][1][i]==CombinedStatement3){
			// 		if(data==CombinedStatement1||data==CombinedStatement2||data==CombinedStatement3){
			// 		CheckFlag = true
			// 		break
			// 	}else{
			// 		continue
			// 	}
			// }
			if(data==CombinedStatement1||data==CombinedStatement2||data==CombinedStatement3){CheckFlag=true}
			
			
			// return CheckFlag
		}
		// 3.检查关键字为‘合上’的语句
		else if(kw1=='合上'){
			var CombinedStatement = '合上' + midName +'开关'
			// 开始跟数组中的语句匹配
			for (var i = 0; i <= ZhanDianData[0][1].length; i++) {
				if(CombinedStatement==ZhanDianData[0][1][i]){
					CheckFlag = true
					break
				}else{
					continue
				}
			}
			
		}
		return CheckFlag
	}
}
