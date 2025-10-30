# FRESH BACKUP REPOSITORY SETUP

## 🎯 Purpose
This document provides instructions for creating a fresh backup repository of the Zero Barriers website.

## 📋 Prerequisites
- GitHub account access
- Git configured locally
- Current repository: https://github.com/ShayneIsMagic/zero-barriers

---

## 🚀 Step 1: Create New Backup Repository

### Option A: GitHub Web Interface (Recommended)
1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `zero-barriers-backup` or `zero-barriers-live-backup`
3. **Description**: "Backup repository for Zero Barriers live site"
4. **Visibility**: **Private** (recommended for security)
5. **Initialize**: ❌ **Do NOT** initialize with README, .gitignore, or license
6. **Click**: "Create repository"

### Option B: GitHub CLI (if installed)
```bash
gh repo create zero-barriers-backup --private --description "Backup repository for Zero Barriers live site"
```

---

## 🔧 Step 2: Add Backup Remote

After creating the repository, run these commands:

```bash
# Add backup repository as remote
git remote add backup https://github.com/ShayneIsMagic/zero-barriers-backup.git

# Verify remotes
git remote -v
```

**Expected output:**
```
backup    https://github.com/ShayneIsMagic/zero-barriers-backup.git (fetch)
backup    https://github.com/ShayneIsMagic/zero-barriers-backup.git (push)
origin    https://github.com/ShayneIsMagic/zero-barriers.git (fetch)
origin    https://github.com/ShayneIsMagic/zero-barriers.git (push)
```

---

## 📤 Step 3: Push to Backup Repository

```bash
# Push main branch (live site) to backup
git push backup main

# Push dev branch to backup
git push backup dev

# Push all tags to backup
git push backup --tags

# Push all branches to backup
git push backup --all
```

---

## ✅ Step 4: Verify Backup

### Check Backup Repository
1. **Visit**: https://github.com/ShayneIsMagic/zero-barriers-backup
2. **Verify**: All branches are present (`main`, `dev`, etc.)
3. **Verify**: All tags are present (`live-site-backup-20251028`)
4. **Verify**: All files are present

### Verify Remotes Locally
```bash
# Check backup remote
git remote show backup

# List all branches on backup
git branch -r backup
```

---

## 🔄 Step 5: Regular Backup Workflow

### Daily Backup (Optional)
```bash
# Fetch latest changes
git fetch origin

# Push to backup
git push backup main
git push backup dev
```

### Before Major Changes
```bash
# Create backup tag
git tag -a "backup-$(date +%Y%m%d-%H%M)" -m "Backup before major changes"

# Push tag to backup
git push backup "backup-$(date +%Y%m%d-%H%M)"
```

---

## 🚨 Emergency Restore from Backup

### Restore Main Branch
```bash
# Switch to main
git checkout main

# Reset to backup state
git reset --hard backup/main

# Force push to origin
git push origin main --force
```

### Restore Specific Commit
```bash
# Find commit hash from backup
git log backup/main --oneline

# Reset to specific commit
git reset --hard <commit-hash>

# Push to origin
git push origin main --force
```

---

## 📁 Backup Repository Structure

```
zero-barriers-backup/
├── main/                    # Live site branch
├── dev/                     # Development branch
├── skr/clean-up/           # Clean-up branch
├── tags/
│   ├── live-site-backup-20251028
│   └── [other backup tags]
└── docs/
    └── LIVE_SITE_BACKUP.md  # Backup documentation
```

---

## 🔐 Security Notes

- **Private Repository**: Keep backup private for security
- **Access Control**: Limit access to trusted team members
- **Regular Updates**: Keep backup synchronized with main repo
- **Tag Important States**: Tag before major changes

---

## 📞 Support

If you need help with backup operations:
1. Check this document first
2. Verify remote connections: `git remote -v`
3. Check backup repository on GitHub
4. Use emergency restore procedures if needed

---

**Created**: October 28, 2025  
**Branch**: `skr/clean-up`  
**Status**: ✅ Ready for implementation

