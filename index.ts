import {Context} from "aws-lambda";
import logger from "./utils/logger";

const handler = (event: any, context: Context) => {
    logger.debug("Running the lambda function");
    context.done(undefined, "Called the lambda function");
};

export {handler};
