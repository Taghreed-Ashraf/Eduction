const counts = document.querySelectorAll(".itemcount");
let started = false;

window.addEventListener('scroll' , ()=> {
  if(window.scrollY > 50)
  {
    if(!started) {
      counts.forEach(count => {
        setCount(count)
      });
    }
    started = true;
  }
})


function setCount(el){
  let goal = el.dataset.goal;
  let counter = setInterval(()=>{
    el.innerHTML++;
    if(goal == el.innerHTML ) {
      clearInterval(counter)
    }
  },4000 / goal)
}

