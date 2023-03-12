import { DataCtx } from "@/app/page"
import { useContext } from "react"

export default function GünlükPed() {
    const context = useContext(DataCtx);
    return (
        <div className="flex flex-col gap-5 relative bottom-7">
            <label className="flex flex-col gap-6" htmlFor="günlükPed">
                <span className="font-normal text-lg">Günlük Ped</span>
                <span className="text-white px-3 py-1 rounded-md w-fit bg-[rgba(0,0,0,0.5)] flex justify-center">{context.data.günlük[1]}</span>
                <input type="range" name="standart" onChange={e => context.change({günlük: ['Günlük Ped', Number(e.target.value), 19.72]})} value={context.data.günlük[1]} step={10} min={0} max={100}/>
                <div className="flex justify-between">
                    <span>0</span>
                    <span>100</span>
                </div>
            </label>
            <label className="flex flex-col gap-6" htmlFor="süperGünlükPed">
                <span className="font-normal text-lg">Süper Günlük Ped</span>
                <span className="text-white px-3 py-1 rounded-md w-fit bg-[rgba(0,0,0,0.5)] flex justify-center">{context.data.süperGünlük[1]}</span>
                <input type="range" name="standart" onChange={e => context.change({süperGünlük: ['Süper Günlük Ped', Number(e.target.value), 20.92]})} value={context.data.süperGünlük[1]} step={10} min={0} max={100}/>
                <div className="flex justify-between">
                    <span>0</span>
                    <span>100</span>
                </div>
            </label>
        </div>
    )
}