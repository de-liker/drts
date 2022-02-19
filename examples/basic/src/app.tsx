import { FC, Fragment, useState } from 'react'

export const App: FC = () => {
  const [s, setS] = useState(false)
  return (
    <Fragment>
      <p onClick={() => {
        setS(true)
      }}>Hello {s}</p>
    </Fragment>
  )
}
