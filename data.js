function Getpage() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
    request.send();
    request.onload = function () {
        var data = JSON.parse(this.response)
        var arr = data;
        passdata(arr);

    }
}

function passdata(data) {
    const userdata = data.map((table) => {
        var r = [table.id, table.name, table.email];
        return r;
    });
    var MasterData = userdata;
    var buttons = [], btext = [];
    for (let i = 1; i < MasterData.length / 10+1; i++) {
        buttons[i] = document.createElement('button');
        btext[i] = document.createTextNode('Page ' + i);
        buttons[i].appendChild(btext[i]);
        document.body.appendChild(buttons[i]);
        buttons[i].addEventListener('click', () => {
            GetData(i);
        });
    }
    var table = document.createElement("table");
        var tr = document.createElement('tr');
        var h1 = document.createElement('td');
        var h2 = document.createElement('td');
        var h3 = document.createElement('td');
        h1.innerText = "ID";
        h2.innerText = "Name";
        h3.innerText = "Email ID:"
        tr.appendChild(h1);
        tr.appendChild(h2);
        tr.appendChild(h3);
        table.appendChild(tr);
        
        GetData(1);
        table.setAttribute('style', 'font-family: cursive; width:100%;  margin-left: 10%; font-size:30px;background:pink;');
        document.body.appendChild(table);
    function GetData(num) {
        console.log(num);
        var tr = [];
        var td = [];

        // table.removeChild(table.lastChild);
        var size = table.children.length;
        for (let i = 1; i< size; i++) {
        table.removeChild(table.lastChild);
        }
        for (let j = ((num - 1) * 10); j <= (num * 10 - 1); j++) {
            tr[j] = document.createElement('tr')
            for (let i = 0; i < MasterData[i].length; i++) {
                td[i] = document.createElement('td');
                td[i].innerText = MasterData[j][i];
                tr[j].appendChild(td[i]);
            }
            table.appendChild(tr[j]);
        }
    }
}