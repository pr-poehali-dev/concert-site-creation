import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SocialPromo = () => {
  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@soundstage_events",
      followers: "150K",
      icon: "Instagram",
      color: "neon-pink",
      description: "Фото и видео с наших событий",
    },
    {
      platform: "Telegram",
      handle: "@soundstage_news",
      followers: "25K",
      icon: "Send",
      color: "neon-blue",
      description: "Первыми узнавайте о новых событиях",
    },
    {
      platform: "VKontakte",
      handle: "soundstage.events",
      followers: "80K",
      icon: "Share",
      color: "neon-green",
      description: "Сообщество любителей живой музыки",
    },
  ];

  const openSocial = (platform: string, handle: string) => {
    let url = "";
    switch (platform.toLowerCase()) {
      case "instagram":
        url = `https://instagram.com/${handle.replace("@", "")}`;
        break;
      case "telegram":
        url = `https://t.me/${handle.replace("@", "")}`;
        break;
      case "vkontakte":
        url = `https://vk.com/${handle}`;
        break;
    }
    if (url) window.open(url, "_blank");
  };

  const sharePromo = () => {
    const text =
      "🎵 Присоединяйтесь к SOUNDSTAGE EVENTS - лучшие концерты и фестивали! 🚀";
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: "SOUNDSTAGE EVENTS",
        text: text,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
      alert("Ссылка скопирована в буфер обмена!");
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            <span className="text-neon-green animate-neon-pulse">СЛЕДИТЕ</span>{" "}
            <span className="text-white">ЗА НАМИ</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу и будьте в курсе всех событий
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <Card
              key={index}
              className="glass-effect border-gray-700 hover:border-neon-purple/50 transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full glass-effect flex items-center justify-center text-${social.color} group-hover:neon-glow transition-all duration-300`}
                >
                  <Icon name={social.icon as any} size={24} />
                </div>
                <CardTitle className="font-montserrat font-bold text-xl text-white">
                  {social.platform}
                </CardTitle>
                <p className={`text-${social.color} font-semibold`}>
                  {social.followers} подписчиков
                </p>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-gray-300 text-sm mb-4">
                  {social.description}
                </p>
                <p className="text-gray-400 text-xs mb-4">{social.handle}</p>
                <Button
                  onClick={() => openSocial(social.platform, social.handle)}
                  className={`neon-border bg-transparent text-${social.color} hover:bg-${social.color}/10 w-full`}
                >
                  <Icon name={social.icon as any} className="mr-2" size={16} />
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promo Section */}
        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
              Поделитесь с друзьями! 🎶
            </h3>
            <p className="text-gray-300 mb-6">
              Расскажите друзьям о наших крутых событиях и получите скидку 15%
              на следующий билет
            </p>
            <Button
              onClick={sharePromo}
              size="lg"
              className="neon-border bg-transparent text-neon-purple hover:bg-neon-purple/10 px-8 py-4 font-montserrat font-semibold"
            >
              <Icon name="Share2" className="mr-2" />
              Поделиться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialPromo;
