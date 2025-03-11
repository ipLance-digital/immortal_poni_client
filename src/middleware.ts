import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Проверяем, что запрос идет на корневой путь
  if (request.nextUrl.pathname === '/') {
    // Создаем новый URL для редиректа
    return NextResponse.redirect(new URL('/home', request.url));
  }
}
