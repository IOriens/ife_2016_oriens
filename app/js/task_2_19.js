var $$ = function (id) {
    return document.getElementById(id)
}

var data = [100, 40, 30, 10]

var indexOfNode = function (node) {
    var children = node.parentNode.childNodes, i = 0
    for (; i < children.length; i++) {
        if (children[i] == node) {
            return i
        }
    }
    return -1
}

var sleep = function (delta) {
    for (var t = Date.now(); Date.now() - t <= delta;) {

    }
}

var render = function () {
    $$('info').innerHTML = ''
    // console.log(data)
    for (var it in data) {

        if (data.hasOwnProperty(it)) {
            // console.log(it)
            var span = document.createElement('span')
            var span2 = document.createElement('span')
            span2.className = 'inner-span'
            span2.innerHTML = data[it]
            // console.log(data[it])
            span.appendChild(span2)
            span.className = 'willnotrender'
            span.style.cssText += ';height:' + (data[it] * 1.5) + 'px;left:' + (it * 25) + 'px;'
            // span.style.height = (data[it] * 1.5) + 'px'
            // span.style.left = (it * 25) + 'px'
            var temp = span.offsetLeft            
            span.addEventListener('click', function () {
                var i = indexOfNode(this)
                data.splice(i, 1)
                render()
            })

            $$('info').appendChild(span)                   
        }
    }         

}

// var render = function () {
//     var htmlTemp = ''
//     for (var it in data) {

//         if (data.hasOwnProperty(it)) {
//             // console.log(it)


//             var span2 = '<span class="inner-span">'
//             span2 += data[it]
//             span2 += '</span>'
//             span += span2


//             var cssText = '"height:' + (data[it] * 1.5) + 'px;left:' + (it * 25) + 'px;"'
//             var span = '<span style=' + cssText + '>'
//             span += span2 + '</span>'

//             htmlTemp += span
//         }
//     }
//     $$('info').innerHTML = htmlTemp
//     var reflowNode = $$('info').childNodes[2]
//     fuckingReflow(reflowNode)
// }

function fuckingReflow(node) {
    // node.style.display="none"
    // node.offsetHeight
    // node.clientWidth
    // node.clientHeight
    // node.focus()
    // node.getClientRects()
    // node.scrollTop
    // node.style.display="block"
}

var bubbleSort = function () {
    var i = 0, j = 1, len = data.length

    var it = setInterval(run, 25)    
    function run() { 
        // console.log('running')               
        if (i < len) {
            if (j < len) {
                if (data[j] < data[i]) {
                    temp = data[j]
                    data[j] = data[i]
                    data[i] = temp
                    render()
                }
                j ++
            } else {
                i++
                j = i + 1
            }
        } else {
            clearInterval(it)
            return      
        }
    }    
}


var getInputValue = function () {
    var input = parseInt($$('input').value)
    if (input <= 100 && input >= 10) {
        return input
    }
    return 0
}
$$('left-enter').addEventListener('click', function () {
    var i = getInputValue()
    if (i) {
        data.unshift(i)
    }
    render()
})

$$('right-enter').addEventListener('click', function () {
    var i = getInputValue()
    if (i) {
        data.push(getInputValue())
    }
    render()
})

$$('left-out').addEventListener('click', function () {
    data.shift()
    render()
})

$$('right-out').addEventListener('click', function () {
    data.pop()
    render()
})

$$('sort').addEventListener('click', bubbleSort)

render()