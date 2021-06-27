import Head from 'next/head'
import { Button } from '../components/Button'

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Button title={"LinkedIn"} />
      <Button title={"GitHub"} />
    </div>
  )
}
