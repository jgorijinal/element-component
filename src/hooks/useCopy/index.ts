import { ElMessage } from 'element-plus'
// 复制文本
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement('input')
  // 给输入框value赋值
  input.value = text
  // 追加到body上去
  document.body.appendChild(input)
  // 选择输入框操作
  input.select()
  // 执行复制曹组
  document.execCommand('Copy')
  // 删除加入的输入框
  document.body.removeChild(input)
  // 提示用户
  ElMessage.success(`${text} 复制成功`)
}