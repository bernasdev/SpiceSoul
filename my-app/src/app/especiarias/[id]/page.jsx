import EspeciariaPage from "@/components/EspeciariaPage/EspeciariaPage";

export default function Page({ params }) {
  const id = parseInt(params.id);
  return <EspeciariaPage id={id} />;
}
