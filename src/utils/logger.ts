import * as winston from "winston";

const { combine, timestamp, printf } = winston.format;

const LOG_LEVEL = "debug";

const customLogFormat = printf((info) => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});

const transports = [new winston.transports.Console()];

const logger = winston.createLogger({
    level: LOG_LEVEL,
    format: combine(
        timestamp(),
        customLogFormat
    ),
    transports
});

export default logger;
