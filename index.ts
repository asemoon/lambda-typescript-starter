import {Context} from "aws-lambda";

const handler = (event: any, context: Context) => {
    context.done(undefined, "Function is finished");
};

export {handler};
