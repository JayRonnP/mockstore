import {ContactSection} from '~/components/contact';

/**
 * @type {Route.MetaFunction}
 */
export const meta = () => {
  return [{title: 'Ron Bike Parts | Contact Us'}];
};

export default function ContactRoute() {
  return (
    <main className="page contact-page">
      <ContactSection />
    </main>
  );
}

/** @typedef {import('./+types/contact').Route} Route */

