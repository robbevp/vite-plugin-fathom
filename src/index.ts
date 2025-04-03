import type { Plugin } from "vite";

export interface fathomOptions {
  forceEU?: boolean;
  spa?: boolean | "auto" | "hash" | "history";
  honorDNT?: boolean;
  autoTrack?: boolean;
  ignoreCanonical?: boolean;
}

/**
 * Inject the fathom script at the end of your head
 */
export default function viteFathomPlugin(
  fathomSiteID: string | undefined = process.env.VITE_FATHOM_ID,
  options: fathomOptions = {},
): Plugin {
  const cdn = options.forceEU === true ? "cdn-eu" : "cdn";
  let settings = `data-site="${fathomSiteID}"`;

  if (options.spa === undefined || options.spa !== false) {
    settings += ` data-spa="${options.spa || "auto"}"`;
  }
  if (options.honorDNT === true) {
    settings += ' data-honor-dnt="true"';
  }
  if (options.autoTrack === false) {
    settings += ' data-auto="false"';
  }
  if (options.ignoreCanonical) {
    settings += ' data-canonical="false"';
  }

  return {
    name: "vite-fathom-plugin",
    transformIndexHtml(html) {
      const script = `<script src="https://${cdn}.usefathom.com/script.js" ${settings} defer></script>`;
      return html.replace("</head>", `${script}\n</head>`);
    },
    apply() {
      return fathomSiteID !== undefined;
    },
  };
}
