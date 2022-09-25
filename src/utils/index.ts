// 驼峰命名 变成 横岗链接的写法
export const toLine = (value:string) => {
    return value.replace(/(A-Z)g/,'-$1').toLowerCase()
}