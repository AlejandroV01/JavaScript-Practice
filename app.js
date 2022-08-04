const projects = [
    {
        id: 1,
      img: "/pictures/calculator.PNG",
      project: "Calculator",
      html: "Calculator/index.html"
    },
    {
        id: 2,
        img: "/pictures/clock.PNG",
        project: "Clock",
        html: "Clock/index.html"
    },
    {
        id: 3,
        img: "/pictures/expense-tracker.PNG",
        project: "Expense Tracker",
        html: "expense-tracker/index.html"
    },
    {
        id: 4,
        img: "/pictures/gradient-changer.PNG",
        project: "Gradient Changer",
        html: "gradientChanger/index.html"
    },
    {
        id: 5,
        img: "/pictures/pallete-changer.PNG",
        project: "Pallete Changer",
        html: "hexchanger/index.html"
    },
    {
        id: 5,
        img: "/pictures/lorem-ipsum.PNG",
        project: "Lorem Ipsum Generator",
        html: "lorem-ipsum/index.html"
    },
    {
        id: 6,
        img: "/pictures/stopwatch.PNG",
        project: "Stopwatch",
        html: "Stopwatch/index.html"
    },
    {
        id: 7,
        img: "/pictures/scroll-project.PNG",
        project: "Scroll Project",
        html: "sticky-nav/index.html"
    },
    {
        id: 8,
        img: "/pictures/catApi.PNG",
        project: "Cat API",
        html: "catAPI/index.html"
    },
    
  ];
const projectGrid = document.querySelector('.project-grid')
const preloader = document.querySelector('.preloader')
const title = document.querySelector('.title')

window.addEventListener('load', () => {
    preloader.classList.add('preloader-off')
    title.classList.add('title-on')
    const underline = document.querySelector('.underline');
    let displayGrid = projects.map(i => {
        return `<div class="project-div"><a href="${i.html}" target="_blank" class="project-link">
            <div class="project">
                <img src="${i.img}" alt="" class="image">
                <div class="project-name">${i.project}</div>
            </div>
        </a>
        </div>
        `
    })

    displayGrid = displayGrid.join('')
    projectGrid.innerHTML = displayGrid;

    underline.classList.add('underline-onload')

})

