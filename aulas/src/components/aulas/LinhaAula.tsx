import Aula from "@/data/model/Aula"

export interface LinhaAulaProps {
  aula: Aula
}

export function LinhaAula(props: LinhaAulaProps) {
  return (
    <div className="flex p-3 rounded-xl bg-zinc-900" >
      <span>{props.aula.name}</span>
    </div>
  )
}