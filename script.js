


const profileMenu = document.getElementById('profileMenu');
const profileBtn = document.querySelector('.profile-btn');



profileBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    profileMenu.classList.toggle('open');
});

//open sidebar activity

let sidebarActivity = document.getElementById('sidebar-activity');
let moreLink = document.getElementById('showMoreLink');


moreLink.addEventListener('click',()=>{
    sidebarActivity.classList.toggle('open-activity');
    if(sidebarActivity.classList.contains('open-activity')){
        moreLink.innerHTML = 'Show less <b>-</b>';
    }else{
        moreLink.innerHTML = 'Show more <b>+</b>';
    }
})