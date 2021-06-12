let checkAllBtn = document.getElementById('checkAll');
let submitBtn = document.getElementsByClassName('next-button');
let allCheckBox = document.getElementsByName('agreement');

checkAllBtn.addEventListener('click', () => {
    allCheckBox.forEach((i) => {
        i.checked = checkAllBtn.checked;
    });
    submitBtn.item(0).disabled = !checkAllBtn.checked;
});


allCheckBox.forEach((i) => {
    i.addEventListener('change', () => {
        if (i.required) {
            let isRequireButtonChecked = isAllButtonChecked(true);
            submitBtn.item(0).disabled = !isRequireButtonChecked;
        }
        if (!i.checked) {
            checkAllBtn.checked = false;
        } else {
            let isButtonChecked = isAllButtonChecked(false);
            checkAllBtn.checked = isButtonChecked;
        }
    });
});

function isAllButtonChecked(requiredCheck) {
    let requireButtonUncheckedCnt = 0;
    let buttonUncheckedCnt = 0;
    allCheckBox.forEach((i) => {
        if (i.required && !i.checked) {
            requireButtonUncheckedCnt++;
            buttonUncheckedCnt++;
        } else if (!i.checked) {
            buttonUncheckedCnt++;
        }
    });

    if (requiredCheck && requireButtonUncheckedCnt == 0 || !requiredCheck && buttonUncheckedCnt == 0) {
        return true;
    } else {
        return false;
    }
}