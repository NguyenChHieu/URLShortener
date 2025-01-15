import { Rings } from "react-loader-spinner"

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
        <div className="flex flex-col items-center gap-1">
            <Rings
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    </div>
  )
}
export default Loader