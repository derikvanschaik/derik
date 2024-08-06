import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  // github pages uses docs folder to host
  dest: "./docs",
});

site.use(tailwindcss());
site.use(postcss());
site.copy("assets");

export default site;
