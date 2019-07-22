function file_ho(e, o, a) {
    e = window.event || e;
    var x = 0,
        y = 0;
    if (o.offsetParent) {
        do {
            x += o.offsetLeft;
            y += o.offsetTop;
        } while (o = o.offsetParent);
    }
    var x1 = e.clientX || window.event.clientX;
    var y1 = e.clientY || window.event.clientY;
    var le = 100 - (x1 - x);
    var to = 10 - (y1 - y);
    getObj('file_' + a).style.marginRight = le + 'px';
    getObj('file_' + a).style.marginTop = -to + 'px';
}

function file_ch(x) {
    var val = getObj('file_' + x).value;
    getObj('result_' + x).innerHTML = val;
}

function getObj(x) {
    return document.getElementById(x);
}