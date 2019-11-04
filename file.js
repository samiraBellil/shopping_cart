let buttom_heart = document.querySelectorAll('.fa-heart')
let button_x = document.querySelectorAll('.fa-times')
let button_plus = document.querySelectorAll('.fa-plus-circle')
let button_moins = document.querySelectorAll('.fa-minus-circle')
let button_p = document.querySelectorAll('.nombre')
let total = document.querySelector('.total')
console.log(parseFloat(total.innerHTML) + 2)


//button_x
for (let i = 0; i < button_x.length; i++) {
    button_x[i].addEventListener('click', function (){
        if(parseFloat(button_p[i].innerHTML) > 0 || buttom_heart[i].style.color === 'red'){
            alert('Product quantity must be 0 or Dislike it')
        }else{
            button_x[i].parentElement.parentElement.remove();
        }
    })
}

//buttom_heart
for (let i = 0; i < buttom_heart.length; i++) {
    buttom_heart[i].addEventListener('click', function () {
        if (buttom_heart[i].style.color === 'red')
            buttom_heart[i].style.color = 'black';
        else buttom_heart[i].style.color = "red";
    })
}

//button_plus
for (let i = 0; i < button_plus.length; i++) {
    button_plus[i].addEventListener('click', function () {
        button_plus[i].nextElementSibling.innerHTML++;
        total.innerHTML = parseFloat(total.innerHTML) + parseFloat(button_plus[i].parentElement.nextElementSibling.innerHTML)
    })
}
//button_moins
for (let i = 0; i < button_moins.length; i++) {
    button_moins[i].addEventListener('click', function () {
        if (button_moins[i].previousElementSibling.innerHTML > 0)
            button_moins[i].previousElementSibling.innerHTML--
            if(parseFloat(total.innerHTML) > 0){
                total.innerHTML = parseFloat(total.innerHTML) - parseFloat(button_plus[i].parentElement.nextElementSibling.innerHTML)
            }

    })
}







/* 2nd solution for looping the array
buttom_heart.forEach(heart => {
    heart.addEventListener('click', function(){
        if(heart.style.color === 'red') 
            heart.style.color = 'black';
        else heart.style.color = "red";
    })
}); */
