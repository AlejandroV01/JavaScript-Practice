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
        img: "/pictures/pallete-changer.PNG",
        project: "Pallete Changer",
        html: "hexchanger/index.html"
    },
    {
        id: 5,
        img: "/pictures/pallete-changer.PNG",
        project: "Pallete Changer",
        html: "hexchanger/index.html"
    },
    
  ];
const projectGrid = document.querySelector('.project-grid')

window.addEventListener('load', () => {
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

