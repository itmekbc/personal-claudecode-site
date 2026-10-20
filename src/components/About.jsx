import resumeData from '../data/resume.json'
import { usePageMeta } from '../hooks/usePageMeta'

const clients = resumeData['clients and collaborators']

function ClientList() {
  return (
    <ul className="client-list">
      {clients.map((client) => (
        <li key={client.name}>
          {client.url ? (
            <a href={client.url} target="_blank" rel="noopener noreferrer">
              <span className="client-name">{client.name}</span>
              <svg className="client-arrow" width="12" height="12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <polyline points="268,112 412,256 268,400" stroke="currentColor" strokeWidth="48" strokeLinecap="square" strokeLinejoin="miter"/>
                <line x1="392" y1="256" x2="100" y2="256" stroke="currentColor" strokeWidth="48" strokeLinecap="square"/>
              </svg>
            </a>
          ) : (
            client.name
          )}
        </li>
      ))}
    </ul>
  )
}

function About() {
  usePageMeta({
    title: 'About',
    description:
      'Kevin Coalwell is a brand designer who builds visual systems and scales them across every touchpoint, currently at Agility Robotics.'
  })

  return (
    <section className="section">
      <h1 className="page-title fade-in">About</h1>

      <div className="about-content">
        <div className="about-blurb-container fade-in" style={{ animationDelay: '0.1s' }}>
          {resumeData.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <h2 className="section-heading fade-in" style={{ animationDelay: '0.2s' }}>
          Clients + Collaborators
        </h2>
        <div className="fade-in" style={{ animationDelay: '0.3s' }}>
          <ClientList />
        </div>
      </div>
    </section>
  )
}

export { ClientList }
export default About
