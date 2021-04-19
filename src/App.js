import React from 'react';
import GlobalStyle from './globalStyles';
import NavigationBar from './components/NavigationBar';
import NavigationBarButton from './components/NavigationBarButton';

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavigationBar>
        <NavigationBarButton />
        <NavigationBarButton />
        <NavigationBarButton />
      </NavigationBar>
    </div>
  );
}

export default App;
