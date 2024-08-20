// middleware.js
import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'cookie';

export function middleware(req : NextRequest) {
    const { pathname } = req.nextUrl;

    
    // Skip middleware for public pages (e.g., login)
    if (pathname.startsWith('/login') || pathname.startsWith('/public')) {
        return NextResponse.next();
    }

    // Parse the cookies from the incoming request headers
    const cookies = parse(req.headers.get('cookie') || '');
    const authToken = cookies.authToken;

    // If no auth token is found, redirect to login
    if (!authToken) {
        // return NextResponse.redirect(new URL('/login', req.url));
    }

    if (pathname.match('/')) {
        return NextResponse.redirect(new URL('/home', req.url))
    }
    // Continue to the requested page
    return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
    matcher: ['/dashboard', '/'],
};
