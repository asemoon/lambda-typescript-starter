import {Context} from "aws-lambda";

const handler = (event: any, context: Context) => {
    context.done(undefined, "Called the lambda function");
};

export {handler};
