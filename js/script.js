const sr = ScrollReveal({
    distance: '35px',
    duration: 2400,
    reset: true,
});

sr.reveal('.main-img',{delay: 210, origin: 'left'});
sr.reveal('.main-text h2',{delay: 310, origin: 'top'});
sr.reveal('.main-text h4',{delay: 410, origin: 'right'});
sr.reveal('.social',{delay: 210, origin: 'bottom'});

sr.reveal('.button',{delay: 610, origin: 'top'});
