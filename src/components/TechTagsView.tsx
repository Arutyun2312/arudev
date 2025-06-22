import { TechTag } from '@/types'
import TechTagView from './TechTagView'

type Props = { title: string; tags: TechTag[] }
export default function TechTagsView({ title, tags }: Props) {
  if (!tags || tags.length == 0) {
    return null
  }

  return (
    <div className='flex items-center gap-2'>
      <div className='h3'>{title}:</div>
      <div className='flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <TechTagView key={tag.key} tag={tag} />
        ))}
      </div>
    </div>
  )
}
