export const createProduct = (
  id: string | number,
  stock: number,
  isNew: boolean
)=>{
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  }
}
