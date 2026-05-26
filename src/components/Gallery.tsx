import { IconImage } from '../icons'
import type en from '../locales/en.json'

type Props = {
  gallery: typeof en['gallery']
}

type SlotProps = {
  large?: boolean
  delay?: string
  viewText: string
  photoText: string
}

function GallerySlot({ large = false, delay = '', viewText, photoText }: SlotProps) {
  return (
    <div className={`gallery-item reveal${delay}`}>
      <div className="gallery-placeholder" style={large ? { aspectRatio: '16/10' } : {}}>
        <div className="gallery-overlay">
          <div className="gallery-overlay-content">
            <div className="gallery-view-text">{viewText}</div>
          </div>
        </div>
        <span className="gallery-placeholder-icon">
          <IconImage size={large ? 36 : 28} />
        </span>
        <span className="gallery-placeholder-text">{photoText}</span>
      </div>
    </div>
  )
}

const slots = [
  { large: true, delay: ' reveal-delay-1' },
  { delay: ' reveal-delay-2' },
  { delay: ' reveal-delay-3' },
  { delay: ' reveal-delay-1' },
  { delay: ' reveal-delay-2' },
  { delay: ' reveal-delay-3' },
  { delay: ' reveal-delay-1' },
  { delay: ' reveal-delay-2' },
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
          {slots.map((slot, i) => (
            <GallerySlot
              key={i}
              large={slot.large}
              delay={slot.delay}
              viewText={gallery.viewProject}
              photoText={gallery.photoLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
