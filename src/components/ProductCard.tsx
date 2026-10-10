import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categoryLabel } from '../data/products';
import type { Product } from '../data/types';
import { Button } from './Button';
import { Img } from './Img';
import { useServiceModal } from './ServiceModalContext';

interface Props {
  product: Product;
  index?: number;
}

/** Equal-height product card: fixed 4:3 image, spec chips, View Details + Enquire buttons. */
export function ProductCard({ product, index = 0 }: Props) {
  const { open } = useServiceModal();
  const href = `/products/${product.slug}`;

  return (
    <motion.div
      className="product-card-wrap"
      layout="position"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -6% 0px' }}
      transition={{ duration: 0.55, delay: Math.min(index, 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <article className="product-card" data-fx="" data-tilt="">
        <Link to={href} className="product-card__media" aria-label={`View details of ${product.name}`} tabIndex={-1}>
          <Img src={product.image.src} alt={product.image.alt} width={1200} height={900} className="product-card__img" sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
          <span className="product-card__badge">{categoryLabel(product.category)}</span>
        </Link>
        <div className="product-card__body">
          <h3 className="product-card__title">
            <Link to={href}>{product.name}</Link>
          </h3>
          <p className="product-card__tag">{product.tagline}</p>
          <ul className="product-card__chips" aria-label="Key specifications">
            {product.chips.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>
          <div className="product-card__actions">
            <Button to={href} variant="primary" size="sm" iconRight="arrowRight">
              View Details
            </Button>
            <Button variant="outline" size="sm" icon="send" onClick={() => open({ productName: product.name, serviceType: 'New Machine Enquiry' })}>
              Enquire
            </Button>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
