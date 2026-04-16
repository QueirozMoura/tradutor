<div align="center">

# 🌍 Tradutor

Um tradutor web moderno e responsivo que traduz textos em tempo real entre múltiplos idiomas.

[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-purple?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**Demo**](#) • [**Reportar Bug**](#) • [**Sugerir Feature**](#)

</div>

---

## ✨ Características

- 🎯 **Tradução em Tempo Real** - Resultados instantâneos conforme você digita
- 🔄 **Troca de Idiomas** - Botão inteligente para inverter idiomas de origem e destino
- 🌐 **Suporta 6 Idiomas** - Inglês, Espanhol, Francês, Alemão, Italiano e Português
- ⚡ **Performance Otimizada** - Construído com Vite para máxima velocidade
- 📱 **Responsivo** - Interface adaptada para desktop, tablet e mobile
- 🎨 **Interface Moderna** - Design limpo e intuitivo com Tailwind CSS
- ♿ **Acessível** - Construído seguindo padrões de acessibilidade web

---

## 🚀 Tech Stack

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2 | Library UI |
| **Vite** | 8.0 | Build tool |
| **Tailwind CSS** | 4.2 | Styling |
| **MyMemory API** | - | Tradução |

---

## 📋 Pré-requisitos

- Node.js 16.x ou superior
- npm ou yarn

---

## 🔧 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/QueirozMoura/tradutor.git
cd tradutor
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

---

## 📦 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento com HMR
npm run dev

# Constrói a aplicação para produção
npm run build

# Visualiza a build de produção
npm run preview

# Executa linter (ESLint)
npm run lint

# Deploy para GitHub Pages
npm run deploy
```

---

## 💻 Como Usar

1. **Selecione o idioma de origem** - Escolha na lista suspensa esquerda
2. **Selecione o idioma de destino** - Escolha na lista suspensa direita
3. **Digite o texto** - A tradução aparece automaticamente
4. **Troque os idiomas** - Clique no ícone de seta para inverter

> 💡 Dica: A tradução ocorre automaticamente 800ms após você parar de digitar

---

## 📁 Estrutura do Projeto

```
tradutor/
├── src/
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Ponto de entrada
│   ├── index.css         # Estilos globais
│   └── assets/           # Imagens e recursos
├── public/               # Arquivos estáticos
├── index.html            # HTML principal
├── vite.config.js        # Configuração do Vite
├── eslint.config.js      # Configuração do ESLint
├── tailwind.config.js    # Configuração do Tailwind
└── package.json          # Dependências
```

---

## 🔌 API Utilizada

Este projeto utiliza a **MyMemory API** para tradução:
- Endpoint: `https://api.mymemory.translated.net/get`
- Livre e sem autenticação necessária
- Suporta múltiplos idiomas

---

## 🎯 Funcionalidades Futuras

- [ ] Histórico de traduções
- [ ] Copiar tradução com um clique
- [ ] Suporte a mais idiomas
- [ ] Tema claro/escuro
- [ ] Pronúncia de áudio
- [ ] Exportar traduções

---

## 🐛 Tratamento de Erros

A aplicação trata os seguintes cenários:

- ✅ Texto vazio - Limpa a tradução
- ✅ Erro de conexão - Exibe mensagem de erro
- ✅ Respostas inválidas - Valida antes de exibir

---

## 📱 Compatibilidade

| Navegador | Suporte |
|-----------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! 

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Queiroz Moura**

- GitHub: [@QueirozMoura](https://github.com/QueirozMoura)
- LinkedIn: [seu-linkedin](#)

---

## 🙏 Agradecimentos

- [MyMemory API](https://mymemory.translated.net/) pela tradução gratuita
- [React](https://react.dev) e [Vite](https://vitejs.dev) pela excelente developer experience
- [Tailwind CSS](https://tailwindcss.com) pelo design system incrível

---

<div align="center">

**[⬆ Voltar ao topo](#-tradutor)**

Made with 💙 by Queiroz Moura

</div>
