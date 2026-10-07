import {useLoaderData} from 'react-router';
import {HomeHero, BestSellers, HomeFeatures} from '~/components/home';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Ron Bike Parts | Home'}];
};

export async function loader({context}) {
  const {products} = await context.storefront.query(LANDING_PAGE_QUERY);

  return {
    featuredProduct: products.nodes[0] ?? null,
    bestSellers: products.nodes.slice(0, 3),
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const {featuredProduct, bestSellers} = useLoaderData();

  return (
    <main className="landing-page">
      <HomeHero featuredProduct={featuredProduct} />
      <HomeFeatures />
      <BestSellers products={bestSellers} />
    </main>
  );
}

const LANDING_PAGE_QUERY = `#graphql
  fragment LandingProduct on Product {
    id
    title
    handle
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
        amount
        currencyCode
      }
    }
  }
  query LandingPage($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: BEST_SELLING) {
      nodes {
        ...LandingProduct
      }
    }
  }
`;

/** @typedef {import('./+types/_index').Route} Route */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
