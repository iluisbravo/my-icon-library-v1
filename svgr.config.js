const path = require('path');

module.exports = {
  icon: true, // Esto es importante para que los componentes se exporten como iconos
  outDir: path.resolve(__dirname, 'src/components/icons'),
  template: (opts, { componentName, jsx }) => {
    return `
      import * as React from 'react';
      const ${componentName} = (props) => {
        return ${jsx};
      };
      export default ${componentName};
    `;
  },
};
