import * as winston from "winston";

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({timestamp: false, level: "silly"})
    ]
});

export default logger;
