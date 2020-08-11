
const input = document.getElementById('nairaInput');
document.getElementById('output').style.visibility = 'hidden'

input.addEventListener('input',function(i){
    let naira = i.target.value;
    document.getElementById('dollarOutput').innerHTML = naira/385.62;
    document.getElementById('euroOutput').innerHTML = naira/453.60;
    document.getElementById('poundOutput').innerHTML = naira/501.90;
    document.getElementById('output').style.visibility = 'visible'


});