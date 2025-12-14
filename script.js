const btn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		btn.classList.remove('hidden');
		btn.classList.add('flex');
	} else {
		btn.classList.add('hidden');
		btn.classList.remove('flex');
	}
});

btn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
