const Item = ({product}) => {
  return (
    <div style={{border:"1px solid blue"}}>
        <h2>{product.title}</h2>
        <p>{product.category}</p>
    </div>
  )
}

export default Item