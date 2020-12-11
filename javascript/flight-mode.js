class flightMode {
    constructor() {
        this.readingWidth = (d3.select('#flight-mode-anounciator')._groups[0][0].clientWidth) / 2
        this.readingHeight = d3.select('#flight-mode-anounciator')._groups[0][0].clientHeight

        this.machSvg = d3.select('#flight-mode-anounciator')
            .append('svg')
            .attr('width', this.readingWidth)
            .attr('height', this.readingHeight)
            .attr('id', 'mach-reading')
            .attr('transform', `translate(0,0)`)

        this.flightModeSvg = d3.select('#flight-mode-anounciator')
            .append('svg')
            .attr('id', 'ap-message')
            .attr('width', this.readingWidth)
            .attr('height', this.readingHeight)

        this.machSvg.append('rect')
            .attr('width', this.readingWidth)
            .attr('height', this.readingHeight)
            .attr('id','mach-rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('fill', 'black')


        this.machSvg.append('text')
            .attr('x', 20)
            .attr('y', (this.readingHeight / 2) + 10)
            .attr('id', 'mach-text')
            .style('fill', '#00e02d')
            .style('font-family', 'B612')
            .style('font-size', '15px')
            .style('opacity',0)
            .text('MACH .82')

        this.flightModeSvg.append('rect')
            .attr('width', this.readingWidth)
            .attr('height', this.readingHeight)
            .attr('id','ap-rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('fill', 'black')

        this.flightModeSvg.append('text')
            .attr('x', 20)
            .attr('y', (this.readingHeight / 2) + 10)
            .attr('id', 'ap-text')
            .style('fill', '#00e02d')
            .style('font-family', 'B612')
            .style('font-size', '15px')
            .style('opacity',0)
            .text('AP ON')
    }
}

export { flightMode }