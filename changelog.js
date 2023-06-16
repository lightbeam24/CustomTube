function handleChangelog() {
	let changelogHeader = document.querySelector('#header');
	let changelogFirstInstallTip = document.querySelector('#fit');
	let changelogVersion = document.querySelector('#version');
	let version = browser.runtime.getManifest().version;
	if (!changelogHeader) return;
	if (window.location.href.includes('#install')) {
		changelogHeader.innerText = "CustomTube was successfully installed!";
	}
	else if (window.location.href.includes('#check')) {
		changelogHeader.innerText = `CustomTube is currently on version ${version}.`;
	}	else {
		changelogVersion.innerText = `CustomTube has updated to version ${version}!`;
	}
}

handleChangelog();
