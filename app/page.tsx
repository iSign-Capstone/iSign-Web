import Hero from './components/Hero'
import Card from './components/Card'
import SectionTitle from './components/SectionTitle'
import FeatureRow from './components/FeatureRow'
import FeatureCard from './components/FeatureCard'
import RevealProvider from './components/RevealProvider';

export default function Home() {
  return (
    <main>
      <RevealProvider />
      <Hero imageSrc="/hero-img-1.png" mobileImageSrc="/hero-mobile.png" />

{/* Cards Section */}
      <section className="pb-24 px-5">
        <div className="w-[98%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            imageSrc="/card-assets/card-pic1.png"
            title="Communication is for Everyone"
            description="Bridging the gap between Deaf and hearing Filipinos."
          />
          <Card
            imageSrc="/card-assets/card-pic2.png"
            title="Real-Time Translation"
            description="FSL to text and speech to text—instantly."
          />
          <Card
            imageSrc="/card-assets/card-pic3.png"
            title="Simple & Accessible"
            description="Works with just your smartphone. No extra devices needed."
          />
        </div>
      </section>

      {/* Feature Rows Section */}

      <SectionTitle
        title="What is iSign?"
        description="Communication should be for everyone."
      />

    <section className="py-16 px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        <FeatureRow
          imageSrc="/phones/phone-1.png"
          title='<span style="color: #F9686A">i</span>Sign is a mobile app that helps Deaf and hearing Filipinos communicate more easily through <span style="color: #F9686A">real-time</span> translation of Filipino Sign Language <span style="color: #F9686A">and speech.</span>'
          description=""
        />
        <FeatureRow
          imageSrc="/phones/phone-2.png"
          title='<span style="color: #F9686A">i</span>Sign includes a <span style="color: #F9686A">built-in</span> Filipino Sign Language dictionary that lets users explore, learn, and <span style="color: #F9686A">understand</span> common signs through clear visual references.'
          description=""
          reverse
        />
        <FeatureRow
          imageSrc="/phones/phone-3.png"
          title='<span style="color: #F9686A">i</span>Sign uses your phone’s camera to capture hand signs and <span style="color: #F9686A">translate</span> Filipino Sign Language into readable text during <span style="color: #F9686A">real-time</span> conversations.'
          description=""
        />
        <FeatureRow
          imageSrc="/phones/phone-4.png"
          title='<span style="color: #F9686A">i</span>Sign allows users to <span style="color: #F9686A">type</span> or <span style="color: #F9686A">speak</span> messages, which are instantly converted into <span style="color: #F9686A">readable text</span> to support smooth communication with Deaf users.'
          description=""
          reverse
        />
      </div>
    </section>

    {/* Why Download iSign */}

      <SectionTitle
        title="Why download iSign?"
        description="Communication should be for everyone."
      />

    {/* Feature Cards Section */}
    <section className="py-16 px-8">
      <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <FeatureCard icon="clock" text="Real-time Translation" bgColor="#FCE565" />
        <FeatureCard icon="mic" text="Speech-to-Text" bgColor="#4DCEF5" />
        <FeatureCard icon="chat" text="2-Way Communication" bgColor="#F9686A" />
        <FeatureCard icon="book" text="Built-in Dictionary" bgColor="#47C856" />
      </div>
    </section>

    </main>
  )
}
