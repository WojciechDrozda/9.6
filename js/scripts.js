let list = document.getElementById('list'),
	add = document.getElementById('addElem');
add.addEventListener('click', () => {
	var element = document.createElement('li')
	element.innerHTML = 'item ' + document.getElementsByTagName('li').length + '</li>';
	list.appendChild(element);
});