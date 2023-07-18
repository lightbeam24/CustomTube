cbFunction();
document.addEventListener("yt-page-data-updated", cbFunction); 
function cbFunction() { 
	setTimeout(doNext, 50);
	setTimeout(doNext, 500);
	function doNext() {
		var ytdMasthead = document.querySelector("ytd-masthead");
		ytdMasthead.data.logo.topbarLogoRenderer.endpoint.browseEndpoint.browseId = "FEsubscriptions";
		ytdMasthead.data.logo.topbarLogoRenderer.endpoint.commandMetadata.webCommandMetadata.url = "/feed/subscriptions";
	}
}