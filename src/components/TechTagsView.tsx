import { TechTag } from '@/types'
import TechTagView from './TechTagView'

type Props = { title: string; tags: TechTag[] }
export default function TechTagsView({ title, tags }: Props) {
  if (!tags || tags.length == 0) {
    return null
  }

  return (
    <div className='body flex items-center gap-1'>
      <div className='font-bold'>{title}:</div>
      <div className='flex flex-wrap gap-0'>
        {tags.map((tag) => (
          <TechTagView key={tag.key} tag={tag} />
        ))}
      </div>
    </div>
  )
}
