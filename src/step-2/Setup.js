import React, {Component} from 'react';
import Highlight from 'react-syntax-highlight';

class Setup extends Component {
  render() {
    const gitClone = '$ git clone https://github.com/code-kotis/pwa-codelabs.git';
    const switchBranch = '$ git checkout sample';
    const installDependencies = '$ npm install';
    const runProject = '$ npm run server';
    return(
      <div>
        <h1>2. Setup</h1>
        <p>To setup the codelabs, follow the below steps.</p>
        <h2>Steps</h2>
        <ul className="setup__steps">
          <li>Clone the repo via command line.</li>
          
          <Highlight lang="bash" value={gitClone} />
          
          <li>Switch the git branch to sample.</li>
          
          <Highlight lang="bash" value={switchBranch} />

          <li>If you don't have node installed in your system. Download and install it from below.</li>
          
          <a className="btn" href="https://nodejs.org/dist/v4.6.1/node-v4.6.1.pkg" target="_blank">Download Node</a>

          <li>Install the dependencies to run localhost server.</li>
          
          <Highlight lang="bash" value={installDependencies} />

          <li>Final step. To run the sample repo. Below command will open the localhost in your browser.</li>
          
          <Highlight lang="bash" value={runProject} />
        </ul>

        <p>That's it. Setup is done.</p>
      </div>
    );
  }
}

export default Setup;
