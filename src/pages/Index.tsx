import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/9589ebbd-2271-49e9-ab74-1f009f40b7e7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("🎉 Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время!");
        setFormData({ name: "", contact: "", description: "" });
      } else {
        alert("❌ Ошибка отправки: " + (result.error || "Попробуйте позже"));
      }
    } catch (error) {
      alert("❌ Ошибка соединения. Проверьте интернет и попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-background to-blue/10 pointer-events-none" />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center hover-scale">
            <img 
              src="https://cdn.poehali.dev/files/Group 1.png" 
              alt="Точка сборки" 
              className="h-10 md:h-12"
            />
          </a>
          
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href="tel:+79046777224" 
              className="flex items-center gap-2 text-foreground hover:text-purple transition-colors"
            >
              <Icon name="Phone" size={18} />
              <span className="hidden sm:inline font-medium">+7 904 677 7224</span>
            </a>
            
            <a 
              href="https://t.me/leopuz7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue/10 hover:bg-blue/20 text-blue rounded-lg transition-all hover-scale"
            >
              <Icon name="Send" size={18} />
              <span className="hidden sm:inline font-medium">Telegram</span>
            </a>
          </div>
        </div>
      </header>
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ваш <span className="gradient-text">IT-партнёр</span><br />для роста бизнеса
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Сайты, реклама, CRM и не только. Становимся частью вашей команды, чтобы закрывать любые IT-запросы и повышать доход.
            </p>
            <Button onClick={scrollToForm} size="lg" className="bg-gradient-to-r from-purple via-magenta to-blue hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl hover-scale">
              Получить консультацию
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Устали от бесконечных подрядчиков?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Users",
                title: "Новая задача — новый специалист",
                description: "Сайт — к одному, реклама — к другому, CRM — к третьему. Координация съедает ваше время и бюджет."
              },
              {
                icon: "TrendingDown",
                title: "Деньги уходят, а система не строится",
                description: "Каждый делает своё, но ничего не работает вместе. Заявки с рекламы «теряются»."
              },
              {
                icon: "AlertCircle",
                title: "Вам продают лишнее",
                description: "Вместо решения бизнес-задачи навязывают дорогую технологию, которая простаивает."
              }
            ].map((problem, idx) => (
              <Card key={idx} className="p-6 bg-card border-border hover:border-purple/50 transition-all hover-scale animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-14 h-14 bg-gradient-to-br from-purple to-magenta rounded-xl flex items-center justify-center mb-4">
                  <Icon name={problem.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-2xl font-bold text-purple">
              Считали, сколько это уже стоит вашему бизнесу?
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-purple/5 to-background">
        <div className="container max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Один партнёр</span> вместо десяти подрядчиков
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы — ваша «Точка сборки». Берём на себя полную ответственность за digital-развитие вашего бизнеса. Ваш рост — наш главный KPI.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Закрываем все <span className="gradient-text">digital-задачи</span> под ключ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Target", title: "Digital-стратегия и упаковка", items: ["Аудит бизнеса и аналитика ЦА", "Разработка УТП и позиционирования"] },
              { icon: "Globe", title: "Разработка сайтов", items: ["От сложных интернет-магазинов", "До простых продающих лендингов"] },
              { icon: "TrendingUp", title: "Настройка контекстной рекламы", items: ["Яндекс.Директ", "Оптимизация и ведение"] },
              { icon: "Database", title: "Внедрение CRM / МИС", items: ["Настройка систем", "Интеграции"] },
              { icon: "BarChart3", title: "Настройка сквозной аналитики", items: ["Отслеживание конверсий", "Анализ эффективности"] },
              { icon: "Zap", title: "Сопровождение и развитие", items: ["Техническая поддержка", "Стратегические сессии"] }
            ].map((service, idx) => (
              <Card key={idx} className="p-6 bg-card border-border hover:border-blue/50 transition-all hover-scale group animate-scale-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-blue to-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-purple mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 bg-gradient-to-b from-background via-magenta/5 to-background">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Мы делаем бизнес наших клиентов <span className="gradient-text">сильнее</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-card border-border overflow-hidden relative group hover-scale animate-fade-in">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="px-4 py-1 bg-purple/20 text-purple rounded-full text-sm font-medium">Стоматология</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Стоматология в Набережных Челнах</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Задача:</strong> Увеличить количество первичных записей и автоматизировать напоминания
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Действия:</strong> Лендинг на Tilda → Яндекс.Директ → интеграция с МИС и рассылками в мессенджерах
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-purple/10 rounded-lg">
                    <div className="text-3xl font-bold text-purple">+40%</div>
                    <div className="text-sm text-muted-foreground">заявок</div>
                  </div>
                  <div className="text-center p-4 bg-magenta/10 rounded-lg">
                    <div className="text-3xl font-bold text-magenta">-25%</div>
                    <div className="text-sm text-muted-foreground">стоимость заявки</div>
                  </div>
                  <div className="text-center p-4 bg-blue/10 rounded-lg">
                    <div className="text-3xl font-bold text-blue">+15%</div>
                    <div className="text-sm text-muted-foreground">повторных визитов</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border overflow-hidden relative group hover-scale animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="px-4 py-1 bg-blue/20 text-blue rounded-full text-sm font-medium">Туризм</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Редизайн сайта турагентства</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Задача:</strong> Обновить устаревший сайт и улучшить позиции в поисковой выдаче
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Действия:</strong> Современный дизайн → SEO-оптимизация → техническое улучшение скорости загрузки
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue/10 rounded-lg">
                    <div className="text-3xl font-bold text-blue">ТОП-3</div>
                    <div className="text-sm text-muted-foreground">в поиске Яндекса</div>
                  </div>
                  <div className="text-center p-4 bg-purple/10 rounded-lg">
                    <div className="text-3xl font-bold text-purple">+60%</div>
                    <div className="text-sm text-muted-foreground">органического трафика</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border overflow-hidden relative group hover-scale animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-magenta/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="px-4 py-1 bg-magenta/20 text-magenta rounded-full text-sm font-medium">Производство</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Сайт для компании по производству дверей</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Задача:</strong> Создать современный каталог продукции и запустить онлайн-продажи
                </p>
                <p className="text-muted-foreground mb-6">
                  <strong>Действия:</strong> Разработка сайта с каталогом → интеграция форм заявок → оптимизация под поисковики
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-magenta/10 rounded-lg">
                    <div className="text-3xl font-bold text-magenta">12</div>
                    <div className="text-sm text-muted-foreground">заявок в первый месяц</div>
                  </div>
                  <div className="text-center p-4 bg-blue/10 rounded-lg">
                    <div className="text-3xl font-bold text-blue">0₽</div>
                    <div className="text-sm text-muted-foreground">без рекламы</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button onClick={scrollToForm} size="lg" className="bg-gradient-to-r from-magenta to-purple hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl hover-scale">
              Обсудить мой проект
            </Button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="relative py-20 px-4 bg-gradient-to-b from-background to-purple/5">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Готовы обсудить <span className="gradient-text">партнёрство</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Кратко опишите вашу задачу, и мы подготовим первичные идеи для обсуждения
            </p>
          </div>

          <Card className="p-8 bg-card border-border shadow-2xl animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Как к вам обращаться?"
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Телефон или Telegram</label>
                <Input
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="+7 или @username"
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Краткое описание задачи (необязательно)</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Расскажите, чем мы можем помочь..."
                  className="bg-background border-border min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple via-magenta to-blue hover:opacity-90 text-white font-semibold text-lg rounded-xl hover-scale disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Отправляю..." : "Отправить запрос"}
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>

            <p className="text-sm text-muted-foreground text-center mt-6 flex items-center justify-center gap-2">
              <Icon name="Lock" size={16} className="text-purple" />
              Конфиденциально. Первая консультация — бесплатно.
            </p>
          </Card>
        </div>
      </section>

      <footer className="relative py-12 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Точка сборки. Ваш IT-партнёр для роста бизнеса.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;