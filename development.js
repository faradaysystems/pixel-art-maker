// Select color input
function selectColor() {
    let colorNow = document.getElementById('colorPicker').value;
    return colorNow;
  }
  
  //Function to convert hex format to a rgb color to compare the backgrounds later
  function rgb2hex(rgb) {
    rgb = rgb.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgb && rgb.length === 4
      ? '#' +
          ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
          ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
          ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
      : '';
  }
  
  function clickSubmit() {
    let bckgroundColor = this.style.backgroundColor;
  
    if (!this.style.backgroundColor || this.style.backgroundColor === 'initial') {
      this.style.backgroundColor = selectColor();
    } else if (
      rgb2hex(bckgroundColor) !== document.getElementById('colorPicker').value
    ) {
      this.style.backgroundColor = selectColor();
    } else {
      this.style.backgroundColor = 'initial';
    }
  }
  
  //reset function
  function reset() {
    document.getElementById('pixelCanvas').innerHTML = '';
  }
  
  // When size is submitted by the user, call makeGrid()
  function makeGrid() {
    reset();
    //Firstly, I will call HTML to retrieve the element.
    let table = document.getElementById('pixelCanvas');
    let rowNumber = document.getElementById('inputHeight').value;
    let cellNumber = document.getElementById('inputWidth').value;
  
    //Now, I will define the rows and cells for the above mentioned table.
    for (let i = 0; i < rowNumber; i++) {
      let myRow = document.createElement('tr');
      myRow.id = 'row' + i;
  
      table.appendChild(myRow);
      let rowElement = document.getElementById('row' + i);
  
      for (let j = 0; j < cellNumber; j++) {
        let myCell = document.createElement('td');
        rowElement.appendChild(myCell);
      }
    }
    //add eventListener on every cell
    document
      .querySelectorAll('#pixelCanvas td')
      .forEach((e) => e.addEventListener('click', clickSubmit));
  }
  