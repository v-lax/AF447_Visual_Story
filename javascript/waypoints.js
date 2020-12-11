class wayPoint{
    constructor(){
    
    this.data = ['INTRO','FSCHL','ARAR0','LoAS','ALSAV','DPSL','CFUS','FNMT']
    
    this.wayPointWidth = d3.select('#waypoints')._groups[0][0].clientWidth
    this.wayPointHeight = d3.select('#waypoints')._groups[0][0].clientHeight
    
    
    this.container = d3.select('#waypoints')
                 .append('svg')
                 .attr("width", this.wayPointWidth)
                 .attr("height", this.wayPointHeight)
    
    
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 70)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 90);
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 145)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 165);
    
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 225)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 240);
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 300)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 320);
    
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 380)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 395);
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 455)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 470);  
    this.container.append('line')
                 .style("stroke", "white")
                 .style("stroke-width", '2px')
                 .attr("x1", (this.wayPointWidth/2))
                 .attr("y1", 532)
                 .attr("x2", this.wayPointWidth/2)
                 .attr("y2", 550);   

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
                      return (i * 77 + 40)
                  })
     
    this.container.selectAll('text')
    .data(this.data)
    .join('text')
    .attr('x',(this.wayPointWidth/2)-20)
    .attr('y',function(d,i){
        return (i * 77 + 45)
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