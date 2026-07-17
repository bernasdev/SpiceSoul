import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthorized } from "@/lib/database";

export const runtime = "nodejs";

export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany();
    return NextResponse.json(usuarios);
  } catch (error) {
    console.error("Erro:", error);
    return new Response("Erro ao buscar usuários", { status: 500 });
  }
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return new Response("Acesso Negado!", { status: 401 });
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return new Response("Erro ao processar o arquivo JSON", { status: 500 });
  }

  try {
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email: body.email },
    });

    if (usuarioExistente) {
      return new Response("Email Já Cadastrado", { status: 409 });
    }

    await prisma.usuario.create({
      data: {
        usuario: body.usuario,
        email: body.email,
        senha: body.senha,
      },
    });

    return new Response("Usuario Criado com Sucesso!", { status: 201 });
  } catch (error) {
    console.error("Erro:", error);
    return new Response("Erro ao criar usuário", { status: 500 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "GET, OPTIONS, POST",
    },
  });
}
