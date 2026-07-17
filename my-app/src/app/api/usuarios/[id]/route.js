import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthorized } from "@/lib/database";

export const runtime = "nodejs";

export async function GET(request, context) {
  if (!isAuthorized(request)) {
    return new Response("Acesso Negado!", { status: 401 });
  }

  const { id } = await context.params;
  const parsedId = parseInt(id);

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: parsedId },
    });

    if (!usuario) {
      return new Response("Usuario Não Encontrada", { status: 404 });
    }

    return NextResponse.json(usuario);
  } catch (error) {
    console.error("Erro:", error);
    return new Response("Erro ao buscar usuário", { status: 500 });
  }
}
