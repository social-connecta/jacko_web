import type en from '../locales/en.json'

type Props = {
  testimonials: typeof en['testimonials']
}

export default function Testimonials({ testimonials }: Props) {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-label">{testimonials.label}</span>
          <h2 className="section-title">
            {testimonials.title1}<br />{testimonials.title2}
          </h2>
          <div className="gold-line" />
        </div>

        <div className="testimonials-grid">
          {testimonials.items.map((item, i) => (
            <div key={i} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-quote-mark">"</div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, j) => <span key={j} className="star">★</span>)}
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-location">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
