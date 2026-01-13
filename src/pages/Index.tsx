import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gold tracking-wider">XXCLUSIVE</div>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                О вечеринке
              </button>
              <button 
                onClick={() => scrollToSection('dresscode')} 
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                Дресс код
              </button>
              <button 
                onClick={() => scrollToSection('date')} 
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                Дата
              </button>
            </div>
            <Button className="bg-gold text-black hover:bg-gold/90 font-semibold">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section 
        id="hero" 
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/photo_5418229410483082685_y.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tighter">
            <span className="text-gold drop-shadow-2xl">XX</span>
            <span className="text-white drop-shadow-2xl">CLUSIVE</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-8 tracking-wide">
            ЭКСКЛЮЗИВНАЯ НОЧЬ В ТВОЕЙ ЖИЗНИ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gold text-black hover:bg-gold/90 font-bold text-lg px-8 py-6"
              onClick={() => scrollToSection('date')}
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              23.01.2026
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold text-lg px-8 py-6"
              onClick={() => scrollToSection('about')}
            >
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-gold" size={40} />
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-gradient-to-b from-black to-[#0a0a0a] relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-6xl font-black text-center mb-16 animate-slide-up">
            <span className="text-gold">О</span> ВЕЧЕРИНКЕ
          </h2>
          
          <div className="grid gap-8">
            <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 p-4 rounded-lg">
                  <Icon name="Sparkles" className="text-gold" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gold">Незабываемая атмосфера</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Погрузитесь в мир роскоши и эксклюзива. XXCLUSIVE — это не просто вечеринка, 
                    это событие, которое запомнится на всю жизнь. Премиальный звук, 
                    световое шоу мирового уровня и атмосфера настоящего клубного драйва.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <Icon name="Music" className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-secondary">Лучшие диджеи города</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Топовые резиденты будут создавать непрерывный музыкальный поток из лучших 
                    хитов EDM, House и Tech House. Приготовьтесь к взрывной энергетике 
                    и танцам до рассвета под самые горячие треки сезона.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 p-4 rounded-lg">
                  <Icon name="Martini" className="text-gold" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gold">VIP сервис</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Эксклюзивный бар с премиальными напитками, профессиональные бармены-шоумены 
                    и персональный сервис высшего класса. Каждый гость XXCLUSIVE — это VIP персона, 
                    достойная королевского обслуживания.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="dresscode" className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-6xl font-black text-center mb-8">
            <span className="text-secondary">ДРЕСС</span> <span className="text-gold">КОД</span>
          </h2>
          <p className="text-xl text-center text-white/70 mb-16 font-light">
            ТОЛЬКО ДЛЯ ТЕХ, КТО ПОНИМАЕТ СТИЛЬ
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-gold/30 p-10 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gold/20 p-6 rounded-full mb-6">
                  <Icon name="User" className="text-gold" size={48} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gold">ДЛЯ НЕГО</h3>
                <ul className="space-y-3 text-lg text-white/90">
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Check" className="text-gold" size={20} />
                    <span>Широкие джинсы</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Check" className="text-gold" size={20} />
                    <span>Яркие футболки</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Check" className="text-gold" size={20} />
                    <span>Цепи и кольца</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Check" className="text-gold" size={20} />
                    <span>Другие аксессуары по желанию</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-secondary/30 p-10 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary/20 p-6 rounded-full mb-6">
                  <Icon name="Sparkle" className="text-secondary" size={48} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-secondary">ДЛЯ НЕЁ</h3>
                <ul className="space-y-3 text-lg text-white/90">
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Короткая юбка или шорты</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Модный лук</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Разнообразные аксессуары</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Icon name="Check" className="text-secondary" size={20} />
                    <span>Всё, что пожелаешь надеть!</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-gold/10 to-secondary/10 border-gold p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <Icon name="AlertCircle" className="text-gold" size={32} />
              <div>
                <p className="text-xl font-semibold text-white mb-2">ВАЖНО</p>
                <p className="text-white/80 text-lg">
                  Спортивная одежда и потрёпанные кроссовки запрещены. Вход только для гостей, 
                  соответствующих современному клубному стилю. 
                  XXCLUSIVE — это территория элегантности и актуальной моды.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="date" className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-black relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-6xl font-black mb-12">
            <span className="text-white">ДАТА</span> <span className="text-gold">СОБЫТИЯ</span>
          </h2>

          <Card className="bg-white/5 border-gold/50 p-16 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-secondary/10"></div>
            <div className="relative z-10">
              <div className="mb-8">
                <Icon name="Calendar" className="text-gold mx-auto" size={64} />
              </div>
              <div className="text-9xl font-black mb-4 text-gold drop-shadow-2xl">
                23.01
              </div>
              <div className="text-5xl font-bold mb-8 text-white">
                2026
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-secondary" size={28} />
                  <span className="text-2xl font-semibold text-white">22:00</span>
                </div>
                <div className="hidden sm:block w-2 h-2 bg-gold rounded-full"></div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-secondary" size={28} />
                  <span className="text-2xl font-semibold text-white">XXCLUSIVE CLUB</span>
                </div>
              </div>
              <p className="text-xl text-white/70 mb-10 font-light">
                Приготовьтесь к ночи, которая изменит ваше представление о клубной культуре
              </p>
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-black text-xl px-12 py-8">
                <Icon name="Ticket" className="mr-3" size={24} />
                ЗАБРОНИРОВАТЬ МЕСТО
              </Button>
              <p className="text-sm text-white/50 mt-6">
                Количество мест ограничено • Только 18+
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-4xl font-black mb-4 text-gold">XXCLUSIVE</div>
          <p className="text-white/60 mb-6">Эксклюзивные вечеринки премиум класса</p>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-gold">
              <Icon name="Twitter" size={24} />
            </Button>
          </div>
          <p className="text-white/40 text-sm">© 2026 XXCLUSIVE. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;