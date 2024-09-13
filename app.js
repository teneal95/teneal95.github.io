//Event listerner for scroll
// A testing comment
document.addEventListener('scroll', ()=>{
  const heading = document.querySelector('#headingContainer');
  const headingPos = heading.offsetTop;
  const scrollPos = window.pageYOffset;
  if(scrollPos > headingPos){
    heading.style.opacity = 0;
  }
  if(scrollPos < headingPos){
    heading.style.opacity = 1;
  }
});