var $ = function (id) {
    return document.getElementById(id)
}
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
    /*
     coding here
     */
    var source = $('source')
    var sourceList = source.getElementsByTagName('li')
    var data = []
    for (var i = 0, len = sourceList.length; i < len; i++) {
        var quality, city
        city = sourceList[i].innerHTML.split('空气质量')[0]
        quality = parseInt(sourceList[i].getElementsByTagName('b')[0].innerHTML)
        data.push([city, quality])
    }

    /*
     data = [
     ["北京", 90],
     ["北京", 90]
     ……
     ]
     */

    return data
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
    var sortedData = []
    for(var i = 0,length = data.length; i < length; i ++) {        
        sortedData.push(data[i])        
    }
    for(var i = 0,length = sortedData.length; i < length; i ++) {
        var j = i - 1, key2 = sortedData[i][1],key1 = sortedData[i][0]
        while(j >= 0) {
            if(sortedData[j][1] > key2) {
                sortedData[j + 1] = [sortedData[j][0],sortedData[j][1]]
                j --
            } else {
                break
            }
        }
        sortedData[j + 1] = [key1,key2]
    }
    return sortedData
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    $('resort').innerHTML = ''
    for(var i = 0,length = data.length; i < length; i ++) {        
        var li = document.createElement('li')
        li.innerHTML = data[i][0] + ' : ' + data[i][1]
        $('resort').appendChild(li)                
    }
}

function btnHandle() {
    var aqiData = getData()
    aqiData = sortAqiData(aqiData)
    render(aqiData)
}

function init() {

    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    var sortBtn = document.getElementById('sort-btn')
    sortBtn.addEventListener('click', btnHandle)
}

init()