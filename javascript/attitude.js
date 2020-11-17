class attitude{
    constructor(){
        this.attitudeWidth = d3.select('#attitude-indicator')._groups[0][0].clientWidth
        this.attitudeHeight = d3.select('#attitude-indicator')._groups[0][0].clientHeight


        this.attitudeSvg = d3.select('#attitude-indicator')
                             .append('svg')
                             .attr('width',this.attitudeWidth)
                             .attr('height',this.attitudeHeight)

        this.grad = this.attitudeSvg.append("defs").append("linearGradient").attr("id", "grad")
                             .attr("x1", "0%").attr("x2", "0%").attr("y1", "100%").attr("y2", "0%");
                         this.grad.append("stop").attr("offset", "50%").style("stop-color", "#a66c00");
                         this.grad.append("stop").attr("offset", "50%").style("stop-color", "#2b2bcf");
                         
                         this.attitudeSvg.append("circle")
                             .attr("cx", this.attitudeWidth/2)
                             .attr("cy", this.attitudeHeight/2)
                             .attr("r", this.attitudeWidth/2)
                             .attr("stroke", "blue")
                             .attr("fill", "url(#grad)");


        this.attitudeSvg.append('rect')
                             .attr('x',(this.attitudeWidth/2)-8)
                             .attr('y',(this.attitudeHeight/2)-8)
                               .attr('width',15)
                               .attr('height',15)
                               .attr('fill','black')
                               .style('stroke','yellow')
                               .style('stroke-width','1px')              
                
                                 
                

        
            // this.pitchScale=d3.scaleLinear()
            //                  .domain([0,30])
            //                  .range([this.attitudeHeight,0])

            // this.pitchAxis= d3.axisLeft(this.pitchScale)
            // this.pitchAxis.ticks(12)
                             
            // this.pitchAxis.tickFormat(function (d) { 
            //                      if(d===10 || d===20 || d===30){
            //                          return d
            //                      }else{
            //                          return ''
            //                      } 
            //                  })

            // this.attitudeSvg.append('g')
            //             .attr('transform',`translate(${this.attitudeWidth/2},0)`)
            //             .attr('color','white')
            //             .style('font-size','15px')
            //             .style('font-family','B612')
            //             .call(this.pitchAxis)

        
                    
    }
}

export {attitude}