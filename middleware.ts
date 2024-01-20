export default function middleware(request: any) {
    const url = new URL(request.url);
    // You can retrieve IP location or cookies here.
    if (url.pathname === '/*') {
      url.pathname = '/';
    }
    return Response.redirect(url);
}