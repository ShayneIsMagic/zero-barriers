#!/bin/bash

# Fresh Backup Repository Setup Script
# This script automates the creation of a backup repository

set -e  # Exit on any error

echo "🚀 Zero Barriers Fresh Backup Setup"
echo "=================================="

# Configuration
BACKUP_REPO_NAME="zero-barriers-backup"
BACKUP_DESCRIPTION="Backup repository for Zero Barriers live site"
GITHUB_USERNAME="ShayneIsMagic"

echo ""
echo "📋 Configuration:"
echo "  Repository Name: $BACKUP_REPO_NAME"
echo "  Description: $BACKUP_DESCRIPTION"
echo "  GitHub User: $GITHUB_USERNAME"
echo ""

# Check if GitHub CLI is installed
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI detected"
    USE_GH_CLI=true
else
    echo "⚠️  GitHub CLI not found - will use manual instructions"
    USE_GH_CLI=false
fi

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if backup remote already exists
if git remote get-url backup &> /dev/null; then
    echo "⚠️  Backup remote already exists"
    echo "   Current backup URL: $(git remote get-url backup)"
    read -p "   Do you want to update it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Backup setup cancelled"
        exit 1
    fi
fi

echo ""
echo "🔧 Step 1: Creating backup repository..."

if [ "$USE_GH_CLI" = true ]; then
    echo "   Using GitHub CLI..."
    gh repo create "$BACKUP_REPO_NAME" \
        --private \
        --description "$BACKUP_DESCRIPTION" \
        --source=. \
        --remote=backup \
        --push
    
    echo "✅ Repository created and configured with GitHub CLI"
else
    echo "   Manual setup required:"
    echo ""
    echo "   1. Go to: https://github.com/new"
    echo "   2. Repository name: $BACKUP_REPO_NAME"
    echo "   3. Description: $BACKUP_DESCRIPTION"
    echo "   4. Visibility: Private"
    echo "   5. Initialize: ❌ Do NOT initialize with README"
    echo "   6. Click: Create repository"
    echo ""
    read -p "   Press Enter when repository is created..."
    
    # Add backup remote
    echo "🔧 Step 2: Adding backup remote..."
    git remote add backup "https://github.com/$GITHUB_USERNAME/$BACKUP_REPO_NAME.git"
    echo "✅ Backup remote added"
fi

echo ""
echo "📤 Step 3: Pushing to backup repository..."

# Push all branches
echo "   Pushing main branch..."
git push backup main

echo "   Pushing dev branch..."
git push backup dev

echo "   Pushing current branch ($CURRENT_BRANCH)..."
git push backup "$CURRENT_BRANCH"

# Push all tags
echo "   Pushing all tags..."
git push backup --tags

echo ""
echo "✅ Step 4: Verifying backup..."

# Verify remotes
echo "   Current remotes:"
git remote -v

echo ""
echo "   Backup branches:"
git branch -r backup

echo ""
echo "🎉 Fresh backup repository setup complete!"
echo ""
echo "📍 Backup repository: https://github.com/$GITHUB_USERNAME/$BACKUP_REPO_NAME"
echo "📍 Documentation: docs/FRESH_BACKUP_SETUP.md"
echo ""
echo "🔄 To update backup in the future:"
echo "   git push backup main"
echo "   git push backup dev"
echo ""
echo "🚨 To restore from backup:"
echo "   git reset --hard backup/main"
echo "   git push origin main --force"

