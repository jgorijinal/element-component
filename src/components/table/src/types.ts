export interface tableOptions {
  // 表头
  label: string
  // 字段名称
  prop?: string
  // 列宽度
  width?:string
  // 对齐方式
  align?: 'left' | 'center' | 'right'
  // 自定义列表末班名称
  slot?: string,
  // 是否要有操作项
  action?:boolean
}