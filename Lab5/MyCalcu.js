var results = 0;
var curValue1 = document.getElementById("val1").value;
var curValue2 = document.getElementById("val2").value;
var res = document.getElementById("res");
function CalcuOper(state) {
    switch(state) {
        case 1://加法
            results = parseInt(curValue1) + parseInt(curValue2);
            alert(parseInt(results));
            break;
        case 2://减法
            results = curValue1 - curValue2;
            break;
        case 3://乘法
            results = curValue1 * curValue2;
            break;
        case 4://除法
            results = curValue1 / curValue2;
            break;
        default:
            alert("计算状态出错！");
            break;
    }
    document.getElementById("demo").innerHTML = results;
    // res.display.innerText = results;
}