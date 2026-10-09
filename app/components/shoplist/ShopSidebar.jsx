import {Link} from 'react-router';

/**
 * @param {{
 *   productTypes: string[];
 *   selectedType: string;
 *   productCounts?: Record<string, number>;
 *   basePath?: string;
 * }}
 */
export function ShopSidebar({
  productTypes = [],
  selectedType = 'All',
  productCounts = {},
  basePath = '/collections/all',
}) {
  return (
    <aside className="product-sidebar" aria-label="Product categories">
      <h2 className="product-sidebar-title">Categories</h2>
      <div className="sidebar-group">
        {productTypes.map((type) => {
          const isActive = type === selectedType;
          const href =
            type === 'All'
              ? basePath
              : `${basePath}?productType=${encodeURIComponent(type)}`;
          const count = productCounts[type];

          return (
            <Link
              key={type}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
              to={href}
            >
              <span className="sidebar-link-text">{type}</span>
              {typeof count === 'number' && (
                <span className="sidebar-link-count">{count}</span>
              )}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

