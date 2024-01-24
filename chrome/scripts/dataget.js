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

var watchNumber = 0;
document.addEventListener("yt-page-data-updated", resetVars); 
document.addEventListener("yt-page-data-updated", cbFunction); 
var context = {
	"client": {
		"clientName": "WEB",
		"clientVersion": "2.20231208.01.00",
		"hl": "en",
		"gl": "US"
	}	
};
var headers = {
	"accept": "application/json, text/plain, /",
	"accept-language": "en-US,en;q=0.9",
	"Content-type": "application/json"
};
function cbFunction() { 
	watchNumber++;
	var getYtdData = document.querySelector("ytd-app").data; 
	if (document.querySelector("html[layout^='stargazer']") != null) {
		do2000sButtons();
	}
	if (document.querySelector("html[layout^='cosmicpanda']") != null) {
		do2012Buttons();
	}
	if (getYtdData.page == "watch") {
		setTimeout(cbFunction, 5000);
		watchPageEveryLoad(watchNumber);
	}
	storeData();
	function storeData() {
		sessionStorage.setItem("ytd-app-data", JSON.stringify(getYtdData));
	}
}
function resetVars() {
	watchNumber = 0;
}
function watchPageEveryLoad(watchNumber) {
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
	let ownerUrlVids = ownerUrl + "/videos";
	requestChannel(ownerId, watchNumber);
	if (document.querySelector("html[layout] #bt-video-count-link") != null) {
		let navDataVids = {
		commandMetadata: {
			webCommandMetadata: {
			  url: ownerUrlVids,
			  webPageType: "WEB_PAGE_TYPE_CHANNEL",
			  rootVe: 9762,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: ownerId,
			canonicalBaseUrl: ownerUrlVids,
			params: "EgZ2aWRlb3PyBgQKAjoA"
		  }
		}
		if ($("#bt-video-count-link span") != null) {
			document.querySelector("#bt-video-count-link").data = navDataVids;
			document.querySelector("#bt-video-count-link").setAttribute("href","https://www.youtube.com/channel/" + ownerId + "/videos");
		}
		if ($("#appbar-watch-videos") != null) {
			document.querySelector("#appbar-watch-videos").data = navDataVids;
			document.querySelector("#appbar-watch-videos").setAttribute("href","https://www.youtube.com/channel/" + ownerId + "/videos");
		}
		if ($("#videos-dd-videos-link") != null) {
			document.querySelector("#videos-dd-videos-link").data = navDataVids;
			document.querySelector("#videos-dd-videos-link").setAttribute("href","https://www.youtube.com/channel/" + ownerId + "/videos");
		}
	}
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
		document.querySelector("#appbar-watch-channel").data = navData;
		document.querySelector("#appbar-watch-channel").setAttribute("href","https://www.youtube.com/channel/" + ownerId);
	} else if (document.querySelector("html[layout] #bt-desc-upload-date #author-text") == null) {
		//setTimeout(watchPageEveryLoad, 3000);
	}
	let ownerPfp = secondary.owner.videoOwnerRenderer.thumbnail.thumbnails[0].url;
	let ownerName = secondary.owner.videoOwnerRenderer.title.runs[0].text;
	document.querySelector("#appbar-watch-channel-pfp").style.background = "url(" + ownerPfp + ")";
	document.querySelector("#appbar-watch-channel-name").textContent = ownerName;
}
function requestChannel(ownerId, watchNumber) {
	if (
	$("#bt-appbar-videos-dropdown") != null &&
	$("#bt-videos-dropdown") != null &&
	watchNumber == 1
	) {
		watchNumber = "invalid";
		fetch("https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
			"headers": headers,
			"referrer": "https://www.youtube.com/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": JSON.stringify({
				"context": context,
				"browseId": ownerId,
				"params": "EgZ2aWRlb3PyBgQKAjoA"
			}),
			"method": "POST",
			"credentials": "include"
		}).then(response => response.json()).then(data => {
			console.log(data);
			if (data.header != null) {
				if (data.header.c4TabbedHeaderRenderer != null) {
					if (data.header.c4TabbedHeaderRenderer.videosCountText != null) {
						var videoCount = data.header.c4TabbedHeaderRenderer.videosCountText.runs[0].text;
						if (data.header.c4TabbedHeaderRenderer.videosCountText.runs[1] != null) {
							var videoCountString = data.header.c4TabbedHeaderRenderer.videosCountText.runs[1].text;
							if ($("#bt-video-count-link span") != null) {
								document.querySelector("#bt-video-count-link span").textContent = videoCount + videoCountString;
							}
							if ($("#appbar-watch-video-count") != null) {
								document.querySelector("#appbar-watch-video-count").textContent = videoCount + videoCountString;
							}
							if ($("#videos-dd-count") != null) {
								document.querySelector("#videos-dd-count").textContent = videoCount + videoCountString;
							}
							if (document.querySelector("#appbar-watch-videos-fusion[hidden]") != null) {
								document.querySelector("#appbar-watch-videos-fusion").removeAttribute("hidden");
							}
							if (document.querySelector("#bt-videos-dropdown-button .bt-standard-button[disabled]") != null) {
								document.querySelector("#bt-videos-dropdown-button .bt-standard-button").removeAttribute("disabled");
							}
							if ($("#videos-dd-button #dd-button-videos-count") != null) {
								document.querySelector("#videos-dd-button #dd-button-videos-count").textContent = videoCount + videoCountString;
							}
						} else {
							document.querySelector("#bt-video-count-link span").textContent = videoCount;
							if ($("#appbar-watch-video-count") != null) {
								document.querySelector("#appbar-watch-video-count").textContent = videoCount;
							}
							if (document.querySelector("#appbar-watch-videos-fusion[hidden]") != null) {
								document.querySelector("#appbar-watch-videos-fusion").removeAttribute("hidden");
							}
							if (document.querySelector("#bt-videos-dropdown-button .bt-standard-button[disabled]") != null) {
								document.querySelector("#bt-videos-dropdown-button .bt-standard-button").removeAttribute("disabled");
							}
							if ($("#videos-dd-count") != null) {
								document.querySelector("#videos-dd-count").textContent = videoCount;
								document.querySelector("#videos-dd-button #dd-button-videos-count").textContent = videoCount;
							}
						}
					} else {
						document.querySelector("#bt-video-count-link span").textContent = "No videos";
						document.querySelector("#videos-dd-count").setAttribute("hidden","");
						document.querySelector("#videos-dd-button #dd-button-videos-count").textContent = "No videos";
					}
					var newChannelLink = data.header.c4TabbedHeaderRenderer.channelId;
				} else if (data.header.pageHeaderRenderer != null) {
					var pageHeaderVM = data.header.pageHeaderRenderer.content.pageHeaderViewModel;
					var metaCon = pageHeaderVM.metadata.contentMetadataViewModel.metadataRows[0].metadataParts;
					if (metaCon[2] != null) {
						var videoCount = metaCon[2].text.content;
					} else {
						var videoCount = "No videos";
					}
					if ($("#bt-video-count-link span") != null) {
						document.querySelector("#bt-video-count-link span").textContent = videoCount;
					}
					if ($("#appbar-watch-video-count") != null) {
						document.querySelector("#appbar-watch-video-count").textContent = videoCount;
					}
					if ($("#videos-dd-count") != null) {
						document.querySelector("#videos-dd-count").textContent = videoCount;
						document.querySelector("#videos-dd-button #dd-button-videos-count").textContent = videoCount;
					}
					if (document.querySelector("#appbar-watch-videos-fusion[hidden]") != null) {
						document.querySelector("#appbar-watch-videos-fusion").removeAttribute("hidden");
					}
					if (document.querySelector("#bt-videos-dropdown-button .bt-standard-button[disabled]") != null) {
						document.querySelector("#bt-videos-dropdown-button .bt-standard-button").removeAttribute("disabled");
					}
				}
				if (data.contents.twoColumnBrowseResultsRenderer.tabs[1] != null) {
					if (data.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content != null) {
						var richGrid = data.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content.richGridRenderer;
						var richItemNo = 0;
						var richContents = richGrid.contents;
						richGridGet();
						function richGridGet() {

							for (let i = 0; i < richContents.length; i++) {
								if (richGrid.contents[richItemNo].richItemRenderer != null) {
									var richItem = richGrid.contents[richItemNo].richItemRenderer.content.videoRenderer;
									console.log(richItem);
									var itemTitle = richItem.title.runs[0].text;
									var itemThumbnail = richItem.thumbnail.thumbnails[0].url;
									var itemLink = richItem.videoId;
									var itemView = "";
									var itemTime = "";
									var itemDate = "";
									if (richItem.viewCountText != null) {
										if (richItem.viewCountText.simpleText != null) {
											itemView = richItem.viewCountText.simpleText;
										}
									}
									if (richItem.thumbnailOverlays != null) {
										if (richItem.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer != null) {
											if (richItem.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text != null) {
												itemTime = richItem.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText;
											}
										}
									}
									if (richItem.publishedTimeText != null) {
										if (richItem.publishedTimeText.simpleText != null) {
											itemDate = richItem.publishedTimeText.simpleText;
										}
									}
									let container = document.querySelector('#bt-appbar-videos-dropdown #js-destination');
									var newElem = document.createElement("a");
									newElem.classList.add("appbar-dropdown-menuitem");
									newElem.classList.add("yt-simple-endpoint");
									newElem.classList.add("appbar-dropdown-video");
									newElem.innerHTML = `
									<div class="appbar-dropdown-video-inner flex">
										<div class="thumbnail">
											<img src=""></img>
											<div class="time">
												<span></span>
											</div>
										</div>
										<div class="meta">
											<div class="title">
												<span></span>
											</div>
											<div class="meta-below">
												<div class="view-count">
													<span></span>
												</div>
												<div class="date">
													<span></span>
												</div>
											</div>
										</div>
									</div>
									`;
									container.insertBefore(newElem, container.children[richItemNo]);
									let container2 = document.querySelector('#bt-videos-dropdown #js-destination');
									var newElem2 = document.createElement("a");
									newElem2.classList.add("yt-simple-endpoint");
									newElem2.classList.add("super-compact-video");
									newElem2.innerHTML = `
									<div class="super-compact-video-inner">
										<div class="thumbnail">
											<img src=""></img>
											<div class="time">
												<span></span>
											</div>
										</div>
										<div class="meta">
											<div class="title">
												<span></span>
											</div>
											<div class="meta-below">
												<div class="view-count">
													<span></span>
												</div>
												<div class="date">
													<span></span>
												</div>
											</div>
										</div>
									</div>
									`;
									container2.insertBefore(newElem2, container2.children[richItemNo]);
									var w9o = document.querySelector("#bt-appbar-videos-dropdown");
									var theABDVid = w9o.querySelectorAll(".appbar-dropdown-video")[richItemNo];
									theABDVid.querySelector(".title span").textContent = itemTitle;
									theABDVid.querySelector(".meta").setAttribute("title",itemTitle);
									theABDVid.querySelector("img").src = itemThumbnail;
									theABDVid.querySelector(".view-count span").textContent = itemView;
									theABDVid.querySelector(".time span").textContent = itemTime;
									theABDVid.querySelector(".date span").textContent = itemDate;
									theABDVid.setAttribute("href", "/watch?v=" + itemLink);
									var rootVe = richItemNo + 87;
									var videoData = {
									commandMetadata: {
										webCommandMetadata: {
										  url: "/watch?v=" + itemLink,
										  webPageType: "WEB_PAGE_TYPE_WATCH",
										  rootVe: rootVe
										}
									  },
									  watchEndpoint: {
										videoId: itemLink
									  }
									}
									theABDVid.data = videoData;
									var videosDD = document.querySelector("#bt-videos-dropdown");
									var theSCVid = videosDD.querySelectorAll(".super-compact-video")[richItemNo];
									theSCVid.querySelector(".title span").textContent = itemTitle;
									theSCVid.querySelector(".meta").setAttribute("title",itemTitle);
									theSCVid.querySelector("img").src = itemThumbnail;
									theSCVid.querySelector(".view-count span").textContent = itemView;
									theSCVid.querySelector(".time span").textContent = itemTime;
									theSCVid.querySelector(".date span").textContent = itemDate;
									theSCVid.setAttribute("href", "/watch?v=" + itemLink);
									theSCVid.data = videoData;
									richItemNo++;
									if (richItemNo == 6) {
										theSCVid.setAttribute("last-in-slide","");
										if ($("#videos-dd-right[disabled]") != null) {
											$("#videos-dd-right").removeAttribute("disabled");
										}
									}
									if (richItemNo == 7) {
										$("#videos-dd").setAttribute("max-slides","1");
									}
									if (richItemNo == 12) {
										theSCVid.setAttribute("last-in-slide","");
									}
									if (richItemNo == 13) {
										$("#videos-dd").setAttribute("max-slides","2");
									}
									if (richItemNo == 18) {
										theSCVid.setAttribute("last-in-slide","");
									}
									if (richItemNo == 19) {
										$("#videos-dd").setAttribute("max-slides","3");
									}
									if (richItemNo == 24) {
										theSCVid.setAttribute("last-in-slide","");
									}
									if (richItemNo == 25) {
										$("#videos-dd").setAttribute("max-slides","4");
									}
								} else {
									console.log("All available rich items gotten.");
								}
							}
						}
					} else {
						document.querySelector("#appbar-watch-videos-fusion").setAttribute("hidden","");
					}
				} else {
					document.querySelector("#bt-video-count-link span").textContent = "No videos";
					document.querySelector("#appbar-watch-videos-fusion").setAttribute("hidden","");
					document.querySelector("#bt-videos-dropdown-button .bt-standard-button").setAttribute("disabled","");
					document.querySelector("#videos-dd-button #dd-button-videos-count").textContent = "No videos";
				}
			} else {
				document.querySelector("#bt-video-count-link span").textContent = "No videos";
				document.querySelector("#appbar-watch-videos-fusion").setAttribute("hidden","");
				document.querySelector("#bt-videos-dropdown-button .bt-standard-button").setAttribute("disabled","");
				document.querySelector("#videos-dd-button #dd-button-videos-count").textContent = "No videos";
			}
		});
	} else if (watchNumber == 1) {
		var elm = "#bt-videos-dropdown";
		waitForElement(elm).then(function(elm) {
			if (canGo != false) {
				requestChannel(ownerId, watchNumber);
			}
		});
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