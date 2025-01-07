let div_errors = null;
let div_clipboad = null;
let teladeespera = null;


function msgError(mymsg)
{
    let customfile =document.querySelector(".custom-file");
    if(!customfile){
        console.error("Cannot get div 'custom-file'");
        return;
    }
    div_errors = document.createElement("div");
    div_errors.classList.add("alert");
    div_errors.classList.add("alert-danger");
    div_errors.innerHTML= mymsg;
    customfile.appendChild(div_errors);
    
}


function msgClipBoard(mymsg)
{
    if(div_clipboad)
        div_clipboad.remove();
    let divresponse =document.querySelector(".divresponse");
    if(!divresponse){
        console.error("Cannot get div 'divresponse'");
        return;
    }
    div_clipboad = document.createElement("div");
    div_clipboad.classList.add("alert");
    div_clipboad.classList.add("alert-success");
    div_clipboad.innerHTML= mymsg;
    divresponse.appendChild(div_clipboad);
    
}


async function funcsend(){
    if(div_errors)
        div_errors.remove();
    if(div_clipboad)
        div_clipboad.remove();  
    var inputfile = document.querySelector("#file");
    if(!inputfile){
        console.error("Cannot get file input with id name 'formFile'");
        return;
    }
    var response_textarea = document.querySelector(".myresponse");
    if(!response_textarea){
        console.error("Cannot get textarea with id name 'myresponse'");
        return;
    }
    var teladeespera = document.querySelector(".teladeespera");
    if(!teladeespera){
        console.error("Cannot get div 'teladeespera'");
        return;
    }
    if (inputfile.files.length < 1){
        msgError("Selecione um arquivo SMI.");
        return;
    }
    response_textarea.value = "";
    
    let pattern = /^.*\.(smi)$/ig;
    if(!pattern.test(inputfile.files[0].name)){
        msgError("Extensão incorreta, selecione um arquivo SMI.");
        return;
    }  
    teladeespera.style.display = 'block';
    var data = new FormData();
    data.append('files', inputfile.files[0]);
    data.append('name', inputfile.files[0].name);
    try {
    const response = await fetch('/apidescriptors',{
        method:"POST",
        body:data,
    });
    console.log(response);
    if(response.status != 200){
        msgError("O sistema parou de forma inesperada.");
    
        return;
    }
    response_textarea.value = await response.text();
    
    }
    catch(e){
        console.log(e);
        msgError("O sistema parou de forma inesperada.");
        
    }finally{
        teladeespera.style.display = 'none';
    }
    

}

function funcclipboard(){
    var response_textarea = document.querySelector(".myresponse");
    if(!response_textarea){
        console.error("Cannot get textarea with id name 'myresponse'");
        return;
    }
    navigator.clipboard.writeText(response_textarea.value);
    msgClipBoard("Copied!");
}


