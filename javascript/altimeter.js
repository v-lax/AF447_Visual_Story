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
            if(d===345 || d===355){
                return d
            }else{
                return ''
            } 
        })
        this.altSvg.append('g')
        .attr('transform',`translate(${this.altWidth},0)`)
        .attr('color','white')
        .style('font-size','15px')
        .style('font-family','B612')
        .call(this.altAxis)

        this.altSvg.append('rect')
                   .attr('width',this.altWidth)
                   .attr('height','25px')
                   .attr('x',0)
                   .attr('y',this.altHeight/2)
                   .attr('fill','black')
                   .style('stroke-width','1px')
                   .style('stroke','yellow')

                   this.altSvg.append('text')
                   .attr('x',0)
                   .attr('y',(this.altHeight/2)+20)
                   .style('fill','#00e02d')
                   .style('font-family','B612')
                   .style('font-size','15px')
                   .text('35000')
        
    }
}

export {altimeter}