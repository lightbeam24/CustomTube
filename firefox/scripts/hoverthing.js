sessionStorage.setItem("CT_alreadyStarted","false");
var repeatedActions = setInterval(function() {
	if (document.querySelector('html[location^="watch"] ytd-comment-renderer:hover') != null) {
		if (
		document.querySelector('html[location^="watch"] ytd-comment-renderer #author-text:hover') != null ||
		document.querySelector('html[location^="watch"] ytd-comment-renderer #name:hover') != null
		) {
			sessionStorage.setItem("commentHovered","true");
		} else if (
		document.querySelector('html[location^="watch"] ytd-comment-renderer #author-text:hover') == null ||
		document.querySelector('html[location^="watch"] ytd-comment-renderer #name:hover') == null
		) {
			sessionStorage.setItem("commentHovered","false");
			sessionStorage.setItem("CT_alreadyStarted","false");
		}
	}
	if (
	document.querySelector('html[location^="watch"] ytd-comment-renderer:hover') == null &&
	document.querySelector('#bt-hover-thing:hover') == null
	) {
		//setTimeout(verifyThenDo, 200);
		sessionStorage.setItem("commentHovered","false");
		sessionStorage.setItem("CT_alreadyStarted","false");
	}
var commentHovered = sessionStorage.getItem("commentHovered");
if (commentHovered == "false") { 
  setTimeout(doTing, 40);
  function doTing() {
	  document.querySelector('html').setAttribute('is-show-hover-thing','pending');
	  setTimeout(doTing2, 300);
	  function doTing2() {
		  document.querySelector('html').setAttribute('is-show-hover-thing','false');
	  }
  }
}
if (commentHovered == "true") {
	var alreadyStarted = sessionStorage.getItem("CT_alreadyStarted");
	if (alreadyStarted != "true") {
		var commentLink = document.querySelector("a:hover");
		var times = 0;
		setTimeout(staggered, 10);
	}
	function staggered() {
		sessionStorage.setItem("CT_alreadyStarted","true");
		console.log(times);
		commentLink = document.querySelector("a:hover");
		var hoverThing = document.querySelector("#bt-hover-thing");
		var channelUrl = commentLink.getAttribute("href");
		var cutUrl = channelUrl.split("l/");
		var usedUrl = cutUrl[1];
		sessionStorage.setItem("theChanURL",usedUrl);
		console.log("channelurl" + channelUrl);
		console.log("usedurl" + usedUrl);
		if (
		times != 5
		) {
			setTimeout(staggered2, 1);
		}
		function staggered2() {
			setTimeout(staggered, 150);
			times++;
			var choosedUrl = sessionStorage.getItem("theChanURL");
			if (
			times == 1 ||
			times == 4
			) {
				fetch("https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
					"headers": {
						"accept": "application/json, text/plain, /",
						"accept-language": "en-US,en;q=0.9",
						"Content-type": "application/json",
						"sec-ch-ua-mobile": "?0",
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "same-origin",
						"x-goog-authuser": "1",
						"X-Goog-Visitor-Id": "",
						"X-Youtube-Bootstrap-Logged-In": "true",
						"x-origin": "https://www.youtube.com/"
					},
					"referrer": "https://www.youtube.com/",
					"referrerPolicy": "strict-origin-when-cross-origin",
					"body": JSON.stringify({
						"context": {
							"client": {
								"clientName": "WEB",
								"clientVersion": "2.20230301.00.00",
								"hl": "en",
								"gl": "US"
							}
						},
						"browseId":choosedUrl
					}),
					"method": "POST",
					"mode": "cors",
					"credentials": "include"
				})
				.then(response => response.json())
				.then(data => sessionStorage.setItem("nebula-channel-data",JSON.stringify(data)));
				var theData = sessionStorage.getItem("nebula-channel-data");
				var convertedTheData = JSON.parse(theData);
				console.log(convertedTheData);
				var channelName = convertedTheData.header.c4TabbedHeaderRenderer.title;
				if (convertedTheData.header.c4TabbedHeaderRenderer.avatar.thumbnails[2] != null) {
					var channelPfp = convertedTheData.header.c4TabbedHeaderRenderer.avatar.thumbnails[2].url;
				} else if (convertedTheData.header.c4TabbedHeaderRenderer.avatar.thumbnails[2] == null) {
					var channelPfp = convertedTheData.header.c4TabbedHeaderRenderer.avatar.thumbnails[1].url;
				}
				if (convertedTheData.header.c4TabbedHeaderRenderer.banner != null) {
					var channelBanner = convertedTheData.header.c4TabbedHeaderRenderer.banner.thumbnails[0].url;
					hoverThing.querySelector("#hover-thing-banner").style.background = "url(" + channelBanner + ")";
				} else {
					hoverThing.querySelector("#hover-thing-banner").style.background = "#ddd";
				}
				if (convertedTheData.header.c4TabbedHeaderRenderer.subscribeButton != null) {
					var subText = convertedTheData.header.c4TabbedHeaderRenderer.subscribeButton.buttonRenderer.text.runs[0].text;
					hoverThing.querySelector(".bt-sub-text span").textContent = subText;
					hoverThing.querySelector(".bt-subscribe-button").setAttribute("href",channelUrl + "/?sub_confirmation=1");
					if (convertedTheData.header.c4TabbedHeaderRenderer.subscriberCountText != null) {
						var subCount = convertedTheData.header.c4TabbedHeaderRenderer.subscriberCountText.simpleText;
						var cutSubString = subCount.split(' s'); // changed space
						var trimmedSubCountt = cutSubString[0];
						if (trimmedSubCountt.includes("mi")) {
							var cutSubString2 = trimmedSubCountt.split(' m');
							var cutSubString3 = cutSubString2[0] + "M";
							var trimmedSubCount = cutSubString3;
						}
						if (!trimmedSubCountt.includes("mi")) {
							var trimmedSubCount =  trimmedSubCountt;
						}
						hoverThing.querySelector(".bt-outer-sub-count span").textContent = trimmedSubCount;
						hoverThing.querySelector(".bt-inner-sub-count span").textContent = trimmedSubCount;
					} else {
						hoverThing.querySelector(".bt-outer-sub-count span").textContent = "0";
						hoverThing.querySelector(".bt-inner-sub-count span").textContent = "0";
					}
				}
				if (convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer != null) {
					if (convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer != null) {
						if (convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer != null) {
							if (convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer != null) {
								if (convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[0].gridVideoRenderer != null) {
									var channelShelfTitle = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.title.runs[0].text;
									var channelVidTitle = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[0].gridVideoRenderer.title.simpleText;
									var channelVidThumb = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[0].gridVideoRenderer.thumbnail.thumbnails[0].url;
									var channelVidUrl = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[0].gridVideoRenderer.videoId;
									var channelVidTime = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[0].gridVideoRenderer.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText;
									hoverThing.querySelector("#hover-thing-videos-area").style.display = "block";
									hoverThing.querySelector("#hover-thing-shelf-title span").textContent = channelShelfTitle;
									hoverThing.querySelector("#vid-1 .hover-thing-video-title span").textContent = channelVidTitle;
									hoverThing.querySelector("#vid-1 .hover-thing-thumbnail").style.background = "url(" + channelVidThumb + ")";
									hoverThing.querySelector("#vid-1 .hover-thing-time span").textContent = channelVidTime;
									hoverThing.querySelector("#vid-1 .hover-thing-video-title").setAttribute("href","/watch?v=" + channelVidUrl);
									hoverThing.querySelector("#vid-1 .hover-thing-thumbnail").setAttribute("href","/watch?v=" + channelVidUrl);
									if (convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[1] != null) {
										var channelVid2Title = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[1].gridVideoRenderer.title.simpleText;
										var channelVid2Thumb = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[1].gridVideoRenderer.thumbnail.thumbnails[0].url;
										var channelVid2Url = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[1].gridVideoRenderer.videoId;
										var channelVid2Time = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[1].gridVideoRenderer.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText;
										hoverThing.querySelector("#vid-2 .hover-thing-video-title span").textContent = channelVid2Title;
										hoverThing.querySelector("#vid-2 .hover-thing-thumbnail").style.background = "url(" + channelVid2Thumb + ")";
										hoverThing.querySelector("#vid-2 .hover-thing-time span").textContent = channelVid2Time;
										hoverThing.querySelector("#vid-2 .hover-thing-video-title").setAttribute("href","/watch?v=" + channelVid2Url);
										hoverThing.querySelector("#vid-2 .hover-thing-thumbnail").setAttribute("href","/watch?v=" + channelVid2Url);
									}
									if (convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[2] != null) {
										var channelVid3Title = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[2].gridVideoRenderer.title.simpleText;
										var channelVid3Thumb = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[2].gridVideoRenderer.thumbnail.thumbnails[0].url;
										var channelVid3Url = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[2].gridVideoRenderer.videoId;
										var channelVid3Time = convertedTheData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].shelfRenderer.content.horizontalListRenderer.items[2].gridVideoRenderer.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.text.simpleText;
										hoverThing.querySelector("#vid-3 .hover-thing-video-title span").textContent = channelVid3Title;
										hoverThing.querySelector("#vid-3 .hover-thing-thumbnail").style.background = "url(" + channelVid3Thumb + ")";
										hoverThing.querySelector("#vid-3 .hover-thing-time span").textContent = channelVid3Time;
										hoverThing.querySelector("#vid-3 .hover-thing-video-title").setAttribute("href","/watch?v=" + channelVid3Url);
										hoverThing.querySelector("#vid-3 .hover-thing-thumbnail").setAttribute("href","/watch?v=" + channelVid3Url);
									}
								} else {
									hoverThing.querySelector("#hover-thing-videos-area").style.display = "none";
								}
							} else {
								hoverThing.querySelector("#hover-thing-videos-area").style.display = "none";
							}
						} else {
							hoverThing.querySelector("#hover-thing-videos-area").style.display = "none";
						}
					} else {
						hoverThing.querySelector("#hover-thing-videos-area").style.display = "none";
					}	
				} else {
					hoverThing.querySelector("#hover-thing-videos-area").style.display = "none";
				}
				var channelDesc = convertedTheData.metadata.channelMetadataRenderer.description;
				hoverThing.querySelector("#hover-thing-channel-name").setAttribute("href",channelUrl);
			//	console.log("channelurl" + channelUrl);
			//	console.log("usedurl" + usedUrl);
				hoverThing.querySelector("#hover-thing-pfp").style.background = "url(" + channelPfp + ")";
				hoverThing.querySelector("#hover-thing-channel-name span").textContent = channelName;
				hoverThing.querySelector("#hover-thing-description span").textContent = channelDesc;
				if (
				times == 4
				) {
					setTimeout(toShow, 10);
				}
				function toShow() {
					document.querySelector("html").setAttribute("is-show-hover-thing","true");
				}
			}
		}
	}
	/*storeData();
	function storeData() {
		sessionStorage.setItem("ytd-app-data", JSON.stringify(getYtdData));
	}*/
}
}, 100);
setTimeout(repeatedActions, 100);
