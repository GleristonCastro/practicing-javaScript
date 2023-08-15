const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollDirectionY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if(scrollDirectionY > sectionTop && scrollDirectionY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);