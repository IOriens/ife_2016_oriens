function fuckingReflow(e){}var $$=function(e){return document.getElementById(e)},data=[100,40,30,10],indexOfNode=function(e){for(var t=e.parentNode.childNodes,n=0;n<t.length;n++)if(t[n]==e)return n;return-1},sleep=function(e){for(var t=Date.now();Date.now()-t<=e;);},render=function(){$$("info").innerHTML="";for(var e in data)if(data.hasOwnProperty(e)){var t=document.createElement("span"),n=document.createElement("span");n.className="inner-span",n.innerHTML=data[e],t.appendChild(n),t.className="willnotrender",t.style.cssText+=";height:"+1.5*data[e]+"px;left:"+25*e+"px;";t.offsetLeft;t.addEventListener("click",function(){var e=indexOfNode(this);data.splice(e,1),render()}),$$("info").appendChild(t)}},bubbleSort=function(){function e(){return a>t?void(a>n?(data[n]<data[t]&&(temp=data[n],data[n]=data[t],data[t]=temp,render()),n++):(t++,n=t+1)):void clearInterval(r)}var t=0,n=1,a=data.length,r=setInterval(e,25)},getInputValue=function(){var e=parseInt($$("input").value);return 100>=e&&e>=10?e:0};$$("left-enter").addEventListener("click",function(){var e=getInputValue();e&&data.unshift(e),render()}),$$("right-enter").addEventListener("click",function(){var e=getInputValue();e&&data.push(getInputValue()),render()}),$$("left-out").addEventListener("click",function(){data.shift(),render()}),$$("right-out").addEventListener("click",function(){data.pop(),render()}),$$("sort").addEventListener("click",bubbleSort),render();