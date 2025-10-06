function createLantern() {
  const lantern = document.createElement("div");
  lantern.classList.add("lantern");
  lantern.style.left = Math.random() * 100 + "vw";
  lantern.style.animationDuration = 6 + Math.random() * 5 + "s";
  document.body.appendChild(lantern);
  setTimeout(() => lantern.remove(), 10000);
}

const Greet = [
  "🌕 Happy Mid-Autumn Festival!",
  "🎉 Chúc Tết Trung Thu vui vẻ!",
  "🌸 Wishing you happiness & light!",
  "🧧 Moonlight blessings!",
  "🏮 Lanterns of joy to you!"
];
const count = 100;
for(let i = 0;i < count; i++ ){
 const Star = document.createElement("div");
 Star.classList.add("star");
 Star.style.left = Math.random() * 100 + "vw";
 Star.style.top = Math.random() * 100 + "vh";
 Star.style.height = Star.style.width = (Math.random() * 3 +1) + "px";
 document.body.appendChild(Star);
 
Star.addEventListener("click", (e) => {
    showGreeting(e.pageX, e.pageY);
    Star.style.opacity = 0.4;
    Star.style.transform = "scale(1.6)";
    setTimeout(() => {
      Star.style.opacity = 0.8;
      Star.style.transform = "scale(1)";
    }, 600);
  });

  document.body.appendChild(Star);

}
// Function to show greeting message at position
function showGreeting(x, y) {
  const greet = document.createElement("div");
  greet.classList.add("Greet");
  greet.textContent = Greet[Math.floor(Math.random() * Greet.length)];
  greet.style.left = x + "px";
  greet.style.top = y + "px";
  document.body.appendChild(greet);

  // small delay to trigger transition
  setTimeout(() => greet.classList.add("show"), 50);

  // remove after few seconds
  setTimeout(() => {
    greet.classList.remove("show");
    setTimeout(() => greet.remove(), 600);
  }, 3000);
} 

setInterval(createLantern, 500);
document.addEventListener('DOMContentLoaded', () => {
  const clickTarget = document.getElementById('clickmoon');
  const hiddenContent = document.getElementById('hiddenContent');

  clickTarget.addEventListener('click', () => {
    // Toggle the 'display' property
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block'; // or 'flex', 'grid', etc., depending on desired layout
    } else {
      hiddenContent.style.display = 'none';
    }
  });
})
document.addEventListener('DOMContentLoaded', ()=> {
        const clickGreet = document.getElementById('clicklatern1');
        const hiddenGreet = document.getElementById('hiddengreet3');

        clickGreet.addEventListener('click', () => {
            if (hiddenGreet.style.display == 'none' || hiddenGreet.style.display ==''){
                hiddenGreet.style.display = 'block';

            }
            else{
                hiddenGreet.style.display = 'none';
            }
        })
})
/*
document.addEventListener('DOMContentLoaded', ()=> {
        const clickGreet2 = document.getElementById('clicklatern2');
        const hiddenGreet2 = document.getElementById('hiddengreet2');

        clickGreet2.addEventListener('click', () => {
            if (hiddenGreet2.style.display == 'none' || hiddenGreet2.style.display ==''){
                hiddenGreet2.style.display = 'block';

            }
            else{
                hiddenGreet2.style.display = 'none';
            }
        })
})
document.addEventListener('DOMContentLoaded', ()=> {
        const clickGreet3 = document.getElementById('clicklatern3');
        const hiddenGreet3 = document.getElementById('hiddengreet3');

        clickGreet3.addEventListener('click', () => {
            if (hiddenGreet3.style.display == 'none' || hiddenGreet3.style.display ==''){
                hiddenGreet3.style.display = 'block';

            }
            else{
                hiddenGreet3.style.display = 'none';
            }
        })
})
document.addEventListener('DOMContentLoaded', ()=> {
        const clickGreet4 = document.getElementById('clicklatern4');
        const hiddenGreet4 = document.getElementById('hiddengreet4');

        clickGreet4.addEventListener('click', () => {
            if (hiddenGreet4.style.display == 'none' || hiddenGreet4.style.display ==''){
                hiddenGreet4.style.display = 'block';

            }
            else{
                hiddenGreet4.style.display = 'none';
            }
        })
})
        */

