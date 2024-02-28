#!/bin/bash
cd /root/pootharekulu-frontend/
npm run build
rm -rf /var/www/html/build
mv /root/pootharekulu-frontend/build /var/www/html
systemctl restart nginx
