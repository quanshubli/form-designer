import * as React from 'react'
import { Field } from '@/interface'
import FieldItem from './FieldItem'

export interface FieldsWrapperProps {
  fields: Field[]
}

const FieldsWrapper: React.FC<FieldsWrapperProps> = ({
  fields = []
}) => {
  return (
    <>
      <ul>
        {
          fields.map(field => <FieldItem key={field.id} field={field} />)
        }
      </ul>
    </>
  )
}

export default FieldsWrapper
