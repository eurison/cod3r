import aulas from "@/data/constants/aulas";
import Aula from "@/data/model/Aula";
import { LinhaAula } from "./LinhaAula";

export default function ListaAulas() {
  return (
    <div className="flex flex-col">
      <span>Lista de aulas</span>
      <div className="flex flex-col gap-5">
        {aulas.map(function(aula: Aula) {
          return (
            <LinhaAula key={aula.id} aula={aula} />
          )
        })}
      </div>
    </div>
  )
}