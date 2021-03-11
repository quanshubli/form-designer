export interface Field {
  id: string,
  code: string,
  name: string,
  type: string,
  value: any,
  required: boolean,
  icon: string,
  params?: [] | object
}
