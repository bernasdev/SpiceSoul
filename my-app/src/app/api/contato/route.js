import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  try {
    const mensagens = await prisma.contato.findMany();
    return NextResponse.json(mensagens);
  } catch (error) {
    console.error("Erro:", error);
    return new Response("Erro ao buscar mensagens", { status: 500 });
  }
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return new Response("Erro ao processar o arquivo JSON", { status: 500 });
  }

  try {
    const novaMensagem = await prisma.contato.create({
      data: {
        nome: body.nome,
        email: body.email,
        motivo: body.motivo,
        mensagem: body.mensagem,
        data: new Date(),
      },
    });

    return new Response("Mensagem enviada com sucesso!", { status: 201 });
  } catch (error) {
    console.error("Erro:", error);
    return new Response("Erro ao salvar os dados", { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "GET, POST, OPTIONS",
    },
  });
}
