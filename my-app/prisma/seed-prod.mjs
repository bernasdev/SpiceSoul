import { PrismaClient } from "@prisma/client";
import { promises as fs } from "fs";
import path from "path";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL environment variable is required");
  process.exit(1);
}

const prisma = new PrismaClient({
  datasources: { db: { url: databaseUrl } },
});

const dataDirectory = path.join(process.cwd(), "data");

async function readJsonFile(fileName) {
  const filePath = path.join(dataDirectory, fileName);
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${fileName}:`, error);
    return [];
  }
}

async function main() {
  console.log("Starting production seed...");

  await prisma.usuario.deleteMany();
  await prisma.especiaria.deleteMany();
  await prisma.contato.deleteMany();

  const usuarios = await readJsonFile("usuarios.json");
  console.log(`Importing ${usuarios.length} usuarios...`);
  for (const usuario of usuarios) {
    if (usuario.email && usuario.email.trim()) {
      await prisma.usuario.create({
        data: {
          usuario: usuario.usuario,
          email: usuario.email,
          senha: usuario.senha,
        },
      });
    }
  }

  const especiarias = await readJsonFile("especiarias.json");
  console.log(`Importing ${especiarias.length} especiarias...`);
  for (const especiaria of especiarias) {
    await prisma.especiaria.create({
      data: {
        nome: especiaria.nome,
        nomeCientifico: especiaria.nomeCientifico || "",
        origem: especiaria.origem,
        descricao: especiaria.descricao,
        preco: especiaria.preco,
        quantidade: especiaria.quantidade,
        pratos: JSON.stringify(especiaria.pratos || []),
        categoria: especiaria.categoria,
        beneficios: JSON.stringify(especiaria.beneficios || []),
        imagens: JSON.stringify(especiaria.imagens || []),
      },
    });
  }

  const contatos = await readJsonFile("contato.json");
  console.log(`Importing ${contatos.length} contatos...`);
  for (const contato of contatos) {
    await prisma.contato.create({
      data: {
        nome: contato.nome,
        email: contato.email,
        motivo: contato.motivo,
        mensagem: contato.mensagem,
        data: new Date(contato.data),
      },
    });
  }

  console.log("Production seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
