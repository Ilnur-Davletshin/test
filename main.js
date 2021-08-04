let number = document.getElementById('number'),
    submit1 = document.getElementById('submit1');

submit1.addEventListener('click', ()=>{
    if (number.value > 7){
    alert('Привет');
}
}); 

let name = document.getElementById('enterName'),
    submit2 = document.getElementById('submit2');

submit2.addEventListener('click', ()=>{
    const name = enterName.value.toLowerCase();
    if (name === 'вячеслав'){
    alert('Привет, Вячеслав');
}
else alert('Нет такого имени');
});
    

    let numberMass = document.getElementById('numMass'),
        submit3 = document.getElementById('submit3');
        
    submit3.addEventListener('click', function(){
        let arr = numberMass.value.split(' '),
        modArr = [];
        
        arr.map(function(num) {
            if (num % 3 == 0){
                modArr.push(' ' + num);
            }
        });
        
        alert (`Кратны "3": ${modArr}`);
    });

const changeHandler = e => {
    const value = e.value
    e.value = value.replace(/\D/g,'')
}