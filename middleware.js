import { MiddlewareRequest} from '@netlify/next';
import { NextResponse } from 'next/server';

export async function middleware(nextRequest) {
  try {
    const request = new MiddlewareRequest(nextRequest);
    const response = await request.next();
    const message = `This was static but has been transformed in ${request.geo.city}`;
  
    response.setPageProp("message", message);

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.next();
  }
}
