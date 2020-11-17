import {wayPoint} from "./waypoints.js"
import {Ecam} from "./ecam.js"
import {sideStick} from "./sidestick.js"
import {altimeter} from "./altimeter.js"
import {attitude} from "./attitude.js"
import {speed} from "./speed.js"


var container = d3.select('main');
var media = d3.select('#media')
var content = d3.select('#content')
var step = d3.select('.step')

var wayPointChart, ecam, sideStickDiagram, altimeterDiagram, attitudeDiagram, speedDiagram

let activationFunctions = [draw0,draw1,draw2,draw2]

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
			debug: true, // display the trigger offset for testing
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
}

function clean(charType){

    if(charType!=='Image'){
        d3.select('#intro-image').transition().style('opacity',0)
        media.transition().style('opacity',1)
    }
    if(charType!=='Media'){
        console.log(media)
        media.transition().style('opacity',0)
        d3.select('#intro-image').transition().style('opacity',1)
    }
}

function handleStepEnter(response) {
    console.log(response.index)
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

    activationFunctions[response.index]();
}

function draw0(){
    clean('Image')
}

function draw1(){
    clean('Media')
}

function draw2(){
    clearInterval('Media')
    console.log('trigger 2')
}




init();