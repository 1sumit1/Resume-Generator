function addNewWorkField(){
    
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder',"Enter here");

    let weObj=document.getElementById('we');
    let weAddButtonObj=document.getElementById('weaddButton');
    weObj.insertBefore(newNode,weAddButtonObj);

}
function addNewCertificationField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('certField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder',"Enter here");

    let crObj=document.getElementById('cr');
    let crAddButtonObj=document.getElementById('crAddButton');
    crObj.insertBefore(newNode,crAddButtonObj);
}

function addNewEducationField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder',"Enter here");

    let edObj=document.getElementById('eq');
    let edAddButtonObj=document.getElementById('eqAddButton');
    edObj.insertBefore(newNode,edAddButtonObj);

}

function addNewProjectField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('pjField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder',"Enter here");

    let pjObj=document.getElementById('pj');
    let pjAddButtonObj=document.getElementById('pjAddButton');
    pjObj.insertBefore(newNode,pjAddButtonObj);

}



function generateCV(){
     let nameField=document.getElementById('nameField').value;
     let nameT=document.getElementById('nameT');
     nameT.innerHTML=nameField;
    // document.getElementById('nameT').innerHTML=document.getElementById('nameField').value;

     let contactField=document.getElementById('contactField').value;
     let phoneT=document.getElementById('phoneT');
     phoneT.innerHTML=contactField;

     let addressField=document.getElementById('addressField').value;
     let addressT=document.getElementById('addressT');
     addressT.innerHTML=addressField;

     let emailField=document.getElementById('emailField').value;
     let emailT=document.getElementById('emailT');
     emailT.innerHTML=emailField;

     let languageField=document.getElementById('languageField').value;
     let languageT=document.getElementById('languageT');
     languageT.innerHTML=languageField;

     let fbField=document.getElementById('fbField').value;
     let fbT=document.getElementById('fbT');
     fbT.innerHTML=fbField;

     let instaField=document.getElementById('instaField').value;
     let instaT=document.getElementById('instaT');
     instaT.innerHTML=instaField;

     let linkedField=document.getElementById('linkedField').value;
     let linkedT=document.getElementById('linkedT');
     linkedT.innerHTML=linkedField;

     let getField=document.getElementById('getField').value;
     let getT=document.getElementById('getT');
     getT.innerHTML=getField;


     let objectiveField=document.getElementById('objectiveField').value;
     let objectiveT=document.getElementById('objectiveT');
     objectiveT.innerHTML=objectiveField;

     let weField=document.getElementsByClassName('weField');
     let str="";
     for(let e of weField){
         str=str+ `<li> ${e.value} </li>`;
     }

     let weT=document.getElementById('weT');
     weT.innerHTML=str;

     

     let certField=document.getElementsByClassName('certField');
     let str1="";
     for(let e of certField){
         str1=str1+`<li> ${e.value} </li>`;
     }
     let certT=document.getElementById('certT');
     certT.innerHTML=str1;
     

     let eqField=document.getElementsByClassName('eqField');
     let str2="";
     for(let e of eqField){
         str2=str2+`<li> ${e.value} </li>`
     }
     let eqT=document.getElementById('eqT');
     eqT.innerHTML=str2;

     let pjField=document.getElementsByClassName('pjField');
     let str3="";
     for(let e of pjField){
         str3=str3+`<li> ${e.value} </li>`
     }
     let projectT=document.getElementById('projectT');
     projectT.innerHTML=str3;


     let file=document.getElementById('imageField').files[0];
     let reader=new FileReader();
     reader.readAsDataURL(file);

     reader.onload=function(){
      document.getElementById('imageT').src=reader.result;
     };

     document.getElementById('form-review').style.display='none';
     document.getElementById('cv-review').style.display='block';
    
}
function printCV(){
    window.print();
}