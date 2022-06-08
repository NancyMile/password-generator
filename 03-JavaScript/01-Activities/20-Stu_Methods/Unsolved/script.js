var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
/** adding an element at the beginning of constellations */
constellations.unshift("Canis Major");
console.log("Constellations: "+constellations);
/**  remove the last element on planets */
planets.pop();
console.log("Planets: "+planets);
/** Join two arrays */
galaxy = constellations.concat(planets);
console.log("Galaxy: "+galaxy);
/** string  to capitals */
var capitals_start = star.toUpperCase();
console.log("Start: "+capitals_start);


