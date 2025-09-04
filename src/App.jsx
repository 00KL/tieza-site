import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

// Import images
import heroImage from "./assets/hero-pilates-studio.jpg";
import equipmentImage from "./assets/pilates-equipment-close.jpg";
import classImage from "./assets/pilates-class-group.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ana Lúcia Poubel",
      profession: "Assistente social",
      text: "Fazer Pilates vai além de exercício corporal. Constantemente exercitamos nossas mentes, nossos corações. É uma terapia diária. Fazemos amizade, convivemos com as diferenças e dificuldades de pessoas diferentes e especiais ao mesmo tempo. Adoro Pilates, especialmente o Teste!",
    },
    {
      name: "Fábio Barros",
      profession: "Designer",
      text: "Trabalho muitas horas sentado e meu médico me recomendou o Pilates para as dores que eu sentia nas costas. Eu tinha alguns preconceitos com relação ao Pilates já que algumas pessoas diziam que a máquina faz o esforço por você. Isso mudou e hoje o Pilates é minha principal atividade física.",
    },
    {
      name: "Tatiana Britto",
      profession: "Advogada",
      text: "Sou aluna do Studio Teste há quase 6 anos e posso dizer que minha vida mudou: não tive mais problemas relacionados à coluna e ao joelho, e outros benefícios surgiram. As aulas são dinâmicas e em um ambiente muito agradável, com o que há de mais novo na área.",
    },
    {
      name: "Inês Teixeira",
      profession: "Contadora",
      text: "Com o Pilates, além de emagrecer, estamos fortalecendo toda nossa estrutura muscular. Atividades como levantar do sofá e subir escadas que antes eram realizadas com muita dificuldade, minha mãe, Zezé, agora faz sozinha e com destreza.",
    },
  ];

  const units = [
    {
      title: "Studio Teste UNIDADE I",
      subtitle: "onde tudo começou",
      description:
        "Aqui você encontra um conceito diferenciado em saúde e bem-estar. No Studio Teste, trabalhamos para melhorar a qualidade de vida dos nossos alunos por meio da prática do RPG e do Pilates, nas versão clássica ou fitness.",
    },
    {
      title: "Studio Teste UNIDADE II",
      subtitle: "outra opção para o cuidado com você",
      description:
        "Nesta unidade, os benefícios do Pilates são aliados ao treinamento funcional. A proposta surgiu do desejo dos alunos de realizar exercícios aeróbicos e mais intensos em um ambiente tranquilo como o do estúdio.",
    },
    {
      title: "Studio Teste UNIDADE III",
      subtitle: "O caçulinha",
      description:
        "Nossa terceira e mais nova unidade está moderna, aconchegante e foi projetada com muito cuidado para receber novos alunos da região para aulas de Pilates além de profissionais interessados em cursos e encontros.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5527999112027?text=Olá! Gostaria de agendar minha aula experimental gratuita!",
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
            className="text-2xl font-bold text-purple-700"
          >
            Teste
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("units")}
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Unidades
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-purple-700 transition-colors"
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
                className="text-gray-700 hover:text-purple-700 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-purple-700 transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-purple-700 transition-colors text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("units")}
                className="text-gray-700 hover:text-purple-700 transition-colors text-left"
              >
                Unidades
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-purple-700 transition-colors text-left"
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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Bem-vindo ao <span className="text-purple-300">Studio Teste</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Aqui você encontra um conceito diferenciado em saúde e bem-estar.
            Trabalhamos para melhorar a qualidade de vida dos nossos alunos por
            meio da prática do RPG e do Pilates.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={handleWhatsApp}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full"
            >
              Agende sua Aula Experimental Gratuita!
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
              className="text-4xl md:text-5xl font-bold text-purple-700 mb-4"
            >
              Studio Teste
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              um pouco sobre nós
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6">
                O <strong>Studio Teste</strong> nasceu em 2007 com a proposta de
                oferecer aos alunos um atendimento diferenciado voltado à
                promoção da saúde e à qualidade de vida. As atividades são
                realizadas com, no máximo, dois alunos por instrutor,
                priorizando os benefícios de um trabalho personalizado.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Formada por profissionais especializados e em constante
                aperfeiçoamento, nossa equipe está pronta para orientar de forma
                individualizada cada aluno, em especial idosos, gestantes,
                pacientes com dores crônicas e aqueles que buscam reabilitação.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                A frequência é de duas a cinco vezes por semana, com hora
                marcada para aulas, em espaços climatizados, som ambiente e
                todas as condições que proporcionem ao aluno obter saúde física
                e mental.
              </p>
              <p className="text-lg text-gray-700">
                Outro diferencial é o <em>Pilates Kids</em>, indicado por
                pediatras como forma de melhorar a postura, a concentração e a
                ansiedade. São aulas lúdicas, individuais ou em grupo, para
                crianças a partir de 4 anos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={equipmentImage}
                alt="Equipamento de Pilates"
                className="rounded-lg shadow-lg"
              />
              <img
                src={classImage}
                alt="Aula de Pilates"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              DEPOIMENTOS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl"
            >
              o que nossos clientes dizem
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="text-xl md:text-2xl mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <p className="text-lg font-semibold">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-purple-200">
                  {testimonials[currentTestimonial].profession}
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section id="units" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-purple-700 mb-4"
            >
              NOSSAS UNIDADES
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              três unidades para sua escolha
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {units.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-2">
                      {unit.title}
                    </h3>
                    <p className="text-purple-500 mb-4 italic">
                      {unit.subtitle}
                    </p>
                    <p className="text-gray-700">{unit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-700 mb-4"
          >
            SIGA NOSSAS REDES!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            curta e compartilhe Teste
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <Button variant="outline" size="lg" className="rounded-full">
              <Instagram className="mr-2" size={20} />
              Instagram
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Facebook className="mr-2" size={20} />
              Facebook
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
              className="text-4xl md:text-5xl font-bold text-purple-700 mb-4"
            >
              FALE CONOSCO
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              tire suas dúvidas entrando em contato!
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input placeholder="Nome completo" />
                    <Input type="email" placeholder="E-mail" />
                    <Input type="tel" placeholder="Telefone" />
                    <Textarea placeholder="Mensagem" rows={4} />
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  OU DIRETO PELO TELEFONE (WhatsApp)
                </h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  99 99999 9999
                </div>
                <Button
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chamar no WhatsApp
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-600" size={20} />
                  <span>Vitória, ES - 3 Unidades</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-600" size={20} />
                  <span>(99) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-600" size={20} />
                  <span>contato@testMail.com.br</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Teste</h3>
              <p className="text-purple-200">
                Studio de Pilates especializado em atendimento personalizado e
                qualidade de vida.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <button onClick={() => scrollToSection("about")}>
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("testimonials")}>
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("units")}>
                    Unidades
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")}>
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-purple-200">
                <p>(99) 99999-9999</p>
                <p>contato@testMail.com.br</p>
                <p>Vitória, ES</p>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-600 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2024 Studio Teste. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
}

export default App;
