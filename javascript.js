const abg = document.querySelector('.abg');
const navs = document.querySelector('.navs');
const abgm = document.querySelector('.abgm');
const btnsm = document.querySelector('.btnsm');
count = 1;

abg.addEventListener('click', () => {
  numpi = count++;
  console.log(numpi)
  if (numpi%2 != 0) {
    navs.style.display='none'  
  } else {
    navs.style.display='block'
  }
});

btnsm.addEventListener('click', () => {
  console.log("star")
  numpi = count++;
  console.log(numpi)
  if (numpi%2 != 0) {
    abgm.style.display='block'
  } else {
    abgm.style.display='none' 
  }
});
