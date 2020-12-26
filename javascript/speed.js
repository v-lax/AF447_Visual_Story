class speed {
    constructor(){
        this.speedWidth = d3.select('#speed-scale')._groups[0][0].clientWidth
        this.speedHeight = d3.select('#speed-scale')._groups[0][0].clientHeight

        this.speedSvg = d3.select('#speed-scale').append('svg')
                          .attr('id','speed-svg')
                          .attr('width',this.speedWidth)
                          .attr('height',this.speedHeight)

        this.speedScale=d3.scaleLinear()
                          .domain([240,320])
                          .range([this.speedHeight-10,10])
  
          this.speedAxis= d3.axisLeft(this.speedScale)
          this.speedAxis.ticks(9)
          
          this.speedAxis.tickFormat(function (d) { 
              if(d===240 || d===260 || d===280 || d===300 || d===320){
                  return d
              }else{
                  return ''
              } 
          })
          this.speedSvg.append('g')
          .attr('id','speed-scale-group')
          .attr('transform',`translate(${this.speedWidth},0)`)
          .attr('color','white')
          .style('font-size','15px')
          .style('font-family','B612')
          .call(this.speedAxis)
    }
}

export {speed}