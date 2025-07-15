#!/bin/bash

echo "Checking DNS records for uinifi.ai..."
echo "Zone ID: 8ae502710fba6092871c89ad0846d5d9"
echo ""

# Check current DNS resolution
echo "Current DNS resolution:"
nslookup uinifi.ai

echo ""
echo "To fix the 522 error, you need to:"
echo "1. Go to Cloudflare Pages dashboard"
echo "2. Find your project name"
echo "3. Add custom domain: uinifi.ai"
echo "4. Verify CNAME record is created"
echo ""
echo "Your Pages project should be accessible at:"
echo "https://your-project-name.pages.dev"
echo ""
echo "Once connected, uinifi.ai will work!" 