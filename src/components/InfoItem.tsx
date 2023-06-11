import { Info } from '../types'

export interface InfoItemProps {
  info: Info
}

const InfoItem = ({ info }: InfoItemProps) => {
  return (
    <div className='flex flex-col mr-6  '>
      <span className='text-xl font-bold mt-1 truncate'>{info.title}</span>
      <span className='text-lg mt-1 truncate'>{info.description}</span>
    </div>
  )
}

export default InfoItem
