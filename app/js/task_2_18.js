var $$ = function (id) {
    return document.getElementById(id)
}

var data = []

var indexOfNode = function (node) {
    var children = node.parentNode.childNodes, i = 0
    for(;i < children.length; i ++) {
        if(children[i] == node) {
            return i
        }
    }    
    return -1
}

var render = function() {
    $$('info').innerHTML = null
    for(var it in data) {
        if(data.hasOwnProperty(it)) {
            var span = document.createElement('span')
            span.innerHTML = data[it]
            span.addEventListener('click', function () {
                var i = indexOfNode(this)
                data.splice(i,1)
                render()
            })
            $$('info').appendChild(span)
        }
    }
} 
 
$$('left-enter').addEventListener('click',function () {    
    data.unshift($$('input').value)
    render()
})

$$('right-enter').addEventListener('click',function () {
    data.push($$('input').value)
    render()
})

$$('left-out').addEventListener('click',function () {
    data.shift()
    render()
})

$$('right-out').addEventListener('click',function () {
    data.pop()
    render()
})