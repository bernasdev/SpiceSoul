import dynamic from "next/dynamic";
import Apresentacao from "@/components/Apresentacao/Apresentacao";
import Receitas from "@/components/Receitas/Receitas";

const Principais = dynamic(() => import("@/components/Principais/Principais"));

export default function Home() {
  return (
    <>
      <Apresentacao />
      <Principais />
      <Receitas />
    </>
  );
}
