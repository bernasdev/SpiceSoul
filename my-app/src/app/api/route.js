export const runtime = "nodejs";

export async function GET() {
  return new Response("Página Inicial", { status: 200 });
}
