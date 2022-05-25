
export default function Events () {
  const handleMyEvent = (event: any) => {
    console.log(event)
    console.log('Hello World')
  }
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log('Clicou')}>Clique Aqui Tambem</button>
      </div>

    </div>

  )
}
