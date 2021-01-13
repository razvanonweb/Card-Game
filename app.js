const play = document.querySelector("#play p");

// cards setup
const cards = {
  A: {
    number: "A",
    value: 14
  },
  K: {
    number: "K",
    value: 13
  },
  Q: {
    number: "Q",
    value: 12
  },
  J: {
    number: "J",
    value: 11
  },
  10: {
    number: "10",
    value: 10
  },
  9: {
    number: "9",
    value: 9
  },
  8: {
    number: "8",
    value: 8
  },
  7: {
    number: "7",
    value: 7
  },
  6: {
    number: "6",
    value: 6
  },
  5: {
    number: "5",
    value: 5
  },
  4: {
    number: "4",
    value: 4
  },
  3: {
    number: "3",
    value: 3
  },
  2: {
    number: "2",
    value: 2
  }
}

// count winner
let startCount = -1;

  function myCount() {
      startCount++;
      showCount.innerHTML = startCount;
  }

  myCount();

let startCount2 = -1;

  function myCount2() {
      startCount2++;
      showCount2.innerHTML = startCount2;
  }

  myCount2();


// click event to start the game 
play.addEventListener("click", ()=> {
 
  // ganerate the random simbol 
  function randomSuits(length) {
    let showS = '';
    const s = '♠♦♣♥'
    const sLen = s.length;
    for ( var i = 0; i < length; i++ ) {
        showS += s.charAt(Math.floor(Math.random() * sLen));
        if(showS === '♥' || showS === '♣') {
          box1.style.color = "red"
          box2.style.color = "black"
        } else if(showS === "♦"){
          box2.style.color = "red"
          box1.style.color = "black"
        } else {
          box2.style.color = "red"
        }
    }
    return showS;
  } 

// generate random numbers of const cards
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  function getRandom2(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  let random = getRandom(Object.values(cards));
  let random2 = getRandom2(Object.values(cards));

  // show on html page
  box1.innerHTML = `<p class="number1">${random.number}</p>
  <p class="number2">${random.number}</p>
  <p class="suits">${randomSuits(1)}</p>
  `;

  box2.innerHTML = `<p class="number1">${random2.number}</p>
  <p class="number2">${random2.number}</p>
  <p class="suits">${randomSuits(1)}</p>
  `;

  // show the winner 
  showWinner.style.display = "flex";
  box1.style.backgroundImage = "none"; 
  box2.style.backgroundImage = "none";


  // show who win the round
  if(random.value > random2.value) {
      showWinner.innerHTML = "Player 1 win!"
      myCount();      
  } else if(random2.value > random.value) {
      showWinner.innerHTML = "Player 2 win!"
      myCount2();
  } else {
      showWinner.innerHTML = "Draw!"
  }
 
})





    
 
