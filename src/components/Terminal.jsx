import React, { useState } from 'react';

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([
    'Welcome to Bharat UI terminal!',
    "Type 'help' to see available commands."
  ]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const newOutput = [...output, `\$ \${command}`];

      switch (command.toLowerCase()) {
        case 'help':
          newOutput.push(
            'Available commands:',
            '  components - List all components',
            '  install    - Installation instructions',
            '  docs       - Link to documentation',
            '  clear      - Clear terminal'
          );
          break;
        case 'components':
          newOutput.push(
            'Available components:',
            '  Buttons, QR, Git Profile Card, Cards',
            '  Avatars, Navigation, Rating, Alerts',
            '  Badge, Modals, Loaders, Toggles'
          );
          break;
        case 'install':
          newOutput.push('npm i bharat-ui');
          break;
        case 'docs':
          newOutput.push('https://www.bharatui.com/guides/getting-started/');
          break;
        case 'clear':
          setOutput(["Welcome to Bharat UI terminal!", "Type 'help' to see available commands."]);
          setCommand('');
          return;
        default:
          newOutput.push(`Command not found: \${command}. Type 'help' for available commands.`);
      }

      setOutput(newOutput);
      setCommand('');
    }
  };

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bharat UI Terminal</h2>
          <p className="text-gray-400">Try our interactive terminal experience</p>
        </div>

        <div className="bg-black rounded-lg overflow-hidden border border-gray-600">
          <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm">bharat-ui@terminal:~</span>
          </div>

          <div className="p-4 font-mono text-sm">
            {output.map((line, index) => (
              <div key={index} className="text-green-400 mb-1">{line}</div>
            ))}
            <div className="flex items-center">
              <span className="text-green-400 mr-2">\$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyPress={handleCommand}
                className="flex-1 bg-transparent text-green-400 outline-none"
                placeholder=""
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;