export const prerender = false;

export async function POST({ request }) {
  try {
    const { user, password } = await request.json();

    // Validación del admin
    if (user === "admin" && password === "123") {

      // Guardar cookie de sesión
      return new Response(
        JSON.stringify({ ok: true, message: "Bienvenido admin" }),
        {
          status: 200,
          headers: {
            "Set-Cookie": `session=admin; Path=/; HttpOnly; Max-Age=86400; SameSite=Strict`
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ ok: false, message: "Credenciales incorrectas" }),
      { status: 401 }
    );

  } catch (error) {
    console.error("ERROR LOGIN:", error);
    return new Response(
      JSON.stringify({ ok: false, message: "Error en servidor" }),
      { status: 500 }
    );
  }
}
