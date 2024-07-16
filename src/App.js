import './App.css';
import PortfolioNavigation from './components/PortfolioNavigation/index';
import PortfolioItem from './components/PortfolioItem/index';

const projects = [
  {
    title: 'TOI 3D Customize E-commerce',
    image: 'https://tekup.vn/wp-content/uploads/2022/09/image-1.png',
    category: 'Manpower Supply',
  },
  {
    title: 'E-learning - Internal training platform',
    image: 'https://tekup.vn/wp-content/uploads/2022/09/image.png',
    category: 'Mobile App / Websites',
  },
  {
    title: 'Summer 21 Cosmetic E-commerce Platform',
    image: 'https://tekup.vn/wp-content/uploads/2022/08/summer21-thumbnail.png',
    category: 'UI/UX Design',
  },
  {
    title: 'Kiva - Ambition to digital transformation in the brokerage assiduity',
    image: 'https://tekup.vn/wp-content/uploads/2022/08/kiva-thumbnail.png',
    category: 'Manpower Supply',
  },
  {
    title: 'Boxgo - Professional Warehouse Management',
    image: 'https://tekup.vn/wp-content/uploads/2022/08/boxgo-thumbnail.png',
    category: 'Mobile App / Websites',
  },
];

function App() {
  return (
    <>
      <PortfolioNavigation />
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <PortfolioItem key={index} project={project} />
        ))}
      </div>
    </>

  );
}

export default App;
