// Shared constants for Browser Tools Chrome Extension
// This file defines constants used across multiple extension contexts
// Note: Service workers (background.js) can import this using importScripts()

const BROWSER_TOOLS_CONSTANTS = {
  DEFAULT_LOCALHOSTS: ['localhost', '127.0.0.1'],
  DEFAULT_SERVER_PORT: 3025,
  HTTPS_DEFAULT_PORT: 443,
  HTTP_DEFAULT_PORT: 80,
  HTTPS_PROTOCOL: 'https://',
  HTTP_PROTOCOL: 'http://',
};

// Make available to window contexts (panel, devtools)
if (typeof window !== 'undefined') {
  window.BROWSER_TOOLS_CONSTANTS = BROWSER_TOOLS_CONSTANTS;
}