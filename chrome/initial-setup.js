let browser = chrome;
let minVersion = 53;
let browserVersion;
let storage = browser.storage.local;
if (navigator.userAgent.match(/Firefox\/([^\s]+)/)) {
	browserVersion = parseInt(navigator.userAgent.match(/Firefox\/([^\s]+)/)[1]);
	if (browserVersion >= minVersion) {
		storage = browser.storage.sync;
	}
}
let BTConfig;
let playerSize = {};
let aspectRatio = (window.screen.width / window.screen.height).toFixed(2);
const defaultSettings = {
	// 2017 layout is default just so the user knows for sure the extension actually does something
	"layoutSelect": "hitchhiker-2017", 
	"relatedSize": "auto", 
	"searchbarStyle": "autoSearchBar", 
	"channelVidsDropdown": "CVDDauto", 
	"channelVidsPerRow": "CVPRauto", 
	"homepageVidsPerRow": "HPVPRauto", 
	"subsVidsPerRow": "SVPRauto", 
	"videoRendererSize": "VRSizeAuto", 
	"videoPlayerSize": "PS854x480", 
	"hideShortsSubs": "HSSauto", 
	"blockRGW": true,
	"FSNoScroll": true,
	"noCast": true,
	"squarePfp": false,
	"squareVid": false,
	"dontLoopPlaylists": false,
	/* sidebar */
	"alwaysShowSidebar": false,
	"homeSidebarBtn": true,
	"wtwSidebarBtn": false,
	"NOTwtwSidebarBtn": false,
	"fytSidebarBtn": false,
	"myChannelSidebarBtn": true,
	"lowerCaseC": false,
	"shortsSidebarBtn": false,
	"trendingSidebarBtn": true,
	"subsSidebarBtn": true,
	/* topbar */
	"logoEndpoint": "LEHome",
	"iUseRYD": false,
	/* tweaks */
	"loopByDefault": false,
	"noJoin": false,
	"noClip": false,
	"noThanks": false,
	"noDownload": false,
	"betterSearch": true,
	"thumbFadeIn": false,
	"noInfi": false,
	"noFlexy": true,
	"randomSubCount": false,
	"viewCountFogging": false,
	"showNew": true,
	"showChangelog": true
};
storage.set({BTDefaultConfig: defaultSettings});
initiate();
function initiate() {
	storage.get(['BTConfig'], function(result) {
		if (Object.keys(result).length == 0) {
			storage.set({BTConfig: defaultSettings});
			BTConfig = defaultSettings;
		} else {
			//check which default settings are missing (e.g. due to updates) and add them
			for (let i in defaultSettings) { //loop through default settings
				let settingFound = false;
				for (let j in result.BTConfig) { //loop through current settings
					if (i == j) {
						settingFound = true;
						break;
					}
				}
				if (!settingFound) {
					console.log('[BT Log] New setting ' + i + ' is now available!');
					result.BTConfig[i] = defaultSettings[i];
					storage.set({BTConfig: result.BTConfig});
				}
			}
			BTConfig = result.BTConfig; //reassign in case missing settings were added
			playerSize.width = 555;
			playerSize.height = Math.ceil(playerSize.width / aspectRatio);
		}
	});
}