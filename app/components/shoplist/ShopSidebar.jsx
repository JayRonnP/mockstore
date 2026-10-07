import {Link} from 'react-router';

/**
 * @param {{
 *   productTypes: string[];
 *   selectedType: string;
 *   basePath?: string;
 * }}
 */
export function ShopSidebar({
  productTypes = [],
  selectedType = 'All',
  basePath = '/collections/all',
}) {
  return (
    <aside className="product-sidebar">
      <h2>Shop by product</h2>
      <div className="sidebar-group">
        {productTypes.map((type) => {
          const isActive = type === selectedType;
          const href =
            type === 'All'
              ? basePath
              : `${basePath}?productType=${encodeURIComponent(type)}`;

          return (
            <Link
              key={type}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
              to={href}
            >
              {type}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

