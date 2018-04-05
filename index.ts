import {Context} from "aws-lambda";

export default (event: any, context: Context) => {
    context.done(undefined, "Called the job that removes expired events");
};
