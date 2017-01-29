window.onload = () => {
  const previewButton = document.getElementById('previewButton');
  previewButton.onclick = previewHandler;
}

function previewHandler() {
  const canvas = document.getElementById('tshirtCanvas');
  const context = canvas.getContext('2d');
  fillBackgroundColor(canvas, context);

  const selectShapeObj = document.getElementById('shape');
  const selectIndex = selectShapeObj.selectedIndex;
  const shape = selectShapeObj[selectIndex].value;

  if (shape === 'squares') {
    // draw 20 squares
    for (let squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  }
}

function drawSquare(canvas, context) {
  const width = Math.floor(Math.random() * 40);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = 'lightblue';
  context.fillRect(x, y, width, width);
}

function fillBackgroundColor(canvas, context) {
  const selectColorObj = document.getElementById('backgroundColor');
  const index = selectColorObj.selectedIndex;
  const bgColor = selectColorObj.options[index].value;

  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}