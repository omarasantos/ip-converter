// Elementos DOM
const ipInput = document.getElementById('ip-input');
const convertBtn = document.getElementById('convert-btn');
const validationMessage = document.getElementById('validation-message');
const resultsSection = document.getElementById('results-section');
const loadingDiv = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');

// Elementos de resultado
const decimalResult = document.getElementById('decimal-result');
const hexResult = document.getElementById('hex-result');
const binaryResult = document.getElementById('binary-result');
const octalResult = document.getElementById('octal-result');
const originalIp = document.getElementById('original-ip');

// Botões de exemplo
const exampleBtns = document.querySelectorAll('.example-btn');
const copyBtns = document.querySelectorAll('.copy-btn');

// Event Listeners
convertBtn.addEventListener('click', handleConvert);
ipInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleConvert();
    }
});

ipInput.addEventListener('input', clearMessages);

// Event listeners para botões de exemplo
exampleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const ip = e.target.getAttribute('data-ip');
        ipInput.value = ip;
        handleConvert();
    });
});

// Event listeners para botões de copiar
copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetId = e.target.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        copyToClipboard(targetElement.textContent, e.target);
    });
});

// Funções principais
async function handleConvert() {
    const ip = ipInput.value.trim();
    
    if (!ip) {
        showValidationMessage('Por favor, insira um endereço IP.', 'error');
        return;
    }
    
    // Validação básica do formato IP
    if (!isValidIPFormat(ip)) {
        showValidationMessage('Formato de IP inválido. Use o formato: xxx.xxx.xxx.xxx', 'error');
        return;
    }
    
    showLoading(true);
    clearMessages();
    hideResults();
    
    try {
        const response = await fetch('/api/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip: ip })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Erro na conversão');
        }
        
        displayResults(data);
        showValidationMessage('Conversão realizada com sucesso!', 'success');
        
    } catch (error) {
        console.error('Erro:', error);
        showError(`Erro na conversão: ${error.message}`);
    } finally {
        showLoading(false);
    }
}

function isValidIPFormat(ip) {
    const ipRegex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    const match = ip.match(ipRegex);
    
    if (!match) return false;
    
    // Verifica se cada octeto está entre 0 e 255
    for (let i = 1; i <= 4; i++) {
        const octet = parseInt(match[i]);
        if (octet < 0 || octet > 255) {
            return false;
        }
    }
    
    return true;
}

function displayResults(data) {
    // Atualizar os valores dos resultados
    decimalResult.textContent = data.decimal;
    hexResult.textContent = data.hexadecimal;
    binaryResult.textContent = data.binary;
    octalResult.textContent = data.octal;
    originalIp.textContent = data.original;
    
    // Mostrar a seção de resultados
    showResults();
}

function showResults() {
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideResults() {
    resultsSection.classList.add('hidden');
}

function showLoading(show) {
    if (show) {
        loadingDiv.classList.remove('hidden');
    } else {
        loadingDiv.classList.add('hidden');
    }
}

function showValidationMessage(message, type) {
    validationMessage.textContent = message;
    validationMessage.className = `validation-message ${type}`;
    validationMessage.style.display = 'block';
    
    // Auto-hide success messages after 3 seconds
    if (type === 'success') {
        setTimeout(() => {
            validationMessage.style.display = 'none';
        }, 3000);
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    
    // Auto-hide error after 5 seconds
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 5000);
}

function clearMessages() {
    validationMessage.style.display = 'none';
    errorMessage.classList.add('hidden');
}

async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Feedback visual
        const originalText = button.textContent;
        button.textContent = 'Copiado!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
        
    } catch (err) {
        console.error('Erro ao copiar:', err);
        
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            button.textContent = 'Copiado!';
            button.classList.add('copied');
            
            setTimeout(() => {
                button.textContent = 'Copiar';
                button.classList.remove('copied');
            }, 2000);
        } catch (fallbackErr) {
            console.error('Erro no fallback de cópia:', fallbackErr);
        }
        
        document.body.removeChild(textArea);
    }
}

// Função para formatar entrada do IP (opcional - remove caracteres inválidos)
ipInput.addEventListener('input', (e) => {
    let value = e.target.value;
    // Remove caracteres que não são números ou pontos
    value = value.replace(/[^0-9.]/g, '');
    // Limita a quantidade de pontos
    const parts = value.split('.');
    if (parts.length > 4) {
        value = parts.slice(0, 4).join('.');
    }
    e.target.value = value;
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('Conversor de IP carregado com sucesso!');
    ipInput.focus();
});

