import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const artists = [
  {
    id: 1,
    name: "ALEXANDRA VOLT",
    genre: "Electronic / Techno",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face",
    followers: "2.5M",
    instagram: "@alexvolt_music",
    spotify: "alexandra-volt",
    color: "neon-blue",
  },
  {
    id: 2,
    name: "CYBER PHOENIX",
    genre: "Synthwave / Rock",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face",
    followers: "1.8M",
    instagram: "@cyber_phoenix",
    spotify: "cyber-phoenix-band",
    color: "neon-pink",
  },
  {
    id: 3,
    name: "NEON COLLECTIVE",
    genre: "House / Progressive",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop&crop=face",
    followers: "3.2M",
    instagram: "@neoncollective",
    spotify: "neon-collective",
    color: "neon-green",
  },
];

const FeaturedArtists = () => {
  const openSocialLink = (platform: string, handle: string) => {
    let url = "";
    switch (platform) {
      case "instagram":
        url = `https://instagram.com/${handle.replace("@", "")}`;
        break;
      case "spotify":
        url = `https://open.spotify.com/artist/${handle}`;
        break;
    }
    if (url) window.open(url, "_blank");
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-center mb-4">
          <span className="text-neon-pink animate-neon-pulse">FEATURED</span>{" "}
          <span className="text-white">АРТИСТЫ</span>
        </h2>

        <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Познакомьтесь с талантливыми музыкантами, которые зажигают наши сцены
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              className="glass-effect border-gray-700 hover:border-neon-purple/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Followers count overlay */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`glass-effect px-3 py-1 rounded-full text-${artist.color} text-sm font-semibold`}
                  >
                    <Icon name="Users" size={14} className="inline mr-1" />
                    {artist.followers}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                  {artist.name}
                </h3>
                <p
                  className={`text-${artist.color} text-sm font-semibold mb-4`}
                >
                  {artist.genre}
                </p>

                {/* Social Media Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        openSocialLink("instagram", artist.instagram)
                      }
                      className="text-neon-pink hover:bg-neon-pink/10 p-2"
                    >
                      <Icon name="Instagram" size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openSocialLink("spotify", artist.spotify)}
                      className="text-neon-green hover:bg-neon-green/10 p-2"
                    >
                      <Icon name="Music" size={18} />
                    </Button>
                  </div>

                  <Button
                    size="sm"
                    className={`neon-border bg-transparent text-${artist.color} hover:bg-${artist.color}/10 px-4`}
                  >
                    <Icon name="Heart" className="mr-1" size={14} />
                    Follow
                  </Button>
                </div>

                {/* Instagram handle */}
                <p className="text-gray-400 text-xs mt-3 text-center">
                  {artist.instagram}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
