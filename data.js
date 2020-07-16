function Getpage() {
var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json'  , true)
request.send();
request.onload = function() {
    var data = JSON.parse(this.response)
    var arr=data;
    passdata(arr);
    
}
}

function passdata(data) {
    const userdata=data.map((tabel)=>{
        var r=[tabel.id,tabel.name,tabel.email];
         return r;
         });
    var  MasterData=userdata;
    var buttons=[],btext=[];
    for (let i = 0; i < MasterData.length/20; i++) {
        buttons[i]=document.createElement('button');
        btext[i]=document.createTextNode('Page '+i);
        buttons[i].appendChild(btext[i]);
        document.body.appendChild(buttons[i]);
        
    }
    buttons[0].addEventListener(onclick,GetData(1));
    buttons[1].addEventListener(onclick,GetData(2));
    buttons[2].addEventListener(onclick,GetData(3));
    buttons[3].addEventListener(onclick,GetData(4));
    buttons[4].addEventListener(onclick,GetData(5));
    function GetData(num)
{
console.log(num);
var tabel=document.createElement("tabel");

var tr=document.createElement('tr');
var h1=document.createElement('td');
var h2=document.createElement('td');
var h3=document.createElement('td');
h1.innerText= "ID";
h2.innerText = "Name";
h3.innerText="Email ID:"
tr.appendChild(h1);
tr.appendChild(h2);
tr.appendChild(h3);
tabel.appendChild(tr);
var tr=[];
var td=[];

for (let j = ((num-1)*20); j <= (num*20-1); j++) {
    tr[j]=document.createElement('tr')
for (let i = 0; i < MasterData[i].length; i++) {
    td[i]=document.createElement('td');
    td[i].innerText=MasterData[j][i];
    tr[j].appendChild(td[i]);   
}
tabel.appendChild(tr[j]);
}
tabel.setAttribute('style','font-family: cursive; width:50%;  margin-left: 10%; font-size:30px;background:pink;');
document.body.appendChild(tabel);
}
}