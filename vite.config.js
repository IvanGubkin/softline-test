import {resolve} from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(
        "/Users/ivangubkin/Documents/js/softline-test",
        "./src/components"
      ),
    }),
  ],
};
