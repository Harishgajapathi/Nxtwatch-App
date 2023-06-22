import React from 'react'

const ReactContext = React.createContext({
  activeId: '',
  onChangeActiveId: () => {},
})

export default ReactContext