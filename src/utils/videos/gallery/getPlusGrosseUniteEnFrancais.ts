import type { Period } from '@js-joda/core'

export interface SplittedPeriodFR {
  plusGrosseUniteEnFrancais: string,
  elapsedSplitted: string[],
}

export default function getPlusGrosseUniteEnFrancais(p: Period): SplittedPeriodFR {

  console.log(`Appel de getPlusGrosseUniteEnFrancais(): Période JS JODA:[${p.toString()}]`)
  let reformattedElapsed = p.toString().replace(`P`, ``)
  reformattedElapsed = reformattedElapsed.toString().replace(`Y`, ` Y `)
  reformattedElapsed = reformattedElapsed.toString().replace(`M`, ` M `)
  reformattedElapsed = reformattedElapsed.toString().replace(`D`, ` D `)
  console.log(`Appel de getPlusGrosseUniteEnFrancais(): reformattedElapsed:[${reformattedElapsed.toString()}]`)
  
  let elapsedSplitted = reformattedElapsed.split(` `)
  elapsedSplitted.pop()
  console.log(`Appel de getPlusGrosseUniteEnFrancais(): elapsedSplitted:[${elapsedSplitted.toString()}]`)
  
  let plusGrosseUniteEnFrancais = ``

  switch(elapsedSplitted.length) { 
    case 6: { 
      /**
       * Si ta date est exprimée seuleument avec {Année, Mois, jour}:
       * alors, au max, la longueur de ce tableau c'est 6 : 
       * [nombre1, Années, nombre2, Mois, nombre3, jours]
       * /
      /** 
       * mais par sécurité, on lance une 
       * exception si elapsedSplitted[0] c'est pas 'Y'
       */
      if (elapsedSplitted[1] != `Y`) {
        console.log(` ligne 31 - elapsedSplitted[1] : `, elapsedSplitted[1])
        throw new Error(`elapsedSplitted[1] ça devrait valoir "Y", mais vaut [${elapsedSplitted[1]}] `)
      } else {
        // console.log(` Tu vois bien, que si la longueur du tableau est 6, alors elapsedSplitted[0]=[${elapsedSplitted[0]}] est bien 'Y'`)
      }

      if (elapsedSplitted[0] == `1`) {
        plusGrosseUniteEnFrancais = "an"
      } else {
        plusGrosseUniteEnFrancais = "ans"
      }
      break 
    } 
    case 4: { 
      /**
       * Si ta date est exprimée seuleument avec {Année, Mois, jour}:
       * alors, au max, la longueur de ce tableau c'est 6 : 
       * [nombre1, Années, nombre2, Mois, nombre3, jours]
       * /
      /** 
       * mais par sécurité, on lance une 
       * exception si elapsedSplitted[0] c'est pas 'M'
       */
      if (elapsedSplitted[1] != `M` && elapsedSplitted[1] != `Y`) {
        console.log(` ligne 59 - elapsedSplitted[1] : `, elapsedSplitted[1])
        throw new Error(`elapsedSplitted[1] ça devrait valoir "M", ou "Y", mais vaut [${elapsedSplitted[1]}] `)
      } else {
        // console.log(` Tu vois bien, que si la longueur du tableau est 4, alors elapsedSplitted[0]=[${elapsedSplitted[0]}] est bien 'M'`)
      }
      if (elapsedSplitted[1] == `M`) {

        plusGrosseUniteEnFrancais = "mois"
      }
      if (elapsedSplitted[1] == `Y`) {
        if (elapsedSplitted[0] == `1`) {
          plusGrosseUniteEnFrancais = "an"
        } else {
          plusGrosseUniteEnFrancais = "ans"
        }
      }
      break 
    } 
    case 2: { 
      /**
       * Si ta date est exprimée seuleument avec {Année, Mois, jour}:
       * alors, au max, la longueur de ce tableau c'est 6 : 
       * [nombre1, Années, nombre2, Mois, nombre3, jours]
       * /
      /** 
       * mais par sécurité, on lance une 
       * exception si elapsedSplitted[0] c'est pas 'M'
       */
      if (elapsedSplitted[1] != `D`) {
        throw new Error(`elapsedSplitted[0] ça devrait valoir "D", mais vaut [${elapsedSplitted[1]}] `)
      } else {
        // console.log(` Tu vois bien, que si la longueur du tableau est 2, alors elapsedSplitted[0]=[${elapsedSplitted[0]}] est bien 'D'`)
      }

      if (elapsedSplitted[0] == `1`) {
        plusGrosseUniteEnFrancais = "jour"
      } else {
        plusGrosseUniteEnFrancais = "jours"
      }
      break
    } 
    default: { 
      throw new Error(`Houston on a un problème la longue n'est ni 4, ni 2, ni 6 elapsedSplitted=[${elapsedSplitted}]`)
    } 
  }
  console.log(`Appel de getPlusGrosseUniteEnFrancais() - retourne: plusGrosseUniteEnFrancais: [${plusGrosseUniteEnFrancais}]`)
  console.log(`Appel de getPlusGrosseUniteEnFrancais() - retourne: elapsedSplitted: [${elapsedSplitted}]`)
  
  return {
    plusGrosseUniteEnFrancais: plusGrosseUniteEnFrancais,
    elapsedSplitted: elapsedSplitted
  }
}

