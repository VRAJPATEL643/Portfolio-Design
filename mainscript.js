const login = document.querySelector('.login')
const  registration_link= document.querySelector('.registration-link')
const  login_link = document.querySelector('.login-link')
const login_btn = document.querySelector('.btn')
const closeicon = document.querySelector('.icon-con')

registration_link.addEventListener('click',()=> {
    login.classList.add('active');
});
login_link.addEventListener('click',()=> {
    login.classList.remove('active');
    });
login_btn.addEventListener('click',()=> {
    login.classList.add('active-popup');
 });
 
 closeicon.addEventListener('click',()=> {
    login.classList.remove('active-popup');
 });



 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');

 window.onscroll = () => {
    sections.forEach(sec => {
         let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset & top < offset + height)
        {
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[herf='  + id + ']').classList.add('active');
            });
        };
    });
       
 };