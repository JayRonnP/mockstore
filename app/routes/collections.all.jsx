import {useLoaderData, useSearchParams} from 'react-router';
import {CatalogSidebar, CatalogGrid} from '~/components/catalog';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Ron Bike Parts | Shop'}];
};

export async function loader({context}) {
  const {products} = await context.storefront.query(CATALOG_QUERY);

  return {products: products.nodes};
}

export default function Collection() {
  /** @type {LoaderReturnData} */
  const {products} = useLoaderData();
  const [searchParams] = useSearchParams();
  const selectedType = searchParams.get('productType') || 'All';

  const productTypes = ['All', ...new Set(products.map((product) => product.productType).filter(Boolean))];

  const filteredProducts =
    selectedType === 'All'
      ? products
      : products.filter((product) => product.productType === selectedType);

  const productCounts = products.reduce((acc, product) => {
    acc['All'] = (acc['All'] || 0) + 1;
    if (product.productType) {
      acc[product.productType] = (acc[product.productType] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="shop-page">
      <CatalogSidebar
        productTypes={productTypes}
        selectedType={selectedType}
        productCounts={productCounts}
        basePath="/collections/all"
      />
      <CatalogGrid
        products={filteredProducts}
        title={selectedType === 'All' ? 'All products' : selectedType}
      />
    </div>
  );
}

const COLLECTION_ITEM_FRAGMENT = `#graphql
  fragment MoneyCollectionItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment CollectionItem on Product {
    id
    handle
    title
    productType
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyCollectionItem
      }
      maxVariantPrice {
        ...MoneyCollectionItem
      }
    }
  }
`;

const CATALOG_QUERY = `#graphql
  query Catalog($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 250) {
      nodes {
        ...CollectionItem
      }
    }
  }
  ${COLLECTION_ITEM_FRAGMENT}
`;

/** @typedef {import('./+types/collections.all').Route} Route */
/** @typedef {import('storefrontapi.generated').CollectionItemFragment} CollectionItemFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
