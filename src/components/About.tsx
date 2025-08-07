import adamImage from '/src/assets/images/adam.png'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About DeWitt Woodworking and Art</h2>
            <p>
              With over 10 years of experience in woodworking, I specialize in creating 
              custom furniture and decorative pieces that combine traditional craftsmanship 
              with contemporary design.
            </p>
            <p>
              Every project begins with carefully selected materials, often sourced locally 
              to support sustainable practices. I work closely with each client to understand 
              their vision and create pieces that perfectly fit their space and style.
            </p>
            
            <div className="skills">
              <h3>Specialties</h3>
              <ul>
                <li>Custom Furniture Design</li>
                <li>Kitchen & Bathroom Cabinetry</li>
                <li>Built-in Storage Solutions</li>
                <li>Decorative Pieces</li>
                <li>Restoration & Refinishing</li>
                <li>Functional Gadgets</li>
              </ul>
            </div>

            <div className="process">
              <h3>My Process</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Consultation</h4>
                  <p>We discuss your vision, needs, and budget</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Design</h4>
                  <p>I create detailed plans and material specifications</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Crafting</h4>
                  <p>Careful construction using time-tested techniques</p>
                </div>
                <div className="step-arrow">→</div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h4>Finishing</h4>
                  <p>Professional finishing and quality inspection</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src={adamImage} 
              alt="Adam - Master Craftsman at DeWitt Woodworking"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'contain',
                borderRadius: '50%'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
