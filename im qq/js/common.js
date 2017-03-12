//  兼容性

/**得到元素内部的指定类名元素组
 * 兼容旧IE
 * @param element
 * @param className
 * @returns {*}
 */
function getElementsByClassName(element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    } else {
        var newArr = [];
        var eles = element.getElementsByTagName("*");
        for (var i = 0; i < eles.length; i++) {
            var arr = eles[i].className.split(" ");
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === className) {
                    newArr.push(eles[i]);
                    break;
                }
            }
        }
        return newArr;
    }
}


/**得到元素内部的文本内容
 *兼容旧版IE 和 旧版Firefox
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

/**得到下一个兄弟元素
 * 兼容旧版IE
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**得到元素的上一个兄弟元素
 * 兼容旧IE
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var previous = element.previousSibling;
        while (previous && previous.nodeType !== 1) {
            previous = previous.previousSibling;
        }
        return previous;
    }
}

/**得到第一个子元素
 * 兼容旧IE
 * @param element
 * @returns {*}
 */
function getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var first = element.firstChild;
        while (first && first.nodeType !== 1) {
            first = first.nextSibling;
        }
        return first;
    }
}

/**得到最后一个子元素
 * 兼容旧IE
 * @param element
 * @returns {*}
 */

function getLastElementChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    }
    else {
        var last = element.lastChild;
        while (last && last.nodeType !== 1) {
            last = element.previousSibling;
        }
        return last;
    }
}

//方法

/**从一个父元素的内部移动元素到另一个父元素里
 *
 * @param from
 * @param to
 * @param all
 */
function move(from, to, all) {
    for (var i = 0; i < from.children.length; i++) {
        if (all || from.children[i].selected) {
            to.appendChild(from.children[i]);
            i--;
        }
    }
}

/**淡入
 *
 * @param obj
 * @param second
 */
function fadeIn(obj, second) {
    clearInterval(obj.timer);
    var leader = 0;
    var ieLeader = 0;
    var step = 1 / (1000 * second / 15);
    var ieStep = 100 / (1000 * second / 15);
    obj.timer = setInterval(function () {
        if (leader < 1) {
            leader += step;
            ieLeader += ieStep;
            obj.style.opacity = leader;
            obj.style.filter = "alpha(opacity=" + ieLeader + ")";     //兼容Ie
        } else {
            obj.style.opacity = 1;
            obj.style.filter = "alpha(opacity=100)";   //兼容Ie
            clearInterval(obj.timer)
        }
    }, 15);
}


/**淡出
 *
 * @param obj
 * @param second
 */
function fadeOut(obj, second) {
    clearInterval(obj.timer);
    var leader = +obj.style.opacity;
    var ieLeader = parseInt(obj.style.filter);
    var step = -1 / (1000 * second / 15);
    var ieStep = -100 / (1000 * second / 15);
    obj.timer = setInterval(function () {
        if (leader > 0) {
            leader += step;
            ieLeader += ieStep;
            obj.style.opacity = leader;
            obj.style.filter = "alpha(opacity=" + ieLeader + ")";     //兼容Ie
        } else {
            obj.style.opacity = 0;
            obj.style.filter = "alpha(opacity=0)";    //兼容Ie
            clearInterval(obj.timer)
        }
    }, 15);
}

/**淡入完成后立即淡出
 *
 * @param obj
 * @param second
 */
function fadeInAndOut(obj, second) {
    fadeIn(obj, second);
    setTimeout(function () {
        fadeOut(obj, second);
    }, second * 1000);
}

/**缓动动画原理     可以添加scrollToX  与scrollToY
 *
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 1000;
                var target = json[k] * 1000;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                obj.style[k] = leader / 1000;
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else if (k === "scrollToX") {        // 添加X值；obj 值随便加
                var leader = scroll().left;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                window.scrollTo(leader, scroll().top);
            } else if (k === "scrollToY") {         // 添加Y值： obj 值随便加
                var leader = scroll().top;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                window.scrollTo(scroll().left, leader);
            }
            else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = leader + step + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 10)
}

/**得到元素计算的style
 * 兼容性
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

/**得到页面此时的scrollTop 与scrollLeft 值
 * 兼容性
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    }
}

/**得到当前页面显示的宽度
 *
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        width: innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}

/**事件对象兼容包
 *
 * @type {{getEvent: Function, getPageX: Function, getPageY: Function, getTarget: Function, stopPropagation: Function}}
 */
var eventUtil = {
    getEvent: function (event) {
        return event || window.event;
    },
    getPageX: function (event) {
        return event.pageX || event.clientWidth + scroll().left;
    },
    getPageY: function (event) {
        return event.pageY || event.clientHeight + scroll().top;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}