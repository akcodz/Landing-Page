let tl = gsap.timeline()



function time() {
    let a = 0;
    setInterval(function () {
        a = a + Math.floor(Math.random() * 10)
        if (a < 100) {
            document.querySelector(".loading h1").innerHTML = a + "%"
        } else {
            a = 100
            document.querySelector(".loading h1").innerHTML = a + "%"
        }
    }), 200
}

tl.to(".loading h1", {
    dealy: 0.5,
    duration: 1,
    onStart: time()
})

tl.to(".loading", {
    top: "-100vh",
    delay: 0.5,
    duration: 1
})

tl.from("nav Img ,nav .mid , nav button", {
    y: -100,
    duration: 1,
    dealy: 0.5,
    opacity: 0,
    stagger: 0.1
})

tl.from("main .middle h1", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.1
})

tl.from("main>img", {
    scale: 0,
    opacity: 0,
    duration: 1
})

tl.from("main h4", {
    scale: 0,
    opacity: 0
})

tl.to("main h4", {
    y: 30,
    repeat: -1,
    duration: 0.7,
    yoyo: true
})

tl.from(".page2 .heading", {
    y: -100,
    opacity: 0,
    duration: 1
})

tl.from(".page2 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body"
    }
})

