import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';

const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const { pathname } = req.nextUrl;
  const host = req.headers.get('host') || '';
  const isAuthenticated = !!req.auth;

  // ── CANONICAL DOMAIN: redirect creatifyai.in → www.creatifyai.in ─────────
  if (host === 'creatifyai.in') {
    const url = `https://www.creatifyai.in${pathname}${req.nextUrl.search}`;
    return NextResponse.redirect(url, { status: 301 });
  }

  // ── REGION BLOCKING (disabled — re-enable for production if needed) ────────
  // const country = req.headers.get('x-vercel-ip-country') || req.headers.get('cf-ipcountry');
  // if (country && country !== 'IN') {
  //   return new NextResponse(`...`, { status: 403 });
  // }


  // ── ADMIN PROTECTION ─────────────────────────────────────────────────────
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const session = req.cookies.get('admin_session');
    if (!session || session.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // ── USER PROTECTION ───────────────────────────────────────────────────────
  const protectedRoutes = ['/dashboard', '/creator', '/gallery', '/account', '/api/payment', '/api/user', '/api/generate-image'];
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // ── LOGIN REDIRECT ────────────────────────────────────────────────────────
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|video|Creatify AIlogo.png|apple-touch-icon.png|site.webmanifest|sitemap.xml|robots.txt|api|.well-known).*)',
  ],
};

