/*
const txt = '{"min": "10.4.1","max": "10.5.8","igpu_max": "none","cpuID": "0x0F41"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.cpuID;*/
const fs = require('fs');
var fs_e = require("fs-extra");
const path = '.\\resources\\app\\config.json'
const path2 = require('path')
const fileContents = fs.readFileSync(path, 'utf8');
const electron = require('electron')
const app = electron.app;

// const createWindow = require('../../index')
let data = JSON.parse(fileContents);
console.log(data);
console.log(data.Intel.length);
console.log(data.Intel[0].name)
console.log(data.Intel[7].name)


function makedir(){
    let folder = 'EFI'
    if (fs.existsSync(folder)){
        console.log("EFI-Folder already exists!")
        fs.rm(folder, { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
        
            console.log(`${folder} is deleted!`);
        });
    }
   
    // fs.mkdir(path2.join(__dirname, folder), (err) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log('Directory created successfully!');
    // });
    // console.log("EFI Created")

}
console.log("makedir() EXECUTED!")
makedir()

var Name = "Not known";
let dir = ""
if (navigator.appVersion.indexOf("Win") != -1){
    Name ="Windows OS";
    dir = '.\\EFI';
}

if (navigator.appVersion.indexOf("Mac") != -1) {
    Name = "MacOS";
    dir = './EFI'
}
if (navigator.appVersion.indexOf("X11") != -1) {
    Name = "UNIX OS";
    dir = './EFI'
}
if (navigator.appVersion.indexOf("Linux") != -1) {
    Name = "Linux OS";
    dir = './EFI'
}
// delete directory recursively
let SMBIOS;
var btn_more = document.getElementById("btn-more")

let laptop = document.getElementById("select_model").value == "laptop"
let hed = document.getElementById("select_model").value == "hed"
// let model = document.getElementById("select_model")
// let model_value = model.options[model.selectedIndex].value

version = document.getElementById("select_version").value;

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
var gen17a = document.getElementById(`gen17a`).innerHTML = "Kaby Lake R" + " (ix-8xxxU)"
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

function update_ver(sel) {

    let value_cpu = document.getElementById("value_cpu")
    value_cpu.innerHTML = "macOS: " + sel.options[sel.selectedIndex].text;


}
function update_model(sel) {

    let value_model = document.getElementById("value_model")
    value_model.innerHTML = "Model: " + sel.options[sel.selectedIndex].text;


    // let value_model = document.getElementById("select_model").value
    
    console.log(document.getElementById("select_model").value)

    if (document.getElementById("select_model").value == "laptop"){
        alert("Laptops are currently in Beta. \n That means, that not all SSDTs are implemented. You have to add them manually later")
    }
    
    // let laptop = value_model == "laptop"
    // let desktop = value_model == "desktop"
    // let hed = value_model == "hed"

    
    // if (value_model == "hed") { 
    //     value_model.innerHTML = "Model: High End Desktop" 
    // }
    // else {
    //     value_model.innerHTML = "Model: " + sel.options[sel.selectedIndex].value
    // }


}
let strV;

let pentium4;	
let yonah;	
let conroe;	
let merom;	
let penryn;
let nehalem;
let lynnfield;
let clarksfield;
let westmere;
let clarkdale;
let arrandale;
let sandy_bridge;
let ivy_bridge;
let ivy_bridge_e5;
let haswell;
let broadwell;
let skylake;
let kaby_lake;
let kaby_lake_r;
let coffee_lake;
let amber_lake;
let whiskey_lake;
let comet_lake;
let comet_lake_ref;
let ice_lake;
let rocket_lake;
let tiger_lake;


function onChangeUpdate(sel){
    
    document.getElementById("value_model").style.display = ""

    pentium4 = document.getElementById('select').value == 'Pentium 4';	
    yonah = document.getElementById('select').value == 'Yonah';	
    conroe = document.getElementById('select').value == 'Conroe';	
    merom = document.getElementById('select').value == 'Merom';	
    penryn = document.getElementById('select').value == 'Penryn';
    nehalem = document.getElementById('select').value == 'Nehalem';
    lynnfield = document.getElementById('select').value == 'Lynnfield';
    clarksfield = document.getElementById('select').value == 'Clarksfield';
    westmere = document.getElementById('select').value == 'Westmere';
    clarkdale = document.getElementById('select').value == 'Clarkdale';
    arrandale = document.getElementById('select').value == 'Arrandale';
    sandy_bridge = document.getElementById('select').value == 'Sandy Bridge';
    ivy_bridge = document.getElementById('select').value == 'Ivy Bridge';
    ivy_bridge_e5 = document.getElementById('select').value == 'Ivy Bridge-E5';
    haswell = document.getElementById('select').value == 'Haswell';
    broadwell = document.getElementById('select').value == 'Broadwell';
    skylake = document.getElementById('select').value == 'Skylake';
    kaby_lake = document.getElementById('select').value == 'Kaby Lake';
    kaby_lake_r = document.getElementById('select').value == 'Kaby Lake R';
    coffee_lake = document.getElementById('select').value == 'Coffee Lake';
    amber_lake = document.getElementById('select').value == 'Amber Lake';
    whiskey_lake = document.getElementById('select').value == 'Whiskey Lake';
    comet_lake = document.getElementById('select').value == 'Comet Lake';
    comet_lake_ref = document.getElementById('select').value == 'Comet Lake Ref';
    ice_lake = document.getElementById('select').value == 'Ice Lake';
    rocket_lake = document.getElementById('select').value == 'Rocket Lake';
    tiger_lake = document.getElementById('select').value == 'Tiger Lake';

    function hide_versions(){
        document.getElementById('10_4').style = "display: none;"
        document.getElementById('10_5').style = "display: none;"
        document.getElementById('10_6').style = "display: none;"
        document.getElementById('10_7').style = "display: none;"
        document.getElementById('10_8').style = "display: none;"
        document.getElementById('10_9').style = "display: none;"
        document.getElementById('10_10').style = "display: none;"
        document.getElementById('10_11').style = "display: none;"
        document.getElementById('10_12').style = "display: none;"
        document.getElementById('10_13').style = "display: none;"
        document.getElementById('10_14').style = "display: none;"
        document.getElementById('10_15').style = "display: none;"
        document.getElementById('11').style = "display: none;"
        document.getElementById('12').style = "display: none;"
        document.getElementById('13').style = "display: none;"
    }
    // let tiger = document.getElementById('select_version').value == "10_4"
    // if (pentium4cpu.value == "none"){
    // document.getElementById('headline').innerHTML = "Choose your Pentium 4 CPU"
    // }
    document.getElementById('headline').innerHTML = "Choose your macOS Version"
    var active = document.getElementById("sec-item")
    active.classList.add("active")
    var rem_active = document.getElementById("first-item")
    rem_active.classList.remove("active")

    document.getElementById('SSDT_fs').disabled = false
    
    // document.getElementById('ACPI_chkbox_CPU_PM').checked = false; 
    document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = false;
    document.getElementById('ACPI_chkbox_EC').checked = false; 
    document.getElementById('ACPI_chkbox_EC_USBX').checked = false; 
    document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = false;
    document.getElementById('ACPI_chkbox_NVRAM_SSDT_PMC').checked = false;
    document.getElementById('ACPI_chkbox_USB_SSDT_RHUB').checked = false;
    // console.log(pentium4)
    // document.getElementById('pentium4').style = "display: none;";  
    // document.getElementById('yonah').style = "display: none;";  
    // document.getElementById('conroe').style = "display: none;";  
    // document.getElementById('merom').style = "display: none;";  
    // document.getElementById('penryn').style = "display: none;";  
    hide_versions()
    let e = document.getElementById("select_version");
    let strV = e.value;
    console.log(strV)
    
    if(pentium4){
        document.getElementById("hed").style.display = "none"
        document.getElementById("laptop").style.display = "none"
        hide_versions()

    //   console.log(sel.options[sel.selectedIndex].text)
  	  //document.getElementById('pentium4').style = "";  
      document.getElementById('ACPI_chkbox_EC').checked = true
      document.getElementById('SSDT_fs').disabled = true
      document.getElementById('10_4').style = ""
      document.getElementById('10_5').style = ""

      if (strV == '10_4'){
          document.getElementById('value_cpu').innerHTML = "macOS 10.4.1 (Tiger)"
      }
      if (strV == '10_5'){
        document.getElementById('value_cpu').innerHTML = "macOS 10.5.8 (Leopard)"
      }



    }
    if(yonah){
        document.getElementById("hed").style.display = "none"
        document.getElementById("laptop").style.display = "none"
        hide_versions()

        //   console.log(sel.options[sel.selectedIndex].text)
        //document.getElementById('yonah').style = "";  
        alert("32-Bit only")
        document.getElementById('ACPI_chkbox_EC').checked = true
        document.getElementById('SSDT_fs').disabled = true
        document.getElementById('10_4').style = ""
        document.getElementById('10_5').style = ""
        document.getElementById('10_6').style = ""

        let e = document.getElementById("select_version");
        let strV = e.value;

        if (strV == '10_4'){
            document.getElementById('value_cpu').innerHTML = "macOS 10.4.1 (Tiger)"
        }

        SMBIOS = "iMac4,1 (iMac Early 2006)"
        }
    if(conroe){
        document.getElementById("hed").style.display = "none"
        document.getElementById("laptop").style.display = "none"
        //   console.log(sel.options[sel.selectedIndex].text)
        //document.getElementById('conroe').style = "";  
        document.getElementById('ACPI_chkbox_EC').checked = true
        document.getElementById('SSDT_fs').disabled = true

        hide_versions()
        document.getElementById('10_4').style = ""
        document.getElementById('10_5').style = ""
        document.getElementById('10_6').style = ""
        document.getElementById('10_7').style = ""
        document.getElementById('10_8').style = ""
        document.getElementById('10_9').style = ""
        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""

        SMBIOS = "iMac7,1 (iMac Mid 2007)"

    }
    if(merom){
        document.getElementById("hed").style.display = "none"
        document.getElementById("laptop").style.display = "none"
        hide_versions()
        //document.getElementById('merom').style = "";  
        document.getElementById('10_4').style = ""
        document.getElementById('10_5').style = ""
        document.getElementById('10_6').style = ""
        document.getElementById('10_7').style = ""
        document.getElementById('10_8').style = ""
        document.getElementById('10_9').style = ""
        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""

    }
    if(penryn){

        document.getElementById('ACPI_chkbox_EC').checked = true
        document.getElementById('SSDT_fs').disabled = true

        document.getElementById("hed").style.display = "none"
        document.getElementById("laptop").style.display = "none"
        hide_versions()
        //document.getElementById('penryn').style = "";  
        //document.getElementById('penryn').style = "";  
        document.getElementById('10_4').style = ""
        document.getElementById('10_5').style = ""
        document.getElementById('10_6').style = ""
        document.getElementById('10_7').style = ""
        document.getElementById('10_8').style = ""
        document.getElementById('10_9').style = ""
        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""


        SMBIOS = "iMac 10,1 (iMac Late 2009)"
    }
    if(nehalem){
        document.getElementById("laptop").style.display = "none"
        hide_versions()
        document.getElementById('10_5').style = ""
        document.getElementById('10_6').style = ""
        document.getElementById('10_7').style = ""
        document.getElementById('10_8').style = ""
        document.getElementById('10_9').style = ""
        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""

        SMBIOS = "iMac11,1 (iMac Late 2009)"
        if (version == "10_14" || version == "10_15" || version == "11" || version == "12"){
            SMBIOS = "MacPro6,1 (Mac Pro Late 2013)"
        }
    }
    if(lynnfield || clarksfield || westmere || arrandale || clarkdale || sandy_bridge ){
        if (document.getElementById("select_model").value=="desktop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            document.getElementById('SSDT_fs').disabled = true

            if (lynnfield){
                SMBIOS = "iMac11,1 (iMac Late 2009)"
            }
            else if (clarkdale){
                SMBIOS = "iMac11,2 (iMac Mid 2010)"
            }
            else if (sandy_bridge){
                SMBIOS = "iMac12,2 (iMac Mid 2011)"
            }
            else{
                SMBIOS = "iMac11,3 (iMac Mid 2010)"
            }
        }
        if (document.getElementById("select_model").value=="laptop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            alert("Please add SSDT-PNLF manually")
            document.getElementById('SSDT_fs').disabled = true
            if (clarkdale || arrandale){
                SMBIOS = "MacBookPro6,1 (17-inch MacBook Pro, Mid 2010)"
            }
            

            if (sandy_bridge) {
                alert("Please add SSDT-IMEI manually")

                SMBIOS = "\t MacBookAir4,1 (11-inch MacBook Air, Mid 2011) -> iGPU: HD 3000\n \
                MacBookAir4,2 (13-inch MacBook Air, Mid 2011) -> iGPU: HD 3000\n \
                MacBookPro8,1 (13-inch MacBook Pro, Late 2011) -> iGPU: HD 3000\n \
                MacBookPro8,2 (15-inch MacBook Pro, Late 2011) -> iGPU: HD 3000 + 6490M\n \
                MacBookPro8,3 (17-inch MacBook Pro, Late 2011) -> iGPU: HD 3000 + 6750M\n \
                Macmini5,1 (Mac Mini, Mid 2011) -> iGPU: HD 3000\n \
                Macmini5,3 (Mac Mini Server, Mid 2011) -> iGPU: HD 3000\n \
                "
            }
        }



        hide_versions()

        document.getElementById('10_6').style = ""
        document.getElementById('10_7').style = ""
        document.getElementById('10_8').style = ""
        document.getElementById('10_9').style = ""
        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""
    }
    
    if ((sandy_bridge && hed) || (ivy_bridge && hed) || (ivy_bridge_e5 && hed) || (haswell && hed) || (broadwell && hed) ){
        alert("Please add SSDT-UNC manually. This SSDT is not covered in this Version of OC-EFI-GenX")
    }
    if(ivy_bridge){

        if (document.getElementById("select_model").value=="desktop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "iMac13,1 (iMac Late 2012) (when you use your iGPU) \niMac13,2 (iMac Late 2012) (when use your dGPU)"

        }
        if (hed){
            document.getElementById('ACPI_chkbox_EC').checked = true
            document.getElementById('SSDT_fs').disabled = true
        }
        if (document.getElementById("select_model").value == "laptop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            alert("Please add SSDT-PNLF manually")
            alert("Please add SSDT-IMEI manually")
            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "MacBookAir5,1 (11-inch MacBook Air, Mid 2012) -> iGPU: HD 4000\n \
            MacBookAir5,2 (13-inch MacBook Air, Mid 2012) -> iGPU: HD 4000\n \
            MacBookPro10,1 (Retina, 15-inch MacBook Pro, Mid 2012) -> iGPU: HD 4000 + dGPU: GT 650M\n \
            MacBookPro10,2 (Retina, 13-inch MacBook Pro, Late 2012) -> iGPU: HD 4000\n \
            Macmini6,1 (Mac Mini, Late 2012) -> iGPU: HD 4000\n \
            Macmini6,2 (Mac Mini, Mid 2012) -> iGPU: HD 4000\n \
            "
        }
        
        hide_versions()

        document.getElementById('10_7').style = ""
        document.getElementById('10_8').style = ""
        document.getElementById('10_9').style = ""
        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""

        console.log(document.getElementById("select_version").value)

    }
    if(ivy_bridge_e5){
        if (document.getElementById("select_model").value=="desktop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            document.getElementById('SSDT_fs').disabled = true
        }
        hide_versions()

        document.getElementById('10_9').style = ""
        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""
    }
    if(haswell){
        if (document.getElementById("select_model").value=="desktop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "iMac14,4 (iMac Mid 2014) (when you use your iGPU) \niMac15,1 (iMac Retina 5K Late 2014 (2015)) (when use your dGPU)"
        }
        if (document.getElementById("select_model").value=="hed"){
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = true
            document.getElementById('SSDT_fs').disabled = true
        }
        if (document.getElementById("select_model").value == "laptop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            alert("Please add SSDT-PNLF manually")
            alert("Please add SSDT-GPI0 manually (Post-Install)")
            document.getElementById('SSDT_fs').disabled = true


            SMBIOS = "MacBookAir6,1 (11-inch MacBook Air, Mid 2013 (Early 2014))\n \
            MacBookAir6,2 (13-inch MacBook Air, Mid 2013 (Early 2014))\n \
            MacBookPro11,1 (Retina, 13-inch MacBook Pro, Late 2013 (Mid 2014))\n \
            MacBookPro11,2 (Retina, 15-inch MacBook Pro, Late 2013 (Mid 2014))\n \
            MacBookPro11,3 (Retina, 15-inch MacBook Pro, Late 2013 (Mid 2014))\n \
            MacBookPro11,4 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            MacBookPro11,5 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            Macmini7,1 (Mac Mini, Late 2014)\
            "
        }
        hide_versions()

        document.getElementById('10_8').style = ""
        document.getElementById('10_9').style = ""
        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""
    }
    if(broadwell){
        if (document.getElementById("select_model").value=="desktop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "iMac16,2 (iMac Late 2015)"
        }
        if (document.getElementById("select_model").value=="hed"){
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = true
            document.getElementById('SSDT_fs').disabled = true
        }
        if (document.getElementById("select_model").value == "laptop"){
            document.getElementById('ACPI_chkbox_EC').checked = true
            alert("Please add SSDT-PNLF manually")
            alert("Please add SSDT-GPI0 manually (Post-Install)")
            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "MacBook8,1 (12-inch MacBook, Early 2015)\n \
            MacBookAir7,1 (11-inch MacBook Air, Early 2015))\n \
            MacBookAir7,2 (13-inch MacBook Air, Early 2015))\n \
            MacBookPro12,1 (Retina, 13-inch MacBook Pro, Early 2015)\n \
            MacBookPro11,2 (Retina, 15-inch MacBook Pro, Late 2013 (Mid 2014))\n \
            MacBookPro11,3 (Retina, 15-inch MacBook Pro, Late 2013 (Mid 2014))\n \
            MacBookPro11,4 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            MacBookPro11,5 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            iMac16,1 (21.5-inch iMac Late 2015)\
            "
        }
        hide_versions()

        document.getElementById('10_10').style = ""
        document.getElementById('10_11').style = ""
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""
    }
    if(skylake){
        if (document.getElementById("select_model").value=="desktop"){
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "iMac17,1 (iMac Late 2015)"
        }
        if (document.getElementById("select_model").value=="hed"){
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = true
            document.getElementById('SSDT_fs').disabled = true
        }
        if (document.getElementById("select_model").value == "laptop"){
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            alert("Please add SSDT-PNLF manually")
            alert("Please add SSDT-GPI0 manually (Post-Install)")
            document.getElementById('SSDT_fs').disabled = true


            SMBIOS = "MacBook9,1 (12-inch MacBook, Early 2015)\n \
            MacBookPro13,1 (13-inch MacBook Pro, 2016)\n \
            MacBookPro13,2 (13-inch MacBook Pro, 2016)\n \
            MacBookPro13,3 (15-inch MacBook Pro, 2016)\n \
            iMac17,1 (Retina 5K 27-inch iMac Late 2015)\
            "
        }
        hide_versions()

        document.getElementById('10_11').style = ""
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""
    }
    if(kaby_lake || kaby_lake_r || coffee_lake){
        if (document.getElementById("select_model").value=="desktop" && kaby_lake){
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "iMac18,1 (iMac 2017) (when you use your iGPU) \niMac15,1 (iMac Retina 5K Late 2017) (when use your dGPU)"
        }
        if(document.getElementById("select_model").value=="desktop" && coffee_lake){
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = true
            document.getElementById('ACPI_chkbox_NVRAM_SSDT_PMC').checked = true

            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "iMac19,1 (iMac Retina 5K 2019) (when you use Mojave+) \niMac18,3 (iMac Retina 5K Late 2017) (when use your dGPU)"
        }
        if (kaby_lake || kaby_lake_r){
            if (document.getElementById("select_model").value == "laptop"){
                document.getElementById('ACPI_chkbox_EC_USBX').checked = true
                alert("Please add SSDT-PNLF manually")
                alert("Please add SSDT-GPI0 manually (Post-Install)")
                document.getElementById('SSDT_fs').disabled = true

                SMBIOS = "MacBookPro14,1 (13-inch MacBook Pro, 2017)\n \
                MacBookPro14,2 (13-inch MacBook Pro, 2017)\n \
                MacBookPro14,3 (15-inch MacBook Pro, 2017)\n \
                iMac18,1 (21.5-inch iMac, 2017)\
                "
            }
        }
        if (coffee_lake){
            if (document.getElementById("select_model").value == "laptop"){
                document.getElementById('ACPI_chkbox_EC_USBX').checked = true
                document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = true
                alert("Please add SSDT-PNLF manually")
                alert("Please add SSDT-GPI0 manually (Post-Install)")

                document.getElementById('SSDT_fs').disabled = true

            }
        }
    
       
        hide_versions()
        if(kaby_lake_r){
            document.getElementById("hed").style.display = "none"
            document.getElementById("desktop").style.display = "none"

            alert("Processors that are codenamed 'Kaby Lake R': \n \
            Intel Core Pentium Gold 4417U \n \
            Core i3-8130U \n \
            i5-8250U \n \
            i5-8350U \n \
            i7-8550U \n \
            i7-8650U")
        }
        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""
        document.getElementById('13').style = ""
    }

    if(amber_lake || whiskey_lake || comet_lake){
        if (document.getElementById("select_model").value=="desktop" && comet_lake){
            document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG').checked = true
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = true
            document.getElementById('ACPI_chkbox_USB_SSDT_RHUB').checked = true

            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "iMac20,1 (Retina 5K 2020) (i7-10xxx) \niMac20,2 (Retina 5K 2020) (i9-10xxx)" 
        }
        if (document.getElementById("select_model").value == "laptop" && comet_lake) {
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = true
            alert("Please add SSDT-PNLF manually")
            alert("Please add SSDT-GPI0 manually (Post-Install)")

            document.getElementById('SSDT_fs').disabled = true

            SMBIOS = "MacBookPro16,1 (16-inch MacBook Pro, 2019)\n \
            MacBookPro16,3 (13-inch MacBook Pro, 2020)\n \
            MacBookPro16,4 (16-inch MacBook Pro, 2019)\n \
            Macmini8,1 (Mac Mini, 2018)\
            "
        }
        if(whiskey_lake){
            alert("Processors that are codenamed 'Whiskey Lake': \n \
            Intel Core Celeron-4205U \n \
            Intel Core Pentium Gold 5405U \n \
            Core i3-8145U \n \
            i5-8265U \n \
            i5-8365U \n \
            i7-8565U \n \
            i7-8665U")

            if (document.getElementById("select_model").value == "laptop") {
                SMBIOS = "MacBookPro15,1 (15-inch MacBook Pro, 2018 (2019))\n \
                MacBookPro15,2 (13-inch MacBook Pro, 2018 (2019))\n \
                MacBookPro15,3 (15-inch MacBook Pro, 2018 (2019))\n \
                MacBookPro15,4 (15-inch MacBook Pro, 2019)\n \
                Macmini8,1 (Mac Mini, 2018)\
                "
            }
        }
        hide_versions()

        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""
        document.getElementById('13').style = ""
    }
    if(comet_lake_ref || ice_lake || rocket_lake){


        if (document.getElementById("select_model").value == "laptop") {
            document.getElementById('ACPI_chkbox_EC_USBX').checked = true
            document.getElementById('ACPI_chkbox_AWAC_AWAC').checked = true
            document.getElementById('ACPI_chkbox_USB_SSDT_RHUB').checked = true
            alert("Please add SSDT-PNLF manually")
            alert("Please add SSDT-GPI0 manually (Post-Install)")
            document.getElementById('SSDT_fs').disabled = true

        }

        hide_versions()

        document.getElementById('10_12').style = ""
        document.getElementById('10_13').style = ""
        document.getElementById('10_14').style = ""
        document.getElementById('10_15').style = ""
        document.getElementById('11').style = ""
        document.getElementById('12').style = ""
        document.getElementById('13').style = ""
    }


    

   
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

let count = -1

function on_button_update(){
    // let btn_back = document.getElementById('btn-back')
    // btn_back.disabled = true
    var btn_nxt = document.getElementById('btn-nxt')
    let pentium4 = document.getElementById('select').value == 'Pentium 4';
    let drivers_fs = document.getElementById('drivers_fs') 
    drivers_fs.disabled = false

    //alert("Currently in Beta!")
    // var active = document.getElementById("sec-item")
    // active.classList.add("active")
    // var rem_active = document.getElementById("first-item")
    // rem_active.classList.remove("active")
    var active = document.getElementById("sec-item")
    active.classList.add("active")
    var rem_active = document.getElementById("first-item")
    rem_active.classList.remove("active")

    count++;

    //btn_back.onclick = count--;

    console.log(count)

    if (count == 0){
        if (document.getElementById('select').value == ''){
            alert("No Generation selected")
            count = -1
            active =  document.getElementById("first-item")
            active.classList.add("active")
            rem_active = document.getElementById("sec-item")
            rem_active.classList.remove("active")
            return;
        }
        if (document.getElementById('select_version').value == ''){
            alert("No Version selected")
            count = -1
            return;
        }
        if (document.getElementById('select_model').value == ''){
            alert("No Model selected")
            count = -1
            return;
        }
        document.getElementById('SSDT_fs').style = ""
        document.getElementById('select').disabled = true
        document.getElementById('select_version').disabled = true
        document.getElementById('select_model').disabled = true

        document.getElementById('headline').innerHTML = "Choose your SSDTs"   
        active =  document.getElementById("trd-item")
        active.classList.add("active")
        rem_active = document.getElementById("sec-item")
        rem_active.classList.remove("active")
      //  btn_back.disabled = false

    }
    if (count == 1){
        document.getElementById('SSDT_fs').style = "display: none;"
        document.getElementById('drivers_fs').style = ""
        document.getElementById('headline').innerHTML = "Choose your Drivers"
        active =  document.getElementById("frt-item")
        active.classList.add("active")
        rem_active = document.getElementById("trd-item")
        rem_active.classList.remove("active")
        rem_active = document.getElementById("sec-item")
        rem_active.classList.remove("active")

        if (pentium4){
            //{
            document.getElementById('Drivers_HfsPlus32').checked  = true
            document.getElementById('Drivers_OpenPartitionDxe').checked = true
            document.getElementById('Drivers_OpenUsbKbDxe').checked  = true
            document.getElementById('Drivers_OpenRuntime').checked = true
            drivers_fs.disabled = true
            //document.getElementById('label_drv_hfsplus32').innerHTML = 'HfsPlus32.efi (Required for 32-Bit CPUs)'
            //}


        }
      //  btn_back.disabled = false
        
    }

    if (count == 2){
        document.getElementById('SSDT_fs').style = "display: none;"
        document.getElementById('drivers_fs').style = "display: none;"
        document.getElementById('kext_fs').style = ""
        document.getElementById('headline').innerHTML = "Choose your Kexts"
        // if (strV == '10_4' || strV == '10_5'){
        //     document.getElementById("KEXT_WEG").disabled = true
        //     document.getElementById("KEXT_VSMC_SuperIO").disabled = true
        //     document.getElementById("KEXT_VSMC_LightSensor").disabled = true
        //     document.getElementById("KEXT_VoodooHDA").disabled = true
        //     document.getElementById("KEXT_AIe1000e").disabled = true
        //     document.getElementById("KEXT_BCM5").disabled = true
        // }
          


        }
        // if (strV == '10_4' || strV == '10_5' || strV == '10_6' || strV == '10_7' ){
        //     document.getElementById("KEXT_CPUTSCS").disabled = true
        //     //document.getElementById("KEXT_AALC").disabled = true
        // }
        // if (strV == '10_4' || strV == '10_5' || strV == '10_6' || strV == '10_7' || strV == '10_8' ){
        //     document.getElementById("KEXT_IntelMausi").disabled = true
        // }
        // if (strV == '10_4' || strV == '10_5' || strV == '10_6' || strV == '10_7' || strV == '10_8' || strV == '10_9' ){
        //     document.getElementById("KEXT_ABRCMF").disabled = true
        // }
        // if (strV == '10_4' || strV == '10_5' || strV == '10_6' || strV == '10_7' || strV == '10_8' || strV == '10_9' || strV == '10_10' ){
        //     document.getElementById("KEXT_USBIJA").disabled = true
        // }
        // if (strV == '10_4' || strV == '10_5' || strV == '10_6' || strV == '10_7' || strV == '10_8' || strV == '10_9' || strV == '10_10' || strV == '10_11' ){
        //     document.getElementById("KEXT_RTRTL8100").disabled = true
        // }
        // if (strV == '10_4' || strV == '10_5' || strV == '10_6' || strV == '10_7' || strV == '10_8' || strV == '10_9' || strV == '10_10' || strV == '10_11' || strV == '10_12' ){
        //     document.getElementById("KEXT_APItL").disabled = true
        //     document.getElementById("KEXT_IBF").disabled = true
        // }
        // if (strV == '10_4' || strV == '10_5' || strV == '10_6' || strV == '10_7' || strV == '10_8' || strV == '10_9' || strV == '10_10' || strV == '10_11' || strV == '10_12' || strV == '10_13'){
        //     document.getElementById("KEXT_NVMeF").disabled = true
        //     document.getElementById("KEXT_SUnsup").disabled = true
        // }
        // if (strV == '10_4' || strV == '10_5' || strV == '10_6' || strV == '10_7' || strV == '10_8' || strV == '10_9' || strV == '10_10' || strV == '10_11' || strV == '10_12' || strV == '10_13' || strV == '10_14'){
        //     document.getElementById("KEXT_LRTL81E").disabled = true
        //     document.getElementById("KEXT_AMCERD").disabled = true
        // }
        active =  document.getElementById("fth-item")
        active.classList.add("active")
        rem_active = document.getElementById("frt-item")
        rem_active.classList.remove("active")
        rem_active = document.getElementById("trd-item")
        rem_active.classList.remove("active")
        rem_active = document.getElementById("sec-item")
        rem_active.classList.remove("active")
      //  btn_back.disabled = false
        if (strV == '10_6'){
            document.getElementById("KEXT_VSMC_Processor").disabled = true
            document.getElementById("KEXT_CPUTSCS").disabled = true
            document.getElementById("KEXT_IntelMausi").disabled = true
        }
    
    if (count == 3){
        folder = 'EFI'
        fs.mkdir(folder, {recursive: true}, (err) => {
            if (err) {
                throw err;
            }

            console.log("EFI created")
        })
        const folderNameEFI = 'EFI'
        const folderNameOC = 'EFI/OC'
        const folderNameBOOT = 'EFI/BOOT'
        const folderNameACPI = 'EFI/OC/ACPI'
        const folderNameDrivers = 'EFI/OC/Drivers'
        const folderNameKexts = 'EFI/OC/Kexts'
        const folderNameTools = 'EFI/OC/Tools'
        btn_nxt.disabled = true



        try {
            if (!fs.existsSync(folderNameEFI)) {
              fs.mkdirSync(folderNameEFI);
            }
            if (!fs.existsSync(folderNameOC)) {
                fs.mkdirSync(folderNameOC);
            }
            if (!fs.existsSync(folderNameBOOT)) {
                fs.mkdirSync(folderNameBOOT);
            }
            if (!fs.existsSync(folderNameACPI)) {
                fs.mkdirSync(folderNameACPI);
            }
            if (!fs.existsSync(folderNameDrivers)) {
                fs.mkdirSync(folderNameDrivers);
            }
            if (!fs.existsSync(folderNameKexts)) {
                fs.mkdirSync(folderNameKexts);
            }
            if (!fs.existsSync(folderNameTools)) {
                fs.mkdirSync(folderNameTools);
            }
        } catch (err) {
            console.error(err);
        }
        document.getElementById('SSDT_fs').style = "display: none;"
        document.getElementById('drivers_fs').style = "display: none;"
        document.getElementById('kext_fs').style = "display: none;"
        document.getElementById('loader_div').style.display = ""
        document.getElementById('text-gen-efi').style = ""
        document.getElementById('text-gen-efi-p').style = ""


        // function btn_more_onclick(sel){
        //     sel.onclick(alert("SMBIOS: "))
        // }

        active =  document.getElementById("sx-item")
        active.classList.add("active")
        rem_active = document.getElementById("fth-item")
        rem_active.classList.remove("active")
        rem_active = document.getElementById("trd-item")
        rem_active.classList.remove("active")
        rem_active = document.getElementById("sec-item")
        rem_active.classList.remove("active")



        function showPage(){
            document.getElementById('loader_div').style.display = "none"
            document.getElementById('text-gen-efi').style = "display: none;"
            document.getElementById('text-gen-efi-p').style = "display: none;"
            document.getElementById('tada-div').style = ""
            active =  document.getElementById("svn-item")
            active.classList.add("active")
            rem_active = document.getElementById("sx-item")
            rem_active.classList.remove("active")
            rem_active = document.getElementById("trd-item")
            rem_active.classList.remove("active")
            rem_active = document.getElementById("sec-item")
            rem_active.classList.remove("active")
            document.getElementById('btn-nxt').disabled = true
           //  btn_back.disabled = false
        }
        
        let ACPI_chkbox_EC = document.getElementById('ACPI_chkbox_EC')
        if (ACPI_chkbox_EC.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\Docs\\AcpiSamples\\Binaries\\SSDT-EC.aml', 'EFI\\OC\\ACPI\\SSDT-EC.aml', (err) => {
                console.log(err)
            })
        }

        let ACPI_chkbox_CPU_SSDT_PLUG = document.getElementById('ACPI_chkbox_CPU_SSDT_PLUG')
        if (ACPI_chkbox_CPU_SSDT_PLUG.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\Docs\\AcpiSamples\\Binaries\\SSDT-PLUG.aml', 'EFI\\OC\\ACPI\\SSDT-PLUG.aml', (err) => {
                console.log(err)
            })
        }
    
        let ACPI_chkbox_EC_USBX = document.getElementById('ACPI_chkbox_EC_USBX')
        if (ACPI_chkbox_EC_USBX.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\Docs\\AcpiSamples\\Binaries\\SSDT-EC-USBX.aml', 'EFI\\OC\\ACPI\\SSDT-EC-USBX.aml', (err) => {
                console.log(err)
            })
        }

        let ACPI_chkbox_AWAC_AWAC = document.getElementById('ACPI_chkbox_AWAC_AWAC')
        if (ACPI_chkbox_AWAC_AWAC.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\Docs\\AcpiSamples\\Binaries\\SSDT-AWAC.aml', 'EFI\\OC\\ACPI\\SSDT-AWAC.aml', (err) => {
                console.log(err)
            })
        }

        let ACPI_chkbox_NVRAM_SSDT_PMC = document.getElementById('ACPI_chkbox_NVRAM_SSDT_PMC')
        if (ACPI_chkbox_NVRAM_SSDT_PMC.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\Docs\\AcpiSamples\\Binaries\\SSDT-PMC.aml', 'EFI\\OC\\ACPI\\SSDT-PMC.aml', (err) => {
                console.log(err)
            })
        }

        let ACPI_chkbox_USB_SSDT_RHUB = document.getElementById('ACPI_chkbox_USB_SSDT_RHUB')
        if (ACPI_chkbox_USB_SSDT_RHUB.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\Docs\\AcpiSamples\\Binaries\\SSDT-RHUB.aml', 'EFI\\OC\\ACPI\\SSDT-RHUB.aml', (err) => {
                console.log(err)
            })
        }

        let Drivers_HfsPlus = document.getElementById('Drivers_HfsPlus')
        if (Drivers_HfsPlus.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\X64\\EFI\\OC\\Drivers\\HfsPlus.efi', 'EFI\\OC\\Drivers\\HfsPlus.efi', (err) => {
                console.log(err)
            })
        }

        let Drivers_OpenRuntime = document.getElementById('Drivers_OpenRuntime')
        if (Drivers_OpenRuntime.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\X64\\EFI\\OC\\Drivers\\OpenRuntime.efi', 'EFI\\OC\\Drivers\\OpenRuntime.efi', (err) => {
                console.log(err)
            })
        }

        let Drivers_OpenUsbKbDxe = document.getElementById('Drivers_OpenUsbKbDxe')
        if (Drivers_OpenUsbKbDxe.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\X64\\EFI\\OC\\Drivers\\OpenUsbKbDxe.efi', 'EFI\\OC\\Drivers\\OpenUsbKbDxe.efi', (err) => {
                console.log(err)
            })
        }

        let Drivers_HfsPlusLegacy = document.getElementById('Drivers_HfsPlusLegacy')
        if (Drivers_HfsPlusLegacy.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\X64\\EFI\\OC\\Drivers\\HfsPlusLegacy.efi', 'EFI\\OC\\Drivers\\HfsPlusLegacy.efi', (err) => {
                console.log(err)
            })
        }

        let Drivers_HfsPlus32 = document.getElementById('Drivers_HfsPlus32')
        if (Drivers_HfsPlus32.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\X64\\EFI\\OC\\Drivers\\HfsPlus32.efi', 'EFI\\OC\\Drivers\\HfsPlus32.efi', (err) => {
                console.log(err)
            })
        }

        let Drivers_OpenPartitionDxe = document.getElementById('Drivers_OpenPartitionDxe')
        if (Drivers_OpenPartitionDxe.checked){
            fs.copyFile('.\\resources\\app\\src\\OpenCore\\X64\\EFI\\OC\\Drivers\\OpenPartitionDxe.efi', 'EFI\\OC\\Drivers\\OpenPartitionDxe.efi', (err) => {
                console.log(err)
            })
        }



        let KEXT_VSMC = document.getElementById("KEXT_VSMC")
        if (KEXT_VSMC.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\VirtualSMC.kext", 'EFI\\OC\\Kexts\\VirtualSMC.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy VSMC completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }

        let KEXT_LILU = document.getElementById("KEXT_LILU")
        if (KEXT_LILU.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\Lilu.kext", 'EFI\\OC\\Kexts\\Lilu.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }

        let KEXT_WEG = document.getElementById("KEXT_WEG")
        if (KEXT_WEG.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\WhateverGreen.kext", 'EFI\\OC\\Kexts\\WhateverGreen.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy WEG completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_VSMC_Processor = document.getElementById("KEXT_VSMC_Processor")
        if (KEXT_VSMC_Processor.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\SMCProcessor.kext", 'EFI\\OC\\Kexts\\SMCProcessor.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }

        let KEXT_VSMC_SuperIO = document.getElementById("KEXT_VSMC_SuperIO")
        if (KEXT_VSMC_SuperIO.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\SMCSuperIO.kext", 'EFI\\OC\\Kexts\\SMCSuperIO.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_VSMC_BatteryManager = document.getElementById("KEXT_VSMC_BatteryManager")
        if (KEXT_VSMC_BatteryManager.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\SMCBatteryManager.kext", 'EFI\\OC\\Kexts\\SMCBatteryManager.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_VSMC_LightSensor = document.getElementById("KEXT_VSMC_LightSensor")
        if (KEXT_VSMC_LightSensor.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\SMCLightSensor.kext", 'EFI\\OC\\Kexts\\SMCLightSensor.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_AALC = document.getElementById("KEXT_AALC")
        if (KEXT_AALC.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\AppleALC.kext", 'EFI\\OC\\Kexts\\AppleALC.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_VoodooHDA = document.getElementById("KEXT_VoodooHDA")
        if (KEXT_VoodooHDA.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\VoodooHDA.kext", 'EFI\\OC\\Kexts\\VoodooHDA.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_VoodooHDA_FAT = document.getElementById("KEXT_VoodooHDA-FAT")
        if (KEXT_VoodooHDA_FAT.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\VoodooHDA-FAT.kext", 'EFI\\OC\\Kexts\\VoodooHDA-FAT.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_IntelMausi = document.getElementById("KEXT_IntelMausi")
        if (KEXT_IntelMausi.checked){
            if (strV == '10_6' || strV == '10_7' || strV == "10_8"){
                fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\IntelSnowMausi.kext", 'EFI\\OC\\Kexts\\IntelSnowMausi.kext', function (err) {
                    if (err){
                        console.log('An error occured while copying the folder.')
                        return console.error(err)
                    }
                    console.log('Copy Lilu completed!')
                });
            }
            else {
                fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\IntelMausi.kext", 'EFI\\OC\\Kexts\\IntelMausi.kext', function (err) {
                    if (err){
                        console.log('An error occured while copying the folder.')
                        return console.error(err)
                    }
                    console.log('Copy Lilu completed!')
                });
            }
            
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_STI82 = document.getElementById("KEXT_STI82")
        if (KEXT_STI82.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\SmallTreeIntel82576.kext", 'EFI\\OC\\Kexts\\SmallTreeIntel82576.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_AE2E = document.getElementById("KEXT_AE2E")
        if (KEXT_AE2E.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\AtherosE2200Ethernet.kext", 'EFI\\OC\\Kexts\\AtherosE2200Ethernet.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_RTRTL81 = document.getElementById("KEXT_RTRTL81")
        if (KEXT_RTRTL81.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\RealtekRTL8111.kext", 'EFI\\OC\\Kexts\\RealtekRTL8111.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_LRTL81E = document.getElementById("KEXT_LRTL81E")
        if (KEXT_LRTL81E.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\LucyRTL8125Ethernet.kext", 'EFI\\OC\\Kexts\\LucyRTL8125Ethernet.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_AIe1000e = document.getElementById("KEXT_AIe1000e")
        if (KEXT_AIe1000e.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\AppleIntele1000e.kext", 'EFI\\OC\\Kexts\\AppleIntele1000e.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_RTRTL8100 = document.getElementById("KEXT_RTRTL8100")
        if (KEXT_RTRTL8100.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\RealtekRTL8100.kext", 'EFI\\OC\\Kexts\\RealtekRTL8100.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_BCM5 = document.getElementById("KEXT_BCM5")
        if (KEXT_BCM5.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\BCM5722D.kext", 'EFI\\OC\\Kexts\\BCM5722D.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_USBIJA = document.getElementById("KEXT_USBIJA")
        if (KEXT_USBIJA.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\USBInjectAll.kext", 'EFI\\OC\\Kexts\\USBInjectAll.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_HORDS = document.getElementById("KEXT_HORDS")
        if (KEXT_HORDS.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\HoRNDIS.kext", 'EFI\\OC\\Kexts\\HoRNDIS.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy HoRNDIS completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_APItL = document.getElementById("KEXT_APItL")
        if (KEXT_APItL.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\AirportItLwm.kext", 'EFI\\OC\\Kexts\\AirportItLwm.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_IBF = document.getElementById("KEXT_IBF")
        if (KEXT_IBF.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\IntelBluetoothFirmware.kext", 'EFI\\OC\\Kexts\\IntelBluetoothFirmware.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\IntelBluetoothInjector.kext", 'EFI\\OC\\Kexts\\IntelBluetoothInjector.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_ABRCMF = document.getElementById("KEXT_ABRCMF")
        if (KEXT_ABRCMF.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\AirportBrcmFixup.kext", 'EFI\\OC\\Kexts\\AirportBrcmFixup.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_AMCERD = document.getElementById("KEXT_AMCERD")
        if (KEXT_AMCERD.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\AppleMCEReporterDisabler.kext", 'EFI\\OC\\Kexts\\AppleMCEReporterDisabler.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_CPUTSCS = document.getElementById("KEXT_CPUTSCS")
        if (KEXT_CPUTSCS.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\CPUTscSync.kext", 'EFI\\OC\\Kexts\\CPUTscSync.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_NVMeF = document.getElementById("KEXT_NVMeF")
        if (KEXT_NVMeF.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\NVMeFix.kext", 'EFI\\OC\\Kexts\\NVMeFix.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_SUnsup = document.getElementById("KEXT_SUnsup")
        if (KEXT_SUnsup.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\SATA-unsupported.kext", 'EFI\\OC\\Kexts\\SATA-unsupported.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_AHCIPI = document.getElementById("KEXT_AHCIPI")
        if (KEXT_AHCIPI.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\AHCIPortInjector.kext", 'EFI\\OC\\Kexts\\AHCIPortInjector.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let KEXT_ATAPI = document.getElementById("KEXT_ATAPI")
        if (KEXT_ATAPI.checked){
            fs_e.copy(".\\resources\\app\\src\\OpenCore\\Kexts\\ATAPortInjector.kext", 'EFI\\OC\\Kexts\\ATAPortInjector.kext', function (err) {
                if (err){
                    console.log('An error occured while copying the folder.')
                    return console.error(err)
                }
                console.log('Copy Lilu completed!')
            });
            //fs.copyFile('src\\OpenCore\\Kexts\\VirtualSMC.kext', 'EFI\\OC\\Kexts\\VirtualSMC.kext')
        }
        let model = document.getElementById("select_model").value;
        let version = document.getElementById("select_version").value;



        // Ivy Bitch Desktop
        if (ivy_bridge && model == "desktop" && version == '11'){
            SMBIOS = "iMac14,4 (iMac Mid 2014) (when you use your iGPU) \niMac15,1 (iMac Retina 5K Late 2014 (2015)) (when use your dGPU)"
        }
        if (ivy_bridge && model == "desktop" && version == "12"){
            SMBIOS = "MacPro6,1 (Mac Pro Early 2013)"
        }

        // Ivy Bitch Laptop
        if (ivy_bridge && model == "laptop" && version == "11"){
            SMBIOS = "MacBookAir6,1 (11-inch MacBook Air, Mid 2013 (Early 2014))\n \
            MacBookAir6,2 (13-inch MacBook Air, Mid 2013 (Early 2014))\n \
            MacBookPro11,1 (Retina, 13-inch MacBook Pro, Late 2013 (Mid 2014))\n \
            MacBookPro11,2 (Retina, 15-inch MacBook Pro, Late 2013 (Mid 2014))\n \
            MacBookPro11,3 (Retina, 15-inch MacBook Pro, Late 2013 (Mid 2014))\n \
            MacBookPro11,4 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            MacBookPro11,5 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            Macmini7,1 (Mac Mini, Late 2014)\
            "
        }
        if (ivy_bridge && model == "laptop" && version == "11"){
            SMBIOS = "MacBookPro11,4 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            MacBookPro11,5 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            Macmini7,1 (Mac Mini, Late 2014)\
            "
        }

        //Haswell Laptop
        if (haswell && model == "laptop" && version == "12"){        
            SMBIOS = "\
            MacBookPro11,4 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            MacBookPro11,5 (Retina, 15-inch MacBook Pro, Mid 2015)\n \
            Macmini7,1 (Mac Mini, Late 2014)\
            "
        }


        var timeout;

        timeout = setTimeout(showPage, 3000)


        console.log("Program Executed!")
        fs_e.copy(".\\EFI", "C:\\Users\\%username%\\Downloads\\EFI_OC_Generator\\EFI", function (err){
            if (err){
                let err_cp = document.getElementById("err_cp").style.display = ""
            }
            else{
                alert("Your EFI is ready in Downloads > EFI_OC_Generator > EFI")
            }
        })

        let more_div = document.getElementById("more_div").style.display = ""
        let more_btn = document.getElementById("a_more")

       
    }
    if (count >= 3){
        count = 2
    }
}
on_button_update()

function btn_more_onclick(){
    alert("Recommended SMBIOS: \n" 
    + SMBIOS)
}

function sec_pg(){
    document.getElementById('div_first_pg').style = "display: none;"
    document.getElementById('div_sec_pg').style = ""
}
function thd_pg(){
    document.getElementById('div_first_pg').style = "display: none;"
    document.getElementById('div_sec_pg').style = "display: none;"
    document.getElementById('div_thd_pg').style = ""
}
function frt_pg(){
    document.getElementById('div_first_pg').style = "display: none;"
    document.getElementById('div_sec_pg').style = "display: none;"
    document.getElementById('div_thd_pg').style = "display: none;"
    document.getElementById('div_frt_pg').style = ""
}
function fth_pg(){
    document.getElementById('div_first_pg').style = "display: none;"
    document.getElementById('div_sec_pg').style = "display: none;"
    document.getElementById('div_thd_pg').style = "display: none;"
    document.getElementById('div_frt_pg').style = "display: none;"
    document.getElementById('div_fth_pg').style = ""
}
