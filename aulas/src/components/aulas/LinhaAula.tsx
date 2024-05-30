import Aula from "@/data/model/Aula"
import Duration from "@/data/utils/Duration"
import StatusAula from "./AulaStatus"

export interface LinhaAulaProps {
  aula: Aula
}

export function LinhaAula(props: LinhaAulaProps) {
  return (
    <div className="flex p-4 items-center justify-between rounded-xl bg-zinc-900" >
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-black">{props.aula.name}</span>
        <span className="text-sm text-zinc-400">{props.aula.curso}</span>
      </div>
      <div className="flex items-center gap-16">
          <StatusAula valor={props.aula.status} />
        <div className="text-3xl font-extrabold">
          {Duration.format(props.aula.duration)}
        </div>
      </div>
    </div>
  )
}