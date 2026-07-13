#!/bin/bash

#############################################
# SSC DocTracker Auto Deploy
#############################################

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

WEBSITE="https://ssc-doctracker.pages.dev"

clear

echo -e "${CYAN}"
echo "==============================================="
echo "        SSC DocTracker Auto Deploy"
echo "==============================================="
echo -e "${NC}"

# Check git repository
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Không tìm thấy Git Repository${NC}"
    exit 1
fi

echo -e "${BLUE}📂 Repository:${NC}"
pwd
echo

# Check modified files
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}✔ Không có thay đổi nào để cập nhật.${NC}"
    exit 0
fi

echo -e "${BLUE}📄 Các file thay đổi:${NC}"
git status --short
echo

read -p "📝 Commit message (Enter = Auto Update): " MESSAGE

if [ -z "$MESSAGE" ]; then
    MESSAGE="Auto Update $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo
echo -e "${CYAN}========== GIT ADD ==========${NC}"
git add .

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Git add thất bại${NC}"
    exit 1
fi

echo
echo -e "${CYAN}========== COMMIT ==========${NC}"
git commit -m "$MESSAGE"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Commit thất bại${NC}"
    exit 1
fi

echo
echo -e "${CYAN}========== PUSH ==========${NC}"
git push

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Push thất bại${NC}"
    exit 1
fi

echo
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✅ Upload GitHub thành công${NC}"
echo -e "${GREEN}☁ Cloudflare Pages sẽ tự deploy${NC}"
echo -e "${GREEN}⏳ Thời gian: khoảng 20-60 giây${NC}"
echo -e "${GREEN}========================================${NC}"

echo

echo -e "${YELLOW}🌐 Mở website...${NC}"
open "$WEBSITE"

echo
echo -e "${BLUE}Hoàn tất!${NC}"
