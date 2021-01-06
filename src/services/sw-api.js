const baseUrl = "https://swapi.dev/api/"

export function getAllStarShips() {
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}

console.log(getAllStarShips());