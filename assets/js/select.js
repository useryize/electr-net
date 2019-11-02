
/**
 * 下拉列表
 * @param {e} this
 */
function dropDown(e) {
    e.parentNode.parentNode.getElementsByClassName('name')[0].innerText = e.innerText;
}

/**
 * 
 * @param {tab}} btn 
 * @param {显示的块} boxlist
 */
function boxNavTab(btn, boxlist) {
    // console.error(btn)
    // console.error(boxlist)
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].addEventListener('click', function () {
            // console.error(this);
            for (var j = 0; j < btn.length; j++) {
                btn[j] && btn[j].classList.remove("focu")
                boxlist[j] && (boxlist[j].style.display = "none");
                btn[this.index].classList.add("focu");
                boxlist[this.index] && (boxlist[this.index].style.display = "block");
            }
        })
    }
}

function boxNavTabLen(btn, boxlist) {
    var length = btn.length;
    // console.error(length)
    for (var i = 0; i < length; i++) {
        if (i !== length - 1) {
            btn[i].index = i;
            btn[i].addEventListener('click', function () {
                for (var j = 0; j < length; j++) {
                    btn[j] && btn[j].classList.remove("focu")
                    boxlist[j] && (boxlist[j].style.display = "none");
                    btn[this.index].classList.add("focu");
                    boxlist[this.index] && (boxlist[this.index].style.display = "block");
                }
            })
        }
    }
}
/**
 * 
 * @param {this} obj 
 * @param {加或减 +add  -reduce} type 
 */
function addNumber(obj, type) {
    let dom = obj.parentNode.children;
    let num = dom && dom[1] && dom[1].innerText;
    if (isNaN(num)) {
        console.log('非number');
        dom[1].innerText = num;
        return;
    }
    type === 'reduce' && (dom[1].innerText = +num - 1);
    type === 'add' && (dom[1].innerText = +num + 1);
}