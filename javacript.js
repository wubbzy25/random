var si = document.getElementById("si");
 var no = document.getElementById("no")


si.addEventListener('click', function(){
	alert("Espera? Dijistes que si? aaaaaaaa no pense que llegaria a este momento, pense que eliguiras no :). tal vez solo estas jugando conmigo o te dio curiosidad lo que decia en si, si seguramente es eso :(")
});

const LIMIT_X = 300;
const LIMIT_Y = 200;
window.addEventListener("load", ()=>{
  const btn = document.querySelector('.joker');
  
  btn.addEventListener('click', ()=>{
    alert('Has hecho trampas');
  });
  btn.addEventListener('mouseover', moveButton);
  
  function moveButton(e){
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    let newX, newY;
    do {
      newX = Math.random() * LIMIT_X;
      newY = Math.random() * LIMIT_Y;
      
    } while(isMouseOverButton(mouseX, mouseY, newX, newY));
    btn.style.top= newY + "px";
    btn.style.left= newX + "px";
  }
  
  function isMouseOverButton(mX,mY, x, y) {
    const rect = btn.getBoundingClientRect();
    const conflict = (mX > x && mY < (x + rect.width) &&
        mY > y && mY < (y + rect.height));
    if (conflict) { console.log("Habrá que mover de nuevo"); }
    return conflict;
  }
});