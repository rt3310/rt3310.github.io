const goIntroduceBtn = document.getElementById('go-introduce');
const goSkillBtn = document.getElementById('go-skill');
const goExperienceBtn = document.getElementById('go-experience');
const goProjectBtn = document.getElementById('go-project');
const navCloseBtn = document.getElementById('nav-close');
const navOpenBtn = document.getElementById('nav-open');
const progressBar = document.getElementById('progress-bar');
const backgroundBar = document.getElementById('background-bar');
const main = document.getElementById('main');
const introduce = document.getElementById('introduce');

const introBoxOne = document.querySelector('.intro-box.one');
const introBoxTwo = document.querySelector('.intro-box.two');

goIntroduceBtn.addEventListener('click', ev => {
    scrollTo({ top: main.offsetHeight, behavior: 'smooth' });
});

goSkillBtn.addEventListener('click', ev => {
    scrollTo({ top: main.offsetHeight * 2, behavior: 'smooth' });
});

goExperienceBtn.addEventListener('click', ev => {
    scrollTo({ top: main.offsetHeight * 3, behavior: 'smooth' });
});

goProjectBtn.addEventListener('click', ev => {
    scrollTo({ top: main.offsetHeight * 4, behavior: 'smooth' });
});

navCloseBtn.addEventListener('click', ev => {
    main.classList.toggle('open');
});

navOpenBtn.addEventListener('click', ev => {
    main.classList.toggle('open');
});

window.addEventListener('scroll', ev => {
    if (document.documentElement.scrollTop > 5) {
        progressBar.style.display = 'block';
        backgroundBar.style.display = 'block';
    } else {
        progressBar.style.display = 'none';
        backgroundBar.style.display = 'none';
    }

    if (document.documentElement.scrollTop < main.offsetHeight / 2) {
        introBoxOne.style.left = `${((document.documentElement.scrollTop) / (main.offsetHeight / 2)) * 700 - 600}px`
        introBoxOne.style.opacity = `${((document.documentElement.scrollTop) / (main.offsetHeight / 2))}`
        introBoxTwo.style.right = `${((document.documentElement.scrollTop) / (main.offsetHeight / 2)) * 1300 - 600}px`
        introBoxTwo.style.opacity = `${((document.documentElement.scrollTop) / (main.offsetHeight / 2))}`
    } else {
        introBoxOne.style.left = `100px`;
        introBoxOne.style.opacity = `1`;
        introBoxTwo.style.right = `700px`;
        introBoxTwo.style.opacity = `1`;
    }
    progressBar.style.width = `${((document.documentElement.scrollTop + document.documentElement.offsetHeight) / document.documentElement.scrollHeight) * 100}%`;
})