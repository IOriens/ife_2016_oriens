var $$=function(e){return document.getElementById(e)},data=[],searchData=[],indexOfNode=function(e){for(var n=e.parentNode.childNodes,a=0;a<n.length;a++)if(n[a]==e)return a;return-1},render=function(e){$$("info").innerHTML=null;for(var n in e)if(e.hasOwnProperty(n)){var a=document.createElement("div");a.innerHTML=e[n],a.className="outer",a.addEventListener("click",function(){var n=indexOfNode(this);e.splice(n,1),render(e)}),$$("info").appendChild(a)}},getInputValue=function(){var e=$$("input").value,n=e.match(/[0-9a-zA-Z\u4e00-\u9fa5]{1,}/g);return null===n?[]:n},find=function(e){searchData=[];for(var n in data){var a=data[n];if(-1!=a.indexOf(e)){var t=new RegExp(e,"g");searchData.push(a.replace(t,'<span class="inner">'+e+"<span>"))}else searchData.push(a)}render(searchData)};$$("left-enter").addEventListener("click",function(){data=getInputValue().concat(data),render(data)}),$$("right-enter").addEventListener("click",function(){data=data.concat(getInputValue()),render(data)}),$$("left-out").addEventListener("click",function(){data.shift(),render(data)}),$$("right-out").addEventListener("click",function(){data.pop(),render(data)}),$$("find").addEventListener("click",function(){find($$("search-input").value)});