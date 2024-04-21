export const createProduct = (
  id:string | number,
  isNew: boolean = true,
  stock: number = 10,
) =>{
  return {
    id,
    isNew,
    stock,
  }
}
