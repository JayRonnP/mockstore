import {Link} from 'react-router';
import {ProductItem} from '~/components/shoplist/ProductItem';

/**
 * @param {{
 *   products?: any[];
 *   title?: string;
 *   viewAllLink?: string;
 *   viewAllText?: string;
 * }}
 */
export function BestSellers({
  products = [],
  title = 'Best sellers',
  viewAllLink = '/collections/all',
  viewAllText = 'View all',
}) {
  return (
    <section className="best-sellers">
      <div className="section-heading">
        <h2>{title}</h2>
        <Link to={viewAllLink}>{viewAllText}</Link>
      </div>

      <div className="best-sellers-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

