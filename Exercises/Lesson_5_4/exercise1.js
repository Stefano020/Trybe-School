window.onload = function(){
  
  let backgroundColor = document.getElementById('background-color');
  let backgroundButton = document.getElementById('background-color-button');
  backgroundButton.addEventListener('click', function(){
    document.body.style.backgroundColor = `${backgroundColor.value}`;
    let color = backgroundColor.value;
    localStorage.setItem('backColor',color);
  });
  if(localStorage.backColor != undefined){
    document.body.style.backgroundColor = localStorage.backColor;
  }
}

  // let backgroundColor = document.getElementById('background-color');
  // let backgroundButton = document.getElementById('background-color-button');
  // backgroundButton.addEventListener('click', function(){
  //   document.body.style.backgroundColor = `${backgroundColor.value}`;
  //   let color = backgroundColor.value;
  //   localStorage.setItem('backColor',color);
  // });
  // if(localStorage.backColor != undefined){
  //   document.body.style.backgroundColor = localStorage.backColor;
  // }

  