function get(thingToGet) {
    return document.getElementById(thingToGet);
  }
function removeElement(elem) {
    return get(elem).style.display = "none";
  }
  function displayBlock(elem){
      return get(elem).style.display = "block";
  }
  function displayFlex(elem){
      return get(elem).style.display = "flex";
  }
function orderScores(){
  [].map.call(get("topScores").children, Object).sort(function (a, b) {
    return +b.id.match(/\d+/) - +a.id.match(/\d+/);
}).forEach( function (elem) {
    topScores.appendChild(elem);
});
}
 