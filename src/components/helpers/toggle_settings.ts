export default function ToggleSettings() {
	document.querySelector('.modal-container').classList.toggle('settings-on')
	document.querySelector('.modal-container').classList.toggle('settings-off')
	document.querySelector('#app-modal').classList.toggle('settings-on')
	document.querySelector('#app-modal').classList.toggle('settings-off')
	document.querySelector('.app-body').classList.toggle('settings-on')
	document.querySelector('.app-body').classList.toggle('settings-off')
	document.querySelector('html').classList.toggle('lock-scroll')
}