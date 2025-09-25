const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true, // força tela cheia
    autoHideMenuBar: true, // esconde menu superior
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // opcional
    },
  });

  // Carrega os arquivos gerados pelo Vite (dist/)
  win.loadURL("http://localhost:5173");
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
