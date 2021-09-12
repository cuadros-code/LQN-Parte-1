const pokemons = [ 
  "audino", "bagon", "baltoy", "banette",
  "bidoof", "braviary", "bronzor", "carracosta", "charmeleon",
  "cresselia", "croagunk", "darmanitan", "deino", "emboar",
  "emolga", "exeggcute", "gabite", "girafarig", "gulpin",
  "haxorus", "heatmor", "heatran", "ivysaur", "jellicent",
  "jumpluff", "kangaskhan", "kricketune", "landorus", "ledyba",
  "loudred", "lumineon", "lunatone", "machamp", "magnezone",
  "mamoswine", "nosepass", "petilil", "pidgeotto", "pikachu",
  "pinsir", "poliwrath", "poochyena", "porygon2", "porygonz",
  "registeel", "relicanth", "remoraid", "rufflet", "sableye",
  "scolipede", "scrafty", "seaking", "sealeo", "silcoon",
  "simisear", "snivy", "snorlax", "spoink", "starly", "tirtouga",
  "trapinch", "treecko", "tyrogue", "vigoroth", "vulpix",
  "wailord", "wartortle", "whismur", "wingull", "yamask"
];

const buscarNombre = ( primeraLetra = '') => {
  return pokemons.filter( pokemons => pokemons.charAt(0) === primeraLetra )
}

const ultimaLetra = ( nombre = '' ) => {
  return nombre.charAt( nombre.length - 1 )
}

const generarNombre = ( arrayNombres = [] ) => {

  let nuevoArrayNombre = []
  for (let i = 0; i < arrayNombres.length; i++) {
    if(nuevoArrayNombre.length === 0){
      const ultima = ultimaLetra( arrayNombres[i] )
      const busqueda = buscarNombre(ultima)
      if(busqueda.length > 0){
        nuevoArrayNombre.push(busqueda[0])
      }
    }    
  }

  let busqueda = []
  const add = (arr = []) => {
    let size = arr.length
    const ultimoNombre = arr[ arr.length - 1 ]
    const ultima = ultimaLetra(ultimoNombre)
    busqueda = buscarNombre(ultima)

    busqueda.map( el =>  {
      if(!arr.includes(el) && size === arr.length){
        arr.push(el)
      }
    })
    if(busqueda.length !== 0){
      add(arr)
    }
    return arr
  }

  console.log( add(nuevoArrayNombre) )
}

generarNombre(pokemons)
