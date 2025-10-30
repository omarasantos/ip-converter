# Conversor de IP simples

Uma aplicação web simples e intuitiva para converter endereços IP entre diferentes formatos numéricos.

## 🌟 O que a ferramenta faz?

- **Conversão múltipla**: Converte endereços IP para:
  - Decimal (32-bit)
  - Hexadecimal
  - Binário (com separação por octetos)
  - Octal
- **Interface intuitiva**: Design simples
- **Validação em tempo real**: Verifica a validade do IP inserido
- **Botões de exemplo**: IPs pré-definidos para teste rápido
- **Funcionalidade de cópia**: Copie qualquer resultado com um clique
- **Responsivo**: Funciona e em desktop e mobile

## 🚀 Como usar

1. **Inserir IP**: Digite um endereço IP válido no campo de entrada (ex: 192.168.1.1)
2. **Converter**: Clique no botão "Converter" ou pressione enter
3. **Visualizar Resultados**: Veja as conversões
4. **Copiar valores**: Use os botões "Copiar" para copiar qualquer resultado
5. **Testar exemplos**: Use os botões de exemplo para testar 

## 🛠️ Tecnologias Utilizadas

### Backend
- **Flask**: Framework Python, leve e perfeito para construir a API REST de conversão.
- **Python 3.11**: A linguagem tranquila pra fazer a mágica dos cálculos.
- **ipaddress**: Biblioteca para validação de IPs

### Frontend
- **HTML e CSS:** Design com gradientes e animações suaves para uma boa experiência

## 📁 Estrutura do projeto

```
ip-converter/
├── src/
│   ├── main.py                 # Arquivo principal do Flask
│   ├── routes/
│   │   ├── ip_converter.py     # Rotas da API de conversão
│   │   └── user.py            # Rotas de usuário (template)
│   ├── models/
│   │   └── user.py            # Modelos do banco (template)
│   ├── static/
│   │   ├── index.html         # Interface principal
│   │   ├── style.css          # Estilos CSS
│   │   └── script.js          # Lógica JavaScript
│   └── database/
│       └── app.db             # Banco SQLite
├── venv/                      # Ambiente virtual Python
├── requirements.txt           # Dependências Python
└── README.md                  # Esta documentação
```

## 🔧 Instalação e execução

### Pré-requisitos
- Python 3.11+
- pip (gerenciador de pacotes Python)

### Passos para instalação

1. **Clone ou baixe o projeto**
   ```bash
   cd ip-converter
   ```

2. **Ative o ambiente virtual**
   ```bash
   venv\Scripts\activate     # Windows
   ```

3. **Instale as dependências**
   ```bash
   pip install -r requirements.txt
   ```

4. **Execute a aplicação**
   ```bash
   python src/main.py
   ```

5. **Acesse no navegador**
   ```
   http://localhost:5000
   ```

## 🌐 API Endpoints

### POST /api/convert
Converte um endereço IP para diferentes formatos.

**Request Body:**
```json
{
  "ip": "192.168.1.1"
}
```

**Response:**
```json
{
  "original": "192.168.1.1",
  "decimal": 3232235777,
  "hexadecimal": "0xc0a80101",
  "binary": "11000000.10101000.00000001.00000001",
  "octal": "300.250.1.1"
}
```

### POST /api/validate
Valida se um endereço IP é válido.

**Request Body:**
```json
{
  "ip": "192.168.1.1"
}
```

**Response:**
```json
{
  "valid": true
}
```

## 🎨 Características do design

- **Gradientes**: Interface com cores vibrantes
- **Animações**: Transições e efeitos hover
- **Cards Responsivos**: Layout em grid adaptável
- **Feedback Visual**: Indicações claras de sucesso/erro
- **Tipografia Legível**: Fontes otimizadas para leitura

## 🧮 Exemplos de conversão

| IP Original | Decimal | Hexadecimal | Binário | Octal |
|-------------|---------|-------------|---------|-------|
| 192.168.1.1 | 3232235777 | 0xc0a80101 | 11000000.10101000.00000001.00000001 | 300.250.1.1 |
| 8.8.8.8 | 134744072 | 0x08080808 | 00001000.00001000.00001000.00001000 | 10.10.10.10 |
| 127.0.0.1 | 2130706433 | 0x7f000001 | 01111111.00000000.00000000.00000001 | 177.0.0.1 |
| 10.0.0.1 | 167772161 | 0x0a000001 | 00001010.00000000.00000000.00000001 | 12.0.0.1 |



## 🤝 Contribuição

Este projeto foi criado como uma ferramenta educacional e prática. Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novas funcionalidades
- Melhorar a documentação

## 📄 Licença

Este projeto é de código aberto e está disponível

---

**Desenvolvido usando Flask e tecnologias web simples**

