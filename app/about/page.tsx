import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import StoryCard from "../components/StoryCard";
import RevealProvider from "../components/RevealProvider";
import MissionSection from "../components/MissionSection";
import TutorialStep from "../components/TutorialStep";
import DeveloperCard from '../components/DeveloperCard'

export default function About() {
  return (
    <main>
      <RevealProvider />
      <Hero imageSrc="/hero-img-2.png" mobileImageSrc="/hero-mobile2.png" />

      <SectionTitle
        title="About iSign"
        description="Helping Deaf and hearing Filipinos communicate—anytime, anywhere."
      />

      <section className="py-24 px-8">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    <StoryCard
      imageSrc="/story-assets/story-1.png"
      titleStart="Our"
      titlePink="Story"
      description="iSign is our capstone project, created to build a practical solution for real communication challenges and improve everyday interactions."
    />
    <div className="md:mt-16">
      <StoryCard
        imageSrc="/story-assets/story-2.png"
        titleStart="The"
        titlePink="Problem"
        description="Communication barriers exist for many Deaf individuals in the Philippines, especially in situations where Filipino Sign Language is not widely understood."
      />
    </div>
    <StoryCard
      imageSrc="/story-assets/story-3.png"
      titleStart="Our Big"
      titlePink="Idea"
      description="What if communication didn’t need an interpreter? An app used to bridge the gap between conversations for deaf users, and allows for easier communication—all using just a smartphone."
    />
  </div>
</section>

      <MissionSection />

      <SectionTitle
        title="How to use iSign"
        description="Helping Deaf and hearing Filipinos communicate—anytime, anywhere."
      />

      {/* Tutorial Section */}
      <section className="py-16 px-8">
        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <TutorialStep
            imageSrc="/phones/phone-5.png"
            step={1}
            line1="Open FSL"
            line2="Translation Mode"
          />
          <TutorialStep
            imageSrc="/phones/phone-6.png"
            step={2}
            line1="Point camera"
            line2="to signer"
          />
          <TutorialStep
            imageSrc="/phones/phone-7.png"
            step={3}
            line1="View translated"
            line2="text instantly"
          />
        </div>
      </section>

        <SectionTitle
        title="Meet the iSign Devs!"
        description="Get to know the team behind iSign!"
      />

      {/* Developers Section */}
<section className="py-16 px-8">
   <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
     <DeveloperCard
      imageSrc="/developers/dev-2.png"
      name="Dionne Blacer"
    />
    <DeveloperCard
      imageSrc="/developers/dev-1.png"
      hoverImageSrc="/developers/dev-1-h.png"
      name="Tyshaun Braga"
    />
    <DeveloperCard
      imageSrc="/developers/dev-3.png"
      name="Jelsie Joaquin"
    />
    <DeveloperCard
      imageSrc="/developers/dev-4.png"
      name="Angelico Mallari"
    />
  </div>
</section>

    </main>
  );
}
