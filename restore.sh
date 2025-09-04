#!/bin/bash
set -e
echo "🔄 Restoring site to latest GitHub main..."
git fetch origin
git checkout main
git reset --hard origin/main
git clean -fd
npm install
npm run dev
