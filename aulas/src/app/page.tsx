import ListaAulas from "@/components/aulas/ListaAulas";
import Titulo from "@/components/shared/Titulo";
import { IconVideo } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 p-10 h-screen">
      <Titulo 
        principal="Bem-vindo ao Ignite Lab"
        secundario="Aqui você encontra todas as aulas disponíveis"
        icon={IconVideo}
      />

      <ListaAulas />
    </div>
  );
}
