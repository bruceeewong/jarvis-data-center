module.exports = {
  apps: [
    {
      name: 'jarvis-data-center',
      script: 'yarn',
      args: 'start'
    },
    {
      name: 'jarvis-data-center-dev',
      script: 'yarn',
      args: 'develop:cloud'
    }
  ]
}
