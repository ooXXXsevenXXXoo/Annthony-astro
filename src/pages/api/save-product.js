export const prerender = false;

import fs from "fs";
import path from "path";

export async function POST({ request }) {
  try {
    const product = await request.json();

    const filePath = path.join(process.cwd(), "src", "data", "products.json");

    let products = [];

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      products = JSON.parse(content || "[]");
    }

    product.id = Date.now(); // ID único

    products.push(product);

    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));

    return new Response(
      JSON.stringify({ ok: true, message: "Producto guardado" }),
      { status: 200 }
    );

  } catch (err) {
    console.error("ERROR GUARDANDO PRODUCTO:", err);

    return new Response(
      JSON.stringify({ ok: false, message: "Error en servidor" }),
      { status: 500 }
    );
  }
}
