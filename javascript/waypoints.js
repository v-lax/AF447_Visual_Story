class wayPoint{
    constructor(){
    
    this.data = ['INTRO','FSCHL','INTOL','SALPU','ORARO','TASIL']
    
    this.wayPointWidth = d3.select('#waypoints')._groups[0][0].clientWidth
    this.wayPointHeight = d3.select('#waypoints')._groups[0][0].clientHeight
    
    console.log(this.wayPointHeight)
    
    this.container = d3.select('#waypoints')
                 .append('svg')
                 .attr("width", this.wayPointWidth)
                 .attr("height", this.wayPointHeight)
    
    
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 80)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 120);
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 180)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 220);
    
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 280)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 320);
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 380)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 420);
    
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 480)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 520);    

    this.circles = this.container.selectAll('.waypoint-circles')
                  .data(this.data)
                  .join('circle')
                  .attr('class','waypoint-circles')
                  .attr('id',function(d,i){return `circle${i}`})
                  .attr('fill','none')
                  .attr('stroke','white')
                  .attr('stroke-width',1)
                  .attr('opacity',1)
                  .attr('r','30px')
                  .attr('cx',this.wayPointWidth/2)
                  .attr('cy',function(d,i){
                      return (i * 100 + 50)
                  })
     
    this.container.selectAll('text')
    .data(this.data)
    .join('text')
    .attr('x',(this.wayPointWidth/2)-20)
    .attr('y',function(d,i){
        return (i * 100 + 55)
    })
    .attr('id',function(d,i){return `text${i}`})
    .attr('fill','white')
    .attr('font-family','B612')
    .attr('font-size','12px')
    .attr('text-align','center')
    .text(d=>d)
    
    }

    highlight(index){
            d3.select(`#circle${index}`)
              .transition()
              .attr('fill','white')
            
            d3.select(`#text${index}`)
            .transition()
            .attr('fill','black')
    }

    unhighlight(index){
        d3.select(`#circle${index}`)
        .transition()
        .attr('fill','none')
      
      d3.select(`#text${index}`)
      .transition()
      .attr('fill','white')
    }

} 

export {wayPoint};