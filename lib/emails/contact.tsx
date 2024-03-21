import { Head, Html,Body, Button } from '@react-email/components'
import React from 'react'

const contact = () => {
  return (
    <Html>
      <Head>
        <title>Hello</title>
      </Head>
<Body>
    <Button href='/'>Click ME</Button>
</Body>
    </Html>
  )
}

export default contact
