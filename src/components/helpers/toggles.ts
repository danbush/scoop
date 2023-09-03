export default function ToggleSettings() {

	/* 	Note!
			A "non-null assertion operator" is used here to assure the functions that these DOM objects do, in fact, exist. This isn't always the best approach, but since these are pretty low-level elements in our application, should be fine.

			Not necessarily great for the function below, however.
	*/

	document.querySelector('.modal-container')!.classList.toggle('settings-on')
	document.querySelector('.modal-container')!.classList.toggle('settings-off')
	document.querySelector('#app-modal')!.classList.toggle('settings-on')
	document.querySelector('#app-modal')!.classList.toggle('settings-off')
	document.querySelector('.app-body')!.classList.toggle('settings-on')
	document.querySelector('.app-body')!.classList.toggle('settings-off')
	document.querySelector('html')!.classList.toggle('lock-scroll')
}

export function GoToTop() {
	window.scrollTo(0,0);
}

/* 	Note!
		A "non-null assertion operator" is used here too. Not great for this case, since .keyboard-commands MAY not exist.

		Should probably think of a better fix for this down the road.
*/
export function ToggleKeyCommands() {
	document.querySelector('.keyboard-commands')!.classList.toggle('keyboard-commands-on')
	document.querySelector('.keyboard-commands')!.classList.toggle('keyboard-commands-off')
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