function addAqiData(){var t=$("aqi-city-input").value,a=parseInt($("aqi-value-input").value);(0>a||a>1e3)&&alert("请输入合理的空气质量数"),aqiData[t]=a}function renderAqiList(){$("aqi-table-head").innerHTML="",$("aqi-table-body").innerHTML="";var t=document.createElement("tr");t.innerHTML="<th>城市</th><th>空气质量</th><th>操作</th>",$("aqi-table-head").appendChild(t);for(var a in aqiData)if(aqiData.hasOwnProperty(a)){var e=document.createElement("tr"),n="<td>"+a+"</td><td>"+aqiData[a]+"</td><td><button>删除</button></td>";e.innerHTML=n,$("aqi-table-body").appendChild(e)}for(var i=$("aqi-table-body").getElementsByTagName("button"),d=0,r=i.length;r>d;d++)i[d].addEventListener("click",delBtnHandle),i[d].className+="btn btn-danger"}function addBtnHandle(){addAqiData(),renderAqiList()}function delBtnHandle(){var t=this.parentNode.parentNode.firstChild.innerHTML;delete aqiData[t],renderAqiList()}function init(){$("add-btn").addEventListener("click",addBtnHandle),renderAqiList()}var $=function(t){return document.getElementById(t)},aqiData={"北京":90,"上海":40};init();