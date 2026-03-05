# 📂 Pasta de Imagens - LeoSec

Coloque todas as imagens do seu site nesta pasta.

## Estrutura Recomendada

```
images/
├── logo/
│   ├── logo-principal.png
│   └── logo.jpg
├── produtos/
│   ├── ghost-menu.jpg
│   ├── auto-aim.jpg
│   └── kernel-spoofer.jpg
├── cursos/
│   ├── engenharia-reversa.jpg
│   ├── cpp-cheat.jpg
│   └── kernel-exploitation.jpg
├── sociais/
│   ├── youtube.png
│   ├── github.png
│   ├── instagram.png
│   └── discord.png
└── background/
    ├── bg-hero.jpg
    └── bg-footer.jpg
```

## Como Referenciar as Imagens

### No JavaScript/React (src/app.js)
```javascript
// Logo principal
const SITE_LOGO = "images/logo/logo-principal.png";

// Em um ProductCard
<ProductCard 
  title="Ghost Menu V2" 
  description="..." 
  image="images/produtos/ghost-menu.jpg"
  ...
/>
```

### No CSS (styles.css)
```css
.hero-bg {
  background-image: url('images/background/bg-hero.jpg');
}
```

### No HTML (index.html)
```html
<img src="images/logo/logo-principal.png" alt="LeoSec Logo">
```

## 📐 Tamanhos Recomendados

| Tipo | Dimensão | Formato | Tamanho |
|------|----------|---------|--------|
| Logo | 512x512 | PNG/JPG | <500KB |
| Produto | 400x300 | JPG | <200KB |
| Curso | 400x300 | JPG | <200KB |
| Background | 1920x1080 | JPG | <500KB |
| Ícone | 64x64 | PNG | <50KB |

## 💾 Otimização de Imagens

Para melhor performance:
1. Comprima as imagens (use TinyPNG ou similar)
2. Use JPEG para fotos
3. Use PNG para logos/ícones com transparência
4. Mantenha resoluções proporcionais

## 🌐 Convertendo URLs em Arquivos Locais

Se tem uma imagem em URL que quer usar localmente:

1. Baixe a imagem
2. Coloque em `images/` com um nome descritivo
3. Substitua a URL pelo caminho local

**Exemplo:**
```javascript
// Antes (URL remota)
const SITE_LOGO = "https://imgcdn.stablediffusionweb.com/2024/12/15/...";

// Depois (arquivo local)
const SITE_LOGO = "images/logo/logo-principal.png";
```

## 📝 Dicas Importantes

✅ Use nomes de arquivos descritivos e em minúsculas
✅ Organize em subpastas por categoria
✅ Comprima todas as imagens antes de adicionar
✅ Mantenha a pasta sincronizada com seu servidor
❌ Não use espaços nos nomes dos arquivos
❌ Não deixe arquivos temporários nesta pasta

---
**Qualquer dúvida, modifique conforme necessário!**
