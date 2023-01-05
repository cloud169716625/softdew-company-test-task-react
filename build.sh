rm -rf ~/NodeApps/baanxserver/public/waiting-list/*
rm -rf build
yarn
npm run build
node scripts/fixPaths.js
if [ ! -d "/home/ubuntu/NodeApps/baanxserver/public/waiting-list/" ] 
then
    mkdir /home/ubuntu/NodeApps/baanxserver/public/waiting-list/
fi
cp -a build/* ~/NodeApps/baanxserver/public/waiting-list/
pm2 restart 0
rm -rf build