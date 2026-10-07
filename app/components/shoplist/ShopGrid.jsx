import {ProductItem} from './ProductItem';

/**
 * @param {{
 *   products: any[];
 *   title?: string;
 *   emptyMessage?: string;
 * }}
 */
export function ShopGrid({
  products = [],
  title,
  emptyMessage = 'No products found.',
}) {
  return (
    <section className="shop-results">
      <div className="shop-results-header">
        <h1>{title}</h1>
        <p>
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {products.length === 0 ? (
        <p className="no-products">{emptyMessage}</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

