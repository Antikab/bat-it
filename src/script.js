const spotlightButton = document.querySelector('#toggle-spotlight');
const removeMaskButton = document.querySelector('#remove-mask');
const avatar = document.querySelector('#avatar');

const cardContent = document.querySelector('.card-content');
const spotlight = document.querySelector('.spotlight');
const card = document.querySelector('.card');
let spotlightEnabled = false;
const updateSpotlight = (x, y) => {
	spotlight.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 1) 40%)`;
};

document.body.addEventListener('mousemove', (e) => {
	if (!spotlightEnabled) return;
	const x = (e.clientX / window.innerWidth) * 100;
	const y = (e.clientY / window.innerHeight) * 100;
	updateSpotlight(x, y);
	const rect = cardContent.getBoundingClientRect();
	if (
		e.clientX > rect.left &&
		e.clientX < rect.right &&
		e.clientY > rect.top &&
		e.clientY < rect.bottom
	) {
		spotlightButton.classList.add('colored');
		cardContent.classList.add('colored');
		card.classList.add('colored');
	} else {
		spotlightButton.classList.remove('colored');
		cardContent.classList.remove('colored');
		card.classList.remove('colored');
	}
});

document.body.addEventListener('touchmove', (e) => {
	if (!spotlightEnabled) return;

	const touch = e.touches[0];
	const x = (touch.clientX / window.innerWidth) * 100;
	const y = (touch.clientY / window.innerHeight) * 100;
	updateSpotlight(x, y);

	const rect = cardContent.getBoundingClientRect();
	if (
		touch.clientX > rect.left &&
		touch.clientX < rect.right &&
		touch.clientY > rect.top &&
		touch.clientY < rect.bottom
	) {
		spotlightButton.classList.add('colored');
		cardContent.classList.add('colored');
		card.classList.add('colored');
	} else {
		spotlightButton.classList.remove('colored');
		cardContent.classList.remove('colored');
		card.classList.remove('colored');
	}
});

removeMaskButton.addEventListener('click', () => {
	if (avatar.src.includes('bhueyye.jpeg')) {
		avatar.src = 'https://i.imgur.com/ZH1Mtjx.jpeg';
		removeMaskButton.textContent = 'Снять маску';
	} else {
		avatar.src = 'https://i.imgur.com/bhueyye.jpeg';
		removeMaskButton.textContent = 'Надеть маску';
	}
});

spotlightButton.addEventListener('click', () => {
	spotlightEnabled = !spotlightEnabled;
	spotlightButton.setAttribute('aria-pressed', spotlightEnabled);

	if (spotlightEnabled) {
		spotlightButton.textContent = '🦇 Выключить прожектор';
		cardContent.classList.remove('hidden');
		removeMaskButton.classList.remove('colored');
		spotlight.style.background = `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 1) 40%)`;
		spotlightButton.classList.add('active');
	} else {
		spotlightButton.textContent = '🦇 Включить прожектор';
		cardContent.classList.add('hidden');
		cardContent.classList.remove('colored');
		card.classList.remove('colored');
		spotlight.style.background = `radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 1) 100%)`;
		spotlightButton.classList.remove('active');
	}
});

spotlight.style.background = `radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 1) 100%)`;
