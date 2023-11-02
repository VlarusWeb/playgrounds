const cities = document.querySelectorAll('.card');

cities.forEach(city => {
    city.addEventListener('click', () => {
        cities.forEach(city => {
            city.classList.remove('active');
        })
        city.classList.add('active');
    })
})