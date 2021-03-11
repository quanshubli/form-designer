import * as React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Fields from './Fields'
import { defaultFields } from './config'
import { Field } from '@/interface'
import styles from './index.less'

export interface DesignerProps {
  fields?: Field[]
}

const Designer: React.FC<DesignerProps> = ({
  fields = defaultFields
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Fields fields={fields} />
        </div>
        <div className={styles.mid}>

        </div>
      </div>
    </DndProvider>
  )
}

export default Designer
