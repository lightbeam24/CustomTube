document.addEventListener("yt-page-data-updated", cbFunction); 
function cbFunction() { 
	var getYtdData = document.querySelector("ytd-app").data; 
	if (document.querySelector("html[layout^='stargazer']") != null) {
		do2000sButtons();
	}
	if (document.querySelector("html[layout^='cosmicpanda']") != null) {
		do2012Buttons();
	}
	if (getYtdData.page == "watch") {
		setTimeout(cbFunction, 5000);
		watchPageEveryLoad();
	}
	storeData();
	function storeData() {
		sessionStorage.setItem("ytd-app-data", JSON.stringify(getYtdData));
	}
}
function watchPageEveryLoad() {
	var data = document.querySelector("ytd-app").data;
	let secondary = data.response.contents.twoColumnWatchNextResults.results.results.contents;
	if (secondary[1].videoSecondaryInfoRenderer != null) {
		secondary = secondary[1].videoSecondaryInfoRenderer;
	} else {
		secondary = secondary[2].videoSecondaryInfoRenderer;
	}
	let ownerNav = secondary.owner.videoOwnerRenderer.navigationEndpoint;
	let ownerId = ownerNav.browseEndpoint.browseId;
	let ownerUrl = "https://www.youtube.com/channel/" + ownerId;
	if (document.querySelector("html[layout] #bt-desc-upload-date #author-text") != null) {
		let navData = {
		clickTrackingParams: "CJgDEOE5IhMI7Ke_y_nOgwMVtf0WCR2SdQuj",
		commandMetadata: {
			webCommandMetadata: {
			  url: ownerUrl,
			  webPageType: "WEB_PAGE_TYPE_CHANNEL",
			  rootVe: 9662,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: ownerId,
			canonicalBaseUrl: ownerUrl
		  }
		}
		document.querySelector("#bt-desc-upload-date #author-text").data = navData;
		document.querySelector("#bt-desc-upload-date #author-text").setAttribute("href","https://www.youtube.com/channel/" + ownerId);
	} else if (document.querySelector("html[layout] #bt-desc-upload-date #author-text") == null) {
		setTimeout(watchPageEveryLoad, 1500);
	}
}
function do2000sButtons() {
	if (document.querySelector("#bt-home-link") != null) {
		let homeData = {
		clickTrackingParams: "CJgDEOE5IhMI7Ke_y_nOgwMVtf0WCR2SdQuj",
		commandMetadata: {
			webCommandMetadata: {
			  url: "/",
			  webPageType: "WEB_PAGE_TYPE_BROWSE",
			  rootVe: 9663,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: "FEwhat_to_watch"
		  }
		}
		document.querySelector("#bt-home-link").data = homeData;
	} else if (document.querySelector("#bt-home-link") == null) {
		setTimeout(do2000sButtons, 1500);
	}
	if (document.querySelector("#bt-videos-link") != null) {
		let videosData = {
		clickTrackingParams: "CJgDEOE5IhMI7Ke_y_nOgwMVtf0WCR2SdQuj",
		commandMetadata: {
			webCommandMetadata: {
			  url: "/feed/subscriptions",
			  webPageType: "WEB_PAGE_TYPE_BROWSE",
			  rootVe: 9664,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: "FEsubscriptions"
		  }
		}
		document.querySelector("#bt-videos-link").data = videosData;
	}
	if (document.querySelector("#bt-channels-link") != null) {
		let channelsData = {
		commandMetadata: {
			webCommandMetadata: {
			  url: "/feed/guide_builder",
			  webPageType: "WEB_PAGE_TYPE_BROWSE",
			  rootVe: 9665,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: "FEguide_builder"
		  }
		}
		document.querySelector("#bt-channels-link").data = channelsData;
	}
	if (document.querySelector("#bt-shows-link") != null) {
		let showsData = {
		commandMetadata: {
			webCommandMetadata: {
			  url: "/feed/storefront",
			  webPageType: "WEB_PAGE_TYPE_BROWSE",
			  rootVe: 9666,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: "FEstorefront"
		  }
		}
		document.querySelector("#bt-shows-link").data = showsData;
	}
	if (document.querySelector("#bt-subs-link") != null) {
		let subsData = {
		commandMetadata: {
			webCommandMetadata: {
			  url: "/feed/subscriptions",
			  webPageType: "WEB_PAGE_TYPE_BROWSE",
			  rootVe: 9667,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: "FEsubscriptions"
		  }
		}
		document.querySelector("#bt-subs-link").data = subsData;
	}
	if (document.querySelector("#bt-history-link") != null) {
		let historyData = {
		commandMetadata: {
			webCommandMetadata: {
			  url: "/feed/history",
			  webPageType: "WEB_PAGE_TYPE_BROWSE",
			  rootVe: 9668,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: "FEhistory"
		  }
		}
		document.querySelector("#bt-history-link").data = historyData;
	}
	if (document.querySelector("#bt-community-link") != null) {
		let comData = {
		commandMetadata: {
			webCommandMetadata: {
			  url: "/feed/you",
			  webPageType: "WEB_PAGE_TYPE_BROWSE",
			  rootVe: 9669,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: "FElibrary"
		  }
		}
		document.querySelector("#bt-community-link").data = comData;
	}
}
function do2012Buttons() {
	if (document.querySelector("#browse-chan") != null) {
		let channelData = {
		commandMetadata: {
			webCommandMetadata: {
			  url: "/feed/guide_builder",
			  webPageType: "WEB_PAGE_TYPE_BROWSE",
			  rootVe: 9661,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: "FEguide_builder"
		  }
		}
		document.querySelector("#browse-chan").data = channelData;
	} else if (document.querySelector("#browse-chan") == null) {
		setTimeout(do2012Buttons, 1500);
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