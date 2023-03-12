import { DataCtx } from "@/app/page"
import { useContext } from "react"

export default function Tampon() {
    const context = useContext(DataCtx);
    return (
        <div className="flex flex-col gap-5 relative bottom-7">
            <label className="flex flex-col gap-6" htmlFor="miniTampon">
                <span className="font-normal text-lg">Mini Tampon</span>
                <span className="text-white px-3 py-1 rounded-md w-fit bg-[rgba(0,0,0,0.5)] flex justify-center">{context.data.miniTampon[1]}</span>
                <input type="range" name="standart" onChange={e => context.change({miniTampon: ['Mini Tampon', Number(e.target.value), 33.72]})} value={context.data.miniTampon[1]} step={10} min={0} max={60}/>
                <div className="flex justify-between">
                    <span>0</span>
                    <span>60</span>
                </div>
            </label>
            <label className="flex flex-col gap-6" htmlFor="standartTampon">
                <span className="font-normal text-lg">Standart Tampon</span>
                <span className="text-white px-3 py-1 rounded-md w-fit bg-[rgba(0,0,0,0.5)] flex justify-center">{context.data.standartTampon[1]}</span>
                <input type="range" name="standart" onChange={e => context.change({standartTampon: ['Mini Tampon', Number(e.target.value), 37.01]})} value={context.data.standartTampon[1]} step={10} min={0} max={60}/>
                <div className="flex justify-between">
                    <span>0</span>
                    <span>60</span>
                </div>
            </label>
        </div>
    )
}