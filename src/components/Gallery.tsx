import { useState } from 'react'
import diningTableImage from '/src/assets/images/dining-table.png'
import bedroomFurnitureImage from '/src/assets/images/bedroom-furniture.png'
import cabinetryImage from '/src/assets/images/cabinetry.jpg'
import cuttingBoardImage from '/src/assets/images/cutting-board.jpg'
import jewelryBoxImage from '/src/assets/images/jewelry-box.png'
import giftImage from '/src/assets/images/gift.png'

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  
  const projects = [
    {
      id: 1,
      title: "Kitchen, Dining, & Entertaining",
      description: "Handcrafted tables, hutches, bars & more",
      category: "Furniture",
      image: diningTableImage
    },
    {
      id: 2,
      title: "Bedroom Sets",
      description: "Complete bedroom sets built to last",
      category: "Furniture",
      image: bedroomFurnitureImage
    },
    {
      id: 3,
      title: "Custom Built-ins",
      description: "Built-in shelving and cabinetry to fit any room",
      category: "Functional",
      image: cabinetryImage
    },
    {
      id: 4,
      title: "Functional Accessories",
      description: "Replace the plastics with natural wood alternatives",
      category: "Functional",
      image: cuttingBoardImage
    },
    {
      id: 5,
      title: "Heirloom Pieces",
      description: "Intricate jewelry box with to keep your treasures safe",
      category: "Decorative",
      image: jewelryBoxImage
    },
    {
      id: 6,
      title: "Gifts & Decor",
      description: "Give your wedding party, coworkers, or graduate a unique handcrafted gift",
      category: "Gifts",
      image: giftImage
    }
  ]

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section className="gallery">
        <div className="container">
          <h2>Our Work</h2>
          <p>Explore our collection of custom woodworking projects</p>
          
          <div className="gallery-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="gallery-item"
                onClick={() => openModal(project)}
                style={{ cursor: 'pointer' }}
              >
              <div className="gallery-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="placeholder-image" style={{ display: project.image ? 'none' : 'flex' }}>
                  <p>🖼️ Project Image</p>
                  <small>(Replace with actual photo)</small>
                </div>
              </div>
              <div className="gallery-content">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Modal for enlarged view */}
    {selectedProject && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            ×
          </button>
          <div className="modal-image">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            <div className="placeholder-image" style={{ display: 'none' }}>
              <p>🖼️ Project Image</p>
              <small>Image not available</small>
            </div>
          </div>
          <div className="modal-info">
            <span className="category">{selectedProject.category}</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default Gallery
