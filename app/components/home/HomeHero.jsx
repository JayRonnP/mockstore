import {Link} from 'react-router';
import {Image} from '@shopify/hydrogen';

/**
 * @param {{
 *   featuredProduct?: any;
 *   eyebrow?: string;
 *   title?: string;
 *   description?: string;
 *   ctaText?: string;
 *   ctaLink?: string;
 * }}
 */
export function HomeHero({
  featuredProduct,
  eyebrow = 'Built for every ride',
  title = 'Ride farther. Ride faster. Ride better.',
  description = 'Discover premium bikes, replacement parts, and accessories built for road, mountain, and city adventures.',
  ctaText = 'Shop now',
  ctaLink = '/collections/all',
}) {
  return (
    <section className="landing-hero">
      <div className="landing-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="primary-button" to={ctaLink}>
          {ctaText}
        </Link>
      </div>

      {featuredProduct?.featuredImage && (
        <div className="landing-hero-image">
          <Image
            alt={featuredProduct.title}
            data={featuredProduct.featuredImage}
            sizes="(min-width: 60em) 50vw, 100vw"
          />
        </div>
      )}
    </section>
  );
}

