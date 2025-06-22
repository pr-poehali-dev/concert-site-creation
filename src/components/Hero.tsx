import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-blue/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-pink/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-neon-green/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/6 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-black text-6xl md:text-8xl mb-6 leading-tight">
            <span className="text-neon-blue animate-neon-pulse">ЗВУК</span>
            <br />
            <span className="text-neon-pink animate-neon-pulse">СЦЕНА</span>
            <br />
            <span className="text-neon-green animate-neon-pulse">ЭМОЦИИ</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-open-sans">
            Организуем незабываемые концерты и фестивали. Твоя музыка
            заслуживает идеальной сцены.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="neon-border bg-transparent text-neon-blue hover:bg-neon-blue/10 px-8 py-4 text-lg font-montserrat font-semibold"
            >
              <Icon name="Calendar" className="mr-2" />
              Предстоящие События
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="neon-border border-neon-pink text-neon-pink hover:bg-neon-pink/10 px-8 py-4 text-lg font-montserrat font-semibold"
            >
              <Icon name="Music" className="mr-2" />
              Наши Артисты
            </Button>
          </div>

          {/* Social Media Integration */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-neon-pink hover:text-neon-pink/80 transition-colors"
            >
              <Icon name="Instagram" size={28} />
            </a>
            <a
              href="#"
              className="text-neon-blue hover:text-neon-blue/80 transition-colors"
            >
              <Icon name="Facebook" size={28} />
            </a>
            <a
              href="#"
              className="text-neon-green hover:text-neon-green/80 transition-colors"
            >
              <Icon name="Music" size={28} />
            </a>
            <a
              href="#"
              className="text-neon-purple hover:text-neon-purple/80 transition-colors"
            >
              <Icon name="Youtube" size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
