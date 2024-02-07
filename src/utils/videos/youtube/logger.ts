
// import * as morgan from 'morgan';

import * as winston from 'winston';
// import * as DailyRotateFile from 'winston-daily-rotate-file';
import DailyRotateFile from 'winston-daily-rotate-file';
// import env from 'env';
//const { format } = winston;
const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;

const autobotLogFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});


// runtime and errors logger
export const autobotLogger = winston.createLogger({
  level: 'debug',//env.isProd ? 'info' : 'debug',
  format: format.combine(
    label({ label: '!> YouTubeAutoBot >!' }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    autobotLogFormat,
    format.json()
  ),
  defaultMeta: { service: 'app' },
  transports: [
    new DailyRotateFile({ filename: 'logs/astro_build_errors_%DATE%.log', level: 'error', maxSize: '20m', maxFiles: '14d' }),
    new DailyRotateFile({ filename: 'logs/astro_build_combined_%DATE%.log', maxSize: '20m', maxFiles: '14d' }),
    // new transports.Console()
  ]
});

/**
 * No need of a morgan logger here, a morgan logger is only to be used in an HTTP Server context, like Express
 */
/*
const loggerForMorgan = winston.createLogger({
  level: 'info',
  format: format.simple(),
  transports: [
    new DailyRotateFile({ filename: 'logs/access_%DATE%.log', maxSize: '20m', maxFiles: '14d' }),
  ]
});
const winstonStream = {
  write: (message: string, encoding: any) => {
    console.log(`Winston Stream is configured with encoding`, encoding)
    loggerForMorgan.info(message);
  }
};
*/
//export const accessLogger = morgan('combined', { stream: winstonStream });

// I will have to check how to properly use morgan logger in typescript, here it does not compile




// in development mode put all messages to console 
if (process.env.NODE_ENV != 'test'/*!env.isTest*/) {
  autobotLogger.add(new winston.transports.Console({
    format: format.combine(
      format.prettyPrint({
        depth: 1,
        colorize: true
      })
    )
  }));
}

/**
 * 
 * >>>>>>>>>
 * >>>>>>>>> HOW TO USE THE WINSTON LOGGER
 * >>>>>>>>>
 * 
 */

/*

import { autobotLogger as logger  } from './logger';

logger.error(`err.message` || 'Error Calling YouTube Data API endpoint', {
  youtubeApiEndpoint: `api endpoint path`,
  invokedMethod: `ccc`,
  apiResponse: {
    httpStatusCode: 201,
    httpStatusMessage: ``,
    rawResponse: {}
  },
  message: `my message`
});

logger.info(`info.message` || 'Calling YouTube Data API endpoint', {
  youtubeApiEndpoint: `api endpoint path`,
  invokedMethod: `ccc`,
  apiResponse: {
    httpStatusCode: 201,
    httpStatusMessage: ``,
    rawResponse: {}
  },
  message: `my message`
});

*/