import Aula from "@/data/model/Aula"
import { IconCircleFilled } from "@tabler/icons-react"

export interface StatusAulaProps {
  valor: Aula['status']
}

export default function StatusAula(props: StatusAulaProps) {

  function cor() {
    switch (props.valor) {
      case 'Publicada':
        return 'text-sky-500'
      case 'Pendente':
        return 'text-yellow-500'
      case 'Concluída':
        return 'text-green-500'
      case 'Privada':
        return 'text-red-500'
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 w-36 py-2 rounded-xl bg-black">
      <IconCircleFilled size={15} className={cor()}/>
      <span className={cor()}>
        {props.valor}
      </span>
    </div>
  )
}