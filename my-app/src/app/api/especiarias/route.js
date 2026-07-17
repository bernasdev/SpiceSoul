import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const especiarias = await prisma.especiaria.findMany();
    const especiariasFormatadas = especiarias.map((e) => ({
      ...e,
      pratos: JSON.parse(e.pratos),
      beneficios: JSON.parse(e.beneficios),
      imagens: JSON.parse(e.imagens),
    }));
    return NextResponse.json(especiariasFormatadas);
  } catch (error) {
    console.error("Erro:", error);
    return new Response("Erro ao buscar especiarias", { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "GET, OPTIONS",
    },
  });
}
