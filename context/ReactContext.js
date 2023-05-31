import React from 'react'

const ReactContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ReactContext