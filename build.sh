#!/bin/bash
# =============================================================================
# Conversive Website — PHP → Static HTML Build Script
# Runs on Netlify's build environment (PHP is pre-installed)
# Each .php page is rendered to a .html file for static hosting
# =============================================================================

set -e  # Exit on any error

echo "🔧 PHP version: $(php --version | head -1)"
echo "📁 Working directory: $(pwd)"
echo ""

# ---------------------------------------------------------------------------
# 1. Generate .env from Netlify environment variables (or use defaults)
# ---------------------------------------------------------------------------
echo "⚙️  Writing .env..."

# Netlify injects DEPLOY_URL and URL at build time
# DEPLOY_URL = the specific deploy URL (e.g. https://develop--jolly-blini-dd34da.netlify.app)
# URL         = the primary site URL (https://conversive.ai)

# Netlify context-aware URL resolution:
#   CONTEXT = "production"    → main branch → use URL (custom domain)
#   CONTEXT = "branch-deploy" → develop etc → use DEPLOY_PRIME_URL (branch subdomain)
#   CONTEXT = "deploy-preview"→ PR previews → use DEPLOY_PRIME_URL

if [ "$CONTEXT" = "production" ]; then
    APP_URL="${URL:-https://conversive.ai}"
elif [ -n "$DEPLOY_PRIME_URL" ]; then
    APP_URL="$DEPLOY_PRIME_URL"
else
    APP_URL="${URL:-https://conversive.ai}"
fi

cat > .env <<EOF
APP_NAME=Conversive
APP_ENV=${CONTEXT:-production}
APP_URL=${APP_URL}
EOF

echo "   APP_URL = $APP_URL"
echo "   APP_ENV = ${CONTEXT:-production}"
echo ""

# ---------------------------------------------------------------------------
# 2. Render PHP pages to static HTML
# ---------------------------------------------------------------------------
echo "🔄 Rendering PHP pages to HTML..."

# Pages to render: source.php → output.html
PAGES=(
    "index.php:index.html"
    "blogs.php:blogs.html"
    "cookie-policy.php:cookie-policy.html"
    "privacy-policy.php:privacy-policy.html"
    "terms-&-conditions.php:terms-&-conditions.html"
    "future-of-patient-communication-in-clinical-environment.php:future-of-patient-communication-in-clinical-environment.html"
    "journey-builder-guide.php:journey-builder-guide.html"
    "journey-orchestration-transforms-real-time-customer-experience.php:journey-orchestration-transforms-real-time-customer-experience.html"
    "voice-first-is-no-longer-optional-its-structural.php:voice-first-is-no-longer-optional-its-structural.html"
    "chatbots-vs-voice-ai-healthcare-2026.php:chatbots-vs-voice-ai-healthcare-2026.html"
    "healthcare-scheduling-with-intelligent-automation.php:healthcare-scheduling-with-intelligent-automation.html"
    "conversational-ai-patient-engagement-healthcare.php:conversational-ai-patient-engagement-healthcare.html"
)

SUCCESS=0
FAILED=0

for entry in "${PAGES[@]}"; do
    SRC="${entry%%:*}"
    OUT="${entry##*:}"

    if [ ! -f "$SRC" ]; then
        echo "  ⚠️  SKIP  $SRC (file not found)"
        continue
    fi

    echo -n "  📄 $SRC → $OUT ... "
    if php "$SRC" > "$OUT" 2>/tmp/php_err; then
        SIZE=$(wc -c < "$OUT")
        echo "✅ (${SIZE} bytes)"
        SUCCESS=$((SUCCESS + 1))
    else
        echo "❌ FAILED"
        cat /tmp/php_err
        FAILED=$((FAILED + 1))
    fi
done

echo ""
echo "📦 Build complete: ${SUCCESS} succeeded, ${FAILED} failed"

if [ "$FAILED" -gt 0 ]; then
    echo "❌ Build failed — see errors above"
    exit 1
fi

echo "🚀 Static HTML ready for Netlify deployment"
