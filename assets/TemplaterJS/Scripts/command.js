function command(action) {
    const allCommands = app.commands.listCommands();
    const command = allCommands.filter(
      (command) => command.name.toUpperCase() === action.toUpperCase().trim()
    )[0];
    app.commands.executeCommandById(command.id);
    return '';
  };
  
  module.exports = command;  