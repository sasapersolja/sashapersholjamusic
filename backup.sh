#!/bin/bash
set -e

STAMP=$(date +%Y%m%d-%H%M)
echo "📦 Creating backup branch: backup-$STAMP"

git add -A
git commit -m "Backup at $STAMP" || echo "No changes to commit"
git checkout -b backup-$STAMP
git push origin backup-$STAMP
git checkout main

echo "✅ Backup complete: backup-$STAMP"
