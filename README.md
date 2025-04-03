# vite-plugin-fathom

A small vite plugin to inject the fathom script on your html page.

## Usage
Add the plugin to your vite config. The fathom site id will be loaded from the `VITE_FATHOM_ID` environment variable by default.
```js
// vite.config.js
import { defineConfig } from "vite";
import vitePluginFathom from "vite-plugin-fathom"

export default defineConfig({
  plugins: [vitePluginFathom()],
});
```

If your want, you can specify the site ID and options:
```js
// vite.config.js
import { defineConfig } from "vite";
import vitePluginFathom from "vite-plugin-fathom"

export default defineConfig({
  plugins: [vitePluginFathom("ABCDEF", { forceEU: true })],
});
```

### Options

| Option | Type | Default |
| ------ | ---- | ------- |
| forceEU | `boolean` | `false` |
| spa | `boolean` or `string` | `"auto"` |
| honorDNT | `boolean` | `false` |
| autoTrack | `boolean` | `false` |
| ignoreCanonical | `boolean` | `false` |

For an explanation of these settings, see [fathom's documentation](https://usefathom.com/docs/script/script-advanced).