import {Context} from "aws-lambda";

const handler = (event: any, context: Context) => {
    context.done(undefined, "Function is finished yes2");
};

export {handler};
