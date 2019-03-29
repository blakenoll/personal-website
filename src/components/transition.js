import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'

const TransitionComp = ({ children }) => {
  const duration = 200
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-out`,
    opacity: '.8',
  }

  const transitionStyles = {
    entering: { opacity: '.8' },
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
