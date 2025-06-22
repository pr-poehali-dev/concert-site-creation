import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const events = [
  {
    id: 1,
    title: "NEON NIGHTS FESTIVAL",
    date: "15 ИЮЛЯ 2024",
    venue: "ОЛИМПИЙСКИЙ",
    artist: "ELECTRONIC MASTERS",
    price: "от 2,500₽",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    color: "neon-blue",
  },
  {
    id: 2,
    title: "ROCK REVOLUTION",
    date: "22 ИЮЛЯ 2024",
    venue: "КЛУБ AURORA",
    artist: "THUNDER STORM",
    price: "от 1,800₽",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop",
    color: "neon-pink",
  },
  {
    id: 3,
    title: "SUMMER VIBES",
    date: "5 АВГУСТА 2024",
    venue: "ПАРК ГОРЬКОГО",
    artist: "TROPICAL BEATS",
    price: "от 3,200₽",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
    color: "neon-green",
  },
];

const UpcomingEvents = () => {
  const shareEvent = (event: (typeof events)[0], platform: string) => {
    const text = `🎵 ${event.title} - ${event.date} в ${event.venue}! ${event.price}`;
    const url = window.location.href;

    let shareUrl = "";
    switch (platform) {
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "vk":
        shareUrl = `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
      case "instagram":
        navigator.clipboard.writeText(`${text} ${url}`);
        alert("Текст скопирован! Вставьте в Instagram Stories");
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-center mb-12">
          <span className="text-neon-blue animate-neon-pulse">ПРЕДСТОЯЩИЕ</span>{" "}
          <span className="text-white">СОБЫТИЯ</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="glass-effect border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`text-${event.color} font-montserrat font-bold text-lg`}
                  >
                    {event.date}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl text-white">
                  {event.title}
                </CardTitle>
                <p className="text-gray-300">{event.artist}</p>
                <p className="text-gray-400 text-sm flex items-center">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  {event.venue}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-${event.color} font-bold text-lg`}>
                    {event.price}
                  </span>
                  <Button
                    size="sm"
                    className={`neon-border bg-transparent text-${event.color} hover:bg-${event.color}/10`}
                  >
                    <Icon name="Ticket" className="mr-1" size={16} />
                    Билеты
                  </Button>
                </div>

                {/* Social Share Buttons */}
                <div className="flex justify-center space-x-3 pt-3 border-t border-gray-700">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => shareEvent(event, "telegram")}
                    className="text-neon-blue hover:bg-neon-blue/10"
                  >
                    <Icon name="Send" size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => shareEvent(event, "vk")}
                    className="text-neon-pink hover:bg-neon-pink/10"
                  >
                    <Icon name="Share" size={16} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => shareEvent(event, "instagram")}
                    className="text-neon-green hover:bg-neon-green/10"
                  >
                    <Icon name="Instagram" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
