document.querySelectorAll('.slider').forEach(slider => {
    let index = 0;
    const slides = slider.querySelectorAll('.slide');
    const track = slider.querySelector('.slides');

    const move = (dir) => {
        index += dir;

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        track.style.transform = `translateX(-${index * 100}%)`;
    };

    slider.querySelector('.left').onclick  = () => move(-1);
    slider.querySelector('.right').onclick = () => move(1);
});

