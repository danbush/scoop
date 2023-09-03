export default function ToggleSettings() {
	document.querySelector('.modal-container').classList.toggle('settings-on')
	document.querySelector('.modal-container').classList.toggle('settings-off')
	document.querySelector('#app-modal').classList.toggle('settings-on')
	document.querySelector('#app-modal').classList.toggle('settings-off')
	document.querySelector('.app-body').classList.toggle('settings-on')
	document.querySelector('.app-body').classList.toggle('settings-off')
	document.querySelector('html').classList.toggle('lock-scroll')
}

export function GoToTop() {
	window.scrollTo(0,0);
}

export function ToggleKeyCommands() {
	document.querySelector('.keyboard-commands').classList.toggle('keyboard-commands-on')
	document.querySelector('.keyboard-commands').classList.toggle('keyboard-commands-off')
	return;
}

document.addEventListener('keyup', function(event) {
	event.preventDefault();  // Prevent any default action
	switch (event.key) {
		case "Escape":
			ToggleSettings();
			break;
		case "t":
			GoToTop();
			break;
		case "?":
			ToggleKeyCommands();
			break;
	}
});