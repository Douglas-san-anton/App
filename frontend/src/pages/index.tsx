import { useSelector } from 'react-redux'

export default function Home() {
  const { auth } = useSelector((state: any) => state)

  console.log(auth)

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
