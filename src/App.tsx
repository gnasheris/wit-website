import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Marquee from '@/components/Marquee'
import JoinCTA from '@/components/JoinCTA'
import Footer from '@/components/Footer'

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Pillars />
                <Marquee />
                <JoinCTA />
            </main>
            <Footer />
        </>
    )
}