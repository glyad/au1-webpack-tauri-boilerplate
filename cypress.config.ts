import { defineConfig } from "cypress";
import  webpackPreprocessor from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpackPreprocessor({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default defineConfig(<Cypress.ConfigOptions<any>>{
  e2e: {
    baseUrl: "http://localhost:8080",
    specPattern: "**/*.feature",
    setupNodeEvents,
    downloadsFolder: "cypress/downloads",
    experimentalMemoryManagement: true,
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    fileServerFolder: "./",
    viewportHeight: 960,
    viewportWidth: 1000,
    watchForFileChanges: true,
  }  
});
