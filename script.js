const restart = document.getElementById('restart');
const changeColor = document.getElementById('change-color');
const changeSize = document.getElementById('change-size');
const grid = document.querySelector('.grid');

let size = prompt('What is the size do you want the grid to be on both sides?');




function randomColor() {
    const colors = ['red','blue','yellow','green','purple','orange','pink','brown','gray'];
    return colors[Math.floor(Math.random() * colors.length)];
}




function makeGrid(size) { 

    while(size > 100 || isNaN(size)) {
        size = prompt('Please choose a number lower than 100 and a valid one!');
    }

    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        grid.appendChild(gridBox);
    }

    let gridBoxes = document.querySelectorAll('.gridBox');

    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', () => {
            gridBox.classList.add('active');
        })
    })



     changeColor.addEventListener('click', () => {
        let color = prompt('Choose a color or ranibow');
        if(color == 'rainbow') {
            gridBoxes.forEach((gridBox) => {
                gridBox.addEventListener('mouseover', () => {
                    gridBox.style.backgroundColor = randomColor();
                })
            })
        }else {
        gridBoxes.forEach((gridBox) => {
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = color;
            })
        })  
    }                  
     })  
     

     restart.addEventListener('click', () => {
        gridBoxes.forEach((gridBox) => {
            gridBox.classList.remove('active');
            gridBox.style.backgroundColor = 'white';
        })       
    })

}

    
changeSize.addEventListener('click', () => {
    window.location.reload();
})



makeGrid(size);