/*
const txt = '{"min": "10.4.1","max": "10.5.8","igpu_max": "none","cpuID": "0x0F41"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.cpuID;*/

const fs = require('fs');
const path = './config.json'
const fileContents = fs.readFileSync(path, 'utf8');


let data = JSON.parse(fileContents);
console.log(data);
console.log(data.Intel.length);
console.log(data.Intel[0].name)
console.log(data.Intel[7].name)


var gen0 = document.getElementById(`gen0`).innerHTML = data.Intel[0].name
var gen1 = document.getElementById(`gen1`).innerHTML = data.Intel[1].name
var gen2 = document.getElementById(`gen2`).innerHTML = data.Intel[2].name
var gen3 = document.getElementById(`gen3`).innerHTML = data.Intel[3].name
var gen4 = document.getElementById(`gen4`).innerHTML = data.Intel[4].name
var gen5 = document.getElementById(`gen5`).innerHTML = data.Intel[5].name
var gen6 = document.getElementById(`gen6`).innerHTML = data.Intel[6].name
var gen7 = document.getElementById(`gen7`).innerHTML = data.Intel[7].name
var gen8 = document.getElementById(`gen8`).innerHTML = data.Intel[8].name
var gen9 = document.getElementById(`gen9`).innerHTML = data.Intel[9].name
var gen10 = document.getElementById(`gen10`).innerHTML = data.Intel[10].name + " (ix-xxx)"
var gen11 = document.getElementById(`gen11`).innerHTML = data.Intel[11].name + " (ix-2xxx)"
var gen12 = document.getElementById(`gen12`).innerHTML = data.Intel[12].name + " (ix-3xxx)"
var gen13 = document.getElementById(`gen13`).innerHTML = data.Intel[13].name + " (ix-3xxx)"
var gen14 = document.getElementById(`gen14`).innerHTML = data.Intel[14].name + " (ix-4xxx)"
var gen15 = document.getElementById(`gen15`).innerHTML = data.Intel[15].name + " (ix-5xxx)"
var gen16 = document.getElementById(`gen16`).innerHTML = data.Intel[16].name + " (ix-6xxx)"
var gen17 = document.getElementById(`gen17`).innerHTML = data.Intel[17].name + " (ix-7xxx)"
var gen18 = document.getElementById(`gen18`).innerHTML = data.Intel[18].name + " (ix-9xxx)"
var gen19 = document.getElementById(`gen19`).innerHTML = data.Intel[19].name + " (ix-8xxxY)"
var gen20 = document.getElementById(`gen20`).innerHTML = data.Intel[20].name + " (ix-8xxxU)"
var gen21 = document.getElementById(`gen21`).innerHTML = data.Intel[21].name + " (ix-10xxx)"
var gen22 = document.getElementById(`gen22`).innerHTML = data.Intel[22].name + " (ix-10xxx)"
var gen23 = document.getElementById(`gen23`).innerHTML = data.Intel[23].name + " (ix-10xxGx)"
var gen24 = document.getElementById(`gen24`).innerHTML = data.Intel[24].name + " (ix-11xxx)"
var gen25 = document.getElementById(`gen25`).innerHTML = data.Intel[25].name + " (ix-11xxxH)"

function update_gen(sel) {
    let value_gen = document.getElementById("value_gen")
    value_gen.innerHTML = "Generation: " + sel.options[sel.selectedIndex].value;
}
function update_cpu(sel) {
    let value_cpu = document.getElementById("value_cpu")
    value_cpu.innerHTML = "CPU: " + sel.options[sel.selectedIndex].text;
}
// var select = document.getElementById('select');
// var value = select.options[select.selectedIndex].value;
// console.log(value); // en
// }
//for (let i = 0; i < Object.keys(data.Intel).length; i++) {
    
//     //console.log(Object.keys(data.Intel[i]).length);
//     document.getElementById("select").innerHTML = `<option id='demo${i}'>${data.Intel[i].name}</option>`
//     // document.write(`<option id='demo${i}'>${data.Intel[i].name}</option>`)
//     // document.write(`<option id='demo${i}'>${i}</option>`)
//     // let app = data.Intel[i];
//     // console.log(app)
//     // document.getElementById("demo").innerHTML = i
//     console.log(i);
// 
//}
function main(){
    console.log("main")
    update()
}
main()

function on_button_update(){
    alert("Noch nicht fertig...")
    var active = document.getElementById("sec-item")
    active.classList.add("active")
    var rem_active = document.getElementById("first-item")
    rem_active.classList.remove("active")
}

function check_button(){
    
}