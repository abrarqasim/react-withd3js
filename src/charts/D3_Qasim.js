import * as keplerworx from 'd3';

export function initChart(height, width){
    keplerworx.select("#keplerworx")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
}

export function drawChart(height, width, data){
    const svg = keplerworx.select("#keplerworx svg");
    var selection = svg.selectAll("rect").data(data);
    var yScale = keplerworx.scaleLinear()
                        .domain([0, keplerworx.max(data)])
                        .range([0, height-100]);
    
    selection
        .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

    selection
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 45)
        .attr("y", (d) => height)
        .attr("width", 40)
        .attr("height", 0)
        .attr("fill", "#035c99")
        .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))
    
    selection
        .exit()
        .transition().duration(300)
            .attr("y", (d) => height)
            .attr("height", 0)
        .remove()
}