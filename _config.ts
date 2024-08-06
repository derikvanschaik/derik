import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import highlight from "lume/plugins/code_highlight.ts";

const site = lume({
  // github pages uses docs folder to host
  dest: "./docs",
});

site.use(tailwindcss());
site.use(postcss());
site.use(
  highlight({
    theme: {
      name: "atom-one-dark", // The theme name to download
      path: "/css/code_theme.css", // The destination filename
    },
  })
);

site.copy("assets");
site.copy("/css/code_theme.css"); // Copy the css file to dest.

export default site;
