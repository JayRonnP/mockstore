import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';

/**
 * @param {{
 *   product:
 *     | CollectionItemFragment
 *     | ProductItemFragment
 *     | RecommendedProductFragment;
 *   loading?: 'eager' | 'lazy';
 * }}
 */
export function ProductItem({product, loading}) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  return (
    <Link
      className="product-item"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      <div className="product-item-image">
        {image ? (
          <Image
            alt={image.altText || product.title}
            aspectRatio="4/3"
            data={image}
            loading={loading}
            sizes="(min-width: 60em) 320px, (min-width: 48em) 33vw, 50vw"
          />
        ) : (
          <div className="product-item-placeholder">No image</div>
        )}
      </div>
      <div className="product-item-content">
        {product.productType && (
          <span className="product-item-type">{product.productType}</span>
        )}
        <h4 className="product-item-title">{product.title}</h4>
        <div className="product-item-price">
          <Money data={product.priceRange.minVariantPrice} />
        </div>
      </div>
    </Link>
  );
}

/** @typedef {import('storefrontapi.generated').ProductItemFragment} ProductItemFragment */
/** @typedef {import('storefrontapi.generated').CollectionItemFragment} CollectionItemFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductFragment} RecommendedProductFragment */

