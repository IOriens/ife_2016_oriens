// 参考以下示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
// 用户输入的城市名必须为中英文字符，空气质量指数必须为整数
// 用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
// 用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
// 用户可以点击表格列中的“删除”按钮，删掉那一行的数据


var $ = function (id) {
  return document.getElementById(id)
}

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {
  '北京': 90,
  '上海': 40
}

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var city = $('aqi-city-input').value
  var airCondition = parseInt($('aqi-value-input').value)
  var flag = 0  
  if (city.match(/^[a-zA-Z\u4e00-\u9fa5]{1,}/)) {    
    flag ++
  }else{
    alert('请输入合理的城市名称')
  }
  if(airCondition > 0 && airCondition < 5000) {
    flag ++
  }else{
    alert('输入的aqi不合理')
  }
  if(flag === 2){
    if(aqiData[city] === airCondition) {
      alert('你已经输入过这个咯')
    }
    aqiData[city] = airCondition  
  }
  
}

/**
 * 渲染aqi-table表格  
 */
function renderAqiList() {
  $('aqi-table-head').innerHTML = ''
  $('aqi-table-body').innerHTML = ''
  var th = document.createElement('tr')
  th.innerHTML = '<th>城市</th><th>空气质量</th><th>操作</th>'
  $('aqi-table-head').appendChild(th)
  for (var i in aqiData) {
    if (aqiData.hasOwnProperty(i)) {
      var tr = document.createElement('tr')
      var text = '<td>' + i + '</td><td>' + aqiData[i] + '</td><td><button>删除</button></td>'
      tr.innerHTML = text
      $('aqi-table-body').appendChild(tr)
    }
  }
  var btn = $('aqi-table-body').getElementsByTagName('button')
  for (var it = 0, len = btn.length; it < len; it++) {
    btn[it].addEventListener('click', delBtnHandle)
    btn[it].className += 'btn btn-danger'
  }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData()
  renderAqiList()
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  var toBeDelete = this.parentNode.parentNode.firstChild.innerHTML
  delete aqiData[toBeDelete]
  renderAqiList()
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  $('add-btn').addEventListener('click', addBtnHandle)

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  renderAqiList()
}

init()