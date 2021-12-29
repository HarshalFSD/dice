const btn = document.getElementById('btn--play');

btn.addEventListener('click',function() {

    //  font changes
    document.querySelector('h1').style.fontFamily = `'Mina', 'sans-serif'`;
    // set image at player number 1;
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var imageSource1 = "images/dice" + randomNumber + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imageSource1);


    // set image at player number 2;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

    // Dont repeat code
    const repeatCode = function() {
        document.querySelector('h1').style.color = '#06FF00';
        document.querySelector("h1").innerHTML = "🏆⬅ player";
        document.querySelector('.play-1').style.color = 'green';
        document.querySelector('.play-1').style.fontSize = '3rem';
        document.querySelector('.play-2').style.fontSize = '2rem';
        document.querySelector('.play-2').style.color = 'red';
    }

    const repeatCode1 = function() {
        document.querySelector('h1').style.color = '#06FF00';
        document.querySelector("h1").innerHTML = "player ➡🏆";
        document.querySelector('.play-1').style.color = 'red';
        document.querySelector('.play-2').style.fontSize = '3rem';
        document.querySelector('.play-1').style.fontSize = '2rem';
        document.querySelector('.play-2').style.color = 'green';
    }

    // ckeck which player win the game!
    if(randomNumber > randomNumber2) {
        repeatCode();

    } else if(randomNumber2 > randomNumber) {
        repeatCode1();

    } else {
        document.querySelector("h1").innerHTML = "📍 Draw 📍";
        document.querySelector('h1').style.color = 'red';
        document.querySelector('.play-1').style.color = 'red';
        document.querySelector('.play-1').style.fontSize = '3rem';
        document.querySelector('.play-2').style.fontSize = '3rem';
        document.querySelector('.play-2').style.color = 'red';
    } 
    
    var audio = new Audio('images/0004526.mp3');
    audio.play();
})



