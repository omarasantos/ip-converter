import os
import sys

# Adiciona o diretório do projeto ao path
sys.path.insert(0, os.path.dirname(__file__))

from src.main import app

if __name__ == "__main__":
    app.run()

