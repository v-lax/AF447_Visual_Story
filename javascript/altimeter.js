class altimeter {
    constructor(){
        this.altWidth = d3.select('#altimeter')._groups[0][0].clientWidth
        this.altHeight = d3.select('#altimeter')._groups[0][0].clientHeight

        this.altSvg = d3.select('#altimeter').append('svg')
                        .attr('width',this.altWidth)
                        .attr('height',this.altHeight)

        this.altScale=d3.scaleLinear()
                        .domain([345,355])
                        .range([this.altHeight-10,10])

        this.altAxis= d3.axisLeft(this.altScale)
        this.altAxis.ticks(10)
        
        this.altAxis.tickFormat(function (d) { 
                return ''
        })
        this.axis=this.altSvg.append('g')
        .attr('id','alt-axis')
        .attr('transform',`translate(${this.altWidth},0)`)
        .attr('color','white')
        .style('font-size','15px')
        .style('font-family','B612')
        .call(this.altAxis)

        this.altSvg.append('rect')
                   .attr('width',this.altWidth)
                   .attr('height','25px')
                   .attr('id','altitude-rect')
                   .attr('x',0)
                   .attr('y',this.altHeight/2)
                   .attr('fill','black')
                   .style('stroke-width','1px')
                   .style('stroke','yellow')

             this.altSvg.append('text')
                   .attr('x',0)
                   .attr('y',(this.altHeight/2)+20)
                   .attr('id','altitude-text')
                   .style('fill','#00e02d')
                   .style('font-family','B612')
                   .style('font-size','15px')
                   .text('35000')

                   //var Cont={val:35000} , NewVal = 34500 ;

                   //TweenLite.to(Cont,3,{val:NewVal,roundProps:"val",onUpdate:function(){
                    //d3.select('#altitude-text').node().textContent=Cont.val
                   //}});
    
    //this.updatedScale=d3.scaleLinear()
                //    .domain([340,350])
                //    .range([this.altHeight-10,10])

   //this.updatedAxis= d3.axisLeft(this.updatedScale)
   //this.updatedAxis.ticks(10)
   
   //this.updatedAxis.tickFormat(function (d) { 
       //if(d===340 || d===350){
           //return d
       //}else{
           //return ''
       //} 
   //})    
        //  this.axis.transition()
        //     .duration(3000)
        //     .call(
        //         this.updatedAxis.scale(this.updatedScale)
        //     );
    }
}

export {altimeter}

//.call(g => g.select(".domain").remove())