function Getpage() {
    var request = new XMLHttpRequest()
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
request.send();
request.onload = function() {
// Begin accessing JSON data here
var data = JSON.parse(this.response)
var arr=data;
const userdata=arr.map((tabel)=>{
    var r=[tabel.id,tabel.name,tabel.email];
return r;
})
var MasterData=userdata;
var buttons=[],btext=[];
for (let i = 0; i < MasterData.length/20; i++) {
    buttons[i]=document.createElement('button');
    btext[i]=document.createTextNode('Page '+i);
    buttons[i].appendChild(btext[i]);
    document.body.appendChild(buttons[i]);
    
}
buttons[i].setAttribute('onClick', 'GetData(1)');
}
}

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

for (let j = ((num-1)*10); j <= (num*10-1); j++) {
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


/*

function Getpage() {
    console.log("inpage")
    
    var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
request.send();
request.onload = function() {
// Begin accessing JSON data here
var data = JSON.parse(this.response)
var arr=data;
const userdata=arr.map((tabel)=>{
    var r=[tabel.id,tabel.name,tabel.email];
return r;
})
var MasterData=userdata;
var buttons=[],btext=[];
for (let i = 0; i < MasterData.length/20; i++) {
    buttons[i]=document.createElement('button');
    btext[i]=document.createTextNode('Page '+i);
    buttons[i].appendChild(btext[i]);
    document.body.appendChild(buttons[i]);
}
buttons[0].setAttribute('onClick', 'GetData(1)')
console.log("jeevan")
}
}
*/