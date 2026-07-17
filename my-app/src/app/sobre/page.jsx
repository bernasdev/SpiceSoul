import dynamic from "next/dynamic";
import Carrossel from "@/components/CarrosselSobre/CarrosselSobre";
import Endereco from "@/components/Endereco/Endereco";
import Qea from "@/components/QeA/QeA";
import Contato from "@/components/Contato/Contato";

const Feedbacks = dynamic(() => import("@/components/Feedbacks/Feedbacks"));

export default function Sobre() {
  return (
    <>
      <Carrossel />
      <Endereco />
      <Qea />
      <Feedbacks />
      <Contato />
    </>
  );
}
