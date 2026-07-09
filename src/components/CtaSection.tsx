import type en from '../locales/en.json'

type Props = {
  cta: typeof en['cta']
}

export default function CtaSection({ cta }: Props) {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg" />
      <div className="container">
        <div className="cta-content reveal">
          <span className="section-label" style={{ display: 'block' }}>{cta.label}</span>
          <h2 className="cta-title">
            {cta.title1}<br />{cta.title2} <span className="gold">{cta.titleHighlight}</span>
          </h2>
          <p className="cta-desc">{cta.desc}</p>

          <form
            action="https://formsubmit.co/jacko@jackollc.com"
            method="POST"
            className="estimate-form"
          >
            <input type="hidden" name="_subject" value="New Flip Renovation Estimate Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="estimate-form-row">
              <div className="estimate-form-group">
                <label className="estimate-form-label">{cta.form.name}</label>
                <input
                  type="text"
                  name="name"
                  placeholder={cta.form.namePlaceholder}
                  className="estimate-form-input"
                  required
                />
              </div>
              <div className="estimate-form-group">
                <label className="estimate-form-label">{cta.form.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={cta.form.phonePlaceholder}
                  className="estimate-form-input"
                  required
                />
              </div>
            </div>

            <div className="estimate-form-group">
              <label className="estimate-form-label">{cta.form.address}</label>
              <input
                type="text"
                name="property_address"
                placeholder={cta.form.addressPlaceholder}
                className="estimate-form-input"
                required
              />
            </div>

            <div className="estimate-form-row">
              <div className="estimate-form-group">
                <label className="estimate-form-label">{cta.form.stage}</label>
                <input
                  type="text"
                  name="project_stage"
                  placeholder={cta.form.stagePlaceholder}
                  className="estimate-form-input"
                />
              </div>
              <div className="estimate-form-group">
                <label className="estimate-form-label">{cta.form.budget}</label>
                <input
                  type="text"
                  name="budget_range"
                  placeholder={cta.form.budgetPlaceholder}
                  className="estimate-form-input"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary estimate-form-submit">
              {cta.form.submit}
            </button>
            <p className="estimate-form-note">{cta.form.note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
