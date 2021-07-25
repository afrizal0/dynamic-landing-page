const focus = document.getElementById('focus'),
	 	name = document.getElementById('name'),
		greeting = document.getElementById('greeting'),
		time = document.getElementById('time'),
		header = document.getElementById('header');

const showDate = () => {
	let today = new Date(), 
		hour = today.getHours(),
		min = today.getMinutes(),
		second = today.getSeconds();
		sys = (hour >= 0 && hour <= 12) ? 'AM' : 'PM';
		time.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(second)} ${sys}`;	
		setTimeout(showDate, 1000);
}

function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBg() {
	let today = new Date(),
		hour = today.getHours();
	if(hour < 12) {
		// Morning
		header.style.backgroundImage = "url('img/morning.jpg')";
		greeting.textContent = 'Good Morning';
		document.body.style.color = '#fff';
	} else if(hour < 18) {
		// Afternoon
		header.style.backgroundImage = "url('img/afternoon.jpg')";
		greeting.textContent = 'Good Afternoon';
	} else {
		// Evening
		header.style.backgroundImage = "url('img/night.jpg')";
		greeting.textContent = 'Good Evening';
		document.body.style.color = '#fff';
	}
}

function getName(){
	if(localStorage.getItem('name') === null) {
		name.textContent = '[Enter Name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}

function getFocus(){
	if(localStorage.getItem('focus') === null) {
		focus.textContent = '[Enter Focus]';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
}

function setName(e){
	if(e.type === 'keypress') {
		if(e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText)
	}
}

function setFocus(e) {
	if(e.type === 'keypress') {
		if(e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem('focus', e.target.innerText)
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showDate();
setBg();
getName();
getFocus();
