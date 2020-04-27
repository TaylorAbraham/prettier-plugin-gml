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
      // TODO: The AST can be modified here for Game Maker-specific formatting
      return ast;
    },
    astFormat: "gml-ast"
  },
};

function printGML(path, options, print) {
  const node = path.getValue();
  console.log("### node", node);

  // if (Array.isArray(node)) {
  //   return concat(path.map(print));
  // }

  switch (node.type) {
    default:
      return "";
  }
}

const printers = {
  "gml-ast": {
    print: printGML,
  },
};

module.exports = {
  languages,
  parsers: gmlParsers,
  printers,
};
