var loopThroughResize = setInterval(function() {
	if (document.querySelector("html[location='watch'] ytd-watch-flexy:not([fullscreen]):not([theater]):not([cinema]) #movie_player") != null) {
		var player = document.querySelector('#movie_player');
		//var width = document.body.getAttribute('redux-player-width');
		//var height = document.body.getAttribute('redux-player-height');
		var offset = document.querySelector("html").getAttribute('player-offset');
		var width = document.querySelector("html").getAttribute('player-width');
		width = parseInt(width);
		offset = parseInt(offset);
		width = width + offset;
		var height = document.querySelector("html").getAttribute('player-height');
		player.setInternalSize(width, height);
	}
}, 5000);
setTimeout(loopThroughResize, 100);
window.addEventListener('resize', () => {
	let repeatInsert = setInterval(() => { //insert in loop for X seconds to prevent YT from overriding
		var player = document.querySelector('#movie_player');
		//var width = document.body.getAttribute('redux-player-width');
		//var height = document.body.getAttribute('redux-player-height');
		var offset = document.querySelector("html").getAttribute('player-offset');
		var width = document.querySelector("html").getAttribute('player-width');
		width = parseInt(width);
		offset = parseInt(offset);
		width = width + offset;
		var height = document.querySelector("html").getAttribute('player-height');
		player.setInternalSize(width, height);
	}, 500);
	setTimeout(() => {
		clearInterval(repeatInsert);
	}, 2000);
});