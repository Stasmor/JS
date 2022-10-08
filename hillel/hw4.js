const action = prompt('Вкажіть дію(sum, diff, mult, div)');
const fstVal = +prompt('Вкажіть перше число',0);
const secVal = +prompt('Вкажіть друге число',0);

if(isFinite(fstVal) && isFinite(secVal)) //перевірка введених аргументів чи є вони числом
    switch(action){
        case "sum": alert(`Результатом обчислення ${fstVal} + ${secVal} = ${fstVal+secVal}`); break;
        case "diff": alert(`Результатом обчислення ${fstVal} - ${secVal} = ${fstVal-secVal}`); break;
        case "mult": alert(`Результатом обчислення ${fstVal} * ${secVal} = ${fstVal*secVal}`); break;
        case "div": alert(`Результатом обчислення ${fstVal} / ${secVal} = ${fstVal/secVal}`); break;
        default: alert('Дію не розпізнано, операцію відхилено');break;

    }
    else
        alert('число не розпізнано, операцію відхилено ')

document.getElementById('h1_id').textContent = 'Now we made Calc ;-)))';