const svelvg = require('svelvg');

(async () => {
  await svelvg.createLibrary('node_modules/bootstrap-icons/icons');
  await svelvg.createLibrary('bootstrap-icons/icons/*.svg', { outDir: 'dist', iconIndex: true });
  await svelvg.createLibrary('bootstrap-icons/icons/*.svg', { outDir: 'dist', iconIndex: 'ICONS.md' });
})()
