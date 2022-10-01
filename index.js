let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e)=>{

    cursor.style.top = `${e.pageY -4}px`; 
    cursor.style.left =`${e.pageX -4}px`; 


} )