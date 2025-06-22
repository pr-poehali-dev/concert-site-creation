import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import FeaturedArtists from "@/components/FeaturedArtists";
import SocialPromo from "@/components/SocialPromo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <UpcomingEvents />
      <FeaturedArtists />
      <SocialPromo />
    </div>
  );
};

export default Index;
