echo 'run on host'
hostname
npm install --cache
node unistallSvc.js
echo "rm daemon"
rm daemon -f
node installSvc.js