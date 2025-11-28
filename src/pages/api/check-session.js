export const prerender = false;

export async function GET({ request }) {
  try {
    const cookie = request.headers.get("cookie") || "";
    // buscar 'session=...' en la cabecera
    const isAdmin = cookie.split(";").some(c => c.trim().startsWith("session=") && c.trim().includes("admin"));

    return new Response(JSON.stringify({ ok: true, admin: !!isAdmin }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, admin: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
