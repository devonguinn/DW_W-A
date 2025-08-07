import { useState, useMemo } from 'react'

interface HeroProps {
  onNavigate: (section: string) => void
}

interface HeroImage {
  id: number
  src: string
  alt: string
  size: 'small' | 'medium' | 'large'
  orientation: 'portrait' | 'landscape' | 'square'
}

const Hero = ({ onNavigate }: HeroProps) => {
  const [selectedImage, setSelectedImage] = useState<HeroImage | null>(null)

  // Dynamically import all images from the gallery directory
  const imageModules = import.meta.glob('/src/assets/images/gallery/*.{png,jpg,jpeg,webp,gif}', { 
    eager: true,
    as: 'url'
  })

  // Function to determine size and orientation for variety
  const generateImageProperties = (index: number, filename: string) => {
    // Create a pseudo-random but consistent pattern based on filename
    const hash = filename.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)
    
    // More uniform sizing - only small variations (within 10%)
    const orientations: ('portrait' | 'landscape' | 'square')[] = ['square', 'square', 'landscape'] // Favor squares and landscape
    
    // Subtle size variations - most items will be medium with occasional small/large
    let size: 'small' | 'medium' | 'large'
    size = 'medium'

    // Mostly square and landscape orientations for uniformity
    const orientation = orientations[Math.abs(hash + index) % orientations.length]
    
    return { size, orientation }
  }

  // Generate alt text from filename
  const generateAltText = (filename: string) => {
    const name = filename
      .replace(/\.(png|jpg|jpeg|webp|gif)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
    
    return `${name} - Custom woodworking project`
  }

  const heroImages: HeroImage[] = useMemo(() => {
    return Object.entries(imageModules).map(([path, url], index) => {
      const filename = path.split('/').pop() || `image-${index}`
      const { size, orientation } = generateImageProperties(index, filename)
      
      return {
        id: index + 1,
        src: url as string,
        alt: generateAltText(filename),
        size,
        orientation
      }
    })
  }, [imageModules])

  const openImageModal = (image: HeroImage) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Custom Woodworking, Carpentry, and Art</h1>
          <h2>Handcrafted Furniture & Artistic Creations</h2>
          <p>
            Welcome to DeWitt Woodworking and Art, where traditional craftsmanship meets modern design. 
            Combining locally sourced materials with heirloom craftsmanship - we work together to create a timeless possession you can't wait to display.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => onNavigate('gallery')}
            >
              View Gallery
            </button>
            <button 
              className="btn-secondary"
              onClick={() => onNavigate('contact')}
            >
              Get Quote
            </button>
          </div>
        </div>
        
        <div className="hero-gallery">
          <div className="hero-masonry">
            {heroImages.map((image) => (
              <div 
                key={image.id}
                className={`hero-image-item ${image.size} ${image.orientation}`}
                onClick={() => openImageModal(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="hero-placeholder" style={{ display: 'none' }}>
                  <p>🖼️</p>
                  <small>Image {image.id}</small>
                </div>
                <div className="image-overlay">
                  <span className="expand-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged hero images */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              ×
            </button>
            <div className="modal-image">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
            </div>
            <div className="modal-info">
              <h3>{selectedImage.alt}</h3>
              <p>Click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
