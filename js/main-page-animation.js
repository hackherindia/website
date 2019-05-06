
  var svg = d3.select('#Viz')

  var width = window.screen.availWidth;
  var height = window.screen.availHeight;

  var n = 3000;

  var data = d3.range(n).map(function() { return d3.range(2).map(Math.random) });
  var voronoi = d3.voronoi()
    .x(function(d) {return d[0]*width})
    .y(function(d) {return d[1]*height})
    .size([width, height]);

  var pointareas = svg.selectAll('areas')
    .data(voronoi.polygons(data))
   .enter().append('path')
    .attr('d', function(d) { return "M" + d.join("L") + "Z"; })
    .style('fill', function(d) {
      return d3.interpolateCubehelixDefault(1)});

  pointareas.on("mouseover", function(d,i ) {
      pointareas
        .style('fill', function(p) {
          dist = Math.min(1 - (Math.min(d.data[1] + 0.55 , 1) - Math.min(p.data [1] + 0.55 , 1)),1)
          return (d3.interpolateCubehelixDefault(dist))
          });



  })
