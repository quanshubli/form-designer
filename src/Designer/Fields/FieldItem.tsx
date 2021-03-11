import * as React from 'react'
import { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { Field } from '@/interface'
import styles from './index.less'

export interface FieldItemProps {
  field: Field
}

const FieldItem: React.FC<FieldItemProps> = ({
  field = {}
}) => {
  const ref = useRef()

  const [{}, connectDrag] = useDrag({
    item: { type: 'field' }
  })

  connectDrag(ref)

  return (
    <li ref={ref} className={styles.fieldItem}>
      {field.icon ? <i className={`iconfont ${field.icon}`} /> : null}
      {field.name}
    </li>
  )
}

export default FieldItem
