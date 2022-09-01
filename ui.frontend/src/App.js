import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configGenerator as Theme } from './theme';
import { aemTheme } from './theme/aemTheme'

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <ThemeProvider theme={{ ...Theme(aemTheme) }}>
        <div>
          {this.childComponents}
          {this.childPages}
        </div>
      </ThemeProvider>
    );
  }
}

export default withModel(App);
