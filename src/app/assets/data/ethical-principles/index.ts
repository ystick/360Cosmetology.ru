export interface IEthicalPrinciple {
  title: string
  description: string
  videoPath: string
  videoPreview?: string
}

export const ethicalPrinciples: IEthicalPrinciple[] = [
  {
    title: 'Не навреди',
    description: 'Свято чтим заповедь всех докторов <br/> и&nbsp;бережно относимся к каждому<br/> нашему пациенту',
    videoPath: '/assets/videos/advantage-one.mp4',
    videoPreview: '/assets/videos/advantage-one.webp'
  },
  {
    title: 'Не обмани',
    description: 'Выстраиваем длительные отношения <br/>с пациентом, а не преследуем разовую<br/> возможность наживиться',
    videoPath: '/assets/videos/advantage-two.mp4',
    videoPreview: '/assets/videos/advantage-two.webp'
  },
  {
    title: 'Будь открытым',
    description: 'Максимально информируем пациента <br/>обо всем, что касается оказываемых <br/>услуг',
    videoPath: '/assets/videos/advantage-three.mp4',
    videoPreview: '/assets/videos/advantage-three.webp'
  }
]
