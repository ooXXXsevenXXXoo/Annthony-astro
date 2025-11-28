export const prerender = false;

import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

export async function POST({ request }) {
  try {
    const body = await request.json();
    const id = body?.id;

    if (!id) {
      return new Response(JSON.stringify({ ok: false, error: "Falta id" }), { status: 400 });
    }

    const filePath = fileURLToPath(new URL("../../data/products.json", import.meta.url));

    let products = [];
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf8");
      products = JSON.parse(raw || "[]");
    }

    const newProducts = products.filter(p => String(p.id) !== String(id));

    fs.writeFileSync(filePath, JSON.stringify(newProducts, null, 2));

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("ERROR delete-product:", err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500 });
  }
}
