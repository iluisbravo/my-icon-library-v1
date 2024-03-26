module.exports = {
    // Opciones de configuración de SVGR
    template: (opts, { componentName, jsx }) => {
      // Personalización del nombre del componente generado
      return `
        import * as React from 'react';
        const ${componentName}Icon = (props) => {
          return ${jsx}
        };
        export default ${componentName}Icon;
      `;
    },
  };
  