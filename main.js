
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert('Yowch! Don\'t click me so hard!');
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var compound = document.getElementById('compoundInvestment');
  compound.textContent = compound.textContent * 2;
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleBW = document.getElementById('circle-bw');
  if (circleBW.style.backgroundColor !== 'black') {
  	circleBW.style.backgroundColor = 'black';
  } else if (circleBW.style.backgroundColor = 'black') {
  	circleBW.style.backgroundColor = 'white';
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4
  var circle = document.getElementsByClassName('circle-red')[0];
  var width = parseInt(circle.style.width) || 40;
  var height = parseInt(circle.style.height) || 40;
  if (width >= 320) {
  	circle.style.width = 40 + 'px';
  	circle.style.height = 40 + 'px';
  } else {
	circle.style.width = width * 2 + 'px';
	circle.style.height = height * 2 + 'px';
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var listItems = document.getElementsByTagName('li');
  for (var i = listItems.length - 1; i >= 0; i--) {
  	if (listItems[i].className === 'inactive') {
  		listItems[i].parentElement.removeChild(listItems[i]);
  	}
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var square = document.getElementsByClassName('square');
  var squares = document.getElementById('squares');
  for (var i = square.length - 1; i >= 0; i--) {
  	squares.appendChild(squares.children[i]);
  }

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var taskListItem = document.getElementById('tasks').children;
  for (var i = 0; i < taskListItem.length; i++) {
  	taskListItem[i].innerHTML = taskListItem[i].innerHTML.split('').reverse().join('');
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var image = document.getElementById('city-img');
  var source = image.getAttribute('src');
  var sourceArr = source.split('');
  sourceArr[sourceArr.length - 1] = Math.floor((Math.random() * 10));
  var newSource = sourceArr.join('');
  image.setAttribute('src', newSource);
})







