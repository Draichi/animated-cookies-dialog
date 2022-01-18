const timeline = gsap.timeline({ defaults: { duration: 0.75, ease: 'power1.out' } })

timeline.fromTo('.cookie-container', { scale: 0 }, { scale: 1, ease: 'elastic.out(1, 0.4)', duration: 1.5 })
timeline.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45deg' }, { opacity: 1, x: 0, rotation: '0deg' }, '<50%')
timeline.fromTo('.text', { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, '<')

timeline.fromTo('.cookie', {y: 0, rotation: '0deg'}, {y: -20, rotation: '-20deg', yoyo: true, repeat: -1})
timeline.fromTo('#crumbs', {y: 0}, {y: -20, yoyo: true, repeat: -1}, '<')


const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.cookie-container', { opacity: 0, y: 100, ease: 'power1.out', duration: '0.75' })
})
