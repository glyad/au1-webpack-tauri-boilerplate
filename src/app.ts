import { invoke } from "@tauri-apps/api/tauri";

export const isTauriBackendEnabled: boolean = !!window.__TAURI_IPC__; 
export class App {
  public message = 'Hello World without Tauri!';
  public name = 'Aurelia';
  public tauriBackendDisabled = !isTauriBackendEnabled;

  attached() {    
    this.greet();
  }

  async greet() {
    if (!isTauriBackendEnabled) return;

    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    this.setGreetMsg(await invoke('greet', { name: this.name }));
  }

  setGreetMsg(msg: string) {
    this.message = msg;
  }
}
