let jsonString = '';
function readData() {
  window
  .fetch("NPGData.json")
  .then(res => res.json())
  .then(data => {
    cleanDate(data);
  })
}
function cleanDate(objects) {
  objects.forEach((data, i) => {
    if(data.date.includes("190")){
      data.date = "1900";
    } else if(data.date.includes("191")){
        data.date = "1910";
    } else if(data.date.includes("192")){
        data.date = "1920";
    } else if(data.date.includes("193")){
        data.date = "1930";
    } else if(data.date.includes("194")){
        data.date = "1940";
    } else if(data.date.includes("195")){
        data.date = "1950";
    } else if(data.date.includes("196")){
        data.date = "1960"
    } else if(data.date.includes("197")){
        data.date = "1970"
    } else {
        data.date = "1800"
    };
  })
  sortByDate(objects)
}
function sortByDate(objects) {
  let frequencyCount = {};
  console.log(objects);
  objects.forEach((data) => {
    let keys = Object.keys(frequencyCount)
    if(keys.includes(data.date)) {
      frequencyCount[data.date].push(...data.topic);
    } else {
      frequencyCount[data.date] = [...data.topic];
    }
  })
  console.log(frequencyCount)
  jsonString += JSON.stringify(frequencyCount);
}
readData();