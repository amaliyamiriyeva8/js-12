let input_1=document.getElementById('input-1');
let input_2=document.getElementById('input-2');
let input_3=document.getElementById('input-3');
let tbody =document.querySelector('#tbody');
let button=document.querySelector('button');
let body=document.querySelector('body')
button.addEventListener('click',()=>{
    let radio=document.querySelector('input[name="a"]:checked');
    let first=input_1.value.trim();
    let second=input_2.value.trim();
    let four=input_3.value.trim();
    let third=radio;
   
    if(first=="" || second==""|| third==""|| four==""){
        alert("Please write a review");
        return
    }
    let trEl=document.createElement('tr');
    let tdEl_1=document.createElement('td');
    let tdEl_2=document.createElement('td');
    let tdEl_3=document.createElement('td');
    tbody.append(trEl);
    trEl.append(tdEl_1,tdEl_2,tdEl_3);

    tdEl_1.innerHTML=input_1.value;
    tdEl_2.innerHTML=input_2.value;
    tdEl_3.innerHTML= radio.nextElementSibling.innerText;
    trEl.style.backgroundColor=four;
    trEl.style.fontSize="22px";
    trEl.style.height="50px";
    tdEl_1.style.paddingLeft="20px";
    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
    radio.checked = false;
   
   
  
})
