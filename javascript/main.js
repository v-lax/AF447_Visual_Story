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
    planes, messageAlert

let activationFunctions = [draw0, draw1, draw2, draw3, draw4,
    draw5, draw6, draw7, draw8, draw9, draw10, draw11, draw12, draw13, draw14, draw15,
    draw16, draw17, draw18, draw19, draw20]

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
    } else if ((response.index >= 13) && (response.index <= 16)) {
        wayPointChart.highlight(2)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)
    } else if ((response.index >= 17) && (response.index <= 20)) {
        wayPointChart.highlight(3)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)
    } else if ((response.index === 21)) {
        wayPointChart.highlight(4)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)

    } else if ((response.index >= 22) && (response.index <= 23)) {
        wayPointChart.highlight(5)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(6)
        wayPointChart.unhighlight(7)

    } else if ((response.index === 24)) {
        wayPointChart.highlight(6)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
        wayPointChart.unhighlight(7)
    } else if ((response.index >= 25)) {
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
            .text('Flight Mode: Normal Law')
    }
}
function draw19() {
    document.getElementById("plane-image").remove();
    planes = new plane()

    d3.select('#ecam-message')
        .text('Flight Mode: Normal Law')
}


function draw20() {
    // d3.select('#play-button').style('opacity', '1')
    // d3.select('#restart-button').style('opacity', '1')

    let tl2 = gsap.timeline()
    tl2.to('#attitude-circle', { duration: 5, rotation: 20, transformOrigin: "50%,50%",repeat: 1, yoyo: true }, 0)
    tl2.to('.pitch-angles', { duration: 5, rotation: 20, transformOrigin: "50%,50%",repeat: 1, yoyo: true }, 0)

    console.log(planes.scene.children[0])
}

function borderColorRed(input) {
    input.style('border-color', 'red')
}

function borderColorWhite(input) {
    input.style('border-color', 'white')
}

init();

// d3.select('#play-button').style('opacity','1')
// d3.select('#restart-button').style('opacity','1')