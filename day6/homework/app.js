let checkAll = document.querySelector("#checkAll");
let checkbox = document.querySelectorAll("[type=checkbox]:not(#checkAll)");

checkAll.addEventListener("click", ()=>{
    let checkYn = checkAll.checked;
    checkbox.forEach((obj, idx) =>{
        obj.checked = checkYn;
    })
})
checkAll.addEventListener("click", activateConfirm);
checkbox.forEach((obj,index) => obj.addEventListener("click", activateConfirm ));

function allCheckYN() {
    let checkYn = true;
    checkbox.forEach((obj, index)=>{
        if(obj.checked == false){
            checkYn = false;
        }
    })
    return checkYn;
}

function activateConfirm(){
    let sumbitBtn = document.querySelector("[type=submit]");
    sumbitBtn.disabled =!allCheckYN();
}