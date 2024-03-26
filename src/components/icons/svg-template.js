// src/components/icons/svg-template.js

const comments = `
// Auto-generated file created by svgr-cli source svg-template.js
// Run yarn icons:create to update
// Do not edit
`;

const template = (variables, { tpl }) => {
  const customName = variables.componentName.replace(/^svg/i, '') + 'Icon';
  variables.componentName = customName;
  variables.exports.name = customName;
  const customTpl = tpl`
    ${comments}
    ${variables.imports};
    ${variables.interfaces};
    const ${variables.componentName} = (${variables.props}) => (
      ${variables.jsx}
    );
    ${variables.exports};
`;

  const exportDefaultDeclaration = customTpl.find(propiedad => propiedad.type === 'ExportDefaultDeclaration');
  if (exportDefaultDeclaration) {
    exportDefaultDeclaration.declaration.name = customName;
  }
  
  return customTpl
};

module.exports = template;