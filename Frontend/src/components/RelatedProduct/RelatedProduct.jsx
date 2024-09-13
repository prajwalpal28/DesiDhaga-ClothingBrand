import './RelatedProduct.css'
import data_product from '../assets/data.js'
import Item from '../Item/Item'

export const RelatedProduct = () => {
    return (
        <div className='relatedproduct'>
            <h1>Related Product</h1>
            <hr />
            <div className="relatedproduct-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })}
            </div>
        </div>
    )
}
