import { MiddlewareRequest} from '@netlify/next';
import { NextResponse } from 'next/server';

export async function middleware(nextRequest) {
  try {
    const request = new MiddlewareRequest(nextRequest);
    const response = await request.next();

    response.setPageProp('isWorking', false);

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.next();
  }
}
