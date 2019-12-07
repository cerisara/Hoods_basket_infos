
var joueurs = document.getElementsByClassName('joueur');

function setCheckboxes(){
    
    for(j of joueurs){
        var qui=j.id;
        var etat=data=getUserState(equip,journ,qui)
        var cbpr=document.getElementById(qui+"pr").value;
        var cbab=document.getElementById(qui+"ab").value;
        if(etat=="pr"){
            cbpr.checked=true;
            cbpr.checked=false;
        }
        else if(etat=="ab"){
            cbpr.checked=false;
            cbpr.checked=true;
        }
        else{
        
            cbpr.checked=false;
            cbpr.checked=false;
        }
    }   
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function answer() {
        console.log("GET ANSWSER!");
}

function onChangeBox(idb){
    var qui = idb.substring(0,idb.length-2);
    var checkbx = document.getElementById(qui+"ab");
    var etatc2 = checkbx.checked;
    var etatc1 = document.getElementById(qui+"pr").checked;
    var etat="??";
    if(etatc1 && !etatc2) etat="pr";
    else if(!etatc1 && etatc2) etat="ab";
    var msg="houdsdeb"+equip+"\t"+journ+"\t"+qui+etat;
    console.log("msg : "+msg);
    var res = httpGetAsync("https://olki.loria.fr/python4nlp.php?"+msg,answer);
}


setCheckboxes();


