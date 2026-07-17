import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(_request, context) {
  const { id } = await context.params;
  const parsedId = parseInt(id);

  try {
    const especiaria = await prisma.especiaria.findUnique({
      where: { id: parsedId },
    });

    if (!especiaria) {
      return new Response("Especiaria Não Encontrada", { status: 404 });
    }

    const especiariaFormatada = {
      ...especiaria,
      pratos: JSON.parse(especiaria.pratos),
      beneficios: JSON.parse(especiaria.beneficios),
      imagens: JSON.parse(especiaria.imagens),
    };

    return NextResponse.json(especiariaFormatada);
  } catch (error) {
    console.error("Erro:", error);
    return new Response("Erro ao buscar especiaria", { status: 500 });
  }
}
