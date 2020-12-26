import { animate0 } from "./animation_functions.js"
import { noseUpDemo } from "./animation_functions.js"
import { noseDownDemo } from "./animation_functions.js"
import { rotateLeft } from "./animation_functions.js"
import { rotateRight } from "./animation_functions.js"


import { wayPoint } from "./waypoints.js"
import { Ecam } from "./ecam.js"
import { sideStick } from "./sidestick.js"
import { altimeter } from "./altimeter.js"
import { attitude } from "./attitude.js"
import { speed } from "./speed.js"
import { plane } from './threeD.js'
import { flightMode } from './flight-mode.js'


var container = d3.select('main');
var media = d3.select('#media')
var content = d3.select('#content')
var step = d3.select('.step')

var wayPointChart, ecam, sideStickDiagram, altimeterDiagram, attitudeDiagram, speedDiagram,
    planes, messageAlert, div

let activationFunctions = [draw0, draw1, draw2, draw3, draw4,
    draw5, draw6, draw7, draw8, draw9, draw10, draw11, draw12, draw13, draw14, draw15,
    draw16, draw17, draw18, draw19, draw20, draw21, draw22, draw23,draw24,
    draw25,draw26,draw27,draw28,draw29,draw30]

var scroller = scrollama();

// function handleResize() {
// 	// 1. update height of step elements for breathing room between steps
// 	var stepHeight = Math.floor(window.innerHeight * 0.75);
// 	step.style('height', stepHeight + 'px');

// 	// 2. update height of graphic element
// 	var bodyWidth = d3.select('body').node().offsetWidth;

// 	//media
// 		//.style('height', window.innerHeight + 'px');

// 	// 3. update width of chart by subtracting from text width
// 	var chartMargin = 32;
// 	var textWidth = content.node().offsetWidth;
// 	var chartWidth = media.node().offsetWidth - textWidth - chartMargin;
// 	// make the height 1/2 of viewport
// 	var chartHeight = Math.floor(window.innerHeight / 2);

// 	media
// 		.style('width', chartWidth + 'px')
// 		.style('height', chartHeight + 'px');

// 	// 4. tell scrollama to update new element dimensions
// 	scroller.resize();
// }

function init() {

    createViz();
    // 1. call a resize on load to update width/height/position of elements
    //handleResize();

    // 2. setup the scrollama instance
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
        .setup({
            main: 'main', // our outermost scrollytelling element
            media: '#media', // the graphic
            content: '#content', // the step container
            step: '.step', // the step elements
            offset: 0.5, // set the trigger to be 1/2 way down screen
            debug: false, // display the trigger offset for testing
        })
        .onStepEnter(handleStepEnter)
    //.onContainerExit(handleContainerExit);

    // setup resize event
    //window.addEventListener('resize', handleResize);
}

function createViz() {
    wayPointChart = new wayPoint()
    ecam = new Ecam()
    sideStickDiagram = new sideStick()
    altimeterDiagram = new altimeter()
    attitudeDiagram = new attitude()
    speedDiagram = new speed()
    messageAlert = new flightMode()

    div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .attr('id', 'tool-tip')
        .style("opacity", 0);
}

function clean(charType) {

    if (charType !== 'Image') {
        //d3.select('#intro-image').transition().style('opacity',0)
        media.transition().style('opacity', 1)
    }
    if (charType !== 'Media') {
        media.transition().style('opacity', 0)
        //d3.select('#intro-image').transition().style('opacity',1)
    }
}

function handleStepEnter(response) {
    if (response.index === 0) {
        wayPointChart.highlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)
    } else if ((response.index >= 1) && (response.index <= 12)) {
        wayPointChart.highlight(1)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)
    } else if ((response.index >= 13) && (response.index <= 19)) {
        wayPointChart.highlight(2)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)
    } else if ((response.index >= 20) && (response.index <= 23)) {
        wayPointChart.highlight(3)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)
    } else if ((response.index === 24)) {
        wayPointChart.highlight(4)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)

    } else if ((response.index >= 25) && (response.index <= 26)) {
        wayPointChart.highlight(5)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)

    } else if ((response.index === 27)) {
        wayPointChart.highlight(6)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(7)
    } else if ((response.index >= 28)) {
        wayPointChart.highlight(7)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
    }
    console.log(response.direction)
    activationFunctions[response.index](response);
}


function draw0() {
    clean('Media')
    animate0()
}

function draw1() {
    clean('Media')
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select("#plane-nose").style('stroke', 'yellow')
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'blue')

}

function draw2() {
    clean('Media')
    borderColorWhite(d3.select('#waypoints'))
    borderColorRed(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select("#plane-nose").style('stroke', 'yellow')
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'blue')
}


function draw3() {
    clean('Media')
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorRed(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select("#plane-nose").style('stroke', 'yellow')
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'blue')
}

function draw4() {
    clean('Media')

    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorRed(d3.select('#altimeter'))
    d3.select('#plane-nose').style('stroke', 'yellow')
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'blue')
}

function draw5() {
    clean('Media')
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select('#plane-nose').style('stroke', 'yellow')
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'red')
}

function draw6() {
    clean('Media')
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'blue')
    d3.select('#plane-nose').style('stroke', 'red')
}

function draw7() {
    clean('Media')
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'red')
    d3.select('#plane-nose').style('stroke', 'yellow')
}

function draw8() {
    clean('Media')
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'red')
    d3.select('#plane-nose').style('stroke', 'yellow')

    d3.select('#plane-image')
        .attr('src', '../assets/airplane-pitch.gif')
        .style('max-width', '100%')
        .style('max-height', '100%')
        .attr('transfor', 'translate(50,50)')

    noseUpDemo({ paused: false })
    noseDownDemo({ paused: true })
    rotateLeft({ paused: true })
    rotateRight({ paused: true })
}
function draw9() {
    clean('Media')
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'red')
    d3.select('#plane-nose').style('stroke', 'yellow')

    noseUpDemo({ paused: true })
    noseDownDemo({ paused: false })
    rotateLeft({ paused: true })
    rotateRight({ paused: true })
}

function draw10() {
    clean('Media')
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'red')
    d3.select('#plane-nose').style('stroke', 'yellow')
    noseUpDemo({ paused: true })
    noseDownDemo({ paused: true })
    rotateLeft({ paused: false })
    rotateRight({ paused: true })

    d3.select('#plane-image')
        .attr('src', '../assets/airplane-role.gif')
        .style('max-width', '100%')
        .style('max-height', '100%')

}
function draw11() {
    clean('Media')
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'red')
    d3.select('#plane-nose').style('stroke', 'yellow')
    d3.select('.pitch-angles').selectAll('line').style('stroke-width', '1px')
        .style('stroke', 'white')

    noseUpDemo({ paused: true })
    noseDownDemo({ paused: true })
    rotateLeft({ paused: true })
    rotateRight({ paused: false })
}

function draw12() {
    clean('Media')
    d3.select('#attitude-indicator').select('circle')
        .style('stroke', 'blue')
    d3.select('#plane-nose').style('stroke', 'yellow')
    d3.select('.pitch-angles').selectAll('line').style('stroke-width', '3px')
        .style('stroke', 'red')
    borderColorWhite(d3.select('#animation'))

    d3.select('#plane-image')
        .attr('src', '../assets/af447.jpg')
        .style('max-width', '100%')
        .style('max-height', '100%')
}

function draw13() {
    clean('Media')
    d3.select('.pitch-angles').selectAll('line').style('stroke-width', '1px')
        .style('stroke', 'white')
    d3.select('#ecam-message')
        .text('Nominal')
    document.getElementById("plane-image").remove();
    planes = new plane()
}

function draw14() {
    d3.select('#altitude-rect')
        .style('stroke-width', '3px')
        .style('stroke', 'red')

    d3.select('#mach-text')
        .style('opacity', 0)

    d3.select('#mach-rect')
        .style('stroke-width', '0px')
        .style('stroke', 'none')
}

function draw15() {
    d3.select('#altitude-rect')
        .style('stroke-width', '1px')
        .style('stroke', 'yellow')

    d3.select('#mach-text')
        .style('opacity', 1)

    d3.select('#mach-rect')
        .style('stroke-width', '3px')
        .style('stroke', 'red')

}

function draw16() {
    let tl1 = gsap.timeline()
    tl1.to("#grad", 3, { attr: { "y2": "2%" } }, 0)
    tl1.to(".pitch-angles", 3, { y: 10 }, 0)

    d3.select('#mach-rect')
        .style('stroke-width', '0px')
        .style('stroke', 'none')

    d3.select('#ap-rect')
        .style('stroke-width', '0px')
        .style('stroke', 'none')

    d3.select('#ap-text')
        .style('opacity', 0)
}

function draw17(response) {
    d3.select('#ap-rect')
        .style('stroke-width', '2px')
        .style('stroke', 'red')

    d3.select('#ap-text')
        .style('opacity', 1)

    if (response.direction === 'up') {
        document.getElementById("plane-image").remove();
        planes = new plane()
    }
}

function draw18(response) {
    d3.select('#ap-rect')
        .style('stroke-width', '0px')
        .style('stroke', 'none')

    document.getElementById("webGlCanvas").remove();
    d3.select('#media-player')
        .append('img')
        .attr('id', 'plane-image')
    d3.select('#plane-image')
        .attr('src', '../assets/angle_of_attack.png')

    if (response.direction === 'up') {
        d3.select('#ecam-message')
            .text('Nominal')
            .style('border-color', 'white')
            .style('border-width', 'initial')
    }
}
function draw19(response) {
    if (response.direction === 'up') {
        document.getElementById("my-video").remove();
        planes = new plane()
    }
    document.getElementById("plane-image").remove();
    planes = new plane()

    d3.select('#ecam-message')
        .text('Flight Mode: Normal Law')
        .style('border-color', 'red')
        .style('border-width', 'medium')
}


function draw20(response) {
    d3.select('#play-button').style('opacity', '1')
    d3.select('#restart-button').style('opacity', '0')

    d3.select('#ecam-message')
        .text('Flight Mode: Normal Law')
        .style('border-color', 'white')
        .style('border-width', 'initial')

    if (response.direction === 'down') {
        document.getElementById("webGlCanvas").remove();
        d3.select('#media-player')
            .append('video')
            .attr('id', 'my-video')
            .style('max-height', '100%')
            .style('max-width', '100%')
            .append('source')
            .attr('src', '../assets/animation_clips/rotate_20.mp4')
    }

    if (response.direction === 'up') {
        document.getElementById("plane-image").remove();
        d3.select('#media-player')
            .append('video')
            .attr('id', 'my-video')
            .style('max-height', '100%')
            .style('max-width', '100%')
            .append('source')
            .attr('src', '../assets/animation_clips/rotate_20.mp4')

        d3.select("#ap-text")
            .text("AP ON")

        d3.select('#ap-rect')
            .style('stroke', 'none')
    }


    d3.select('#play-button')
        .on('click', function () {
            let tl2 = gsap.timeline()
            tl2.to('#attitude-circle', { duration: 5, rotation: 20, transformOrigin: "50%,50%", repeat: 1, yoyo: true }, 0)
            tl2.to('.pitch-angles', { duration: 5, rotation: 20, transformOrigin: "50%,50%", repeat: 1, yoyo: true }, 0)

            var path = d3.select('#svgRight').append("path")
                .attr("d", 'M 129 97.5 L 50 100 L 129 100')
                .attr("fill", "none")
            //document.getElementById("path-right").remove();
            //document.getElementById("animate-right-circle").remove();
            d3.select('#circle-right')
                .transition()
                .duration(10000)
                .tween("pathTween", function () { return pathTween(path) })
            d3.select("#mach-text")
                .text("MACH .80")

            var vid = document.getElementById("my-video");
            vid.play()

        })


}

function draw21() {

    document.getElementById("my-video").remove();
    document.getElementById("speed-scale-group").remove();

    d3.select('#media-player')
        .append('img')
        .attr('id', 'plane-image')
    d3.select('#plane-image')
        .attr('src', '../assets/pitot_tube.png')

    d3.select("#ap-text")
        .text("AP OFF")

    d3.select('#ap-rect')
        .style('stroke-width', '2px')
        .style('stroke', 'red')

    borderColorRed(d3.select('#speed-scale'))

    d3.select('#speed-svg')
        .append('text')
        .attr('fill', 'white')
        .style('font-family', 'B612')
        .attr('transform', 'translate(28,139)')
        .text('NA')


}

function draw22() {
    d3.select('#ecam-message')
        .text('Flight Mode: Alternate Law')
        .style('border-color', 'red')
        .style('border-width', 'medium')

    d3.select('#ap-rect')
        .style('stroke', 'none')
}

function draw23() {
    d3.select('#play-button').style('opacity', '1')
    d3.select('#restart-button').style('opacity', '0')

    d3.select('#ecam-message')
        .style('border-color', 'white')

    document.getElementById("plane-image").remove();
    d3.select('#media-player')
        .append('video')
        .attr('id', 'my-video')
        .style('max-height', '100%')
        .style('max-width', '100%')
        .append('source')
        .attr('id','vid-source')
        .attr('src', '../assets/animation_clips/stage1.mp4')


    d3.select('#play-button')
        .on('click', function () {
            const tl1 = gsap.timeline()
            tl1.to("#grad", 20, { attr: { "y2": "30%" } }, 0)
            tl1.to(".pitch-angles", 20, { y: 70 }, 0)

            let tl2 = gsap.timeline()
            tl2.to('#attitude-circle', {
                keyframes: [{ rotation: -10, duration: 3 },
                { rotation: 20, duration: 3 },
                { rotation: -30, duration: 3 },
                { rotation: 10, duration: 3 },
                { rotation: -10, duration: 3 },
                { rotation: 1, duration: 2 },
                { rotation: 1, duration: 1 },
                { rotation: -1, duration: 1 }],
                transformOrigin: "50%,50%", yoyo: false
            }, 0)
            tl2.to('.pitch-angles', {
                keyframes: [{ rotation: -10, duration: 3 },
                { rotation: 20, duration: 3 },
                { rotation: -30, duration: 3 },
                { rotation: 10, duration: 3 },
                { rotation: -10, duration: 3 },
                { rotation: 1, duration: 2 },
                { rotation: 1, duration: 1 },
                { rotation: -1, duration: 1 }], transformOrigin: "50%,50%", yoyo: false
            }, 0)

            var Cont = { val: 35000 }, NewVal = 36000;

            TweenLite.to(Cont, 21, {
                val: NewVal, roundProps: "val", onUpdate: function () {
                    d3.select('#altitude-text').node().textContent = Cont.val
                }
            });

            var path = d3.select('#svgRight').append("path")
                .attr("d", 'M 129 97.5 L 50 150 L 200 150 L 129 120 L 50 150 L 200 150 L 50 150 L 129 100 L 129 130 L 230 50 L 50 50 L 200 50 L 50 50 L 100 30 L 129 100')
                .attr("fill", "none")
            //document.getElementById("path-right").remove();
            //document.getElementById("animate-right-circle").remove();
            d3.select('#circle-right')
                .transition()
                .duration(21000)
                .tween("pathTween", function () { return pathTween(path) })
            d3.select("#mach-text")
                .text("")

            var vid = document.getElementById("my-video");
            vid.play()
        })
}

function draw24() {
    document.getElementById("my-video").remove();
    d3.select('#media-player')
        .append('video')
        .attr('id', 'my-video')
        .style('max-height', '100%')
        .style('max-width', '100%')
        .append('source')
        .attr('id','vid-source')
        .attr('src', '../assets/animation_clips/stage2.mp4')

        d3.select('#play-button')
        .on('click', function () {
            const tl1 = gsap.timeline()
            tl1.to("#grad", 23, { attr: { "y2": "20%" } }, 0)
            tl1.to(".pitch-angles", 23, { y: 45 }, 0)

            let tl2 = gsap.timeline()
             tl2.to('#attitude-circle', {
                keyframes: [{ rotation: 5, duration: 5 },
                { rotation: -5, duration: 5 },
                { rotation: 5, duration: 5 },
                { rotation: -1, duration: 5 }],
                transformOrigin: "50%,50%", yoyo: false
            }, 0)
            tl2.to('.pitch-angles', {
                keyframes: [{ rotation: 5, duration: 5 },
                    { rotation: -5, duration: 5 },
                    { rotation: 5, duration: 5 },
                    { rotation: -1, duration: 5 }], transformOrigin: "50%,50%", yoyo: false
            }, 0)

            var Cont = { val: 36000 }, NewVal = 37500;

            TweenLite.to(Cont, 23, {
                val: NewVal, roundProps: "val", onUpdate: function () {
                    d3.select('#altitude-text').node().textContent = Cont.val
                }
            });

            var path = d3.select('#svgRight').append("path")
                .attr("d", 'M 129 97.5 L 170 50 L 100 50 L 0 100 L 220 50 L 220 100 L 129 100 L 0 150 L 0 100 L 220 50 L 220 150 L 100 50 L 128 100')
                .attr("fill", "none")
            //document.getElementById("path-right").remove();
            //document.getElementById("animate-right-circle").remove();
            d3.select('#circle-right')
                .transition()
                .duration(23000)
                .tween("pathTween", function () { return pathTween(path) })
            d3.select("#mach-text")
                .text("")

            var vid = document.getElementById("my-video");
            vid.play()
        })
}

function draw25(){
    document.getElementById("my-video").remove();
    d3.select('#media-player')
        .append('video')
        .attr('id', 'my-video')
        .style('max-height', '100%')
        .style('max-width', '100%')
        .append('source')
        .attr('id','vid-source')
        .attr('src', '../assets/animation_clips/stage3.mp4')

        d3.select('#play-button')
        .on('click', function () {
            const tl1 = gsap.timeline()
            tl1.to("#grad", 15, { attr: { "y2": "30%" } }, 0)
            tl1.to(".pitch-angles", 15, { y: 75 }, 0)

            let tl2 = gsap.timeline()
             tl2.to('#attitude-circle', {
                keyframes:  [{ rotation: -2, duration: 2 },
                    { rotation: 2, duration: 2 },
                    { rotation: 2, duration: 2 },
                    { rotation: -2, duration: 2 },
                    { rotation: -2, duration: 2 },
                    { rotation: 1, duration: 2 },],
                transformOrigin: "50%,50%", yoyo: false
            }, 0)
            tl2.to('.pitch-angles', {
                keyframes: [{ rotation: -2, duration: 2 },
                    { rotation: 2, duration: 2 },
                    { rotation: 2, duration: 2 },
                    { rotation: -2, duration: 2 },
                    { rotation: -2, duration: 2 },
                    { rotation: 1, duration: 2 },], transformOrigin: "50%,50%", yoyo: false
            }, 0)

            var Cont = { val: 37500 }, NewVal = 37800;

            TweenLite.to(Cont, 15, {
                val: NewVal, roundProps: "val", onUpdate: function () {
                    d3.select('#altitude-text').node().textContent = Cont.val
                }
            });

            var path = d3.select('#svgRight').append("path")
                .attr("d", 'M 129 97.5 L 129 150 L 70 150 L 129 150 L 200 150 L 200 50 L 125 50 L 129 100 L 75 100 L 75 150 L 125 150 L 129 100')
                .attr("fill", "none")
        
            d3.select('#circle-right')
                .transition()
                .duration(15000)
                .tween("pathTween", function () { return pathTween(path) })
            d3.select("#mach-text")
                .text("")

            var vid = document.getElementById("my-video");
            vid.play()
        })
}

function borderColorRed(input) {
    input.style('border-color', 'red')
}

function borderColorWhite(input) {
    input.style('border-color', 'white')
}

function draw26(){
    document.getElementById("my-video").remove();
    d3.select('#media-player')
        .append('video')
        .attr('id', 'my-video')
        .style('max-height', '100%')
        .style('max-width', '100%')
        .append('source')
        .attr('id','vid-source')
        .attr('src', '../assets/animation_clips/stage4.mp4')

        d3.select('#play-button')
        .on('click', function () {
            const tl1 = gsap.timeline()
            tl1.to("#grad",{keyframes:[{ attr: { "y2": "20%" }, duration:5 },
            { attr: { "y2": "30%" }, duration:5 },
            { attr: { "y2": "20%" }, duration:5 },
            { attr: { "y2": "30%" }, duration:5 },
            { attr: { "y2": "20%" }, duration:5 }]}, 0)
            tl1.to(".pitch-angles",{keyframes:[{ y: 40, duration:5 },
                { y: 75, duration:5 },
                { y: 40, duration:5 },
                { y: 75, duration:5 },
                { y: 45, duration:5 }]}, 0)

            let tl2 = gsap.timeline()
             tl2.to('#attitude-circle', {
                keyframes:  [{ rotation: -2, duration: 2 },
                    { rotation: 2, duration: 2 },
                    { rotation: 2, duration: 2 },
                    { rotation: -2, duration: 2 },
                    { rotation: -20, duration: 22 },],
                transformOrigin: "50%,50%", yoyo: false
            }, 0)
            tl2.to('.pitch-angles', {
                keyframes: [{ rotation: -2, duration: 2 },
                    { rotation: 2, duration: 2 },
                    { rotation: 2, duration: 2 },
                    { rotation: -2, duration: 2 },
                    { rotation: -20, duration: 22 }], transformOrigin: "50%,50%", yoyo: false
            }, 0)

            var Cont = { val: 37800 }, NewVal = 36280;

            TweenLite.to(Cont, 30, {
                val: NewVal, roundProps: "val", onUpdate: function () {
                    d3.select('#altitude-text').node().textContent = Cont.val
                }
            });

            var path = d3.select('#svgRight').append("path")
                .attr("d", 'M 129 97.5 L 50 130 L 50 170 L 50 100 L 129 100 L 220 100 L 129 100 L 129 150 L 200 170 L 129 100 L 129 150 L 50 150 L 129 100 L 129 150 L 129 100 L 50 100 L 129 100 L 50 100 L 129 100 L 50 150')
                .attr("fill", "none")
        
            d3.select('#circle-right')
                .transition()
                .duration(30000)
                .tween("pathTween", function () { return pathTween(path) })
            d3.select("#mach-text")
                .text("")

            var vid = document.getElementById("my-video");
            vid.play()
        })
}

function draw27(){
    document.getElementById("my-video").remove();
    d3.select('#media-player')
        .append('video')
        .attr('id', 'my-video')
        .style('max-height', '100%')
        .style('max-width', '100%')
        .append('source')
        .attr('id','vid-source')
        .attr('src', '../assets/animation_clips/stage5.mp4')

        d3.select('#play-button')
        .on('click', function () {
            const tl1 = gsap.timeline()
            tl1.to("#grad",{keyframes:[{ attr: { "y2": "30%" }, duration:5 },
            { attr: { "y2": "31%" }, duration:5 },
            { attr: { "y2": "30%" }, duration:5 },
            { attr: { "y2": "0%" }, duration:5 },
            { attr: { "y2": "-20%"}, duration:5 },
            { attr: { "y2": "0%"}, duration:5 },
            { attr: { "y2": "-20%"}, duration:5 }]}, 0)
            tl1.to(".pitch-angles",{keyframes:[{ y: 70, duration:5 },
                { y: 75, duration:5 },
                { y: 0, duration:5 },
                { y: -130, duration:5 },
                { y: 0, duration:5 },
                { y: -130, duration:5 }]}, 0)

            let tl2 = gsap.timeline()
             tl2.to('#attitude-circle', {
                keyframes:  [{ rotation: 5, duration: 5 },
                    { rotation: -3, duration: 5 },
                    { rotation: 5, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 2, duration: 5 },
                    { rotation: -2, duration: 5 }],
                transformOrigin: "50%,50%", yoyo: false
            }, 0)
            tl2.to('.pitch-angles', {
                keyframes: [{ rotation: 5, duration: 5 },
                    { rotation: -3, duration: 5 },
                    { rotation: 5, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 2, duration: 5 },
                    { rotation: 2, duration: 5 }], transformOrigin: "50%,50%", yoyo: false
            }, 0)

            var Cont = { val: 36280 }, NewVal = 28300;

            TweenLite.to(Cont, 34, {
                val: NewVal, roundProps: "val", onUpdate: function () {
                    d3.select('#altitude-text').node().textContent = Cont.val
                }
            });

            var pathR = d3.select('#svgRight').append("path")
                .attr("d", 'M 50 150 L 0 180 L 0 200 L 0 200 L 0 200 L 0 200 L 0 200 L 0 180 L 50 180 L 0 180')
                .attr("fill", "none")

            var pathL = d3.select('#svgLeft').append("path")
                .attr("d", 'M 129 97.5 L 0 100 L 129 100 L 0 100 L 129 100')
                .attr("fill", "none")
        
            d3.select('#circle-right')
                .transition()
                .duration(34000)
                .tween("pathTween", function () { return pathTween(pathR) })
            d3.select('#left-circle')
                .transition()
                .duration(5000)
                .tween("pathTween", function () { return pathTween(pathL) })
            d3.select("#mach-text")
                .text("")

            var vid = document.getElementById("my-video");
            vid.play()
        })
}

function draw28(){
    document.getElementById("my-video").remove();
    d3.select('#media-player')
        .append('video')
        .attr('id', 'my-video')
        .style('max-height', '100%')
        .style('max-width', '100%')
        .append('source')
        .attr('id','vid-source')
        .attr('src', '../assets/animation_clips/stage6.mp4')

        d3.select('#play-button')
        .on('click', function () {
            const tl1 = gsap.timeline()
            tl1.to("#grad",{keyframes:[{ attr: { "y2": "30%" }, duration:10 },
            { attr: { "y2": "31%" }, duration:5 },
            { attr: { "y2": "33%" }, duration:5 },
            { attr: { "y2": "0%" }, duration:5 }]}, 0)
            tl1.to(".pitch-angles",{keyframes:[{ y: 80, duration:10 },
                { y: 5, duration:5 },
                { y: 7, duration:5 },
                { y: -7, duration:5 }]}, 0)

            let tl2 = gsap.timeline()
             tl2.to('#attitude-circle', {
                keyframes:  [{ rotation: -2, duration: 3 },
                    { rotation: 3, duration: 3 },
                    { rotation: -2, duration: 3 },
                    { rotation: 2, duration: 3 },
                    { rotation: 2, duration: 3 },
                    { rotation: -2, duration: 3 },
                    { rotation: 2, duration: 3 },
                    { rotation: 2, duration: 3 },
                    { rotation: -2, duration: 3 },
                    { rotation: 2, duration: 2 }],
                transformOrigin: "50%,50%", yoyo: false
            }, 0)
            tl2.to('.pitch-angles', {
                keyframes: [{ rotation: -2, duration: 3 },
                    { rotation: 3, duration: 3 },
                    { rotation: -2, duration: 3 },
                    { rotation: 2, duration: 3 },
                    { rotation: 2, duration: 3 },
                    { rotation: -2, duration: 3 },
                    { rotation: 2, duration: 3 },
                    { rotation: 2, duration: 3 },
                    { rotation: -2, duration: 3 },
                    { rotation: 2, duration: 2 }], transformOrigin: "50%,50%", yoyo: false
            }, 0)

            var Cont = { val: 28300 }, NewVal = 20300;

            TweenLite.to(Cont, 29, {
                val: NewVal, roundProps: "val", onUpdate: function () {
                    d3.select('#altitude-text').node().textContent = Cont.val
                }
            });

            var pathR = d3.select('#svgRight').append("path")
                .attr("d", 'M 0 180 L 0 100 L 129 100 L 240 100 L 0 100 L 0 150 L 240 150 L 0 180 L 0 100 L 0 180 L 240 30 L 0 100 L 240 100 L 129 100')
                .attr("fill", "none")

            var pathL = d3.select('#svgLeft').append("path")
                .attr("d", 'M 129 97.5 L 129 50 L 129 100')
                .attr("fill", "none")
        
            d3.select('#circle-right')
                .transition()
                .duration(34000)
                .tween("pathTween", function () { return pathTween(pathR) })
            d3.select('#left-circle')
                .transition()
                .duration(9000)
                .tween("pathTween", function () { return pathTween(pathL) })
            d3.select("#mach-text")
                .text("")

            var vid = document.getElementById("my-video");
            vid.play()
        })
}

function draw29(){
    document.getElementById("my-video").remove();
    d3.select('#media-player')
        .append('video')
        .attr('id', 'my-video')
        .style('max-height', '100%')
        .style('max-width', '100%')
        .append('source')
        .attr('id','vid-source')
        .attr('src', '../assets/animation_clips/stage7.mp4')

        d3.select('#play-button')
        .on('click', function () {
            const tl1 = gsap.timeline()
            tl1.to("#grad",{keyframes:[{ attr: { "y2": "5%" }, duration:10 },
            { attr: { "y2": "0%" }, duration:5 },
            { attr: { "y2": "-5%" }, duration:5 },
            { attr: { "y2": "-3%" }, duration:5 },
            { attr: { "y2": "30%" }, duration:5 },
            { attr: { "y2": "27%" }, duration:5 }]}, 0)
            tl1.to(".pitch-angles",{keyframes:[{ y: 5, duration:10 },
                { y: -5, duration:5 },
                { y: -7, duration:5 },
                { y: 5, duration:5 },
                { y: 70, duration:5 },
                { y: 50, duration:5 }]}, 0)

            let tl2 = gsap.timeline()
             tl2.to('#attitude-circle', {
                keyframes:  [{ rotation: -10, duration: 5 },
                    { rotation: 3, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 5, duration: 5 },
                    { rotation: -20, duration: 5 },
                    { rotation: 2, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 2, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 2, duration: 2 }],
                transformOrigin: "50%,50%", yoyo: false
            }, 0)
            tl2.to('.pitch-angles', {
                keyframes: [{ rotation: -10, duration: 5 },
                    { rotation: 3, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 5, duration: 5 },
                    { rotation: -20, duration: 5 },
                    { rotation: 2, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 2, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 2, duration: 2 }], transformOrigin: "50%,50%", yoyo: false
            }, 0)

            var Cont = { val: 20300 }, NewVal = 10600;

            TweenLite.to(Cont, 47, {
                val: NewVal, roundProps: "val", onUpdate: function () {
                    d3.select('#altitude-text').node().textContent = Cont.val
                }
            });

            var pathR = d3.select('#svgRight').append("path")
                .attr("d", 'M 129 97.5 L 240 100 L 20 100 L 20 150 L 20 97 L 20 125 L 230 100 L 20 100 L 129 100 L 129 150 L 20 150 L 129 150 L 200 150 L 129 100 ')
                .attr("fill", "none")

            var pathL = d3.select('#svgLeft').append("path")
                .attr("d", 'M 129 97.5 L 0 100 L 129 100 L 0 100 L 150 100')
                .attr("fill", "none")
        
            d3.select('#circle-right')
                .transition()
                .duration(47000)
                .tween("pathTween", function () { return pathTween(pathR) })
            d3.select('#left-circle')
                .transition()
                .duration(9000)
                .tween("pathTween", function () { return pathTween(pathL) })
            d3.select("#mach-text")
                .text("")

            var vid = document.getElementById("my-video");
            vid.play()
        })
}

function draw30(){
    document.getElementById("my-video").remove();
    d3.select('#media-player')
        .append('video')
        .attr('id', 'my-video')
        .style('max-height', '100%')
        .style('max-width', '100%')
        .append('source')
        .attr('id','vid-source')
        .attr('src', '../assets/animation_clips/stage8.mp4')

        d3.select('#play-button')
        .on('click', function () {
            const tl1 = gsap.timeline()
            tl1.to("#grad",{keyframes:[{ attr: { "y2": "5%" }, duration:10 },
            { attr: { "y2": "0%" }, duration:5 },
            { attr: { "y2": "-5%" }, duration:5 },
            { attr: { "y2": "-3%" }, duration:5 },
            { attr: { "y2": "30%" }, duration:5 },
            { attr: { "y2": "27%" }, duration:5 }]}, 0)
            tl1.to(".pitch-angles",{keyframes:[{ y: 5, duration:10 },
                { y: -5, duration:5 },
                { y: -7, duration:5 },
                { y: 5, duration:5 },
                { y: 70, duration:5 },
                { y: 50, duration:5 }]}, 0)

            let tl2 = gsap.timeline()
             tl2.to('#attitude-circle', {
                keyframes:  [{ rotation: -10, duration: 5 },
                    { rotation: 3, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 5, duration: 5 },
                    { rotation: -20, duration: 5 },
                    { rotation: 10, duration: 5 },
                    { rotation: -20, duration: 5 },
                    { rotation: 10, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 2, duration: 2 }],
                transformOrigin: "50%,50%", yoyo: false
            }, 0)
            tl2.to('.pitch-angles', {
                keyframes: [{ rotation: -10, duration: 5 },
                    { rotation: 3, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 5, duration: 5 },
                    { rotation: -20, duration: 5 },
                    { rotation: 10, duration: 5 },
                    { rotation: -20, duration: 5 },
                    { rotation: 10, duration: 5 },
                    { rotation: -2, duration: 5 },
                    { rotation: 2, duration: 2 }], transformOrigin: "50%,50%", yoyo: false
            }, 0)

            var Cont = { val: 10600 }, NewVal = 0;

            TweenLite.to(Cont, 60, {
                val: NewVal, roundProps: "val", onUpdate: function () {
                    d3.select('#altitude-text').node().textContent = Cont.val
                }
            });

            var pathR = d3.select('#svgRight').append("path")
                .attr("d", 'M 129 97.5 L 0 100 L 150 100 L 230 100 L 129 100 L 129 150 L 0 150 L 50 150 L 150 30 L 129 100 L 0 150 L 50 120 L 0 150 L 150 30 L 129 150')
                .attr("fill", "none")

            var pathL = d3.select('#svgLeft').append("path")
                .attr("d", 'M 129 97.5 L 100 120 L 129 100 L 129 30 L 129 100 L 130 30 L 100 50 L 50 50 L 105 50 L 40 50 L 129 100 L 129 150 L 200 150 L 129 170 L 200 100 L 200 50 L 129 170 L 250 150')
                .attr("fill", "none")
        
            d3.select('#circle-right')
                .transition()
                .duration(60000)
                .tween("pathTween", function () { return pathTween(pathR) })
            d3.select('#left-circle')
                .transition()
                .duration(60000)
                .tween("pathTween", function () { return pathTween(pathL) })
            d3.select("#mach-text")
                .text("")

            var vid = document.getElementById("my-video");
            vid.play()
        })
}

init();

d3.select("#flight-display")
    .on("mouseover", function (d) {
        div.transition()
            .duration(200)
            .style("opacity", 1);
        div.html('This is the Pilot Flight Display (or PFD for short). It is what a pilot uses to navigate in low visibility.')
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        div.append('img')
            .style('max-width', '100%')
            .style('max-height', '100%')
            .style('text-align', 'center')
            .attr('src', '../assets/pfd.png')
    })
    .on("mouseout", function (d) {
        div.transition()
            .duration(500)
            .style("opacity", 0);
    });

d3.select("#waypoints")
    .on("mouseover", function (d) {
        div.transition()
            .duration(200)
            .style("opacity", 1);
        div.html(`These are called waypoints. A pilot uses 
        these as checkpoints to communicate their progress with 
        air traffice control. We will use it to visualize your
        progress through out the story`)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        div.append('img')
            .style('max-width', '100%')
            .style('max-height', '100%')
            .style('text-align', 'center')
            .attr('src', '../assets/waypoints.png')
    })
    .on("mouseout", function (d) {
        div.transition()
            .duration(500)
            .style("opacity", 0);
    });

d3.select("#side-stick-left")
    .on("mouseover", function (d) {
        div.transition()
            .duration(200)
            .style("opacity", 1);
        div.html(`This visualizes the movement of the pilot's
        side stick that is sitting on the left side of the cockpit. 
        In this case, this side stick belongs to David Robert, the pilot 
        monitoring all of the displays`)
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        div.append('img')
            .style('max-width', '100%')
            .style('max-height', '100%')
            .style('text-align', 'center')
            .attr('src', '../assets/db.JPG')
    })
    .on("mouseout", function (d) {
        div.transition()
            .duration(500)
            .style("opacity", 0);
    });

d3.select("#side-stick-right")
    .on("mouseover", function (d) {
        div.transition()
            .duration(200)
            .style("opacity", 1);
        div.html(`This visualizes the movement of the pilot's
        side stick that is sitting on the right side of the cockpit. 
        In this case, this side stick belongs to Cedric Bonin, the main pilot
        flying.`)
            .style("left", (d3.event.pageX - 200) + "px")
            .style("top", (d3.event.pageY - 200) + "px");
        div.append('img')
            .style('max-width', '100%')
            .style('max-height', '100%')
            .style('text-align', 'center')
            .attr('src', '../assets/cb.jpg')
    })
    .on("mouseout", function (d) {
        div.transition()
            .duration(500)
            .style("opacity", 0);
    });

d3.select("#ECAM")
    .on("mouseover", function (d) {
        div.transition()
            .duration(200)
            .style("opacity", 1);
        div.html(`This is the ECAM message Alert also know as the 
        Electronic Centralized Aircraft Monitor. It 
        will simply display any important message for the pilot.
        We'll use it for the same purposes.`)
            .style("left", (d3.event.pageX - 200) + "px")
            .style("top", (d3.event.pageY - 200) + "px");
    })
    .on("mouseout", function (d) {
        div.transition()
            .duration(500)
            .style("opacity", 0);
    });

function pathTween(path) {
    var length = path.node().getTotalLength(); // Get the length of the path
    var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length
    return function (t) {
        var point = path.node().getPointAtLength(r(t)); // Get the next point along the path
        d3.select(this) // Select the circle
            .attr("cx", point.x) // Set the cx
            .attr("cy", point.y) // Set the cy
    }
}


// d3.select('#play-button').style('opacity','1')
// d3.select('#restart-button').style('opacity','1')