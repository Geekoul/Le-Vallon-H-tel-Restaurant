(function () {
	const burger = document.querySelector('.menu-burger');
	const menu   = document.getElementById('menu-2');
	if (!burger || !menu) return;

	burger.addEventListener('click', () => {
		const open = burger.classList.toggle('open');
		menu.classList.toggle('open', open);
		burger.setAttribute('aria-expanded', open ? 'true' : 'false');
		// Optionnel : empêcher le scroll de la page quand le menu est ouvert
		document.documentElement.style.overflow = open ? 'hidden' : '';
	});

	// Fermer si on clique sur un lien
	menu.addEventListener('click', (e) => {
		if (e.target.tagName === 'A') {
			burger.classList.remove('open');
			menu.classList.remove('open');
			burger.setAttribute('aria-expanded', 'false');
			document.documentElement.style.overflow = '';
		}
	});
})();

