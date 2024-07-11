import serverlessHttp from 'serverless-http';
import { app } from './app';
import { Handler, APIGatewayEvent } from 'aws-lambda';

export const handler: Handler = (event, context, callback) => {
  const apiGatewayEvent = event as APIGatewayEvent;
  return serverlessHttp(app)(event, context);
};
