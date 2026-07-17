-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "usuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especiarias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeCientifico" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "quantidade" TEXT NOT NULL,
    "pratos" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "beneficios" TEXT NOT NULL,
    "imagens" TEXT NOT NULL,

    CONSTRAINT "especiarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contatos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
