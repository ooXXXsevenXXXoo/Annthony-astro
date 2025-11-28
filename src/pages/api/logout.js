export const prerender = false;

export async function POST({ request }) {
  // Borra la cookie de sesión expirándola
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      // expiramos la cookie
      "Set-Cookie": `session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`
    }
  });
}

// también soportar GET por si llamas con GET desde el navegador
export async function GET({ request }) {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`
    }
  });
}
