import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'

const TransitionComp = ({ children }) => {
  const duration = 100
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: '.5',
  }

  const transitionStyles = {
    entering: { opacity: '.5' },
    entered: { opacity: '1' },
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
