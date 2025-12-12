import FormularioAccount from "@/components/FormularioAccount/FormularioAccount"

export default function account({ params }) {
    return <FormularioAccount action = {params.action} />
}