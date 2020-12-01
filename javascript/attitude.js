class attitude{
    constructor(){

        this.angleArray = [30,20,10,0,10,20,30]
        this.attitudeWidth = d3.select('#attitude-indicator')._groups[0][0].clientWidth
        this.attitudeHeight = d3.select('#attitude-indicator')._groups[0][0].clientHeight


        this.attitudeSvg = d3.select('#attitude-indicator')
                             .append('svg')
                             .attr('width',this.attitudeWidth)
                             .attr('height',this.attitudeHeight)

        this.grad = this.attitudeSvg.append("defs").append("linearGradient").attr("id", "grad")
                             .attr("x1", "0%").attr("x2", "0%").attr("y1", "100%").attr("y2", "0%");
                         this.grad.append("stop").attr('id','sky').attr("offset", "50%").style("stop-color", "#a66c00");
                         this.grad.append("stop").attr('id','ground').attr("offset", "50%").style("stop-color", "#2b2bcf");
                         
                         this.attitudeSvg.append("circle")
                             .attr("cx", this.attitudeWidth/2)
                             .attr("cy", this.attitudeHeight/2)
                             .attr("r", this.attitudeWidth/2)
                             .attr('id','attitude-circle')
                             .attr("stroke", "blue")
                             .attr("fill", "url(#grad)");


        this.attitudeSvg.append('rect')
                             .attr('x',(this.attitudeWidth/2)-8)
                             .attr('y',(this.attitudeHeight/2)-8)
                             .attr('id','plane-nose')
                               .attr('width',15)
                               .attr('height',15)
                               .attr('fill','black')
                               .style('stroke','yellow')
                               .style('stroke-width','1px')              
        
        this.attitudeSvg.append('rect')
                               .attr('x',0)
                               .attr('y',(this.attitudeHeight/2)-8)
                                 .attr('width',50)
                                 .attr('height',5)
                                 .attr('fill','black')
                                 .style('stroke','yellow')
                                 .style('stroke-width','1px')

        this.attitudeSvg.append('rect')
                                 .attr('x',(this.attitudeWidth)-50)
                                 .attr('y',(this.attitudeHeight/2)-8)
                                   .attr('width',50)
                                   .attr('height',5)
                                   .attr('fill','black')
                                   .style('stroke','yellow')
                                   .style('stroke-width','1px')

        this.attitudeGroup = this.attitudeSvg.append('g').attr('class','pitch-angles')                            
        this.attitudeGroup.selectAll('line')
                        .data(this.angleArray)
                        .join('line')
                        .attr('x1',this.attitudeWidth/2-30)
                        .attr('x2',this.attitudeWidth/2+30)
                        .style("stroke", "white")
                        .style("stroke-width", '1px')
                        .attr('y1',(d,i)=>(this.attitudeHeight/3*i)-110)
                        .attr('y2',(d,i)=>(this.attitudeHeight/3*i)-110)
              
        this.leftText= this.attitudeGroup.append('g').attr('class','left-text')
        this.rightText= this.attitudeGroup.append('g').attr('class','right-text')
        this.leftText.selectAll('text')
                        .data(this.angleArray)
                        .join('text')
                        .attr('x',this.attitudeWidth/2-50)
                        .attr('y',(d,i)=>((this.attitudeHeight/3*i)-110)+5)
                        .style('fill','white')
                        .style('font-family','B612')
                        .style('font-size','12px')
                        .text(function (d) { 
                            if(d===0){
                                return ''
                            }else{
                                return d
                            } 
                        })

        this.rightText.selectAll('text')
                        .data(this.angleArray)
                        .join('text')
                        .attr('x',this.attitudeWidth/2+35)
                        .attr('y',(d,i)=>((this.attitudeHeight/3*i)-110)+5)
                        .style('fill','white')
                        .style('font-family','B612')
                        .style('font-size','12px')
                        .text(function (d) { 
                            if(d===0){
                                return ''
                            }else{
                                return d
                            } 
                        })
        
         //gsap.to('#attitude-circle',{duration: 3, rotation: 20, transformOrigin:"50%,50%"})
         //gsap.to('.pitch-angles',{duration: 3, rotation: 20, transformOrigin:"50%,50%"})
         //gsap.to("#grad", 3, {attr:{"y2":"-30%"}})
         //TweenMax.to(".pitch-angles", 3,{y:-70});
                    
    }
}

export {attitude}