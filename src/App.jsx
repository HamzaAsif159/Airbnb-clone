import './App.css'
import { Navbar } from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import data from './data.js'

function App() {
  const dataArray = data.map(cards => {
    return <Card
    id ={cards.id}
    title = {cards.title}
    description = {cards.description}
    price = {cards.price}
    img = {cards.coverImg}
    reviewCount = {cards.stats.reviewCount}
    country = {cards.location}
    rating = {cards.stats.rating}
    />
})
  return (
    <div>
       <Navbar />
       <Hero />
       <div className='cards-container'>
          {dataArray}
       </div>
    </div>
  )
}

export default App
