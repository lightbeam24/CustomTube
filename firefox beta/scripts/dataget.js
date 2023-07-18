document.addEventListener("yt-page-data-updated", cbFunction); 
function cbFunction() { 
	var getYtdData = document.querySelector("ytd-app").data; 
	if (getYtdData.page == "watch") {
		setTimeout(cbFunction, 5000);
	}
	storeData();
	function storeData() {
		sessionStorage.setItem("ytd-app-data", JSON.stringify(getYtdData));
	}
}
/*
setInterval (
	var liveCount = document.querySelector("ytd-app").data.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.viewCount.simpleText;
	storeData();
	function storeData() {
		sessionStorage.setItem("ytd-live-views", JSON.stringify(liveCount));
	}
)
*/