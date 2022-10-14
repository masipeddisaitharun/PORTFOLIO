let nav1=document.querySelector('.navbar');
const onScroll=(){
    const scroll=document.documentElement.scrollTop
    if(scroll>20)
    {
        nav1.classList.add("sticky");
    }
    else{
        nav1.classList.remove("sticky");
    }
}
window.addEventListener('scroll',onScroll)