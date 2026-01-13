import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });



  useEffect(() => {
    const targetDate = new Date('2026-01-23T22:00:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

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
            <Button className="bg-gold text-black hover:bg-gold/90 font-semibold px-6 rounded-none border-2 border-white">
              ЗАБРОНИРОВАТЬ
            </Button>
          </div>
        </div>
      </nav>

      <section 
        id="hero" 
        className="min-h-screen relative flex items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 glitch-bg"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/photo_5418229410483082685_y.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
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
              className="bg-gold text-black hover:bg-gold/90 font-bold text-lg px-8 py-6 rounded-none uppercase tracking-wider"
              onClick={() => scrollToSection('date')}
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              23.01.2026
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 rounded-none uppercase tracking-wider"
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
            <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-none border-l-4 border-l-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-4 rounded-none">
                  <Icon name="Sparkles" className="text-white" size={32} />
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

            <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-none border-l-4 border-l-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-4 rounded-none">
                  <Icon name="Music" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Отличная музыка</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Зажигательные треки и лучшие хиты создадут идеальную атмосферу для танцев. 
                    Приготовьтесь к взрывной энергетике и незабываемому музыкальному опыту, 
                    который запомнится надолго.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-none border-l-4 border-l-white">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-4 rounded-none">
                  <Icon name="Martini" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Элитный алкоголь</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Бар с премиальными напитками высшего качества для истинных ценителей. 
                    Каждый гость XXCLUSIVE — это VIP персона, достойная только лучшего.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-black relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-6xl font-black text-center mb-8">
            <span className="text-white">ПРИМЕРЫ</span> <span className="text-gold">ЛУКОВ</span>
          </h2>
          <p className="text-xl text-center text-white/70 mb-16 font-light">
            ВДОХНОВИСЬ И СОЗДАЙ СВОЙ ОБРАЗ
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-white/20 hover:border-white/50 transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/photo_5411543177195361170_x.jpg" 
                alt="Look 1" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-white/20 hover:border-white/50 transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/photo_5411357913781048249_y.jpg" 
                alt="Look 2" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-white/20 hover:border-white/50 transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/photo_5411357913781048248_y.jpg" 
                alt="Look 3" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-white/20 hover:border-white/50 transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/photo_5411357913781048253_y.jpg" 
                alt="Look 4" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-white/20 hover:border-white/50 transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/files/photo_5411357913781048247_y.jpg" 
                alt="Look 5" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
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
            <Card className="bg-white/5 border-white/20 p-10 backdrop-blur-sm rounded-none">
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

            <Card className="bg-white/5 border-white/20 p-10 backdrop-blur-sm rounded-none">
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

          <Card className="bg-white/5 border-white/20 p-8 backdrop-blur-sm rounded-none border-l-4 border-l-white">
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

          <Card className="bg-white/5 border-white/20 p-16 backdrop-blur-sm relative overflow-hidden rounded-none">
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
              
              <div className="grid grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-4xl font-black text-gold mb-1">{timeLeft.days}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">Дней</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-4xl font-black text-gold mb-1">{timeLeft.hours}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">Часов</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-4xl font-black text-gold mb-1">{timeLeft.minutes}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">Минут</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-4xl font-black text-gold mb-1">{timeLeft.seconds}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">Секунд</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-secondary" size={28} />
                  <span className="text-2xl font-semibold text-white">???</span>
                </div>
                <div className="hidden sm:block w-2 h-2 bg-gold rounded-full"></div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-secondary" size={28} />
                  <span className="text-2xl font-semibold text-white">???</span>
                </div>
              </div>
              <p className="text-xl text-white/70 mb-10 font-light">
                Незабываемая ночь, которая запомнится навсегда
              </p>
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 font-black text-xl px-12 py-8 rounded-none uppercase tracking-wider">
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