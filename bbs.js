var btn = document.getElementsByClassName('btn')[0],
	visitor = document.getElementsByClassName('from')[0],
	word = document.getElementsByClassName('word')[0];
var vname = document.getElementsByClassName('vName'),
	vwords = document.getElementsByClassName('vWords'),
    words = document.getElementsByClassName('v_words');
var nIndex = 0,
	wIndex = 0;



function testAjax()
{ 
	// function getTime(){
	// var week = new Date().toString().split(" ")[0];
	// var month = new Date().toString().split(" ")[1];
	// var date = new Date().toString().split(" ")[2];
	// var year = new Date().toString().split(" ")[3];
	// var time = new Date().toString().split(" ")[4];
	// var timeStamp = year + month + date + time + week;
	// return timeStamp;
 //   }
	// getTime();
	var nick = word.value.toString(),
        saying = word.value.toString();
    var tmp = nick+":"+saying;
    var date = new Date();
	var text = {"name":visitor.value.toString(),
	            "words":word.value.toString(),
	            "time":date
}
    var xmlhttp;
  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log('服务器响应成功');
      var text1 = JSON.stringify(xmlhttp.responseText);
      // vname[0].innerHTML=text1.split('"')[4].split("\\")[0];
      // vwords[0].innerHTML=text1.split('"')[8].split("\\")[0];
    }
  }
  xmlhttp.open("POST", "http://www.wangtz.cn:8080/ajaxjs.js", true);
  xmlhttp.setRequestHeader("Content-type","application/json");//需要设置成application/json
  xmlhttp.send(JSON.stringify(text)); //body-parser解析的是字符串，所以需要把json对象转换成字符串
  console.log(text);
  console.log(JSON.stringify(text));
  console.log(typeof JSON.stringify(text));
}




btn.onclick = function() {
	testAjax();
	alert("留言提交成功\n请向下滚动查看留言列表");
}



function getTime(){
	var week = new Date().toString().split(" ")[0];
	var month = new Date().toString().split(" ")[1];
	var date = new Date().toString().split(" ")[2];
	var year = new Date().toString().split(" ")[3];
	var time = new Date().toString().split(" ")[4];
	var timeStamp = year + month + date + time + week;
}



































// function writeName(){
// 	if(vname[nIndex].innerHTML == ""){
// 		vname[nIndex].innerHTML = visitor.value;
// 	}else if(!vname[nIndex].innerHTML == ""){
// 		nIndex+=1;
// 		vname[nIndex].innerHTML = visitor.value;
// 	}
// }


// function writeWords(){
// 	if(vwords[wIndex].innerHTML == ""){
// 		vwords[wIndex].innerHTML = word.value;
// 	}else if(!vwords[wIndex].innerHTML == ""){
// 		wIndex+=1;
// 		vwords[wIndex].innerHTML = word.value;
// 	}
// }

// btn.onclick = function() {
// 	writeWords();
// 	writeName();
// 	alert("留言提交成功\n请向下滚动查看留言列表");
// 	visitor.value = '';
// 	word.value = '';
// }




