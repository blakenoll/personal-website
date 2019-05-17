import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'

const TransitionComp = ({ children }) => {
  const duration = 200
  const defaultStyle = {
    transition: `filter ${duration}ms ease-out`,
    filter: 'blur(5px)',
    marginTop: '50px',
  }

  const transitionStyles = {
    entering: { filter: 'blur(5px)' },
    entered: { filter: 'blur(0)' },
  }
  const [inProp, setinProp] = useState(false)

  useEffect(() => {
    setinProp(true)
  }, [])

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

export default TransitionComp
