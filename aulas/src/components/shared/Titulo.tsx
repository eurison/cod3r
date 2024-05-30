import { ElementType } from "react"

export interface TituloProps {
  principal: string
  secundario: string  
  icon: ElementType
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex gap-2 ">
      <props.icon size={60} stroke={1} />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{props.principal}</h1>
        <h2 className="text-sm text-zinc-300">{props.secundario}</h2>
      </div>
    </div>
  )

}