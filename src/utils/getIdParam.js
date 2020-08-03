export const getIdParam = (pathname) => {
  const paramArr = pathname.split('/')
  return paramArr[paramArr.length - 1]
}