import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'

const TransitionComp = ({ children }) => {
  const duration = 400
  const defaultStyle = {
    transition: `all ${duration}ms ease-out`,
    filter: 'blur(10px)',
    opacity: '.1',
  }

  const transitionStyles = {
    entering: { filter: 'blur(0px)', opacity: '1' },
    entered: { filter: 'blur(0px)', opacity: '1' },
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
