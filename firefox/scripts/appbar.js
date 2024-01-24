document.addEventListener("yt-page-data-updated", doAppbarPrep);
var $ = a => document.querySelector(a);
var canGo = false;

function timeout(durationMs) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve();
		}, durationMs);
	});
}
async function waitForElement(elm) {
	while (null == document.querySelector(elm)) {
		await new Promise(r => requestAnimationFrame(r));
	}
	await timeout(50).then(function() {
		canGo = true;
		return document.querySelector(elm);
	});
}
function doAppbarPrep() {
	if ($("#bt-appbar-multistate") != null) {
		doAppbar();
	} else {
		var elm = "#bt-appbar-multistate";
		waitForElement(elm).then(function(elm) {
			if (canGo != false) {
				doAppbar();
			}
		});
	}
}
function doAppbar() {
	var data = $("ytd-app").data;
	var dataurl = data.url;
	console.log(data);
	if ($("#appbar-feed-links .appbar-link[active]") != null) {
		$("#appbar-feed-links .appbar-link[active]").removeAttribute("active");
	}
	if (data.url == "/") {
		setPage("home");
	} else if (data.url == "/feed/subscriptions") {
		setPage("subscriptions");
	} else if (dataurl.includes("/feed/trending")) {
		setPage("trending");
	} else if (data.page == "watch") {
		setPage("watch");
		// NOTE: Some appbar watch links are handled in dataget.js to avoid an unnecessary extra API request every time the watch page is loaded.
		doWatchLinks(data);
	} else if (data.page == "channel") {
		setPage("channel");
		doChannelLinks(data);
	} else {
		setPage("feed");
	}
	if ($("#appbar-home[seasoned]") == null) {
		seasonLinks(data);
	}
	if ($('#bt-appbar-videos-dropdown #js-destination') != null) {
		$('#bt-appbar-videos-dropdown #js-destination').innerHTML = ``;
	}
	if ($('#bt-videos-dropdown #js-destination') != null) {
		$('#bt-videos-dropdown #js-destination').innerHTML = ``;
	}
	if ($("[appbar-videos-dropdown-visible]") != null) {
		$("html").removeAttribute("appbar-videos-dropdown-visible");
		$("#bt-appbar-videos-dropdown").scrollTo({
		  top: 0,
		  left: 0,
		  behavior: "smooth",
		});
	}
	if ($("[videos-dropdown-visible]") != null) {
		$("html").removeAttribute("videos-dropdown-visible");
	}
	if ($("#videos-dd-slider") != null) {
		$("#videos-dd").setAttribute("current-slide","0");
		$("#videos-dd").setAttribute("max-slides","0");
		if ($(".videos-dd-pagination-button[active]") != null) {
			$(".videos-dd-pagination-button[active]").removeAttribute("active");
		}
		if ($("#videos-dd-button[active]") != null) {
			$("#videos-dd-button[active]").removeAttribute("active");
		}
		if ($("#videos-dd-right") != null) {
			$("#videos-dd-right").setAttribute("disabled","");
		}
		if ($("#videos-dd-left") != null) {
			$("#videos-dd-left").setAttribute("disabled","");
		}
		$("#videos-dd-0").setAttribute("active","");
	}
}
var elm = "#appbarFlashPoint";
waitForElement(elm).then(function(elm) {
	if (canGo != false) {
		var target = document.querySelector('#appbarFlashPoint');

		document.addEventListener('scroll', () => {
		  if (window.scrollY >= target.getBoundingClientRect().top) {
			  appbarPosition("visible");
		  } else {
			appbarPosition("hidden");
			if (
			$("[appbar-videos-dropdown-visible]") != null &&
			$("[appbar-pinned]") == null
			) {
				$("html").removeAttribute("appbar-videos-dropdown-visible");
			}
		  }
		})	
		$("#bt-appbar-pin").addEventListener('click', () => {
			if ($("html[static-scrolling]") == null) {
				$("html").toggleAttribute("appbar-pinned");
			}
		})	
		$("#appbar-watch-current-vid").addEventListener('click', () => {
			window.scrollTo({
			  top: 0,
			  left: 0,
			  behavior: "smooth",
			});
		})	
		$("#appbar-channel-home-pfp").addEventListener('click', () => {
			window.scrollTo({
			  top: 0,
			  left: 0,
			  behavior: "smooth",
			});
		})	
		$("#appbar-watch-videos-dd-btn").addEventListener('click', () => {
			$("html").toggleAttribute("appbar-videos-dropdown-visible");
		})
		$("#appbar-dropdown-close").addEventListener('click', () => {
			if ($("html[appbar-videos-dropdown-visible]") != null) {
				$("html").removeAttribute("appbar-videos-dropdown-visible");
			}
		})
		$("#appbar-dropdown-close-2").addEventListener('click', () => {
			if ($("html[appbar-videos-dropdown-visible]") != null) {
				$("html").removeAttribute("appbar-videos-dropdown-visible");
			}
		})
	}
});
var elm = "#bt-videos-dropdown-button";
waitForElement(elm).then(function(elm) {
	if (canGo != false) {
		$("#bt-videos-dropdown-button a").addEventListener('click', () => {
			$("html").toggleAttribute("videos-dropdown-visible");
			$("#videos-dd-button").toggleAttribute("active");
		})
	}
});
var elm = "#bt-videos-dropdown";
waitForElement(elm).then(function(elm) {
	if (canGo != false) {
		$("#videos-dd-right a").addEventListener('click', () => {
			var curSlide = $("#videos-dd").getAttribute("current-slide");
			var maxSlides = $("#videos-dd").getAttribute("max-slides");
			if (
			curSlide == "0" &&
			maxSlides != "0"
			) {
				setDDPage("1");
			} else if (
			curSlide == "1" &&
			maxSlides != "1"
			) {
				setDDPage("2");
			} else if (
			curSlide == "2" &&
			maxSlides != "2"
			) {
				setDDPage("3");
			} else if (
			curSlide == "3" &&
			maxSlides != "3"
			) {
				setDDPage("4");
			}
		});
		$("#videos-dd-left a").addEventListener('click', () => {
			var curSlide = $("#videos-dd").getAttribute("current-slide");
			var maxSlides = $("#videos-dd").getAttribute("max-slides");
			if (
			curSlide == "0"
			) {
				setDDPage("0");
			} else if (
			curSlide == "1"
			) {
				setDDPage("0");
			} else if (
			curSlide == "2"
			) {
				setDDPage("1");
			} else if (
			curSlide == "3"
			) {
				setDDPage("2");
			} else if (
			curSlide == "4"
			) {
				setDDPage("3");
			}
		});
		$("#videos-dd-0 a").addEventListener('click', () => {
			setDDPage("0");
		});
		$("#videos-dd-1 a").addEventListener('click', () => {
			setDDPage("1");
		});
		$("#videos-dd-2 a").addEventListener('click', () => {
			setDDPage("2");
		});
		$("#videos-dd-3 a").addEventListener('click', () => {
			setDDPage("3");
		});
		$("#videos-dd-4 a").addEventListener('click', () => {
			setDDPage("4");
		});
	}
});
function setDDPage(page) {
	$("#videos-dd").setAttribute("current-slide",page);
	var maxSlides = $("#videos-dd").getAttribute("max-slides");
	if ($(".videos-dd-pagination-button[active]") != null) {
		$(".videos-dd-pagination-button[active]").removeAttribute("active");
	}
	if ($("#videos-dd-left[disabled]") != null) {
		$("#videos-dd-left").removeAttribute("disabled");
	}
	if ($("#videos-dd-right[disabled]") != null) {
		$("#videos-dd-right").removeAttribute("disabled");
	}
	if (page == "0") {
		$("#videos-dd-0").setAttribute("active","");
		$("#videos-dd-left").setAttribute("disabled","");
	}
	if (page == "1") {
		$("#videos-dd-1").setAttribute("active","");
	}
	if (page == "2") {
		$("#videos-dd-2").setAttribute("active","");
	}
	if (page == "3") {
		$("#videos-dd-3").setAttribute("active","");
	}
	if (page == "4") {
		$("#videos-dd-4").setAttribute("active","");
	}
	if (page == maxSlides) {
		$("#videos-dd-right").setAttribute("disabled","");
	}
}
function appbarPosition(pos) {
	document.querySelector("#bt-appbar").setAttribute("position",pos);
}
function setPage(page) {
	if (page == "home") {
		$("#bt-appbar-multistate").setAttribute("state","feed");
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-home").setAttribute("active","");
	}
	if (page == "subscriptions") {
		$("#bt-appbar-multistate").setAttribute("state","feed");
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-subs").setAttribute("active","");
	}
	if (page == "trending") {
		$("#bt-appbar-multistate").setAttribute("state","feed");
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-trending").setAttribute("active","");
	}
	if (page == "watch") {
		$("#bt-appbar-multistate").setAttribute("state","watch");
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		//$("#appbar-wtahc").setAttribute("active","");
	}
	if (page == "channel") {
		$("#bt-appbar-multistate").setAttribute("state","channel");
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		//$("#appbar-channel-home").setAttribute("active","");
	}
	if (page == "feed") {
		$("#bt-appbar-multistate").setAttribute("state","feed");
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
	}
}
function seasonLinks() {
	let homeData = {
	commandMetadata: {
		webCommandMetadata: {
		  url: "/",
		  webPageType: "WEB_PAGE_TYPE_CHANNEL",
		  rootVe: 11662,
		  apiUrl: "/youtubei/v1/browse"
		}
	  },
	  browseEndpoint: {
		browseId: "FEwhat_to_watch",
		canonicalBaseUrl: "/"
	  }
	}
	let trendingData = {
	commandMetadata: {
		webCommandMetadata: {
		  url: "/feed/trending",
		  webPageType: "WEB_PAGE_TYPE_CHANNEL",
		  rootVe: 11663,
		  apiUrl: "/youtubei/v1/browse"
		}
	  },
	  browseEndpoint: {
		browseId: "FEtrending",
		canonicalBaseUrl: "/feed/trending"
	  }
	}
	let subsData = {
	commandMetadata: {
		webCommandMetadata: {
		  url: "/feed/subscriptions",
		  webPageType: "WEB_PAGE_TYPE_CHANNEL",
		  rootVe: 11664,
		  apiUrl: "/youtubei/v1/browse"
		}
	  },
	  browseEndpoint: {
		browseId: "FEsubscriptions",
		canonicalBaseUrl: "/feed/subscriptions"
	  }
	}
	$("#appbar-home").data = homeData;
	$("#appbar-trending").data = trendingData;
	$("#appbar-subs").data = subsData;
	$("#appbar-home").setAttribute("seasoned","");
	$("#appbar-trending").setAttribute("seasoned","");
	$("#appbar-subs").setAttribute("seasoned","");
}
function doChannelLinks(data) {
	$("#appbar-channel-home").setAttribute("hidden","");
	$("#appbar-channel-videos").setAttribute("hidden","");
	$("#appbar-channel-shorts").setAttribute("hidden","");
	$("#appbar-channel-live").setAttribute("hidden","");
	$("#appbar-channel-releases").setAttribute("hidden","");
	$("#appbar-channel-playlists").setAttribute("hidden","");
	$("#appbar-channel-community").setAttribute("hidden","");
	$("#appbar-channel-store").setAttribute("hidden","");
	if (data.response.contents.twoColumnBrowseResultsRenderer.tabs != null) {
		var tabs = data.response.contents.twoColumnBrowseResultsRenderer.tabs;

		let theNumber = 0;
		for (let i = 0; i < tabs.length; i++) {
			if (tabs[theNumber] != null) {
				if (tabs[theNumber].tabRenderer != null) {
					var tabTitle = tabs[theNumber].tabRenderer.tabTitle;
					var tabLink = tabs[theNumber].tabRenderer.endpoint.commandMetadata.webCommandMetadata.url;
					var tabEndpoint = tabs[theNumber].tabRenderer.endpoint;
					doTab(tabLink, tabEndpoint);
					if (tabs[theNumber].tabRenderer.selected != null) {
						selectTab(tabLink);
					}
				}
			}
			theNumber++;
		}
	} if (data.response.header.c4TabbedHeaderRenderer != null) {
		let ownerPfp = data.response.header.c4TabbedHeaderRenderer.avatar.thumbnails[0].url;
		document.querySelector("#appbar-channel-pfp").style.background = "url(" + ownerPfp + ")";
	} else if (data.response.header.pageHeaderRenderer != null) {
		let ownerPfp = data.response.header.pageHeaderRenderer.content.pageHeaderViewModel.image.decoratedAvatarViewModel.avatar.avatarViewModel.image.sources[0].url;
		document.querySelector("#appbar-channel-pfp").style.background = "url(" + ownerPfp + ")";
	}
}
function doWatchLinks(data) {
	var title = data.playerResponse.videoDetails.title;
	$("#appbar-watch-current-video").textContent = title;
}
function selectTab(tabLink) {
	if (tabLink.includes("/featured")) {
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-channel-home").setAttribute("active","true");
	}
	if (tabLink.includes("/videos")) {
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-channel-videos").setAttribute("active","true");
	}
	if (tabLink.includes("/shorts")) {
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-channel-shorts").setAttribute("active","true");
	}
	if (tabLink.includes("/streams")) {
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-channel-live").setAttribute("active","true");
	}
	if (tabLink.includes("/releases")) {
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-channel-releases").setAttribute("active","true");
	}
	if (tabLink.includes("/playlists")) {
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-channel-playlists").setAttribute("active","true");
	}
	if (tabLink.includes("/community")) {
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-channel-community").setAttribute("active","true");
	}
	if (tabLink.includes("/store")) {
		if ($(".appbar-link[active]") != null) {
			$(".appbar-link[active]").removeAttribute("active");
		}
		$("#appbar-channel-store").setAttribute("active","true");
	}
}
function doTab(tabLink, tabEndpoint) {
	if (tabLink.includes("/featured")) {
		$("#appbar-channel-home").removeAttribute("hidden");
		$("#appbar-channel-home").data = tabEndpoint;
		$("#appbar-channel-home").setAttribute("href",tabLink);
	}
	if (tabLink.includes("/videos")) {
		$("#appbar-channel-videos").removeAttribute("hidden");
		$("#appbar-channel-videos").data = tabEndpoint;
		$("#appbar-channel-videos").setAttribute("href",tabLink);
	}
	if (tabLink.includes("/shorts")) {
		$("#appbar-channel-shorts").removeAttribute("hidden");
		$("#appbar-channel-shorts").data = tabEndpoint;
		$("#appbar-channel-shorts").setAttribute("href",tabLink);
	}
	if (tabLink.includes("/streams")) {
		$("#appbar-channel-live").removeAttribute("hidden");
		$("#appbar-channel-live").data = tabEndpoint;
		$("#appbar-channel-live").setAttribute("href",tabLink);
	}
	if (tabLink.includes("/releases")) {
		$("#appbar-channel-releases").removeAttribute("hidden");
		$("#appbar-channel-releases").data = tabEndpoint;
		$("#appbar-channel-releases").setAttribute("href",tabLink);
	}
	if (tabLink.includes("/playlists")) {
		$("#appbar-channel-playlists").removeAttribute("hidden");
		$("#appbar-channel-playlists").data = tabEndpoint;
		$("#appbar-channel-playlists").setAttribute("href",tabLink);
	}
	if (tabLink.includes("/community")) {
		$("#appbar-channel-community").removeAttribute("hidden");
		$("#appbar-channel-community").data = tabEndpoint;
		$("#appbar-channel-community").setAttribute("href",tabLink);
	}
	if (tabLink.includes("/store")) {
		$("#appbar-channel-store").removeAttribute("hidden");
		$("#appbar-channel-store").data = tabEndpoint;
		$("#appbar-channel-store").setAttribute("href",tabLink);
	}
}