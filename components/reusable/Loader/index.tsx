import { Spinner } from "flowbite-react"

const Loader = () => {
  return (
    <div className="mx-auto w-full">
        <Spinner
    color="info"
    aria-label="Info spinner example"
  />
    </div>
  )
}

export default Loader