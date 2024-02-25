import { useEffect, useState } from "react"
import data from "../data/data.js"
const HeroComp = () => {
    let [start, setStart] = useState(0)
    let [end, setEnd] = useState(4)
    const [imagesData, setImagesData] = useState([])
    console.log(data)

    const handleDecrement = () => {
        if (end - start < 4) {
            start = end - 4
            setStart(start)
            return
        }
        start = (start - 4) < 0 ? 0 : start - 4
        setStart(start)
        end = (end - 4) <= 4 ? 4 : (end - 4) % data.length
        setEnd(end)
    }

    const handleIncrement = () => {
        // end+4-->data.legth, 
        start = (start + 4) >= data.length ? start : start + 4
        setStart(start)
        end = (end + 4) >= data.length ? data.length : end + 4
        setEnd(end)
    }
    const updateImagesArr = (start, end) => {
        const ImagesArr = data && data.slice(start, end)
        console.log(ImagesArr)
        setImagesData([...ImagesArr])
    }
    useEffect(() => {
        updateImagesArr(start, end)
        console.log(start, end)
    }, [start, end])
    return (
        <div className="flex flex-row gap-4 flex-wrap justify-center items-center h-screen">
            <div onClick={() => handleDecrement()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"> <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" /></svg>
            </div>

            {
                imagesData && imagesData.map((item, index) => (
                    <div class="w-60  h-50 shadow-lg  flex flex-col justify-center items-center my-3   ">
                        <img class="rounded-t-lg" src={item?.image} alt="" className=" object-fill   rounded-t-md" />
                        <div class="p-5  dark:bg-gray-800 w-full rounded-br-md rounded-bl-sm" >
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.name}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.role}</p>

                        </div>
                    </div>
                ))
            }
            <div onClick={() => handleIncrement()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"> <path fill="#000000" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" /></svg>
            </div>




        </div>


    )
}

export default HeroComp