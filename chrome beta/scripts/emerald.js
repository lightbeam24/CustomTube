let signedIn = false;
let glbWatchVersion = "";
let visitorData = "";
let glbVideoId = "";
let glbVideoTitle = "";
let glbAutoplayEnabled = "unset";
class EmeraldLanguageModel {
	autoplay;
	subscribe;
	subscribed;
	videos;
	unsubscribe;
	upNext;
	constructor(lang) {
		if (lang == "pl-PL") {
			this.about = "Informacje";
			this.addToBtn = "Dodaj do";
			this.addToPlaylist = "Dodaj do playlisty";
			this.analytics = "Analityka";
			this.autoplay = "Autoodtwarzanie";
			this.byline = "autor: ";
			this.category = "Kategoria";
			this.createPlaylist = "Utwórz";
			this.creatorStudio = "Studio twórców";
			this.dislikes = " głosów na nie";
			this.enterPlaylistTitle = "Podaj nazwę playlisty...";
			this.license = "Licencja";
			this.like = "Fajne";
			this.likes = " głosów na tak,";
			this.moreBtn = "Więcej";
			this.noDescription = "Opis niedostępny.";
			this.onDate = "dnia ";
			this.privatePlaylist = "Prywatna";
			this.publicPlaylist = "Publiczna"
			this.publishedOn = "Opublikowany ";
			this.publishedOnOld = "Opublikowano ";
			this.saveBtn = "Zapisz";
			this.shareBtn = "Udostępnij";
			this.showLess = "Pokaż mniej";
			this.showMore = "Pokaż więcej";
			this.standardLicense = "Standardowa licencja YouTube";
			this.subscribe = "Subskrybuj";
			this.subscribed = "Subskrybujesz";
			this.tags = "Tagi";
			this.unlistedPlaylist = "Niepubliczna";
			this.unsubscribe = "Rezygnuję z subskrypcji";
			this.upNext = "Następny";
			this.uploadedBy = "Przesłane przez ";
			this.videoManager = "Menedżer filmów";
			this.videos = "Filmy";
			this.views = " wyświetleń";
		} else if (lang == "en") {
			this.about = "About";
			this.addToBtn = "Add to";
			this.addToPlaylist = "Add to playlist";
			this.analytics = "Analytics";
			this.autoplay = "Autoplay";
			this.byline = "by ";
			this.createPlaylist = "Create";
			this.creatorStudio = "Creator studio";
			this.dislikes = " dislikes";
			this.enterPlaylistTitle = "Enter playlist title...";
			this.license = "License";
			this.like = "Like";
			this.moreBtn = "More";
			this.noDescription = "No description available.";
			this.onDate = "on ";
			this.privatePlaylist = "Private";
			this.publicPlaylist = "Public"
			this.publishedOn = "Published on ";
			this.publishedOnOld = "Published on ";
			this.saveBtn = "Save";
			this.shareBtn = "Share";
			this.showLess = "Show less";
			this.showMore = "Show more";
			this.standardLicense = "Standard YouTube License";
			this.subscribe = "Subscribe";
			this.subscribed = "Subscribed";
			this.tags = "Tags";
			this.unlistedPlaylist = "Unlisted";
			this.unsubscribe = "Unsubscribe";
			this.upNext = "Up next";
			this.uploadedBy = "Uploaded by ";
			this.videoManager = "Video Manager";
			this.videos = "Videos";
			this.views = " views";
		    this.category = "Category";
		    this.likes = " likes,";
		} else {
			this.about = "About";
			this.addToBtn = "Add to";
			this.addToPlaylist = "Add to playlist";
			this.analytics = "Analytics";
			this.autoplay = "Autoplay";
			this.byline = "by ";
			this.createPlaylist = "Create";
			this.creatorStudio = "Creator studio";
			this.dislikes = " dislikes";
			this.enterPlaylistTitle = "Enter playlist title...";
			this.license = "License";
			this.like = "Like";
			this.moreBtn = "More";
			this.noDescription = "No description available.";
			this.onDate = "on ";
			this.privatePlaylist = "Private";
			this.publicPlaylist = "Public"
			this.publishedOn = "Published on ";
			this.publishedOnOld = "Published on ";
			this.saveBtn = "Save";
			this.shareBtn = "Share";
			this.showLess = "Show less";
			this.showMore = "Show more";
			this.standardLicense = "Standard YouTube License";
			this.subscribe = "Subscribe";
			this.subscribed = "Subscribed";
			this.tags = "Tags";
			this.unlistedPlaylist = "Unlisted";
			this.unsubscribe = "Unsubscribe";
			this.upNext = "Up next";
			this.uploadedBy = "Uploaded by ";
			this.videoManager = "Video Manager";
			this.videos = "Videos";
			this.views = " views";
		    this.category = "Category";
		    this.likes = " likes,";
		}
	}
}
let glbLang = null;
let emeraldLanguageModel = "";
function getSapisidhash()
{
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
	/* SHA-1 (FIPS 180-4) implementation in JavaScript                    (c) Chris Veness 2002-2019  */
	/*                                                                                   MIT Licence  */
	/* www.movable-type.co.uk/scripts/sha1.html                                                       */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


	/**
	 * SHA-1 hash function reference implementation.
	 *
	 * This is an annotated direct implementation of FIPS 180-4, without any optimisations. It is
	 * intended to aid understanding of the algorithm rather than for production use.
	 *
	 * While it could be used where performance is not critical, I would recommend using the ‘Web
	 * Cryptography API’ (developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest) for the browser,
	 * or the ‘crypto’ library (nodejs.org/api/crypto.html#crypto_class_hash) in Node.js.
	 *
	 * See csrc.nist.gov/groups/ST/toolkit/secure_hashing.html
	 *     csrc.nist.gov/groups/ST/toolkit/examples.html
	 */
	class Sha1 {

		/**
		 * Generates SHA-1 hash of string.
		 *
		 * @param   {string} msg - (Unicode) string to be hashed.
		 * @param   {Object} [options]
		 * @param   {string} [options.msgFormat=string] - Message format: 'string' for JavaScript string
		 *   (gets converted to UTF-8 for hashing); 'hex-bytes' for string of hex bytes ('616263' ≡ 'abc') .
		 * @param   {string} [options.outFormat=hex] - Output format: 'hex' for string of contiguous
		 *   hex bytes; 'hex-w' for grouping hex bytes into groups of (4 byte / 8 character) words.
		 * @returns {string} Hash of msg as hex character string.
		 *
		 * @example
		 *   import Sha1 from './sha1.js';
		 *   const hash = Sha1.hash('abc'); // 'a9993e364706816aba3e25717850c26c9cd0d89d'
		 */
		static hash(msg, options) {
			const defaults = { msgFormat: 'string', outFormat: 'hex' };
			const opt = Object.assign(defaults, options);

			switch (opt.msgFormat) {
				default: // default is to convert string to UTF-8, as SHA only deals with byte-streams
				case 'string':   msg = utf8Encode(msg);       break;
				case 'hex-bytes':msg = hexBytesToString(msg); break; // mostly for running tests
			}

			// constants [§4.2.1]
			const K = [ 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6 ];

			// initial hash value [§5.3.1]
			const H = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];

			// PREPROCESSING [§6.1.1]

			msg += String.fromCharCode(0x80);  // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

			// convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
			const l = msg.length/4 + 2; // length (in 32-bit integers) of msg + ‘1’ + appended length
			const N = Math.ceil(l/16);  // number of 16-integer-blocks required to hold 'l' ints
			const M = new Array(N);

			for (let i=0; i<N; i++) {
				M[i] = new Array(16);
				for (let j=0; j<16; j++) {  // encode 4 chars per integer, big-endian encoding
					M[i][j] = (msg.charCodeAt(i*64+j*4+0)<<24) | (msg.charCodeAt(i*64+j*4+1)<<16)
							| (msg.charCodeAt(i*64+j*4+2)<< 8) | (msg.charCodeAt(i*64+j*4+3)<< 0);
				} // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
			}
			// add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
			// note: most significant word would be (len-1)*8 >>> 32, but since JS converts
			// bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
			M[N-1][14] = ((msg.length-1)*8) / Math.pow(2, 32); M[N-1][14] = Math.floor(M[N-1][14]);
			M[N-1][15] = ((msg.length-1)*8) & 0xffffffff;

			// HASH COMPUTATION [§6.1.2]

			for (let i=0; i<N; i++) {
				const W = new Array(80);

				// 1 - prepare message schedule 'W'
				for (let t=0;  t<16; t++) W[t] = M[i][t];
				for (let t=16; t<80; t++) W[t] = Sha1.ROTL(W[t-3] ^ W[t-8] ^ W[t-14] ^ W[t-16], 1);

				// 2 - initialise five working variables a, b, c, d, e with previous hash value
				let a = H[0], b = H[1], c = H[2], d = H[3], e = H[4];

				// 3 - main loop (use JavaScript '>>> 0' to emulate UInt32 variables)
				for (let t=0; t<80; t++) {
					const s = Math.floor(t/20); // seq for blocks of 'f' functions and 'K' constants
					const T = (Sha1.ROTL(a, 5) + Sha1.f(s, b, c, d) + e + K[s] + W[t]) >>> 0;
					e = d;
					d = c;
					c = Sha1.ROTL(b, 30) >>> 0;
					b = a;
					a = T;
				}

				// 4 - compute the new intermediate hash value (note 'addition modulo 2^32' – JavaScript
				// '>>> 0' coerces to unsigned UInt32 which achieves modulo 2^32 addition)
				H[0] = (H[0]+a) >>> 0;
				H[1] = (H[1]+b) >>> 0;
				H[2] = (H[2]+c) >>> 0;
				H[3] = (H[3]+d) >>> 0;
				H[4] = (H[4]+e) >>> 0;
			}

			// convert H0..H4 to hex strings (with leading zeros)
			for (let h=0; h<H.length; h++) H[h] = ('00000000'+H[h].toString(16)).slice(-8);

			// concatenate H0..H4, with separator if required
			const separator = opt.outFormat=='hex-w' ? ' ' : '';

			return H.join(separator);

			/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

			function utf8Encode(str) {
				try {
					return new TextEncoder().encode(str, 'utf-8').reduce((prev, curr) => prev + String.fromCharCode(curr), '');
				} catch (e) { // no TextEncoder available?
					return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
				}
			}

			function hexBytesToString(hexStr) { // convert string of hex numbers to a string of chars (eg '616263' -> 'abc').
				const str = hexStr.replace(' ', ''); // allow space-separated groups
				return str=='' ? '' : str.match(/.{2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
			}
		}


		/**
		 * Function 'f' [§4.1.1].
		 * @private
		 */
		static f(s, x, y, z)  {
			switch (s) {
				case 0: return (x & y) ^ (~x & z);          // Ch()
				case 1: return  x ^ y  ^  z;                // Parity()
				case 2: return (x & y) ^ (x & z) ^ (y & z); // Maj()
				case 3: return  x ^ y  ^  z;                // Parity()
			}
		}


		/**
		 * Rotates left (circular left shift) value x by n positions [§3.2.5].
		 * @private
		 */
		static ROTL(x, n) {
			return (x<<n) | (x>>>(32-n));
		}

	}


	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


	function gethash()
	{
		function getCookie(cname)
		{

			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');

			for(var i = 0; i <ca.length; i++) {

				var c = ca[i];
				while (c.charAt(0) == ' ') {
				  c = c.substring(1);
				}
				if (c.indexOf(name) == 0)
				{
				  return c.substring(name.length, c.length);
				}

			}

			return "";

		}

		var time = (Math.round(new Date() / 1000));
		var xorigin = "https://www.youtube.com";
		var sapisid = getCookie("SAPISID");

		var hash = Sha1.hash(time + " " + sapisid + " " + xorigin);
		console.log(hash);
		sessionStorage.setItem("SAPI",hash);

		return ("SAPISIDHASH " + time + "_" + hash);

	}

	return gethash();
}
aion = getSapisidhash();
var context = {
	"client": {
		"clientName": "WEB",
		"clientVersion": "2.20240123.06.00",
		"hl": "en",
		"gl": "US"
	}	
};
var context1 = {
	"client": {
		"clientName": 16,
		"clientVersion": "1.0",
		"hl": "en",
		"gl": "US"
	}	
};
let headers1 = {
	"accept": "application/json, text/plain, /",
	"accept-language": "en-US,en;q=0.9",
	"Authorization": aion,
	"Content-type": "application/json"
};
/*headers = {
	"accept": "application/json, text/plain, /",
	"accept-language": "en-US,en;q=0.9",
	"Content-type": "application/json",
	"sec-ch-ua-mobile": "?0",
	"sec-fetch-dest": "empty",
	"sec-fetch-mode": "cors",
	"sec-fetch-site": "same-origin",
	"x-goog-authuser": "0",
	"x-origin": "https://www.youtube.com/"
}*/
var oldSubCount = "pla.hol";
var oldSubCountFull = "placeholder";
document.addEventListener("yt-page-data-fetched", APIGet);
//document.addEventListener("yt-page-data-updated", emeraldWatch);
var $ = a => document.querySelector(a);
var canGo = false;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
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
async function isElemPresent(ELM) {
	while (null == document.querySelector(elm)) {
		await new Promise(r => requestAnimationFrame(r));
	}
	await timeout(50).then(function() {
		canGo = true;
		return document.querySelector(elm);
	});
}
async function getWatchVersion() {
	return new Promise((resolve, reject) => {
		var watchVersion = $("html").getAttribute("watch-version");
		resolve(watchVersion);
	});
}
var elm = "#primary-inner";
waitForElement(elm).then(function() {
	if ($("ytd-watch-flexy") != null) {
		$("ytd-watch-flexy").setAttribute("ct-watch-elem","");
	} else if ($("ytd-watch-grid") != null) {
		$("ytd-watch-grid").setAttribute("ct-watch-elem","");
	}
});
function APIGet() {
	var data = $("ytd-app").data;
	if (glbLang == null) {
		glbLang = $("html").getAttribute("lang");
		//alert(glbLang);
		emeraldLanguageModel = new EmeraldLanguageModel(glbLang);
		//alert(emeraldLanguageModel.Videos);
	}
	console.log(data);
	if ($("html[ct-log-done]") == null) {
		if (data.response.responseContext.mainAppWebResponseContext.loggedOut == false) {
			signedIn = true;
			$("html").setAttribute("ct-log-done","");
			var datasync = data.response.responseContext.mainAppWebResponseContext.datasyncId;
			//visitorData = data.response.responseContext.webResponseContextExtensionData.ytConfigData.visitorData;
			visitorData = window.yt.config_.VISITOR_DATA;
			//console.log(datasync);
			//console.log(datasync.length);
			var authUser = window.yt.config_.SESSION_INDEX;
			if (datasync.length > 30) {
				datasync = datasync.split("||");
				datasync = datasync[0];
				console.log(datasync);
				headers1 = {
					"accept": "application/json, text/plain, /",
					"accept-language": "en-US,en;q=0.9",
					"Authorization": aion,
					"Content-type": "application/json",
					"X-Goog-AuthUser": authUser,
					"X-Goog-Pageid": datasync
				};
			} else {
				headers1 = {
					"accept": "application/json, text/plain, /",
					"accept-language": "en-US,en;q=0.9",
					"Authorization": aion,
					"Content-type": "application/json",
					"X-Goog-AuthUser": authUser
				};
			}
		} else {
			headers1 = {
				"accept": "application/json, text/plain, /",
				"accept-language": "en-US,en;q=0.9",
				"Content-type": "application/json"
			};
		}
	}
	if (
	window.location.href.includes("/feed/browse") &&
	$("html[homepage='shelves']" != null)	
	) {
		emeraldBrowse();
	}
	if (data.page == "watch") {
		var shouldReplaceWatch = getWatchVersion();
		shouldReplaceWatch.then(function(result) {
			if (result != "current") {
				if ($("ytd-watch-flexy") != null) {
					emeraldWatch(data, "flexy");
					emeraldWatchSidebar(data, "flexy");
					$("ytd-watch-flexy").setAttribute("ct-watch-elem","");
				} else if ($("ytd-watch-grid") != null) {
					emeraldWatch(data, "grid");
					emeraldWatchSidebar(data, "grid");
					$("ytd-watch-grid").setAttribute("ct-watch-elem","");
				}
			}
		});
	}
	if (
	data.url == "/" &&
	$("html[homepage='shelves']") != null
	) {
		emeraldBrowse();
	}
}
function emeraldWatch(data, ytWatch) {
	if (data.page == "watch") {
		if ($("ytd-comments.emerald-moved") == null) {
			constructLayout(data, ytWatch);
		} else {
			WPEveryLoad(data, ytWatch);
		}
	}
}
function emeraldWatchSidebar(data, ytWatch) {
	if (data.page == "watch") {
		if (ytWatch == "flexy") {
			if ($("ytd-watch-next-secondary-results-renderer") != null) {
				$("#related.ytd-watch-flexy").innerHTML = `
				<div id="emerald-watch-sidebar">
				</div>
				`
				WPSidebarEveryLoad(data, ytWatch);
			} else {
				WPSidebarEveryLoad(data, ytWatch);
			}
		} else if ($("#secondary-inner.ytd-watch-grid") != null) {
			if ($("ytd-watch-grid ytd-watch-metadata")) {
				//$("ytd-watch-grid ytd-watch-metadata").remove();
			}
			$("#secondary-inner.ytd-watch-grid #related").innerHTML = `
			<div id="emerald-watch-sidebar">
			</div>
			`
			WPSidebarEveryLoad(data, ytWatch);
		} else {
			WPSidebarEveryLoad(data, ytWatch);
		}
	}
}
function constructLayout(data, ytWatch) {
	if (ytWatch == "flexy") {
		var elm = "#below ytd-comments";
		if (elm == null) {
			waitForElement(elm).then(moveComments(0));
		} else {
			moveComments(0);
		}
		elm = "ytd-watch-flexy #above-the-fold";
		if (elm == null) {
			waitForElement(elm).then(obliteratePolymerMeta(ytWatch));
		} else {
			obliteratePolymerMeta(ytWatch);
		}
	} else {
		var elm = "#secondary-inner ytd-comments";
		if (elm == null) {
			waitForElement(elm).then(moveComments(2));
		} else {
			moveComments(2);
		}
		elm = "ytd-watch-grid ytd-watch-metadata span";
		if (elm == null) {
			waitForElement(elm).then(obliteratePolymerMeta(ytWatch));
		} else {
			obliteratePolymerMeta(ytWatch);
		}
	}
	var comments = "ytd-comments.burned-toast";
	//var emeraldWatch = "#emerald-watch-metadata";
	if (comments == null) {
		waitForElement(comments).then(moveComments(1));
	} else {
		moveComments(1);
	}
	elm = "ytd-comments.emerald-moved";
	if (elm == null) {
		waitForElement(elm).then(WPEveryLoad(data, ytWatch));
	} else {
		WPEveryLoad(data, ytWatch);
	}
}
function moveComments(act) {
	if (act == 0) {
		var elem = $('#below ytd-comments');
		var newHome = $('ytd-app');
		newHome.appendChild(elem);		
		elem.classList.add("burned-toast");
	}
	if (act == 1) {
		var elem = $('ytd-comments.burned-toast');
		var newHome = $('#emerald-comments');
		newHome.appendChild(elem);		
		elem.classList.remove("burned-toast");
		elem.classList.add("emerald-moved");
	}
	if (act == 2) {
		var elem = $('#secondary-inner ytd-comments');
		var newHome = $('ytd-app');
		newHome.appendChild(elem);		
		elem.classList.add("burned-toast");
	}
}
function obliteratePolymerMeta(ytWatch) {
	let container = "";
	if (ytWatch == "flexy") {
		if ($("#below.ytd-watch-flexy")) {
			$("#below.ytd-watch-flexy").remove();
		}
		container = $("#primary-inner.ytd-watch-flexy");
	} else {
		if ($("#below.ytd-watch-grid")) {
			$("#below.ytd-watch-grid").remove();
		}
		container = $("ytd-watch-grid #primary #primary-inner.ytd-watch-grid");
		console.log(container);
		console.log("container");
	}
	console.log(container);
	let newElem = document.createElement("div");
	newElem.id = "emerald-watch";
	newElem.innerHTML = `
	<style>
	#primary.ytd-watch-flexy ytd-continuation-item-renderer {
		display: block !important;
	}
	</style>
	<div id="emerald-watch-metadata" class="emerald-destructible">
	</div>
	<div id="emerald-watch-below" comments-expanded>
		<div id="emerald-watch-comments-toggle" class="emerald-watch-below-toggle">
			<div class="emerald-watch-below-toggle-inner flex-bar">
				<div class="emerald-toggle-icon">
				</div>
				<div class="emerald-toggle-text">
					<span>Text Comments</span>
				</div>
			</div>
		</div>
		<div id="emerald-comments">
		</div>
	</div>
	`;
	container.insertBefore(newElem, container.children[1]);
	console.log(newElem);
	$("#emerald-watch-comments-toggle").addEventListener('click', () => {
		if ($("#emerald-watch-below[comments-expanded]") != null) {
			$("#emerald-watch-below").removeAttribute("comments-expanded");
		} else {
			$("#emerald-watch-below").setAttribute("comments-expanded","");
		}
	})
}
async function getRelatedContent(data, purpose) {
	return new Promise((resolve, reject) => {
		if (data.onResponseReceivedEndpoints != null) {
			resolve(data.onResponseReceivedEndpoints[0].appendContinuationItemsAction.continuationItems);
		} else {
			if (data.response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults != null) {
				var secResults = data.response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults;
				if (purpose == "secResults") {
					resolve(secResults);
				}
				if (secResults.results != null) {
					if (secResults.results[0].richGridRenderer != null) {
						resolve(secResults.results[0].richGridRenderer.contents);
					} else {
						if (secResults.results[0].relatedChipCloudRenderer != null) {
							resolve(secResults.results[1].itemSectionRenderer.contents);
						} else {
							resolve(secResults.results);
						}
					}
				}
			}
		}
	});
}
async function getAutoplayVideo(data) {
	return new Promise((resolve, reject) => {
		if (data.response.contents.twoColumnWatchNextResults.autoplay.autoplay.sets[0].autoplayVideo.watchEndpoint.videoId != null) {
			resolve(data.response.contents.twoColumnWatchNextResults.autoplay.autoplay.sets[0].autoplayVideo.watchEndpoint.videoId);
		}
	});
}
function WPSidebarEveryLoad(data) {
	$("#emerald-watch-sidebar").innerHTML = `
		<div id="emerald-watch-sidebar-inner">
			<div id="emerald-watch-sidebar-header">
				<div id="emerald-watch-sidebar-tabs">
					<div class="related-tabs flex">
						<a class="related-tab" id="related-related" active>
							<div class="related-tab-inner">
								<span>Related</span>
							</div>
						</a>
						<a class="related-tab" id="related-channel-videos">
							<div class="related-tab-inner">
								<span>Channel videos</span>
							</div>
						</a>
						<a class="related-tab" id="related-about">
							<div class="related-tab-inner">
								<span>${emeraldLanguageModel.about}</span>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div id="emerald-watch-sidebar-metadata">
				<div id="emerald-watch-sidebar-metadata-inner">
					<div id="emerald-side-meta">
						<div id="emerald-side-meta-owner-row" class="flex">
							<div id="emerald-side-meta-user" class="flex">
								<div id="emerald-side-meta-pfp">
									<a id="js-side-meta-pfp" class="yt-simple-endpoint">
									</a>
								</div>
								<div id="emerald-side-meta-user-details">
									<div id="side-meta-channel-name-container" class="flex">
										<a js-side-meta-channel-name class="side-meta-channel-name yt-simple-endpoint">
										</a>
									</div>
									<div id="side-meta-upload-date" class="flex">
										<span id="js-side-meta-date" class="upload-date"></span>
									</div>
									<div class="watch4-expand" id="watch4-expand">
										<div class="expand-inner">
											<span>(</span>
											<span class="watch4-blue">more info</span>
											<span>)</span>
										</div>
									</div>
									<div class="watch4-expand" id="watch4-collapse">
										<div class="expand-inner">
											<span>(</span>
											<span class="watch4-blue">less info</span>
											<span>)</span>
										</div>
									</div>
								</div>
							</div>
							<div id="emerald-side-meta-subscribe">
								<div id="watch4-subscription-container" class="flex emerald-multistate" state="subscribe" multistate-id="subscribe" js-side-meta-subscribe>
									<a id="watch4-sub-button" js-side-meta-sub-trigger>
										<div class="watch4-sub-state" state-id="subscribe">
											<span>${emeraldLanguageModel.subscribe}</span>
										</div>
										<div class="watch4-sub-state" state-id="subscribed">
											<span>${emeraldLanguageModel.subscribed}</span>
										</div>
										<div class="watch4-sub-state" state-id="unsubscribe">
											<span>${emeraldLanguageModel.unsubscribe}</span>
										</div>
										<div class="watch4-sub-state" state-id="channel-settings">
											<span>Channel settings</span>
										</div>
										<div class="watch4-sub-state" state-id="creator-studio">
											<span>${emeraldLanguageModel.creatorStudio}</span>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div id="emerald-side-meta-description">
							<div class="description-inner" id="js-desc">
							</div>
							<div class="emerald-extras">
								<div class="emerald-side-meta-category emerald-extra">
									<div class="emerald-side-meta-extra-header">${emeraldLanguageModel.category}: </div>
									<div id="js-category"></div>
								</div>
								<div class="emerald-side-meta-tags emerald-extra">
									<div class="emerald-side-meta-extra-header">${emeraldLanguageModel.tags}: </div>
									<div id="js-tags"></div>
								</div>
								<div class="emerald-side-meta-license emerald-extra"">
									<div class="emerald-side-meta-extra-header">${emeraldLanguageModel.license}: </div>
									<div id="js-license">${emeraldLanguageModel.standardLicense}</div>
								</div>
							</div>
						</div>
						<div id="emerald-side-meta-actions-row">
							<div id="emerald-side-meta-actions">
								<div id="emerald-side-meta-url" class="emerald-side-meta-action flex-bar">
									<div class="emerald-side-meta-text">
										<span>URL</span>
									</div>
									<div class="emerald-side-meta-input">
										<input class="emerald-side-meta-link" js-side-meta-url readonly onclick="document.querySelector('[js-side-meta-url]').select();"></input>
									</div>
								</div>
							</div>
							<div id="emerald-side-meta-actions-expander">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="emerald-watch-sidebar-content" class="emerald-multistate" state="all" multistate-id="emerald-watch-sidebar" related-expanded>
				<div id="emerald-watch-sidebar-slider-container">
					<div id="emerald-watch-sidebar-slider-container-inner">
						<div id="emerald-watch-sidebar-related-toggle" class="emerald-watch-sidebar-toggle" js-related-related-toggle>
							<div class="emerald-watch-sidebar-toggle-inner flex-bar">
								<div class="emerald-toggle-icon">
								</div>
								<div class="emerald-toggle-text">
									<span>Related Videos</span>
								</div>
							</div>
						</div>
						<div id="emerald-watch-sidebar-related" class="watch-sidebar-tab" state-id="related">
							<div class="watch-sidebar-tab-inner">
								<div class="related-tab-header">
									<div id="related-header-aozora" class="related-tab-header-title flex-bar">
										<div class="related-tab-header-title-left">
											<span>Suggestions</span>
										</div>
									</div>
									<div class="related-tab-header-title flex-bar" id="related-autoplay">
										<div class="related-tab-header-title-left">
											<span>${emeraldLanguageModel.upNext}</span>
										</div>
										<div class="related-tab-header-title-right flex-bar">
											<div id="autoplay-text">
												<span>${emeraldLanguageModel.autoplay}</span>
											</div>
											<div id="autoplay-button" class="emerald-multistate">
												<div class="toggle-container style-scope paper-toggle-button">
													<div id="toggleBar" class="toggle-bar style-scope paper-toggle-button">
													</div>
													<div id="toggleButton" class="toggle-button style-scope paper-toggle-button">
														<paper-ripple id="ink" recenters="" class="circle toggle-ink style-scope paper-toggle-button" checked="">
															<!--css-build:shady-->
															<div id="background" class="style-scope paper-ripple" style="opacity: 0.0084;">
															</div>
															<div id="waves" class="style-scope paper-ripple">
															</div>
														</paper-ripple>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="related-tab-autoplay-video">
										<div id="js-autoplay">
										</div>
									</div>
								</div>
								<div id="js-related" class="compact-video-list">
								</div>
							</div>
						</div>
						<div id="emerald-watch-sidebar-channel-videos-toggle" class="emerald-watch-sidebar-toggle" js-related-channel-videos-toggle>
							<div class="emerald-watch-sidebar-toggle-inner flex-bar">
								<div class="emerald-toggle-icon">
								</div>
								<div class="emerald-toggle-text">
									<span>More from</span>
									<span js-side-meta-channel-name-2></span>
								</div>
							</div>
						</div>
						<div id="emerald-watch-sidebar-channel-videos" class="watch-sidebar-tab" state-id="channel-videos">
							<div class="watch-sidebar-tab-inner">
								<div id="channel-sort" class="related-tab-header">
								</div>
								<div id="js-channel-videos-tab" class="compact-video-list">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<span class="ct-vertical-rule-main"></span>
			<span class="ct-vertical-rule-corner-top"></span>
			<span class="ct-vertical-rule-corner-bottom"></span>
		</div>
	`;
	// TEMP
	//$("html").setAttribute("use-related-tabs","");
	var showMore = document.querySelector("#watch4-expand");
	var showLess = document.querySelector("#watch4-collapse");
	showMore.addEventListener("click", function() {
		document.querySelector("#emerald-watch-sidebar").setAttribute("description-expanded", "");
	});
	showLess.addEventListener("click", function() {
		document.querySelector("#emerald-watch-sidebar").removeAttribute("description-expanded");
	});
	$("#emerald-watch-sidebar-content").setAttribute("state","related");
	$("#related-related").addEventListener('click', () => {
		if ($(".related-tab[active]")) {
			$(".related-tab[active]").removeAttribute("active");
		}
		$("#related-related").setAttribute("active","");
		$("#emerald-watch-sidebar-content").setAttribute("state","related");
	});
	$("#related-channel-videos").addEventListener('click', () => {
		if ($(".related-tab[active]")) {
			$(".related-tab[active]").removeAttribute("active");
		}
		$("#related-channel-videos").setAttribute("active","");
		$("#emerald-watch-sidebar-content").setAttribute("state","channel-videos");
	});
	$("#related-about").addEventListener('click', () => {
		if ($(".related-tab[active]")) {
			$(".related-tab[active]").removeAttribute("active");
		}
		$("#related-about").setAttribute("active","");
		$("#emerald-watch-sidebar-content").setAttribute("state","about");
	});
	$("#emerald-watch-sidebar-related-toggle").addEventListener('click', () => {
		if ($("#emerald-watch-sidebar-content[related-expanded]") != null) {
			$("#emerald-watch-sidebar-content").removeAttribute("related-expanded");
		} else {
			$("#emerald-watch-sidebar-content").setAttribute("related-expanded","");
		}
	});
	$("#emerald-watch-sidebar-channel-videos-toggle").addEventListener('click', () => {
		if ($("#emerald-watch-sidebar-content[channel-videos-expanded]") != null) {
			$("#emerald-watch-sidebar-content").removeAttribute("channel-videos-expanded");
		} else {
			$("#emerald-watch-sidebar-content").setAttribute("channel-videos-expanded","");
		}
	});
	$("#emerald-watch-sidebar-related-toggle").addEventListener('click', () => {
		$("#emerald-watch-sidebar-related").setAttribute("expanded","");
	});
	if ($("html[use-sidebar-autoplay]") != null) {
		if (glbAutoplayEnabled !== "unset") {
			var autoplayEnabled = glbAutoplayEnabled;
			if (autoplayEnabled == "true") {
				$("#autoplay-button").setAttribute("state","autoplay-on");
			} else {
				$("#autoplay-button").setAttribute("state","autoplay-off");
			}
		}
		if ($("html[watchtype='playlistwatch']") == null) {
			document.addEventListener("yt-page-data-updated", doAutoplayButton);
		}
	}
	var secResults = getRelatedContent(data, "secResults");
	secResults.then(function(result) {
		console.log(result);
		var relatedContent = getRelatedContent(data, "relatedContent");
		relatedContent.then(function(result1) {
			console.log(result1);
			//fillRelatedContent(result1, data);
			doRichGrid(result1,data);
			//genRelated(result1, result);
		});
	});
}
function doAutoplayButton() {
	var elm = "#autoplay-button";
	waitForElement(elm).then(function(elm) {
		if (canGo != false) {
			setTimeout(function() {
				var autoplayElem = $(".ytp-autonav-toggle-button");
				if (glbAutoplayEnabled == "unset") {
					var autoplayEnabled = $("div.ytp-autonav-toggle-button").getAttribute("aria-checked");
				} else {
					var autoplayEnabled = glbAutoplayEnabled;
				}
				if (autoplayEnabled == "true") {
					$("#autoplay-button").setAttribute("state","autoplay-on");
					autoplayEnabled = "true";
					glbAutoplayEnabled = "true";
				} else {
					$("#autoplay-button").setAttribute("state","autoplay-off");
					autoplayEnabled = "false";
					glbAutoplayEnabled = "false";
				}
				$("#autoplay-button").addEventListener("click", function() {
					if (autoplayEnabled == "true") {
						$("#autoplay-button").setAttribute("state","autoplay-off");
						autoplayEnabled = "false";
						glbAutoplayEnabled = "false";
					} else {
						$("#autoplay-button").setAttribute("state","autoplay-on");
						autoplayEnabled = "true";
						glbAutoplayEnabled = "true";
					}
					autoplayElem.click();
				});
			}, 1000);
		}
	});
}
async function fetchVideo(id) {
	return new Promise((resolve, reject) => {
		fetch("https://www.youtube.com/youtubei/v1/next?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
			"headers": headers1,
			"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": JSON.stringify({
				"videoId": id,
				"context": context
			}),
			"method": "POST",
			"mode": "cors",
			"credentials": "include"
		}).then(response => response.json()).then(data => {
			resolve(data);
		});
	});
}
async function fetchPlayer(id) {
	return new Promise((resolve, reject) => {
		fetch("https://www.youtube.com/youtubei/v1/player?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
			"headers": headers1,
			"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": JSON.stringify({
				"videoId": id,
				"context": context
			}),
			"method": "POST",
			"mode": "cors",
			"credentials": "include"
		}).then(response => response.json()).then(data => {
			resolve(data);
		});
	});
}
function createLoadMore(token, PRHTMLItem) {
	let container = document.querySelector('#js-related').parentNode;
	var newElem = document.createElement("div");
	newElem.id = "emerald-load-more-related";
	newElem.innerHTML = `
	<a>
		<span></span>
	</a>
	`;
	container.insertBefore(newElem, container.children[2]);
	if (
	$("html[layout^='stargazer']") != null ||
	$("html[layout^='aozora']") != null ||
	$("html[layout^='cosmicpanda']") != null ||
	$("html[layout^='hitchhiker-2013']") != null ||
	$("html[layout^='hitchhiker-2014']") != null
	) {
		newElem.querySelector("span").textContent = "Load more suggestions";
	} else {
		newElem.querySelector("span").textContent = "Show more";
	}
	if ($("html[layout^='polymer']") != null) {
		let container2 = newElem;
		var newElem2 = document.createElement("paper-ripple");
		container2.insertBefore(newElem2, container2.children[0]);
	}
	newElem.addEventListener("click", function() {
		newElem.remove();
		fetchRelated(token, PRHTMLItem);
	});
}
function fetchRelated(token, PRHTMLItem) {
	fetch("https://www.youtube.com/youtubei/v1/next?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"videoId": glbVideoId,
			"context": context,
			"continuation": token
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
		var cont = getRelatedContent(data, "continuation");
		cont.then(function(result) {
			console.log(result);
			//fillRelatedContent(result, data, PRHTMLItem, "c");
			doRichGrid(result, data, PRHTMLItem, "c");
		});
	});
}
function WPEveryLoad(data) {
	window.scrollTo(0,0);
	$("#emerald-watch-metadata").innerHTML = `
		<div id="emerald-watch-banners" class="emerald-bottom-meta watch7" TEMPLATE>
			<div id="emerald-watch-banners-inner">
				<div id="theater-mode-unsupported" class="emerald-banner-red" js-banner="0">
					<div class="emerald-banner-inner flex">
						<div class="emerald-banner-left">
							<div class="emerald-banner-icon">
							</div>
						</div>
						<div class="emerald-banner-middle">
							<span>Theater mode is not supported on this layout.</span>
						</div>
						<div class="emerald-banner-right">
							<div id="js-banner-close" class="emerald-banner-close">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="emerald-watch-4" class="emerald-bottom-meta">
		</div>
		<div id="emerald-watch-5" class="emerald-bottom-meta">
		</div>
		<div id="emerald-watch-6" class="emerald-bottom-meta">
		</div>
		<div id="emerald-watch-7" class="emerald-bottom-meta">
		</div>
		<div id="emerald-watch-8" class="emerald-bottom-meta">
		</div>
		<div id="emerald-alt-watch-9" class="emerald-bottom-meta">
		</div>
		<div id="emerald-watch-9" class="emerald-bottom-meta">
		</div>
		<div id="emerald-watch-10" class="emerald-bottom-meta">
		</div>
	`;
	if ($("#emerald-watch-above") != null) {
		$("#emerald-watch-above").remove();
	}
	if ($("[js-banner='0']") != null) {
		let banner = $("[js-banner='0']");
		banner.querySelector("#js-banner-close").addEventListener("click", function() {
			banner.remove();
		});
	}
	var watchVersion = getWatchVersion();
	watchVersion.then(function(wV) {
		glbWatchVersion = wV;
		if (wV == "watch4") {
			createWatch4(wV);
			createWatchAbove(wV);
		}
		if (wV == "watch5c") {
			createWatch5(wV);
			createWatchAbove(wV);
		}
		if (wV == "watch5d") {
			createWatch5(wV);
			createWatchAbove(wV);
		}
		if (wV == "watch7") {
			createWatch7();
		}
		if (wV == "watch8") {
			createWatch8();
		}
		if (wV == "alt-watch9") {
			createAltWatch9();
		}
		if (wV == "watch9a") {
			createWatch9(wV);
		}
		if (wV == "watch9b") {
			createWatch9(wV);
		}
		populateWatch(data);
	});
}
function createWatchAbove(wV) {
	let container = "";
	if ($("ytd-watch-flexy")) {
		container = $("ytd-watch-flexy");
	} else {
		container = $("ytd-watch-grid");
	}
	var newElem = document.createElement("div");
	newElem.id = "emerald-watch-above";
	newElem.setAttribute("class","bt-universalized-element");
	newElem.setAttribute("bt-optimized-universal-element","");
	if (wV == "watch4") {
		newElem.innerHTML = `
		<div class="section watch-above">
			<div class="section-inner">
				<div id="watch-above-title">
					<span id="js-watch-above-title"></span>
				</div>
			</div>	
		</div>
		`;
		container.insertBefore(newElem,container.children[0]);
	} else {
		newElem.innerHTML = `
		<div class="section watch-above">
			<div class="section-inner">
				<div id="watch-above-title">
					<span id="js-watch-above-title"></span>
				</div>
				<div id="watch-above-owner-row" class="flex">
					<div id="watch-above-owner">
					</div>
				</div>
				<div id="watch-above-videos-dropdown">
					<div id="videos-dd" current-slide="0" max-slides="0">
						<div id="videos-dd-inner">
							<div id="videos-dd-left" class="videos-dd-arrow emerald-hh-button" disabled>
								<a>
									<span></span>
								</a>
							</div>
							<div id="videos-dd-right" class="videos-dd-arrow emerald-hh-button" disabled>
								<a>
									<span></span>
								</a>
							</div>
							<div id="videos-dd-header">
								<a id="videos-dd-videos-link" class="yt-simple-endpoint">
									<span>See all </span>
									<span id="js-watch-above-video-count-2"></span>
									<span> »</span>
								</a>
								<div id="videos-dd-pagination">
									<div id="videos-dd-0" class="emerald-hh-button videos-dd-pagination-button" active>
										<a>
											<span>1</span>
										</a>
									</div>
									<div id="videos-dd-1" class="emerald-hh-button videos-dd-pagination-button">
										<a>
											<span>2</span>
										</a>
									</div>
									<div id="videos-dd-2" class="emerald-hh-button videos-dd-pagination-button">
										<a>
											<span>3</span>
										</a>
									</div>
									<div id="videos-dd-3" class="emerald-hh-button videos-dd-pagination-button">
										<a>
											<span>4</span>
										</a>
									</div>
									<div id="videos-dd-4" class="emerald-hh-button videos-dd-pagination-button">
										<a>
											<span>5</span>
										</a>
									</div>
								</div>
							</div>
							<div id="videos-dd-slider">
								<div id="videos-dd-slider-inner">
									<div id="js-videos-dd" class="super-compact-row">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="videos-link">
					</div>
				</div>
			</div>
		</div>
		`;
		container.insertBefore(newElem,container.children[0]);
		if (wV == "watch5d") {
			newElem.querySelector(".section").classList.add("watch5d");
			newElem.querySelector("#watch-above-owner").innerHTML = `
			<div id="watch-above-pfp">
				<a id="js-watch-above-pfp" class="yt-simple-endpoint">
				</a>
			</div>
			<div id="watch-above-user">
				<div id="watch-above-channel-name-container" class="flex">
					<a id="js-watch-above-channel-name" class="watch-above-channel-name yt-simple-endpoint">
					</a>
				</div>
				<div js-watch-above-subscribe class="watch-above-subscription-container flex emerald-multistate" state="subscribe" multistate-id="subscribe">
					<div id="watch-above-sub-button" js-sub-trigger>
						<div class="watch-above-sub-icon">
						</div>
						<div class="watch-above-sub-state" state-id="subscribe">
							<span> ${emeraldLanguageModel.subscribe} </span>
						</div>
						<div class="watch-above-sub-state" state-id="subscribed">
							<span> ${emeraldLanguageModel.subscribed} </span>
						</div>
						<div class="watch-above-sub-state" state-id="unsubscribe">
							<span> ${emeraldLanguageModel.unsubscribe} </span>
						</div>
						<div class="watch-above-sub-state" state-id="channel-settings">
							<span> Channel settings </span>
						</div>
						<div class="watch-above-sub-state" state-id="creator-studio">
							<span> ${emeraldLanguageModel.creatorStudio} </span>
						</div>
					</div>
					<div id="watch-above-notif-button" state-id="subscribed" js-watch-above-notif-trigger>
						<div class="watch-above-notif-icon">
						</div>
					</div>
					<div id="watch-above-sub-count">
						<span id="js-watch-above-sub-count"></span>
					</div>
				</div>
			</div>
			<div id="videos-dd-button-area">
				<div id="videos-dd-button" class="emerald-hh-button" disabled>
					<a>
						<span id="js-watch-above-video-count"></span>
						<span class="ct-uix-button-arrow"></span>
					</a>
				</div>
				<div id="videos-link">
				</div>
			</div>
			`;
		}
		if (wV == "watch5c") {
			newElem.querySelector(".section").classList.add("watch5c");
			newElem.querySelector("#watch-above-owner").innerHTML = `
			<div id="watch-above-pfp">
				<a id="js-watch-above-pfp" class="yt-simple-endpoint">
				</a>
			</div>
			<div id="watch-above-user">
				<div id="watch-above-channel-name-container" class="flex">
					<a id="js-watch-above-channel-name" class="watch-above-channel-name yt-simple-endpoint">
					</a>
				</div>
			</div>
			<div id="videos-dd-button-area">
				<div id="videos-dd-button" class="emerald-hh-button" disabled>
					<a>
						<span id="js-watch-above-video-count"></span>
						<span class="ct-uix-button-arrow"></span>
					</a>
				</div>
				<div id="videos-link">
				</div>
			</div>
			<div id="watch-above-subscription-container" class="flex emerald-multistate" state="subscribe" js-watch-above-subscribe multistate-id="subscribe">
				<div id="watch-above-sub-button" js-sub-trigger>
					<div class="watch-above-sub-icon">
					</div>
					<div class="watch-above-sub-state" state-id="subscribe">
						<span> ${emeraldLanguageModel.subscribe} </span>
					</div>
					<div class="watch-above-sub-state" state-id="subscribed">
						<span> ${emeraldLanguageModel.subscribed} </span>
					</div>
					<div class="watch-above-sub-state" state-id="unsubscribe">
						<span> ${emeraldLanguageModel.unsubscribe} </span>
					</div>
					<div class="watch-above-sub-state" state-id="channel-settings">
						<span> Channel settings </span>
					</div>
					<div class="watch-above-sub-state" state-id="creator-studio">
						<span> ${emeraldLanguageModel.creatorStudio} </span>
					</div>
				</div>
				<div id="watch-above-notif-button" state-id="subscribed" js-watch-above-notif-trigger>
					<div class="watch-above-notif-icon">
					</div>
				</div>
				<div id="watch-above-sub-count">
					<span id="js-watch-above-sub-count"></span>
				</div>
			</div>
			`;
		}
		$("#videos-dd-button").addEventListener('click', () => {
			$("html").toggleAttribute("videos-dropdown-visible");
			$("#videos-dd-button").toggleAttribute("active");
		});
	}
	if ($("html[static]") == null) {
		if ($("ytd-watch-flexy")) {
			var primWidth = $("#primary.ytd-watch-flexy").offsetWidth;
			var secWidth = $("#secondary.ytd-watch-flexy").offsetWidth;
		} else {
			var primWidth = $("#primary.ytd-watch-grid").offsetWidth;
			var secWidth = $("#secondary.ytd-watch-grid").offsetWidth;
		}
		var colsWidth = primWidth + secWidth;
		var trueWidth = colsWidth - 25;
		$("#emerald-watch-above").style.width = trueWidth + "px";
		window.addEventListener("resize", function() {
			if ($("ytd-watch-flexy")) {
				var primWidth = $("#primary.ytd-watch-flexy").offsetWidth;
				var secWidth = $("#secondary.ytd-watch-flexy").offsetWidth;
			} else {
				var primWidth = $("#primary.ytd-watch-grid").offsetWidth;
				var secWidth = $("#secondary.ytd-watch-grid").offsetWidth;
			}
			var colsWidth = primWidth + secWidth;
			var trueWidth = colsWidth - 25;
			$("#emerald-watch-above").style.width = trueWidth + "px";
		});
	}
}
function createWatch4(wV) {
	$("#emerald-watch-4").innerHTML = `
		<div id="watch5-floaters">
			<div id="js-playlist-privacy-dropdown-menu" class="watch5-dropdown emerald-dropdown">
				<div class="emerald-dropdown-inner">
					<div id="js-playlist-set-public" class="emerald-dropdown-item">
						<span>${emeraldLanguageModel.publicPlaylist}</span>
					</div>
					<div id="js-playlist-set-unlisted" class="emerald-dropdown-item">
						<span>${emeraldLanguageModel.unlistedPlaylist}</span>
					</div>
					<div id="js-playlist-set-private" class="emerald-dropdown-item">
						<span>${emeraldLanguageModel.privatePlaylist}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="emerald-holder" js-owner-controls-holder>
		</div>
		<div class="section watch4">
			<div class="section-inner">
				<div id="watch4-ratings-info-row" class="flex">
					<div id="watch4-ratings" class="flex" remove-rating-invisible="true">
						<div id="watch4-ratings-inner" class="flex">
							<div id="watch4-star-1" class="watch4-star" js-star-1-button js-dislike-button title="Rate 1 star (dislike)">
								<a>
									<span></span>
								</a>
							</div>
							<div id="watch4-star-2" class="watch4-star" js-star-2-button title="Rate 2 stars (dislike)">
								<a>
									<span></span>
								</a>
							</div>
							<div id="watch4-star-3" class="watch4-star" js-star-3-button title="Rate 3 stars (like)">
								<a>
									<span></span>
								</a>
							</div>
							<div id="watch4-star-4" class="watch4-star" js-star-4-button title="Rate 4 stars (like)">
								<a>
									<span></span>
								</a>
							</div>
							<div id="watch4-star-5" class="watch4-star" js-star-5-button js-like-button title="Rate 5 stars (like)">
								<a>
									<span></span>
								</a>
							</div>
						</div>
						<div id="watch4-rating-text">
							<div id="watch4-signed-in-rating-text">
								<span id="watch4-your-rating-text">Your rating: </span>
								<span id="watch4-rating-value">unrated</span>
							</div>
							<div id="watch4-signed-out-rating-text" hidden>
							</div>
						</div>
					</div>
					<div id="watch4-views-info">
						<div id="watch4-view-count">
							<span id="js-view-count">???,???</span>
							<span id="views-text">${emeraldLanguageModel.views}</span>
						</div>
					</div>
				</div>
				<div id="watch4-actions-row" class="flex">
					<div id="watch4-actions">
						<div id="watch4-actions-inner" class="flex">
							<div id="watch4-like-button" class="watch4-action" title="[This button currently has no function]">
								<a>
									<span>Favorite</span>
								</a>
							</div>
							<div id="watch4-share-button" class="watch4-action active">
								<a js-share-trigger>
									<span>${emeraldLanguageModel.shareBtn}</span>
								</a>
							</div>
							<div id="watch4-addto-button" class="watch4-action">
								<a js-addto-trigger>
									<span>Playlists</span>
								</a>
							</div>
							<div id="watch4-report-button" class="watch4-action">
								<a js-report-trigger>
									<span>Report</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div id="watch4-action-panels" class="emerald-multistate" state="share">
					<div id="watch4-action-panels-inner">
						<div id="watch4-share-panel" class="watch4-action-panel" state-id="share">
							<div class="watch4-action-panel-inner">
								<div class="watch4-header-text">
									<span>Share this video</span>
								</div>
								<div class="watch4-loading-text">
									<span>Sharing features are currently limited in CustomTube. Click "Reload page with CustomTube disabled" to see all available share options.</span>
								</div>
								<div id="watch7-share-options" class="flex" js-share-options>
								</div>
								<div id="watch7-share-actions" class="flex">
									<div id="js-share-copy-button" class="emerald-hh-button">
										<a>
											<span>Copy video link</span>
										</a>
									</div>
									<div id="js-link-copied" hidden>
										<span>Link copied to clipboard.</span>
									</div>
									<div id="share-redir-button" class="emerald-hh-button emerald-hh-button-cta">
										<a onclick="var url = window.location.href; var newUrl = url + '?disable_ct'; window.location = newUrl;">
											<span>Reload page with CustomTube disabled</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div id="watch4-addto-panel" class="watch4-action-panel loading" state-id="addto">
							<div class="watch4-action-panel-inner">
								<div class="watch5-banner-area">
									<div id="js-playlist-banner-area">
									</div>
								</div>
								<div class="watch5-header-text">
									<span>${emeraldLanguageModel.addToPlaylist}</span>
								</div>
								<div id="watch7-playlist-list">
									<div class="watch7-playlist-list-inner" id="js-playlists">
									</div>
								</div>
								<div id="watch7-playlist-create-bar">
									<div class="watch7-playlist-create-bar-inner flex">
										<div id="watch7-playlist-input">
											<input id="js-playlist-name-input" placeholder="${emeraldLanguageModel.enterPlaylistTitle}"></input>
										</div>
										<div id="watch7-playlist-buttons" class="flex">
											<div id="watch7-playlist-privacy-dropdown" class="emerald-hh-button emerald-multistate emerald-dropdown-button" state="PRIVATE" multistate-id="playlist-privacy">
												<a id="js-playlist-privacy-dropdown">
													<span state-id="PUBLIC">${emeraldLanguageModel.publicPlaylist}</span>
													<span state-id="UNLISTED">${emeraldLanguageModel.unlistedPlaylist}</span>
													<span state-id="PRIVATE">${emeraldLanguageModel.privatePlaylist}</span>
													<span class="ct-uix-button-arrow"></span>
												</a>
											</div>
											<div id="watch7-playlist-create-button" class="emerald-hh-button emerald-hh-button-cta">
												<a id="js-playlist-create">
													<span>Create</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="watch7-loading">
								<div class="watch7-loading-inner flex">
									<div class="watch7-spinner">
									</div>
									<div class="watch7-loading-text">
										Loading...
									</div>
								</div>
							</div>
							<!--div class="watch7-signin">
								<div class="watch7-loading-inner flex">
									<div class="watch7-loading-text">
										Sign in or sign up now!
									</div>
								</div>
							</div-->
						</div>
						<div id="watch4-report-panel" class="watch4-action-panel" state-id="report">
							<div class="watch4-action-panel-inner">
								<div class="watch4-header-text">
									<span>Report video</span>
								</div>
								<div class="watch4-loading-text">
									<span>Sorry, but this feature is not implemented in CustomTube. If you want to report this video, you need to do it within the regular YouTube watch layout.</span>
								</div>
								<div id="report-redir-button" class="emerald-hh-button emerald-hh-button-cta">
									<a onclick="var url = window.location.href; var newUrl = url + '?disable_ct'; window.location = newUrl;">
										<span>Reload page with CustomTube disabled</span>
									</a>
								</div>
							</div>
						</div>
						<div id="watch4-action-panel-close" js-action-panel-close>
							<span>close</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
	if (wV == "watch5d") {
		$("#emerald-watch-5 .section").classList.add("watch5d");
	}
	if (wV == "watch5c") {
		$("#emerald-watch-5 .section").classList.add("watch5c");
	}
	var share = document.querySelector("[js-share-trigger]");
	var addTo = document.querySelector("[js-addto-trigger]");
	var report = document.querySelector("[js-report-trigger]");
	var closePanel = document.querySelector("[js-action-panel-close]");
	var stars = $("#watch4-ratings-inner");
	var ratedElem = $("#watch4-ratings");
	var ratingValue = $("#watch4-rating-value");
	var star1 = $("[js-star-1-button]");
	var star2 = $("[js-star-2-button]");
	var star3 = $("[js-star-3-button]");
	var star4 = $("[js-star-4-button]");
	var star5 = $("[js-star-5-button]");
	var shareCopy = document.querySelector("#js-share-copy-button");
	shareCopy.addEventListener("click", function() {
		navigator.clipboard.writeText("https://www.youtube.com/watch?v=" + glbVideoId);
		$("#js-link-copied").removeAttribute("hidden");
	});
	share.addEventListener("click", function() {
		$("#watch4-action-panels").setAttribute("state", "share");
		document.querySelector(".watch4-action.active").classList.remove("active");
		document.querySelector("#watch4-share-button").classList.add("active");
	});
	addTo.addEventListener("click", function() {
		$("#watch4-action-panels").setAttribute("state", "addto");
		document.querySelector(".watch4-action.active").classList.remove("active");
		document.querySelector("#watch4-addto-button").classList.add("active");
	});
	report.addEventListener("click", function() {
		$("#watch4-action-panels").setAttribute("state", "report");
		document.querySelector(".watch4-action.active").classList.remove("active");
		document.querySelector("#watch4-report-button").classList.add("active");
	});
	closePanel.addEventListener("click", function() {
		$("#watch4-action-panels").setAttribute("state", "share");
		document.querySelector(".watch4-action.active").classList.remove("active");
		document.querySelector("#watch4-share-button").classList.add("active");
	});
	stars.addEventListener("mouseleave", function() {
		$("#watch4-ratings").removeAttribute("temp-stars");
		if ($("#watch4-ratings[rated]")) {
			var theRating = ratedElem.getAttribute("user-rating");
			ratingValue.textContent = theRating;
		} else {
			ratingValue.textContent = "unrated";
		}
		ratedElem.setAttribute("remove-rating-invisible","true");
	});
	star1.addEventListener("mouseenter", function() {
		$("#watch4-ratings").setAttribute("temp-stars","1.0");
		if ($("#watch4-ratings[rated]") == null) {
			ratingValue.textContent = "1";
		} else {
			ratingValue.textContent = "Remove rating";
			ratedElem.setAttribute("remove-rating-invisible","false");
		}
	});
	star2.addEventListener("mouseenter", function() {
		$("#watch4-ratings").setAttribute("temp-stars","2.0");
		if ($("#watch4-ratings[rated]") == null) {
			ratingValue.textContent = "2";
		} else {
			ratingValue.textContent = "Remove rating";
			ratedElem.setAttribute("remove-rating-invisible","false");
		}
	});
	star3.addEventListener("mouseenter", function() {
		$("#watch4-ratings").setAttribute("temp-stars","3.0");
		if ($("#watch4-ratings[rated]") == null) {
			ratingValue.textContent = "3";
		} else {
			ratingValue.textContent = "Remove rating";
			ratedElem.setAttribute("remove-rating-invisible","false");
		}
	});
	star4.addEventListener("mouseenter", function() {
		$("#watch4-ratings").setAttribute("temp-stars","4.0");
		if ($("#watch4-ratings[rated]") == null) {
			ratingValue.textContent = "4";
		} else {
			ratingValue.textContent = "Remove rating";
			ratedElem.setAttribute("remove-rating-invisible","false");
		}
	});
	star5.addEventListener("mouseenter", function() {
		$("#watch4-ratings").setAttribute("temp-stars","5.0");
		if ($("#watch4-ratings[rated]") == null) {
			ratingValue.textContent = "5";
		} else {
			ratingValue.textContent = "Remove rating";
			ratedElem.setAttribute("remove-rating-invisible","false");
		}
	});
	star1.addEventListener("click", function() {
		if ($("#watch4-ratings[rated]") == null) {
			ratedElem.setAttribute("user-rating","1");
			ratingValue.textContent = "1";
			ratedElem.setAttribute("rated","");
		} else {
			ratedElem.setAttribute("user-rating","");
			ratingValue.textContent = "unrated";
			ratedElem.removeAttribute("rated");
		}
	});
	star2.addEventListener("click", function() {
		$("[js-dislike-button]").click();
		setTimeout(function() {
			if ($("#watch4-ratings[rated]") != null) {
				ratedElem.setAttribute("user-rating","2");
				ratingValue.textContent = "2";
			}
		}, 10);
	});
	star3.addEventListener("click", function() {
		$("[js-like-button]").click();
		setTimeout(function() {
			if ($("#watch4-ratings[rated]") != null) {
				ratedElem.setAttribute("user-rating","3");
				ratingValue.textContent = "3";
			}
		}, 10);
	});
	star4.addEventListener("click", function() {
		$("[js-like-button]").click();
		setTimeout(function() {
			if ($("#watch4-ratings[rated]") != null) {
				ratedElem.setAttribute("user-rating","4");
				ratingValue.textContent = "4";
			}
		}, 10);
	});
	star5.addEventListener("click", function() {
		if ($("#watch4-ratings[rated]") == null) {
			ratedElem.setAttribute("user-rating","5");
			ratingValue.textContent = "5";
			ratedElem.setAttribute("rated","");
		} else {
			ratedElem.setAttribute("user-rating","");
			ratingValue.textContent = "unrated";
			ratedElem.removeAttribute("rated");
		}
	});
	setTimeout(function() {
		share.click();
	}, 500);
}
function createWatch5(wV) {
	$("#emerald-watch-5").innerHTML = `
		<div id="watch5-floaters">
			<div id="js-playlist-privacy-dropdown-menu" class="watch5-dropdown emerald-dropdown">
				<div class="emerald-dropdown-inner">
					<div id="js-playlist-set-public" class="emerald-dropdown-item">
						<span>${emeraldLanguageModel.publicPlaylist}</span>
					</div>
					<div id="js-playlist-set-unlisted" class="emerald-dropdown-item">
						<span>Unlisted</span>
					</div>
					<div id="js-playlist-set-private" class="emerald-dropdown-item">
						<span>Private</span>
					</div>
				</div>
			</div>
		</div>
		<div class="emerald-holder" js-owner-controls-holder>
		</div>
		<div class="section watch5">
			<div class="section-inner">
				<div id="watch5-actions-info-row" class="flex">
					<div id="watch5-actions" class="flex">
						<div id="watch5-ltod">
							<div id="watch5-ltod-inner" class="flex">
								<div id="js-like" class="watch5-like watch5-ltod-button emerald-hh-button" js-like-button>
									<a>
										<div class="watch5-ltod-icon">
											<span></span>
										</div>
										<div class="watch5-ltod-text">
											<span>${emeraldLanguageModel.like}</span>
										</div>
									</a>
								</div>
								<div id="js-dislike" class="watch5-dislike watch5-ltod-button emerald-hh-button" js-dislike-button>
									<a>
										<div class="watch5-ltod-icon">
											<span></span>
										</div>
										<div class="watch5-ltod-text">
											<span></span>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div id="watch5-actions">
							<div id="watch5-actions-inner" class="flex">
								<div id="watch5-addto-button" class="watch5-action emerald-hh-button">
									<a js-addto-trigger>
										<span>${emeraldLanguageModel.addToBtn}</span>
									</a>
								</div>
								<div id="watch5-share-button" class="watch5-action emerald-hh-button">
									<a js-share-trigger>
										<span>${emeraldLanguageModel.shareBtn}</span>
									</a>
								</div>
								<div id="watch5-report-button" class="watch5-action emerald-hh-button">
									<a js-report-trigger>
										<span></span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div id="watch5-views-info">
						<div id="watch5-view-count">
							<span id="js-view-count">???,???</span>
						</div>
					</div>
				</div>
				<div id="watch5-action-panels" class="emerald-multistate" state="none">
					<div watch5-action-panels-inner">
						<div id="watch5-share-panel" class="watch5-action-panel" state-id="share">
							<div class="watch5-action-panel-inner">
								<div class="watch5-header-text">
									<span>Share this video</span>
								</div>
								<div class="watch5-loading-text">
									<span>Sharing features are currently limited in CustomTube. Click "Reload page with CustomTube disabled" to see all available share options.</span>
								</div>
								<div id="watch7-share-options" class="flex" js-share-options>
								</div>
								<div id="watch7-share-actions" class="flex">
									<div id="js-share-copy-button" class="emerald-hh-button">
										<a>
											<span>Copy video link</span>
										</a>
									</div>
									<div id="js-link-copied" hidden>
										<span>Link copied to clipboard.</span>
									</div>
									<div id="share-redir-button" class="emerald-hh-button emerald-hh-button-cta">
										<a onclick="var url = window.location.href; var newUrl = url + '?disable_ct'; window.location = newUrl;">
											<span>Reload page with CustomTube disabled</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div id="watch5-addto-panel" class="watch5-action-panel loading" state-id="addto">
							<div class="watch5-action-panel-inner">
								<div class="watch5-banner-area">
									<div id="js-playlist-banner-area">
									</div>
								</div>
								<div class="watch5-header-text">
									<span>${emeraldLanguageModel.addToPlaylist}</span>
								</div>
								<div id="watch7-playlist-list">
									<div class="watch7-playlist-list-inner" id="js-playlists">
									</div>
								</div>
								<div id="watch7-playlist-create-bar">
									<div class="watch7-playlist-create-bar-inner flex">
										<div id="watch7-playlist-input">
											<input id="js-playlist-name-input" placeholder="${emeraldLanguageModel.enterPlaylistTitle}"></input>
										</div>
										<div id="watch7-playlist-buttons" class="flex">
											<div id="watch7-playlist-privacy-dropdown" class="emerald-hh-button emerald-multistate emerald-dropdown-button" state="PRIVATE" multistate-id="playlist-privacy">
												<a id="js-playlist-privacy-dropdown">
													<span state-id="PUBLIC">${emeraldLanguageModel.publicPlaylist}</span>
													<span state-id="UNLISTED">${emeraldLanguageModel.unlistedPlaylist}</span>
													<span state-id="PRIVATE">${emeraldLanguageModel.privatePlaylist}</span>
													<span class="ct-uix-button-arrow"></span>
												</a>
											</div>
											<div id="watch7-playlist-create-button" class="emerald-hh-button emerald-hh-button-cta">
												<a id="js-playlist-create">
													<span>Create</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!--div id="js-playlist-privacy-dropdown-menu" class="watch7-dropdown emerald-dropdown">
								<div class="emerald-dropdown-inner">
									<div id="js-playlist-set-public" class="emerald-dropdown-item">
										<span>${emeraldLanguageModel.publicPlaylist}</span>
									</div>
									<div id="js-playlist-set-unlisted" class="emerald-dropdown-item">
										<span>Unlisted</span>
									</div>
									<div id="js-playlist-set-private" class="emerald-dropdown-item">
										<span>Private</span>
									</div>
								</div>
							</div-->
							<div class="watch7-loading">
								<div class="watch7-loading-inner flex">
									<div class="watch7-spinner">
									</div>
									<div class="watch7-loading-text">
										Loading...
									</div>
								</div>
							</div>
							<!--div class="watch7-signin">
								<div class="watch7-loading-inner flex">
									<div class="watch7-loading-text">
										Sign in or sign up now!
									</div>
								</div>
							</div-->
						</div>
						<div id="watch5-report-panel" class="watch5-action-panel" state-id="report">
							<div class="watch5-action-panel-inner">
								<div class="watch5-header-text">
									<span>Report video</span>
								</div>
								<div class="watch5-loading-text">
									<span>Sorry, but this feature is not implemented in CustomTube. If you want to report this video, you need to do it within the regular YouTube watch layout.</span>
								</div>
								<div id="report-redir-button" class="emerald-hh-button emerald-hh-button-cta">
									<a onclick="var url = window.location.href; var newUrl = url + '?disable_ct'; window.location = newUrl;">
										<span>Reload page with CustomTube disabled</span>
									</a>
								</div>
							</div>
						</div>
						<div id="watch5-action-panel-close" js-action-panel-close>
						</div>
					</div>
				</div>
				<div id="watch5-video-info">
					<div id="watch5-video-info-header" class="flex">
						<div class="watch5-upload-date watch5-header-text">
							<span id="first-part">
								<span id="js-date-extra">
									<span>${emeraldLanguageModel.uploadedBy}</span>
									<a id="js-channel-name" class="yt-simple-endpoint emerald-author-link"></a>
									<span>${emeraldLanguageModel.onDate}</span>
								</span>
							</span>
							<span id="second-part">
								<span id="js-date" class="upload-date"></span>
							</span>
							<span id="third-part">
								<span id="js-date-extra-2">
									<span>by </span>
									<a id="js-channel-name-2" class="author-link yt-simple-endpoint"></a>
								</span>
							</span>
						</div>
						<div id="watch5-ltod-info">
							<div id="js-ltod-bar" class="watch5-ltod-bar">
								<div id="js-likes">
								</div>
								<div id="js-dislikes">
								</div>
							</div>
							<div id="watch5-ltod-counts" class="flex">
								<div id="watch5-like-count">
									<span class="watch5-ltod-count" id="js-like-count">
									</span>
									<span>${emeraldLanguageModel.likes}</span>
								</div>
								<div id="watch5-dislike-count">
									<span class="watch5-ltod-count" id="js-dislike-count">
									</span>
									<span>${emeraldLanguageModel.dislikes}</span>
								</div>
							</div>
						</div>
					</div>
					<div id="watch5-description">
						<div class="description-inner" id="js-desc">
						</div>
						<div id="watch5-extras" class="emerald-extras">
							<div class="watch5-category emerald-extra">
								<div class="watch5-extra-header">${emeraldLanguageModel.category}:</div>
								<div id="js-category"></div>
							</div>
							<div class="watch5-tags emerald-extra">
								<div class="watch5-extra-header">${emeraldLanguageModel.tags}:</div>
								<div id="js-tags"></div>
							</div>
							<div class="watch5-license emerald-extra">
								<div class="watch5-extra-header">${emeraldLanguageModel.license}:</div>
								<div id="js-license">${emeraldLanguageModel.standardLicense}</div>
							</div>
						</div>
					</div>
					<div class="ct-horizontal-rule ">
						<span class="first">
						</span>
						<span class="second">
						</span>
						<span class="third">
						</span>
						</div>
					<div class="watch5-expand" id="watch5-expand">
						<div class="expand-inner">
							<span>${emeraldLanguageModel.showMore}</span>
						</div>
					</div>
					<div class="watch5-expand" id="watch5-collapse">
						<div class="expand-inner">
							<span>${emeraldLanguageModel.showLess}</span>
						</div>
					</div>
					<div class="watch5-extra" id="js-extra">
					</div>
				</div>
			</div>
		</div>
	`;
	if (wV == "watch5d") {
		$("#emerald-watch-5 .section").classList.add("watch5d");
	}
	if (wV == "watch5c") {
		$("#emerald-watch-5 .section").classList.add("watch5c");
	}
	var share = document.querySelector("[js-share-trigger]");
	var addTo = document.querySelector("[js-addto-trigger]");
	var report = document.querySelector("[js-report-trigger]");
	var closePanel = document.querySelector("[js-action-panel-close]");
	var showMore = document.querySelector("#watch5-expand");
	var showLess = document.querySelector("#watch5-collapse");
	var shareCopy = document.querySelector("#js-share-copy-button");
	shareCopy.addEventListener("click", function() {
		navigator.clipboard.writeText("https://www.youtube.com/watch?v=" + glbVideoId);
		$("#js-link-copied").removeAttribute("hidden");
	});
	showMore.addEventListener("click", function() {
		document.querySelector("#watch5-video-info").setAttribute("expanded", "");
	});
	showLess.addEventListener("click", function() {
		document.querySelector("#watch5-video-info").removeAttribute("expanded");
	});
	share.addEventListener("click", function() {
		if ($("#watch5-action-panels[state='share']") != null) {
			$("#watch5-action-panels").setAttribute("state", "none");
		} else {
			$("#watch5-action-panels").setAttribute("state", "share");
		}
	});
	addTo.addEventListener("click", function() {
		if ($("#watch5-action-panels[state='addto']") != null) {
			$("#watch5-action-panels").setAttribute("state", "none");
		} else {
			$("#watch5-action-panels").setAttribute("state", "addto");
		}
	});
	report.addEventListener("click", function() {
		if ($("#watch5-action-panels[state='report']") != null) {
			$("#watch5-action-panels").setAttribute("state", "none");
		} else {
			$("#watch5-action-panels").setAttribute("state", "report");
		}
	});
	closePanel.addEventListener("click", function() {
		$("#watch5-action-panels").setAttribute("state", "none");
	});
}
function createWatch7() {
	$("#emerald-watch-7").innerHTML = `
		<div id="watch7-floaters">
			<div id="js-playlist-privacy-dropdown-menu" class="watch7-dropdown emerald-dropdown">
				<div class="emerald-dropdown-inner">
					<div id="js-playlist-set-public" class="emerald-dropdown-item">
						<span>${emeraldLanguageModel.publicPlaylist}</span>
					</div>
					<div id="js-playlist-set-unlisted" class="emerald-dropdown-item">
						<span>Unlisted</span>
					</div>
					<div id="js-playlist-set-private" class="emerald-dropdown-item">
						<span>Private</span>
					</div>
				</div>
			</div>
		</div>
		<div id="watch7-popups">
			<div id="watch7-popups-inner">
				<div id="watch7-popup-background">
				</div>
				<div id="js-notif-popup" class="watch7-popup">
				</div>
			</div>
		</div>
		<div class="emerald-holder" js-owner-controls-holder>
		</div>
		<div class="section watch7">
			<div class="section-inner">
				<div id="watch7-title">
					<span id="js-title"></span>
				</div>
				<div id="watch7-owner-row" class="flex">
					<div id="watch7-owner">
						<div id="watch7-pfp">
							<a id="js-pfp" class="yt-simple-endpoint">
							</a>
						</div>
						<div id="watch7-user">
							<div id="watch7-channel-name-container" class="flex">
								<a id="js-channel-name" class="watch7-channel-name yt-simple-endpoint">
								</a>
								<span class="yt-user-separator" style="">·</span>
								<a id="js-video-count" class="watch7-video-count yt-simple-endpoint">
								</a>
							</div>
							<div id="watch7-subscription-container" class="flex emerald-multistate" state="subscribe" multistate-id="subscribe" js-subscribe>
								<a id="watch7-sub-button" js-sub-trigger>
									<div class="watch7-sub-icon">
									</div>
									<div class="watch7-sub-state" state-id="subscribe">
										<span>${emeraldLanguageModel.subscribe}</span>
									</div>
									<div class="watch7-sub-state" state-id="subscribed">
										<span>${emeraldLanguageModel.subscribed}</span>
									</div>
									<div class="watch7-sub-state" state-id="unsubscribe">
										<span>${emeraldLanguageModel.unsubscribe}</span>
									</div>
									<div class="watch7-sub-state" state-id="channel-settings">
										<span>Channel settings</span>
									</div>
									<div class="watch7-sub-state" state-id="creator-studio">
										<span>${emeraldLanguageModel.creatorStudio}</span>
									</div>
								</a>
								<div id="watch7-notif-button" state-id="subscribed" js-notif-trigger>
									<div class="watch7-notif-icon">
									</div>
								</div>
								<div id="watch7-sub-count">
									<span id="js-sub-count"></span>
								</div>
							</div>
						</div>
					</div>
					<div id="watch7-views-info">
						<div id="watch7-view-count">
							<span id="js-view-count">???,???</span>
						</div>
						<div id="js-ltod-bar" class="watch7-ltod-bar">
							<div id="js-likes">
							</div>
							<div id="js-dislikes">
							</div>
						</div>
						<div id="watch7-ltod-counts" class="flex">
							<div id="watch7-like-count">
								<span class="watch7-little-like-icon" class="watch7-little-ltod-icon">
								</span>
								<span class="watch7-ltod-count" id="js-like-count">
								</span>
							</div>
							<div id="watch7-dislike-count">
								<span class="watch7-little-dislike-icon" class="watch7-little-ltod-icon">
								</span>
								<span class="watch7-ltod-count" id="js-dislike-count">
								</span>
							</div>
						</div>
					</div>
				</div>
				<div id="watch7-actions-row" class="flex">
					<div id="watch7-ltod">
						<div id="watch7-ltod-inner" class="flex">
							<div id="js-like" class="watch7-like watch7-ltod-button" js-like-button>
								<div class="watch7-ltod-icon">
									<span></span>
								</div>
								<div class="watch7-ltod-text">
									<span>${emeraldLanguageModel.like}</span>
								</div>
							</div>
							<div id="js-dislike" class="watch7-dislike watch7-ltod-button" js-dislike-button>
								<div class="watch7-ltod-icon">
									<span></span>
								</div>
								<div class="watch7-ltod-text">
									<span></span>
								</div>
							</div>
						</div>
					</div>
					<div id="watch7-tabs">
						<div id="watch7-tabs-inner" class="flex">
							<div id="watch7-info-tab" class="watch7-tab active">
								<span>${emeraldLanguageModel.about}</span>
							</div>
							<div id="watch7-share-tab" class="watch7-tab" js-share-trigger>
								<span>${emeraldLanguageModel.shareBtn}</span>
							</div>
							<div id="watch7-addto-tab" class="watch7-tab" js-addto-trigger>
								<span>${emeraldLanguageModel.addToBtn}</span>
							</div>
							<div id="watch7-videos-tab" class="watch7-tab" js-videos-trigger>
								<span>${emeraldLanguageModel.videos}</span>
							</div>
							<div id="watch7-report-tab" class="watch7-tab" js-report-trigger>
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div id="watch7-slider" state="video-info">
					<div id="watch7-slider-container">
						<div id="watch7-slider-container-inner">
							<div id="watch7-info" class="watch7-slider">
								<div id="watch7-clickable-desc">
								</div>
								<div class="watch7-slider-inner">
									<div class="watch7-upload-date watch7-header-text">
										<span id="first-part">
											<span id="js-date-extra">${emeraldLanguageModel.publishedOnOld}</span>
										</span>
										<span id="second-part">
											<span class="upload-date" id="js-date"></span>
										</span>
									</div>
									<div id="watch7-description">
										<div class="description-inner" id="js-desc">
										</div>
										<div class="watch7-extra" id="js-extra">
										</div>
										<div id="watch7-extras" class="emerald-extras">
											<div class="watch7-category emerald-extra">
												<div class="watch7-extra-header">${emeraldLanguageModel.category}</div>
												<div id="js-category"></div>
											</div>
											<div class="watch7-tags emerald-extra">
												<div class="watch7-extra-header">Tags</div>
												<div id="js-tags"></div>
											</div>
											<div class="watch7-license emerald-extra">
												<div class="watch7-extra-header">${emeraldLanguageModel.license}</div>
												<div id="js-license">${emeraldLanguageModel.standardLicense}</div>
											</div>
										</div>
									</div>
									<div class="watch7-expand" id="watch7-expand">
										<div class="expand-border">
										</div>
										<div class="expand-inner">
											<span>${emeraldLanguageModel.showMore}</span>
										</div>
									</div>
									<div class="watch7-expand" id="watch7-collapse">
										<div class="expand-border">
										</div>
										<div class="expand-inner">
											<span>${emeraldLanguageModel.showLess}</span>
										</div>
									</div>
								</div>
							</div>
							<div id="watch7-share" class="watch7-slider">
								<div class="watch7-slider-inner">
									<div class="watch7-header-text">
										<span>Share this video</span>
									</div>
									<div class="watch7-loading-text">
										<span>Sharing features are currently limited in CustomTube. Click "Reload page with CustomTube disabled" to see all available share options.</span>
									</div>
									<div id="watch7-share-options" class="flex" js-share-options>
									</div>
									<div id="watch7-share-actions" class="flex">
										<div id="js-share-copy-button" class="emerald-hh-button">
											<a>
												<span>Copy video link</span>
											</a>
										</div>
										<div id="js-link-copied" hidden>
											<span>Link copied to clipboard.</span>
										</div>
										<div id="share-redir-button" class="emerald-hh-button emerald-hh-button-cta">
											<a onclick="var url = window.location.href; var newUrl = url + '?disable_ct'; window.location = newUrl;">
												<span>Reload page with CustomTube disabled</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div id="watch7-addto" class="watch7-slider loading dropdown-visible">
								<div class="watch7-slider-inner">
									<div class="watch7-banner-area">
										<div id="js-playlist-banner-area">
										</div>
									</div>
									<div class="watch7-header-text">
										<span>${emeraldLanguageModel.addToPlaylist}</span>
									</div>
									<div id="watch7-playlist-list">
										<div class="watch7-playlist-list-inner" id="js-playlists">
										</div>
									</div>
									<div id="watch7-playlist-create-bar">
										<div class="watch7-playlist-create-bar-inner flex">
											<div id="watch7-playlist-input">
												<input id="js-playlist-name-input" placeholder="${emeraldLanguageModel.enterPlaylistTitle}"></input>
											</div>
											<div id="watch7-playlist-buttons" class="flex">
												<div id="watch7-playlist-privacy-dropdown" class="emerald-hh-button emerald-multistate emerald-dropdown-button" state="PRIVATE" multistate-id="playlist-privacy">
													<a id="js-playlist-privacy-dropdown">
														<span state-id="PUBLIC">${emeraldLanguageModel.publicPlaylist}</span>
														<span state-id="UNLISTED">${emeraldLanguageModel.unlistedPlaylist}</span>
														<span state-id="PRIVATE">${emeraldLanguageModel.privatePlaylist}</span>
														<span class="ct-uix-button-arrow"></span>
													</a>
												</div>
												<div id="watch7-playlist-create-button" class="emerald-hh-button emerald-hh-button-cta">
													<a id="js-playlist-create">
														<span>Create</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="watch7-loading">
									<div class="watch7-loading-inner flex">
										<div class="watch7-spinner">
										</div>
										<div class="watch7-loading-text">
											Loading...
										</div>
									</div>
								</div>
							</div>
							<div id="watch7-videos" class="watch7-slider">
								<div class="watch7-slider-inner">
									<div class="watch7-header-text">
										<span>More from this channel</span>
									</div>
									<div id="videos-dd" current-slide="0" max-slides="0">
										<div id="videos-dd-inner">
											<div id="videos-dd-left" class="videos-dd-arrow emerald-hh-button" disabled>
												<a>
													<span></span>
												</a>
											</div>
											<div id="videos-dd-right" class="videos-dd-arrow emerald-hh-button" disabled>
												<a>
													<span></span>
												</a>
											</div>
											<div id="videos-dd-header">
												<a id="videos-dd-videos-link" class="yt-simple-endpoint">
													<span>See all </span>
													<span id="js-video-count-2"></span>
													<span> »</span>
												</a>
												<div id="videos-dd-pagination">
													<div id="videos-dd-0" class="emerald-hh-button videos-dd-pagination-button" active>
														<a>
															<span>1</span>
														</a>
													</div>
													<div id="videos-dd-1" class="emerald-hh-button videos-dd-pagination-button">
														<a>
															<span>2</span>
														</a>
													</div>
													<div id="videos-dd-2" class="emerald-hh-button videos-dd-pagination-button">
														<a>
															<span>3</span>
														</a>
													</div>
													<div id="videos-dd-3" class="emerald-hh-button videos-dd-pagination-button">
														<a>
															<span>4</span>
														</a>
													</div>
													<div id="videos-dd-4" class="emerald-hh-button videos-dd-pagination-button">
														<a>
															<span>5</span>
														</a>
													</div>
												</div>
											</div>
											<div id="videos-dd-slider">
												<div id="videos-dd-slider-inner">
													<div id="js-videos-dd" class="super-compact-row">
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="videos-link">
									</div>
								</div>
								<div class="watch7-loading">
									<div class="watch7-loading-inner flex">
										<div class="watch7-spinner">
										</div>
										<div class="watch7-loading-text">
											Loading...
										</div>
									</div>
								</div>
							</div>
							<div id="watch7-report" class="watch7-slider">
								<div class="watch7-slider-inner">
									<div class="watch7-header-text">
										<span>Report video</span>
									</div>
									<div class="watch7-loading-text">
										<span>Sorry, but this feature is not implemented in CustomTube. If you want to report this video, you need to do it within the regular YouTube watch layout.</span>
									</div>
									<div id="report-redir-button" class="emerald-hh-button emerald-hh-button-cta">
										<a onclick="var url = window.location.href; var newUrl = url + '?disable_ct'; window.location = newUrl;">
											<span>Reload page with CustomTube disabled</span>
										</a>
									</div>
								</div>
							</div>
							<div id="watch7-stats" class="watch7-slider">
								<div class="watch7-slider-inner">
								</div>
							</div>
							<div id="watch7-transcript" class="watch7-slider">
								<div class="watch7-slider-inner">
								</div>
							</div>
							<div id="watch7-more-actions" class="watch7-slider">
								<div class="watch7-slider-inner">
									<div class="watch7-header-text">
										<span>This feature is unavailable.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="watch7-action-panel-footer">
					  <hr class="yt-horizontal-rule ">
					</div>
				</div>
			</div>
		</div>
	`;
	var videosDD = document.querySelector("#watch7-videos-tab");
	var videoInfo = document.querySelector("#watch7-info-tab");
	var addTo = document.querySelector("#watch7-addto-tab");
	var share = document.querySelector("#watch7-share-tab");
	var report = document.querySelector("#watch7-report-tab");
	var showMore = document.querySelector("#watch7-expand");
	var showMore2 = document.querySelector("#watch7-clickable-desc");
	var showLess = document.querySelector("#watch7-collapse");
	var shareCopy = document.querySelector("#js-share-copy-button");
	shareCopy.addEventListener("click", function() {
		navigator.clipboard.writeText("https://www.youtube.com/watch?v=" + glbVideoId);
		$("#js-link-copied").removeAttribute("hidden");
	});
	videoInfo.addEventListener("click", function() {
		var descHeight = $("#js-desc").offsetHeight;
		var extraHeight = $(".emerald-extras").offsetHeight;
		descHeight = descHeight + extraHeight + 20;
		$("#watch7-info #watch7-description").style.maxHeight = descHeight + "px";
		descHeight = descHeight + 38;
		$("#watch7-info.watch7-slider").style.maxHeight = descHeight + "px";
		document.querySelector("#watch7-slider").setAttribute("state", "video-info");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-info-tab").classList.add("active");
	});
	addTo.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("state", "addto");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-addto-tab").classList.add("active");
		$("#watch7-info").style.maxHeight = "100px";
	});
	share.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("state", "share");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-share-tab").classList.add("active");
		$("#watch7-info").style.maxHeight = "100px";
	});
	videosDD.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("state", "videos");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-videos-tab").classList.add("active");
		$("#watch7-info").style.maxHeight = "100px";
	});
	report.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("state", "report");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-report-tab").classList.add("active");
		$("#watch7-info").style.maxHeight = "100px";
	});
	showMore.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("expanded", "");
		var descHeight = $("#js-desc").offsetHeight;
		var extraHeight = $(".emerald-extras").offsetHeight;
		descHeight = descHeight + extraHeight + 20;
		$("#watch7-info #watch7-description").style.maxHeight = descHeight + "px";
		descHeight = descHeight + 38;
		$("#watch7-info.watch7-slider").style.maxHeight = descHeight + "px";
	});
	showMore2.addEventListener("click", function() {
		if ($("#watch7-slider[expanded]") == null) {
			document.querySelector("#watch7-slider").setAttribute("expanded", "");
			var descHeight = $("#js-desc").offsetHeight;
			var extraHeight = $(".emerald-extras").offsetHeight;
			descHeight = descHeight + extraHeight + 20;
			$("#watch7-info #watch7-description").style.maxHeight = descHeight + "px";
			descHeight = descHeight + 38;
			$("#watch7-info.watch7-slider").style.maxHeight = descHeight + "px";
		}
	});
	showLess.addEventListener("click", function() {
		document.querySelector("#watch7-slider").removeAttribute("expanded");
	});
	let browseData = {
	commandMetadata: {
		webCommandMetadata: {
		  url: "/feed/browse",
		  webPageType: "WEB_PAGE_TYPE_BROWSE",
		  rootVe: 13162,
		  apiUrl: "/youtubei/v1/browse"
		}
	  },
	  browseEndpoint: {
		browseId: "FEhashtag",
		canonicalBaseUrl: "/feed/browse",
		params: "6gUaChZjdXN0b210dWJlLWJyb3dzZS1wYWdlGAE"
	  }
	}
}
function createWatch8() {
	$("#emerald-watch-8").innerHTML = `
		<div id="watch8-floaters">
			<div id="watch8-playlist-dropdown" class="watch8-dropdown emerald-dropdown loading">
				<div class="emerald-dropdown-fence" onclick='this.parentNode.classList.remove("dropdown-visible"); document.querySelector("#watch8-addto-button").classList.remove("active");'>
				</div>
				<div class="watch7-loading">
					<div class="watch7-loading-inner flex">
						<div class="watch7-spinner">
						</div>
						<div class="watch7-loading-text">
							Loading...
						</div>
					</div>
				</div>
				<div class="emerald-dropdown-inner">
					<div class="watch7-banner-area">
						<div id="js-playlist-banner-area">
						</div>
					</div>
					<div class="watch7-header-text">
						<span>${emeraldLanguageModel.addToPlaylist}</span>
					</div>
					<div id="watch7-playlist-list">
						<div id="js-playlists" class="emerald-dropdown-inner">
						</div>
					</div>
					<div id="watch7-playlist-create-bar">
						<div class="watch7-playlist-create-bar-inner flex">
							<div id="watch7-playlist-input">
								<input id="js-playlist-name-input" placeholder="${emeraldLanguageModel.enterPlaylistTitle}"></input>
							</div>
							<div id="watch7-playlist-buttons" class="flex">
								<div id="watch7-playlist-privacy-dropdown" class="emerald-hh-button emerald-multistate emerald-dropdown-button" state="PRIVATE" multistate-id="playlist-privacy">
									<a id="js-playlist-privacy-dropdown">
										<span state-id="PUBLIC">${emeraldLanguageModel.publicPlaylist}</span>
										<span state-id="UNLISTED">${emeraldLanguageModel.unlistedPlaylist}</span>
										<span state-id="PRIVATE">${emeraldLanguageModel.privatePlaylist}</span>
										<span class="ct-uix-button-arrow"></span>
									</a>
								</div>
								<div id="watch7-playlist-create-button" class="emerald-hh-button emerald-hh-button-cta">
									<a id="js-playlist-create">
										<span>Create</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="js-playlist-privacy-dropdown-menu" class="watch8-dropdown emerald-dropdown">
				<div class="emerald-dropdown-inner">
					<div id="js-playlist-set-public" class="emerald-dropdown-item">
						<span>${emeraldLanguageModel.publicPlaylist}</span>
					</div>
					<div id="js-playlist-set-unlisted" class="emerald-dropdown-item">
						<span>Unlisted</span>
					</div>
					<div id="js-playlist-set-private" class="emerald-dropdown-item">
						<span>Private</span>
					</div>
				</div>
			</div>
		</div>
		<div class="emerald-holder" js-owner-controls-holder>
		</div>
		<div class="section watch8">
			<div class="section-inner">
				<div id="watch8-title">
					<span id="js-title"></span>
				</div>
				<div id="watch8-owner-row" class="flex">
					<div id="watch8-owner">
						<div id="watch8-pfp">
							<a id="js-pfp" class="yt-simple-endpoint">
							</a>
						</div>
						<div id="watch8-user">
							<div id="watch8-channel-name-container" class="flex">
								<a id="js-channel-name" class="watch8-channel-name yt-simple-endpoint">
								</a>
								<span class="yt-user-separator" style="">·</span>
									<a id="js-video-count" class="watch7-video-count yt-simple-endpoint">
								</a>
							</div>
							<div id="watch7-subscription-container" class="flex emerald-multistate" state="subscribe" multistate-id="subscribe" js-subscribe>
								<a id="watch7-sub-button" js-sub-trigger>
									<div class="watch7-sub-icon">
									</div>
									<div class="watch7-sub-state" state-id="subscribe">
										<span>${emeraldLanguageModel.subscribe}</span>
									</div>
									<div class="watch7-sub-state" state-id="subscribed">
										<span>${emeraldLanguageModel.subscribed}</span>
									</div>
									<div class="watch7-sub-state" state-id="unsubscribe">
										<span>${emeraldLanguageModel.unsubscribe}</span>
									</div>
									<div class="watch7-sub-state" state-id="channel-settings">
										<span>Channel settings</span>
									</div>
									<div class="watch7-sub-state" state-id="creator-studio">
										<span>${emeraldLanguageModel.creatorStudio}</span>
									</div>
								</a>
								<div id="watch7-notif-button" state-id="subscribed" js-notif-trigger>
									<div class="watch7-notif-icon">
									</div>
								</div>
								<div id="watch7-sub-count">
									<span id="js-sub-count"></span>
								</div>
							</div>
						</div>
					</div>
					<div id="watch8-views-info">
						<div id="watch8-view-count">
							<span id="js-view-count">???,???</span>
							<span id="js-views-string" hidden>${emeraldLanguageModel.views}</span>
							<span id="js-watching-now-string" hidden> watching now</span>
						</div>
						<div id="js-ltod-bar" class="watch8-ltod-bar">
							<div id="js-likes">
							</div>
							<div id="js-dislikes">
							</div>
						</div>
					</div>
				</div>
				<div id="watch8-actions-row" class="flex">
					<div id="watch8-buttons">
						<div id="watch8-buttons-inner" class="flex">
							<div id="watch8-addto-button" class="watch8-button" js-addto-trigger>
								<span>${emeraldLanguageModel.addToBtn}</span>
							</div>
							<div id="watch8-share-button" class="watch8-button" js-share-trigger>
								<span>${emeraldLanguageModel.shareBtn}</span>
							</div>
							<div id="watch8-more-button" class="watch8-button" js-more-trigger>
								<span>${emeraldLanguageModel.moreBtn}</span>
							</div>
						</div>
					</div>
					<div id="watch8-ltod">
						<div id="watch8-ltod-inner" class="flex">
							<div id="js-like" class="watch8-like watch8-ltod-button" js-like-button>
								<div class="watch8-ltod-icon">
									<span></span>
								</div>
								<div class="watch8-ltod-text">
									<span id="js-like-count">Like</span>
								</div>
							</div>
							<div id="js-dislike" class="watch8-dislike watch8-ltod-button" js-dislike-button>
								<div class="watch8-ltod-icon">
									<span></span>
								</div>
								<div class="watch8-ltod-text">
									<span id="js-dislike-count"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section watch8">
			<div class="section-inner">
				<div id="watch8-slider" class="emerald-multistate" state="none">
					<div id="watch8-slider-container">
						<div id="watch8-slider-container-inner">
							<div id="watch8-action-panel-close" js-action-panel-close>
							</div>
							<div id="watch8-share" class="watch8-slider" state-id="share">
								<div class="watch8-slider-inner">
									<div class="watch8-header-text">
										<span>Share this video</span>
									</div>
									<div class="watch7-loading-text">
										<span>Sharing features are currently limited in CustomTube. Click "Reload page with CustomTube disabled" to see all available share options.</span>
									</div>
									<div id="watch7-share-options" class="flex" js-share-options>
									</div>
									<div id="watch7-share-actions" class="flex">
										<div id="js-share-copy-button" class="emerald-hh-button">
											<a>
												<span>Copy video link</span>
											</a>
										</div>
										<div id="js-link-copied" hidden>
											<span>Link copied to clipboard.</span>
										</div>
										<div id="share-redir-button" class="emerald-hh-button emerald-hh-button-cta">
											<a onclick="var url = window.location.href; var newUrl = url + '?disable_ct'; window.location = newUrl;">
												<span>Reload page with CustomTube disabled</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div id="watch8-videos" class="watch8-slider" state-id="videos">
								<div class="watch8-slider-inner">
									<div class="watch8-header-text">
										<span>More from this channel</span>
									</div>
									<div id="videos-dd" current-slide="0" max-slides="0">
										<div id="videos-dd-inner">
											<div id="videos-dd-left" class="videos-dd-arrow emerald-hh-button" disabled>
												<a>
													<span></span>
												</a>
											</div>
											<div id="videos-dd-right" class="videos-dd-arrow emerald-hh-button" disabled>
												<a>
													<span></span>
												</a>
											</div>
											<div id="videos-dd-header">
												<a id="videos-dd-videos-link" class="yt-simple-endpoint">
													<span>See all </span>
													<span id="js-video-count-2"></span>
													<span> »</span>
												</a>
												<div id="videos-dd-pagination">
													<div id="videos-dd-0" class="emerald-hh-button videos-dd-pagination-button" active>
														<a>
															<span>1</span>
														</a>
													</div>
													<div id="videos-dd-1" class="emerald-hh-button videos-dd-pagination-button">
														<a>
															<span>2</span>
														</a>
													</div>
													<div id="videos-dd-2" class="emerald-hh-button videos-dd-pagination-button">
														<a>
															<span>3</span>
														</a>
													</div>
													<div id="videos-dd-3" class="emerald-hh-button videos-dd-pagination-button">
														<a>
															<span>4</span>
														</a>
													</div>
													<div id="videos-dd-4" class="emerald-hh-button videos-dd-pagination-button">
														<a>
															<span>5</span>
														</a>
													</div>
												</div>
											</div>
											<div id="videos-dd-slider">
												<div id="videos-dd-slider-inner">
													<div id="js-videos-dd" class="super-compact-row">
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="videos-link">
									</div>
								</div>
								<div class="watch7-loading">
									<div class="watch7-loading-inner flex">
										<div class="watch7-spinner">
										</div>
										<div class="watch7-loading-text">
											Loading...
										</div>
									</div>
								</div>
							</div>
							<div id="watch8-report" class="watch8-slider" state-id="report">
								<div class="watch8-slider-inner">
									<div class="watch8-header-text">
										<span>Report video</span>
									</div>
									<div class="watch7-loading-text">
										<span>Sorry, but this feature is not implemented in CustomTube. If you want to report this video, you need to do it within the regular YouTube watch layout.</span>
									</div>
									<div id="report-redir-button" class="emerald-hh-button emerald-hh-button-cta">
										<a onclick="var url = window.location.href; var newUrl = url + '?disable_ct'; window.location = newUrl;">
											<span>Reload page with CustomTube disabled</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section watch8">
			<div class="section-inner">
				<div id="watch8-info" class="watch8-card">
					<div class="watch8-card-inner">
						<div class="watch8-upload-date watch8-header-text">
							<span id="first-part">
								<span id="js-date-extra">${emeraldLanguageModel.publishedOn}</span>
							</span>
							<span id="second-part">
								<span class="upload-date" id="js-date"></span>
							</span>
						</div>
						<div id="watch8-description">
							<div class="description-inner" id="js-desc">
							</div>
							<div id="watch8-extras" class="emerald-extras">
								<div class="watch7-category emerald-extra">
									<div class="watch7-extra-header">${emeraldLanguageModel.category}</div>
									<div id="js-category"></div>
								</div>
								<div class="watch7-tags emerald-extra">
									<div class="watch7-extra-header">${emeraldLanguageModel.tags}</div>
									<div id="js-tags"></div>
								</div>
								<div class="watch7-license emerald-extra">
									<div class="watch7-extra-header">${emeraldLanguageModel.license}</div>
									<div id="js-license">${emeraldLanguageModel.standardLicense}</div>
								</div>
							</div>
						</div>
						<div class="watch8-expand" id="watch8-expand">
							<div class="expand-inner">
								<span>${emeraldLanguageModel.showMore}</span>
							</div>
						</div>
						<div class="watch8-expand" id="watch8-collapse">
							<div class="expand-inner">
								<span>${emeraldLanguageModel.showLess}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
	var share = document.querySelector("#watch8-share-button");
	/*var videosDD = document.querySelector("#watch7-videos-tab");*/
	var addTo = document.querySelector("#watch8-addto-button");
	/*
	var report = document.querySelector("#watch7-report-tab");*/
	var showMore = document.querySelector("#watch8-expand");
	var showLess = document.querySelector("#watch8-collapse");
	var shareCopy = document.querySelector("#js-share-copy-button");
	var closePanel = document.querySelector("[js-action-panel-close]");
	shareCopy.addEventListener("click", function() {
		navigator.clipboard.writeText("https://www.youtube.com/watch?v=" + glbVideoId);
		$("#js-link-copied").removeAttribute("hidden");
	});
	addTo.addEventListener("click", function() {
		var titleHeight = $("#watch8-title").offsetHeight;
		var topTop = titleHeight + 90;
		document.querySelector("#watch8-playlist-dropdown").style.top = topTop + "px";
		if ($("#watch8-playlist-dropdown.dropdown-visible") != null) {
			document.querySelector("#watch8-addto-button").classList.remove("active");
			document.querySelector("#watch8-playlist-dropdown").classList.remove("dropdown-visible");
		} else {
			document.querySelector("#watch8-addto-button").classList.add("active");
			document.querySelector("#watch8-playlist-dropdown").classList.add("dropdown-visible");
		}
	});
	share.addEventListener("click", function() {
		if ($("#watch8-slider[state='share']") != null) {
			document.querySelector(".watch8-button.active").classList.remove("active");
			document.querySelector("#watch8-slider").setAttribute("state", "none");
		} else {
			document.querySelector("#watch8-slider").setAttribute("state", "share");
			if ($(".watch8-button.active") != null) {
				document.querySelector(".watch8-button.active").classList.remove("active");
			}
			document.querySelector("#watch8-share-button").classList.add("active");
		}
	});
	/*
	videosDD.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("state", "videos");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-videos-tab").classList.add("active");
		$("#watch7-info").style.maxHeight = "100px";
	});
	report.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("state", "report");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-report-tab").classList.add("active");
		$("#watch7-info").style.maxHeight = "100px";
	});*/
	showMore.addEventListener("click", function() {
		document.querySelector("#watch8-info").setAttribute("expanded", "");
	});
	showLess.addEventListener("click", function() {
		document.querySelector("#watch8-info").removeAttribute("expanded");
	});
	closePanel.addEventListener("click", function() {
		$("#watch8-slider").setAttribute("state", "none");
		if ($(".watch8-button.active") != null) {
			document.querySelector(".watch8-button.active").classList.remove("active");
		}
	});
}
function createAltWatch9() {
	$("#emerald-alt-watch-9").innerHTML = `
		<div class="emerald-holder" js-owner-controls-holder>
		</div>
		<div class="section">
			<div class="section-inner">
				<div id="watch9-title">
					<span>Me at the zoo</span>
				</div>
				<div class="section-items watch9" scroller-visible="false" show-owner="false">
					<div class="section-items-inner flex">
						<div id="watch9-sidebar">
							<div class="watch9-sidebar-inner">
								<div class="sidebar-item" id="creator">
									<div class="sidebar-item-inner">
										<span>Creator</span>
									</div>
								</div>
								<div class="sidebar-item active" id="video-info">
									<div class="sidebar-item-inner">
										<span>Video info</span>
									</div>
								</div>
								<div class="sidebar-item" id="description">
									<div class="sidebar-item-inner">
										<span>Description</span>
									</div>
								</div>
								<div class="sidebar-item" id="add-to">
									<div class="sidebar-item-inner">
										<span>${emeraldLanguageModel.addToPlaylist}</span>
									</div>
								</div>
								<div class="sidebar-item" id="share">
									<div class="sidebar-item-inner">
										<span>Share this video</span>
									</div>
								</div>
								<div class="sidebar-item" id="stats">
									<div class="sidebar-item-inner">
										<span>Statistics</span>
									</div>
								</div>
								<div class="sidebar-item" id="transcript">
									<div class="sidebar-item-inner">
										<span>Transcript</span>
									</div>
								</div>
								<div class="sidebar-item" id="more-actions">
									<div class="sidebar-item-inner">
										<span>More actions</span>
									</div>
								</div>
							</div>
						</div>
						<div id="watch9-slider" state="video-info">
							<div class="slider-container">
								<div class="slider-container-inner">
									<div id="watch9-owner-slider" class="slider">
										<div class="slider-inner">
										</div>
									</div>
									<div id="watch9-info" class="slider">
										<div class="slider-inner">
											<div id="watch9-sentiment-actions" class="flex">
												<div id="watch9-views-info" style="display: none">
													<div class="watch-view-count">
														???,??? views
													</div>
													<div class="video-extras-sparkbars yt-uix-tooltip">
														<div class="video-extras-sparkbar-likes" style="width: 98.0012039305%">
														</div>
														<div class="video-extras-sparkbar-dislikes" style="width: 1.99879606949%">
														</div>
													</div>
												</div>
												<div id="ltod">
												</div>
											</div>
											<div id="watch9-description-snippet">
												<div class="desc-snippet">
													<div class="watch9-upload-date watch9-header-text">
														<span id="first-part">
															<span>Uploaded by </span>
															<a class="author-link spf-link">????</a>
															<span>on </span>
														</span>
														<span id="second-part">
															<span class="upload-date">??? ??, ????</span>
														</span>
														<span id="third-part">
															<span>by </span>
															<a class="author-link spf-link">????</a>
														</span>
													</div>
													<div class="description-inner">
													</div>
												</div>
											</div>
											<div class="watch9-expand" id="expand">
												<div class="expand-inner">
													<span>${emeraldLanguageModel.showMore}</span>
												</div>
											</div>
											<div class="watch9-expand" id="collapse">
												<div class="expand-inner">
													<span>${emeraldLanguageModel.showLess}</span>
												</div>
											</div>
											<div class="watch9-extra">
											</div>
											<div class="watch9-category">
											</div>
										</div>
									</div>
									<div id="watch9-description" class="slider">
										<div class="slider-inner">
											<div class="watch9-header-text">
												<span>Description</span>
											</div>
											<div class="description-inner">
											</div>
											<div class="watch9-expand">
												<div class="expand-inner">
													<span>${emeraldLanguageModel.showLess}</span>
												</div>
											</div>
										</div>
									</div>
									<div id="watch9-addto" class="slider">
										<div class="slider-inner">
											<div class="watch9-header-text hid">
												<span>${emeraldLanguageModel.addToPlaylist}</span>
											</div>
										</div>
									</div>
									<div id="watch9-share" class="slider">
										<div class="slider-inner">
											<!--div class="watch9-header-text">
												<span>Share this video</span>
											</div-->
										</div>
									</div>
									<div id="watch9-stats" class="slider">
										<div class="slider-inner">
										</div>
									</div>
									<div id="watch9-transcript" class="slider">
										<div class="slider-inner">
										</div>
									</div>
									<div id="watch9-more-actions" class="slider">
										<div class="slider-inner">
											<div class="watch9-header-text">
												<span>This feature is unavailable.</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="watch9-owner">
							<div class="owner-inner">
								<div class="owner-videos-scroller">
									<div class="owner-videos-scroller-head">
									<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-tooltip">
										<span>Videos</span>
										<span class="yt-uix-button-arrow yt-sprite"></span>
									</button>
									<a class="yt-uix-tooltip spf-link" data-tooltip-text="See user's videos">
										<span>See all</span>
									</a>
									</div>
									<div class="scroller-inner">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
}
function createWatch9(wV) {
	$("#emerald-watch-9").innerHTML = `
		<div id="watch9-floaters">
			<div id="watch9-playlist-dropdown" class="watch8-dropdown emerald-dropdown loading">
				<div class="emerald-dropdown-fence" onclick='this.parentNode.classList.remove("dropdown-visible");'>
				</div>
				<div class="watch9-loading">
					<div class="watch7-loading-inner flex">
						<div class="watch7-spinner">
						</div>
						<div class="watch7-loading-text">
							Loading...
						</div>
					</div>
				</div>
				<div class="emerald-dropdown-inner">
					<div class="watch7-banner-area">
						<div id="js-playlist-banner-area">
						</div>
					</div>
					<div class="watch7-header-text">
						<span>${emeraldLanguageModel.addToPlaylist}</span>
					</div>
					<div id="watch7-playlist-list">
						<div id="js-playlists" class="emerald-dropdown-inner">
						</div>
					</div>
					<div id="watch7-playlist-create-bar">
						<div class="watch7-playlist-create-bar-inner flex">
							<div id="watch7-playlist-input">
								<input id="js-playlist-name-input" placeholder="${emeraldLanguageModel.enterPlaylistTitle}"></input>
							</div>
							<div id="watch7-playlist-buttons" class="flex">
								<div id="watch7-playlist-privacy-dropdown" class="emerald-hh-button emerald-multistate emerald-dropdown-button" state="PRIVATE" multistate-id="playlist-privacy">
									<a id="js-playlist-privacy-dropdown">
										<span state-id="PUBLIC">${emeraldLanguageModel.publicPlaylist}</span>
										<span state-id="UNLISTED">${emeraldLanguageModel.unlistedPlaylist}</span>
										<span state-id="PRIVATE">${emeraldLanguageModel.privatePlaylist}</span>
										<span class="ct-uix-button-arrow"></span>
									</a>
								</div>
								<div id="watch7-playlist-create-button" class="emerald-hh-button emerald-hh-button-cta">
									<a id="js-playlist-create">
										<span>Create</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="js-playlist-privacy-dropdown-menu" class="watch8-dropdown emerald-dropdown">
				<div class="emerald-dropdown-inner">
					<div id="js-playlist-set-public" class="emerald-dropdown-item">
						<span>${emeraldLanguageModel.publicPlaylist}</span>
					</div>
					<div id="js-playlist-set-unlisted" class="emerald-dropdown-item">
						<span>Unlisted</span>
					</div>
					<div id="js-playlist-set-private" class="emerald-dropdown-item">
						<span>Private</span>
					</div>
				</div>
			</div>
		</div>
		<div class="emerald-holder" js-owner-controls-holder>
		</div>
		<div class="section watch9 emerald-multistate" state="filled" multistate-id="watch9-icons">
			<div class="section-inner">
				<div id="watch9-primary-info">
					<div id="watch9-title">
						<span id="js-title"></span>
					</div>
					<div id="watch9-actions-info-row" class="flex">
						<div id="watch9-views-info" class="flex-bar">
							<div id="watch9-view-count">
								<span id="js-view-count">???,???</span>
								<span id="js-views-string">${emeraldLanguageModel.views}</span>
							</div>
							<div id="watch9b-upload-date" class="watch9b-elem">
								<span id="dot"> • </span>
								<span id="js-date-2"></span>
							</div>
						</div>
						<div id="watch9-actions" class="flex">
							<div id="watch9-ltod">
								<div id="watch9-ltod-inner" class="flex-bar">
									<div id="watch9-like-button" class="watch9-button" js-like-button>
										<div class="watch9-button-inner flex-bar">
											<div class="watch9-button-icon">
												<svg class="yt-icon" state-id="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
													<g class="yt-icon">
														<path class="yt-icon" d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
													</g>
												</svg>
												<svg class="yt-icon" state-id="outline" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
													<g class="yt-icon">
														<path class="yt-icon" d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
													</g>
												</svg>
												<svg class="yt-icon filled-outline" state-id="outline" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
													<g class="yt-icon">
														<path class="yt-icon" d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"></path>
													</g>
												</svg>
												<paper-ripple>
												</paper-ripple>
											</div>
											<div class="watch9-button-text">
												<span id="js-like-count">Like</span>
											</div>
										</div>
									</div>
									<div id="watch9-dislike-button" class="watch9-button" js-dislike-button>
										<div class="watch9-button-inner flex-bar">
											<div class="watch9-button-icon">
												<svg class="yt-icon" state-id="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
													<g class="yt-icon">
														<path class="yt-icon" d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
													</g>
												</svg>
												<svg class="yt-icon" state-id="outline" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
													<g class="yt-icon">
														<path class="yt-icon" d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
													</g>
												</svg>
												<svg class="yt-icon filled-outline" state-id="outline" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
													<g class="yt-icon">
														<path class="yt-icon" d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z"></path>
													</g>
												</svg>
												<paper-ripple>
												</paper-ripple>
											</div>
											<div class="watch9-button-text">
												<span id="js-dislike-count">Dislike</span>
											</div>
										</div>
									</div>
								</div>
								<div id="watch9-sentiment-bar">
									<div id="js-ltod-bar" class="watch9-ltod-bar">
										<div id="js-likes">
										</div>
										<div id="js-dislikes">
										</div>
									</div>
								</div>
							</div>
							<div id="watch9-share-button" class="watch9-button" js-share-trigger>
								<div class="watch9-button-inner flex-bar">
									<div class="watch9-button-icon">
										<svg class="yt-icon" state-id="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<g class="yt-icon">
												<path class="yt-icon" d="M11.7333 8.26667V4L19.2 11.4667L11.7333 18.9333V14.56C6.4 14.56 2.66667 16.2667 0 20C1.06667 14.6667 4.26667 9.33333 11.7333 8.26667Z"></path>
											</g>
										</svg>
										<svg class="yt-icon" state-id="outline" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<g class="yt-icon">
												<path class="yt-icon" d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
											</g>
										</svg>
										<paper-ripple>
										</paper-ripple>
									</div>
									<div class="watch9-button-text">
										<span>${emeraldLanguageModel.shareBtn}</span>
									</div>
								</div>
							</div>
							<div id="watch9-addto-button" class="watch9-button" js-addto-trigger>
								<div class="watch9-button-inner flex-bar">
									<div class="watch9-button-icon">
										<svg class="yt-icon" state-id="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<g class="yt-icon">
												<path class="yt-icon" d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
											</g>
										</svg>
										<svg class="yt-icon" state-id="outline" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<g class="yt-icon">
												<path class="yt-icon" d="M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z"></path>
											</g>
										</svg>
										<paper-ripple>
										</paper-ripple>
									</div>
									<div class="watch9-button-text">
										<span>${emeraldLanguageModel.saveBtn}</span>
									</div>
								</div>
							</div>
							<div id="watch9-more-button" class="watch9-button watch9-button-shape" js-more-trigger>
								<div class="watch9-button-inner flex-bar">
									<div class="watch9-button-icon">
										<svg class="yt-icon" state-id="filled" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<g class="yt-icon">
												<path class="yt-icon" d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
											</g>
										</svg>
										<svg class="yt-icon" state-id="outline" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
											<g class="yt-icon">
												<path class="yt-icon" d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
											</g>
										</svg>
										<paper-ripple>
										</paper-ripple>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="watch9-secondary-info">
					<div id="watch9-owner-row" class="flex-bar">
						<div id="watch9-pfp">
							<a id="js-pfp" class="yt-simple-endpoint">
							</a>
						</div>
						<div id="watch9-user">
							<div id="watch9-channel-name-container" class="flex">
								<a id="js-channel-name" class="watch9-channel-name yt-simple-endpoint">
								</a>
								<span class="watch9-yt-user-separator" style="">•</span>
									<a id="js-video-count" class="watch9-video-count yt-simple-endpoint">
								</a>
							</div>
							<div id="watch9-user-subtitle" class="flex">
								<div id="watch9-upload-date" class="watch9a-elem">
									<span id="first-part">
										<span id="js-date-extra">${emeraldLanguageModel.publishedOn}</span>
									</span>
									<span id="second-part">
										<span class="upload-date" id="js-date"></span>
									</span>
								</div>
								<div id="watch9b-sub-count" class="watch9b-elem">
									<span id="js-sub-count-2"></span>
									<span id="subscribers-text"> subscribers</span>
								</div>
							</div>
						</div>
						<div id="watch9-subscription-container" class="flex emerald-multistate" state="subscribe" multistate-id="subscribe" js-subscribe>
							<a id="watch9-sub-button" class="flex-bar" js-sub-trigger>
								<div class="watch9-sub-icon">
								</div>
								<div class="watch9-sub-state" state-id="subscribe">
									<span>${emeraldLanguageModel.subscribe}</span>
								</div>
								<div class="watch9-sub-state" state-id="subscribed">
									<span>${emeraldLanguageModel.subscribed}</span>
								</div>
								<div class="watch9-sub-state" state-id="unsubscribe">
									<span>${emeraldLanguageModel.unsubscribe}</span>
								</div>
								<div class="watch9-sub-state" state-id="channel-settings">
									<span>${emeraldLanguageModel.analytics}</span>
								</div>
								<div class="watch9-sub-state" state-id="creator-studio">
									<span>${emeraldLanguageModel.analytics}</span>
								</div>
								<div id="watch9-sub-count" class="watch9a-elem">
									<span id="js-sub-count"></span>
								</div>
								<paper-ripple>
								</paper-ripple>
							</a>
							<div id="watch9-notif-button" state-id="subscribed" js-notif-trigger>
								<div class="watch9-notif-icon">
								</div>
							</div>
						</div>
					</div>
					<div id="watch9-info" class="watch9-card">
						<div class="watch9-card-inner">
							<div id="watch9-description">
								<div class="description-inner" id="js-desc">
								</div>
							</div>
							<div class="watch9-expand" id="watch9-expand">
								<div class="expand-inner">
									<span>${emeraldLanguageModel.showMore}</span>
								</div>
							</div>
							<div class="watch9-expand" id="watch9-collapse">
								<div class="expand-inner">
									<span>${emeraldLanguageModel.showLess}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
	if (wV == "watch9b") {
		$(".section.watch9").classList.add("watch9b");
	}
	if ($("html[icon-type='outline']") != null) {
		$("[multistate-id='watch9-icons']").setAttribute("state","outline");
	}
	var share = document.querySelector("[js-share-trigger]");
	/*var videosDD = document.querySelector("#watch7-videos-tab");*/
	var addTo = document.querySelector("[js-addto-trigger]");
	/*
	var report = document.querySelector("#watch7-report-tab");*/
	var showMore = document.querySelector("#watch9-expand");
	var showLess = document.querySelector("#watch9-collapse");
	addTo.addEventListener("click", function() {
		if ($("#watch8-playlist-dropdown.dropdown-visible") != null) {
			document.querySelector("#watch8-addto-button").classList.remove("active");
			document.querySelector("#watch8-playlist-dropdown").classList.remove("dropdown-visible");
		} else {
			document.querySelector("#watch8-addto-button").classList.add("active");
			document.querySelector("#watch8-playlist-dropdown").classList.add("dropdown-visible");
		}
	});
	share.addEventListener("click", function() {
		if ($("#watch8-slider[state='share']") != null) {
			document.querySelector(".watch8-button.active").classList.remove("active");
			document.querySelector("#watch8-slider").setAttribute("state", "none");
		} else {
			document.querySelector("#watch8-slider").setAttribute("state", "share");
			if ($(".watch8-button.active") != null) {
				document.querySelector(".watch8-button.active").classList.remove("active");
			}
			document.querySelector("#watch8-share-button").classList.add("active");
		}
	});
	/*
	videosDD.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("state", "videos");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-videos-tab").classList.add("active");
		$("#watch7-info").style.maxHeight = "100px";
	});
	report.addEventListener("click", function() {
		document.querySelector("#watch7-slider").setAttribute("state", "report");
		document.querySelector(".watch7-tab.active").classList.remove("active");
		document.querySelector("#watch7-report-tab").classList.add("active");
		$("#watch7-info").style.maxHeight = "100px";
	});*/
	showMore.addEventListener("click", function() {
		document.querySelector("#watch9-info").setAttribute("expanded", "");
	});
	showLess.addEventListener("click", function() {
		document.querySelector("#watch9-info").removeAttribute("expanded");
	});
}

function stateChange() {
	
}
async function getVideoInfo(data, method, purpose, dataType) {
	return new Promise((resolve, reject) => {
		let dataContents = "";
		let dataPlayerOverlays = "";
		if (dataType == "request") {
			dataContents = data.contents;
			dataPlayerOverlays = data.playerOverlays;
		} else {
			dataContents = data.response.contents;
			dataPlayerOverlays = data.response.playerOverlays;
		}
		if (data != null) {
			if (method == "currVid") {
				resolve(data.currentVideoEndpoint.watchEndpoint.videoId);
			}
			if (method == "contents") {
				if (dataContents.twoColumnWatchNextResults.results.results.contents != null) {
					var container = dataContents.twoColumnWatchNextResults.results.results.contents;
					if (container[1].videoSecondaryInfoRenderer != null) {
						var primaryInfo = container[0].videoPrimaryInfoRenderer;
						var secondaryInfo = container[1].videoSecondaryInfoRenderer;
					} else {
						var primaryInfo = container[1].videoPrimaryInfoRenderer;
						var secondaryInfo = container[2].videoSecondaryInfoRenderer;
					}
					if (purpose == "date") {
						if (primaryInfo.dateText.simpleText != null) {
							var date = primaryInfo.dateText.simpleText;
							resolve(date);
						}
					}
					if (purpose == "title") {
						if (primaryInfo.title.runs[0].text != null) {
							var title = primaryInfo.title.runs[0].text;
							resolve(title);
						}
					}
					if (purpose == "viewCount") {
						if (primaryInfo.viewCount.videoViewCountRenderer.viewCount.simpleText != null) {
							resolve(primaryInfo.viewCount.videoViewCountRenderer.viewCount.simpleText);
						}
					}
					if (purpose == "channelName") {
						if (secondaryInfo.owner.videoOwnerRenderer.title.runs[0].text != null) {
							resolve(secondaryInfo.owner.videoOwnerRenderer.title.runs[0].text);
						}
					}
					if (purpose == "channelId") {
						if (secondaryInfo.owner.videoOwnerRenderer.navigationEndpoint.browseEndpoint.browseId != null) {
							resolve(secondaryInfo.owner.videoOwnerRenderer.navigationEndpoint.browseEndpoint.browseId);
						}
					}
				}
			}
			if (method == "contents") {
				if (dataContents != null) {
					if (dataContents.twoColumnWatchNextResults.results.results.contents != null) {
						var container = dataContents.twoColumnWatchNextResults.results.results.contents;
						if (container[1].videoSecondaryInfoRenderer != null) {
							if (purpose == "date") {
								if (container[0].videoPrimaryInfoRenderer.dateText != null) {
									resolve(container[0].videoPrimaryInfoRenderer.dateText.simpleText);
								} else {
									resolve("[Failed to get upload date.]");
								}
							}
							if (purpose == "isLiked") {
								if (container[0].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												console.log(container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel);
												if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.likeStatusEntity.likeStatus != null) {
													resolve(container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.likeStatusEntity.likeStatus);
												}
											}
										}
									}
								}
							}
							if (purpose == "likeCount") {
								if (container[0].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel.defaultButtonViewModel.buttonViewModel.title != null) {
													resolve(container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel.defaultButtonViewModel.buttonViewModel.title);
												}
											}
										}
									}
								}
							}
							if (purpose == "likeEnd") {
								if (container[0].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel != null) {
													var toggleBtn = container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel;
													if (toggleBtn.defaultButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.likeParams != null) {
														resolve(toggleBtn.defaultButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.likeParams);
													}
												}
											}
										}
									}
								}
							}
							if (purpose == "unlikeEnd") {
								if (container[0].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel != null) {
													var toggleBtn = container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel;
													if (toggleBtn.toggledButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.removeLikeParams != null) {
														resolve(toggleBtn.toggledButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.removeLikeParams);
													}
												}
											}
										}
									}
								}
							}
							if (purpose == "dislikeEnd") {
								if (container[0].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.dislikeButtonViewModel.dislikeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel != null) {
													var toggleBtn = container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.dislikeButtonViewModel.dislikeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel;
													if (toggleBtn.defaultButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.dislikeParams != null) {
														resolve(toggleBtn.defaultButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.dislikeParams);
													}
												}
											}
										}
									}
								}
							}
							if (purpose == "undislikeEnd") {
								if (container[0].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.dislikeButtonViewModel.dislikeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel != null) {
													var toggleBtn = container[0].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.dislikeButtonViewModel.dislikeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel;
													if (toggleBtn.toggledButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.removeLikeParams != null) {
														resolve(toggleBtn.toggledButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.removeLikeParams);
													}
												}
											}
										}
									}
								}
							}
							if (purpose == "desc") {
								if (container[1].videoSecondaryInfoRenderer.attributedDescription != null) {
									resolve(container[1].videoSecondaryInfoRenderer.attributedDescription.content);
								} else {
									resolve(null);
								}
							}
							if (purpose == "descLinks") {
								if (container[1].videoSecondaryInfoRenderer.attributedDescription.commandRuns != null) {
									resolve(container[1].videoSecondaryInfoRenderer.attributedDescription);
								} else {
									resolve("0");
								}
							}
							if (purpose == "pfp") {
								if (container[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer != null) {
									if (container[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails != null) {
										resolve(container[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails[0].url);
									} else {
										resolve("https://i.stack.imgur.com/YaL3s.jpg");
									}
								} else {
									resolve("https://i.stack.imgur.com/YaL3s.jpg");
								}
							}
							if (purpose == "subCount") {
								if (container[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer != null) {
									if (container[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText != null) {
										resolve(container[1].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText.simpleText);
									} else {
										resolve("[Failed to get subscriber count.]");
									}
								} else {
									resolve("[Failed to get subscriber count.]");
								}
							}
							if (purpose == "isSubbed") {
								if (container[1].videoSecondaryInfoRenderer.subscribeButton != null) {
									if (container[1].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer != null) {
										resolve(container[1].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.subscribed);
									} else if (container[1].videoSecondaryInfoRenderer.subscribeButton.buttonRenderer != null) {
										resolve("isOwner");
									} else {
										resolve("[Failed to get subscription status.]");
									}
								} else {
									resolve("[Failed to get subscription status.]");
								}
							}
							if (container[1].videoSecondaryInfoRenderer.subscribeButton != null) {
								if (container[1].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer != null) {
									if (purpose == "subEnd") {
										if (container[1].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onSubscribeEndpoints != null) {
											resolve(container[1].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onSubscribeEndpoints[0].subscribeEndpoint.params);
										} else {
											resolve("[Failed to get subscription status.]");
										}
										resolve("[Failed to get subscription status.]");
									}
									if (purpose == "unsubEnd") {
										if (container[1].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onUnsubscribeEndpoints[0].signalServiceEndpoint.actions[0].openPopupAction.popup.confirmDialogRenderer != null) {
											if (container[1].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onUnsubscribeEndpoints[0].signalServiceEndpoint.actions[0].openPopupAction.popup.confirmDialogRenderer.confirmButton.buttonRenderer.serviceEndpoint.unsubscribeEndpoint.params != null) {
												resolve(container[1].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onUnsubscribeEndpoints[0].signalServiceEndpoint.actions[0].openPopupAction.popup.confirmDialogRenderer.confirmButton.buttonRenderer.serviceEndpoint.unsubscribeEndpoint.params);
											} else {
											resolve("[Failed to get subscription status.]");
											}
										}
									}
								}
							}
						} else {
							if (purpose == "date") {
								if (container[1].videoPrimaryInfoRenderer.dateText != null) {
									resolve(container[1].videoPrimaryInfoRenderer.dateText.simpleText);
								} else {
									resolve("[Failed to get upload date.]");
								}
							}
							if (purpose == "isLiked") {
								if (container[1].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.likeStatusEntity.likeStatus != null) {
													resolve(container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.likeStatusEntity.likeStatus);
												}
											}
										}
									}
								}
							}
							if (purpose == "likeCount") {
								if (container[1].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel.defaultButtonViewModel.buttonViewModel.title != null) {
													resolve(container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel.defaultButtonViewModel.buttonViewModel.title);
												}
											}
										}
									}
								}
							}
							if (purpose == "likeEnd") {
								if (container[1].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel != null) {
													var toggleBtn = container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel;
													if (toggleBtn.defaultButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.likeParams != null) {
														resolve(toggleBtn.defaultButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.likeParams);
													}
												}
											}
										}
									}
								}
							}
							if (purpose == "unlikeEnd") {
								if (container[1].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel != null) {
													var toggleBtn = container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.likeButtonViewModel.likeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel;
													if (toggleBtn.toggledButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.removeLikeParams != null) {
														resolve(toggleBtn.toggledButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.removeLikeParams);
													}
												}
											}
										}
									}
								}
							}
							if (purpose == "dislikeEnd") {
								if (container[1].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.dislikeButtonViewModel.dislikeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel != null) {
													var toggleBtn = container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.dislikeButtonViewModel.dislikeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel;
													if (toggleBtn.defaultButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.dislikeParams != null) {
														resolve(toggleBtn.defaultButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.dislikeParams);
													}
												}
											}
										}
									}
								}
							}
							if (purpose == "undislikeEnd") {
								if (container[1].videoPrimaryInfoRenderer.videoActions != null) {
									if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer != null) {
										if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons != null) {
											if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel != null) {
												if (container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.dislikeButtonViewModel.dislikeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel != null) {
													var toggleBtn = container[1].videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons[0].segmentedLikeDislikeButtonViewModel.dislikeButtonViewModel.dislikeButtonViewModel.toggleButtonViewModel.toggleButtonViewModel;
													if (toggleBtn.toggledButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.removeLikeParams != null) {
														resolve(toggleBtn.toggledButtonViewModel.buttonViewModel.onTap.serialCommand.commands[1].innertubeCommand.likeEndpoint.removeLikeParams);
													}
												}
											}
										}
									}
								}
							}
							if (purpose == "desc") {
								if (container[2].videoSecondaryInfoRenderer.attributedDescription != null) {
									resolve(container[2].videoSecondaryInfoRenderer.attributedDescription.content);
								} else {
									resolve(null);
								}
							}
							if (purpose == "descLinks") {
								if (container[2].videoSecondaryInfoRenderer.attributedDescription.commandRuns != null) {
									resolve(container[2].videoSecondaryInfoRenderer.attributedDescription);
								} else {
									resolve("0");
								}
							}
							if (purpose == "pfp") {
								if (container[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer != null) {
									if (container[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails != null) {
										resolve(container[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.thumbnail.thumbnails[0].url);
									} else {
										resolve("https://i.stack.imgur.com/YaL3s.jpg");
									}
								} else {
									resolve("https://i.stack.imgur.com/YaL3s.jpg");
								}
							}
							if (purpose == "subCount") {
								if (container[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer != null) {
									if (container[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText != null) {
										resolve(container[2].videoSecondaryInfoRenderer.owner.videoOwnerRenderer.subscriberCountText.simpleText);
									} else {
										resolve("[Failed to get subscriber count.]");
									}
								} else {
									resolve("[Failed to get subscriber count.]");
								}
							}
							if (purpose == "isSubbed") {
								if (container[2].videoSecondaryInfoRenderer.subscribeButton != null) {
									if (container[2].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer != null) {
										resolve(container[2].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.subscribed);
									} else if (container[2].videoSecondaryInfoRenderer.subscribeButton.buttonRenderer != null) {
										resolve("isOwner");
									} else {
										resolve("[Failed to get subscription status.]");
									}
								} else {
									resolve("[Failed to get subscription status.]");
								}
							}
							if (purpose == "subEnd") {
								if (container[2].videoSecondaryInfoRenderer.subscribeButton != null) {
									if (container[2].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onSubscribeEndpoints != null) {
										resolve(container[2].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onSubscribeEndpoints[0].subscribeEndpoint.params);
									} else {
										resolve("[Failed to get subscription status.]");
									}
								} else {
									resolve("[Failed to get subscription status.]");
								}
							}
							if (purpose == "unsubEnd") {
								if (container[2].videoSecondaryInfoRenderer.subscribeButton != null) {
									if (container[2].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onUnsubscribeEndpoints[0].signalServiceEndpoint.actions[0].openPopupAction.popup.confirmDialogRenderer != null) {
										if (container[2].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onUnsubscribeEndpoints[0].signalServiceEndpoint.actions[0].openPopupAction.popup.confirmDialogRenderer.confirmButton.buttonRenderer.serviceEndpoint.unsubscribeEndpoint.params != null) {
											resolve(container[2].videoSecondaryInfoRenderer.subscribeButton.subscribeButtonRenderer.onUnsubscribeEndpoints[0].signalServiceEndpoint.actions[0].openPopupAction.popup.confirmDialogRenderer.confirmButton.buttonRenderer.serviceEndpoint.unsubscribeEndpoint.params);
										}
									} else {
										resolve("[Failed to get subscription status.]");
									}
								} else {
									resolve("[Failed to get subscription status.]");
								}
							}
						}
					} else {
						//
					}
				} else {
					//alert("CustomTube Fatal Error: response is null");
				}
			} else if (method == "playerOverlays") {
				if (dataPlayerOverlays.playerOverlayRenderer != null) {
					if (dataPlayerOverlays.playerOverlayRenderer.shareButton != null) {
						if (dataPlayerOverlays.playerOverlayRenderer.shareButton.buttonRenderer != null) {
							if (dataPlayerOverlays.playerOverlayRenderer.shareButton.buttonRenderer.navigationEndpoint != null) {
								if (dataPlayerOverlays.playerOverlayRenderer.shareButton.buttonRenderer.navigationEndpoint.shareEntityServiceEndpoint != null) {
									resolve(dataPlayerOverlays.playerOverlayRenderer.shareButton.buttonRenderer.navigationEndpoint.shareEntityServiceEndpoint.serializedShareEntity);
								}
							}
						}
					}
				}
			} else if (
				data.playerResponse != null &&
				method == "videoDetails"
			) {
				if (data.playerResponse.videoDetails != null) {
					if (purpose == "videoId") {
						if (data.playerResponse.videoDetails.videoId != null) {
							resolve(data.playerResponse.videoDetails.videoId);
						} else {
							//alert("CustomTube Fatal Error: videoId is null");
						}
					} 
					if (purpose == "title") {
						if (data.playerResponse.videoDetails.title != null) {
							resolve(data.playerResponse.videoDetails.title);
						} else {
							resolve("[Failed to get video title.]");
						}
					} 
					if (purpose == "channelName") {
						if (data.playerResponse.videoDetails.author != null) {
							resolve(data.playerResponse.videoDetails.author);
						} else {
							resolve("[Failed to get author.]");
						}
					}
					if (purpose == "channelId") {
						if (data.playerResponse.videoDetails.channelId != null) {
							resolve(data.playerResponse.videoDetails.channelId);
						} else {
							resolve("[Failed to get channel id.]");
						}
					} 
					if (purpose == "viewCount") {
						if (data.playerResponse.videoDetails.viewCount != null) {
							resolve(data.playerResponse.videoDetails.viewCount);
						} else {
							resolve("[Failed to get view count.]");
						}
					} 
					if (purpose == "tags") {
						if (data.playerResponse.videoDetails.keywords != null) {
							resolve(data.playerResponse.videoDetails.keywords);
						} else {
							resolve(0);
						}
					} 
				} else {
					//alert("CustomTube Fatal Error: videoDetails is null");
				}
			} else if (method == "videoDetails") {
				//alert("CustomTube Fatal Error: playerResponse is null");
			} else if (
				data.playerResponse != null &&
				method == "microformat"
			) {
				if (data.playerResponse.microformat.playerMicroformatRenderer != null) {
					if (purpose == "category") {
						if (data.playerResponse.microformat.playerMicroformatRenderer.category != null) {
							resolve(data.playerResponse.microformat.playerMicroformatRenderer.category);
						} else {
							//alert("CustomTube Fatal Error: category is null");
						}
					} 
				} else {
					//alert("CustomTube Fatal Error: microformat is null");
				}
			} else if (method == "videoDetails") {
				//alert("CustomTube Fatal Error: playerResponse is null");
			}
		} else {
			//alert("CustomTube Fatal Error: data is null");
		}
	});
}
function populateWatch(data) {
	//let usableIsSubbed = false;
	let usableChannelId = "";
	var videoId = getVideoInfo(data, "videoDetails", "videoId");
	var title = getVideoInfo(data, "videoDetails", "title");
	title.then(function(result) {
		glbVideoTitle = result;
		if ($("#js-title") != null) {
			$("#js-title").textContent = result;
		}
		if ($("#js-watch-above-title") != null) {
			$("#js-watch-above-title").textContent = result;
		}
	});
	var channelName = getVideoInfo(data, "videoDetails", "channelName");
	channelName.then(function(result) {
		if ($("#js-channel-name") != null) {
			$("#js-channel-name").textContent = result;
		}
		if ($("#js-channel-name-2") != null) {
			$("#js-channel-name-2").textContent = result;
		}
		if ($("#js-watch-above-channel-name") != null) {
			$("#js-watch-above-channel-name").textContent = result;
		}
		if ($("[js-side-meta-channel-name]") != null) {
			$("[js-side-meta-channel-name]").textContent = result;
		}
		if ($("[js-side-meta-channel-name-2]") != null) {
			$("[js-side-meta-channel-name-2]").textContent = result;
		}
	});
	var channelId = getVideoInfo(data, "videoDetails", "channelId");
	channelId.then(function(ownerId) {
		let ownerUrl = "https://www.youtube.com/channel/" + ownerId;
		let ownerUrlVids = ownerUrl + "/videos";
		let navData = {
		clickTrackingParams: "CJgDEOE5IhMI7Ke_y_nOgwMVtf0WCR2SdQuj",
		commandMetadata: {
			webCommandMetadata: {
			  url: ownerUrl,
			  webPageType: "WEB_PAGE_TYPE_CHANNEL",
			  rootVe: 8662,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: ownerId,
			canonicalBaseUrl: ownerUrl
		  }
		}
		let navDataVids = {
		commandMetadata: {
			webCommandMetadata: {
			  url: ownerUrlVids,
			  webPageType: "WEB_PAGE_TYPE_CHANNEL",
			  rootVe: 8762,
			  apiUrl: "/youtubei/v1/browse"
			}
		  },
		  browseEndpoint: {
			browseId: ownerId,
			canonicalBaseUrl: ownerUrlVids,
			params: "EgZ2aWRlb3PyBgQKAjoA"
		  }
		}
		if ($("#js-channel-name") != null) {
			$("#js-channel-name").setAttribute("href",ownerUrl);
			$("#js-channel-name").data = navData;
		}
		if ($("#js-channel-name-2") != null) {
			$("#js-channel-name-2").setAttribute("href",ownerUrl);
			$("#js-channel-name-2").data = navData;
		}
		if ($("#js-watch-above-channel-name") != null) {
			$("#js-watch-above-channel-name").setAttribute("href",ownerUrl);
			$("#js-watch-above-channel-name").data = navData;
		}
		if ($("[js-side-meta-channel-name]") != null) {
			$("[js-side-meta-channel-name]").setAttribute("href",ownerUrl);
			$("[js-side-meta-channel-name]").data = navData;
		}
		if ($("#appbar-watch-channel") != null) {
			$("#appbar-watch-channel").setAttribute("href",ownerUrl);
			$("#appbar-watch-channel").data = navData;
		}
		if ($("#js-pfp") != null) {
			$("#js-pfp").setAttribute("href",ownerUrl);
			$("#js-pfp").data = navData;
		}
		if ($("#js-side-meta-pfp") != null) {
			$("#js-side-meta-pfp").setAttribute("href",ownerUrl);
			$("#js-side-meta-pfp").data = navData;
		}
		if ($("#js-video-count") != null) {
			$("#js-video-count").setAttribute("href",ownerUrlVids);
			$("#js-video-count").data = navDataVids;
		}
		if ($("#js-video-count-2") != null) {
			$("#js-video-count-2").parentNode.setAttribute("href",ownerUrlVids);
			$("#js-video-count-2").parentNode.data = navDataVids;
		}
		if ($("#js-watch-above-video-count") != null) {
			$("#js-watch-above-video-count").setAttribute("href",ownerUrlVids);
			$("#js-watch-above-video-count").data = navDataVids;
		}
		if ($("#js-watch-above-video-count-2") != null) {
			$("#videos-dd-videos-link").setAttribute("href",ownerUrlVids);
			$("#videos-dd-videos-link").data = navDataVids;
		}
		if ($("#appbar-watch-videos") != null) {
			$("#appbar-watch-videos").setAttribute("href",ownerUrlVids);
			$("#appbar-watch-videos").data = navDataVids;
		}
	});
	var pfp = getVideoInfo(data, "contents", "pfp");
	pfp.then(function(result) {
		if ($("#js-pfp") != null) {
			$("#js-pfp").style.background = "url(" + result + ")";
		}
		if ($("#js-watch-above-pfp") != null) {
			$("#js-watch-above-pfp").style.background = "url(" + result + ")";
		}
		if ($("#js-side-meta-pfp") != null) {
			$("#js-side-meta-pfp").style.background = "url(" + result + ")";
		}
	});
	var date = getVideoInfo(data, "contents", "date");
	date.then(function(result) {
		if (result.includes("ed")) {
			if ($("#js-date-extra") != null) {
				$("#js-date-extra").style.display = "none";
			}
			if ($("#js-date-extra-2") != null) {
				$("#js-date-extra-2").style.display = "inline";
			}
		} else {
			if ($("#js-date-extra") != null) {
				$("#js-date-extra").style.display = "inline";
			}
			if ($("#js-date-extra-2") != null) {
				$("#js-date-extra-2").style.display = "none";
			}
		}
		if ($("#js-date") != null) {
			$("#js-date").textContent = result;
		}
		if ($("#js-date-2") != null) {
			$("#js-date-2").textContent = result;
		}
		if ($("#js-side-meta-date") != null) {
			$("#js-side-meta-date").textContent = result;
		}
	});
	var viewCount = getVideoInfo(data, "videoDetails", "viewCount");
	viewCount.then(function(result) {
		result = numberWithCommas(result);
		//$("#js-view-count").textContent = result + " views";
		if ($("#js-view-count") != null) {
			$("#js-view-count").textContent = result;
		}
		if (
		$("html[layout^='hitchhiker-2016'] #js-views-string") != null ||
		$("html[layout^='hitchhiker-2017'] #js-views-string") != null ||
		$("html[layout^='polymer'] #js-views-string") != null
		) {
			$("#js-views-string").removeAttribute("hidden");
		}
	});
	var subCount = getVideoInfo(data, "contents", "subCount");
	subCount.then(function(result) {
		var trimSub = trimSubs(result);
		trimSub.then(function(resultium) {
			if ($("#js-sub-count") != null) {
				$("#js-sub-count").textContent = resultium;
			}
			if ($("#js-sub-count-2") != null) {
				$("#js-sub-count-2").textContent = resultium;
			}
			if ($("#js-watch-above-sub-count") != null) {
				$("#js-watch-above-sub-count").textContent = resultium;
			}
		});
	});
	var desc = getVideoInfo(data, "contents", "desc");
	desc.then(function(result) {
		if (result != null) {
			var doDescLinks = getVideoInfo(data, "contents", "descLinks");
			doDescLinks.then(function(result1) {
				if (result1 == "0") {
					var theText = result;
					console.log(theText);
					theText = theText.replaceAll('\n', `<br>`);
					var container = document.querySelector('#js-desc');
					var newElem = document.createElement("span");
					newElem.setAttribute("class", "emerald-run");
					newElem.setAttribute("bt-optimized-universal-element", "");
					newElem.innerHTML = theText; // This MUST be innerHTML. There is NO way around this.
					container.insertBefore(newElem, container.children[0]);
				} else {
					var conv = convertDescription(result1);
					conv.then(function(result2) {
						console.log(result2);
						emeraldDescription(result2);
					});
				}
			});
		} else {
			var container = document.querySelector('#js-desc');
			var newElem = document.createElement("span");
			newElem.setAttribute("class", "emerald-run");
			newElem.setAttribute("bt-optimized-universal-element", "");
			newElem.innerHTML = `<i>${emeraldLanguageModel.noDescription}</i>`;
			container.insertBefore(newElem, container.children[0]);
		}
	});
	var category = getVideoInfo(data, "microformat", "category");
	category.then(function(result) {
		if ($("#js-category")) {
			$("#js-category").textContent = result;
		}
	});
	var tags = getVideoInfo(data, "videoDetails", "tags");
	tags.then(function(result) {
		if (
		$("#js-tags") &&
		result != 0
		) {
			let PRcurrentCheck = 0;
			result.forEach(itemRoot => {
				if (itemRoot) {
					var container = document.querySelector('#js-tags');
					var newElem = document.createElement("a");
					newElem.setAttribute("class", "emerald-tag emerald-link");
					newElem.setAttribute("href", "https://www.youtube.com/results?search_query=" + itemRoot + "&search=tag");
					newElem.setAttribute("bt-optimized-universal-element", "");
					newElem.innerHTML = itemRoot;
					container.insertBefore(newElem, container.children[PRcurrentCheck]);
					PRcurrentCheck++;
				}
			});
		} else if ($("#js-tags")) {
			$("#js-tags").parentNode.remove();
		}
	});
	videoId.then(function(result) {
		console.log(result);
		if ($("html[no-ryd]") == null) {
			doRyd(result);
		}
		glbVideoId = result;
		if ($("[js-side-meta-url]")) {
			$("[js-side-meta-url]").value = "https://www.youtube.com/watch?v=" + result;
		}
		if (signedIn == true) {
			var addtoTrigger = $("[js-addto-trigger]");
			addtoTrigger.addEventListener("click", function() {
				if ($(".addto-triggered") == null) {
					fetchAddto(glbVideoId, addtoTrigger);
				}
			});
			var likeEndpoint = getVideoInfo(data, "contents", "likeEnd");
			likeEndpoint.then(function(likeEnd) {
				console.log(likeEnd);
				var unlikeEndpoint = getVideoInfo(data, "contents", "unlikeEnd");
				unlikeEndpoint.then(function(unlikeEnd) {
					console.log(unlikeEnd);
					var likeBtn = $("[js-like-button]");
					likeBtn.addEventListener("click", function() {
						if (isLiked == false) {
							likeVideo(glbVideoId, likeEnd);
							isLiked = true;
							isDisliked = false;
							$("[js-like-button]").classList.add("active");
							if ($("#watch9-ltod") != null) {
								$("#watch9-ltod").setAttribute("liked","true");
							}
							if ($("[js-dislike-button].active") != null) {
								$("[js-dislike-button]").classList.remove("active");
							}
						}
						else if (isLiked == true) {
							unlikeVideo(glbVideoId, unlikeEnd);
							isLiked = false;
							if ($("#watch9-ltod") != null) {
								$("#watch9-ltod").setAttribute("liked","false");
							}
							$("[js-like-button]").classList.remove("active");
						}
					});
				});
			});
			var dislikeEndpoint = getVideoInfo(data, "contents", "dislikeEnd");
			dislikeEndpoint.then(function(dislikeEnd) {
				console.log(dislikeEnd);
				var undislikeEndpoint = getVideoInfo(data, "contents", "undislikeEnd");
				undislikeEndpoint.then(function(undislikeEnd) {
					console.log(undislikeEnd);
					var dislikeBtn = $("[js-dislike-button]");
					dislikeBtn.addEventListener("click", function() {
						if (isDisliked == false) {
							dislikeVideo(glbVideoId, dislikeEnd);
							isDisliked = true;
							isLiked = false;
							$("[js-dislike-button]").classList.add("active");
							if ($("#watch9-ltod") != null) {
								$("#watch9-ltod").setAttribute("liked","false");
							}
							if ($("[js-like-button].active") != null) {
								$("[js-like-button]").classList.remove("active");
							}
						}
						else if (isDisliked == true) {
							unlikeVideo(glbVideoId, undislikeEnd);
							isDisliked = false;
							$("[js-dislike-button]").classList.remove("active");
						}
					});
				});
			});
		}
	});
	channelId.then(function(result) {
		console.log(result);
		usableChannelId = result;
		var doChannelVids = doChannelVideos(usableChannelId);
		doChannelVids.then(function(result3) {
			doVideosDropdowns(result3,usableChannelId);
		});
		if (signedIn == true) {
			var subEndpoint = getVideoInfo(data, "contents", "subEnd");
			subEndpoint.then(function(subEnd) {
				console.log(subEnd);
				var unsubEndpoint = getVideoInfo(data, "contents", "unsubEnd");
				unsubEndpoint.then(function(unsubEnd) {
					if ($("[js-side-meta-sub-trigger]") != null) {
						var subTrigger = $("[js-side-meta-sub-trigger]");
					}
					var subTrigger2 = $("[js-sub-trigger]");
					console.log(subTrigger);
					subTrigger.addEventListener("click", function() {
						if (isSubbed == false) {
							subscribeToChannel(usableChannelId, subEnd);
							isSubbed = true;
						}
						if (isSubbed == true) {
							unsubscribeFromChannel(usableChannelId, unsubEnd);
							isSubbed = false;
						}
					});
					subTrigger2.addEventListener("click", function() {
						if (isSubbed == false) {
							subscribeToChannel(usableChannelId, subEnd);
							isSubbed = true;
						}
						if (isSubbed == true) {
							unsubscribeFromChannel(usableChannelId, unsubEnd);
							isSubbed = false;
						}
					});
				});
			});
		}
	});
	var shareTrigger = $("[js-share-trigger]");
	shareTrigger.addEventListener("click", function() {
		if ($(".share-triggered") == null) {
			shareTrigger.classList.add("share-triggered");
			var shareEntity = getVideoInfo(data, "playerOverlays", "shareEntity");
			shareEntity.then(function(result) {
				$("[js-share-options]").innerHTML = `
				<div id="js-share-to-facebook" class="emerald-share-option">
					<a>
					</a>
				</div>
				<div id="js-share-to-x" class="emerald-share-option">
					<a>
					</a>
				</div>
				<div id="js-share-to-reddit" class="emerald-share-option">
					<a>
					</a>
				</div>
				<div id="js-share-to-pinterest" class="emerald-share-option">
					<a>
					</a>
				</div>
				<div id="js-share-to-tumblr" class="emerald-share-option">
					<a>
					</a>
				</div>
				`;
				$("#js-share-to-facebook a").setAttribute("href","http://www.facebook.com/dialog/share?app_id=87741124305&href=https%3A//youtube.com/watch%3Fv%3D" + glbVideoId + "%26si&display=popup");
				$("#js-share-to-x a").setAttribute("href","https://twitter.com/intent/tweet?url=https%3A//youtu.be/" + glbVideoId + "&text=" + glbVideoTitle + "&via=YouTube&related=YouTube,YouTubeTrends,YTCreators");
				$("#js-share-to-reddit a").setAttribute("href","http://reddit.com/submit?url=https%3A//youtube.com/watch%3Fv%3D" + glbVideoId + "%26si&title=" + glbVideoTitle);
				$("#js-share-to-pinterest a").setAttribute("href","http://pinterest.com/pin/create/button/?url=https%3A//youtube.com/watch%3Fv%3D" + glbVideoId + "%26si&description=" + glbVideoTitle + "&is_video=true&media=https://i.ytimg.com/vi/" + glbVideoId + "/maxresdefault.jpg");
				$("#js-share-to-tumblr a").setAttribute("href","http://www.tumblr.com/share/video?embed=https%3A//youtube.com/watch%3Fv%3D" + glbVideoId + "%26si&caption=" + glbVideoTitle);
				console.log(result);
				//fetchShare(data, result);
			});
		}
	});
	var ytdLikeCount = getVideoInfo(data, "contents", "likeCount");
	ytdLikeCount.then(function(result) {
		if ($("#js-like-count")) {
			$("#js-like-count").textContent = result;
		}
	});
	if (signedIn == true) {
		var isLiked = getVideoInfo(data, "contents", "isLiked");
		isLiked.then(function(result) {
			if (result == "LIKE") {
				$("[js-like-button]").classList.add("active");
				isLiked = true;
				isDisliked = false;
				if ($("#watch9-ltod") != null) {
					$("#watch9-ltod").setAttribute("liked","true");
				}
				if ($("#watch4-ratings[rated]")) {
					$("#watch4-ratings").removeAttribute("rated");
				} else if ($("#watch4-ratings")) {
					$("#watch4-ratings").setAttribute("rated","");
					$("#watch4-ratings").setAttribute("user-rating","5");
					$("#watch4-rating-value").textContent = "5";
				}
			}
			if (result == "INDIFFERENT") {
				isLiked = false;
				isDisliked = false;
				if ($("#watch9-ltod") != null) {
					$("#watch9-ltod").setAttribute("liked","false");
				}
			}
			if (result == "DISLIKE") {
				$("[js-dislike-button]").classList.add("active");
				isLiked = false;
				isDisliked = true;
				if ($("#watch9-ltod") != null) {
					$("#watch9-ltod").setAttribute("liked","false");
				}
				if ($("#watch4-ratings[rated]")) {
					$("#watch4-ratings").removeAttribute("rated");
				} else if ($("#watch4-ratings")) {
					$("#watch4-ratings").setAttribute("rated","");
					$("#watch4-ratings").setAttribute("user-rating","1");
					$("#watch4-rating-value").textContent = "1";
				}
			}
		});
		var isSubbed = getVideoInfo(data, "contents", "isSubbed");
		isSubbed.then(function(result) {
			if (result == false) {
				if ($("[js-subscribe]") != null) {
					$("[js-subscribe]").setAttribute("state","subscribe");
				}
				if ($("[js-watch-above-subscribe]") != null) {
					$("[js-watch-above-subscribe]").setAttribute("state","subscribe");
				}
				if ($("[js-side-meta-subscribe]") != null) {
					$("[js-side-meta-subscribe]").setAttribute("state","subscribe");
				}
				isSubbed = false;
			}
			if (result == true) {
				if ($("[js-subscribe]") != null) {
					$("[js-subscribe]").setAttribute("state","subscribed");
				}
				if ($("[js-watch-above-subscribe]") != null) {
					$("[js-watch-above-subscribe]").setAttribute("state","subscribed");
				}
				if ($("[js-side-meta-subscribe]") != null) {
					$("[js-side-meta-subscribe]").setAttribute("state","unsubscribe");
				}
				isSubbed = true;
			}
			if (result == "isOwner") {
				if ($("[js-subscribe]") != null) {
					$("[js-subscribe]").setAttribute("state","creator-studio");
					$("[js-subscribe] a").setAttribute("href","https://www.youtube.com/dashboard");
				}
				if ($("[js-watch-above-subscribe]") != null) {
					$("[js-watch-above-subscribe]").setAttribute("state","creator-studio");
				}
				if ($("[js-side-meta-subscribe]") != null) {
					$("[js-side-meta-subscribe]").setAttribute("state","creator-studio");
				}
				isSubbed = "isOwner";
				if ($("[js-owner-controls-holder]")) {
					fillCreatorButtons(glbVideoId);
				}
			}
		});
	}	
}
function fillCreatorButtons(id) {
	let container = document.querySelector('[js-owner-controls-holder]');
	var newElem = document.createElement("div");
	newElem.id = "emerald-owner-controls";
	newElem.innerHTML = `
	<div id="emerald-owner-controls-inner" class="flex-bar">
		<div id="emerald-owner-controls-left" class="flex-bar">
			<div id="emerald-edit" class="emerald-owner-control emerald-hh-button">
				<a>
					<span></span>
				</a>
			</div>
			<div id="emerald-enhance" class="emerald-owner-control emerald-hh-button">
				<a>
					<span></span>
				</a>
			</div>
			<div id="emerald-audio" class="emerald-owner-control emerald-hh-button">
				<a>
					<span></span>
				</a>
			</div>
			<div id="emerald-annotations" class="emerald-owner-control emerald-hh-button">
				<a>
					<span></span>
				</a>
			</div>
			<div id="emerald-cc" class="emerald-owner-control emerald-hh-button">
				<a>
					<span></span>
				</a>
			</div>
		</div>
		<div id="emerald-owner-controls-right" class="flex-bar">
			<div id="emerald-analytics" class="emerald-owner-control emerald-hh-button">
				<a>
					<span>${emeraldLanguageModel.analytics}</span>
				</a>
			</div>
			<div id="emerald-video-manager" class="emerald-owner-control emerald-hh-button">
				<a href="https://www.youtube.com/my_videos">
					<span>${emeraldLanguageModel.videoManager}</span>
				</a>
			</div>
		</div>
	</div>
	`;
	container.insertBefore(newElem, container.children[0]);
	$("#emerald-edit a").setAttribute("href","https://studio.youtube.com/video/" + id + "/edit");
	$("#emerald-enhance a").setAttribute("href","https://studio.youtube.com/video/" + id + "/editor");
	$("#emerald-audio a").setAttribute("href","https://studio.youtube.com/video/" + id + "/editor");
	$("#emerald-annotations a").setAttribute("href","https://studio.youtube.com/video/" + id + "/editor");
	$("#emerald-cc a").setAttribute("href","https://studio.youtube.com/video/" + id + "/translations");
	$("#emerald-analytics a").setAttribute("href","https://studio.youtube.com/video/" + id + "/analytics");
}
function doVideosDropdowns(data,channelId) {
	if (data.contents.twoColumnBrowseResultsRenderer.tabs[1] != null) {
		if (data.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content != null) {
			var videoCount = getVideoCount(data);
			videoCount.then(function(result) {
				if ($("#appbar-watch-video-count") != null) {
					$("#appbar-watch-video-count").textContent = result;
				}
				if (document.querySelector("#appbar-watch-videos-fusion[hidden]") != null) {
					document.querySelector("#appbar-watch-videos-fusion").removeAttribute("hidden");
				}
				if ($("#js-video-count") != null) {
					$("#js-video-count").textContent = result;
				}
				if ($("#js-video-count-2") != null) {
					$("#js-video-count-2").textContent = result;
				}
				if ($("#js-watch-above-video-count") != null) {
					$("#js-watch-above-video-count").textContent = result;
				}
				if ($("#js-watch-above-video-count-2") != null) {
					$("#js-watch-above-video-count-2").textContent = result;
				}
			});
			var richGrid = data.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content.richGridRenderer;
			var richItemNo = 0;
			var richContents = richGrid.contents;
			richGridGet();
			function richGridGet() {

				for (let i = 0; i < richContents.length; i++) {
					if (richGrid.contents[richItemNo].richItemRenderer != null) {
						if ($("#videos-dd-button[disabled]") != null) {
							$("#videos-dd-button").removeAttribute("disabled");
						}
						var richItem = richGrid.contents[richItemNo].richItemRenderer.content.videoRenderer;
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
							} else if (richItem.thumbnailOverlays[1].thumbnailOverlayTimeStatusRenderer != null) {
								if (richItem.thumbnailOverlays[1].thumbnailOverlayTimeStatusRenderer.text != null) {
									itemTime = richItem.thumbnailOverlays[1].thumbnailOverlayTimeStatusRenderer.text.simpleText;
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
						/*let container2 = document.querySelector('#bt-videos-dropdown #js-destination');
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
						container2.insertBefore(newElem2, container2.children[richItemNo]);*/
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
						if (document.querySelector('#js-videos-dd') != null) {
							let container2 = document.querySelector('#js-videos-dd');
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
							var videosDD = document.querySelector("#js-videos-dd");
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
							richItemNo--;
						}
						if (document.querySelector('#js-channel-videos-tab') != null) {
							let container3 = document.querySelector('#js-channel-videos-tab');
							var newElem3 = document.createElement("a");
							newElem3.classList.add("yt-simple-endpoint");
							newElem3.setAttribute("class", "yt-simple-endpoint emerald-compact-item emerald-compact-video last-emerald-item");
							newElem3.innerHTML = `
							<div class="emerald-compact-item-inner flex">
								<div class="thumbnail">
									<img src=""></img>
									<div class="time">
										<span></span>
									</div>
									<div class="progress">
										<div class="progress-inner">
										</div>
									</div>
								</div>
								<div class="meta">
									<div class="emerald-details-level-1">
										<div class="title">
											<span></span>
										</div>
									</div>
									<div class="emerald-details-level-2 flex-bar none" hidden>
									</div>
									<div class="emerald-details-level-3 flex">
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
							container3.insertBefore(newElem3, container3.children[richItemNo]);
							var videosList = document.querySelector("#js-channel-videos-tab");
							var theSCVid = videosList.querySelectorAll(".emerald-compact-video")[richItemNo];
							theSCVid.querySelector(".title span").textContent = itemTitle;
							theSCVid.querySelector(".title").setAttribute("title",itemTitle);
							theSCVid.querySelector("img").src = itemThumbnail;
							theSCVid.querySelector(".view-count span").textContent = itemView;
							theSCVid.querySelector(".time span").textContent = itemTime;
							theSCVid.querySelector(".date span").textContent = itemDate;
							theSCVid.setAttribute("href", "/watch?v=" + itemLink);
							theSCVid.data = videoData;
						}
						richItemNo++;
					} else {
						console.log("All available rich items gotten.");
					}
				}
			}
		} else {
			if ($("#js-video-count") != null) {
				$("#js-video-count").textContent = "No videos";
			}
			if ($("#js-video-count-2") != null) {
				$("#js-video-count-2").textContent = "No videos";
			}
			if ($("#js-watch-above-video-count") != null) {
				$("#js-watch-above-video-count").textContent = "No videos";
			}
			if ($("#js-watch-above-video-count-2") != null) {
				$("#js-watch-above-video-count-2").textContent = "No videos";
			}
		}
	} else {
		if ($("#js-video-count") != null) {
			$("#js-video-count").textContent = "No videos";
		}
		if ($("#js-video-count-2") != null) {
			$("#js-video-count-2").textContent = "No videos";
		}
		if ($("#js-watch-above-video-count") != null) {
			$("#js-watch-above-video-count").textContent = "No videos";
		}
		if ($("#js-watch-above-video-count-2") != null) {
			$("#js-watch-above-video-count-2").textContent = "No videos";
		}
	}
	var elm = "#js-videos-dd";
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
}
function likeVideo(videoId, params) {
	fetch("https://www.youtube.com/youtubei/v1/like/like?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"target": {
				"videoId": videoId
			},
			"context": context,
			"likeParams": params
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
	});
}
function dislikeVideo(videoId, params) {
	fetch("https://www.youtube.com/youtubei/v1/like/dislike?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"target": {
				"videoId": videoId
			},
			"context": context,
			"dislikeParams": params
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
	});
}
function unlikeVideo(videoId, params) {
	fetch("https://www.youtube.com/youtubei/v1/like/removelike?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"target": {
				"videoId": videoId
			},
			"context": context,
			"removeLikeParams": params
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
	});
}
function subscribeToChannel(channelId, params) {
	fetch("https://www.youtube.com/youtubei/v1/subscription/subscribe?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"channelIds": channelId,
			"context": context,
			"params": params
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
		if ($("[js-subscribe]") != null) {
			$("[js-subscribe]").setAttribute("state","subscribed");
		}
		if ($("[js-side-meta-subscribe]") != null) {
			$("[js-side-meta-subscribe]").setAttribute("state","unsubscribe")
		}
		if ($("[js-watch-above-subscribe]") != null) {
			$("[js-watch-above-subscribe]").setAttribute("state","subscribed")
		}
		if (glbWatchVersion == "watch7") {
			document.querySelector("#watch7-slider").setAttribute("state", "videos");
			document.querySelector(".watch7-tab.active").classList.remove("active");
			document.querySelector("#watch7-videos-tab").classList.add("active");
			$("#watch7-info").style.maxHeight = "100px";
		}
	});
}
function unsubscribeFromChannel(channelId, params) {
	fetch("https://www.youtube.com/youtubei/v1/subscription/unsubscribe?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"channelIds": channelId,
			"context": context,
			"params": params
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
		if ($("[js-subscribe]") != null) {
			$("[js-subscribe]").setAttribute("state","subscribe");
		}
		if ($("[js-side-meta-subscribe]") != null) {
			$("[js-side-meta-subscribe]").setAttribute("state","unsubscribe")
		}
		if ($("[js-watch-above-subscribe]") != null) {
			$("[js-watch-above-subscribe]").setAttribute("state","subscribe")
		}
	});
}
function handlePlaylists(data) {
	var playlistList = data.contents[0].addToPlaylistRenderer.playlists;
	let PRcurrentCheck = 0;
	console.log(playlistList);
	for (let i = 0; i < playlistList.length; i++) {
		var playlist = playlistList[PRcurrentCheck].playlistAddToOptionRenderer;
		//playlistAddToOptionRenderer
		console.log(playlist);
		let PRtitle = playlist.title.simpleText;
		let PRprivacy = playlist.privacy;
		let PRcheck = playlist.containsSelectedVideos;
		let PRid = playlist.playlistId;
		var container = document.querySelector('#js-playlists');
		var newElem = document.createElement("div");
		newElem.setAttribute("class", "emerald-playlist");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div class="emerald-playlist-inner flex">
			<div class="emerald-playlist-checkmark">
			</div>
			<div class="emerald-playlist-title">
				<span id="js-playlist-title"></span>
			</div>
			<div class="emerald-playlist-privacy">
				<span id="js-playlist-privacy"></span>
			</div>
		</div>
		`;
		container.insertBefore(newElem, container.children[PRcurrentCheck]);
		newElem.setAttribute("added-to",PRcheck);
		newElem.setAttribute("playlist-id",PRid);
		newElem.querySelector("#js-playlist-title").textContent = PRtitle;
		newElem.querySelector("#js-playlist-privacy").textContent = PRprivacy;
		newElem.addEventListener("click", function() {
			if (PRcheck == "ALL") {
				editPlaylist(PRid, PRtitle, "ACTION_REMOVE_VIDEO_BY_VIDEO_ID");
				PRcheck = "NONE";
			} else {
				editPlaylist(PRid, PRtitle, "ACTION_ADD_VIDEO");
				PRcheck = "ALL";
			}
		});
		PRcurrentCheck = PRcurrentCheck + 1;
	}
	if (glbWatchVersion == "watch7") {
		setTimeout(confirmHeight, 10)
	}
	$("#js-playlist-create").addEventListener("click", function() {
		var PRnewPlaylistTitle = $("#js-playlist-name-input").value;
		var PRnewPlaylistPrivacy = $(".emerald-multistate[multistate-id='playlist-privacy']").getAttribute("state");
		createPlaylist(PRnewPlaylistTitle, PRnewPlaylistPrivacy);
	});
	var playlistPrivDD = $("#js-playlist-privacy-dropdown-menu");
	$("#js-playlist-privacy-dropdown").addEventListener("click", function() {
		/*if ($(".emerald-multistate[multistate-id='playlist-privacy'][state='PRIVATE']") != null) {
			$(".emerald-multistate[multistate-id='playlist-privacy']").setAttribute("state","PUBLIC");
		} else if ($(".emerald-multistate[multistate-id='playlist-privacy'][state='PUBLIC']") != null) {
			$(".emerald-multistate[multistate-id='playlist-privacy']").setAttribute("state","UNLISTED");
		} else if ($(".emerald-multistate[multistate-id='playlist-privacy'][state='UNLISTED']") != null) {
			$(".emerald-multistate[multistate-id='playlist-privacy']").setAttribute("state","PRIVATE");
		}*/
		if ($("#js-playlist-privacy-dropdown-menu.dropdown-visible") == null) {
			playlistPrivDD.classList.add("dropdown-visible");
		} else {
			playlistPrivDD.classList.remove("dropdown-visible");
		}
	});
	$("#js-playlist-set-public").addEventListener("click", function() {
		$(".emerald-multistate[multistate-id='playlist-privacy']").setAttribute("state","PUBLIC");
		playlistPrivDD.classList.remove("dropdown-visible");
	});
	$("#js-playlist-set-unlisted").addEventListener("click", function() {
		$(".emerald-multistate[multistate-id='playlist-privacy']").setAttribute("state","UNLISTED");
		playlistPrivDD.classList.remove("dropdown-visible");
	});
	$("#js-playlist-set-private").addEventListener("click", function() {
		$(".emerald-multistate[multistate-id='playlist-privacy']").setAttribute("state","PRIVATE");
		playlistPrivDD.classList.remove("dropdown-visible");
	});
}
function createPlaylist(title, privacy) {
	fetch("https://www.youtube.com/youtubei/v1/playlist/create?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
	"headers": headers1,
	"referrer": "https://www.youtube.com/",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": JSON.stringify({
		"context": context,
		"title": title,
		"videoIds": glbVideoId,
		"privacyStatus": privacy
	}),
	"method": "POST",
	"mode": "cors",
	"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
		var container = document.querySelector('#js-playlists');
		var newElem = document.createElement("div");
		newElem.setAttribute("class", "emerald-playlist");
		newElem.setAttribute("bt-optimized-universal-element", "");
		newElem.innerHTML = `
		<div class="emerald-playlist-inner flex">
			<div class="emerald-playlist-checkmark">
			</div>
			<div class="emerald-playlist-title">
				<span id="js-playlist-title"></span>
			</div>
			<div class="emerald-playlist-privacy">
				<span id="js-playlist-privacy"></span>
			</div>
		</div>
		`;
		container.insertBefore(newElem, container.children[1]);
		let PRcheck = "ALL";
		var PRid = data.playlistId;
		newElem.setAttribute("added-to","ALL");
		newElem.setAttribute("playlist-id",PRid);
		newElem.querySelector("#js-playlist-title").textContent = title;
		newElem.querySelector("#js-playlist-privacy").textContent = privacy;
		newElem.addEventListener("click", function() {
			if (PRcheck == "ALL") {
				editPlaylist(PRid, title, "ACTION_REMOVE_VIDEO_BY_VIDEO_ID");
				PRcheck = "NONE";
			} else {
				editPlaylist(PRid, title, "ACTION_ADD_VIDEO");
				PRcheck = "ALL";
			}
		});
		$("#js-playlist-banner-area").innerHTML = `
		<div class="emerald-banner emerald-banner-green">
			<div class="emerald-banner-inner flex">
				<div class="emerald-banner-left">
					<div class="emerald-banner-icon">
					</div>
				</div>
				<div class="emerald-banner-middle">
					<span>Saved to </span>
					<span id="js-playlist-name"></span>
				</div>
				<div class="emerald-banner-right">
					<div id="js-banner-close" class="emerald-banner-close">
					</div>
				</div>
			</div>
		</div>
		`
		$("#js-playlist-banner-area #js-playlist-name").textContent = title;
		$("#js-playlist-banner-area #js-banner-close").addEventListener("click", function() {
			$("#js-playlist-banner-area").innerHTML = ``;
		});
	});
}
function confirmHeight() {
	let PRheight = $("#js-playlists").offsetHeight;
	console.log(PRheight);
	PRheight = PRheight + 60;
	$("#watch7-addto").style.maxHeight = PRheight + "px";
}
function editPlaylist(playlistId, playlistName, action, purpose, videoId) {
	if (purpose == "overlayButton") {
		if (action == "ACTION_REMOVE_VIDEO_BY_VIDEO_ID") {
			fetch("https://www.youtube.com/youtubei/v1/browse/edit_playlist?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
			"headers": headers1,
			"referrer": "https://www.youtube.com/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": JSON.stringify({
				"context": context,
				"playlistId": playlistId,
				"actions": {
					"action": action,
					"removedVideoId": videoId
				}
			}),
			"method": "POST",
			"mode": "cors",
			"credentials": "include"
			}).then(response => response.json()).then(data => {
				console.log(data);
			});
		}
		else {
			fetch("https://www.youtube.com/youtubei/v1/browse/edit_playlist?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
			"headers": headers1,
			"referrer": "https://www.youtube.com/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": JSON.stringify({
				"context": context,
				"playlistId": playlistId,
				"actions": {
					"action": action,
					"addedVideoId": videoId
				}
			}),
			"method": "POST",
			"mode": "cors",
			"credentials": "include"
			}).then(response => response.json()).then(data => {
				console.log(data);
			});
		}
	} else {
		var elem = $(".emerald-playlist[playlist-id=" + playlistId + "]");
		if (action == "ACTION_REMOVE_VIDEO_BY_VIDEO_ID") {
			fetch("https://www.youtube.com/youtubei/v1/browse/edit_playlist?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
			"headers": headers1,
			"referrer": "https://www.youtube.com/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": JSON.stringify({
				"context": context,
				"playlistId": playlistId,
				"actions": {
					"action": action,
					"removedVideoId": glbVideoId
				}
			}),
			"method": "POST",
			"mode": "cors",
			"credentials": "include"
			}).then(response => response.json()).then(data => {
				console.log(data);
				elem.setAttribute("added-to","NONE");
				$("#js-playlist-banner-area").innerHTML = `
				<div class="emerald-banner emerald-banner-green">
					<div class="emerald-banner-inner flex">
						<div class="emerald-banner-left">
							<div class="emerald-banner-icon">
							</div>
						</div>
						<div class="emerald-banner-middle">
							<span>Removed from </span>
							<span id="js-playlist-name"></span>
						</div>
						<div class="emerald-banner-right">
							<div id="js-banner-close" class="emerald-banner-close">
							</div>
						</div>
					</div>
				</div>
				`
				$("#js-playlist-banner-area #js-playlist-name").textContent = playlistName;
				$("#js-playlist-banner-area #js-banner-close").addEventListener("click", function() {
					$("#js-playlist-banner-area").innerHTML = ``;
				});
			});
		}
		else {
			fetch("https://www.youtube.com/youtubei/v1/browse/edit_playlist?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
			"headers": headers1,
			"referrer": "https://www.youtube.com/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": JSON.stringify({
				"context": context,
				"playlistId": playlistId,
				"actions": {
					"action": action,
					"addedVideoId": glbVideoId
				}
			}),
			"method": "POST",
			"mode": "cors",
			"credentials": "include"
			}).then(response => response.json()).then(data => {
				console.log(data);
				elem.setAttribute("added-to","ALL");
				$("#js-playlist-banner-area").innerHTML = `
				<div class="emerald-banner emerald-banner-green">
					<div class="emerald-banner-inner flex">
						<div class="emerald-banner-left">
							<div class="emerald-banner-icon">
							</div>
						</div>
						<div class="emerald-banner-middle">
							<span>Added to </span>
							<span id="js-playlist-name"></span>
						</div>
						<div class="emerald-banner-right">
							<div id="js-banner-close" class="emerald-banner-close">
							</div>
						</div>
					</div>
				</div>
				`
				$("#js-playlist-banner-area #js-playlist-name").textContent = playlistName;
				$("#js-playlist-banner-area #js-banner-close").addEventListener("click", function() {
					$("#js-playlist-banner-area").innerHTML = ``;
				});
			});
		}
	}
}
function fetchAddto(videoId, addtoTrigger) {
	fetch("https://www.youtube.com/youtubei/v1/playlist/get_add_to_playlist?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"context": context,
			"videoIds": videoId
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
		handlePlaylists(data);
		if (glbWatchVersion == "watch7") {
			$("#watch7-addto").classList.remove("loading");
		}
		if (glbWatchVersion == "watch8") {
			$("#watch8-playlist-dropdown").classList.remove("loading");
		}
		if (
		glbWatchVersion == "watch5c" ||
		glbWatchVersion == "watch5d"
		) {
			$("#watch5-addto-panel").classList.remove("loading");
		}
		if (
		glbWatchVersion == "watch4"
		) {
			$("#watch4-addto-panel").classList.remove("loading");
		}
		addtoTrigger.classList.add("addto-triggered");
	});
}
function fetchShare(data, entity) {
	fetch("https://www.youtube.com/youtubei/v1/share/get_share_panel?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"context": {
				"client": {
					"clientName": "WEB",
					"clientVersion": "2.20240123.06.00",
					"hl": "en",
					"gl": "US",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0",
					"visitorData": visitorData
				}		
			},
			"serializedShareEntity": entity
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
	});
	/*fetch("https://www.youtube.com/youtubei/v1/browse?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"context": context,
			"browseId": "FEwhat_to_watch"
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
	});*/
	/*fetch("https://www.youtube.com/youtubei/v1/share/get_share_panel?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": {
			"accept": "application/json, text/plain, /",
			"accept-language": "en-US,en;q=0.9",
			"Content-type": "application/json"
		},
		"referrer": "https://www.youtube.com/",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"context": {
				"client": {
					"clientName": "WEB",
					"clientVersion": "2.20240123.06.00",
					"hl": "en",
					"gl": "US",
					"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0"
				}	
			},
			"serializedShareEntity": entity
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		console.log(data);
	});*/
}
function emeraldDescription(attrDesc) {
	var runs = attrDesc.runs;
	var currentCheck = 0;
	for (let i = 0; i < runs.length; i++) {
		if (runs[currentCheck].navigationEndpoint != null) {
			var theActualText = runs[currentCheck].text;
			if (runs[currentCheck].navigationEndpoint.browseEndpoint != null) {
				if (runs[currentCheck].navigationEndpoint.browseEndpoint.canonicalBaseUrl != null) {
					var theLink = runs[currentCheck].navigationEndpoint.browseEndpoint.canonicalBaseUrl;
					theLink = "https://www.youtube.com" + theLink;
					var theNE = runs[currentCheck].navigationEndpoint;
				} else {
					var theLink = runs[currentCheck].navigationEndpoint.commandMetadata.webCommandMetadata.url;
					theLink = "https://www.youtube.com" + theLink;
					var theNE = runs[currentCheck].navigationEndpoint;
				}
			} else if (runs[currentCheck].navigationEndpoint.watchEndpoint != null) {
				var theLink = runs[currentCheck].navigationEndpoint.watchEndpoint.videoId;
				theLink = "https://www.youtube.com/watch?v=" + theLink;
				var theNE = runs[currentCheck].navigationEndpoint;
			} else {
				var theLink = runs[currentCheck].navigationEndpoint.urlEndpoint.url;
				var theNE = runs[currentCheck].navigationEndpoint;
			}
			if (theLink.includes("redirect?event")) {
				var splitUrl = theLink.split("&q=");
				splitUrl = splitUrl[1];
				var splitUrl = splitUrl.split("&v=");
				splitUrl = splitUrl[0];
				splitUrl = splitUrl.replaceAll('%3A', `:`);
				splitUrl = splitUrl.replaceAll('%2F', `/`);
				theLink = splitUrl;
			}
			if (theLink.includes("/hashtag/")) {
				var theText = runs[currentCheck].text;
			} else {
				var theText = theLink;
			}
			if (
			theActualText.includes(":") &&
			theLink.includes("/watch?v=")
			) {
				var theText = runs[currentCheck].text;
			}
			//console.log(theLink);
			var container = document.querySelector('#js-desc');
			var newElem = document.createElement("a");
			newElem.setAttribute("class", "emerald-run emerald-link yt-simple-endpoint");
			newElem.setAttribute("bt-optimized-universal-element", "");
			newElem.innerHTML = theText;
			newElem.setAttribute("href", theLink);
			newElem.data = theNE;
			container.insertBefore(newElem, container.children[currentCheck]);
		} else if (runs[currentCheck].text != null) {
			var theText = runs[currentCheck].text;
			theText = theText.replaceAll('\n', `<br>`);
			var container = document.querySelector('#js-desc');
			var newElem = document.createElement("span");
			newElem.setAttribute("class", "emerald-run");
			newElem.setAttribute("bt-optimized-universal-element", "");
			newElem.innerHTML = theText;
			container.insertBefore(newElem, container.children[currentCheck]);
		}
		currentCheck = currentCheck + 1;
	}
}
async function convertDescription(a) {
	// https://github.com/Rehike/Rehike/commit/cdabdd0d951ef3df06905172777efbc1bb34c1d6
	// Originally written by aubymori in PHP.

	if (a.commandRuns == null) {
		return {
			"runs": [
				{
					"text": a.content
				}
			]
		};
	}

	var runs = [],
		start = 0;

	for (var i = 0; i < a.commandRuns.length; i++) {
		var run = a.commandRuns[i],
			beforeText = a.content.substr(start, run.startIndex - start);

		//console.log(run);
		if(beforeText) {
			runs.push({
				text: beforeText
			});
		}

		var text = a.content.substring(run.startIndex, run.startIndex + run.length),
			endpoint = run.onTap.innertubeCommand;
		runs.push({
			text: text,
			navigationEndpoint: endpoint
		});
		start = run.startIndex + run.length;
	}

	var lastText = a.content.substr(start);
	if (lastText) {
		runs.push({
			text: lastText
		});
	}

	runs.forEach(function(run) {
		if (run.navigationEndpoint?.watchEndpoint) {
			//console.log(run);
			//var felfa = run.onTap.innertubeCommand.commandMetadata.webCommandMetadata.url;
			var felfa = run.text;
			if (felfa.includes(":")) {
				run.text = felfa;
			} else {
				run.text = "https://www.youtube.com" + run.navigationEndpoint.commandMetadata.webCommandMetadata.url.substring(0, 37) + "...";
			}
		}
	});

	return {
		runs: runs
	};
}
function numberWithCommas(x) {
	return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
function doRyd(videoId) {
	fetch("https://returnyoutubedislikeapi.com/votes?videoId=" + videoId, {
		"referrer": "https://www.youtube.com/",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"method": "GET"
	}).then(response => response.json()).then(data => {
		var likeCount = parseInt(data.likes);
		var dislikeCount = parseInt(data.dislikes);
		var total = likeCount + dislikeCount;
		var rating = dislikeCount / total;
		likeCount = numberWithCommas(likeCount);
		dislikeCount = numberWithCommas(dislikeCount);
		rating = rating * 100;
		rating = 100 - rating;
		let stars = rating;
		if ($("#js-like-count")) {
			$("#js-like-count").textContent = likeCount;
			$("#js-dislike-count").textContent = dislikeCount;
			$("#js-likes").style.width = rating + "%";
			rating = $("#js-likes").style.width;
			$("#js-ltod-bar").title = rating + " of viewers like this video";
		}
		if ($("[js-star-1-button]")) {
			let starElem = $("#watch4-ratings-inner");
			if (stars <= 100) {
				starElem.setAttribute("rating", "5.0");
			}
			if (stars <= 89) {
				starElem.setAttribute("rating", "4.5");
			}
			if (stars <= 78) {
				starElem.setAttribute("rating", "4.0");
			}
			if (stars <= 67) {
				starElem.setAttribute("rating", "3.5");
			}
			if (stars <= 55) {
				starElem.setAttribute("rating", "3.0");
			}
			if (stars <= 44) {
				starElem.setAttribute("rating", "2.5");
			}
			if (stars <= 33) {
				starElem.setAttribute("rating", "2.0");
			}
			if (stars <= 22) {
				starElem.setAttribute("rating", "1.5");
			}
			if (stars <= 11) {
				starElem.setAttribute("rating", "1.0");
			}
		}
	});
}
async function doChannelVideos(ownerId) {
	return new Promise((resolve, reject) => {
		fetch("https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
			"headers": headers1,
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
			//console.log(data);
			resolve(data);
		});
	});
}
async function getVideoCount(data) {
	return new Promise((resolve, reject) => {
		if (data.header.c4TabbedHeaderRenderer != null) {
			if (data.header.c4TabbedHeaderRenderer.videosCountText != null) {
				var videoCount = data.header.c4TabbedHeaderRenderer.videosCountText.runs[0].text;
				if (data.header.c4TabbedHeaderRenderer.videosCountText.runs[1] != null) {
					var videoCountString = data.header.c4TabbedHeaderRenderer.videosCountText.runs[1].text;
					resolve(videoCount + videoCountString);
				} else {
					resolve(videoCount);
				}
			} else {
				resolve("No videos");
			}
		} else if (data.header.pageHeaderRenderer != null) {
			var pageHeaderVM = data.header.pageHeaderRenderer.content.pageHeaderViewModel;
			var metaCon = pageHeaderVM.metadata.contentMetadataViewModel.metadataRows[0].metadataParts;
			if (metaCon[2] != null) {
				var videoCount = metaCon[2].text.content;
				resolve(videoCount);
			} else {
				var videoCount = "No videos";
				resolve(videoCount);
			}
		}
	});
}
/*
date = new Date('2013-08-03T02:00:00Z');
year = date.getFullYear();
month = date.getMonth()+1;
dt = date.getDate();

if (dt < 10) {
  dt = '0' + dt;
}
if (month < 10) {
  month = '0' + month;
}

console.log(year+'-' + month + '-'+dt);*/
async function trimSubs(subCount) {
	return new Promise((resolve, reject) => {
		//var subCountElem = document.querySelector("#owner-sub-count");
		//var subCount = subCountElem.getAttribute("aria-label");
		//var subCount = sessionStorage.getItem("nebula-sub-count");
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
		if ($("html[random-sub-counts]") == null) {
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
		resolve(trimmedSubCount);
	});
}

function emeraldBrowse() {
	let rootC = 87;
	if ($("#emerald-browse")) {
		$("#emerald-browse").remove();
	}
	let container = $("ytd-browse:not([page-subtype]) #primary");
	container = $("ytd-browse[page-subtype='home'] #primary");
	container.innerHTML = `
	<div id="emerald-browse">
		<div id="emerald-browse-inner">
			<div class="emerald-shelves-area" js-browse-shelves>
			</div>
		</div>
	</div>
	`;
	let storedHomepageData = localStorage.getItem("Emerald_Stored_Homepage_Data");
	if (storedHomepageData == null) {
		fetchShelfHomepage(true, rootC);
		fetchShelfHomepage(false, rootC);
	} else {
		storedHomepageData = JSON.parse(storedHomepageData);
		//console.log(storedHomepageData);
		let dateNow = Date.now();
		let dateBad = storedHomepageData.time.expires;
		if (dateNow > dateBad) {
			fetchShelfHomepage(true, rootC);
		} else {
			fetchShelfHomepage(false, rootC);
			parseShelves(storedHomepageData.theData.contents.sectionListRenderer.contents, rootC);
		}
	}
}
function fetchShelfHomepage(parseAfter, rootC) {
	fetch("https://www.youtube.com/youtubei/v1/browse?prettyPrint=false&key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8", {
		"headers": headers1,
		"referrer": "https://www.youtube.com/watch?v=JMiAjkvpfl0",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": JSON.stringify({
			"browseId": "FEwhat_to_watch",
			"context": context1
		}),
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json()).then(data => {
		//console.log(data);
		let dateNow = Date.now();
		let dateBad = dateNow + 1800000;
		let PRforStorage = {
			theData: data,
			time: {
				timestamp: dateNow,
				expires: dateBad
			}
		}
		PRforStorage = JSON.stringify(PRforStorage);
		localStorage.setItem("Emerald_Stored_Homepage_Data",PRforStorage);
		if (parseAfter == true) {
			parseShelves(data.contents.sectionListRenderer.contents, rootC);
		}
	});
}
function parseShelves(data, rootC) {
	let PRShelfNo = 0;
	data.forEach(itemRoot => {
		if (itemRoot.shelfRenderer) {
			doShelf(itemRoot.shelfRenderer, PRShelfNo, rootC);
			PRShelfNo++;
			rootC = rootC + 50;
		}
	});
}
class EmeraldVideoModel {
	videoId;
	itemLink;
	title;
	thumbnail;
	time;
	progress;
	author;
	authorId;
	authorNav;
	date;
	viewCount;
	viewCountExtension;
	navEnd;
	rootVe;
	videoCount;
	badge1;
	badge1type;
	badge2;
	badge2type;
	constructor(shelfVideo, type) {
		let apiItem = shelfVideo;
		//this.rootVe = rootC;
		if (apiItem.title.runs != null) {
			this.title = apiItem.title.runs[0].text;
		} else {
			this.title = apiItem.title.simpleText;
		}
		if (apiItem.videoId != null) {
			this.videoId = apiItem.videoId;
		} else {
			this.videoId = apiItem.navigationEndpoint.watchEndpoint.videoId;
		} 
		if (apiItem.thumbnail != null) {
			if (apiItem.thumbnail.thumbnails) {
				if (apiItem.thumbnail.thumbnails[1].url) {
					this.thumbnail = apiItem.thumbnail.thumbnails[1].url;
				} else {
					this.thumbnail = apiItem.thumbnail.thumbnails[0].url;
				}
			} else {
				this.thumbnail = apiItem.thumbnail;
			}
		} else if (apiItem.thumbnails != null) {
			this.thumbnail = apiItem.thumbnails[0].thumbnails[1].url;
		}
		if (apiItem.lengthText != null) {
			if (apiItem.lengthText.runs != null) {
				this.time = apiItem.lengthText.runs[0].text;
			} else {
				this.time = apiItem.lengthText.simpleText;
			}
		} else {
			this.time = "LIVE";
		}
		if (apiItem.thumbnailOverlays != null) {
			if (apiItem.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer != null) {
				this.progress = 0;
			} else if (apiItem.thumbnailOverlays[1].thumbnailOverlayTimeStatusRenderer != null) {
				if (apiItem.thumbnailOverlays[0].thumbnailOverlayResumePlaybackRenderer != null) {
					this.progress = apiItem.thumbnailOverlays[0].thumbnailOverlayResumePlaybackRenderer.percentDurationWatched;
				}
			}
		}
		if (apiItem.longBylineText.runs != null) {
			this.author = apiItem.longBylineText.runs[0].text;
			if (apiItem.longBylineText.runs[0].navigationEndpoint != null) {
				this.authorNav = apiItem.longBylineText.runs[0].navigationEndpoint;
				this.authorId = apiItem.longBylineText.runs[0].navigationEndpoint.browseEndpoint.browseId;
			}
		} else {
			this.author = apiItem.longBylineText.simpleText;
		}
		if (apiItem.viewCountText != null) {
			if (apiItem.viewCountText.simpleText != null) {
				this.viewCount = apiItem.viewCountText.simpleText;
			} else {
				this.viewCount = apiItem.viewCountText.runs[0].text;
				if (apiItem.viewCountText.runs[1]) {
					this.viewCountExtension = apiItem.viewCountText.runs[1].text;
				}
			}
		}
		if (apiItem.publishedTimeText != null) {
			if (apiItem.publishedTimeText.simpleText != null) {
				this.date = apiItem.publishedTimeText.simpleText;
			} else {
				this.date = apiItem.publishedTimeText.runs[0].text;
			}
		}
		let url = "/watch?v=" + this.videoId;
		let chanUrl = "/channel/" + this.authorId;
		if (apiItem.thumbnailText) {
			this.videoCount = apiItem.thumbnailText.runs[0].text;
		}
		/*this.navEnd = {
		commandMetadata: {
			webCommandMetadata: {
			  url: url,
			  webPageType: "WEB_PAGE_TYPE_WATCH",
			  rootVe: rootC
			}
		  },
		  watchEndpoint: {
			videoId: this.id,
			canonicalBaseUrl: url
		  }
		}
		rootC++;*/
		this.navEnd = apiItem.navigationEndpoint;
		/*this.authorNav = {
		commandMetadata: {
			webCommandMetadata: {
			  url: chanUrl,
			  webPageType: "WEB_PAGE_TYPE_CHANNEL",
			  rootVe: rootC
			}
		  },
		  browseEndpoint: {
			browseId: this.authorId,
			canonicalBaseUrl: chanUrl
		  }
		}*/
		if (
		type == "playlist" ||
		type == "mix"
		) {
			this.itemLink = apiItem.navigationEndpoint.commandMetadata.webCommandMetadata.url;
		} else {
			this.itemLink = "/watch?v=" + this.videoId;
		}
		if (apiItem.badges != null) {
			let PRbadge = 0;
			apiItem.badges.forEach(itemRoot => {
				if (itemRoot.metadataBadgeRenderer) {
					if (PRbadge == 0) {
						this.badge1 = itemRoot.metadataBadgeRenderer.label;
						this.badge1type = itemRoot.metadataBadgeRenderer.style;
					}
					if (PRbadge == 1) {
						this.badge2 = itemRoot.metadataBadgeRenderer.label;
						this.badge2type = itemRoot.metadataBadgeRenderer.style;
					}
				}
				PRbadge++;
			});
		}
	}
}
class ShelfModel {
	title;
	content;
	constructor(shelf) {
		if (shelf.content.title) {
			this.title = shelf.title.runs[0].text;
		}				
	}
}
function doShelf(shelf, PRShelfNo, rootC) {
	//shelfModel = new ShelfModel(shelf);
	let shelfTitle = shelf.title.runs[0].text;
	let shelfVideos = shelf.content.horizontalListRenderer.items;
	let container = $("[js-browse-shelves]");
	let newElem = document.createElement("div");
	newElem.setAttribute("class","emerald-shelf");
	newElem.setAttribute("curr-page","0");
	newElem.innerHTML = `
	<div clas="emerald-shelf-inner">
		<div class="emerald-shelf-title">
			<span js-shelf-title></span>
		</div>
		<div class="emerald-shelf-content">
			<div id="emerald-left-arrow" class="emerald-shelf-arrow">
				<div class="emerald-shelf-arrow-inner">
					<div class="emerald-shelf-arrow-icon">
						<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="style-scope yt-icon">
							<g mirror-in-rtl="" class="style-scope yt-icon">
								<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" class="style-scope yt-icon"></path>
							</g>
						</svg>
					</div>
					<paper-ripple>
					</paper-ripple>
				</div>
			</div>
			<div class="emerald-shelf-content-inner">
				<div class="emerald-shelf-items" js-shelf-content>
				</div>
			</div>
			<div id="emerald-right-arrow" class="emerald-shelf-arrow">
				<div class="emerald-shelf-arrow-inner">
					<div class="emerald-shelf-arrow-icon">
						<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;" class="style-scope yt-icon">
							<g mirror-in-rtl="" class="style-scope yt-icon">
								<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" class="style-scope yt-icon"></path>
							</g>
						</svg>
					</div>
					<paper-ripple>
					</paper-ripple>
				</div>
			</div>
		</div>
	</div>
	`;
	container.insertBefore(newElem, container.children[PRShelfNo]);
	newElem.querySelector("#emerald-left-arrow").addEventListener("click", function() {
		newElem.setAttribute("curr-page","0");
	});
	newElem.querySelector("#emerald-right-arrow").addEventListener("click", function() {
		newElem.setAttribute("curr-page","1");
	});
	newElem.querySelector("[js-shelf-title]").textContent = shelfTitle;
	let PRHTMLItem = 0;
	shelfVideos.forEach(itemRoot => {
		if (itemRoot.compactVideoRenderer) {
			doShelfVideo(itemRoot.compactVideoRenderer, PRHTMLItem, PRShelfNo, rootC);
		}
		rootC = rootC + 2;
		PRHTMLItem++;
	});
}
function doShelfVideo(shelfVideo, PRHTMLItem, PRShelfNo, rootC) {
	let shelfVideoModel = new EmeraldVideoModel(shelfVideo, rootC);
	let container = document.querySelectorAll(".emerald-shelf")[PRShelfNo];
	container = container.querySelector("[js-shelf-content]");
	newElem = document.createElement("a");
	newElem.classList.add("yt-simple-endpoint");
	newElem.classList.add("emerald-grid-video");
	newElem.classList.add("emerald-grid-item");
	//newElem.setAttribute("emerald-item",PRHTMLItem);
	newElem.setAttribute("video-id",shelfVideoModel.id);
	newElem.setAttribute("root-ve",shelfVideoModel.rootVe);
	newElem.setAttribute("href","/watch?v=" + shelfVideoModel.id);
	newElem.innerHTML = `
	<div class="emerald-grid-item-inner">
		<div class="thumbnail">
			<img src="${shelfVideoModel.thumbnail}"></img>
			<div class="time">
				<span>${shelfVideoModel.time}</span>
			</div>
			<div class="progress">
				<div class="progress-inner" style="width: ${shelfVideoModel.progress}%;"></div>
			</div>
			<a id="wl-button" class="overlay-button yt-simple-endpoint">
				<div class="overlay-button-inner">
				</div>
			</a>
		</div>
		<div class="meta">
			<div class="emerald-details-level-1">
				<div class="title" title="${shelfVideoModel.title}">
					<span>${shelfVideoModel.title}</span>
				</div>
			</div>
			<div class="emerald-details-level-2">
				<a class="author yt-simple-endpoint" href="https://www.youtube.com/channel/${shelfVideoModel.authorId}" title="${shelfVideoModel.author}">
					<span>${shelfVideoModel.author}</span>
				</a>
			</div>
			<div class="emerald-details-level-3 flex">
				<div class="view-count">
					<span>${shelfVideoModel.viewCount}</span>
				</div>
				<div class="date">
					<span>${shelfVideoModel.date}</span>
				</div>
			</div>
		</div>
	</div>
	`;
	container.insertBefore(newElem, container.children[PRHTMLItem]);
	if (shelfVideoModel.viewCount == null) {
		newElem.style.display = "none";
	}
	newElem.data = shelfVideoModel.navEnd;
	newElem.querySelector(".author").data = shelfVideoModel.authorNav;
}
function doCompactVideo(purpose, apiElem, PRHTMLItem, type) {
	let emeraldVideoModel = new EmeraldVideoModel(apiElem, type);
	//console.log(emeraldVideoModel);
	if (purpose == "related") {
		container = $("#js-related");
	}
	if (container.querySelector(".emerald-compact-item.last-emerald-item") != null) {
		container.querySelector(".last-emerald-item").classList.remove("last-emerald-item");
	}
	var newElem = document.createElement("a");
	newElem.classList.add("yt-simple-endpoint");
	if (type == "video") {
		newElem.classList.add("emerald-compact-video");
	} else {
		newElem.classList.add("emerald-compact-playlist");
	}
	newElem.classList.add("emerald-compact-item");
	newElem.classList.add("last-emerald-item");
	newElem.setAttribute("emerald-item",PRHTMLItem);
	newElem.setAttribute("video-id",emeraldVideoModel.videoId);
	//newElem.setAttribute("root-ve",emeraldVideoModel.rootVe);
	newElem.setAttribute("href",emeraldVideoModel.itemLink);
	if (type == "video") {
		newElem.innerHTML = `
		<div class="emerald-compact-item-inner flex">
			<div class="thumbnail">
				<img src="${emeraldVideoModel.thumbnail}"></img>
				<div class="time">
					<span>${emeraldVideoModel.time}</span>
				</div>
				<div class="progress" hidden>
					<div class="progress-inner" style="width: ${emeraldVideoModel.progress}%;"></div>
				</div>
				<a id="wl-button" class="overlay-button yt-simple-endpoint">
					<div class="overlay-button-inner">
					</div>
				</a>
			</div>
			<div class="meta">
				<div class="emerald-details-level-1">
					<div class="title" title="${emeraldVideoModel.title}">
						<span>${emeraldVideoModel.title}</span>
					</div>
				</div>
				<div class="emerald-details-level-2 flex-bar">
					<span class="byline">${emeraldLanguageModel.byline}</span>
					<a class="author yt-simple-endpoint" href="https://www.youtube.com/channel/${emeraldVideoModel.authorId}" title="${emeraldVideoModel.author}">
						<span>${emeraldVideoModel.author}</span>
					</a>
				</div>
				<div class="emerald-details-level-3 flex">
					<div class="view-count">
						<span>${emeraldVideoModel.viewCount}</span>
						<span class="view-count-extension" hidden>${emeraldVideoModel.viewCountExtension}</span>
					</div>
					<div class="date" hidden>
						<span>${emeraldVideoModel.date}</span>
					</div>
				</div>
				<div class="emerald-details-level-4 flex">
					<div class="emerald-badges flex">
						<div class="emerald-badge" hidden>
							<span>${emeraldVideoModel.badge1}</span>
						</div>
						<div class="emerald-badge" hidden>
							<span>${emeraldVideoModel.badge2}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;	
	} else {
		newElem.innerHTML = `
		<div class="emerald-compact-item-inner flex">
			<div class="thumbnail yt-simple-endpoint">
				<img src="${emeraldVideoModel.thumbnail}"></img>
				<div class="playlist-panel">
					<div class="playlist-panel-inner">
						<div class="playlist-panel-level-1">
							<span class="video-count">${emeraldVideoModel.videoCount}</span>
						</div>
						<div class="playlist-panel-level-2">
							<span class="videos-text">${emeraldLanguageModel.videos}</span>
						</div>
						<div class="playlist-panel-level-3">
							<span class="icon"></span>
						</div>
					</div>
				</div>
				<div class="play-all-overlay flex-bar">
					<div class="play-all-overlay-inner flex-bar">
						<div class="play-all-overlay-content flex-bar">
							<span class="play-icon"></span>
							<span class="play-all-text">Play all</span>
						</div>
					</div>
				</div>
			</div>
			<div class="meta">
				<div class="emerald-details-level-1">
					<div class="title" title="${emeraldVideoModel.title}">
						<span>${emeraldVideoModel.title}</span>
					</div>
				</div>
				<div class="emerald-details-level-2 flex-bar">
					<span class="byline">${emeraldLanguageModel.byline}</span>
					<div class="author">
						<span>${emeraldVideoModel.author}</span>
					</div>
				</div>
				<div class="emerald-details-level-3 flex">
				</div>
			</div>
		</div>
		`;	
	}
	if (type == "mix") {
		newElem.classList.add("emerald-compact-mix");
		newElem.querySelector(".playlist-panel").classList.add("mix-panel");
	}
	if (
	type == "video" &&
	emeraldVideoModel.badge1 != null
	) {
		newElem.querySelectorAll(".emerald-badge")[0].removeAttribute("hidden");
		if (emeraldVideoModel.badge1type === "BADGE_STYLE_TYPE_LIVE_NOW") {
			newElem.querySelectorAll(".emerald-badge")[0].classList.add("emerald-live-badge");
		}
		if (emeraldVideoModel.badge1type === "BADGE_STYLE_TYPE_YPC") {
			newElem.querySelectorAll(".emerald-badge")[0].classList.add("emerald-green-badge");
		}
	}
	if (
	type == "video" &&
	emeraldVideoModel.badge2 != null
	) {
		newElem.querySelectorAll(".emerald-badge")[1].removeAttribute("hidden");
		if (emeraldVideoModel.badge2type === "BADGE_STYLE_TYPE_LIVE_NOW") {
			newElem.querySelectorAll(".emerald-badge")[1].classList.add("emerald-live-badge");
		}
		if (emeraldVideoModel.badge2type === "BADGE_STYLE_TYPE_YPC") {
			newElem.querySelectorAll(".emerald-badge")[1].classList.add("emerald-green-badge");
		}
	}
	container.insertBefore(newElem, container.children[PRHTMLItem]);
	newElem.data = emeraldVideoModel.navEnd;
	newElem.querySelector(".author").data = emeraldVideoModel.authorNav;
	if (type == "video") {
		if (
		emeraldVideoModel.progress != 0 &&
		emeraldVideoModel.progress != null
		) {
			newElem.querySelector(".progress").removeAttribute("hidden");
		}
		if (emeraldVideoModel.date) {
			newElem.querySelector(".date").removeAttribute("hidden");
		}
		if (emeraldVideoModel.viewCountExtension) {
			newElem.querySelector(".view-count-extension").removeAttribute("hidden");
		}
		let dummyData = {
		  "thumbnailOverlayToggleButtonRenderer": {
			"isToggled": false,
			"untoggledIcon": {
			  "iconType": "WATCH_LATER"
			},
			"toggledIcon": {
			  "iconType": "CHECK"
			},
			"untoggledTooltip": "Watch later",
			"toggledTooltip": "Added",
			"untoggledServiceEndpoint": {
			  "clickTrackingParams": "CIMBEPnnAxgCIhMI0_Po8pOhhAMVmIX_BB3a2Qv2",
			  "commandMetadata": {
				"webCommandMetadata": {
				  "sendPost": true,
				  "apiUrl": "/youtubei/v1/browse/edit_playlist"
				}
			  },
			  "playlistEditEndpoint": {
				"playlistId": "WL",
				"actions": [
				  {
					"addedVideoId": emeraldVideoModel.videoId,
					"action": "ACTION_ADD_VIDEO"
				  }
				]
			  }
			},
			"toggledServiceEndpoint": {
			  "clickTrackingParams": "CIMBEPnnAxgCIhMI0_Po8pOhhAMVmIX_BB3a2Qv2",
			  "commandMetadata": {
				"webCommandMetadata": {
				  "sendPost": true,
				  "apiUrl": "/youtubei/v1/browse/edit_playlist"
				}
			  },
			  "playlistEditEndpoint": {
				"playlistId": "WL",
				"actions": [
				  {
					"action": "ACTION_REMOVE_VIDEO_BY_VIDEO_ID",
					"removedVideoId": emeraldVideoModel.videoId
				  }
				]
			  }
			},
			"untoggledAccessibility": {
			  "accessibilityData": {
				"label": "Watch later"
			  }
			},
			"toggledAccessibility": {
			  "accessibilityData": {
				"label": "Added"
			  }
			},
			"trackingParams": "CIMBEPnnAxgCIhMI0_Po8pOhhAMVmIX_BB3a2Qv2"
		  }
		};
		newElem.querySelector("#wl-button").data = dummyData;
		newElem.querySelector("#wl-button").addEventListener("click", function() {
			if (newElem.querySelector("#wl-button.active") != null) {
				newElem.querySelector("#wl-button").classList.remove("active");
				editPlaylist("WL", "Watch later", "ACTION_REMOVE_VIDEO_BY_VIDEO_ID", "overlayButton", emeraldVideoModel.videoId);
			} else {
				newElem.querySelector("#wl-button").classList.add("active");
				editPlaylist("WL", "Watch later", "ACTION_ADD_VIDEO", "overlayButton", emeraldVideoModel.videoId);
			}
		});
	}
}
function doRichGrid(items, data, PRHTMLItem, c) {
	var PRrelatedCheck = 0;
	if (PRHTMLItem == null) {
		var PRHTMLItem = 0;
	} else if ($(".emerald-compact-item.last-emerald-item") != null) {
		PRHTMLItem = $(".emerald-compact-item.last-emerald-item").getAttribute("emerald-item");
		if (c == "c") {
			PRHTMLItem++;
		}
	}
	//console.log(items);
	//console.log(data);
	items.forEach(itemRoot => {
		if (itemRoot.richItemRenderer) {
			if (itemRoot.richItemRenderer.content.videoRenderer) {
				doCompactVideo("related", itemRoot.richItemRenderer.content.videoRenderer, PRHTMLItem, "video");
				PRHTMLItem++;
			} else if (itemRoot.richItemRenderer.content.playlistRenderer) {
				doCompactVideo("related", itemRoot.richItemRenderer.content.playlistRenderer, PRHTMLItem, "playlist");
				PRHTMLItem++;
			} else if (itemRoot.richItemRenderer.content.radioRenderer) {
				doCompactVideo("related", itemRoot.richItemRenderer.content.radioRenderer, PRHTMLItem, "mix");
				PRHTMLItem++;
			} 
		} else if (itemRoot.compactVideoRenderer) {
			doCompactVideo("related", itemRoot.compactVideoRenderer, PRHTMLItem, "video");
			PRHTMLItem++;
		} else if (itemRoot.compactPlaylistRenderer) {
			doCompactVideo("related", itemRoot.compactPlaylistRenderer, PRHTMLItem, "playlist");
			PRHTMLItem++;
		} else if (itemRoot.compactRadioRenderer) {
			doCompactVideo("related", itemRoot.compactRadioRenderer, PRHTMLItem, "mix");
			PRHTMLItem++;
		} else if (itemRoot.continuationItemRenderer) {
			createLoadMore(itemRoot.continuationItemRenderer.continuationEndpoint.continuationCommand.token, PRHTMLItem);
		}
	});
	if ($("html[use-sidebar-autoplay]") != null) {
		var elm = ".emerald-compact-item[emerald-item='13']";
		waitForElement(elm).then(function(elm) {
			if (canGo != false) {
				var autoplayVideo = getAutoplayVideo(data);
				autoplayVideo.then(function(result) {
					//console.log(result);
					let PRcheck = 0;
					let jsRelated = $("#js-related");
					for (let i = 0; i < 21; i++) {
						if (jsRelated.querySelectorAll(".emerald-compact-video")[PRcheck] != null) {
							if ($(".autoplay-fulfilled") == null) {
								let thing = document.querySelectorAll(".emerald-compact-video")[PRcheck].getAttribute("video-id");
								if (thing == result) {
									$("#js-autoplay").classList.add("autoplay-fulfilled");
									let theHTML = jsRelated.querySelectorAll(".emerald-compact-video")[PRcheck].innerHTML;
									let theData = jsRelated.querySelectorAll(".emerald-compact-video")[PRcheck].data;
									let elem = jsRelated.querySelectorAll(".emerald-compact-video")[PRcheck];
									let authorData = elem.querySelector(".author").data;
									let authorHref = elem.querySelector(".author").getAttribute("href");
									$("#js-autoplay").innerHTML = `
									<a id="emerald-autoplay-video" class="emerald-compact-item emerald-compact-video yt-simple-endpoint">
									</a>
									`;
									$("#js-autoplay a").innerHTML = theHTML;
									$("#js-autoplay a").data = theData;
									$("#js-autoplay .author").data = authorData;
									$("#js-autoplay a").setAttribute("href","/watch?v=" + thing);
									$("#js-autoplay .author").setAttribute("href",authorHref);
									jsRelated.querySelectorAll(".emerald-compact-video")[PRcheck].style.display = "none";
									let dummyData = {
									  "thumbnailOverlayToggleButtonRenderer": {
										"isToggled": false,
										"untoggledIcon": {
										  "iconType": "WATCH_LATER"
										},
										"toggledIcon": {
										  "iconType": "CHECK"
										},
										"untoggledTooltip": "Watch later",
										"toggledTooltip": "Added",
										"untoggledServiceEndpoint": {
										  "clickTrackingParams": "CIMBEPnnAxgCIhMI0_Po8pOhhAMVmIX_BB3a2Qv2",
										  "commandMetadata": {
											"webCommandMetadata": {
											  "sendPost": true,
											  "apiUrl": "/youtubei/v1/browse/edit_playlist"
											}
										  },
										  "playlistEditEndpoint": {
											"playlistId": "WL",
											"actions": [
											  {
												"addedVideoId": thing,
												"action": "ACTION_ADD_VIDEO"
											  }
											]
										  }
										},
										"toggledServiceEndpoint": {
										  "clickTrackingParams": "CIMBEPnnAxgCIhMI0_Po8pOhhAMVmIX_BB3a2Qv2",
										  "commandMetadata": {
											"webCommandMetadata": {
											  "sendPost": true,
											  "apiUrl": "/youtubei/v1/browse/edit_playlist"
											}
										  },
										  "playlistEditEndpoint": {
											"playlistId": "WL",
											"actions": [
											  {
												"action": "ACTION_REMOVE_VIDEO_BY_VIDEO_ID",
												"removedVideoId": thing
											  }
											]
										  }
										},
										"untoggledAccessibility": {
										  "accessibilityData": {
											"label": "Watch later"
										  }
										},
										"toggledAccessibility": {
										  "accessibilityData": {
											"label": "Added"
										  }
										},
										"trackingParams": "CIMBEPnnAxgCIhMI0_Po8pOhhAMVmIX_BB3a2Qv2"
									  }
									};
									$("#emerald-autoplay-video #wl-button").data = dummyData;
									$("#emerald-autoplay-video #wl-button").addEventListener("click", function() {
										if ($("#emerald-autoplay-video #wl-button.active") != null) {
											$("#emerald-autoplay-video #wl-button").classList.remove("active");
											editPlaylist("WL", "Watch later", "ACTION_REMOVE_VIDEO_BY_VIDEO_ID", "overlayButton", thing);
										} else {
											$("#emerald-autoplay-video #wl-button").classList.add("active");
											editPlaylist("WL", "Watch later", "ACTION_ADD_VIDEO", "overlayButton", thing);
										}
									});
								} else {
									PRcheck++;
								}
							}
						} else {
							PRcheck++;
						}
					}
				});
			}
		});
	}
}
