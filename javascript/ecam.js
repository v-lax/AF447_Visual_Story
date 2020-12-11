class Ecam{
    constructor(){
        this.ecamWidth = d3.select('#ECAM')._groups[0][0].clientWidth
        this.ecamHeight = d3.select('#ECAM')._groups[0][0].clientHeight

        this.table = d3.select('#ECAM')
                 .append('table')
                 .attr("width", this.ecamWidth)
                 .attr("height", this.ecamHeight)

        this.table.append('thead')
        .append('tr')
        .append('th')
        .text('ECAM Messages')
        .style('color','white')
        .style('font-family','B612')
        .style('border-bottom','1px solid white')
        .style('background-color','black')

        this.tableRow1 = this.table.append('tbody').append('tr')
        this.tableRow2 = this.table.append('tbody').append('tr')

        this.tableRow1.append('td')
        .attr('id','ecam-message')
        .style('color','green')
        .style('font-family','B612')
        .text('Welcom Aboard AF447')
        .style('border','1px solid white')
        .style('background-color','black')
        .style('text-align','center')
    }

    //add methods here. 
}

export {Ecam}