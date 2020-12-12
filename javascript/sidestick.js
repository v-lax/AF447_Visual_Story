class sideStick{
    constructor(){
        this.ssrWidth = d3.select('#side-stick-right')._groups[0][0].clientWidth
        this.ssrHeight = d3.select('#side-stick-right')._groups[0][0].clientHeight
        
        this.sslWidth = d3.select('#side-stick-left')._groups[0][0].clientWidth
        this.sslHeight = d3.select('#side-stick-left')._groups[0][0].clientHeight
        
        this.svgLeft = d3.select('#side-stick-left')
                          .append('svg')
                          .attr('id','svgLeft')
                          .attr('width',this.sslWidth)
                          .attr('height',this.sslHeight)
                          

        this.svgRight = d3.select('#side-stick-right')
        .append('svg')
        .attr('id','svgRight')
        .attr('width',this.ssrWidth)
        .attr('height',this.ssrHeight)

        this.redRectWidth = this.ssrWidth*.75
        this.orangeRectWidth = this.redRectWidth*.75
        this.blueRectWidth = this.redRectWidth*.50
        this.greenRectWidth = this.redRectWidth*.25

        this.redRectHeight = this.ssrHeight*.75
        this.orangeRectHeight = this.redRectHeight*.75
        this.blueRectHeight = this.redRectHeight*.50
        this.greenRectHeight = this.redRectHeight*.25

        this.redRectX=(this.sslWidth-(this.redRectWidth))/2
        this.orangeRectX=(this.sslWidth-(this.orangeRectWidth))/2
        this.blueRectX=(this.sslWidth-(this.blueRectWidth))/2
        this.greenRectX=(this.sslWidth-(this.greenRectWidth))/2
        
        this.redRectY=(this.sslHeight-(this.redRectHeight))/2
        this.orangeRectY=(this.sslHeight-(this.orangeRectHeight))/2
        this.blueRectY=(this.sslHeight-(this.blueRectHeight))/2
        this.greenRectY=(this.sslHeight-(this.greenRectHeight))/2
        
        
        this.svgLeft.append('rect')
                    .attr('width',this.redRectWidth)
                    .attr('height',this.redRectHeight)
                    .attr('x',this.redRectX)
                    .attr('y',this.redRectY)
                    .attr('fill','#fa7575')
            
        this.svgLeft.append('rect')
                    .attr('width',this.orangeRectWidth)
                    .attr('height',this.orangeRectHeight)
                    .attr('x',this.orangeRectX)
                    .attr('y',this.orangeRectY)
                    .attr('fill','#ffbb6e')
                
        this.svgLeft.append('rect')
                    .attr('width',this.blueRectWidth)
                    .attr('height',this.blueRectHeight)
                    .attr('fill','#8291ff')
                    .attr('x',this.blueRectX)
                    .attr('y',this.blueRectY)
                    
        this.svgLeft.append('rect')
                    .attr('width',this.greenRectWidth)
                    .attr('height',this.greenRectHeight)
                    .attr('x',this.greenRectX)
                    .attr('y',this.greenRectY)
                    .attr('fill','#82ff9b')
        
        
        this.svgLeft.append('text')
                    .attr('x',this.redRectX)
                    .attr('y',this.redRectY+12)
                    .attr('fill','black')
                    .text("100%") 
        
        this.svgLeft.append('text')
                    .attr('x',this.orangeRectX)
                    .attr('y',this.orangeRectY+12)
                    .attr('fill','black')
                    .text("75%") 
        
        this.svgLeft.append('text')
                    .attr('x',this.blueRectX)
                    .attr('y',this.blueRectY+12)
                    .attr('fill','black')
                    .text("50%") 
        
        
        this.svgLeft.append('text')
                    .attr('x',this.greenRectX)
                    .attr('y',this.greenRectY+12)
                    .attr('fill','black')
                    .text("25%")
                    
        this.svgLeft.append('circle')
                    .attr('id','left-circle')
                    .attr('cx',this.sslWidth/2)
                    .attr('cy',this.sslHeight/2)
                    .attr('r','10px')
                    .attr('fill','#383838')
        
        this.svgLeft.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", '2px')
                    .attr("x1", (this.sslWidth/2))
                    .attr("y1", 0)
                    .attr("x2", this.sslWidth/2)
                    .attr("y2", this.sslHeight);
        this.svgLeft.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", '2px')
                    .attr("x1", 0)
                    .attr("y1", this.sslHeight/2)
                    .attr("x2", this.sslWidth)
                    .attr("y2", this.sslHeight/2);

        this.svgRight.append('rect')
                    .attr('width',this.redRectWidth)
                    .attr('height',this.redRectHeight)
                    .attr('x',this.redRectX)
                    .attr('y',this.redRectY)
                    .attr('fill','#fa7575')

        this.svgRight.append('rect')
                    .attr('width',this.orangeRectWidth)
                    .attr('height',this.orangeRectHeight)
                    .attr('x',this.orangeRectX)
                    .attr('y',this.orangeRectY)
                    .attr('fill','#ffbb6e')
                
        this.svgRight.append('rect')
                    .attr('width',this.blueRectWidth)
                    .attr('height',this.blueRectHeight)
                    .attr('fill','#8291ff')
                    .attr('x',this.blueRectX)
                    .attr('y',this.blueRectY)
                    
        this.svgRight.append('rect')
                    .attr('width',this.greenRectWidth)
                    .attr('height',this.greenRectHeight)
                    .attr('x',this.greenRectX)
                    .attr('y',this.greenRectY)
                    .attr('fill','#82ff9b')
        
        
        this.svgRight.append('text')
                    .attr('x',this.redRectX)
                    .attr('y',this.redRectY+12)
                    .attr('fill','black')
                    .text("100%") 
        
        this.svgRight.append('text')
                    .attr('x',this.orangeRectX)
                    .attr('y',this.orangeRectY+12)
                    .attr('fill','black')
                    .text("75%") 
        
        this.svgRight.append('text')
                    .attr('x',this.blueRectX)
                    .attr('y',this.blueRectY+12)
                    .attr('fill','black')
                    .text("50%") 
        
        
        this.svgRight.append('text')
                    .attr('x',this.greenRectX)
                    .attr('y',this.greenRectY+12)
                    .attr('fill','black')
                    .text("25%")
                    
        this.svgRight.append('circle')
                    .attr('cx',this.ssrWidth/2)
                    .attr('cy',this.ssrHeight/2)
                    .attr('r','10px')
                    .attr('fill','#383838')
                    .attr('id','circle-right')
        
        this.svgRight.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", '2px')
                    .attr("x1", (this.ssrWidth/2))
                    .attr("y1", 0)
                    .attr("x2", this.ssrWidth/2)
                    .attr("y2", this.ssrHeight);
        this.svgRight.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", '2px')
                    .attr("x1", 0)
                    .attr("y1", this.ssrHeight/2)
                    .attr("x2", this.ssrWidth)
                    .attr("y2", this.ssrHeight/2);
        
        this.svgLeft.append('text')
                    .text('Nose Down')
                    .attr('font-family','B612')
                    .attr('fill','white')
                    .attr('x',(this.sslWidth/2)-30)
                    .attr('y',20)
        this.svgRight.append('text')
                    .text('Nose Down')
                    .attr('font-family','B612')
                    .attr('fill','white')
                    .attr('x',(this.ssrWidth/2)-30)
                    .attr('y',20)
        
        this.svgLeft.append('text')
                    .text('Nose Up')
                    .attr('font-family','B612')
                    .attr('fill','white')
                    .attr('x',(this.sslWidth/2)-30)
                    .attr('y',(this.sslHeight)-5)
        this.svgRight.append('text')
                    .text('Nose Up')
                    .attr('font-family','B612')
                    .attr('fill','white')
                    .attr('x',(this.ssrWidth/2)-30)
                    .attr('y',(this.ssrHeight)-5)

        this.svgLeft.append('text')
                    .text('Left')
                    .attr('writing-mode','vertical-rl')
                    .attr('font-family','B612')
                    .attr('fill','white') 
                    .attr('x',10)
                    .attr('y',(this.sslHeight/2)-5)
 
                  
        this.svgRight.append('text')
                    .text('Left')
                    .attr('font-family','B612')
                    .attr('fill','white')
                    .attr('writing-mode','vertical-rl')
                    .attr('x',10)
                    .attr('y',(this.ssrHeight/2)-5)

        this.svgLeft.append('text')
                    .text('Right')
                    .attr('writing-mode','vertical-lr')
                    .attr('font-family','B612')
                    .attr('fill','white') 
                    .attr('x',this.sslWidth-10)
                    .attr('y',(this.sslHeight/2)-5)

        this.svgRight.append('text')
                    .text('Right')
                    .attr('font-family','B612')
                    .attr('fill','white')
                    .attr('writing-mode','vertical-rl')
                    .attr('x',this.ssrWidth-10)
                    .attr('y',(this.ssrHeight/2)-5)

                    
    }
}

export {sideStick}