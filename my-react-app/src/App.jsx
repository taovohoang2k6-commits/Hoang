import Footer from './components/Footer'
import Header from './components/Header'

import Title from './components/Title'
import Image from './components/Image'
import Images from './components/Images'
function App() {
  // mock data

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div>
        <img className='h-100 w-1800 mb-6' src="https://vtourist.com.vn/wp-content/uploads/2025/10/vtourist_tet2026_2560x798-2048x638.png" alt="" />
      </div>
      <main>
<Title />
<div className="flex justify-center items-center">
  <Image/>
  <Images/>
</div>
        
      </main>

      <Footer />
    </div>
  )
}

export default App