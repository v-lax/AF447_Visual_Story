import {wayPoint} from "./waypoints.js"
import {Ecam} from "./ecam.js"
import {sideStick} from "./sidestick.js"
import {altimeter} from "./altimeter.js"
import {attitude} from "./attitude.js"
import {speed} from "./speed.js"
import {animations} from './animation_functions.js'
import {plane} from './threeD.js'


var container = d3.select('main');
var media = d3.select('#media')
var content = d3.select('#content')
var step = d3.select('.step')

var wayPointChart, ecam, sideStickDiagram, altimeterDiagram, attitudeDiagram, speedDiagram,animation,
planes

let activationFunctions = [draw0,draw1,draw2,draw3,draw4,
draw5,draw6,draw7,draw8,draw9,draw10,draw11,draw12,draw13,draw14,
draw15,draw16,draw17,draw18,draw19,draw20,draw21]

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

function createViz(){
    wayPointChart = new wayPoint()
    ecam = new Ecam()
    sideStickDiagram = new sideStick()
    altimeterDiagram = new altimeter()
    attitudeDiagram = new attitude()
    speedDiagram = new speed()
    animation = new animations()
}

function clean(charType){

    if(charType!=='Image'){
        //d3.select('#intro-image').transition().style('opacity',0)
        media.transition().style('opacity',1)
    }
    if(charType!=='Media'){
        console.log(media)
        media.transition().style('opacity',0)
        //d3.select('#intro-image').transition().style('opacity',1)
    }
}

function handleStepEnter(response) {
    if(response.index===1){
        wayPointChart.highlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
    } else if((response.index>=2)&&(response.index<=5)){
        wayPointChart.highlight(1)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
    } else if((response.index>=6)&&(response.index<=12)){
        wayPointChart.highlight(2)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
    }else if((response.index>=13)&&(response.index<=27)){
        wayPointChart.highlight(3)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(4)
        wayPointChart.unhighlight(5)
    }else if((response.index>=28)&&(response.index<=33)){
        wayPointChart.highlight(4)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(5)
    }else if(response.index>=34){
        wayPointChart.highlight(5)
        wayPointChart.unhighlight(0)
        wayPointChart.unhighlight(1)
        wayPointChart.unhighlight(2)
        wayPointChart.unhighlight(3)
        wayPointChart.unhighlight(4)
}

    console.log(response.index)
    activationFunctions[response.index]();
}


function draw0(){
    clean('Media')
    animation.animate0()
}

function draw1(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select("#plane-nose").style('stroke','yellow')
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','blue')
    
}

function draw2(){
    clean('Media')
    animation.animate0()
    borderColorRed(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select("#plane-nose").style('stroke','yellow')
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','blue')
}

function draw3(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#waypoints'))
    borderColorRed(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select("#plane-nose").style('stroke','yellow')
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','blue')
}

function draw4(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorRed(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select("#plane-nose").style('stroke','yellow')
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','blue')
}

function draw5(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorRed(d3.select('#altimeter'))
    d3.select('#plane-nose').style('stroke','yellow')
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','blue')
}

function draw6(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select('#plane-nose').style('stroke','yellow')
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','red')
}

function draw7(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#waypoints'))
    borderColorWhite(d3.select('#flight-display'))
    borderColorWhite(d3.select('#speed-scale'))
    borderColorWhite(d3.select('#altimeter'))
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','blue')
   d3.select('#plane-nose').style('stroke','red')
}

function draw8(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','red')
   d3.select('#plane-nose').style('stroke','yellow')
}

function draw9(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','red')
   d3.select('#plane-nose').style('stroke','yellow')

   animation.noseUpDemo()
}
function draw10(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','red')
   d3.select('#plane-nose').style('stroke','yellow')
   animation.noseDownDemo()
}

function draw11(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','red')
   d3.select('#plane-nose').style('stroke','yellow')
   animation.rotateLeft()

}
function draw12(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#media'))
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','red')
   d3.select('#plane-nose').style('stroke','yellow')
   d3.select('.pitch-angles').selectAll('line').style('stroke-width','1px')
   .style('stroke','white')
   animation.rotateRight()
}

function draw13(){
    clean('Media')
    animation.animate0()
    d3.select('#attitude-indicator').select('circle')
    .style('stroke','blue')
   d3.select('#plane-nose').style('stroke','yellow')
   d3.select('.pitch-angles').selectAll('line').style('stroke-width','3px')
   .style('stroke','red')
   borderColorWhite(d3.select('#animation'))
}

function draw14(){
    clean('Media')
    animation.animate0()
    d3.select('.pitch-angles').selectAll('line').style('stroke-width','1px')
   .style('stroke','white')
   borderColorRed(d3.select('#animation'))
   borderColorWhite(d3.select('#ECAM'))
}

function draw15(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#animation'))
    borderColorWhite(d3.select('#side-stick-left'))
    borderColorWhite(d3.select('#side-stick-right'))
    borderColorRed(d3.select('#ECAM'))
}
function draw16(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#ECAM'))
    borderColorRed(d3.select('#side-stick-left'))
    borderColorRed(d3.select('#side-stick-right'))
    
}

function draw17(){
    clean('Media')
    animation.animate0()
    borderColorWhite(d3.select('#side-stick-left'))
    borderColorWhite(d3.select('#side-stick-right'))

    d3.select('#plane-image').attr('src','../assets/plane.gif')
    d3.select('#media-player').style('text-align','center')
}

function draw18(){
    clean('Media')
    animation.animate0()

    d3.select('#plane-image').attr('src','../assets/lift_gif.gif')
    d3.select('#media-player').style('text-align','center')
}

function draw20(){
    clean('Media')
    animation.animate0()

    d3.select('#plane-image').attr('src','../assets/flight_controls.gif')
    d3.select('#media-player').style('text-align','center')
}

function draw19(){
    clean('Media')
    animation.animate0()

    d3.select('#plane-image').attr('src','../assets/maxresdefault.jpg')
    d3.select('#media-player').style('text-align','center')
}

function draw21(){
    clean('Media')
    //document.getElementById("plane-image").remove();
    //planes = new plane()
}


function borderColorRed(input){
    input.style('border-color','red')
}

function borderColorWhite(input){
    input.style('border-color','white')
}

init();