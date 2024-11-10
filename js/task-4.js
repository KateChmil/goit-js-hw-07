
//1відправлення форми form.login-form повинна відбуватися за подією submit.
//2Під час відправлення форми сторінка не повинна перезавантажуватися.
//3Якщо при сабміті у формі є незаповнені поля,
  //  виводь alert з попередженням про те, що 'All form fields must be filled in'.
//4Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
//5Якщо користувач заповнив усі поля і відправив форму,
 //   збери значення полів в об'єкт з двома властивостями,
 //    де ключ — це ім'я інпутів,
 //    а значення — відповідні значення цих інпутів,
 //   очищені від пробілів по краях.
 //   Для доступу до елементів форми використовуй властивість elements.
//При сабміті форми виведи об'єкт із введеними даними в консоль
 //і очисти значення полів форми методом reset.

 
const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const email = form.elements.email;
    const password = form.elements.password;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    

    if (!emailValue || !passwordValue) {
        console.log("All form fields must be filled in")
    } else {
  
        const formInfo = {
            email: emailValue,
            password: passwordValue,
        }
        console.log(formInfo);
    }
        

    form.reset();

});




const email = form.elements.email;

const password = form.elements.password;
function changePlaceholderOnFocus(event) {
  event.target.placeholder = "Type area"; 
}

email.addEventListener("focus", changePlaceholderOnFocus);
password.addEventListener("focus", changePlaceholderOnFocus);


function resetPlaceholderOnBlur(event) {
  event.target.placeholder = ""; 
}
email.addEventListener("blur", resetPlaceholderOnBlur);
password.addEventListener("blur", resetPlaceholderOnBlur);