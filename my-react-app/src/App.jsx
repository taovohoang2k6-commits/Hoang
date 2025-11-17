import Footer from "./components/Footer";
import Header from "./components/Header"
function App() {
const tours =[
     {
      id: 1,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
     {
      id: 2,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },
     {
      id: 3,
      title: 'Tour Du Lịch Cuba',
      image:
        'https://vtourist.com.vn/wp-content/uploads/2024/04/Tour-Bo-Dong-My-10N9D-destination-new-york-01-1-1200x800.jpg',
    },

];
  return (
    <><div>
      <Header />
      <h1 className="text-3x1 text-blue-500 text-center font-bold border-b-2 border-b-orange-300 uppercase">Tour nội địa</h1>
      <p className="text-xl font-medium my-2">
        Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn những khoảnh khắc tuyệt vời và nâng tầm cuộc sống. Chúng tôi cam kết mang đến những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo cách hoàn hảo nhất
      </p>
      <div  className="flex gap-2">
{tours.map(tour => (
  <div>
    <img src={tour.image} width={500} alt="" height={300} />
    <h2 className="text-3xl font-bold text-orange-300">{tour.title}</h2>
  </div>
  
))}
      </div>
       <Footer />
    </div>
   
      
      </>
  )
}

export default App
