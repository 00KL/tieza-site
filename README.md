# Studio Teste - Site Oficial

Site oficial do Studio Teste, um estúdio de Pilates especializado em atendimento personalizado e qualidade de vida.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **shadcn/ui** - Componentes UI reutilizáveis

## 📋 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Navegação suave entre seções
- ✅ Carousel automático de depoimentos
- ✅ Integração com WhatsApp
- ✅ Formulário de contato
- ✅ Animações e transições suaves
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🎨 Seções do Site

1. **Hero Section** - Apresentação principal com call-to-action
2. **Sobre Nós** - História e diferenciais do studio
3. **Depoimentos** - Testemunhos de clientes com carousel
4. **Unidades** - Informações sobre as 3 unidades
5. **Redes Sociais** - Links para Instagram e Facebook
6. **Contato** - Formulário e informações de contato
7. **Footer** - Informações adicionais e links

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou pnpm

### Comandos

```bash
# Instalar dependências
npm install
# ou
pnpm install

# Executar em modo desenvolvimento
npm run dev
# ou
pnpm run dev

# Build para produção
npm run build
# ou
pnpm run build

# Preview do build
npm run preview
# ou
pnpm run preview
```

## 🚀 Deploy no Vercel

### Método 1: Deploy Automático via GitHub

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte sua conta GitHub
4. Selecione o repositório
5. Configure as seguintes opções:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em "Deploy"

### Método 2: Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na Vercel
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Método 3: Deploy Manual

1. Execute `npm run build`
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Faça upload da pasta `dist`
5. Configure o nome do projeto
6. Clique em "Deploy"

## ⚙️ Configurações do Vercel

### vercel.json (opcional)

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Variáveis de Ambiente

Não há variáveis de ambiente necessárias para este projeto.

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1

## 📞 Contato

- **WhatsApp**: (99) 99999-9999
- **Email**: contato@testMail.com.br
- **Localização**: Vitória, ES - 3 Unidades

## 📄 Licença

Este projeto foi desenvolvido para o Studio Teste. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o Studio Teste**
