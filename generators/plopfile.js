module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/component.hbs',
      },
    ],
  });
};
