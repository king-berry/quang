var table = 3;
var operator = 'addition';
var i = 1;
var msg = '';
if (operator === 'addition'){
    while (i < 11){
        msg += i + '+' + table + '=' + (i + table) + '<br/>';
    }
}else{
    while (i < 11){
        msg += i + '+' + table + '=' + (i + table) + '<br/>';
    }
}
var el = document.getElementById('blackboard');
el.innerHTML = msg;