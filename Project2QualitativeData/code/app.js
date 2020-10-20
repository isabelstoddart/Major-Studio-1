// "d3" is globally available
// because we have the d3 code
// in our index.html file

// load JSON using d3.json
d3.json('./data.json')
    .then(json => {

    //let filteredJson = json.filter(function (n){
        //return (n.title.includes("Group") || n.title.includes("Three") || n.title.includes("Two") || n.title.includes("Four") || n.title.includes("Composite"))
    //})
    displayImages(json);
      // execute our 
      // display images function
  }); 

// this function creates all
// of our DOM elements
function displayImages(json){
    // select a <div> with an id of "app"
    // this is where we want all of our
    // images to be added
    let app  = d3.select('#app').text('');

    // take our JSON and sort it
    // date descending
    //let data = json.sort( (a,b) => (b.date > a.date) ? 1 : -1 );
    // // date ascending
    // let data = json.sort( (a,b) => (a.date > b.date) ? 1 : -1 );


    // define "cards" for each item
    let card = app.selectAll('div.smithsonian-card')
                .data(json)
                .join('div')
                .attr('class', 'smithsonian-card');

    // create a div with a class of "image"
    // and populate it with an <img/> tag
    // that contains our filepath
    card.append('div')
        .attr('class', 'image')
        .append('img')
        .attr('src', d => {
            // all our images are in the "images"
            // folder which we will need to 
            // add to our filename first
            return './downloadsStanding/' + d.filename
        });
}
