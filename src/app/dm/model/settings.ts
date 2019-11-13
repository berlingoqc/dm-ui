export enum ConnectionMode {
  NO_AUTH = 'no auth',
  TOKEN_AUTH = 'token auth'
}

export interface BackendSettings {
  name: string;
  url: string;
  connection_mode: ConnectionMode;
  connection_info: any;
  last_connection: string;
}

export interface Context {
  settings: BackendSettings[];
  selected_settings: number;
}
