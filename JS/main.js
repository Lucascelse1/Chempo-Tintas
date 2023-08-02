const enlace = document.querySelectorAll('a[href=]');//traemos todos los 'a' que tengan href
enlace.addEventListener('click', (e) => {
	e.preventDefault(); // Evita el comportamiento por defecto del enlace
	const destino = document.querySelector(e.target.getAttribute('href')); // Obtiene el destino del enlace
	destino.scrollIntoView({ behavior: 'smooth' }); // Hace scroll al destino de manera suave
});

