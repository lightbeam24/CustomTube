// NOTE: CustomTube's codename is BeamTube, which is why "bt" appears everywhere in the code.
sessionStorage.setItem("RYD_Compat_Warning","Show");
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var oldSubCount = "pla.hol";
var oldSubCountFull = "placeholder";
sessionStorage.setItem("nebula-done-my-channel", "false");
let tasks = {
	"videoLooped": false,
	"movedHHButtons": false,
	"movedGuideButton": false,
	"movedYCButton": false,
	"appliedWatchMetadata": "false",
	"moveVid": "false",
	"createdNewUploadIcon": false,
	"createdNewBellIcon": false,
	"createdNewHomeIcon": false,
	"createdMyChannelButton": false,
	"populatedMyChannelButton": false,
	"createdNewMyChannelIcon": false,
	"createdNewTrendingButton": false,
	"populatedTrendingButton": false,
	"createdNewTrendingIcon": false,
	"createdNewTrendingIcon2": false,
	"createdNewSubsIcon": false,
	"createdNewLibraryIcon": false,
	"createdNewHistoryIcon": false,
	"createdNewLikedVidsIcon": false,
	"createdNewWatchLaterIcon": false,
	"createdNewExpandIcon": false,
	"createdNewCollapseIcon": false,
	"createdNewExpandIcon2": false,
	"createdAbove": false,
	"createdMetaSide": false,
	"createdPlaceMetadata": false,
	"createdViewsInfo": false,
	"createdNewLikeIcon": false,
	"createdNewDisLikeIcon": false,
	"createdNewShareIcon": false,
	"createdNewSaveIcon": false,
	"createdPfpUploadDate": false,
	"createdMiddleRow": false,
	"createdFakeAboutButton": false,
	"createdDescUploadDate": false,
	"createdDescRules1": false,
	"createdDescRules2": false,
	"createdNewShowMoreButton": false,
	"createdNewShowLessButton": false,
	"createdCommentsTeaser": false,
	"createdShowMoreRelated": false,
	"createdShowMoreHome": false,
	"createdShowMoreChannel": false,
	"createdLtoDBar": false,
	"createdNewLikeString": false,
	"startVidIdStuff": true,
	"finishedSidebar": false,
	"finishedWatch": false,
	"movedTitleToTop": false,
	"movedMetaToSide": false,
	"createdVideosDropdown": false,
	"createdVideosLink": false,
	"createdAppbar": false,
	
	
	"changedLogoEndpoint": false,
	"finishedMisc": false
};
let BTVars = {
	"playlistWatch": false,
	"trimViews": false,
	//btlocation is deprecated and will be replaced in the coming updates.
	"btlocation": "home",
	"playerState": "normal"
};
aspectRatio = (window.screen.width / window.screen.height).toFixed(2);
playerSize = {};
if (BTConfig.videoPlayerSize == "PSAuto") {
	playerSize.width = 854;
	playerSize.height = 480;
	document.querySelector("html").setAttribute("player-width", "854");
	document.querySelector("html").setAttribute("player-height", "480");
}
if (BTConfig.videoPlayerSize == "PS586x330") {
	playerSize.width = 586;
	playerSize.height = 330;
	document.querySelector("html").setAttribute("player-width", "586");
	document.querySelector("html").setAttribute("player-height", "330");
}
if (BTConfig.videoPlayerSize == "PS640x360") {
	playerSize.width = 640;
	playerSize.height = 360;
	document.querySelector("html").setAttribute("player-width", "640");
	document.querySelector("html").setAttribute("player-height", "360");
}
if (BTConfig.videoPlayerSize == "PS854x480") {
	playerSize.width = 854;
	playerSize.height = 480;
	document.querySelector("html").setAttribute("player-width", "854");
	document.querySelector("html").setAttribute("player-height", "480");
}
if (BTConfig.videoPlayerSize == "PS1024x576") {
	playerSize.width = 1024;
	playerSize.height = 575;
	document.querySelector("html").setAttribute("player-width", "1024");
	document.querySelector("html").setAttribute("player-height", "576");
}
if (BTConfig.videoPlayerSize == "PS1280x720") {
	playerSize.width = 1280;
	playerSize.height = 720;
	document.querySelector("html").setAttribute("player-width", "1280");
	document.querySelector("html").setAttribute("player-height", "720");
}
if (BTConfig.videoPlayerSize == "PS480x360") {
	playerSize.width = 480;
	playerSize.height = 360;
	document.querySelector("html").setAttribute("player-width", "480");
	document.querySelector("html").setAttribute("player-height", "360");
	document.querySelector("html").setAttribute("player-ratio", "4:3");
}
if (BTConfig.videoPlayerSize == "PS640x480") {
	playerSize.width = 640;
	playerSize.height = 480;
	document.querySelector("html").setAttribute("player-width", "640");
	document.querySelector("html").setAttribute("player-height", "480");
	document.querySelector("html").setAttribute("player-ratio", "4:3");
}
if (BTConfig.videoPlayerSize == "PS768x576") {
	playerSize.width = 768;
	playerSize.height = 576;
	document.querySelector("html").setAttribute("player-width", "768");
	document.querySelector("html").setAttribute("player-height", "576");
	document.querySelector("html").setAttribute("player-ratio", "4:3");
}
if (BTConfig.videoPlayerSize == "PS960x720") {
	playerSize.width = 960;
	playerSize.height = 720;
	document.querySelector("html").setAttribute("player-width", "960");
	document.querySelector("html").setAttribute("player-height", "720");
	document.querySelector("html").setAttribute("player-ratio", "4:3");
}
if (BTConfig.videoPlayerSize == "PS360x640") {
	playerSize.width = 360;
	playerSize.height = 640;
	document.querySelector("html").setAttribute("player-width", "360");
	document.querySelector("html").setAttribute("player-height", "640");
	document.querySelector("html").setAttribute("player-ratio", "9:16");
}
if (
BTConfig.layoutSelect == "stargazer-2008-1" ||
BTConfig.layoutSelect == "stargazer-2009-3" ||
BTConfig.layoutSelect == "aozora-2011" ||
BTConfig.layoutSelect == "cosmicpanda-3" ||
BTConfig.layoutSelect == "hitchhiker-2013-1" ||
BTConfig.layoutSelect == "hitchhiker-2013-2" ||
BTConfig.layoutSelect == "hitchhiker-2013-3"
)	{
	playerSize.width = 640;
	playerSize.height = 360;
	document.querySelector("html").setAttribute("player-width", "640");
	document.querySelector("html").setAttribute("player-height", "360");
}
let observerComments;
let observerRelated;
let intervalsArray = [];
let isCheckingRecalc = false;
function waitFor(selector, interval, callback, timeout = 100 * 600 * 1000) {
	let wait = setInterval(() => {
		let element = document.querySelector(selector);
		if (element != null) {
			stopInterval(wait);
			callback();
		}
	}, interval);

	let stopInterval = (interval) => {
		clearInterval(interval);
		wait = undefined;
		let index = intervalsArray.indexOf(interval); //get index of and remove the previously added interval from array when it's cleared
		if (index !== -1) {
			intervalsArray.splice(index, 1);
		}
	};

	if (timeout) {
		setTimeout(() => {
			if (wait) {
				stopInterval(wait);
			}
		}, timeout);
	}

	intervalsArray.push(wait); //add current interval to array
}
if (
	BTConfig.noFlexy ||
	BTConfig.layoutSelect == "stargazer-2008-1" ||
	BTConfig.layoutSelect == "stargazer-2009-3" ||
	BTConfig.layoutSelect == "aozora-2011" ||
	BTConfig.layoutSelect == "cosmicpanda-3" ||
	BTConfig.layoutSelect == "hitchhiker-2013-1" ||
	BTConfig.layoutSelect == "hitchhiker-2013-2" ||
	BTConfig.layoutSelect == "hitchhiker-2013-3"
) {
	reCalculation();
}
function reCalculation() {
	if (BTVars.btlocation == "watch") {
		if (document.querySelector("ytd-app") != null) {
			if (BTConfig.noFlexy) {
				if (BTConfig.videoPlayerStyle == "PSTauto") {
					if (
					BTConfig.layoutSelect == "hitchhiker-2015" ||
					BTConfig.layoutSelect == "hitchhiker-2014" ||
					BTConfig.layoutSelect == "hitchhiker-2013-3" ||
					BTConfig.layoutSelect == "hitchhiker-2013-2" ||
					BTConfig.layoutSelect == "hitchhiker-2013-1" ||
					BTConfig.layoutSelect == "cosmicpanda-3" ||
					BTConfig.layoutSelect == "aozora-2011" ||
					BTConfig.layoutSelect == "stargazer-2009-3" ||
					BTConfig.layoutSelect == "stargazer-2009-2" ||
					BTConfig.layoutSelect == "stargazer-2009-1" ||
					BTConfig.layoutSelect == "stargazer-2008-1"
					) {
						var playerOffsetWidth = 24;
						document.querySelector("html").setAttribute("player-offset","24");
					}
				} else if (
					BTConfig.videoPlayerStyle == "PST2013" ||
					BTConfig.videoPlayerStyle == "PST2012"
				) {
					var playerOffsetWidth = 24;
					document.querySelector("html").setAttribute("player-offset","24");
				} else {
					var playerOffsetWidth = 0;
					document.querySelector("html").setAttribute("player-offset","0");
				}
			}
			if (document.querySelector("#bt-recalc-script") == null) {
				let script = document.createElement('script');
				script.id = 'bt-recalc-script';
				script.src = browser.runtime.getURL('/scripts/resize.js');
				document.body.append(script);
			}
		}
	}
}
/* ----------------------------------------------------------- BT START ----------------------------------------------------------- */
/* BTSection getPREF */
/* global vars test */
var ytdApp = "placeholder";

var canGo = false;
function timeout(durationMs)
{
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            resolve();
        }, durationMs);
    } );
}
async function waitForElement(elm)
{
    while (null == document.querySelector(elm))
    {
        await new Promise(r => requestAnimationFrame(r));
    }
	await timeout(1).then(function() {
		canGo = true;
		return document.querySelector(elm);
	});
}
async function waitForElement500(elm)
{
    while (null == document.querySelector(elm))
    {
        await new Promise(r => requestAnimationFrame(r));
    }
	await timeout(500).then(function() {
		canGo = true;
		return document.querySelector(elm);
	});
}
console.log("ytdApp" + ytdApp);
if (BTConfig.logoEndpoint == "LESubscriptions") {
	var elm = "ytd-app";
	waitForElement500(elm).then(function(elm) {
		if (canGo != false) {
			let modifyYtdApp = document.createElement('script');
			modifyYtdApp.id = 'customtube-logo-script';
			modifyYtdApp.src = browser.runtime.getURL('/scripts/logo-endpoint.js');
			document.body.append(modifyYtdApp);
		}
	});
}

/* TODO: remove
var elm = "#bt-your-vids-button";
waitForElement(elm).then(function(elm) {
	if (canGo != false) {
		if (BTConfig.lowerCaseC) {
			sessionStorage.setItem("lowerCaseC", true);
		}
		if (!BTConfig.lowerCaseC) {
			sessionStorage.setItem("lowerCaseC", false);
		}
		let modifyYtdApp = document.createElement('script');
		modifyYtdApp.src = browser.runtime.getURL('/scripts/my-channel-btn.js');
		document.body.append(modifyYtdApp);
		tasks.populatedMyChannelButton = true;
	}
});
*/
var elm = "#bt-trending-button";
waitForElement(elm).then(function(elm) {
	if (canGo != false) {
		setTimeout(startTrendingButton, 100);
		function startTrendingButton() {
			if (tasks.createdNewTrendingButton == false) {
				setTimeout(startTrendingButton, 200);
			} else {
				let modifyYtdApp = document.createElement('script');
				modifyYtdApp.src = browser.runtime.getURL('/scripts/trending-btn.js');
				document.body.append(modifyYtdApp);
				tasks.populatedTrendingButton = true;
			}
		}
	}
});

waitFor('ytd-app', 50, getInitialVariables);
waitFor('ytd-app', 50, assignOnInitialLoad);
waitFor('ytd-app', 50, urlListen);
setTimeout(createNewElements, 1);
setTimeout(moveElements, 1);
waitFor('html', 50, repeatedActions);
// IMPORTANT: This function is passive! It is for getting variables only! This function is NOT for executing foreign functions! Stuff like my channel will need a thing here as well as elsewhere.
function getInitialVariables() {
	waitFor('ytd-topbar-menu-button-renderer', 250, getSignedOut);
	setTimeout(getRYD, 5);
	setTimeout(getBetterSearch, 5);
	setTimeout(getLayout, 5);
	setTimeout(getPlayerStyle, 10);
	setTimeout(getMaterialSearch, 10);
	setTimeout(getCVDD, 10);
	setTimeout(getCVPR, 10);
	setTimeout(getHPVPR, 10);
	setTimeout(getSVPR, 10);
	setTimeout(getHSS, 10);
	setTimeout(getVidRenSize, 10);
	setTimeout(getSquare, 10);
	setTimeout(getShowSidebar, 10);
	setTimeout(getMyChannel, 10);
	setTimeout(getFSNoScroll, 10);
	setTimeout(getInfiScroll, 10);
	setTimeout(getFlexyPlayerOverride, 10);
	setTimeout(getJoin, 10);
	setTimeout(getClip, 10);
	setTimeout(getThanks, 10);
	setTimeout(getDownload, 10);
	setTimeout(getCast, 10);
	setTimeout(getTrimmedViewCount, 15);
	setTimeout(getRelatedVideos, 10);
	setTimeout(getTFI, 10);
	setTimeout(getSVL, 10);
	setTimeout(getAppbar, 5);
	setTimeout(getHref, 5);
	
	function getSignedOut() {
		if (document.querySelector("a[aria-label='Sign in']") != null) {
			document.querySelector("html").setAttribute("signed-out", "");
		}
	}
	function getRYD() {
		if (!BTConfig.iUseRYD) {
			document.querySelector("ytd-app").setAttribute("no-ryd", "");
			document.querySelector("html").setAttribute("no-ryd", "");
		}
	}
	function getBetterSearch() {
		if (BTConfig.betterSearch) {
			document.querySelector("html").setAttribute("better-search", "");
		}
	}
	function getLayout() {
		document.querySelector("html").setAttribute("comment-focus", "false");
		document.querySelector("html").setAttribute("title-on-top", "false");
		document.querySelector("html").setAttribute("meta-on-side", "false");
		document.querySelector("html").setAttribute("upload-btn", "false");
		document.querySelector("html").setAttribute("rating-type", "ltod");
		document.querySelector("html").setAttribute("related-videos-size", "large");
		document.querySelector("html").setAttribute("button-style", "amsterdam-2023");
		document.querySelector("html").setAttribute("show-videos-link", "false"); 
		document.querySelector("html").setAttribute("use-appbar", "false");
		if (BTConfig.layoutSelect == "none") {
			document.querySelector("html").setAttribute("nolayout", "");
			document.querySelector("html").setAttribute("icon-type", "outline");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "disabled");
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "false");
		}
		if (BTConfig.layoutSelect == "amsterdam-2022") {
			document.querySelector("html").setAttribute("layout", "amsterdam-2022");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("homepage", "rich-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "rich-grid");
			document.querySelector("html").setAttribute("grid-styling", "polymer-2021"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 
			document.querySelector("html").setAttribute("icon-type", "outline");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "disabled");
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
		}
		if (BTConfig.layoutSelect == "polymer-2022") {
			document.querySelector("html").setAttribute("global-color-palette", "polymer-2021");
			//document.querySelector("ytd-app").setAttribute("layout", "polymer");
			document.querySelector("html").setAttribute("layout", "polymer-2022");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "polymer-2022");
			//document.querySelector("ytd-app").setAttribute("layout-theme", "polymer-2022");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "polymer-2022");
			document.querySelector("html").setAttribute("watch-metadata-style", "polymer-2022");
			//document.querySelector("html").setAttribute("player-style", "2021");
			document.querySelector("html").setAttribute("chips-style", "polymer-2022");
			document.querySelector("html").setAttribute("topbar-style", "polymer-2022");
			document.querySelector("html").setAttribute("header-style", "polymer-2022");
			document.querySelector("html").setAttribute("sidebar-style", "polymer-2022");
			document.querySelector("html").setAttribute("homepage", "rich-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "polymer-2022"); 
			document.querySelector("html").setAttribute("show-upload-date-next-to-view-count", "false");
			document.querySelector("html").setAttribute("show-upload-date-next-to-pfp", "false");
			document.querySelector("html").setAttribute("sub-button-nested-sub-count", "false");
			document.querySelector("html").setAttribute("related-videos-size", "large");
			document.querySelector("html").setAttribute("video-renderer-size", "360");
			document.querySelector("html").setAttribute("upload-btn", "false");
			document.querySelector("html").setAttribute("search-style", "polymer-2022");
			document.querySelector("html").setAttribute("channel-style", "polymer-2022");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("icon-type", "outline");
			document.querySelector("html").setAttribute("button-style", "polymer-2022");
			document.querySelector("html").setAttribute("thumbnail-style", "polymer-2022");
		}
		if (BTConfig.layoutSelect == "polymer-2021") {
			document.querySelector("html").setAttribute("global-color-palette", "polymer-2021");
			//document.querySelector("ytd-app").setAttribute("layout", "polymer");
			document.querySelector("html").setAttribute("layout", "polymer-2021");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "polymer-2021");
			//document.querySelector("ytd-app").setAttribute("layout-theme", "polymer-2021");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "polymer-2021");
			document.querySelector("html").setAttribute("watch-metadata-style", "polymer-2021");
			//document.querySelector("html").setAttribute("player-style", "2021");
			document.querySelector("html").setAttribute("chips-style", "polymer-2021");
			document.querySelector("html").setAttribute("topbar-style", "polymer-2021");
			document.querySelector("html").setAttribute("header-style", "polymer-2021");
			document.querySelector("html").setAttribute("sidebar-style", "polymer-2021");
			document.querySelector("html").setAttribute("homepage", "rich-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "polymer-2021"); 
			document.querySelector("html").setAttribute("show-upload-date-next-to-view-count", "true");
			document.querySelector("html").setAttribute("show-upload-date-next-to-pfp", "false");
			document.querySelector("html").setAttribute("sub-button-nested-sub-count", "false");
			document.querySelector("html").setAttribute("related-videos-size", "large");
			document.querySelector("html").setAttribute("video-renderer-size", "360");
			document.querySelector("html").setAttribute("upload-btn", "false");
			document.querySelector("html").setAttribute("search-style", "polymer-2021");
			document.querySelector("html").setAttribute("channel-style", "polymer-2021");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("icon-type", "outline");
			document.querySelector("html").setAttribute("button-style", "polymer-2021");
			document.querySelector("html").setAttribute("thumbnail-style", "polymer-2021");
		}
		if (BTConfig.layoutSelect == "polymer-2020") {
			document.querySelector("html").setAttribute("global-color-palette", "polymer-2020");
			//document.querySelector("ytd-app").setAttribute("layout", "polymer");
			document.querySelector("html").setAttribute("layout", "polymer-2020");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "polymer-2020");
			//document.querySelector("ytd-app").setAttribute("layout-theme", "polymer-2020");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "polymer-2020");
			document.querySelector("html").setAttribute("watch-metadata-style", "polymer-2020");
			//document.querySelector("html").setAttribute("player-style", "2020");
			document.querySelector("html").setAttribute("chips-style", "polymer-2020");
			document.querySelector("html").setAttribute("topbar-style", "polymer-2020");
			document.querySelector("html").setAttribute("header-style", "polymer-2020");
			document.querySelector("html").setAttribute("sidebar-style", "polymer-2020");
			document.querySelector("html").setAttribute("homepage", "rich-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "polymer-2020"); 
			document.querySelector("html").setAttribute("show-upload-date-next-to-view-count", "true");
			document.querySelector("html").setAttribute("show-upload-date-next-to-pfp", "false");
			document.querySelector("html").setAttribute("sub-button-nested-sub-count", "false");
			document.querySelector("html").setAttribute("related-videos-size", "large");
			document.querySelector("html").setAttribute("video-renderer-size", "360");
			document.querySelector("html").setAttribute("upload-btn", "false");
			document.querySelector("html").setAttribute("search-style", "polymer-2020");
			document.querySelector("html").setAttribute("channel-style", "polymer-2020");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "polymer-2020");
			document.querySelector("html").setAttribute("thumbnail-style", "polymer-2020");
		}
		if (BTConfig.layoutSelect == "polymer-2019") {
			document.querySelector("html").setAttribute("global-color-palette", "polymer-2019");
			//document.querySelector("ytd-app").setAttribute("layout", "polymer");
			document.querySelector("html").setAttribute("layout", "polymer-2019");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "polymer-2019");
			//document.querySelector("ytd-app").setAttribute("layout-theme", "polymer-2019");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "polymer-2019");
			document.querySelector("html").setAttribute("watch-metadata-style", "polymer-2019");
			//ocument.querySelector("html").setAttribute("player-style", "2019");
			document.querySelector("html").setAttribute("chips-style", "polymer-2019");
			document.querySelector("html").setAttribute("topbar-style", "polymer-2019");
			document.querySelector("html").setAttribute("header-style", "polymer-2019");
			document.querySelector("html").setAttribute("sidebar-style", "polymer-2019");
			document.querySelector("html").setAttribute("homepage", "small-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "polymer-2019"); 
			document.querySelector("html").setAttribute("show-upload-date-next-to-pfp", "true");
			document.querySelector("html").setAttribute("sub-button-nested-sub-count", "true");
			document.querySelector("html").setAttribute("related-videos-size", "large");
			document.querySelector("html").setAttribute("video-renderer-size", "246");
			document.querySelector("html").setAttribute("upload-btn", "false");
			document.querySelector("html").setAttribute("search-style", "polymer-2019");
			document.querySelector("html").setAttribute("channel-style", "polymer-2019");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "polymer-2019");
			document.querySelector("html").setAttribute("thumbnail-style", "polymer-2019");
		}
		if (BTConfig.layoutSelect == "hitchhiker-2017") {
			document.querySelector("html").setAttribute("global-color-palette", "hitchhiker-2017");
			//document.querySelector("ytd-app").setAttribute("layout", "hitchhiker");
			document.querySelector("html").setAttribute("layout", "hitchhiker-2017");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "hitchhiker-2017");
			//document.querySelector("ytd-app").setAttribute("layout-theme", "hitchhiker-2017");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-placeholder-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("watch-metadata-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("player-style", "2015");
			document.querySelector("html").setAttribute("logo", "minimalism");
			document.querySelector("html").setAttribute("chips-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("topbar-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("header-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("sidebar-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("homepage", "small-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "hitchhiker-2017"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "large");
			document.querySelector("html").setAttribute("video-renderer-size", "246");
			document.querySelector("html").setAttribute("upload-btn", "false");
			document.querySelector("html").setAttribute("search-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("comments-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("channel-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("gaming-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("thumbnail-style", "hitchhiker-2017");
			document.querySelector("html").setAttribute("use-appbar", "true");
			//document.querySelector("html").setAttribute("watched-overlay", "hitchhiker-2017");
		}
		if (BTConfig.layoutSelect == "hitchhiker-2016") {
			document.querySelector("html").setAttribute("global-color-palette", "hitchhiker-2016");
			//document.querySelector("ytd-app").setAttribute("layout", "hitchhiker");
			document.querySelector("html").setAttribute("layout", "hitchhiker-2016");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "hitchhiker-2016");
			//document.querySelector("ytd-app").setAttribute("layout-theme", "hitchhiker-2016");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("player-style", "2015");
			document.querySelector("html").setAttribute("logo", "iconic");
			document.querySelector("html").setAttribute("chips-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("topbar-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("header-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("sidebar-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("homepage", "small-grid");
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "hitchhiker-2016"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "small");
			document.querySelector("html").setAttribute("video-renderer-size", "196");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("search-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("comments-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("channel-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("gaming-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("thumbnail-style", "hitchhiker-2016");
			document.querySelector("html").setAttribute("use-appbar", "true");
			//document.querySelector("html").setAttribute("watched-overlay", "hitchhiker-2016");
		}
		if (BTConfig.layoutSelect == "hitchhiker-2015") {
			document.querySelector("html").setAttribute("global-color-palette", "hitchhiker-2015");
			document.querySelector("ytd-app").setAttribute("layout", "hitchhiker");
			document.querySelector("html").setAttribute("layout", "hitchhiker-2015");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "hitchhiker-2015");
			document.querySelector("ytd-app").setAttribute("layout-theme", "hitchhiker-2015");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("player-style", "2013");
			document.querySelector("html").setAttribute("logo", "shady");
			document.querySelector("html").setAttribute("chips-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("topbar-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("header-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("sidebar-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("homepage", "small-grid");
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "hitchhiker-2015"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "small");
			document.querySelector("html").setAttribute("video-renderer-size", "196");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("search-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("comments-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("channel-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("gaming-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("thumbnail-style", "hitchhiker-2015");
			document.querySelector("html").setAttribute("use-appbar", "true");
			//document.querySelector("html").setAttribute("watched-overlay", "hitchhiker-2015");
		}
		if (BTConfig.layoutSelect == "hitchhiker-2014") {
			document.querySelector("html").setAttribute("global-color-palette", "hitchhiker-2014");
			document.querySelector("ytd-app").setAttribute("layout", "hitchhiker");
			document.querySelector("html").setAttribute("layout", "hitchhiker-2014");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "hitchhiker-2014");
			document.querySelector("ytd-app").setAttribute("layout-theme", "hitchhiker-2014");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("player-style", "2013");
			document.querySelector("html").setAttribute("logo", "shady");
			document.querySelector("html").setAttribute("chips-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("topbar-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("header-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("sidebar-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("homepage", "small-grid");
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid");
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "hitchhiker-2014"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "small");
			document.querySelector("html").setAttribute("video-renderer-size", "196");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("search-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("comments-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("gaming-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("channel-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "hitchhiker-2013");
			document.querySelector("html").setAttribute("thumbnail-style", "hitchhiker-2014");
			document.querySelector("html").setAttribute("use-appbar", "true");
			//document.querySelector("html").setAttribute("watched-overlay", "hitchhiker-2014");
			document.querySelector("html").setAttribute("show-videos-link", "true"); 
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-3") {
			document.querySelector("html").setAttribute("global-color-palette", "hitchhiker-2013-3");
			document.querySelector("ytd-app").setAttribute("layout", "hitchhiker");
			document.querySelector("html").setAttribute("layout", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "hitchhiker-2013-3");
			document.querySelector("ytd-app").setAttribute("layout-theme", "hitchhiker-2013-3");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("player-style", "2013");
			document.querySelector("html").setAttribute("logo", "shady");
			document.querySelector("html").setAttribute("chips-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("topbar-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("header-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("sidebar-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("homepage", "small-grid");
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid");
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "hitchhiker-2013-3"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "small");
			document.querySelector("html").setAttribute("video-renderer-size", "185");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("search-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("comments-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("channel-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("gaming-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("pseudo-static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("thumbnail-style", "hitchhiker-2013-3");
			//document.querySelector("html").setAttribute("watched-overlay", "hitchhiker-2013-3");
			document.querySelector("html").setAttribute("show-videos-link", "true"); 
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-2") {
			document.querySelector("html").setAttribute("global-color-palette", "hitchhiker-2013-2");
			document.querySelector("ytd-app").setAttribute("layout", "hitchhiker");
			document.querySelector("html").setAttribute("layout", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "hitchhiker-2013-2");
			document.querySelector("ytd-app").setAttribute("layout-theme", "hitchhiker-2013-2");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("player-style", "2013");
			document.querySelector("html").setAttribute("logo", "squished");
			document.querySelector("html").setAttribute("chips-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("topbar-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("header-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("sidebar-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("homepage", "small-grid");
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid");
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "hitchhiker-2013-2"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "small");
			document.querySelector("html").setAttribute("video-renderer-size", "185");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("search-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("comments-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("channel-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("gaming-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("pseudo-static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("thumbnail-style", "hitchhiker-2013-2");
			//document.querySelector("html").setAttribute("watched-overlay", "hitchhiker-2013-2");
			document.querySelector("html").setAttribute("show-videos-link", "true"); 
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-1") {
			document.querySelector("html").setAttribute("global-color-palette", "hitchhiker-2013-1");
			document.querySelector("ytd-app").setAttribute("layout", "hitchhiker");
			document.querySelector("html").setAttribute("layout", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "hitchhiker-2013-1");
			document.querySelector("ytd-app").setAttribute("layout-theme", "hitchhiker-2013-1");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("player-style", "2013");
			document.querySelector("html").setAttribute("logo", "squished");
			document.querySelector("html").setAttribute("chips-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("topbar-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("header-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("sidebar-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("homepage", "small-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "hitchhiker-2013-1"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "small");
			document.querySelector("html").setAttribute("video-renderer-size", "185");
			document.querySelector("html").setAttribute("search-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("comments-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("channel-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("gaming-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("pseudo-static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("thumbnail-style", "hitchhiker-2013-1");
			//document.querySelector("html").setAttribute("watched-overlay", "hitchhiker-2013-1");
			document.querySelector("html").setAttribute("show-videos-link", "true"); 
		}
		if (BTConfig.layoutSelect == "cosmicpanda-3") {
			document.querySelector("html").setAttribute("global-color-palette", "cosmicpanda-3");
			document.querySelector("ytd-app").setAttribute("layout", "cosmicpanda");
			document.querySelector("html").setAttribute("layout", "cosmicpanda-3");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "cosmicpanda-3");
			document.querySelector("ytd-app").setAttribute("layout-theme", "cosmicpanda-3");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("player-style", "2012");
			document.querySelector("html").setAttribute("logo", "soft");
			document.querySelector("html").setAttribute("chips-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("topbar-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("header-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("header-visible", "");
			document.querySelector("html").setAttribute("sidebar-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("homepage", "list"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "small-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "cosmicpanda-3"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "small");
			document.querySelector("html").setAttribute("video-renderer-size", "138");
			document.querySelector("html").setAttribute("search-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("comments-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("channel-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("gaming-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("static", "");
			document.querySelector("ytd-app").setAttribute("static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("title-on-top", "true");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "cosmicpanda-3");
			document.querySelector("html").setAttribute("thumbnail-style", "cosmicpanda-3");
		}
		if (BTConfig.layoutSelect == "aozora-2011") {
			document.querySelector("html").setAttribute("global-color-palette", "aozora-2011");
			document.querySelector("ytd-app").setAttribute("layout", "cosmicpanda");
			document.querySelector("html").setAttribute("layout", "aozora-2011");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "aozora-2011");
			document.querySelector("ytd-app").setAttribute("layout-theme", "aozora-2011");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "aozora-2011");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "aozora-2011");
			document.querySelector("html").setAttribute("player-style", "2012");
			document.querySelector("html").setAttribute("logo", "glossy");
			document.querySelector("html").setAttribute("chips-style", "aozora-2011");
			document.querySelector("html").setAttribute("topbar-style", "aozora-2011");
			document.querySelector("html").setAttribute("header-style", "aozora-2011");
			document.querySelector("html").setAttribute("sidebar-style", "aozora-2011");
			document.querySelector("html").setAttribute("guide-right-aligned", "");
			document.querySelector("html").setAttribute("homepage", "smaller-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "smaller-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "aozora-2011"); 
			document.querySelector("html").setAttribute("show-upload-date-inside-desc", "true");
			document.querySelector("html").setAttribute("related-videos-size", "smaller");
			document.querySelector("html").setAttribute("video-renderer-size", "138");
			document.querySelector("html").setAttribute("search-style", "aozora-2011");
			document.querySelector("html").setAttribute("comments-style", "aozora-2011");
			document.querySelector("html").setAttribute("channel-style", "aozora-2011");
			document.querySelector("html").setAttribute("gaming-style", "aozora-2011");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("static", "");
			document.querySelector("ytd-app").setAttribute("static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("title-on-top", "true");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "aozora-2011");
			document.querySelector("html").setAttribute("thumbnail-style", "aozora-2011");
		}
		if (BTConfig.layoutSelect == "stargazer-2009-3") {
			document.querySelector("html").setAttribute("global-color-palette", "stargazer-2009-3");
			document.querySelector("ytd-app").setAttribute("layout", "cosmicpanda");
			document.querySelector("html").setAttribute("layout", "stargazer-2009-3");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "stargazer-2009-3");
			document.querySelector("ytd-app").setAttribute("layout-theme", "stargazer-2009-3");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("rating-type", "stars");
			document.querySelector("html").setAttribute("player-style", "2012");
			document.querySelector("html").setAttribute("logo", "broadcast");
			document.querySelector("html").setAttribute("chips-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("topbar-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("header-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("sidebar-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("guide-right-aligned", "");
			document.querySelector("html").setAttribute("homepage", "smaller-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "smaller-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "stargazer-2009-3"); 
			document.querySelector("html").setAttribute("show-upload-date-next-to-pfp", "true");
			document.querySelector("html").setAttribute("related-videos-size", "smaller");
			document.querySelector("html").setAttribute("video-renderer-size", "138");
			document.querySelector("html").setAttribute("search-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("comments-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("channel-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("gaming-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("static", "");
			document.querySelector("ytd-app").setAttribute("static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("title-on-top", "true");
			document.querySelector("html").setAttribute("meta-on-side", "true");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "stargazer-2009-3");
			document.querySelector("html").setAttribute("thumbnail-style", "stargazer-2009-3");
		}
		if (BTConfig.layoutSelect == "stargazer-2009-2") {
			document.querySelector("html").setAttribute("global-color-palette", "stargazer-2009-2");
			document.querySelector("ytd-app").setAttribute("layout", "cosmicpanda");
			document.querySelector("html").setAttribute("layout", "stargazer-2009-2");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "stargazer-2009-2");
			document.querySelector("ytd-app").setAttribute("layout-theme", "stargazer-2009-2");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("rating-type", "stars");
			document.querySelector("html").setAttribute("player-style", "2012");
			document.querySelector("html").setAttribute("logo", "broadcast");
			document.querySelector("html").setAttribute("chips-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("topbar-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("header-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("sidebar-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("guide-right-aligned", "");
			document.querySelector("html").setAttribute("homepage", "smaller-grid"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "smaller-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "stargazer-2009-2"); 
			document.querySelector("html").setAttribute("show-upload-date-next-to-pfp", "true");
			document.querySelector("html").setAttribute("related-videos-size", "smaller");
			document.querySelector("html").setAttribute("video-renderer-size", "138");
			document.querySelector("html").setAttribute("search-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("comments-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("channel-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("gaming-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("static", "");
			document.querySelector("ytd-app").setAttribute("static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("title-on-top", "true");
			document.querySelector("html").setAttribute("meta-on-side", "true");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "stargazer-2009-2");
			document.querySelector("html").setAttribute("thumbnail-style", "stargazer-2009-2");
		}
		if (BTConfig.layoutSelect == "stargazer-2009-1") {
			document.querySelector("html").setAttribute("global-color-palette", "stargazer-2009-1");
			document.querySelector("ytd-app").setAttribute("layout", "cosmicpanda");
			document.querySelector("html").setAttribute("layout", "stargazer-2009-1");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "stargazer-2009-1");
			document.querySelector("ytd-app").setAttribute("layout-theme", "stargazer-2009-1");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("rating-type", "stars");
			document.querySelector("html").setAttribute("player-style", "2012");
			document.querySelector("html").setAttribute("logo", "broadcast");
			document.querySelector("html").setAttribute("chips-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("topbar-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("header-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("sidebar-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("guide-right-aligned", "");
			document.querySelector("html").setAttribute("homepage", "small-list"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "smaller-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "stargazer-2009-1"); 
			document.querySelector("html").setAttribute("show-upload-date-next-to-pfp", "true");
			document.querySelector("html").setAttribute("related-videos-size", "smaller");
			document.querySelector("html").setAttribute("video-renderer-size", "138");
			document.querySelector("html").setAttribute("search-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("comments-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("channel-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("gaming-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("static", "");
			document.querySelector("ytd-app").setAttribute("static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("title-on-top", "true");
			document.querySelector("html").setAttribute("meta-on-side", "true");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "stargazer-2009-1");
			document.querySelector("html").setAttribute("thumbnail-style", "stargazer-2009-1");
		}
		if (BTConfig.layoutSelect == "stargazer-2008-1") {
			document.querySelector("html").setAttribute("global-color-palette", "stargazer-2008-1");
			document.querySelector("ytd-app").setAttribute("layout", "cosmicpanda");
			document.querySelector("html").setAttribute("layout", "stargazer-2008-1");
			document.querySelector("html").setAttribute("channel-rework", "true");
			document.querySelector("html").setAttribute("related-videos", "stargazer-2008-1");
			document.querySelector("ytd-app").setAttribute("layout-theme", "stargazer-2008-1");
			//document.querySelector("html").setAttribute("layout-theme", "hitchhiker-2017");
			document.querySelector("html").setAttribute("search-bar-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("search-placeholder-style", "invisible");
			document.querySelector("html").setAttribute("watch-metadata-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("rating-type", "stars");
			document.querySelector("html").setAttribute("player-style", "2012");
			document.querySelector("html").setAttribute("logo", "2008");
			document.querySelector("html").setAttribute("chips-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("topbar-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("header-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("sidebar-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("guide-right-aligned", "");
			document.querySelector("html").setAttribute("homepage", "small-list"); 
			document.querySelector("html").setAttribute("channel-vidpage", "small-grid"); 
			document.querySelector("html").setAttribute("subs-page", "smaller-grid"); 		
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
			document.querySelector("html").setAttribute("homepage-columns", "2"); 
			document.querySelector("html").setAttribute("grid-styling", "stargazer-2008-1"); 
			document.querySelector("html").setAttribute("show-upload-date-next-to-pfp", "true");
			document.querySelector("html").setAttribute("related-videos-size", "smaller");
			document.querySelector("html").setAttribute("video-renderer-size", "138");
			document.querySelector("html").setAttribute("search-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("comments-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("channel-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("gaming-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("upload-btn", "true");
			document.querySelector("html").setAttribute("static-scrolling", "");
			document.querySelector("ytd-app").setAttribute("static-scrolling", "");
			document.querySelector("html").setAttribute("static", "");
			document.querySelector("ytd-app").setAttribute("static", "");
			document.querySelector("html").setAttribute("unrounded-vids", "");
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
			document.querySelector("html").setAttribute("title-on-top", "true");
			document.querySelector("html").setAttribute("meta-on-side", "true");
			document.querySelector("html").setAttribute("menu-style", "unrounded");
			document.querySelector("html").setAttribute("classic-ltod-strings", "true");
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
			document.querySelector("html").setAttribute("button-style", "stargazer-2008-1");
			document.querySelector("html").setAttribute("thumbnail-style", "stargazer-2008-1");
		}
	}
	function getPlayerStyle() {
		if (BTConfig.videoPlayerStyle == "PST2012") {
			document.querySelector("html").setAttribute("player-style", "2012");
		}
		if (BTConfig.videoPlayerStyle == "PST2013") {
			document.querySelector("html").setAttribute("player-style", "2013");
		}
		if (BTConfig.videoPlayerStyle == "PST2015") {
			document.querySelector("html").setAttribute("player-style", "2015");
		}
		/*if (BTConfig.videoPlayerStyle == "PST2019") {
			document.querySelector("html").setAttribute("player-style", "2019");
		}
		if (BTConfig.videoPlayerStyle == "PST2020") {
			document.querySelector("html").setAttribute("player-style", "2020");
		}
		*/
		if (BTConfig.videoPlayerStyle == "PST2021") {
			document.querySelector("html").setAttribute("player-style", "");
			document.querySelector("html").removeAttribute("player-style");
		}
	}
	function getMaterialSearch() {
		if (BTConfig.searchbarStyle == "material") {
			document.querySelector("html").setAttribute("search-bar-style", "material");
			document.querySelector("html").setAttribute("search-placeholder-style", "material");
		}
	}
	function getCVDD() {
		if (BTConfig.channelVidsDropdown == "CVDDon") {
			document.querySelector("html").setAttribute("channel-vids-dropdown", "true");
		}
		if (BTConfig.channelVidsDropdown == "CVDDoff") {
			document.querySelector("html").setAttribute("channel-vids-dropdown", "false");
		}
	}
	function getCVPR() {
		if (
			BTConfig.layoutSelect != "stargazer-2008-1" ||
			BTConfig.layoutSelect != "stargazer-2009-3" ||
			BTConfig.layoutSelect != "aozora-2010" ||
			BTConfig.layoutSelect != "aozora-2011" ||
			BTConfig.layoutSelect != "cosmicpanda-3"
		) {
			if (BTConfig.channelVidsPerRow == "CVPR1") {
				document.querySelector("html").setAttribute("channel-vidpage", "list");
			}
			if (BTConfig.channelVidsPerRow == "CVPR2") {
				document.querySelector("html").setAttribute("channel-vids-per-row", "2");
				document.querySelector("html").setAttribute("channel-vidpage", "small-grid");
			}
			if (BTConfig.channelVidsPerRow == "CVPR3") {
				document.querySelector("html").setAttribute("channel-vids-per-row", "3");
				document.querySelector("html").setAttribute("channel-vidpage", "small-grid");
			}
			if (BTConfig.channelVidsPerRow == "CVPR4") {
				document.querySelector("html").setAttribute("channel-vids-per-row", "4");
				document.querySelector("html").setAttribute("channel-vidpage", "small-grid");
			}
			if (BTConfig.channelVidsPerRow == "CVPR5") {
				document.querySelector("html").setAttribute("channel-vids-per-row", "5");
				document.querySelector("html").setAttribute("channel-vidpage", "small-grid");
			}
			if (BTConfig.channelVidsPerRow == "CVPR6") {
				document.querySelector("html").setAttribute("channel-vids-per-row", "6");
				document.querySelector("html").setAttribute("channel-vidpage", "small-grid");
			}
			if (BTConfig.channelVidsPerRow == "CVPR7") {
				document.querySelector("html").setAttribute("channel-vids-per-row", "7");
				document.querySelector("html").setAttribute("channel-vidpage", "small-grid");
			}
			if (BTConfig.channelVidsPerRow == "CVPR8") {
				document.querySelector("html").setAttribute("channel-vids-per-row", "8");
				document.querySelector("html").setAttribute("channel-vidpage", "small-grid");
			}
		}
	}
	function getHPVPR() {
		if (
			BTConfig.layoutSelect != "stargazer-2008-1" ||
			BTConfig.layoutSelect != "stargazer-2009-3" ||
			BTConfig.layoutSelect != "aozora-2010" ||
			BTConfig.layoutSelect != "aozora-2011" ||
			BTConfig.layoutSelect != "cosmicpanda-3"
		) {
			if (BTConfig.homepageVidsPerRow == "HPVPR1") {
				document.querySelector("html").setAttribute("homepage", "list");
			}
			if (BTConfig.homepageVidsPerRow == "HPVPR2") {
				document.querySelector("html").setAttribute("homepage-vids-per-row", "2");
				document.querySelector("html").setAttribute("homepage", "small-grid");
			}
			if (BTConfig.homepageVidsPerRow == "HPVPR3") {
				document.querySelector("html").setAttribute("homepage-vids-per-row", "3");
				document.querySelector("html").setAttribute("homepage", "small-grid");
			}
			if (BTConfig.homepageVidsPerRow == "HPVPR4") {
				document.querySelector("html").setAttribute("homepage-vids-per-row", "4");
				document.querySelector("html").setAttribute("homepage", "small-grid");
			}
			if (BTConfig.homepageVidsPerRow == "HPVPR5") {
				document.querySelector("html").setAttribute("homepage-vids-per-row", "5");
				document.querySelector("html").setAttribute("homepage", "small-grid");
			}
			if (BTConfig.homepageVidsPerRow == "HPVPR6") {
				document.querySelector("html").setAttribute("homepage-vids-per-row", "6");
				document.querySelector("html").setAttribute("homepage", "small-grid");
			}
			if (BTConfig.homepageVidsPerRow == "HPVPR7") {
				document.querySelector("html").setAttribute("homepage-vids-per-row", "7");
				document.querySelector("html").setAttribute("homepage", "small-grid");
			}
			if (BTConfig.homepageVidsPerRow == "HPVPR8") {
				document.querySelector("html").setAttribute("homepage-vids-per-row", "8");
				document.querySelector("html").setAttribute("homepage", "small-grid");
			}
		}
	}
	function getSVPR() {
		if (
			BTConfig.layoutSelect != "stargazer-2008-1" ||
			BTConfig.layoutSelect != "stargazer-2009-3" ||
			BTConfig.layoutSelect != "aozora-2010" ||
			BTConfig.layoutSelect != "aozora-2011" ||
			BTConfig.layoutSelect != "cosmicpanda-3"
		) {
			if (BTConfig.subsVidsPerRow == "SVPR1") {
				document.querySelector("html").setAttribute("subs-page", "list");
			}
			if (BTConfig.subsVidsPerRow == "SVPR2") {
				document.querySelector("html").setAttribute("subs-page-vids-per-row", "2");
				document.querySelector("html").setAttribute("subs-page", "small-grid");
			}
			if (BTConfig.subsVidsPerRow == "SVPR3") {
				document.querySelector("html").setAttribute("subs-page-vids-per-row", "3");
				document.querySelector("html").setAttribute("subs-page", "small-grid");
			}
			if (BTConfig.subsVidsPerRow == "SVPR4") {
				document.querySelector("html").setAttribute("subs-page-vids-per-row", "4");
				document.querySelector("html").setAttribute("subs-page", "small-grid");
			}
			if (BTConfig.subsVidsPerRow == "SVPR5") {
				document.querySelector("html").setAttribute("subs-page-vids-per-row", "5");
				document.querySelector("html").setAttribute("subs-page", "small-grid");
			}
			if (BTConfig.subsVidsPerRow == "SVPR6") {
				document.querySelector("html").setAttribute("subs-page-vids-per-row", "6");
				document.querySelector("html").setAttribute("subs-page", "small-grid");
			}
			if (BTConfig.subsVidsPerRow == "SVPR7") {
				document.querySelector("html").setAttribute("subs-page-vids-per-row", "7");
				document.querySelector("html").setAttribute("subs-page", "small-grid");
			}
			if (BTConfig.subsVidsPerRow == "SVPR8") {
				document.querySelector("html").setAttribute("subs-page-vids-per-row", "8");
				document.querySelector("html").setAttribute("subs-page", "small-grid");
			}
		}
	}
	function getHSS() {
		if (BTConfig.hideShortsSubs == "HSSon") {
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "true");
		}
		if (BTConfig.hideShortsSubs == "HSSoff") {
			document.querySelector("html").setAttribute("hide-shorts-shelf-subs", "false");
		}
	}
	function getVidRenSize() {
		if (BTConfig.videoRendererSize == "VRSize138") {
			document.querySelector("html").setAttribute("video-renderer-size", "138");
		}
		if (BTConfig.videoRendererSize == "VRSize185") {
			document.querySelector("html").setAttribute("video-renderer-size", "185");
		}
		if (BTConfig.videoRendererSize == "VRSize196") {
			document.querySelector("html").setAttribute("video-renderer-size", "196");
		}
		if (BTConfig.videoRendererSize == "VRSize246") {
			document.querySelector("html").setAttribute("video-renderer-size", "246");
		}
		if (BTConfig.videoRendererSize == "VRSize360") {
			document.querySelector("html").setAttribute("video-renderer-size", "360");
		}
		if (BTConfig.videoRendererSize == "VRSize420") {
			document.querySelector("html").setAttribute("video-renderer-size", "420");
		}
	}
	function getSquare() {
		if (BTConfig.squareVid) {
			document.querySelector("html").setAttribute("unrounded-vids", "");
		}
		if (BTConfig.squarePfp) {
			document.querySelector("html").setAttribute("unrounded-pfps", "strict");
		}
	}
	function getShowSidebar() {
		document.querySelector("html").setAttribute("sidebar-persistent", "false");
		if (BTConfig.alwaysShowSidebar) {
			document.querySelector("html").setAttribute("sidebar-persistent", "true");
		}
	}
	function getMyChannel() {
		document.querySelector("html").setAttribute("my-channel-btn", "false");
		if (BTConfig.myChannelSidebarBtn) {
			document.querySelector("html").setAttribute("my-channel-btn", "true");
		}
	}
	function getFSNoScroll() {
		document.querySelector("html").setAttribute("disable-fullscreen-scroll", "false");
		if (BTConfig.FSNoScroll) {
			document.querySelector("html").setAttribute("disable-fullscreen-scroll", "true");
		}
	}
	function getInfiScroll() {
		document.querySelector("html").setAttribute("disable-infi-scroll", "false");
		if (BTConfig.noInfi) {
			document.querySelector("html").setAttribute("disable-infi-scroll", "true");
		}
	}
	function getFlexyPlayerOverride() {
		if (BTConfig.noFlexy) {
			document.querySelector("html").setAttribute("disable-flexy-player", "true");
		}
		else if (
			BTConfig.layoutSelect != "polymer-2021" ||
			BTConfig.layoutSelect != "polymer-2020" ||
			BTConfig.layoutSelect != "polymer-2019" ||
			BTConfig.layoutSelect != "hitchhiker-2017" ||
			BTConfig.layoutSelect != "hitchhiker-2016" ||
			BTConfig.layoutSelect != "hitchhiker-2015" ||
			BTConfig.layoutSelect != "hitchhiker-2014"
		) {
			document.querySelector("html").setAttribute("player-style", "0");
			document.querySelector("html").removeAttribute("player-style");
			document.querySelector("html").setAttribute("disable-flexy-player", "true");
		}
	}
	function getJoin() {
		if (BTConfig.noJoin) {
			document.querySelector("html").setAttribute("no-join", "");
		}
	}
	function getClip() {
		if (BTConfig.noClip) {
			document.querySelector("html").setAttribute("no-clip", "");
		}
	}
	function getThanks() {
		if (BTConfig.noThanks) {
			document.querySelector("html").setAttribute("no-thanks", "");
		}
	}
	function getDownload() {
		if (BTConfig.noDownload) {
			document.querySelector("html").setAttribute("no-download", "");
		}
	}
	function getCast() {
		if (BTConfig.noCast) {
			document.querySelector("html").setAttribute("no-cast", "");
		}
	}
	function getTrimmedViewCount() {
		BTVars.trimViews = false;
		if (BTConfig.layoutSelect == "hitchhiker-2015") {
			BTVars.trimViews = true;
		}
		if (BTConfig.layoutSelect == "hitchhiker-2014") {
			BTVars.trimViews = true;
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-3") {
			BTVars.trimViews = true;
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-2") {
			BTVars.trimViews = true;
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-1") {
		    BTVars.trimViews = true;
		}
		if (BTConfig.layoutSelect == "cosmicpanda-3") {
		    BTVars.trimViews = true;
		}
		if (BTConfig.layoutSelect == "aozora-2011") {
		    BTVars.trimViews = true;
		}
	}
	function getRelatedVideos() {
		if (BTConfig.relatedSize == "smaller") {
			document.querySelector("html").setAttribute("related-videos-size", "smaller");
		}
		if (BTConfig.relatedSize == "small") {
			document.querySelector("html").setAttribute("related-videos-size", "small");
		}
		if (BTConfig.relatedSize == "medium") {
			document.querySelector("html").setAttribute("related-videos-size", "medium");
		}
		if (BTConfig.relatedSize == "large") {
			document.querySelector("html").setAttribute("related-videos-size", "large");
		}
	}
	function getTFI() {
		if (BTConfig.thumbFadeIn) {
			document.querySelector("html").setAttribute("thumbs-fade-in", "true");
		}
	}
	function getSVL() {
		if (BTConfig.showVideosLink == "SVLon") {
			document.querySelector("html").setAttribute("show-videos-link", "true");
		}
		if (BTConfig.showVideosLink == "SVLoff") {
			document.querySelector("html").setAttribute("show-videos-link", "false");
		}
	}
	function getAppbar() {
		if (BTConfig.useAppbar == "UABon") {
			document.querySelector("html").setAttribute("use-appbar", "true");
		}
		if (BTConfig.useAppbar == "UABoff") {
			document.querySelector("html").setAttribute("use-appbar", "false");
		}
		if (BTConfig.appbarMode == "ABMpinned") {
			if (document.querySelector("[static-scrolling]") == null) {
				document.querySelector("html").setAttribute("appbar-pinned", "");
			}
		}
	}
}
function assignOnInitialLoad() {
	waitFor('ytd-guide-entry-renderer #endpoint', 500, assignSidebarItems);
	/*var elm = "ytd-guide-entry-renderer #endpoint";
	waitForElement(elm).then(function(elm) {
		if (canGo != false) {
			assignSidebarItems();
		}
	});*/
	function assignSidebarItems() {
		var Section1 = document.querySelectorAll('ytd-guide-section-renderer')[0];
		var Section2 = document.querySelectorAll('ytd-guide-section-renderer')[1];
		Section1.querySelectorAll('ytd-guide-entry-renderer')[0].setAttribute("id", "bt-home-button");
		//Section1.querySelectorAll('ytd-guide-entry-renderer')[1].setAttribute("id", "bt-shorts-button");
		if (document.querySelector("ytd-guide-entry-renderer a[title='Shorts']") != null) {
			document.querySelector('ytd-guide-entry-renderer a[title="Shorts"]').parentNode.setAttribute("id", "bt-shorts-button");
		}
		if (document.querySelector("ytd-guide-entry-renderer a[href='/feed/subscriptions']") != null) {
			document.querySelector('ytd-guide-entry-renderer a[href="/feed/subscriptions"]').parentNode.setAttribute("id", "bt-subs-button");
		}
		if (document.querySelector("ytd-guide-entry-renderer a[href='/feed/library']") != null) {
			document.querySelector('ytd-guide-entry-renderer a[href="/feed/library"]').parentNode.setAttribute("identifier", "bt-library-button");
		}
		var loopThroughSidebarAssignments = setInterval(function() {
			if (document.querySelector("#endpoint[href='/playlist?list=LL']") != null) {
				if (document.querySelector("#bt-liked-vids-button") == null) {
					setTimeout(doLikedVidsBtn, 10);
				}
			}
			if (document.querySelector("ytd-guide-collapsible-entry-renderer[can-show-more]") != null) {
				if (document.querySelector("#bt-show-more-button") == null) {
					setTimeout(doDropDowns, 10);
				}
			}
			if (document.querySelector("#bt-your-vids-button") == null) {
				if (document.querySelector("ytd-guide-entry-renderer #endpoint[href^='https://studio.youtube.com/channel']") != null) {
					setTimeout(doYourVidsBtn, 10);
				} else if (document.querySelector("ytd-guide-section-renderer:nth-child(1) ytd-guide-collapsible-section-entry-renderer ytd-guide-entry-renderer:nth-child(2)") != null) {
					setTimeout(doYourVidsBtn2, 100);
				}
			}
			if (document.querySelector("#bt-watch-later-button") == null) {
				if (document.querySelector("#endpoint[href='/playlist?list=WL']") != null) {
					setTimeout(doWLBtn, 10);
				}
			}
			if (document.querySelector("ytd-guide-collapsible-section-entry-renderer ytd-guide-entry-renderer #endpoint[href^='/channel']") != null) {
				if (document.querySelector("#bt-your-channel-button") == null) {
					setTimeout(doYCBtn, 10);
				}
			}
			if (document.querySelector("#bt-liked-vids-button") != null) {
				if (document.querySelector("#bt-show-more-button") != null) {
					if (document.querySelector("#bt-show-more-button-2") != null) {
						clearInterval(loopThroughSidebarAssignments);
					}
				}
			}
		}, 250);
		function doLikedVidsBtn() {
			let likedVids = document.querySelector("#endpoint[href='/playlist?list=LL']");
			let likedVidsBtn = likedVids.parentNode;
			likedVidsBtn.setAttribute("id", "bt-liked-vids-button");
		}
		function doYourVidsBtn() {
			let yourVids = document.querySelector("ytd-guide-entry-renderer #endpoint[href^='https://studio.youtube.com/channel']");
			let yourVidsBtn = yourVids.parentNode;
			yourVidsBtn.setAttribute("id", "bt-your-vids-button");
		}
		function doYourVidsBtn2() {
			let yourVids = document.querySelector("ytd-guide-section-renderer:nth-child(1) ytd-guide-collapsible-section-entry-renderer ytd-guide-entry-renderer:nth-child(2)");
			yourVids.setAttribute("id", "bt-your-vids-button");
		}
		function doWLBtn() {
			let wLater = document.querySelector("#endpoint[href='/playlist?list=WL']");
			let wLaterBtn = wLater.parentNode;
			wLaterBtn.setAttribute("id", "bt-watch-later-button");
		}
		function doYCBtn() {
			let yChan = document.querySelector("ytd-guide-entry-renderer #endpoint[href^='/channel']");
			let yChanBtn = yChan.parentNode;
			yChanBtn.setAttribute("id", "bt-your-channel-button");
		}
		if (document.querySelector("ytd-guide-entry-renderer a[href='/feed/history']") != null) {
			let watchHistory = document.querySelector("#endpoint[href='/feed/history']");
			let historyBtn = watchHistory.parentNode;
			historyBtn.setAttribute("id", "bt-history-button");
		}
		// Note: no need to do this with show less, as it already has an id of #collapser-item.
		//deletecwaitFor('ytd-guide-collapsible-entry-renderer[can-show-more]', 1, doDropDowns);
		function doDropDowns() {
			Section1.querySelector('ytd-guide-collapsible-entry-renderer[can-show-more]').setAttribute("id", "bt-show-more-button");
			Section2.querySelector('ytd-guide-collapsible-entry-renderer[can-show-more]').setAttribute("id", "bt-show-more-button-2");
		}
		waitFor('ytd-guide-entry-renderer #endpoint[href^="/feed/trending"]', 1, mustWaitMore);
		function mustWaitMore() {
			var Section3 = document.querySelectorAll('ytd-guide-section-renderer')[2];
			Section3.setAttribute("id","#bt-section-3");
			document.querySelector('ytd-guide-entry-renderer #endpoint[href^="/feed/trending"]').parentNode.setAttribute("id", "bt-trending-button");
		}
		waitFor('ytd-guide-entry-renderer', 25, shortsSidebarItemThing);
		//waitFor('#bt-your-vids-button', 250, sidebarItemThing);
		function shortsSidebarItemThing() {
			if (BTConfig.homeSidebarBtn) {
				document.querySelector("html").setAttribute("home-btn", "true");
				if (BTConfig.layoutSelect == "hitchhiker-2015") {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "What to Watch";
					document.querySelector("#bt-home-button #endpoint").title = "What to Watch";
				}
				if (BTConfig.layoutSelect == "hitchhiker-2014") {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "What to Watch";
					document.querySelector("#bt-home-button #endpoint").title = "What to Watch";
				}
				if (BTConfig.layoutSelect == "hitchhiker-2013-3") {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "What to Watch";
					document.querySelector("#bt-home-button #endpoint").title = "What to Watch";
				}
				if (BTConfig.layoutSelect == "hitchhiker-2013-2") {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "What to Watch";
					document.querySelector("#bt-home-button #endpoint").title = "What to Watch";
				}
				if (BTConfig.layoutSelect == "hitchhiker-2013-1") {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "What to Watch";
					document.querySelector("#bt-home-button #endpoint").title = "What to Watch";
				}
				if (BTConfig.layoutSelect == "cosmicpanda-3") {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "From YouTube";
					document.querySelector("#bt-home-button #endpoint").title = "From YouTube";
				}
				if (BTConfig.wtwSidebarBtn) {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "What to Watch";
					document.querySelector("#bt-home-button #endpoint").title = "What to Watch";
				}
				if (BTConfig.fytSidebarBtn) {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "From YouTube";
					document.querySelector("#bt-home-button #endpoint").title = "From YouTube";
				}
				if (BTConfig.NOTwtwSidebarBtn) {
					document.querySelector("#bt-home-button yt-formatted-string").innerText = "Home";
					document.querySelector("#bt-home-button #endpoint").title = "Home";
				}
			} else {
				document.querySelector("#bt-home-button").style.display = "none";
			}
			if (BTConfig.shortsSidebarBtn) {
				document.querySelector("html").setAttribute("shorts-btn", "true");
			} else {
				document.querySelector("#bt-shorts-button").style.display = "none";
			}
			if (BTConfig.trendingSidebarBtn) {
				document.querySelector("html").setAttribute("trending-btn", "true");
				document.querySelector("#bt-trending-button").style.display = "none";
			} else {
				document.querySelector("#bt-trending-button-2").style.display = "none";
			}
			if (BTConfig.subsSidebarBtn) {
				document.querySelector("html").setAttribute("subs-btn", "true");
			} else {
				document.querySelector("#bt-subs-button").style.display = "none";
			}
		}
		//function sidebarItemThing() {
			/*if (BTConfig.myChannelSidebarBtn) {
				if (tasks.populatedMyChannelButton) {
					document.querySelector("html").setAttribute("my-channel-btn", "true");
					document.querySelector("#bt-my-channel-button yt-formatted-string").innerText = "My Channel";
					document.querySelector("#bt-my-channel-button #endpoint").title = "My Channel";
					if (BTConfig.lowerCaseC) {
						document.querySelector("#bt-my-channel-button yt-formatted-string").innerText = "My channel";
					}
				}
				else {
					setTimeout(sidebarItemThing, 500);
				}
				//document.querySelector("#bt-your-vids-button").remove();
			} else {
				document.querySelector("#bt-my-channel-button").remove();
			}*/
		//}
	}
}
/* BTSection getHREF */
function getHref() {
		const location = window.location;
		if (location.pathname === '/') {
			BTVars.btlocation = "home";
			document.querySelector("ytd-app").setAttribute("location", "home");
			document.querySelector("html").setAttribute("location", "home");
		} else if (location.href.includes('/watch?')) {
			//setTimeout(watchPageEveryLoad, 1500); //1
			tasks.appliedWatchMetadata = "false";
			BTVars.btlocation = "watch";
			document.querySelector("html").setAttribute("location", "watch");
			if (
				BTConfig.noFlexy ||
				BTConfig.layoutSelect == "stargazer-2008-1" ||
				BTConfig.layoutSelect == "stargazer-2009-3" ||
				BTConfig.layoutSelect == "aozora-2011" ||
				BTConfig.layoutSelect == "cosmicpanda-3" ||
				BTConfig.layoutSelect == "hitchhiker-2013-1" ||
				BTConfig.layoutSelect == "hitchhiker-2013-2" ||
				BTConfig.layoutSelect == "hitchhiker-2013-3"
			) {
				reCalculation();
			}
			if (!tasks.startVidIdStuff) {
				//setTimeout(vidIdStuff, 10);
			//	waitFor('ytd-watch-flexy', 300, vidIdStuff);
			}
			if (location.href.includes('&list=')) {
			document.querySelector("html").setAttribute("watchtype", "playlistwatch");
			BTVars.playlistWatch = true;
			} else {
				document.querySelector("html").setAttribute("watchtype", "normal");
				BTVars.playlistWatch = false;
			}
			document.querySelector("ytd-app").setAttribute("location", "watch");
			document.querySelector("ytd-app").setAttribute("can-infi-scroll-related", "yes");
			waitFor('html[disable-infi-scroll="true"] #related ytd-continuation-item-renderer', 1, infiFunction);
			function infiFunction() {
				document.querySelector("html[location='watch'] ytd-watch-flexy #secondary #related ytd-continuation-item-renderer").style.display = "none";
			}
		} else if (location.pathname.startsWith('/u') || location.pathname.startsWith('/c') || location.pathname.startsWith('/@') ) {
			BTVars.btlocation = "channel";
			document.querySelector("ytd-app").setAttribute("location", "channel");
			document.querySelector("html").setAttribute("location", "channel");
			if (location.href.includes('/videos')) {
				document.querySelector("html").setAttribute("channel-page", "videos");
				if (document.querySelector("html[channel-vids-dropdown='disabled']") == null) {
					waitFor("#dropdown-btn", 250, getChannelVidsSort);
				}
			} else {
				document.querySelector("html").setAttribute("channel-page", "home");
			}
		} else if (location.href.includes('/feed/trending')) {
			BTVars.btlocation = "trending";
			document.querySelector("ytd-app").setAttribute("location", "trending");
			document.querySelector("html").setAttribute("location", "trending");
		/* in case they bring back explore */
		} else if (location.href.includes('/feed/explore')) {
			BTVars.btlocation = "explore";
			document.querySelector("ytd-app").setAttribute("location", "explore");
			document.querySelector("html").setAttribute("location", "explore");
		} else if (location.href.includes('/feed/sidebar')) {
			BTVars.btlocation = "sidebar";
			document.querySelector("ytd-app").setAttribute("location", "sidebar");
			document.querySelector("html").setAttribute("location", "sidebar");
		} else if (location.href.includes('/results?')) {
			BTVars.btlocation = "search";
			document.querySelector("ytd-app").setAttribute("location", "search");
			document.querySelector("html").setAttribute("location", "search");
		} else if (location.href.includes('/shorts/')) {
			BTVars.btlocation = "shorts";
			document.querySelector("ytd-app").setAttribute("location", "shorts");
			document.querySelector("html").setAttribute("location", "shorts");
		} else if (location.href.includes('/playlist?list=LL')) {
			BTVars.btlocation = "likedvideos";
			document.querySelector("ytd-app").setAttribute("location", "likedvideos");
			document.querySelector("html").setAttribute("location", "likedvideos");
		} else if (location.href.includes('/playlist?list=WL')) {
			BTVars.btlocation = "watchlater";
			document.querySelector("ytd-app").setAttribute("location", "watchlater");
			document.querySelector("html").setAttribute("location", "watchlater");
		} else if (location.href.includes('/history')) {
			BTVars.btlocation = "history";
			document.querySelector("ytd-app").setAttribute("location", "history");
			document.querySelector("html").setAttribute("location", "history");
		} else if (location.href.includes('/library')) {
			BTVars.btlocation = "library";
			document.querySelector("ytd-app").setAttribute("location", "library");
			document.querySelector("html").setAttribute("location", "library");
		} else if (location.href.includes('/you')) {
			BTVars.btlocation = "you";
			document.querySelector("ytd-app").setAttribute("location", "you");
			document.querySelector("html").setAttribute("location", "you");
		} else if (location.href.includes('/subscriptions')) {
			BTVars.btlocation = "subscriptions";
			document.querySelector("ytd-app").setAttribute("location", "subscriptions");
			document.querySelector("html").setAttribute("location", "subscriptions");
		} else if (location.href.includes('/guide')) {
			BTVars.btlocation = "browse-channels";
			document.querySelector("ytd-app").setAttribute("location", "browse-channels");
			document.querySelector("html").setAttribute("location", "browse-channels");
		} else if (location.href.includes('/feed/customtube')) {
			BTVars.btlocation = "customtube";
			document.querySelector("ytd-app").setAttribute("location", "customtube");
			document.querySelector("html").setAttribute("location", "customtube");
			//waitFor("ytd-browse", 200, doCT);
		} else if (location.href.includes('/feed/')) {
			BTVars.btlocation = "feed";
			document.querySelector("ytd-app").setAttribute("location", "feed");
			document.querySelector("html").setAttribute("location", "feed");
		} else if (location.href.includes('/playlist')) {
			BTVars.btlocation = "playlist";
			document.querySelector("ytd-app").setAttribute("location", "playlist");
			document.querySelector("html").setAttribute("location", "playlist");
		} else {
			BTVars.btlocation = "unknown";
			document.querySelector("ytd-app").setAttribute("location", "unknown");
			document.querySelector("html").setAttribute("location", "unknown");
		} 
}
let currentPage = location.href;
// listen for changes
// TODO: use yt-page-data-updated instead
var urlListen = setInterval(function()
{

    if (currentPage != location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = location.href;
		BTVars.btlocation = "unknown";
		setTimeout(removeAttributeGuide, 200);
		function removeAttributeGuide() {
			document.querySelector("ytd-watch-flexy").setAttribute("guide", "");
			document.querySelector("ytd-watch-flexy").removeAttribute("guide");
		}
		if (BTConfig.viewCountFogging) {
			if (document.querySelector("ytd-watch-flexy #bt-view-count") != null) {
				setTimeout(reFogViewCount, 10);
			}
			function reFogViewCount() {
				if (!BTVars.trimViews) {
					document.querySelector("#bt-view-count span").innerText = "???,??? views";
				}
				if (BTVars.trimViews) {
					document.querySelector("#bt-view-count span").innerText = "???,???";
				}
			}
		}

		//setTimeout(getHref, 100);
		if (BTConfig.loopByDefault) {
			waitFor('#movie_player:not(.ad-showing) video', 4000, prepForLoopVideo);
		}
       
    }
}, 660);
// listen for changes
function vidIdStuff() {
	tasks.startVidIdStuff = true;
	//var vidId = document.querySelector("ytd-watch-flexy").getAttribute("video-id");
	vidId = "bt-placeholder";
	document.querySelector("ytd-watch-flexy").setAttribute("id-changed", "true");
	waitFor('ytd-app', 1, vidIdListen);
	var vidIdListen = setInterval(function()
	{
		if (document.querySelector("html[location='watch'] ytd-watch-flexy") != null) {
			var newId = document.querySelector("html[location='watch'] ytd-watch-flexy").getAttribute("video-id");
			if (newId != vidId) {
				document.querySelector("ytd-watch-flexy").setAttribute("id-changed", "true");
				setTimeout(toFalse, 1500);
			}
			if (newId == vidId) {
				if (document.querySelector("ytd-watch-flexy[id-changed='false']") === null) {
					document.querySelector("ytd-watch-flexy").setAttribute("id-changed", "false");		
				}
			}
			function toFalse() {
				vidId = newId;
				document.querySelector("ytd-watch-flexy").setAttribute("id-changed", "false");		
			}
		}
	}, 660);
}
/* BTSection loop video */
if (BTConfig.loopByDefault) {
	setTimeout(loopVideo, 5000);
	function loopVideo() {
		if (!BTConfig.dontLoopPlaylists) {
		document.querySelector("video").setAttribute ('loop', '');
		}
		if (BTConfig.dontLoopPlaylists) {
			if (BTVars.playlistWatch) {
			} 
			if (!BTVars.playlistWatch) {
				document.querySelector("video").setAttribute ('loop', '');
			}
		}
	}
	function prepForLoopVideo() {
		var loopedVid = document.querySelector("ytd-watch-flexy video").getAttribute("loop");
		if (!BTConfig.dontLoopPlaylists) {
			if (loopedVid !== null) {
				tasks.videoLooped = true;
			} else {
				if (document.querySelector("video") != null) {
					setTimeout(loopVideo, 100);
				}
			}
		}
		if (BTConfig.dontLoopPlaylists) {
			if (!BTVars.playlistWatch) {
				if (loopedVid !== null) {
					tasks.videoLooped = true;
				} else {
					if (document.querySelector("video") != null) {
						setTimeout(loopVideo, 100);
					}
				}
			}
		}
	}
}
/* ----------------------------------------------------------- BT New Elements ----------------------------------------------------------- */
function createNewElements() {
	//TEMP FIX
	if (BTConfig.layoutSelect != "none") {
		waitFor('html[layout] #guide-button yt-icon', 100, createNewGuideIcon);
		waitFor('html[layout] ytd-masthead #end #buttons div', 350, createUploadButton);
		waitFor('html[layout] ytd-masthead #end #buttons div', 700, createTopbarButtons);
		waitFor('html[layout] #content.ytd-app', 100, createNewHeader);
		waitFor('html[layout] #content.ytd-app', 100, createNewChannelHeader);
		waitFor('html[layout] ytd-notification-topbar-button-renderer yt-icon', 350, createNewBellIcon);
		waitFor('html[layout]:not([signed-out]) ytd-topbar-menu-button-renderer yt-icon', 350, createNewUploadIcon);
	}
	if (document.querySelector("#bt-appbar") == null) {
		waitFor('#content.ytd-app', 100, createAppbar);
	}
	waitFor('html[layout] #guide-button yt-icon', 1250, createGuideBlocker);
	waitFor('html ytd-browse[page-subtype="channels"] ytd-rich-grid-renderer', 800, createNewChanVidsDropDown);
	setTimeout(loopThroughSidebarCreates, 1);
	var loopThroughSidebarCreates = setInterval(function() {
		if (document.querySelector("ytd-guide-entry-renderer") != null) {
			if (!tasks.createdNewHomeIcon) {
				if (document.querySelector("html[layout] #bt-home-button") != null) {
					if (document.querySelector("#bt-home-icon") === null) {
						setTimeout(createNewHomeIcon, 1);
					}
				}
			}
			if (!tasks.createdMyChannelButton) {
				if (document.querySelector("html[layout] #bt-my-channel-btn") === null) {
					if (document.querySelector("#endpoint[title='Your channel']") === null) {
						setTimeout(createMyChannel, 1);
					}
					else {
						tasks.createdMyChannelButton = true;
					}
				}
			}
			//???
			if (tasks.createdMyChannelButton) {
				if (document.querySelector("html[layout]") == null) {
					tasks.finishedSidebar = true;
				}
			}
			if (!tasks.createdNewMyChannelIcon) {
				//if (tasks.populatedMyChannelButton) {
					var proceed = sessionStorage.getItem("nebula-done-my-channel");
					if (proceed != false) {
						if (document.querySelector("#bt-your-channel-button yt-icon") != null) {
							//if (document.querySelector("#bt-your-vids-button") != null) {
								if (document.querySelector("#bt-my-channel-icon") === null) {
									setTimeout(createNewMyChannelIcon, 1);
								}
							//}
						}
					}
				//}
			}
			if (!tasks.createdNewTrendingButton) {
				if (document.querySelector("html #bt-trending-button-2 yt-icon") == null) {
					setTimeout(createNewTrendingButton, 1);
				}
			}
			if (!tasks.createdNewTrendingIcon) {
				if (document.querySelector("html[layout] #bt-trending-button") != null) {
					if (document.querySelector("#bt-trending-icon") === null) {
						setTimeout(createNewTrendingIcon, 1);
					}
				}
			}
			if (!tasks.createdNewTrendingIcon2) {
				if (tasks.populatedTrendingButton) {
					if (document.querySelector("html[layout] #bt-trending-button-2") != null) {
						if (document.querySelector("#bt-trending-icon-2") === null) {
							setTimeout(createNewTrendingIcon2, 1);
						}
					}
				}
			}
			if (!tasks.createdNewSubsIcon) {
				if (document.querySelector("html[layout] #bt-subs-button") != null) {
					if (document.querySelector("#bt-subs-icon") === null) {
						setTimeout(createNewSubsIcon, 1);
					}
				}
			}
			if (!tasks.createdNewHistoryIcon) {
				if (document.querySelector("html[layout] #bt-history-button") != null) {
					if (document.querySelector("#bt-history-icon") === null) {
						setTimeout(createNewHistoryIcon, 1);
					}
				}
			}
			if (!tasks.createdNewLibraryIcon) {
				if (document.querySelector("html[layout] ytd-guide-entry-renderer[identifier='bt-library-button']") != null) {
					if (document.querySelector("#bt-library-icon") === null) {
						setTimeout(createNewLibraryIcon, 1);
					}
				}
			}
			if (!tasks.createdNewLikedVidsIcon) {
				if (document.querySelector("html[layout] #bt-liked-vids-button") != null) {
					if (document.querySelector("#bt-liked-vids-icon") === null) {
						setTimeout(createNewLikedVidsIcon, 1);
					}
				}
			}
			if (!tasks.createdNewWatchLaterIcon) {
				if (document.querySelector("html[layout] #bt-watch-later-button") != null) {
					if (document.querySelector("#bt-watch-later-icon") === null) {
						setTimeout(createNewWatchLaterIcon, 1);
					}
				}
			}
			if (!tasks.createdNewExpandIcon) {
				if (document.querySelector("html[layout] #bt-show-more-button") != null) {
					if (document.querySelector("#bt-expand-icon") === null) {
						setTimeout(createNewExpandIcon, 1);
					}
				}
			}
			if (!tasks.createdNewExpandIcon2) {
				if (document.querySelector("html[layout] #bt-show-more-button-2") != null) {
					if (document.querySelector("#bt-expand-icon-2") === null) {
						setTimeout(createNewExpandIcon2, 1);
					}
				}
			}
			if (!tasks.createdNewCollapseIcon) {
				if (document.querySelector("html[layout] #collapser-item") != null) {
					if (document.querySelector("#bt-collapse-icon") === null) {
						setTimeout(createNewCollapseIcon, 1);
					}
				}
			}
		}
	}, 300);
	setTimeout(getFinishedSidebarCreates, 1);
	var getFinishedSidebarCreates = setInterval(function() {
		if (
			tasks.createdNewHomeIcon &&
			tasks.createdMyChannelButton &&
			tasks.createdNewMyChannelIcon &&
			tasks.createdNewTrendingButton &&
			tasks.createdNewTrendingIcon &&
			tasks.createdNewTrendingIcon2 &&
			tasks.createdNewSubsIcon &&
			tasks.createdNewLibraryIcon &&
			tasks.createdNewHistoryIcon &&
			tasks.createdNewLikedVidsIcon &&
			tasks.createdNewWatchLaterIcon &&
			tasks.createdNewExpandIcon &&
			tasks.createdNewExpandIcon2 &&
			tasks.createdNewCollapseIcon
		) {
			if (document.querySelector("html[layout] #bt-trending-icon") != null) {
				tasks.finishedSidebar = true;
			}
		}
		if (tasks.finishedSidebar) {
			clearInterval(loopThroughSidebarCreates);
			clearInterval(getFinishedSidebarCreates);
		}
	}, 1000);
	setTimeout(loopThroughWatchCreates, 1);
	var loopThroughWatchCreates = setInterval(function() {
		if (document.querySelector("ytd-watch-flexy #above-the-fold") != null) {
			if (!tasks.createdAbove) {
				if (document.querySelector("html[layout] ytd-watch-flexy #top-row #owner") != null) {
					if (document.querySelector("#bt-above") === null) {
						setTimeout(createAbove, 1);
					}
				}
			}
			if (!tasks.createdMetaSide) {
				if (document.querySelector("html[layout] ytd-watch-flexy #top-row #owner") != null) {
					if (document.querySelector("#bt-meta-side") === null) {
						setTimeout(createMetaSide, 1);
					}
				}
			}
			if (!tasks.createdPlaceMetadata) {
				if (document.querySelector("html[layout] ytd-watch-flexy #top-row #owner") != null) {
					if (document.querySelector("#bt-place-metadata") === null) {
						setTimeout(createPlaceMetadata, 1);
					}
				}
			}
			if (!tasks.createdViewsInfo) {
				if (document.querySelector("html[layout] ytd-watch-flexy #top-row #owner") != null) {
					if (document.querySelector("#bt-views-info") === null) {
						setTimeout(createViewsInfo, 1);
					}
				}
			}
		/*	if (!tasks.createdStandardUploadDate) {
				if (document.querySelector("html[layout] ytd-watch-flexy #top-row #owner") != null) {
					if (document.querySelector("#bt-upload-date") === null) {
						setTimeout(createStandardUploadDate, 1);
					}
				}
			}*/
			if (!tasks.createdLtoDBar) {
				if (document.querySelector("html[layout] ytd-watch-flexy #top-row #owner") != null) {
					if (document.querySelector("#bt-bar") === null) {
						setTimeout(createLtoDBar, 1);
					}
				}
			}
			if (!tasks.createdNewLikeString) {
				if (document.querySelector("html[layout] #segmented-like-button button") != null) {
					if (document.querySelector("#bt-like-string") === null) {
						setTimeout(createNewLikeString, 1);
					}
				}
			}
			if (!tasks.createdNewLikeIcon) {
				if (document.querySelector("html[layout] #segmented-like-button yt-icon") != null) {
					if (document.querySelector("#bt-like") === null) {
						setTimeout(createNewLikeIcon, 1);
					}
				}
				else if (document.querySelector("html[layout] like-button-view-model yt-icon") != null) {
					if (document.querySelector("#bt-like") === null) {
						setTimeout(createNewLikeIcon, 1);
					}
				}
			}
			if (!tasks.createdNewDisLikeIcon) {
				if (document.querySelector("html[layout] #segmented-like-button") != null) {
					if (document.querySelector("#bt-dislike") === null) {
						setTimeout(createNewDisLikeIcon, 1);
					}
				}
				else if (document.querySelector("html[layout] dislike-button-view-model yt-icon") != null) {
					if (document.querySelector("#bt-dislike") === null) {
						setTimeout(createNewDisLikeIcon, 1);
					}
				}
			}
			if (!tasks.createdNewShareIcon) {
				if (document.querySelector("html[layout] #bt-share-button") != null) {
					if (document.querySelector("#bt-share") === null) {
						setTimeout(createNewShareIcon, 1);
					}
				}
			}
			if (!tasks.createdNewSaveIcon) {
				if (document.querySelector("html[layout] #bt-save-button") != null) {
					if (document.querySelector("#bt-save") === null) {
						setTimeout(createNewSaveIcon, 1);
					}
				}
			}
			if (!tasks.createdPfpUploadDate) {
				if (document.querySelector("ytd-watch-metadata #owner-sub-count") != null) {
					if (document.querySelector("#bt-pfp-upload-date") === null) {
						setTimeout(createPfpUploadDate, 10);
					}
				}
			}
			if (!tasks.createdMiddleRow) {
				if (BTConfig.iUseRYD) {
					if (document.querySelector("html[layout] .ryd-tooltip") != null) {
						if (document.querySelector("#bt-middle-row") === null) {
							setTimeout(createMiddleRow, 1);
						}
					}
				}
				if (!BTConfig.iUseRYD) {
					if (document.querySelector("html[layout] ytd-button-renderer span") != null) {
						if (document.querySelector("#bt-middle-row") === null) {
							setTimeout(createMiddleRow, 1);
						}
					}
				}
			}
			if (!tasks.createdFakeAboutButton) {
				if (document.querySelector("html[layout] #bt-middle-row") != null) {
					if (document.querySelector("#bt-fake-about") === null) {
						setTimeout(createFakeAboutButton, 1);
					}
				}
			}
			if (!tasks.createdDescRules1) {
				if (document.querySelector("html ytd-watch-flexy #above-the-fold #bt-show-more") != null) {
					if (document.querySelector("#bt-show-more #bt-desc-rules") === null) {
						setTimeout(createDescRules1, 1);
					}
				}
			}
			if (!tasks.createdDescRules2) {
				if (document.querySelector("html ytd-watch-flexy #above-the-fold #bt-show-less") != null) {
					if (document.querySelector("#bt-show-less #bt-desc-rules") === null) {
						setTimeout(createDescRules2, 1);
					}
				}
			}
			if (!tasks.createdDescRules) {
				if (document.querySelector("html ytd-watch-flexy #above-the-fold #description-inner") != null) {
					if (document.querySelector("#bt-desc-upload-date") === null) {
						setTimeout(createDescUploadDate, 1);
					}
				}
			}
			if (!tasks.createdNewShowMoreButton) {
				if (document.querySelector("html[layout] ytd-watch-flexy #above-the-fold ytd-text-inline-expander") != null) {
					if (document.querySelector("#bt-show-more") === null) {
						setTimeout(createNewShowMoreButton, 1);
					}
				}
			}
			if (!tasks.createdNewShowLessButton) {
				if (document.querySelector("html[layout] ytd-watch-flexy #above-the-fold ytd-text-inline-expander") != null) {
					if (document.querySelector("#bt-show-less") === null) {
						setTimeout(createNewShowLessButton, 1);
					}
				}
			}
			if (!tasks.createdCommentsTeaser) {
				if (document.querySelector("ytd-watch-flexy #top-row") != null) {
					if (document.querySelector("#bt-comments-teaser") === null) {
						setTimeout(createCommentsTeaser, 1);
					}
				}
			}
			if (!tasks.createdShowMoreRelated) {
				if (document.querySelector("html[location='watch'][disable-infi-scroll='true'] #related ytd-thumbnail") != null) {
					if (document.querySelector("#bt-load-more-related") === null) {
						setTimeout(createShowMoreRelated, 1);
					}
				}
				if (document.querySelector("html[disable-infi-scroll='true']") === null) {
					tasks.createdShowMoreRelated = true;
				}
			}
			if (!tasks.createdVideosDropdown) {
				if (document.querySelector("html[layout] ytd-watch-flexy #bt-above") != null) {
					if (document.querySelector("#bt-videos-dropdown") === null) {
						setTimeout(createVideosDropdown, 1);
					}
				}
			}
			if (!tasks.createdVideosLink) {
				if (document.querySelector("html[layout] ytd-watch-flexy ytd-video-owner-renderer") != null) {
					if (document.querySelector("#bt-video-count-link") === null) {
						setTimeout(createVideosLink, 1);
					}
				}
			}
		}
	}, 300);
	setTimeout(getFinishedWatchCreates, 1);
	var getFinishedWatchCreates = setInterval(function() {
		if (
			tasks.createdAbove &&
			tasks.createdMetaSide &&
			tasks.createdPlaceMetadata &&
			tasks.createdViewsInfo &&
			tasks.createdLtoDBar &&
			tasks.createdNewLikeString &&
			tasks.createdNewLikeIcon &&
			tasks.createdNewDisLikeIcon &&
			tasks.createdNewShareIcon &&
			tasks.createdNewSaveIcon &&
			tasks.createdPfpUploadDate &&
			tasks.createdMiddleRow &&
			tasks.createdFakeAboutButton &&
			tasks.createdDescUploadDate &&
			tasks.createdDescRules1 &&
			tasks.createdDescRules2 &&
			tasks.createdNewShowMoreButton &&
			tasks.createdNewShowLessButton &&
			tasks.createdCommentsTeaser &&
			tasks.createdVideosDropdown &&
			tasks.createdVideosLink
		) {
			if (tasks.createdShowMoreRelated) {
				tasks.finishedWatch = true;
			}
		}
		if (tasks.finishedWatch) {
			clearInterval(loopThroughWatchCreates);
			clearInterval(getFinishedWatchCreates);
		}
	}, 1000);
	function createNewChanVidsDropDown() {
		let container = document.querySelector('ytd-two-column-browse-results-renderer[page-subtype="channels"] #secondary');
		const newElem = document.createElement("div");
		newElem.id = 'bt-chan-vids-dropdown';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div class="bt-standard-button">
			<a id="dropdown-btn" bt-state="newest" onclick="document.querySelector('#chanvidsdd').toggleAttribute('bt-visible');">
				<span bt-lang="en" id="newest">Date added (newest)</span>
				<span bt-lang="en" id="oldest">Date added (oldest)</span>
				<span bt-lang="en" id="popular">Most popular</span>
				<span bt-lang="en" id="fyou">For you</span>
				<span id="ct-dropdown-arrow" class="ct-uix-button-arrow ct-sprite"></span>
				<paper-ripple></paper-ripple>
			</a>
		</div>
		<tp-bt-titanium-dropdown id="chanvidsdd">
			<div class="dropdown-inner">
				<a class="dropdown-menuitem" id="newest" onclick="document.querySelector('#dropdown-btn').setAttribute('bt-state','newest'); document.querySelector('#chip_newest').click(); document.querySelector('#chanvidsdd').toggleAttribute('bt-visible');">
					<div class="dropdown-menuitem-inner">
						<span bt-lang="en">Date added (newest)</span>
					</div>
				</a>
				<a class="dropdown-menuitem" id="oldest" onclick="document.querySelector('#chip_oldest').click(); document.querySelector('#dropdown-btn').setAttribute('bt-state','oldest'); document.querySelector('#chanvidsdd').toggleAttribute('bt-visible');">
					<div class="dropdown-menuitem-inner">
						<span bt-lang="en">Date added (oldest)</span>
					</div>
				</a>
				<a class="dropdown-menuitem" id="popular" onclick="document.querySelector('#chip_popular').click(); document.querySelector('#dropdown-btn').setAttribute('bt-state','popular'); document.querySelector('#chanvidsdd').toggleAttribute('bt-visible');">
					<div class="dropdown-menuitem-inner">
						<span bt-lang="en">Most popular</span>
					</div>
				</a>
				<a class="dropdown-menuitem" id="fyou" onclick="document.querySelector('#chip_fyou').click(); document.querySelector('#dropdown-btn').setAttribute('bt-state','fyou'); document.querySelector('#chanvidsdd').toggleAttribute('bt-visible');">
					<div class="dropdown-menuitem-inner">
						<span bt-lang="en">For you</span>
					</div>
				</a>
			</div>
			<ghost id="cvddg" onclick="document.querySelector('#chanvidsdd').toggleAttribute('bt-visible');">
			</ghost>
		</tp-bt-titanium-dropdown>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createNewGuideIcon() {
		let container = document.querySelector('#guide-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-guide-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #guide-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #guide-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createGuideBlocker() {
		let container = document.querySelector('#guide-button');
		const newElem = document.createElement("bt-blocker");
		newElem.id = 'bt-guide-blocker';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.setAttribute("title", "Guide Button disabled because CustomTube is set to always show the sidebar.");
		newElem.innerHTML = `
		<style>
		html[sidebar-persistent="true"] #bt-guide-blocker {
			display: block;
			width: 44px;
			height: 44px;
			z-index: 9999999999;
			cursor: not-allowed;
			position: absolute;
			margin-left: -11px;
			margin-top: -11px;
		}
		html[sidebar-persistent="true"] #guide-button {
			z-index: -9999999999;
		}
		</style>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createUploadButton() {
		let container = document.querySelector('ytd-masthead #end');
		const newElem = document.createElement("div");
		newElem.id = 'bt-upload-button';
		newElem.setAttribute("class", "bt-universalized-element bt-standard-button");
		newElem.setAttribute("bt-optimized-universal-element", "");
		if (BTConfig.layoutSelect == "stargazer-2009-3") {
			newElem.setAttribute("stargazer-style", "short-cta");
		}
		if (BTConfig.layoutSelect == "stargazer-2009-2") {
			newElem.setAttribute("stargazer-style", "cta");
		}
		if (BTConfig.layoutSelect == "stargazer-2009-1") {
			newElem.setAttribute("stargazer-style", "cta");
		}
		if (BTConfig.layoutSelect == "stargazer-2008-1") {
			newElem.setAttribute("stargazer-style", "cta");
		}
		if (
		BTConfig.layoutSelect == "aozora-2011" ||
		BTConfig.layoutSelect == "cosmicpanda-3"
		) {
			newElem.setAttribute("is-link", "");
		}
		newElem.innerHTML = `
		<a id="upload-btn" href="https://www.youtube.com/upload">
			<span bt-lang="en">Upload</span>
		</a>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewUploadIcon() {
		tasks.createdNewUploadIcon = true;
		let container = document.querySelector('ytd-topbar-menu-button-renderer yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-upload-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) ytd-topbar-menu-button-renderer svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) ytd-topbar-menu-button-renderer yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createNewBellIcon() {
		tasks.createdNewBellIcon = true;
		let container = document.querySelector('ytd-notification-topbar-button-renderer yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-notif-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) ytd-notification-topbar-button-renderer svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) ytd-notification-topbar-button-renderer yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createTopbarButtons() {
		let container = document.querySelector('ytd-masthead #center');
		const newElem = document.createElement("div");
		newElem.id = 'masthead-nav-main';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([topbar-style^="stargazer-2009-3"]):not([topbar-style^="stargazer-2008-1"]) #masthead-nav-main {
			display: none;
		}
		#masthead-nav-main {
			position: absolute;
			margin-top: 44px;
			font-family: arial !important;
			display: flex;
			width: 784px;
			z-index: 8000;
		}
		html[topbar-style^="stargazer-2008"] #masthead-nav-main {
		  margin-left: 40px;
		}
		#masthead-nav-main a {
		  color: var(--bt-blue, #03c);
		  font-size: 13px;
		  font-weight: bold;
		  text-decoration: none;
		  margin-right: 13px;
		}
		html[topbar-style^="stargazer-2008"] #masthead-nav-main a {
		  width: 114px;
		  display: flex;
		  height: 22px;
		  background: transparent url(https://i.imgur.com/oHAJEQq.gif) no-repeat scroll 0 -137px;
		  font-size: 14px;
		  font-weight: bold;
		  padding: 6px 0 0 0;
		  border-radius: 5px;
		  margin-right: 7px;
		  color: #039;
		}
		html[topbar-style^="stargazer-2008"] #masthead-nav-main a::before,
		html[topbar-style^="stargazer-2008"] #masthead-nav-main a::after {
		  display: block;
		  position: absolute;
		  width: 5px;
		  height: 28px;
		  background: transparent url(https://i.imgur.com/oHAJEQq.gif) no-repeat scroll -152px 0px;
		  content: "";
		  margin-top: -6px;
		  margin-left: -1px;
		}
		html[topbar-style^="stargazer-2008"] #masthead-nav-main a::after {
		  margin-left: 110px;
		  background: transparent url(https://i.imgur.com/oHAJEQq.gif) no-repeat scroll -157px 0px;
		}
		html[topbar-style^="stargazer-2009-3"] #masthead-nav-main a:hover {
		  text-decoration: underline;
		}
		html[topbar-style^="stargazer-2008"] #sector-1 {
		  display: flex;
		}
		html[topbar-style^="stargazer-2008"] #sector-2 {
		  display: none;
		}
		#sector-2 {
		  margin-left: auto;
		}
		html[topbar-style^="stargazer-2008"] #masthead-nav-main span {
		  display: block;
		  margin: 0 auto;
		}
		html[topbar-style^="stargazer-2008"] #masthead-nav-main {
		  margin-top: 7px;
		}
		html[topbar-style^="stargazer-2008"] #masthead-nav-main a:hover {
		  text-decoration: none;
		}
		html[topbar-style^="stargazer-2008"] #start.ytd-masthead, 
		html[topbar-style^="stargazer-2008"] #end.ytd-masthead {
		  margin-top: -40px;
		}
		html[topbar-style^="stargazer-2008"] #masthead-nav-main #bt-shows-link,
		html[topbar-style^="stargazer-2009-3"] #masthead-nav-main #bt-community-link {
		  display: none;
		}
		html[topbar-style^="stargazer-2008"][location="home"] #masthead-nav-main #bt-home-link,
		html[topbar-style^="stargazer-2008"][location="watch"] #masthead-nav-main #bt-videos-link,
		html[topbar-style^="stargazer-2008"][location="subscriptions"] #masthead-nav-main #bt-videos-link,
		html[topbar-style^="stargazer-2008"][location="trending"] #masthead-nav-main #bt-videos-link,
		html[topbar-style^="stargazer-2008"][location="channel"] #masthead-nav-main #bt-channels-link,
		html[topbar-style^="stargazer-2008"][location="browse-channels"] #masthead-nav-main #bt-channels-link,
		html[topbar-style^="stargazer-2008"][location="you"] #masthead-nav-main #bt-community-link {
		  background-position: 0 -100px;
		  color: #333 !important;
		}
		html[topbar-style^="stargazer-2008"][location="home"] #masthead-nav-main #bt-home-link::before,
		html[topbar-style^="stargazer-2008"][location="watch"] #masthead-nav-main #bt-videos-link::before,
		html[topbar-style^="stargazer-2008"][location="subscriptions"] #masthead-nav-main #bt-videos-link::before,
		html[topbar-style^="stargazer-2008"][location="trending"] #masthead-nav-main #bt-videos-link::before,
		html[topbar-style^="stargazer-2008"][location="channel"] #masthead-nav-main #bt-channels-link::before,
		html[topbar-style^="stargazer-2008"][location="browse-channels"] #masthead-nav-main #bt-channels-link::before,
		html[topbar-style^="stargazer-2008"][location="you"] #masthead-nav-main #bt-community-link::before {
		  background-position: -142px 0;
		}
		html[topbar-style^="stargazer-2008"][location="home"] #masthead-nav-main #bt-home-link::after,
		html[topbar-style^="stargazer-2008"][location="watch"] #masthead-nav-main #bt-videos-link::after,
		html[topbar-style^="stargazer-2008"][location="subscriptions"] #masthead-nav-main #bt-videos-link::after,
		html[topbar-style^="stargazer-2008"][location="trending"] #masthead-nav-main #bt-videos-link::after,
		html[topbar-style^="stargazer-2008"][location="channel"] #masthead-nav-main #bt-channels-link::after,
		html[topbar-style^="stargazer-2008"][location="browse-channels"] #masthead-nav-main #bt-channels-link::after,
		html[topbar-style^="stargazer-2008"][location="you"] #masthead-nav-main #bt-community-link::after {
		  background-position: -147px 0;
		}
		</style>
		<div id="sector-1">
			<a id="bt-home-link" class="yt-simple-endpoint" href="https://www.youtube.com/">
				<span>Home</span>
			</a>
			<a id="bt-videos-link" class="yt-simple-endpoint" href="https://www.youtube.com/feed/subscriptions">
				<span>Videos</span>
			</a>
			<a id="bt-channels-link" class="yt-simple-endpoint" href="https://www.youtube.com/channels">
				<span>Channels</span>
			</a>
			<a id="bt-shows-link" class="yt-simple-endpoint" href="https://www.youtube.com/shows">
				<span>Shows</span>
			</a>
			<a id="bt-community-link" class="yt-simple-endpoint" href="https://www.youtube.com/community">
				<span>Community</span>
			</a>
		</div>
		<div id="sector-2">
			<a id="bt-subs-link" href="https://www.youtube.com/feed/subscriptions" class="yt-simple-endpoint">
				<span>Subscriptions</span>
			</a>
			<a id="bt-history-link" href="https://www.youtube.com/feed/history" class="yt-simple-endpoint">
				<span>History</span>
			</a>
		</div>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewHeader() {
		let container = document.querySelector('#content.ytd-app');
		const newElem = document.createElement("div");
		newElem.id = 'bt-header';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div id="bt-header-inner">
		<div id="left">
			<div id="left-inner">
				<a id="browse-chan" class="yt-simple-endpoint" href="https://www.youtube.com/feed/guide_builder">
					<div id="browse-chan-inner">
						<span bt-lang="en">Browse Channels</span>
					</div>
				</a>
			</div>
		</div>
		<div id="middle">
			<div id="middle-inner">
				<div id="info">
					<div class="header-info" id="homeinfo">
						<div class="header-img">
						</div>
						<p class="header-text" bt-lang="en">From YouTube</p>
					</div>
					<div class="header-info" id="subsinfo">
						<div class="header-img">
						</div>
						<p class="header-text" bt-lang="en">Subscriptions</p>
					</div>
					<div class="header-info" id="bcinfo">
						<div class="header-img">
						</div>
						<p class="header-text" bt-lang="en">Browse Channels</p>
					</div>
					<div class="header-info" id="chaninfo">
						<div class="header-img" id="bt-inline-channel-pfp">
						</div>
						<p class="header-text" id="bt-inline-channel-chan-name" bt-lang="en">Channel Name</p>
					</div>
				</div>
			</div>
		</div>
		<div id="right">
			<div id="right-inner">
			</div>
		</div>
		</div>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createAppbar() {
		tasks.createdAppbar = true;
		let container = document.querySelector('#content.ytd-app');
		const newElem = document.createElement("div");
		newElem.id = 'bt-appbar-holder';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div id="bt-appbar" position="hidden">
			<div id="bt-appbar-inner">
				<div id="bt-appbar-multistate" class="bt-multistate-handler" state="feed">
					<div class="bt-multistate" state-id="feed">
						<div class="appbar-links" id="appbar-feed-links">
							<a class="appbar-link yt-simple-endpoint" id="appbar-home" href="/">
								<div class="appbar-link-inner">
									<span id="bt-appbar-home-text">Home</span>
									<span id="bt-appbar-w2w-text">What to Watch</span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-trending" href="/feed/trending">
								<div class="appbar-link-inner">
									<span>Trending</span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-subs" href="/feed/subscriptions">
								<div class="appbar-link-inner">
									<span>Subscriptions</span>
								</div>
							</a>
						</div>
					</div>
					<div class="bt-multistate" state-id="channel">
						<div class="appbar-links" id="appbar-channel-links">
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-home-pfp">
								<div class="appbar-link-inner">
									<span id="appbar-channel-pfp"></span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-home">
								<div class="appbar-link-inner">
									<span id="bt-appbar-home-text">Home</span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-videos">
								<div class="appbar-link-inner">
									<span>Videos</span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-shorts">
								<div class="appbar-link-inner">
									<span>Shorts</span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-live">
								<div class="appbar-link-inner">
									<span>Live</span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-releases">
								<div class="appbar-link-inner">
									<span>Releases</span>
								</div>
							</a>
							<a clas
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-playlists">
								<div class="appbar-link-inner">
									<span>Playlists</span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-community">
								<div class="appbar-link-inner">
									<span>Community</span>
								</div>
							</a>
							<a class="appbar-link yt-simple-endpoint" id="appbar-channel-store">
								<div class="appbar-link-inner">
									<span>Store</span>
								</div>
							</a>
						</div>
					</div>
					<div class="bt-multistate" state-id="watch">
						<div class="appbar-links" id="appbar-watch-links">
							<a class="appbar-link yt-simple-endpoint" id="appbar-watch-channel">
								<div class="appbar-link-inner">
									<span id="appbar-watch-channel-pfp"></span>
									<span id="appbar-watch-channel-name"></span>
								</div>
							</a>
							<div class="appbar-link appbar-fusion-link" id="appbar-watch-videos-fusion" hidden>
								<a class="yt-simple-endpoint" id="appbar-watch-videos">
									<div class="appbar-link-inner">
										<span id="appbar-watch-video-count"></span>
									</div>
								</a>
								<div class="appbar-arrow-button" id="appbar-watch-videos-dd-btn">
									<div class="appbar-link-inner">
										<span class="appbar-arrow"></span>
									</div>
								</div>
								<div id="bt-appbar-videos-dropdown" class="appbar-dropdown">
									<div id="js-destination" class="appbar-dropdown-inner">
									</div>
								</div>
							</div>
							<a class="appbar-link yt-simple-endpoint" id="appbar-watch-current-vid" active-forever>
								<div class="appbar-link-inner">
									<span id="appbar-watch-current-video">Video</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div id="bt-appbar-right">
				<div id="bt-appbar-pin">
					<div id="pin-icon">
					</div>
					<div id="pin" class="inherit-size" title="Pin Appbar">
					</div>
					<div id="pinned" class="inherit-size" title="Unpin Appbar">
					</div>
					<div id="pinnt" class="inherit-size" title="Appbar pinning is only supported on layouts from 2014 onwards.">
					</div>
				</div>
			</div>
		</div>
		<div id="appbar-dropdown-close">
		</div>
		<div id="appbar-dropdown-close-2">
		</div>
		<div id="appbarFlashPoint">
		</div>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewChannelHeader() {
		/*let container = document.querySelector('#content.ytd-app');
		const newElem = document.createElement("div");
		newElem.id = 'bt-channel-header';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div id="bt-header-inner">
		<div id="left">
			<div id="left-inner">
				<a id="browse-chan" href="https://www.youtube.com/feed/guide_builder">
					<div id="browse-chan-inner">
						<span bt-lang="en">Browse Channels</span>
					</div>
				</a>
			</div>
		</div>
		<div id="middle">
			<div id="middle-inner">
				<div id="info">
					<div class="header-info" id="homeinfo">
						<div class="header-img">
						</div>
						<p class="header-text" bt-lang="en">From YouTube</p>
					</div>
					<div class="header-info" id="subsinfo">
						<div class="header-img">
						</div>
						<p class="header-text" bt-lang="en">Subscriptions</p>
					</div>
					<div class="header-info" id="bcinfo">
						<div class="header-img">
						</div>
						<p class="header-text" bt-lang="en">Browse Channels</p>
					</div>
					<div class="header-info" id="chaninfo">
						<div class="header-img" id="bt-inline-channel-pfp">
						</div>
						<p class="header-text" id="bt-inline-channel-chan-name" bt-lang="en">Channel Name</p>
					</div>
				</div>
			</div>
		</div>
		<div id="right">
			<div id="right-inner">
			</div>
		</div>
		</div>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
		*/
	}
	function createNewHomeIcon() {
		tasks.createdNewHomeIcon = true;
		let container = document.querySelector('#bt-home-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-home-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-home-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-home-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createMyChannel() {
		let sidebar = document.querySelector('ytd-guide-section-renderer #items');
		//const myCh = document.createElement("bt-sidebar-item-renderer");
		const myCh = document.createElement("ytd-guide-entry-renderer");
		myCh.id = 'bt-my-channel-button';
		myCh.setAttribute("class", "bt-universalized-element style-scope bt-simple-sidebar-item");
		myCh.setAttribute("bt-optimized-universal-element", "");
		sidebar.insertBefore(myCh, sidebar.children[0].nextSibling);	
		tasks.createdMyChannelButton = true;
	}
	function createNewMyChannelIcon() {
		tasks.createdNewMyChannelIcon = true;
		let container = document.querySelector('#bt-your-channel-button yt-icon');
		const newElem = document.createElement("bt-icon-container");
		newElem.id = 'bt-my-channel-icon';
		newElem.setAttribute("class", "bt-universalized-element bt-contents-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-your-channel-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		/*html[icon-type="outline"] #bt-your-channel-button[active] #outline {
			display: none !important;
		}
		html[icon-type="outline"] #bt-your-channel-button[active] #filled {
			display: block !important;
		}*/
		#bt-my-channel-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<bt-icon id="filled">
			<svg icon-type="filled">
				<g>
					<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>
				</g>
			</svg>
		</bt-icon>
		<!--bt-icon id="outline">
			<svg icon-type="outline">
				<g>
					<path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
				</g>
			</svg>
		</bt-icon-->
		`;
		container.insertBefore(newElem, container.children[0]);
		if (BTConfig.myChannelSidebarBtn) {
			if (BTConfig.lowerCaseC) {
				document.querySelector("#bt-your-channel-button yt-formatted-string").innerText = "My channel";
				document.querySelector("#bt-your-channel-button #endpoint").title = "My channel";
			}
			if (!BTConfig.lowerCaseC) {
				document.querySelector("#bt-your-channel-button yt-formatted-string").innerText = "My Channel";
				document.querySelector("#bt-your-channel-button #endpoint").title = "My Channel";
			}
		}
	}
	function createNewTrendingButton() {
		tasks.createdNewTrendingButton = true;
		let sidebar = document.querySelector('ytd-guide-section-renderer #items');
		const newElem = document.createElement("ytd-guide-entry-renderer");
		newElem.id = 'bt-trending-button-2';
		newElem.setAttribute("class", "bt-universalized-element style-scope bt-simple-sidebar-item");
		newElem.setAttribute("bt-optimized-universal-element", "");
		sidebar.insertBefore(newElem, sidebar.children[1].nextSibling);	
	}
	function createNewTrendingIcon() {
		tasks.createdNewTrendingIcon = true;
		let container = document.querySelector('#bt-trending-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-trending-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-trending-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-trending-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M19.642 10.63c-.314-.395-.658-.767-1.026-1.11-.87-.808-1.884-1.375-2.724-2.22-1.72-1.73-2.3-4.183-1.546-6.496.123-.375-.23-.72-.584-.566-.822.36-1.606.873-2.285 1.425-3.43 2.79-4.704 7.446-3.115 11.645.038.144.09.3.09.45 0 .3-.182.57-.448.687-.3.133-.62.044-.856-.175-.072-.068-.137-.143-.197-.222-1.11-1.452-1.52-3.386-1.21-5.19.08-.456-.49-.713-.77-.35-1.4 1.802-2.09 4.21-1.95 6.48.04.68.158 1.355.34 2.008.23.82.57 1.607 1.01 2.33 1.4 2.31 3.854 3.977 6.49 4.31 2.805.355 5.836-.162 7.997-2.15 2.408-2.217 3.285-5.74 2-8.823-.052-.123-.106-.243-.163-.363-.285-.596-.64-1.154-1.045-1.67m-4.288 8.098c-.366.324-.95.645-1.415.797-1.32.435-2.62-.083-3.516-.814-.13-.1-.084-.3.073-.35 1.37-.44 2.173-1.49 2.41-2.542.23-1.015-.182-1.885-.354-2.878-.14-.827-.128-1.544.135-2.297.047-.13.226-.147.283-.02.82 1.825 3.136 2.63 3.534 4.64.037.18.058.367.063.55.034 1.06-.427 2.226-1.21 2.92"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewTrendingIcon2() {
		tasks.createdNewTrendingIcon2 = true;
		let container = document.querySelector('#bt-trending-button-2 yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-trending-icon-2';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-trending-button-2 svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-trending-button-2 yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M19.642 10.63c-.314-.395-.658-.767-1.026-1.11-.87-.808-1.884-1.375-2.724-2.22-1.72-1.73-2.3-4.183-1.546-6.496.123-.375-.23-.72-.584-.566-.822.36-1.606.873-2.285 1.425-3.43 2.79-4.704 7.446-3.115 11.645.038.144.09.3.09.45 0 .3-.182.57-.448.687-.3.133-.62.044-.856-.175-.072-.068-.137-.143-.197-.222-1.11-1.452-1.52-3.386-1.21-5.19.08-.456-.49-.713-.77-.35-1.4 1.802-2.09 4.21-1.95 6.48.04.68.158 1.355.34 2.008.23.82.57 1.607 1.01 2.33 1.4 2.31 3.854 3.977 6.49 4.31 2.805.355 5.836-.162 7.997-2.15 2.408-2.217 3.285-5.74 2-8.823-.052-.123-.106-.243-.163-.363-.285-.596-.64-1.154-1.045-1.67m-4.288 8.098c-.366.324-.95.645-1.415.797-1.32.435-2.62-.083-3.516-.814-.13-.1-.084-.3.073-.35 1.37-.44 2.173-1.49 2.41-2.542.23-1.015-.182-1.885-.354-2.878-.14-.827-.128-1.544.135-2.297.047-.13.226-.147.283-.02.82 1.825 3.136 2.63 3.534 4.64.037.18.058.367.063.55.034 1.06-.427 2.226-1.21 2.92"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createNewSubsIcon() {
		tasks.createdNewSubsIcon = true;
		let container = document.querySelector('#bt-subs-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-subs-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-subs-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-subs-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewLibraryIcon() {
		tasks.createdNewLibraryIcon = true;
		let container = document.querySelector('ytd-guide-entry-renderer[identifier="bt-library-button"] yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-library-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) ytd-guide-entry-renderer[identifier='bt-library-button'] svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) ytd-guide-entry-renderer[identifier='bt-library-button'] yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewHistoryIcon() {
		tasks.createdNewHistoryIcon = true;
		let container = document.querySelector('#bt-history-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-history-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-history-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-history-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewLikedVidsIcon() {
		tasks.createdNewLikedVidsIcon = true;
		let container = document.querySelector('#bt-liked-vids-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-liked-vids-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-liked-vids-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-liked-vids-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewWatchLaterIcon() {
		tasks.createdNewWatchLaterIcon = true;
		let container = document.querySelector('#bt-watch-later-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-watch-later-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-watch-later-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-watch-later-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewExpandIcon() {
		tasks.createdNewExpandIcon = true;
		let container = document.querySelector('#bt-show-more-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-expand-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-show-more-button:not([expanded]) svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-show-more-button yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewCollapseIcon() {
		tasks.createdNewCollapseIcon = true;
		let container = document.querySelector('#collapser-item yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-collapse-icon';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #collapser-item svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #collapser-item yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewExpandIcon2() {
		tasks.createdNewExpandIcon2 = true;
		let container = document.querySelector('#bt-show-more-button-2 yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-expand-icon-2';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-show-more-button-2 svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #bt-show-more-button-2 yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createAbove() {
		tasks.createdAbove = true;
		//let container = document.querySelector('ytd-watch-flexy #columns');
		let container = document.querySelector('ytd-watch-flexy');
		const newElem = document.createElement("div");
		newElem.id = 'bt-above';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createMetaSide() {
		tasks.createdMetaSide = true;
		let container = document.querySelector('ytd-watch-flexy #secondary-inner');
		const newElem = document.createElement("div");
		newElem.id = 'bt-meta-side';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createPlaceMetadata() {
		tasks.createdPlaceMetadata = true;
		let container = document.querySelector('ytd-watch-flexy #primary-inner #below');
		const newElem = document.createElement("div");
		newElem.id = 'bt-place-metadata';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createViewsInfo() {
		tasks.createdViewsInfo = true;
		let container = document.querySelector('ytd-watch-flexy #above-the-fold #top-row');
		const newElem = document.createElement("div");
		newElem.id = 'bt-views-info';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div id="bt-view-count">
			<span>???,???</span>
		</div>
		<div id="bt-upload-date">
			<span id="dot"> • </span>
			<span id="precise-upload-date">Getting Upload Date...</span>
			<span id="fuzzy-upload-date" style="display: none"></span>
		</div>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createLtoDBar() {
		tasks.createdLtoDBar = true;
		let container = document.querySelector('ytd-watch-flexy #above-the-fold #top-row');
		const newElem = document.createElement("div");
		newElem.id = 'bt-bar';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		//if (!BTConfig.iUseRYD) {
		//	newElem.setAttribute("title", "Turn on Return YouTube Dislike compatibility in CustomTube settings for like/dislike ratio (Return YouTube Dislike extension required)");
		//}
		newElem.innerHTML = `
		<style>
		html[layout^="polymer"] #bt-bar {
			display: none;
		}
		</style>
		<div id="bt-ltod" title="Turn on Return YouTube Dislike compatibility in CustomTube settings for like/dislike ratio (Return YouTube Dislike extension required)">
			<dislikes>
				<likes></likes>
			</dislikes>
			<div id="bt-counts">
				<div id="lcon">
					<span id="lcicon" class="bti"></span>
					<span id="lc" class="btc">??</span>
					<span id="lcs" class="bts" bt-lang="en"> likes,</span>
				</div>
				<div id="dcon">
					<span id="dcicon" class="bti"></span>
					<span id="dc" class="btc">??</span>
					<span id="dcs" class="bts" bt-lang="en"> dislikes</span>
				</div>
			</div>
		</div>
		<div id="bt-star-ratings">
			<div id="bt-stars" rating="0.0" title="Turn on Return YouTube Dislike compatibility in CustomTube settings for star ratings (Return YouTube Dislike extension required)">
				<stars></stars>
			</div>
			<div id="bt-rc-text" style="display: none">
			</div>
		</div>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewLikeString() {
		tasks.createdNewLikeString = true;
	/*	let container = document.querySelector('#segmented-like-button button .yt-spec-button-shape-next--button-text-content');
		const newElem = document.createElement("span");
		newElem.id = 'bt-like-string';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<span bt-lang="en">Like</span>
		`;
		container.insertBefore(newElem, container.children[0]);*/
	}
	function createNewLikeIcon() {
		tasks.createdNewLikeIcon = true;
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-like';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #segmented-like-button svg:not([icon-type="filled"]),
		html:not([icon-type="outline"]) like-button-view-model svg:not([icon-type="filled"]) {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
			</g>
		</svg>
		`;
		if (document.querySelector("#segmented-like-button") != null) {
			let container = document.querySelector('#segmented-like-button yt-icon');
			container.insertBefore(newElem, container.children[0]);
		} else {
			let container = document.querySelector('like-button-view-model yt-icon');
			container.insertBefore(newElem, container.children[0]);
		}
	}
	function createNewDisLikeIcon() {
		tasks.createdNewDisLikeIcon = true;
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-dislike';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #segmented-dislike-button svg:not([icon-type="filled"]),
		html:not([icon-type="outline"]) dislike-button-view-model svg:not([icon-type="filled"]) {
			display: none !important;
		}
		html:not([icon-type="outline"]) #segmented-dislike-button yt-icon-shape,
		html:not([icon-type="outline"]) dislike-button-view-model yt-icon-shape {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
			</g>
		</svg>
		`;
		if (document.querySelector("#segmented-dislike-button") != null) {
			let container = document.querySelector('#segmented-dislike-button yt-icon');
			container.insertBefore(newElem, container.children[0]);
		} else {
			let container = document.querySelector('dislike-button-view-model yt-icon');
			container.insertBefore(newElem, container.children[0]);
		}
	}
	function createNewShareIcon() {
		tasks.createdNewShareIcon = true;
		let container = document.querySelector('#bt-share-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-share';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-share-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M11.7333 8.26667V4L19.2 11.4667L11.7333 18.9333V14.56C6.4 14.56 2.66667 16.2667 0 20C1.06667 14.6667 4.26667 9.33333 11.7333 8.26667Z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createNewSaveIcon() {
		tasks.createdNewSaveIcon = true;
		let container = document.querySelector('#bt-save-button yt-icon');
		const newElem = document.createElement("bt-icon");
		newElem.id = 'bt-save';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<style>
		html:not([icon-type="outline"]) #bt-save-button svg:not([icon-type="filled"]) {
			display: none !important;
		}
		</style>
		<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
			<g class="yt-icon">
				<path class="yt-icon" d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
			</g>
		</svg>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createPfpUploadDate() {
		tasks.createdPfpUploadDate = true;
		let container = document.querySelector('ytd-watch-flexy ytd-watch-metadata #upload-info');
		const newElem = document.createElement("div");
		newElem.id = 'bt-pfp-upload-date';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<span id="published-on" style="display: none">
			<span bt-lang="en">Published on </span>
		</span>
		<span id="precise-upload-date">Getting Upload Date...</span>
		<span id="fuzzy-upload-date" style="display: none"></span>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createMiddleRow() {
		tasks.createdMiddleRow = true;
		let container = document.querySelector('ytd-watch-flexy #above-the-fold');
		const newElem = document.createElement("div");
		newElem.id = 'bt-middle-row';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
	<style>
	#watch-buttons-inner {
	  display: flex;
	  padding: 4px;
	  margin: 0 10px;
	  margin: 0;
	}
	html[watch-metadata-style^="hitchhiker-2014"] #watch-buttons-inner,
	html[watch-metadata-style^="hitchhiker-2013"] #watch-buttons-inner {
	  padding-bottom: 0;
	}
	</style>
	<middle-row-border></middle-row-border>
	<div id="watch-buttons-inner">
		<div id="left">
		</div>
		<div id="middle">
		</div>
		<div id="middle2">
		</div>
		<div id="right" style="display: none">
			<div id="nostalgic-like-button" class="nostalgic-watch-button" active="false">
				<div id="like-icon">
				</div>
				<span id="nostalgic-like-count">??</span>
			</div>
			<div id="nostalgic-dislike-button" class="nostalgic-watch-button" active="false">
				<div id="dislike-icon">
				</div>
				<span id="nostalgic-dislike-count">??</span>
			</div>
		</div>
	</div>
		`;
		if (document.querySelector("html[title-on-top='false']") != null) {
			setTimeout(midRow1, 100);
		}
		if (document.querySelector("html[title-on-top='true']") != null) {
			setTimeout(midRow2, 100);
		}
		function midRow1() {
			container.insertBefore(newElem, container.children[1].nextSibling);
		}
		function midRow2() {
			container.insertBefore(newElem, container.children[0].nextSibling);
		}
	}
	function createFakeAboutButton() {
		tasks.createdFakeAboutButton = true;
		//let container = document.querySelector('ytd-watch-flexy #actions-inner ytd-menu-renderer #top-level-buttons-computed');
		let container = document.querySelector('ytd-watch-flexy #watch-buttons-inner');
		const newElem = document.createElement("div");
		newElem.id = 'bt-fake-about';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div id="fake-about-inner">
			<span>About</span>
			<span bt-lang="ja" class="bt-localized">概要</span>
			<span bt-lang="es" class="bt-localized">Información</span>
		</div>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createDescRules1() {
		tasks.createdDescRules1 = true;
		let container = document.querySelector('ytd-watch-flexy #above-the-fold #bt-show-more');
		const newElem = document.createElement("div");
		newElem.id = 'bt-desc-rules';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div class="yt-horizontal-rule "><span class="first"></span><span class="second"></span><span class="third"></span></div>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createDescRules2() {
		tasks.createdDescRules2 = true;
		let container = document.querySelector('ytd-watch-flexy #above-the-fold #bt-show-less');
		const newElem = document.createElement("div");
		newElem.id = 'bt-desc-rules';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div class="yt-horizontal-rule "><span class="first"></span><span class="second"></span><span class="third"></span></div>
		`;
		container.insertBefore(newElem, container.children[0]);
	}
	function createDescUploadDate() {
		tasks.createdDescUploadDate = true;
		let container = document.querySelector('ytd-watch-flexy #above-the-fold #description-inner');
		const newElem = document.createElement("div");
		newElem.id = 'bt-desc-upload-date';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<span id="published-on" style="display: none">
			<span bt-lang="en">Published on </span>
		</span>
		<span id="uploaded-by" style="display: none">
			<span bt-lang="en">Uploaded by </span>
		</span>
		<a id="author-text" class="yt-simple-endpoint" style="display: none">
			<span bt-lang="en">Author </span>
		</a>
		<span id="second-on" style="display: none">
			<span bt-lang="en">on </span>
		</span>
		<span id="precise-upload-date">Getting Upload Date...</span>
		<span id="fuzzy-upload-date" style="display: none"></span>
		`;
		container.insertBefore(newElem, container.children[0].nextSibling);
	}
	function createNewShowMoreButton() {
		tasks.createdNewShowMoreButton = true;
		//let container = document.querySelector('ytd-watch-flexy #above-the-fold ytd-text-inline-expander');
		let container = document.querySelector('ytd-watch-flexy #above-the-fold #description');
		const newElem = document.createElement("button");
		newElem.id = 'bt-show-more';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.setAttribute("onclick", "document.querySelector('ytd-text-inline-expander').setAttribute('is-expanded', '');");
		newElem.innerHTML = `
		<div class="visible-pseudo-button">
			<span bt-lang="en">Show more</span>
		</div>
		`;
		//container.insertBefore(newElem, container.children[5].nextSibling);
		container.insertBefore(newElem, container.children[1].nextSibling);
	}
	function createNewShowLessButton() {
		tasks.createdNewShowLessButton = true;
		//let container = document.querySelector('ytd-watch-flexy #above-the-fold ytd-text-inline-expander');
		let container = document.querySelector('ytd-watch-flexy #above-the-fold #description');
		const newElem = document.createElement("button");
		newElem.id = 'bt-show-less';
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.setAttribute("onclick", "document.querySelector('ytd-text-inline-expander').removeAttribute('is-expanded');");
		newElem.innerHTML = `
		<div class="visible-pseudo-button">
			<span bt-lang="en">Show less</span>
		</div>
		`;
		//container.insertBefore(newElem, container.children[5].nextSibling);
		container.insertBefore(newElem, container.children[1].nextSibling);
	}
	function createCommentsTeaser() {
		tasks.createdCommentsTeaser = true;
		//let container = document.querySelector('ytd-watch-flexy #above-the-fold ytd-text-inline-expander');
		if (BTConfig.layoutSelect == "polymer-2022") {
			let container = document.querySelector('ytd-watch-flexy #above-the-fold #top-row');
			const newElem = document.createElement("div");
			newElem.id = 'bt-comments-teaser';
			newElem.setAttribute("class", "bt-universalized-element");
			newElem.setAttribute("bt-optimized-universal-element", "");
			newElem.setAttribute("status", "0");
			newElem.setAttribute("onclick", 'document.querySelector("ytd-comments[engagement-panel]").parentNode.parentNode.parentNode.parentNode.setAttribute("visibility","ENGAGEMENT_PANEL_VISIBILITY_VISIBLE"); /*document.querySelector("#comments.ytd-watch-flexy").setAttribute("hidden","");*/');
			newElem.innerHTML = `
			<div id="bt-comments-teaser-inner">
				<div id="teaser-left">
					<span>Comments</span>
					<div id="teaser-count">
						<span></span>
					</div>
				</div>
				<div id="teaser-middle">
					<div id="user-comment">
						<div id="uc-left">
							<div id="uc-pfp">
							</div>
						</div>
						<div id="uc-right">
							<div id="uc-text">
								<span></span>
							</div>
						</div>
					</div>
					<div id="amsterdam-styled-fake-comment-box">
						<span>Add a comment...</span>
					</div>
					<div id="disabled-comment-box">
						<span>Comments are disabled for this video.</span>
					</div>
				</div>
				<div id="teaser-right">
					<bt-icon id="outline" icon="yt-icons:chevron_right" class="style-scope ytd-comments-entry-point-header-renderer">
						<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="style-scope yt-icon">
							<g mirror-in-rtl="" class="style-scope yt-icon">
								<path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon"></path>
							</g>
						</svg>
					</yt-icon>
				</div>
			</div>
			`;
			//container.insertBefore(newElem, container.children[5].nextSibling);
			container.insertBefore(newElem, container.children[2].nextSibling);
		}
	}
	function createShowMoreHome() {
		tasks.createdShowMoreHome = true;
		let richGrid = document.querySelector('html[location="home"] ytd-two-column-browse-results-renderer[page-subtype="home"] ytd-rich-grid-renderer');
		const loadMore = document.createElement("div");
		loadMore.id = 'bt-load-more-homepage';
		loadMore.setAttribute("bt-optimized-universal-element", "");
		loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");
		loadMore.innerHTML = `
		<a>
			<span>Load More</span>
		</a>
		`;
		richGrid.insertBefore(loadMore, richGrid.children[5].nextSibling);	
		setTimeout(disableInfiScroll, 100);
	}
	function createShowMoreChannel() {
		tasks.createdShowMoreChannel = true;
		let richGrid = document.querySelector('html[location="channel"] ytd-two-column-browse-results-renderer[page-subtype="channels"] ytd-rich-grid-renderer');
		const loadMore = document.createElement("div");
		loadMore.id = 'bt-load-more-channel';
		loadMore.setAttribute("bt-optimized-universal-element", "");
		loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");
		loadMore.innerHTML = `
		<a>
			<span>Load More</span>
		</a>
		`;
		richGrid.insertBefore(loadMore, richGrid.children[5].nextSibling);	
		setTimeout(disableInfiScroll2, 100);
	}
	function createShowMoreRelated() {
		tasks.createdShowMoreRelated = true;
		let related = document.querySelector('html[location="watch"] ytd-watch-flexy #related');
		const loadMore = document.createElement("div");
		loadMore.id = 'bt-load-more-related';
		loadMore.setAttribute("bt-optimized-universal-element", "");
		loadMore.setAttribute("class", "bt-universalized-element");
		if (BTConfig.layoutSelect == "none") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "hitchhiker-2014") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-3") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-2") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "hitchhiker-2013-1") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "cosmicpanda-3") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "aozora-2011") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "aozora-2010") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "stargazer-2009-3") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "stargazer-2008-1") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
		}
		if (BTConfig.layoutSelect == "polymer-2019") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");
			loadMore.setAttribute("type", "2");	
		}
		if (BTConfig.layoutSelect == "polymer-2020") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");	
			loadMore.setAttribute("type", "2");	
		}
		if (BTConfig.layoutSelect == "polymer-2021") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");
			loadMore.setAttribute("type", "2");	
		}
		if (BTConfig.layoutSelect == "polymer-2022") {
			loadMore.setAttribute("class", "bt-universalized-element bt-standard-button");
			loadMore.setAttribute("type", "2");	
		}
		loadMore.innerHTML = `
		<a>
		<span>Load more
			<span id="suggestions" bt-lang="en"> suggestions
			</span>
		</span>
		<paper-ripple></paper-ripple>
		</a>
		`;
		related.insertBefore(loadMore, related.children[2].nextSibling);	
		setTimeout(disableInfiScroll3, 100);
	}
	function createVideosDropdown() {
		tasks.createdVideosDropdown = true;
		let container = document.querySelector('#owner');
		const newElem = document.createElement("div");
		newElem.id = 'bt-videos-dropdown-button';
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.setAttribute("class", "bt-universalized-element");
		newElem.innerHTML = `
		<div id="videos-dd-button-area">
			<div id="videos-dd-button" class="bt-standard-button" disabled>
				<a>
					<span id="dd-button-videos-count"></span>
					<span class="ct-uix-button-arrow"></span>
				</a>
			</div>
			<div id="videos-link">
			</div>
		</div>
		`;
		container.insertBefore(newElem, container.children[2]);
		let container2 = document.querySelector('#bt-above');
		const newElem2 = document.createElement("div");
		newElem2.id = 'bt-videos-dropdown';
		newElem2.setAttribute("bt-optimized-universal-element", "");
		newElem2.setAttribute("class", "bt-universalized-element");
		newElem2.innerHTML = `
		<div id="videos-dd" current-slide="0" max-slides="0">
			<div id="videos-dd-inner">
				<div id="videos-dd-left" class="videos-dd-arrow bt-standard-button" disabled>
					<a>
						<span></span>
					</a>
				</div>
				<div id="videos-dd-right" class="videos-dd-arrow bt-standard-button" disabled>
					<a>
						<span></span>
					</a>
				</div>
				<div id="videos-dd-header">
					<a id="videos-dd-videos-link" class="yt-simple-endpoint">
						<span>See all </span>
						<span id="videos-dd-count"></span>
						<span> »</span>
					</a>
					<div id="videos-dd-pagination">
						<div id="videos-dd-0" class="bt-standard-button videos-dd-pagination-button" active>
							<a>
								<span>1</span>
							</a>
						</div>
						<div id="videos-dd-1" class="bt-standard-button videos-dd-pagination-button">
							<a>
								<span>2</span>
							</a>
						</div>
						<div id="videos-dd-2" class="bt-standard-button videos-dd-pagination-button">
							<a>
								<span>3</span>
							</a>
						</div>
						<div id="videos-dd-3" class="bt-standard-button videos-dd-pagination-button">
							<a>
								<span>4</span>
							</a>
						</div>
						<div id="videos-dd-4" class="bt-standard-button videos-dd-pagination-button">
							<a>
								<span>5</span>
							</a>
						</div>
					</div>
				</div>
				<div id="videos-dd-slider">
					<div id="videos-dd-slider-inner">
						<div id="js-destination" class="super-compact-row">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="videos-link">
		</div>
		`;
		container2.insertBefore(newElem2, container2.children[2]);
	}
	function createVideosLink() {
		tasks.createdVideosLink = true;
		let container = document.querySelector('ytd-video-owner-renderer ytd-channel-name');
		const newElem = document.createElement("a");
		newElem.id = 'bt-video-count-link';
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.setAttribute("class", "bt-universalized-element yt-simple-endpoint");
		newElem.innerHTML = `
		<style>
		ytd-watch-metadata ytd-channel-name {
			align-items: center;
		}
		html[show-videos-link="false"] #bt-video-count-link {
			display: none !important;
		}
		#bt-video-count-link {
			display: block;
			margin-left: 4px;
		}
		#bt-video-count-link::before {
			content: "·";
			margin: 0 4px;
		}
		html[watch-metadata-style^="hitchhiker"] #bt-video-count-link {
			margin-top: -5px;
			display: block;
			margin-left: 2px;
			font-size: 11px;
			color: var(--bt-gcp-666) !important;
			font-weight: normal;
		}
		html[watch-metadata-style^="polymer"] #bt-video-count-link::before {
			content: "•";
			margin: 0 4px;
		}
		html[watch-metadata-style^="polymer"] #bt-video-count-link {
			font-size: 15px;
			opacity: 0.8;
		}
		html[watch-metadata-style^="polymer"] #bt-video-count-link:hover {
			opacity: 1;
		}
		html[layout^="aozora"] #bt-video-count-link,
		html[layout^="cosmicpanda"] #bt-video-count-link {
			display: none !important;
		}
		</style>
		<span> videos</span>
		`;
		container.insertBefore(newElem, container.children[2]);
	}
}
function moveElements() {
	var loopThroughTitleOnTop = setInterval(function() {
		if (document.querySelector("html[title-on-top]") != null) {
			if (!tasks.movedTitleToTop) {
				if (document.querySelector("html[title-on-top='true'] ytd-watch-flexy #bt-above") != null) {
					setTimeout(moveTitleToTop, 1);
				}
				if (document.querySelector("html[title-on-top='false']") != null) {
					tasks.movedTitleToTop = true;
				}
			}
			if (tasks.movedTitleToTop) {
				clearInterval(loopThroughTitleOnTop);
			}
		}
	}, 500);
	setTimeout(loopThroughTitleOnTop, 100);
	var loopThroughMetaOnSide = setInterval(function() {
		if (document.querySelector("html[meta-on-side]") != null) {
			if (!tasks.movedMetaToSide) {
				if (document.querySelector("html[meta-on-side='true'] ytd-watch-flexy #bt-above") != null) {
					setTimeout(moveMetaToSide, 1);
				}
				if (document.querySelector("html[meta-on-side='false']") != null) {
					tasks.movedMetaToSide = true;
				}
			}
			if (tasks.movedMetaToSide) {
				clearInterval(loopThroughMetaOnSide);
			}
		}
	}, 500);
	waitFor("html[location='watch'] ytd-app", 300, loopThroughMoveWatchButtons);
	var loopThroughMoveWatchButtons = setInterval(function() {
		/*if (!tasks.movedHHButtons) {
			if (
			document.querySelector("html[watch-metadata-style^='hitchhiker'] ytd-watch-flexy #above-the-fold #top-level-buttons-computed ytd-button-renderer") != null &&
			document.querySelector('path[d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"]') != null &&
			document.querySelector('#above-the-fold #top-level-buttons-computed ytd-button-renderer button') != null
			) {
				setTimeout(prepFor, 100);
			}
			if (
			document.querySelector("html[watch-metadata-style^='cosmicpanda'][title-on-top='false'] ytd-watch-flexy #above-the-fold #top-level-buttons-computed ytd-button-renderer") != null &&
			document.querySelector('path[d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"]') != null &&
			document.querySelector('#above-the-fold #top-level-buttons-computed ytd-button-renderer button') != null
			) {
				setTimeout(prepFor, 100);
			}
			if (document.querySelector("#bt-middle-row #middle button") != null) {
				if (document.querySelector("#bt-middle-row #flexible-item-buttons") != null) {
					tasks.movedHHButtons = true;
				}
			}
		}
		*/
		if (
		document.querySelector("html[watch-metadata-style^='polymer'] ytd-watch-flexy #above-the-fold #top-level-buttons-computed ytd-button-renderer") != null ||
		document.querySelector("html[watch-metadata-style^='polymer'] ytd-watch-flexy #above-the-fold button-view-model") != null
		) {
			setTimeout(assignWatchButtons, 100);
		}
		if (tasks.movedHHButtons) {
			clearInterval(loopThroughMoveWatchButtons);
		}
	}, 100);
	waitFor("html[location='watch'] ytd-app #above-the-fold", 500, loopThroughMoveGuideButton);
	var loopThroughMoveGuideButton = setInterval(function() {
		if (!tasks.movedGuideButton) {
			if (document.querySelector("html[location='watch'][watch-metadata-style^='hitchhiker-2013'] ytd-watch-flexy") != null) {
				if (document.querySelector("ytd-watch-flexy #guide-button") == null) {
					setTimeout(moveGuideButton, 100);
				}
			}
			if (document.querySelector("html[watch-metadata-style^='hitchhiker-2013']") == null) {
				tasks.movedGuideButton = true;
			}
		}
		if (tasks.movedGuideButton) {
			clearInterval(loopThroughMoveGuideButton);
		}
	}, 150);
	waitFor("html[my-channel-btn='true']", 500, loopThroughMoveYCButton);
	var loopThroughMoveYCButton = setInterval(function() {
		if (!tasks.movedYCButton) {
			if (document.querySelector("ytd-guide-collapsible-section-entry-renderer ytd-guide-entry-renderer [href^='/channel']") != null) {
				setTimeout(moveYCButton, 100);
			} else {
				tasks.moveYCButton = true;
			}
			if (document.querySelector("html[my-channel-btn='true']") == null) {
				tasks.moveYCButton = true;
			}
		}
		if (tasks.movedYCButton) {
			clearInterval(loopThroughMoveYCButton);
		}
	}, 150);
	function prepFor() {
		waitFor("#bt-middle-row", 100, moveWatchButtons);
	}
	function assignWatchButtons() {
		var flexMenu = document.querySelector("ytd-menu-renderer.ytd-watch-metadata");
		flexMenu.setAttribute("has-items", "5");
		var flexItems = document.querySelector('#above-the-fold ytd-menu-renderer #flexible-item-buttons');
		let share = document.querySelector("ytd-watch-flexy #above-the-fold #top-level-buttons-computed ytd-button-renderer button");
		let share1 = share.parentNode;
		let shareButton = share1.parentNode;
		shareButton.setAttribute("id", "bt-share-button");
		//path[d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"]
		let addTo = document.querySelector('path[d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"]');
		let addToButton = addTo.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
		addToButton.setAttribute("id", "bt-save-button");
		var moreButton = document.querySelector('#above-the-fold ytd-menu-renderer #button-shape');
		tasks.movedHHButtons = true;
	}
	function moveWatchButtons() {
		var flexMenu = document.querySelector("ytd-menu-renderer.ytd-watch-metadata");
		flexMenu.setAttribute("has-items", "5");
		var flexItems = document.querySelector('#above-the-fold ytd-menu-renderer #flexible-item-buttons');
		let share = document.querySelector("ytd-watch-flexy #above-the-fold #top-level-buttons-computed ytd-button-renderer button");
		let share1 = share.parentNode;
		let shareButton = share1.parentNode;
		shareButton.setAttribute("id", "bt-share-button");
		//path[d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"]
		let addTo = document.querySelector('path[d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"]');
		let addToButton = addTo.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
		addToButton.setAttribute("id", "bt-save-button");
		var moreButton = document.querySelector('#above-the-fold ytd-menu-renderer #button-shape');
		var newHome1 = document.querySelector('#bt-middle-row #watch-buttons-inner #left');
		var newHome2 = document.querySelector('#bt-middle-row #watch-buttons-inner #middle');
		var newHome3 = document.querySelector('#bt-middle-row #watch-buttons-inner #middle2');
		if (!tasks.movedHHButtons) {
			newHome1.appendChild(flexItems);
			newHome2.appendChild(shareButton);
			newHome3.appendChild(moreButton);
		}
	}
	function moveTitleToTop() {
		tasks.movedTitleToTop = true;
		var title = document.querySelector('#above-the-fold #title');
		var topRow = document.querySelector('#above-the-fold #owner');
		var videosDD = document.querySelector('#bt-videos-dropdown');
		var newHome4 = document.querySelector('#bt-above');
		newHome4.appendChild(title);
		newHome4.appendChild(topRow);
		newHome4.appendChild(videosDD);
	}
	function moveMetaToSide() {
		tasks.movedMetaToSide = true;
		var bottomRow = document.querySelector('ytd-watch-metadata');
		var owner = document.querySelector('#bt-above #owner');
		var newHome4 = document.querySelector('ytd-watch-flexy #bt-meta-side');
		newHome4.insertBefore(bottomRow, newHome4.children[0]);
		newHome4.insertBefore(owner, newHome4.children[0]);
		setTimeout(moveOtherStuffBack, 100);
		function moveOtherStuffBack() {
			var theTopRow = document.querySelector('ytd-watch-metadata #top-row');
			var newHome5 = document.querySelector('ytd-watch-flexy #bt-place-metadata');
			newHome5.insertBefore(theTopRow, newHome5.children[0]);
		}
	}
	function moveGuideButton() {
		var theBtn = document.querySelector('#guide-button');
		theBtn.setAttribute('onclick','document.querySelector("#guide").setAttribute("persistent",""); document.querySelector("ytd-watch-flexy").toggleAttribute("guide");');
		var newHome5 = document.querySelector('ytd-watch-flexy');
		newHome5.appendChild(theBtn);
		tasks.movedGuideButton = true;
	}
	function moveYCButton() {
		var theBtn2 = document.querySelector('#bt-your-channel-button');
		var newHome6 = document.querySelector('ytd-guide-section-renderer #items');
		newHome6.insertBefore(theBtn2, newHome6.children[1]);
		tasks.movedYCButton = true;
	}
}
function watchPageEveryLoad() {
	//if (BTVars.btlocation == "watch") {
		if (document.querySelector("html[layout] like-button-view-model yt-icon") != null) {
			if (document.querySelector("#bt-like") === null) {
				const newElem = document.createElement("bt-icon");
				newElem.id = 'bt-like';
				newElem.setAttribute("class", "bt-universalized-element");
				newElem.setAttribute("bt-optimized-universal-element", "");
				newElem.innerHTML = `
				<style>
				html:not([icon-type="outline"]) #segmented-like-button svg:not([icon-type="filled"]),
				html:not([icon-type="outline"]) like-button-view-model svg:not([icon-type="filled"]) {
					display: none !important;
				}
				</style>
				<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="yt-icon">
						<path class="yt-icon" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
					</g>
				</svg>
				`;
				if (document.querySelector("#segmented-like-button") != null) {
					let container = document.querySelector('#segmented-like-button yt-icon');
					container.insertBefore(newElem, container.children[0]);
				} else {
					let container = document.querySelector('like-button-view-model yt-icon');
					container.insertBefore(newElem, container.children[0]);
				}
			}
		}
		if (document.querySelector("html[layout] dislike-button-view-model yt-icon") != null) {
			if (document.querySelector("#bt-dislike") === null) {
				const newElem = document.createElement("bt-icon");
				newElem.id = 'bt-dislike';
				newElem.setAttribute("class", "bt-universalized-element");
				newElem.setAttribute("bt-optimized-universal-element", "");
				newElem.innerHTML = `
				<style>
				html:not([icon-type="outline"]) #segmented-dislike-button svg:not([icon-type="filled"]),
				html:not([icon-type="outline"]) dislike-button-view-model svg:not([icon-type="filled"]) {
					display: none !important;
				}
				html:not([icon-type="outline"]) #segmented-dislike-button yt-icon-shape,
				html:not([icon-type="outline"]) dislike-button-view-model yt-icon-shape {
					display: none !important;
				}
				</style>
				<svg class="yt-icon" icon-type="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
					<g class="yt-icon">
						<path class="yt-icon" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
					</g>
				</svg>
				`;
				if (document.querySelector("#segmented-dislike-button") != null) {
					let container = document.querySelector('#segmented-dislike-button yt-icon');
					container.insertBefore(newElem, container.children[0]);
				} else {
					let container = document.querySelector('dislike-button-view-model yt-icon');
					container.insertBefore(newElem, container.children[0]);
				}
			}
		}
		if (
		document.querySelector("html[watch-metadata-style^='hitchhiker-2014']") != null ||
		document.querySelector("html[watch-metadata-style^='hitchhiker-2013']") != null
		) {
			waitFor("#button-shape", 200, moveWatch7Buttons);
			function moveWatch7Buttons() {
				if (document.querySelector('#segmented-like-button') != null) {
					var shareButton = document.querySelector('#top-level-buttons-computed ytd-button-renderer span').parentNode.parentNode.parentNode.parentNode;
				} else {
					if (document.querySelector('#top-level-buttons-computed ytd-button-renderer .yt-spec-button-shape-next__button-text-content') != null) {
						var shareButton = document.querySelector('#top-level-buttons-computed ytd-button-renderer .yt-spec-button-shape-next__button-text-content').parentNode.parentNode.parentNode;
					} else {
						var shareButton = document.querySelector('#top-level-buttons-computed yt-button-view-model .yt-spec-button-shape-next__button-text-content').parentNode.parentNode.parentNode;
					}
				}
				var moreActions = document.querySelector('#above-the-fold #button-shape');
				newHome1 = document.querySelector('#above-the-fold ytd-menu-renderer #flexible-item-buttons');
				newHome1.appendChild(shareButton);
				newHome1.appendChild(moreActions);
				const newElem = document.createElement("div");
				newElem.id = 'bt-fake-about';
				newElem.setAttribute("class", "bt-universalized-element");
				newElem.setAttribute("bt-optimized-universal-element", "");
				newElem.innerHTML = `
				<div id="fake-about-inner">
					<span bt-lang="en" class="bt-localized" style="display: block !important">About</span>
					<!--span bt-lang="ja" class="bt-localized">概要</span>
					<span bt-lang="es" class="bt-localized">Información</span-->
				</div>
				`;
				newHome1.insertBefore(newElem, newHome1.children[0]);
			}
		}
		setTimeout(fixComments, 5000);
		function fixComments() {
			if (document.querySelector("ytd-comments ytd-continuation-item-renderer[style^='display: none']") != null) {
				document.querySelector("ytd-comments ytd-continuation-item-renderer[style^='display: none']").removeAttribute("style");
				console.log("[CustomTube] Nudged the continuation item. This is the result of the comments not loading for 5 seconds.");
			}
		}
		// Video Title
		var videoTitle = document.querySelector("ytd-watch-flexy #title h1 .style-scope.ytd-watch-metadata").textContent;
		// View Count and Upload Date
		//var trueCounts = document.querySelector("#above-the-fold #description #tooltip").textContent;
		var trueCounts = sessionStorage.getItem("nebula-view-count");
		// View Count
		var cutString = trueCounts.split(' • ');
		var trueViewCount = cutString[0];
		var trueViewCountTrimmed = trueViewCount.replace(/(.+\d) \D+|\D+ (.+\d)/, "$1$2").replace(" ", ",");
		//TEMP FIX
		if (
		BTConfig.layoutSelect != "none" &&
		BTConfig.layoutSelect != "polymer-2022"
		) {
			waitFor("#bt-view-count", 200, doViews);
		}
		function doViews() {
			if (!BTVars.trimViews) {
				document.querySelector("#bt-view-count span").textContent = trueViewCount;
			}
			if (BTVars.trimViews) {
				document.querySelector("#bt-view-count span").textContent = trueViewCountTrimmed;
			}
		}
		var commentCount = sessionStorage.getItem("nebula-comment-count");
		var FCPfp = sessionStorage.getItem("nebula-first-comment-pfp");
		var FCText = sessionStorage.getItem("nebula-first-comment-text");
		//if (BTConfig.layoutSelect != "none") {
		if (BTConfig.layoutSelect == "polymer-2022") {
			waitFor("#bt-comments-teaser", 500, doCommentsTeaser);
		}
		function doCommentsTeaser() {
			document.querySelector("#bt-comments-teaser #teaser-count span").textContent = commentCount;
			if (commentCount == "Disabled") {
				document.querySelector("#bt-comments-teaser").setAttribute("status","2");
			}
			else if (
			commentCount == "0" ||
			/*commentCount == "1" ||
			commentCount == "2" ||
			commentCount == "3" ||
			commentCount == "4" ||
			commentCount == "5" ||
			commentCount == "6" ||
			commentCount == "7" ||
			commentCount == "8" ||
			commentCount == "9" ||
			commentCount == "10" ||
			commentCount == "11" ||
			commentCount == "12" ||
			commentCount == "13" ||
			commentCount == "14" ||
			commentCount == "15" ||
			commentCount == "16" ||
			commentCount == "17" ||
			commentCount == "18" ||
			commentCount == "19" ||
			commentCount == "20" ||
			commentCount == "21" ||
			commentCount == "22" ||
			commentCount == "23" ||
			commentCount == "24" ||
			commentCount == "25" ||
			commentCount == "26" ||
			commentCount == "27" ||
			commentCount == "28" ||
			commentCount == "29" ||
			commentCount == "30" ||
			commentCount == "31" ||
			commentCount == "32" ||
			commentCount == "33" ||
			commentCount == "34" ||
			commentCount == "35" ||
			commentCount == "36" ||
			commentCount == "37" ||
			commentCount == "38" ||
			commentCount == "39" ||
			commentCount == "40" ||
			commentCount == "41" ||
			commentCount == "42" ||
			commentCount == "43" ||
			commentCount == "44" ||
			commentCount == "45" ||
			commentCount == "46" ||
			commentCount == "47" ||
			commentCount == "48" ||
			commentCount == "49" ||*/
			FCText == "No"
			) {
				document.querySelector("#bt-comments-teaser").setAttribute("status","1");
			}
			else {
				document.querySelector("#bt-comments-teaser").setAttribute("status","0");
				document.querySelector("#bt-comments-teaser #uc-pfp").style.background = "url(" + FCPfp + ")";
				document.querySelector("#bt-comments-teaser #uc-text").textContent = FCText;
			}
		}
		// Upload Date
		//var trueUploadDate = cutString[1];
		var trueUploadDate = sessionStorage.getItem("nebula-upload-date");
		var videoAuthor = sessionStorage.getItem("nebula-video-author");
		var videoAuthorLink = sessionStorage.getItem("nebula-video-author-link");
		var videoAuthorId = sessionStorage.getItem("nebula-video-id");
		var videoAuthorHandle = sessionStorage.getItem("nebula-video-author-handle");
		document.querySelector("#bt-upload-date #precise-upload-date").innerText = trueUploadDate;
		document.querySelector("#bt-desc-upload-date #author-text").innerText = videoAuthor;
		//document.querySelector("#bt-desc-upload-date #author-text").setAttribute("href","https://www.youtube.com/channel/" + videoAuthorId);
		document.querySelector("#bt-desc-upload-date #author-text").setAttribute("channel-id",videoAuthorId);
		document.querySelector("#bt-desc-upload-date #author-text").setAttribute("channel-handle",videoAuthorHandle);
		let notNeedNewString = trueUploadDate.includes("d");
		if (notNeedNewString == true) {
		  waitFor("#bt-desc-upload-date #published-on", 100, ud1);
		  function ud1() {
			document.querySelector("#bt-desc-upload-date #published-on").style.display = "none";	
			document.querySelector("#bt-desc-upload-date #uploaded-by").style.display = "none";
			document.querySelector("#bt-desc-upload-date #second-on").style.display = "none";
			document.querySelector("#bt-desc-upload-date #author-text").style.display = "none";
			document.querySelector("#bt-desc-upload-date #precise-upload-date").innerText = trueUploadDate;
		  }
		  waitFor("#bt-pfp-upload-date #published-on", 100, ud2);
		  function ud2() {
			document.querySelector("#bt-pfp-upload-date #published-on").style.display = "none";	
			document.querySelector("#bt-desc-upload-date #uploaded-by").style.display = "none";
			document.querySelector("#bt-desc-upload-date #second-on").style.display = "none";
			document.querySelector("#bt-desc-upload-date #author-text").style.display = "none";
			document.querySelector("#bt-pfp-upload-date #precise-upload-date").innerText = trueUploadDate;
		  }
		}
		if (notNeedNewString == false) {
		  waitFor("#bt-desc-upload-date #published-on", 100, ud3);
		  function ud3() {
			document.querySelector("#bt-desc-upload-date #published-on").style.display = "inline";	
			document.querySelector("#bt-desc-upload-date #uploaded-by").style.display = "inline";
			document.querySelector("#bt-desc-upload-date #second-on").style.display = "inline";
			document.querySelector("#bt-desc-upload-date #author-text").style.display = "inline";
			document.querySelector("#bt-desc-upload-date #precise-upload-date").innerText = trueUploadDate;
		  }
		  waitFor("#bt-pfp-upload-date #published-on", 100, ud4);
		  function ud4() {
			document.querySelector("#bt-pfp-upload-date #published-on").style.display = "inline";
			document.querySelector("#bt-desc-upload-date #uploaded-by").style.display = "inline";
			document.querySelector("#bt-desc-upload-date #second-on").style.display = "inline";
			document.querySelector("#bt-desc-upload-date #author-text").style.display = "inline";
			document.querySelector("#bt-pfp-upload-date #precise-upload-date").innerText = trueUploadDate;
		  }
		}
		if (
		BTConfig.iUseRYD &&
		BTConfig.layoutSelect != "none" &&
		BTConfig.layoutSelect != "polymer-2022"
		) {
			if (document.querySelector("dislike-button-view-model") == null) {
				waitFor("#segmented-dislike-button span", 200, doCounts);
			} else {
				waitFor("dislike-button-view-model .yt-spec-button-shape-next__button-text-content", 200, doCounts);
			}
		}
		if (
		!BTConfig.iUseRYD &&
		BTConfig.layoutSelect != "none" &&
		BTConfig.layoutSelect != "polymer-2022"
		) {
			if (document.querySelector("like-button-view-model") == null) {
				waitFor("#segmented-like-button", 200, doCounts);
			} else {
				//waitFor("like-button-view-model", 200, doCounts);
				doCounts();
			}
		}
		function doCounts() {
			var starRating = sessionStorage.getItem("star-rating");
			//let likeCount = document.querySelector("#segmented-like-button span").textContent;
			let likeCount = sessionStorage.getItem("nebula-like-count");
			console.log(likeCount);
			if (document.querySelector("like-button-view-model") == null) {
				if (likeCount.includes("l")) {
					var cutLCString = likeCount.split(' l');
					likeCount = cutLCString[0];
				}
			}
			document.querySelector("#lc").innerText = likeCount;
			//document.querySelector("#bt-like-string").innerText = likeCount;
			//document.querySelector("#lc").innerText = starRating + "stars";
			if (BTConfig.iUseRYD) {
				if (document.querySelector("dislike-button-view-model") == null) {
					let dislikeCount = document.querySelector("#segmented-dislike-button span").textContent;
					var ratingCount = likeCount + dislikeCount;
					document.querySelector("#dc").innerText = dislikeCount;
				//	document.querySelector("#dc").innerText = ratingCount + "ratings";
				} else {
					let dislikeCount = document.querySelector("dislike-button-view-model .yt-spec-button-shape-next__button-text-content").textContent;
					var ratingCount = likeCount + dislikeCount;
					document.querySelector("#dc").innerText = dislikeCount;
				//	document.querySelector("#dc").innerText = ratingCount + "ratings";
				}
			}
		}
		/* sub counts */
		waitFor("html[location='watch'] #owner-sub-count", 200, trimSubs);
		function trimSubs() {
			var subCountElem = document.querySelector("#owner-sub-count");
			//var subCount = subCountElem.getAttribute("aria-label");
			var subCount = sessionStorage.getItem("nebula-sub-count");
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
			if (BTConfig.randomSubCounts) {
				if (subCount === oldSubCount) {
					trimmedSubCount = oldSubCountFull;
				}
				if (subCount != oldSubCount) {
					oldSubCount = subCount;
					if (trimmedSubCountt.includes("K")) {
						var cutSubString2 = trimmedSubCountt.split('K');
						var cutSubString3 = cutSubString2[0].split('.');
						if (trimmedSubCountt.includes(".09")) {
							var cutSubString4 = cutSubString3[0] + "," + "09" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".08")) {
							var cutSubString4 = cutSubString3[0] + "," + "08" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".07")) {
							var cutSubString4 = cutSubString3[0] + "," + "07" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".06")) {
							var cutSubString4 = cutSubString3[0] + "," + "06" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".05")) {
							var cutSubString4 = cutSubString3[0] + "," + "05" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".04")) {
							var cutSubString4 = cutSubString3[0] + "," + "04" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".03")) {
							var cutSubString4 = cutSubString3[0] + "," + "03" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".02")) {
							var cutSubString4 = cutSubString3[0] + "," + "02" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".01")) {
							var cutSubString4 = cutSubString3[0] + "," + "01" + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".9")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".8")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".7")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".6")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".5")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".4")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".3")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".2")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						if (trimmedSubCountt.includes(".1")) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9);
						}
						// Examples: 274K, 4K
						if (!trimmedSubCountt.includes(".")) {
							var cutSubString4 = cutSubString3[0] + "," + getRndInteger(100,999);
						}
						// Examples: 1.6K, 38.2K
						if (
							trimmedSubCountt.includes(".1K") ||
							trimmedSubCountt.includes(".2K") ||
							trimmedSubCountt.includes(".3K") ||
							trimmedSubCountt.includes(".4K") ||
							trimmedSubCountt.includes(".5K") ||
							trimmedSubCountt.includes(".6K") ||
							trimmedSubCountt.includes(".7K") ||
							trimmedSubCountt.includes(".8K") ||
							trimmedSubCountt.includes(".9K")
						) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(0,9) + getRndInteger(0,9);
						}
						var trimmedSubCount = cutSubString4;
					}
					if (trimmedSubCountt.includes("M")) {
						var cutSubString2 = trimmedSubCountt.split('M');
						var cutSubString3 = cutSubString2[0].split('.');
						if (trimmedSubCountt.includes(".09")) {
							var cutSubString4 = cutSubString3[0] + "," + "09" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".08")) {
							var cutSubString4 = cutSubString3[0] + "," + "08" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".07")) {
							var cutSubString4 = cutSubString3[0] + "," + "07" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".06")) {
							var cutSubString4 = cutSubString3[0] + "," + "06" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".05")) {
							var cutSubString4 = cutSubString3[0] + "," + "05" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".04")) {
							var cutSubString4 = cutSubString3[0] + "," + "04" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".03")) {
							var cutSubString4 = cutSubString3[0] + "," + "03" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".02")) {
							var cutSubString4 = cutSubString3[0] + "," + "02" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".01")) {
							var cutSubString4 = cutSubString3[0] + "," + "01" + getRndInteger(0,9) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".9")) {
							var cutSubString4 = cutSubString3[0] + ",9" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".8")) {
							var cutSubString4 = cutSubString3[0] + ",8" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".7")) {
							var cutSubString4 = cutSubString3[0] + ",7" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".6")) {
							var cutSubString4 = cutSubString3[0] + ",6" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".5")) {
							var cutSubString4 = cutSubString3[0] + ",5" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".4")) {
							var cutSubString4 = cutSubString3[0] + ",4" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".3")) {
							var cutSubString4 = cutSubString3[0] + ",3" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".2")) {
							var cutSubString4 = cutSubString3[0] + ",2" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (trimmedSubCountt.includes(".1")) {
							var cutSubString4 = cutSubString3[0] + ",1" + getRndInteger(10,99) + "," + getRndInteger(100,999);
						}
						if (!trimmedSubCountt.includes(".")) {
							var cutSubString4 = cutSubString3[0] + "," + getRndInteger(100,999) + "," + getRndInteger(100,999);
						}
						if (
						trimmedSubCountt.includes(".") &&
						!trimmedSubCountt.includes(".1M") &&
						!trimmedSubCountt.includes(".2M") &&
						!trimmedSubCountt.includes(".3M") &&
						!trimmedSubCountt.includes(".4M") &&
						!trimmedSubCountt.includes(".5M") &&
						!trimmedSubCountt.includes(".6M") &&
						!trimmedSubCountt.includes(".7M") &&
						!trimmedSubCountt.includes(".8M") &&
						!trimmedSubCountt.includes(".9M")
						) {
							var cutSubString4 = cutSubString3[0] + "," + cutSubString3[1] + getRndInteger(1,9) + "," + getRndInteger(100,999);
						}
						var trimmedSubCount = cutSubString4;
					}
					oldSubCountFull = trimmedSubCount;
				}
			}
			if (BTConfig.layoutSelect == "amsterdam-2023") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " subscribers";
			}
			if (BTConfig.layoutSelect == "amsterdam-2022") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " subscribers";
			}
			if (BTConfig.layoutSelect == "polymer-2022") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " subscribers";
			}
			if (BTConfig.layoutSelect == "polymer-2021") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " subscribers";
			}
			if (BTConfig.layoutSelect == "polymer-2022") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " subscribers";
			}
			if (BTConfig.layoutSelect == "polymer-2020") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " subscribers";
			}
			if (BTConfig.layoutSelect == "hitchhiker-2017") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount;
			}
			if (BTConfig.layoutSelect == "hitchhiker-2016") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount;
			}
			if (BTConfig.layoutSelect == "hitchhiker-2015") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount;
			}
			if (BTConfig.layoutSelect == "hitchhiker-2014") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount;
			}
			if (BTConfig.layoutSelect == "hitchhiker-2013-3") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount;
			}
			if (BTConfig.layoutSelect == "hitchhiker-2013-2") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount;
			}
			if (BTConfig.layoutSelect == "hitchhiker-2013-1") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount;
			}
			if (BTConfig.layoutSelect == "cosmicpanda-3") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (BTConfig.layoutSelect == "cosmicpanda-2") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (BTConfig.layoutSelect == "cosmicpanda-1") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (BTConfig.layoutSelect == "aozora-2011") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (BTConfig.layoutSelect == "aozora-2010") {
			document.querySelector("#owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (BTConfig.layoutSelect == "stargazer-2009-3") {
			document.querySelector("#bt-meta-side #owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (BTConfig.layoutSelect == "stargazer-2009-2") {
			document.querySelector("#bt-meta-side #owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (BTConfig.layoutSelect == "stargazer-2009-1") {
			document.querySelector("#bt-meta-side #owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (BTConfig.layoutSelect == "stargazer-2008-1") {
			document.querySelector("#bt-meta-side #owner-sub-count").innerText = trimmedSubCount + " Subscribers";
			}
			if (document.querySelector("html[sub-button-nested-sub-count='true']") != null) {
				setTimeout(doButtonNestedCount, 10);
			}
			function doButtonNestedCount() {
				document.querySelector("html[location='watch'] ytd-watch-flexy #subscribe-button yt-button-shape span").innerText = "Subscribe " + " " + trimmedSubCount;
				document.querySelector("html[location='watch'] ytd-watch-flexy #subscribe-button #notification-preference-button yt-button-shape span").innerText = "Subscribed " + " " + trimmedSubCount;
			}
		}
		if (document.querySelector("html:not([no-ryd]) dislike-button-view-model div") != null) {
			getRydCounts();
		} else {
			waitFor("html:not([no-ryd]) dislike-button-view-model div", 1000, getRydCounts);
		}
		function getRydCounts() {
			continueRydCounts();
		}
			function continueRydCounts() {
				if (document.querySelector("#ryd-bar") != null) {
					var rydPercent = document.querySelector("#ryd-bar").style.width;
					document.querySelector("#bt-bar likes").style.width = rydPercent;
					document.querySelector("#bt-bar #bt-ltod").setAttribute("title", rydPercent + " of viewers like this video");
					var rydPercentTrimmed = rydPercent.split('%');
					var stars = rydPercentTrimmed[0];
					/*if (stars <= 100) {
						var starRating = 5;
						document.querySelector("#bt-stars").setAttribute("rating", "5.0");
					}
					if (stars <= 90) {
						var starRating = 4.5;
						document.querySelector("#bt-stars").setAttribute("rating", "4.5");
					}
					if (stars <= 80) {
						var starRating = 4;
						document.querySelector("#bt-stars").setAttribute("rating", "4.0");
					}
					if (stars <= 70) {
						var starRating = 3.5;
						document.querySelector("#bt-stars").setAttribute("rating", "3.5");
					}
					if (stars <= 60) {
						var starRating = 3;
						document.querySelector("#bt-stars").setAttribute("rating", "3.0");
					}
					if (stars <= 50) {
						var starRating = 2.5;
						document.querySelector("#bt-stars").setAttribute("rating", "2.5");
					}
					if (stars <= 40) {
						var starRating = 2;
						document.querySelector("#bt-stars").setAttribute("rating", "2.0");
					}
					if (stars <= 30) {
						var starRating = 1.5;
						document.querySelector("#bt-stars").setAttribute("rating", "1.5");
					}
					if (stars <= 20) {
						var starRating = 1;
						document.querySelector("#bt-stars").setAttribute("rating", "1.0");
					}
					if (stars <= 10) {
						var starRating = 0.5;
						document.querySelector("#bt-stars").setAttribute("rating", "0.5");
					}
					if (stars <= 0) {
						var starRating = 0;
						document.querySelector("#bt-stars").setAttribute("rating", "0.0");
					}*/
					if (stars <= 100) {
						var starRating = 5;
						document.querySelector("#bt-stars").setAttribute("rating", "5.0");
					}
					if (stars <= 89) {
						var starRating = 4.5;
						document.querySelector("#bt-stars").setAttribute("rating", "4.5");
					}
					if (stars <= 78) {
						var starRating = 4;
						document.querySelector("#bt-stars").setAttribute("rating", "4.0");
					}
					if (stars <= 67) {
						var starRating = 3.5;
						document.querySelector("#bt-stars").setAttribute("rating", "3.5");
					}
					if (stars <= 55) {
						var starRating = 3;
						document.querySelector("#bt-stars").setAttribute("rating", "3.0");
					}
					if (stars <= 44) {
						var starRating = 2.5;
						document.querySelector("#bt-stars").setAttribute("rating", "2.5");
					}
					if (stars <= 33) {
						var starRating = 2;
						document.querySelector("#bt-stars").setAttribute("rating", "2.0");
					}
					if (stars <= 22) {
						var starRating = 1.5;
						document.querySelector("#bt-stars").setAttribute("rating", "1.5");
					}
					if (stars <= 11) {
						var starRating = 1;
						document.querySelector("#bt-stars").setAttribute("rating", "1.0");
					}
					sessionStorage.setItem("star-rating", starRating);
					let likeCount = sessionStorage.getItem("nebula-like-count");
					let dislikeCount = document.querySelector("dislike-button-view-model .yt-spec-button-shape-next__button-text-content").textContent;
					document.querySelector("#bt-bar #bt-stars").setAttribute("title", starRating + " stars (" + likeCount + ", " + dislikeCount + " dislikes, " + rydPercent + " liked)");
					//document.querySelector("#bt-bar").setAttribute("title", stars + " of viewers like this video");
				}
			}
		//}

	tasks.appliedWatchMetadata = "true";
}
var repeatedActions = setInterval(function()
{
	if (BTConfig.favicon == "faviAuto") {
		if (
			document.querySelector("html[layout^='stargazer']") != null ||
			document.querySelector("html[layout^='aozora']") != null
		) {
			if (document.querySelector("[href='https://s.ytimg.com/yt/favicon-vflZlzSbU.ico']") == null) {
				document.querySelector("link[sizes='32x32']").setAttribute("href", "https://s.ytimg.com/yt/favicon-vflZlzSbU.ico");
				document.querySelector("[rel='shortcut icon']").setAttribute("href", "https://s.ytimg.com/yt/favicon-vflZlzSbU.ico");
			}
		}
		if (
			document.querySelector("html[layout^='cosmicpanda']") != null ||
			document.querySelector("html[layout^='hitchhiker-2013']") != null ||
			document.querySelector("html[layout^='hitchhiker-2014']") != null ||
			document.querySelector("html[layout^='hitchhiker-2015']") != null
		) {
			if (document.querySelector("[href='https://s.ytimg.com/yts/img/favicon-vfldLzJxy.ico']") == null) {
				document.querySelector("link[sizes='32x32']").setAttribute("href", "https://s.ytimg.com/yt/favicon-vfldLzJxy.ico");
				document.querySelector("[rel='shortcut icon']").setAttribute("href", "https://s.ytimg.com/yts/img/favicon-vfldLzJxy.ico");
			}
		}
		if (
			document.querySelector("html[layout^='hitchhiker-2016']") != null
		) {
			if (document.querySelector("[href='https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico']") == null) {
				document.querySelector("link[sizes='32x32']").setAttribute("href", "https://s.ytimg.com/yt/favicon-vflz7uhzw.ico");
				document.querySelector("[rel='shortcut icon']").setAttribute("href", "https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico");
			}
		}
	}
	if (BTConfig.favicon == "favi2016") {
		if (document.querySelector("[href='https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico']") == null) {
			document.querySelector("link[sizes='32x32']").setAttribute("href", "https://s.ytimg.com/yt/favicon-vflz7uhzw.ico");
			document.querySelector("[rel='shortcut icon']").setAttribute("href", "https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico");
		}
	}
	if (BTConfig.favicon == "favi2012") {
		if (document.querySelector("[href='https://s.ytimg.com/yts/img/favicon-vfldLzJxy.ico']") == null) {
			document.querySelector("link[sizes='32x32']").setAttribute("href", "https://s.ytimg.com/yt/favicon-vfldLzJxy.ico");
			document.querySelector("[rel='shortcut icon']").setAttribute("href", "https://s.ytimg.com/yts/img/favicon-vfldLzJxy.ico");
		}
	}
	if (BTConfig.favicon == "favi2011") {
		if (document.querySelector("[href='https://s.ytimg.com/yt/favicon-vflZlzSbU.ico']") == null) {
			document.querySelector("link[sizes='32x32']").setAttribute("href", "https://s.ytimg.com/yt/favicon-vflZlzSbU.ico");
			document.querySelector("[rel='shortcut icon']").setAttribute("href", "https://s.ytimg.com/yt/favicon-vflZlzSbU.ico");
		}
	}
	if (document.querySelector("ytd-comment-simplebox-renderer #comment-dialog[hidden]") == null) {
		document.querySelector("html").setAttribute("comment-focus","true");
	} else {
		document.querySelector("html").setAttribute("comment-focus","false");
	}
	var width = screen.width;
	if (document.querySelector('ytd-watch-flexy[fullscreen]') != null) {
		BTVars.playerState = "fullscreen";
	}
	if (document.querySelector('ytd-watch-flexy[theater]') != null) {
		BTVars.playerState = "theater";
	}
	if (document.querySelector('ytd-watch-flexy[theater]') == null) {
		if (document.querySelector('ytd-watch-flexy[fullscreen]') == null) {
			BTVars.playerState = "normal";
		}
	}
	if (document.querySelector("html[location='watch'] ytd-watch-flexy ytd-subscribe-button-renderer yt-smartimation") == null) {
		if (document.querySelector("html[location='watch'] ytd-watch-flexy ytd-subscribe-button-renderer[subscribe-button-hidden]") != null) {
			setTimeout(markSubbed, 600);
		}
		if (document.querySelector("html[location='watch'] ytd-watch-flexy ytd-subscribe-button-renderer:not([subscribe-button-hidden])") != null) {
			setTimeout(markUnsubbed, 600);
		}
	}
	if (document.querySelector("html[location='watch'] ytd-watch-flexy ytd-subscribe-button-renderer yt-smartimation") != null) {
		if (document.querySelector("html[location='watch'] ytd-watch-flexy ytd-subscribe-button-renderer[subscribed]") != null) {
			setTimeout(markSubbed, 600);
		}
		if (document.querySelector("html[location='watch'] ytd-watch-flexy ytd-subscribe-button-renderer:not([subscribed])") != null) {
			setTimeout(markUnsubbed, 600);
		}
	}
	if (BTConfig.blockRGW) {
		if (document.querySelector('ytd-rich-grid-watch') != null) {
			setTimeout(blockRGW, 100);
		}
		function blockRGW() {
			console.log("[CustomTube] Rich Grid Watch Detected. Reloading.");
			window.location.reload();
		}
	}
	if (BTConfig.layoutSelect == "polymer-2022") {
		if (document.querySelector('[target-id="engagement-panel-comments-section"]') != null) {
			var thePanel = document.querySelector('[target-id="engagement-panel-comments-section"]');
			if (thePanel.getAttribute("visibility") == "ENGAGEMENT_PANEL_VISIBILITY_VISIBLE") {
				document.querySelector("#primary ytd-comments").setAttribute("hidden","");
			}
			if (thePanel.getAttribute("visibility") == "ENGAGEMENT_PANEL_VISIBILITY_HIDDEN") {
				document.querySelector("#primary ytd-comments").removeAttribute("hidden","");
			}
		}
	}
	/* always show sidebar old layouts 
	if (document.querySelector("html[static]") != null) {
		if (document.querySelector("#guide[persistent]") == null) {
			document.querySelector("#guide").setAttribute("persistent","");			
			document.querySelector("#guide").setAttribute("opened","");
			document.querySelector("ytd-app").setAttribute("guide-persistent-and-visible","");
		}
	}
	*/
	if (BTConfig.alwaysShowSidebar) {
		if (document.querySelector(".ct-hitchhiker-compatibility-enabled .watch") != null) {
			document.querySelector("html").classList.add("guide-pinned");
			document.querySelector("html").classList.add("show-guide");
			document.querySelector("body").classList.add("guide-pinning-enabled");
		}
		if (document.querySelector("ytd-app") != null) {
			if (document.querySelector("#guide[persistent]") == null) {
				if (document.querySelector("ytd-watch-flexy[fullscreen]") == null) {
					if (document.querySelector("html[watch-metadata-style^='hitchhiker-2013']") != null) {
						document.querySelector("ytd-watch-flexy").removeAttribute("guide");
						document.querySelector("#guide").setAttribute("persistent","");
						document.querySelector("#guide").setAttribute("opened","");
					} else {
							document.querySelector("ytd-app").setAttribute("guide-persistent-and-visible","");
							/*
						if (width < 1800) {
							document.querySelector("ytd-app").setAttribute("guide-persistent-and-visible","");
						}
						if (
							BTConfig.videoPlayerSize == "PS1024x576" ||
							BTConfig.videoPlayerSize == "PS1280x720"
						) {
							document.querySelector("ytd-app").setAttribute("guide-persistent-and-visible","");
						} 
						else if (
							width > 1930 &&
							BTConfig.videoPlayerSize == "PS1024x576"
						) {
							document.querySelector("ytd-app").removeAttribute("guide-persistent-and-visible");
						} 
						else if (
							width > 1800 &&
							BTConfig.videoPlayerSize == "PS854x480"
						) {
							document.querySelector("ytd-app").removeAttribute("guide-persistent-and-visible");
						} 
						else if (
							width > 1500 &&
							BTConfig.videoPlayerSize == "PS640x360"
						) {
							document.querySelector("ytd-app").removeAttribute("guide-persistent-and-visible");
						}
						else if (
							width > 1440 &&
							BTConfig.videoPlayerSize == "PS586x330"
						) {
							document.querySelector("ytd-app").removeAttribute("guide-persistent-and-visible");
						}
						*/
						document.querySelector("#guide").setAttribute("persistent","");
						document.querySelector("#guide").setAttribute("opened","");
					}
				}
			}
			if (document.querySelector("ytd-watch-flexy[fullscreen]") != null) {
				if (document.querySelector("html[watch-metadata-style^='hitchhiker-2013']") != null) {
					document.querySelector("ytd-watch-flexy").removeAttribute("guide");
				}
				if (document.querySelector("ytd-app[guide-persistent-and-visible]") != null) {
					document.querySelector("ytd-app").removeAttribute("guide-persistent-and-visible");
					document.querySelector("#guide").removeAttribute("persistent");
					document.querySelector("#guide").removeAttribute("opened");
				}
			}
		}
	}
}, 300);
function disableInfiScroll() {
  	let loadMoreVids = document.querySelector('ytd-two-column-browse-results-renderer[page-subtype="home"] #bt-load-more-homepage a');
	loadMoreVids.onclick = function() {
	document.querySelector("ytd-two-column-browse-results-renderer[page-subtype='home'] ytd-continuation-item-renderer").style.display = "block";
	}
}
function disableInfiScroll2() {
  	let loadMoreVids2 = document.querySelector('ytd-two-column-browse-results-renderer[page-subtype="channels"] #bt-load-more-channel a');
	loadMoreVids2.onclick = function() {
	document.querySelector("ytd-two-column-browse-results-renderer[page-subtype='channels'] ytd-continuation-item-renderer").style.display = "block";
	}
}
function disableInfiScroll3() {
  	let loadMoreVids3 = document.querySelector('html[location="watch"] ytd-watch-flexy #related #bt-load-more-related a');
	loadMoreVids3.onclick = function() {
	document.querySelector("html[location='watch'] ytd-watch-flexy #related ytd-continuation-item-renderer").style.display = "block";
	setTimeout(disableInfiScroll3point5, 1000);
	}
}
function disableInfiScroll3point5() {
	//document.querySelector("ytd-app[location='watch'] ytd-watch-flexy #related ytd-continuation-item-renderer").style.display = "none";
	document.querySelector("ytd-app").setAttribute("can-infi-scroll-related", "no");
}
//watch page subbtn
function markSubbed() {
	document.querySelector("#owner").setAttribute("subscribed","true");
}
function markUnsubbed() {
	document.querySelector("#owner").setAttribute("subscribed","false");
}
function getChannelVidsSort() {
	if (BTConfig.channelVidsDropdown == "CVDDoff") {
		document.querySelector("html").setAttribute("channel-vids-dropdown", "false");
	} else if (document.querySelector("html[channel-vids-dropdown='disabled']") == null) {
		if (document.querySelector("yt-formatted-string[title='Latest']") != null) {
			document.querySelector("html").setAttribute("channel-vids-dropdown","true");
			var chip_Newest = document.querySelector("yt-formatted-string[title='Latest']").parentNode;
			chip_Newest.setAttribute("id", "chip_newest");
			var isSelectedNewest = chip_Newest.getAttribute("aria-selected");
			if (isSelectedNewest == "true") {
				document.querySelector("#dropdown-btn").setAttribute("bt-state","newest");
			}
			document.querySelector("html").setAttribute("cv-sort-newest","true");
		} else {
			document.querySelector("html").setAttribute("cv-sort-newest","false");
		}
		if (document.querySelector("yt-formatted-string[title='Oldest']") != null) {
			var chip_Oldest = document.querySelector("yt-formatted-string[title='Oldest']").parentNode;
			chip_Oldest.setAttribute("id", "chip_oldest");
			var isSelectedOldest = chip_Oldest.getAttribute("aria-selected");
			if (isSelectedOldest == "true") {
				document.querySelector("#dropdown-btn").setAttribute("bt-state","oldest");
			}
			document.querySelector("html").setAttribute("cv-sort-oldest","true");
		} else {
			document.querySelector("html").setAttribute("cv-sort-oldest","false");
		}
		if (document.querySelector("yt-formatted-string[title='Popular']") != null) {
			var chip_Popular = document.querySelector("yt-formatted-string[title='Popular']").parentNode;
			chip_Popular.setAttribute("id", "chip_popular");
			var isSelectedPopular = chip_Popular.getAttribute("aria-selected");
			if (isSelectedPopular == "true") {
				document.querySelector("#dropdown-btn").setAttribute("bt-state","popular");
			}
			document.querySelector("html").setAttribute("cv-sort-popular","true");
		} else {
			document.querySelector("html").setAttribute("cv-sort-popular","false");
		}
		if (document.querySelector("yt-formatted-string[title='For you']") != null) {
			var chip_FYou = document.querySelector("yt-formatted-string[title='For you']").parentNode;
			var isSelectedForYou = chip_FYou.getAttribute("aria-selected");
			if (isSelectedForYou == "true") {
				document.querySelector("#dropdown-btn").setAttribute("bt-state","fyou");
				//document.querySelector("#chip-newest").click();
			}
			chip_FYou.setAttribute("id", "chip_fyou");
			document.querySelector("html").setAttribute("cv-sort-fyou","true");
		} else {
			document.querySelector("html").setAttribute("cv-sort-fyou","false");
		}
		if (document.querySelector("yt-formatted-string[title='Latest']") === null) {
			setTimeout(doChipsFallback, 500);
			console.log("[CustomTube] Couldn't find chips for sorting channel videos. Enabling fallback.");
		if (document.querySelector("yt-formatted-string[title='Popular']") === null) {
			setTimeout(doChipsFallback, 500);
			console.log("[CustomTube] Couldn't find chips for sorting channel videos. Enabling fallback.");
		}
		}
	}
}
function doChipsFallback() {
	document.querySelector("html").setAttribute("channel-vids-dropdown", "false");
}
let dataScript = document.createElement('script');
dataScript.src = browser.runtime.getURL('/scripts/dataget.js');
document.body.append(dataScript);
let appbarScript = document.createElement('script');
appbarScript.src = browser.runtime.getURL('/scripts/appbar.js');
document.body.append(appbarScript);


document.addEventListener("yt-page-data-updated", retrieveDataAttributePrep); 
function retrieveDataAttributePrep() {
	setTimeout(retrieveDataAttribute, 250);
}
function retrieveDataAttribute() {
	setTimeout(getHref, 10);
	var ytdData = sessionStorage.getItem("ytd-app-data");
	var convertedYtdData = JSON.parse(ytdData);
	//console.log(JSON.parse(ytdData));
	if (convertedYtdData.page == "watch") {
		if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer != null) {
			var wpViewCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.viewCount.simpleText;
			var wpUploadDate = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.dateText.simpleText;
			if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonRenderer != null) {
				var wpLikeCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonRenderer.likeButton.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label;
			} else {
				var wpLikeCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel.defaultButtonViewModel.buttonViewModel.title;
			}
			var wpSubCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText.simpleText;
			var wpAuthor = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.title.runs[0].text;
			var wpAuthorLink = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.title.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url;
			/*if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[2].itemSectionRenderer != null) {
				if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[2].itemSectionRenderer.contents[0].commentsEntryPointHeaderRenderer != null) {
					var wpCommentCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[2].itemSectionRenderer.contents[0].commentsEntryPointHeaderRenderer.commentCount.simpleText;
				} else {
					var wpCommentCount = "Disabled";
				}
			} else {
				var wpCommentCount = "Disabled";
			}*/
			var wpCommentCount = "Disabled";
			var wpFirstCommentPfp = "No";
			var wpFirstCommentText = "No";
			/*if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[3] != null) {
				if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[3].itemSectionRenderer.contents[0].commentThreadRenderer != null) {
					var wpFirstCommentPfp = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[3].itemSectionRenderer.contents[0].commentThreadRenderer.comment.commentRenderer.authorThumbnail.thumbnails[0].url;
					var wpFirstCommentText = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[3].itemSectionRenderer.contents[0].commentThreadRenderer.comment.commentRenderer.contentText.runs[0].text;
				} else {
					var wpFirstCommentPfp = "No";
					var wpFirstCommentText = "No";
				}
			} else {
				var wpFirstCommentPfp = "No";
				var wpFirstCommentText = "No";
			}*/
			if (BTConfig.layoutSelect == "polymer-2022") {
				if (document.querySelector("#bt-comments-teaser[status='0']") == null) {
					setTimeout(retrieveDataAttribute, 5000);
				}
			}
			if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.isLive != null) {
				setTimeout(retrieveDataAttribute, 5000);
			}
		}
		// because for some ungodly reason ticket shelf comes before video info renderer
		if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[0].videoPrimaryInfoRenderer == null) {
			var wpViewCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoPrimaryInfoRenderer.viewCount.videoViewCountRenderer.viewCount.simpleText;
			var wpUploadDate = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoPrimaryInfoRenderer.dateText.simpleText;
			if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonRenderer != null) {
				var wpLikeCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonRenderer.likeButton.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label;
			} else {
				var wpLikeCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel.defaultButtonViewModel.buttonViewModel.title;
			}
			var wpSubCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText.simpleText;
			var wpAuthor = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.title.runs[0].text;
			var wpAuthorLink = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.title.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url;
			/*if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[3].itemSectionRenderer != null) {
				if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[3].itemSectionRenderer.contents[0].commentsEntryPointHeaderRenderer != null) {
					var wpCommentCount = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[3].itemSectionRenderer.contents[0].commentsEntryPointHeaderRenderer.commentCount.simpleText;
				} else {
					var wpCommentCount = "Disabled";
				}
			} else {
				var wpCommentCount = "Disabled";
			}*/
			var wpCommentCount = "Disabled";
			var wpFirstCommentPfp = "No";
			var wpFirstCommentText = "No";
			/*if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[4] != null) {
				if (convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[4].itemSectionRenderer.contents[0].commentThreadRenderer != null) {
					var wpFirstCommentPfp = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[4].itemSectionRenderer.contents[0].commentThreadRenderer.comment.commentRenderer.authorThumbnail.thumbnails[0].url;
					var wpFirstCommentText = convertedYtdData.response.contents.twoColumnWatchNextResults.results.results.contents[4].itemSectionRenderer.contents[0].commentThreadRenderer.comment.commentRenderer.contentText.runs[0].text;
				} else {
					var wpFirstCommentPfp = "No";
					var wpFirstCommentText = "No";
				}
			} else {
				var wpFirstCommentPfp = "No";
				var wpFirstCommentText = "No";
			}*/
		}
		sessionStorage.setItem("nebula-upload-date", wpUploadDate);
		sessionStorage.setItem("nebula-like-count", wpLikeCount);
		sessionStorage.setItem("nebula-sub-count", wpSubCount);
		sessionStorage.setItem("nebula-video-author", wpAuthor);
		sessionStorage.setItem("nebula-video-author-link", wpAuthorLink);
		sessionStorage.setItem("nebula-comment-count", wpCommentCount);
		sessionStorage.setItem("nebula-first-comment-pfp", wpFirstCommentPfp);
		sessionStorage.setItem("nebula-first-comment-text", wpFirstCommentText);
		if (wpViewCount != null) {
			sessionStorage.setItem("nebula-view-count", wpViewCount);
		} else if (wpViewCount == null) {
			sessionStorage.setItem("nebula-view-count", "Just a moment...");
		}
		if (document.querySelector("#bt-view-count") != null) {
			setTimeout(watchPageEveryLoad, 10);
		} else {
			//Temporary
			waitFor("#bt-view-count", 200, watchPageEveryLoad);
		}
	}
	if (convertedYtdData.page == "channel") {
		var chanSubCount = convertedYtdData.response.header.c4TabbedHeaderRenderer.subscriberCountText.simpleText;
		sessionStorage.setItem("nebula-channel-sub-count", chanSubCount);
	}
	if (convertedYtdData.page == "channel") {
		waitFor("#bt-chan-vids-dropdown", 200, getChannelVidsSort);
	}	
}
