# 🚀 Guia de Deploy - Conversor de IP

Este guia mostra como publicar sua aplicação Flask online usando diferentes serviços de hospedagem.

## 📋 Opções de Hospedagem

### 1. 🆓 **Render** (Recomendado - Gratuito)

**Vantagens:**
- Gratuito para projetos pessoais
- Deploy automático via GitHub
- HTTPS incluído
- Fácil de configurar

**Passos:**
1. Crie uma conta em [render.com](https://render.com)
2. Faça upload do projeto para GitHub
3. Conecte o repositório no Render
4. Configure as variáveis de ambiente
5. Deploy automático!

**Configuração necessária:**
- Crie um arquivo `render.yaml` (vou criar para você)
- Ajuste o `requirements.txt`

### 2. 🌐 **Heroku** (Gratuito limitado)

**Vantagens:**
- Plataforma consolidada
- Boa documentação
- Add-ons disponíveis

**Passos:**
1. Crie conta no [heroku.com](https://heroku.com)
2. Instale Heroku CLI
3. Faça login: `heroku login`
4. Crie app: `heroku create nome-do-app`
5. Deploy: `git push heroku main`

**Configuração necessária:**
- Arquivo `Procfile` (vou criar para você)
- Arquivo `runtime.txt`

### 3. ☁️ **PythonAnywhere** (Gratuito limitado)

**Vantagens:**
- Especializado em Python
- Interface web simples
- Suporte a Flask nativo

**Passos:**
1. Crie conta em [pythonanywhere.com](https://pythonanywhere.com)
2. Faça upload dos arquivos
3. Configure Web App
4. Defina arquivo WSGI

### 4. 🔧 **Railway** (Gratuito limitado)

**Vantagens:**
- Deploy simples
- GitHub integration
- Boa performance

**Passos:**
1. Crie conta em [railway.app](https://railway.app)
2. Conecte GitHub
3. Selecione o repositório
4. Deploy automático

### 5. 💻 **VPS Próprio** (Pago)

**Opções:**
- DigitalOcean ($5/mês)
- Linode ($5/mês)
- AWS EC2 (variável)
- Google Cloud (variável)

## 🛠️ Preparação para Deploy

Vou criar os arquivos necessários para facilitar o deploy:

### Arquivos que criarei:
1. `Procfile` (para Heroku)
2. `render.yaml` (para Render)
3. `runtime.txt` (especifica versão Python)
4. `wsgi.py` (arquivo WSGI)
5. `requirements.txt` (já existe, mas vou verificar)

## 📝 Instruções Específicas

### Para Render:
1. Faça fork/upload do projeto no GitHub
2. No Render, clique "New Web Service"
3. Conecte seu repositório
4. Configure:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `python src/main.py`
   - **Environment:** Python 3

### Para Heroku:
1. Instale Git e Heroku CLI
2. No terminal do projeto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   heroku create seu-app-name
   git push heroku main
   ```

### Para PythonAnywhere:
1. Faça upload dos arquivos via interface web
2. Vá em "Web" → "Add a new web app"
3. Escolha "Manual configuration" → Python 3.x
4. Configure o arquivo WSGI

## 🔒 Configurações de Segurança

Para produção, altere:
1. `SECRET_KEY` no `main.py`
2. Desative `debug=True`
3. Configure variáveis de ambiente

## 📞 Suporte

Se tiver dúvidas:
1. Documentação oficial de cada plataforma
2. Comunidades no Discord/Reddit
3. Stack Overflow

**Recomendação:** Comece com o Render - é o mais fácil para iniciantes!

