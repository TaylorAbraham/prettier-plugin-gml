const { parsers } = require("prettier/parser-babel");
const parser = parsers.babel;

const {
  doc: {
    builders: { concat },
  },
} = require("prettier");

const languages = [
  {
    extensions: [".gml"],
    name: "GML",
    parsers: ["gml-parse"],
  },
];

const gmlParsers = {
  "gml-parse": {
    ...parser,
    parse(...args) {
      const ast = parser.parse(...args);
      // The AST can be modified here for Game Maker-specific formatting
      // Alternatively, a pre-processing step can be added
      return ast;
    },
    // For custom printing, change 'estree' to 'gml-tree' and add a printer
    astFormat: "estree",
  },
};

module.exports = {
  languages,
  parsers: gmlParsers,
};
