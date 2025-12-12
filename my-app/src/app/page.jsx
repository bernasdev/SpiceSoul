import Apresentacao from "@/components/Apresentacao/Apresentacao";
import Principais from "@/components/Principais/Principais";
import Receitas from "@/components/Receitas/Receitas";

export default function Home() {
  return (
    <>
      <Apresentacao></Apresentacao>
      <Principais></Principais>
      <Receitas></Receitas>
    </>
  );
}