import { PrismaClient } from "@prisma/client";
import {
  screen,
  BrowserWindow,
  BrowserWindowConstructorOptions,
  Rectangle,
  ipcMain,
  Menu,
  MenuItem,
} from "electron";
import Store from "electron-store";
import path from "path";

export const createWindow = (
  windowName: string,
  options: BrowserWindowConstructorOptions
): BrowserWindow => {
  const key = "window-state";
  const name = `window-state-${windowName}`;
  const store = new Store<Rectangle>({ name });
  const defaultSize = {
    width: options.width,
    height: options.height,
  };
  let state = {};

  const restore = () => store.get(key, defaultSize);

  const getCurrentPosition = () => {
    const position = win.getPosition();
    const size = win.getSize();
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1],
    };
  };

  const windowWithinBounds = (windowState, bounds) => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    );
  };

  const resetToDefaults = () => {
    const bounds = screen.getPrimaryDisplay().bounds;
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2,
    });
  };

  const ensureVisibleOnSomeDisplay = (windowState) => {
    const visible = screen.getAllDisplays().some((display) => {
      return windowWithinBounds(windowState, display.bounds);
    });
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }
    return windowState;
  };

  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }
    store.set(key, state);
  };

  state = ensureVisibleOnSomeDisplay(restore());

  const win = new BrowserWindow({
    ...options,
    ...state,
    webPreferences: {
      preload: path.join(__dirname, "../app/preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
      sandbox: false,
      ...options.webPreferences,
    },
  });

  // const menu = new Menu();
  // menu.append(
  //   new MenuItem({
  //     label: "Search",
  //     submenu: [
  //       {
  //         role: "help",
  //         accelerator:
  //           process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
  //         click: () => {
  //           console.log("Electron rocks!");
  //         },
  //       },
  //     ],
  //   })
  // );

  // Menu.setApplicationMenu(menu);

  const prisma = new PrismaClient();
  ipcMain.handle("getProjet", async (event, args) => {
    const ret = await prisma.projet.findMany();
    return ret;
  });
  ipcMain.handle("getAllProjet", async (event, args) => {
    const ret = await prisma.projet.count();
    return ret;
  });
  ipcMain.handle("addProjet", async (event, args) => {
    const ret = await prisma.projet.create({
      data: args.data,
    });
    return ret;
  });
  ipcMain.handle("getBien", async (event, args) => {
    const ret = await prisma.bien.findMany();
    return ret;
  });
  ipcMain.handle("getAllBien", async (event, args) => {
    const ret = await prisma.bien.count();
    return ret;
  });
  ipcMain.handle("addBien", async (event, args) => {
    const ret = await prisma.bien.create({
      data: args.data,
    });
    return ret;
  });
  ipcMain.handle("getClient", async (event, args) => {
    const ret = await prisma.client.findMany();
    return ret;
  });
  ipcMain.handle("getAllClient", async (event, args) => {
    const ret = await prisma.client.count();
    return ret;
  });
  ipcMain.handle("addClient", async (event, args) => {
    const ret = await prisma.client.create({
      data: args.data,
    });
    return ret;
  });

  win.on("close", saveState);
  return win;
};
