import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  description: string
}

const InquiryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_lu5hx2l' // Replace with your EmailJS service ID
      const templateId = 'template_muhf40s' // Replace with your EmailJS template ID
      const publicKey = 'Heumk-kozDn_5rXxM' // Replace with your EmailJS public key

      // Prepare the email data
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.description,
        to_email: 'your-email@example.com' // Replace with your business email
      }

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setIsSubmitted(true)
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: ''
        })
        setIsSubmitted(false)
      }, 5000)

    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitError('Failed to send inquiry. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="inquiry-form">
        <div className="container">
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your inquiry has been submitted. I'll get back to you within 24 hours.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="inquiry-form">
      <div className="container">
        <h2>Start Your Project</h2>
        <p>Ready to bring your vision to life? Let's discuss your custom woodworking project.</p>
        
        <form onSubmit={handleSubmit} className="form">
          {submitError && (
            <div className="error-message">
              <p>{submitError}</p>
            </div>
          )}
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="projectType">Project Type *</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select a project type</option>
                <option value="furniture">Custom Furniture</option>
                <option value="cabinetry">Kitchen/Bathroom Cabinetry</option>
                <option value="built-ins">Built-in Storage</option>
                <option value="decorative">Decorative Pieces</option>
                <option value="restoration">Restoration/Refinishing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select budget range</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-plus">$10,000+</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="timeline">Desired Timeline</label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">Select timeline</option>
                <option value="flexible">Flexible</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-plus-months">6+ months</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Project Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Please describe your project in detail..."
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default InquiryForm
