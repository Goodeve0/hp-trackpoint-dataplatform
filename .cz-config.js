module.exports = {
  prompter: (cz, commit) => {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: '请选择提交类型:',
        choices: [
          { value: 'feat', name: 'feat:    新功能' },
          { value: 'fix', name: 'fix:    修复' },
          { value: 'docs', name: 'docs:    文档变更' },
          { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
          { value: 'refactor', name: 'refactor: 重构(既不是增加feature, 也不是修复bug)' },
          { value: 'perf', name: 'perf:    性能优化' },
          { value: 'test', name: 'test:    增加测试' },
          { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
          { value: 'revert', name: 'revert:    回退' },
          { value: 'build', name: 'build:    打包' }
        ]
      },
      {
        type: 'input',
        name: 'scope',
        message: '请输入修改范围(可选):'
      },
      {
        type: 'input',
        name: 'subject',
        message: '请简要描述提交（必填）',
        validate: (input) => !!input || '提交描述不能为空！'
      },
      {
        type: 'input',
        name: 'body',
        message: '请输入详细描述（可选）'
      },
      {
        type: 'input',
        name: 'footer',
        message: '请输入要关闭的issue（可选）'
      }
    ]).then((answers) => {
      const { type, scope, subject, body, footer } = answers;

      const commitMessage = `${type}${scope ? `(${scope})` : ''}: ${subject}\n\n${body || ''}\n\n${footer || ''}`;

      commit(commitMessage.trim());
    });
  }
};