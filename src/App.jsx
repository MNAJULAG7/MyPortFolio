import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Skills  from './Component/Skills'
import Experience from './Component/Experience'
import Project from './Component/Project'
import About from './Component/About'
import Home from './Component/Home'

function App() {
  

  return (
<BrowserRouter>
   <div className='flex flex-col min-h-screen'> 
    <nav className='flex h-10 px-10  top-0 fixed w-full bg-gray-700 items-center justify-between'>
    <ul className='h-full'>
      <li className='h-full'><Link to = "/" className='p-2 flex text-white h-full text-2xl bg-gray-600 hover:bg-black transition duration-300 hover:scale-105'>Home</Link></li>
    </ul>
    <ul className='flex h-full gap-20'>
      <li className='h-full'><Link to="/about" className='h-full p-2 flex text-white text-2xl bg-gray-600 hover:bg-black transition duration-300 hover:scale-105'>About</Link></li>
      <li><Link to ="/experience" className=' h-full p-2 flex text-white text-2xl bg-gray-600 hover:bg-black transition duration-300 hover:scale-105'>Experience</Link></li>
      <li><Link to = "/skills" className='h-full  p-2 flex text-white text-2xl bg-gray-600 hover:bg-black transition duration-300 hover:scale-105'>Skills</Link></li>
      <li><Link to="/project" className='h-full p-2 flex text-white text-2xl bg-gray-600 hover:bg-black transition duration-300 hover:scale-105'>Project</Link></li>
    </ul>
   </nav>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
  </Routes>
 
   </div>
  </BrowserRouter>
  )
}

export default App
