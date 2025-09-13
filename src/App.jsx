import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import {
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  CreditCard,
  Star,
  CircleDollarSign,
} from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

// Import images
import heroImage from "./assets/hero-depilacao.webp";
import servicesImage from "./assets/depilacao.webp";
import tiezaProfileImage from "./assets/tieza.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      name: "Canela",
      price: "R$ 30,00",
      description: "Depilação da canela com cera quente",
    },
    {
      name: "Perna inteira",
      price: "R$ 90,00",
      description: "Depilação completa das pernas com cera quente",
    },
    {
      name: "Coxa + virilha",
      price: "R$ 60,00",
      description: "Depilação da coxa e virilha com cera quente",
    },
    {
      name: "Buço",
      price: "R$ 15,00",
      description: "Remoção delicada dos pelos do buço com cera quente",
    },
    {
      name: "Sobrancelha",
      price: "R$ 30,00",
      description: "Design e depilação de sobrancelhas",
    },
    {
      name: "Virilha",
      price: "R$ 45,00",
      description: "Depilação íntima da virilha com cera quente",
    },
  ];

  const differentials = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Mais de 20 anos de experiência",
      description: "Profissional experiente e qualificada",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Atendimento em domicílio",
      description: "Comodidade e conforto na sua casa",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ambiente climatizado",
      description: "Máximo conforto durante o atendimento",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pagamento flexível",
      description: "Pix ou dinheiro, como preferir",
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/552299999999?text=Olá! Gostaria de agendar um horário para depilação!",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-pink-600"
          >
            Tieza Moraes
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("differentials")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("differentials")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-pink-600 transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 to-purple-600/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.img
            src={tiezaProfileImage}
            alt="Tieza Moraes"
            className="rounded-full w-128 h-128 mx-auto mb-4 object-cover border-4 border-white shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-pink-200">Tieza Moraes</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Depiladora Profissional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Com mais de 20 anos de experiência, oferece depilação de qualidade e
            cuidado especial para suas clientes em Bom Jesus do Norte.
            Atendimento personalizado e ambiente confortável para realçar a sua
            beleza.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={handleWhatsApp}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg rounded-full whatsapp-button"
            >
              <MessageCircle className="mr-2" size={20} />
              Agende já seu horário!
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
            >
              SOBRE MIM
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              profissional dedicada ao seu bem-estar
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6">
                Sou <strong>Tieza Moraes</strong>, depiladora profissional com
                mais de 20 anos de experiência no cuidado e bem-estar feminino.
                Minha paixão é proporcionar às minhas clientes não apenas um
                serviço de qualidade, mas uma experiência completa de cuidado
                pessoal.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Trabalho somente com cera quente. O atendimento de depilação é
                realizado em meu próprio estúdio, proporcionando um ambiente
                climatizado e todos os cuidados de higiene e segurança
                necessários.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Meu atendimento é voltado especialmente para o público feminino,
                com horários flexíveis mediante agendamento via WhatsApp. Aceito
                pagamento em Pix ou dinheiro, sempre priorizando a praticidade
                para minhas clientes.
              </p>
              <p className="text-lg text-gray-700">
                Cada atendimento é personalizado, respeitando as necessidades e
                preferências de cada cliente, sempre com o objetivo de realçar
                sua beleza natural e autoestima.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src={servicesImage}
                alt="Serviços de beleza"
                className="rounded-lg shadow-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
            >
              SERVIÇOS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              cuidados especializados para sua beleza
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow card-hover">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-pink-600 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-2xl font-bold text-gray-800 mb-4">
                      {service.price}
                    </p>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
            >
              DIFERENCIAIS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              por que escolher meus serviços
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                  {differential.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {differential.title}
                </h3>
                <p className="text-gray-600">{differential.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Pronta para se sentir ainda mais bonita?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Agende já seu horário pelo WhatsApp: (22) 99999-9999
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={handleWhatsApp}
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
            >
              <MessageCircle className="mr-2" size={20} />
              Agendar Agora
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
            >
              CONTATO
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              entre em contato e agende seu horário
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-pink-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  WhatsApp
                </h3>
                <p className="text-gray-600">(22) 99999-9999</p>
                <p className="text-sm text-gray-500 mt-2">
                  Horário flexível, somente com agendamento
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-pink-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Localização
                </h3>
                <p className="text-gray-600">Bom Jesus do Norte</p>
                <p className="text-sm text-gray-500 mt-2">
                  Atendimento em domicílio
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CircleDollarSign className="text-pink-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Pagamento
                </h3>
                <p className="text-gray-600">Pix ou Dinheiro</p>
                <p className="text-sm text-gray-500 mt-2">
                  Formas de pagamento aceitas
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4">
              Tieza Moraes
            </h3>
            <p className="text-gray-300 mb-4">
              Depiladora Profissional - Mais de 20 anos de experiência
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <MapPin size={16} className="mr-1" />
                Bom Jesus do Norte
              </span>
              <span className="flex items-center">
                <Phone size={16} className="mr-1" />
                (22) 99999-9999
              </span>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                © 2024 Tieza Moraes. Todos os direitos reservados.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
