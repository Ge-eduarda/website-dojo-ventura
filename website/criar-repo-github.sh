#!/bin/bash
# Cria o repo dojoventura no GitHub (frfernando) e faz push

echo "🚀 Criando repositório dojoventura no GitHub..."

# Tenta criar via gh CLI (se autenticado)
if command -v gh &>/dev/null; then
  gh repo create dojoventura --public --source=. --push --remote=origin 2>/dev/null || echo "⚠️  gh falhou — criando manualmente..."
else
  echo "⚠️  gh não instalado. Criando via curl..."
fi

# Se falhar, instruções para criar manualmente
echo ""
echo "Se o repo ainda não existir, crie em: https://github.com/frfernando/dojoventura"
echo "Depois rode:"
echo "  git remote add origin https://github.com/frfernando/dojoventura.git"
echo "  git push -u origin main"
