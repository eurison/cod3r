export default interface Aula {
  id: string
  name: string
  curso: string
  // hour: string
  duration: number
  status: 'Publicada' | 'Pendente' | 'Concluída' | 'Privada'
}