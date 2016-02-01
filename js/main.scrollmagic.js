$(document).ready(function(){

    function t(a) {
        $(document).find(a).css("visibility", "visible")
    }

    var controller = new ScrollMagic.Controller();

    var Z = new TimelineMax({
        delay: 23
    });
    Z.to("#tracesvg path#p1", 7, {
        onStart: t,
        onStartParams: ["path#p1"],
        strokeDashoffset: 0,
        ease: Linear.easeNone
    }).to("#tracesvg path#p2", 15, {
        onStart: t,
        onStartParams: ["path#p2"],
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        delay: 1.5
    }).to("#tracesvg path#p3", 21, {
        onStart: t,
        onStartParams: ["path#p3"],
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        delay: 1.5
    }).to("#tracesvg path#p4", 12, {
        onStart: t,
        onStartParams: ["path#p4"],
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        delay: 1.5
    }).to("#tracesvg path#p5", 10, {
        onStart: t,
        onStartParams: ["path#p5"],
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        delay: 1.5
    }).to("#tracesvg path#p6", 9, {
        onStart: t,
        onStartParams: ["path#p6"],
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        delay: 1.5
    }).to("#tracesvg path#p7", 5, {
        onStart: t,
        onStartParams: ["path#p7"],
        strokeDashoffset: 0,
        ease: Linear.easeNone,
        delay: 1.5
    });

    var K = new TimelineMax({
        delay: 24
    });
    K.add([TweenMax.fromTo(".icon_university", 5, {
        scale: 0.5,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        ease: Power1.easeInOut,
        delay: 1
    }), TweenMax.fromTo(".icon_office", 5, {
        scale: 0.2,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        ease: Power1.easeInOut,
        delay: 21
    }), TweenMax.fromTo(".icon_casual", 5, {
        scale: 0,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        ease: Power1.easeInOut,
        delay: 41
    })]);

    var V = (new TimelineMax).add([Z, K]);
    sceneSection6 = new ScrollMagic.Scene({
        triggerElement: ".FAPE_tendencias2016_howuse_content",
        triggerHook: "onEnter",
        duration: "3000px"
    }).setTween(V).addTo(controller);


    // activewear

   
});