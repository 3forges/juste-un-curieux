/*
import type {
  ZonedDateTime,
  LocalTime,
  ZoneId,
  DateTimeFormatter,
  LocalDate,
  LocalDateTime,
  Period,
} from '@js-joda/core';
*/
// import { Interval } from '@js-joda/extra';
// import '@js-joda/timezone';

// const nowZDT = ZonedDateTime.now();
// console.log("nowZDT", nowZDT);
// const duration = Period.parse('01:30:00');
// const time = LocalTime.parse('01:30:05');
// console.log(time.get(ChronoField.SECOND_OF_DAY));
// console.log(time.toSecondOfDay());

// console.log(nowZDT.plusSeconds(time.toSecondOfDay()));

// const offsetString = '02:00';
// const cutoffZdt = ZonedDateTime.parse('2020-01-22T18:00:00+02:00');
// const dueZdt = cutoffZdt.minusMinutes(180);
// console.log(cutoffZdt);
// console.log(dueZdt);
// const offset = Duration.parse(offsetString);

// const inUTC = cutoffZdt.withZoneSameInstant(ZoneId.UTC);
// console.log(inUTC);
// console.log(
//   inUTC.format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.nnnX"))
// );

// isCrossDocking
// const localNow = LocalDate.now(ZoneId.of('Asia/Shanghai'));
// console.log(localNow);
// const dispatchLocalDate = LocalDate.parse('2020-12-12');
// console.log(dispatchLocalDate);
// const isCrossDocking = !dispatchLocalDate.isAfter(localNow);
// console.log(isCrossDocking);

// const dispatchDateStr = '2021-01-25';
// const cutoffTimeStr = '20:00:00';
// const timezone = ZoneId.of('Asia/Shanghai');
// const empty = ZonedDateTime.of(
// LocalDateTime.parse(`${dispatchDateStr}T${cutoffTimeStr}`),
// timezone
// );
// console.log(empty.toString());

// check if LocalTime is between two LocalTimes
// const startLT = LocalTime.parse('12:00');
// const endLT = LocalTime.parse('18:00');
// const interval = Interval.ofInstantInstant(startLT.to)
// const checkLT = LocalTime.parse('15:00');

// parse 01/22 (MM/yy)
/*
const dateStr = '01/01/22';
console.log(new Date(dateStr));
const formatter = DateTimeFormatter.ofPattern('dd/MM/yy');
const dateTimeBuilder = formatter.parse(dateStr);
console.log(dateTimeBuilder);
const parsedDate = LocalDate.parse(dateStr, formatter);
console.log(parsedDate.toString());

const date1Str = '01/01/22';
const date2Str = '03/06/22';

const date3Str = '2012-06-30';
const date4Str = '2012-08-31';
//const date4Str = '2018-08-31';

const elapsed = Period.between(
  LocalDate.parse(date3Str),
  LocalDate.parse(date4Str)
);
*/



export default function getPlusGrosseUniteEnFrancais(p: Period): any {

  let reformattedElapsed = p.toString().replace(`P`, ``);
  reformattedElapsed = reformattedElapsed.toString().replace(`Y`, ` Y `);
  reformattedElapsed = reformattedElapsed.toString().replace(`M`, ` M `);
  reformattedElapsed = reformattedElapsed.toString().replace(`D`, ` D `);
  console.log(`elapsed = [${p}]`);
  
  let elapsedSplitted = reformattedElapsed.split(` `);
  console.log(` avant pop, elapsedSplitted=[${elapsedSplitted}]`)
  elapsedSplitted.pop()
  console.log(` après pop, elapsedSplitted=[${elapsedSplitted}]`)
  
  console.log(`reformattedElapsed = [${reformattedElapsed}]`);
  
  console.log(`elapsedSplitted = [${elapsedSplitted}]`);

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
        throw new Error(`elapsedSplitted[0] ça devrait valoir "Y", mais vaut [${elapsedSplitted[1]}] `)
      } else {
        console.log(` Tu vois bien, que si la longueur du tableau est 6, alors elapsedSplitted[0]=[${elapsedSplitted[0]}] est bien 'Y'`)
      }

      if (elapsedSplitted[0] == `1`) {
        plusGrosseUniteEnFrancais = "an"
      } else {
        plusGrosseUniteEnFrancais = "ans"
      }
      break; 
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
      if (elapsedSplitted[1] != `M`) {
        throw new Error(`elapsedSplitted[0] ça devrait valoir "M", mais vaut [${elapsedSplitted[1]}] `)
      } else {
        console.log(` Tu vois bien, que si la longueur du tableau est 4, alors elapsedSplitted[0]=[${elapsedSplitted[0]}] est bien 'M'`)
      }

      plusGrosseUniteEnFrancais = "mois"
      break; 
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
        console.log(` Tu vois bien, que si la longueur du tableau est 2, alors elapsedSplitted[0]=[${elapsedSplitted[0]}] est bien 'D'`)
      }

      if (elapsedSplitted[0] == `1`) {
        plusGrosseUniteEnFrancais = "jour"
      } else {
        plusGrosseUniteEnFrancais = "jours"
      }
      break; 
    } 
    default: { 
      throw new Error(`Houston on a un problème la longue n'est ni 4, ni 2, ni 6 elapsedSplitted=[${elapsedSplitted}]`)
      break; 
    } 
  }
  return {
    plusGrosseUniteEnFrancais: plusGrosseUniteEnFrancais,
    elapsedSplitted: elapsedSplitted
  }
}

