import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular'
import { Offer } from '../components/Offer/Offer'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'

export const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offer />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}
