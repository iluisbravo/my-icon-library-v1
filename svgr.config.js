// custom-template.cjs

module.exports = function (src, options, { componentName }) {
    return `
      import * as React from 'react';
      const ${componentName} = (props) => {
        return ${src};
      };
      export default ${componentName};
    `;
  };
  