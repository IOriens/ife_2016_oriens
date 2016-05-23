var $$ = function (id) {
    return document.getElementById(id)
}

var data = []
var searchData = []

var indexOfNode = function (node) {
    var children = node.parentNode.childNodes, i = 0
    for(;i < children.length; i ++) {
        if(children[i] == node) {
            return i
        }
    }    
    return -1
}

var render = function(data) {
    $$('info').innerHTML = null
    for(var it in data) {
        if(data.hasOwnProperty(it)) {
            var span = document.createElement('div')
            span.innerHTML = data[it]
            span.className = 'outer'
            span.addEventListener('click', function () {
                var i = indexOfNode(this)
                data.splice(i,1)
                render(data)
            })
            $$('info').appendChild(span)
        }
    }
} 
 
 
var getInputValue = function () {
    var inpu = $$('input').value
    var out = inpu.match(/[0-9a-zA-Z\u4e00-\u9fa5]{1,}/g)   
    if(out === null) return []    
    return out    
} 

var find = function (txt) {  
    searchData = []
    for (var i in data) {
        var htmlText = data[i]
        if(htmlText.indexOf(txt) != -1) {     
            var reg = new RegExp(txt, 'g')                  
            searchData.push(htmlText.replace(reg, '<span class="inner">'+ txt +'<span>'))
                 
        } else {
            searchData.push(htmlText)
        }
    }
    render(searchData)
}

$$('left-enter').addEventListener('click',function () {    
    data = getInputValue().concat(data)
    render(data)
})

$$('right-enter').addEventListener('click',function () {
    data = data.concat(getInputValue())
    render(data)
})

$$('left-out').addEventListener('click',function () {
    data.shift()
    render(data)
})

$$('right-out').addEventListener('click',function () {
    data.pop()
    render(data)
})

$$('find').addEventListener('click', function () {
    find($$('search-input').value)
})
