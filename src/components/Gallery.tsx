import type en from '../locales/en.json'
import img01 from '../assets/galerry/01.jpg'
import img02 from '../assets/galerry/02.jpg'
import img03 from '../assets/galerry/03.jpg'
import img04 from '../assets/galerry/04.jpg'
import img05 from '../assets/galerry/05.jpg'
import img06 from '../assets/galerry/06.jpg'
import img07 from '../assets/galerry/07.jpg'
import img08 from '../assets/galerry/08.jpg'

type Props = {
  gallery: typeof en['gallery']
}

const images = [
  { src: img07, alt: 'Finished front exterior' },
  { src: img05, alt: 'Kitchen with gold pendants' },
  { src: img01, alt: 'Bathroom vanity and shower' },
  { src: img03, alt: 'New porch and deck' },
  { src: img04, alt: 'Open kitchen and living area' },
  { src: img02, alt: 'Completed exterior from street' },
  { src: img06, alt: 'Exterior renovation progress' },
  { src: img08, alt: 'Gutter and exterior detail' },
]

const delays = [
  ' reveal-delay-1',
  ' reveal-delay-2',
  ' reveal-delay-3',
  ' reveal-delay-1',
  ' reveal-delay-2',
  ' reveal-delay-3',
  ' reveal-delay-1',
  ' reveal-delay-2',
]

export default function Gallery({ gallery }: Props) {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="reveal">
          <span className="section-label">{gallery.label}</span>
          <h2 className="section-title">
            {gallery.title1}<br />{gallery.title2}
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">{gallery.subtitle}</p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className={`gallery-item reveal${delays[i]}`}>
              <div className="gallery-img-wrap">
                <img src={img.src} alt={img.alt} className="gallery-img" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <div className="gallery-view-text">{gallery.viewProject}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
