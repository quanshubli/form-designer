import { Field } from '@/interface'

export const defaultFields: Field[] = [
  {
    id: 'input',
    code: 'input',
    name: '单行文本',
    type: 'singleRowText',
    value: '',
    required: false,
    icon: 'edit'
  },
  {
    id: 'select',
    code: 'select',
    name: '单选',
    type: 'singleSelect',
    value: undefined,
    required: false,
    icon: 'edit'
  }
]
