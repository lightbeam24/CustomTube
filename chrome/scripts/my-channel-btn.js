var finished = false;
var urlVar = "placeholder";
if (finished != true) {
	if (document.querySelector("html[my-channel-btn='true']") != null) {
		var YVData = document.querySelector("ytd-guide-section-renderer:nth-child(1) ytd-guide-collapsible-section-entry-renderer ytd-guide-entry-renderer:nth-child(2)").data;
		document.querySelector("#bt-my-channel-button").data = YVData;
		var urlVarTemp = document.querySelector("#bt-my-channel-button").data.navigationEndpoint.urlEndpoint;
		if (urlVar == "placeholder") {
			urlVar = urlVarTemp;
		}
		var cutString = JSON.stringify(urlVar).split('l/');
		var theString = cutString[1];
		var cutString1 = theString.split('/');
		var theString1 = cutString1[0];
		console.log(theString1);
		sessionStorage.setItem("nebula-channel-url", theString1);
		var chanUrl = sessionStorage.getItem("nebula-channel-url");
		document.querySelector("#bt-my-channel-button").data.navigationEndpoint.browseEndpoint = { browseId: chanUrl };
		//document.querySelector("#bt-my-channel-button").data.trackingParams = "BeamTubeButtonOne";
		document.querySelector("ytd-guide-section-renderer ytd-guide-entry-renderer:not(#bt-my-channel-button)").data.navigationEndpoint.browseEndpoint.browseId = "FEwhat_to_watch";
		document.querySelector("#bt-my-channel-button").data.navigationEndpoint.browseEndpoint.canonicalBaseUrl = undefined;
		document.querySelector("#bt-my-channel-button").data.formattedTitle.simpleText = "My Channel";
		document.querySelector("#bt-my-channel-button").data.icon.iconType = "ACCOUNT_BOX";
		document.querySelector("#bt-my-channel-button").data.navigationEndpoint.commandMetadata.webCommandMetadata.rootVe = 3611;
		document.querySelector("#bt-my-channel-button").data.navigationEndpoint.commandMetadata.webCommandMetadata.url = "/channel/" + theString1;
		document.querySelector("#bt-my-channel-button").data.navigationEndpoint.commandMetadata.webCommandMetadata.webPageType = "WEB_PAGE_TYPE_CHANNEL";
		document.querySelector("#bt-my-channel-button").data.navigationEndpoint.urlEndpoint = undefined;
		setTimeout(redFunct, 10);
		function redFunct() {
			if (document.querySelector("html[my-channel-btn='true']") != null) {
				var cCase = sessionStorage.getItem("lowerCaseC");
				document.querySelector("html").setAttribute("my-channel-btn", "true");
				if (cCase == "false") {
					document.querySelector("#bt-my-channel-button yt-formatted-string").innerText = "My Channel";
					document.querySelector("#bt-my-channel-button #endpoint").title = "My Channel";
				}
				if (cCase == "true") {
					document.querySelector("#bt-my-channel-button yt-formatted-string").innerText = "My channel";
					document.querySelector("#bt-my-channel-button #endpoint").title = "My channel";
				}
			}
				//document.querySelector("#bt-your-vids-button").remove();
			else {
				document.querySelector("#bt-my-channel-button").remove();
			}
					sessionStorage.setItem("nebula-done-my-channel", "true");
		}
		finished == true;
	}
}