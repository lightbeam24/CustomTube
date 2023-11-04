document.addEventListener("yt-page-data-updated", delayedResize); 
var loopThroughResize = setInterval(function() {
	if (document.querySelector("html[location='watch'] ytd-watch-flexy:not([fullscreen]):not([theater]):not([cinema]) #movie_player") != null) {
		doResize();
	}
}, 10000);
setTimeout(loopThroughResize, 100);
window.addEventListener('resize', () => {
	let repeatInsert = setInterval(() => {
		doResize();
	}, 500);
	setTimeout(() => {
		clearInterval(repeatInsert);
	}, 2000);
});
function delayedResize() {
	console.log("delayedResize");
	setTimeout(doResize, 1000);
	setTimeout(doResize, 2500);
}
function doResize() {
    var player = document.querySelector('#movie_player');
	var offset = document.querySelector("html").getAttribute('player-offset');
	var width = document.querySelector("html").getAttribute('player-width');
	width = parseInt(width);
	offset = parseInt(offset);
	width = width + offset;
	var height = document.querySelector("html").getAttribute('player-height');
	player.setInternalSize(width, height);
}