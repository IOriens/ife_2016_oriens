// 任务目的
// 在上一任务基础上继续JavaScript的体验
// 接触更加复杂的表单对象
// 实现页面上的一个完整交互功能
// 用DOM实现一个柱状图图表

// 任务描述
// 参考以下示例代码，原始数据包含几个城市的空气质量指数数据
// 用户可以选择查看不同的时间粒度，以选择要查看的空气质量指数是以天为粒度还是以周或月为粒度
// 天：显示每天的空气质量指数
// 周：以自然周（周一到周日）为粒度，统计一周7天的平均数为这一周的空气质量数值，如果数据中缺少一个自然周的几天，则按剩余天进行计算
// 月：以自然月为粒度，统一一个月所有天的平均数为这一个月的空气质量数值
// 用户可以通过select切换城市
// 通过在'aqi-chart-wrap'里添加DOM，来模拟一个柱状图图表，横轴是时间，纵轴是空气质量指数，参考图（点击打开）。天、周、月的数据只根据用户的选择显示一种。
// 天：每天的数据是一个很细的矩形
// 周：每周的数据是一个矩形
// 月：每周的数据是一个很粗的矩形
// 鼠标移动到柱状图的某个柱子时，用title属性提示这个柱子的具体日期和数据


'use strict'

/* 数据格式演示
var aqiSourceData = {
  '北京': {
    '2016-01-01': 10,
    '2016-01-02': 10,
    '2016-01-03': 10,
    '2016-01-04': 10
  }
};
*/
//选择器
var $$ = function name(selector, context) {
  context = context || document
  var elements = context.querySelectorAll(selector)
  return Array.prototype.slice.call(elements)
}

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear()
  var m = dat.getMonth() + 1
  m = m < 10 ? '0' + m : m
  var d = dat.getDate()
  d = d < 10 ? '0' + d : d
  return y + '-' + m + '-' + d
}
function randomBuildData(seed) {
  var returnData = {}
  var dat = new Date('2016-01-01')
  var datStr = ''
  for (var i = 1; i < 150; i++) {
    datStr = getDateStr(dat)
    returnData[datStr] = Math.ceil(Math.random() * seed)
    dat.setDate(dat.getDate() + 1)
  }
  return returnData
}

var aqiSourceData = {
  '北京': randomBuildData(500),
  '上海': randomBuildData(300),
  '广州': randomBuildData(200),
  '深圳': randomBuildData(100),
  '成都': randomBuildData(300),
  '西安': randomBuildData(500),
  '福州': randomBuildData(100),
  '厦门': randomBuildData(100),
  '沈阳': randomBuildData(500)
}

var cityMap = {}

// 用于渲染图表的数据
var chartData = { 'data': {} }

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: 0,
  nowGraTime: 'day'
}

/**
 * 渲染图表
 */
function renderChart() {
  initAqiChartData()

  var len = chartData['length']
  var max = 600
  var canvasWidth = 500
  var canvasHeight = 500
  var colWidth = canvasWidth / len
  var it = 0
  $$('#aqi-chart-wrap')[0].innerHTML = null
  for (var i in chartData['data']) {
    if (chartData['data'].hasOwnProperty(i)) {
      var colHeight = chartData['data'][i] / max * canvasHeight
      var col = document.createElement('div')
      col.style.height = colHeight + 'px'
      col.style.width = colWidth + 'px'
      col.style.left = (colWidth * it++) + 'px'
      col.style.backgroundColor = getColorByAqi(chartData['data'][i])
      $$('#aqi-chart-wrap')[0].appendChild(col)
    }
  }
}

function getColorByAqi(aqi) {
  if (aqi > 300) {
    return '#ac0401'
  } else if (aqi > 200) {
    return '#ff4404'
  } else if (aqi > 150) {
    return '#f09837'
  } else if (aqi > 100) {
    return '#75bf42'
  } else if (aqi > 50) {
    return '#76c0ef'
  } else {
    return '#0289c3'
  }
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化   
  var graTime = document.getElementsByName('gra-time')
  var nowGraTime

  for (var item in graTime) {
    if (graTime.hasOwnProperty(item)) {
      if (graTime[item].checked === true) {
        nowGraTime = graTime[item].value
      }
    }
  }

  // 设置对应数据
  pageState.nowGraTime = nowGraTime

  // 调用图表渲染函数
  renderChart()
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
  var citySel = $$('#city-select')[0]
  var currIndex = citySel.selectedIndex

  var opts = citySel.getElementsByTagName('option')
  // 设置对应数据
  pageState.nowSelectCity = currIndex


  // 调用图表渲染函数
  renderChart()
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  var graTime = document.getElementsByName('gra-time')
  for (var item in graTime) {
    if (graTime.hasOwnProperty(item)) {
      graTime[item].onclick = graTimeChange
    }
  }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var citySel = $$('#city-select')[0]
  var index = 0
  for (var i in aqiSourceData) {
    if (aqiSourceData.hasOwnProperty(i)) {
      var opt = document.createElement('option')
      opt.innerHTML = i
      cityMap[index++] = i
      citySel.appendChild(opt)
    }
  }

  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  citySel.onchange = citySelectChange

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  var city = cityMap[pageState.nowSelectCity]
  var nowGraTime = pageState.nowGraTime


  var cityData = aqiSourceData[city]
  // 设置对应数据
  var col = 0
  chartData['data'] = {}
  chartData['length'] = col

  if (nowGraTime === 'day') {
    for (var day in cityData) {
      if (cityData.hasOwnProperty(day)) {
        chartData['data'][col++] = cityData[day]
        chartData['length'] = col
      }
    }
  } else if (nowGraTime === 'month') {
    var temp = {}
    for (var day in cityData) {
      if (cityData.hasOwnProperty(day)) {
        var yearNum = parseInt(day.split('-')[0])
        var monthNum = parseInt(day.split('-')[1])
        var dayNum = parseInt(day.split('-')[2])
        if (dayNum === 1) {
          if (temp[yearNum] === undefined) {
            temp[yearNum] = {}
          }
          temp[yearNum][monthNum] = {}
          temp[yearNum][monthNum]['total'] = 0 + cityData[day]
          temp[yearNum][monthNum]['len'] = 1
        } else {
          temp[yearNum][monthNum]['total'] += cityData[day]
          temp[yearNum][monthNum]['len']++
        }
      }
    }

    for (var year in temp) {
      for (var month in temp[year]) {
        chartData['data'][col++] = temp[year][month]['total'] / temp[year][month]['len']
        chartData['length'] = col
      }
    }
  } else {
    var temp = {}, total = 0, len = 0, col = 0, flag = true
    for (var day in cityData) {
      if (cityData.hasOwnProperty(day)) {
        var y = parseInt(day.split('-')[0])
        var m = parseInt(day.split('-')[1])
        var d = parseInt(day.split('-')[2])

        var weekDay
        if (flag) {
          weekDay = calWeekDay(y, m, d)
          flag = false
        } else {
          weekDay = (weekDay + 1) % 7
        }


        len++
        total += cityData[day]

        if (weekDay === 0) {
          chartData['data'][col++] = total / len
          chartData['length'] = col
          total = 0
          len = 0
        }
      }
    }
  }
}

function calWeekDay(y, m, d) {
  var t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]
  y -= m < 3
  return (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector()
  initAqiChartData()
  renderChart()
}


init()