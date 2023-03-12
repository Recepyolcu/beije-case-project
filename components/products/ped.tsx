import { DataCtx } from '@/app/page';
import { useContext } from 'react';

export default function Ped() {
    const context = useContext(DataCtx);

    return (
        <div className="flex flex-col relative bottom-16">
            <label className="flex flex-col gap-6" htmlFor="standart">
                <span className="font-normal text-lg">Standart Ped</span>
                <span className="text-white px-3 py-1 rounded-md w-fit bg-[rgba(0,0,0,0.5)] flex justify-center">{context.data.standart[1]}</span>
                <input type="range" name="standart" onChange={e => context.change({standart: ['Standart Ped', Number(e.target.value), 29.73]})} value={context.data.standart[1]} step={10} min={0} max={60}/>
                <div className="flex justify-between">
                    <span>0</span>
                    <span>60</span>
                </div>
            </label>
            <label className="flex flex-col gap-6" htmlFor="süperPed">
                <span className="font-normal text-lg">Süper Ped</span>
                <span className="text-white px-3 py-1 rounded-md w-fit bg-[rgba(0,0,0,0.5)] flex justify-center">{context.data.süperPed[1]}</span>
                <input type="range" name="süperPed" onChange={e => context.change({süperPed: ['Süper Ped', Number(e.target.value), 33.27]})} value={context.data.süperPed[1]} step={10} min={0} max={60}/>
                <div className="flex justify-between">
                    <span>0</span>
                    <span>60</span>
                </div>
            </label>
            <label className="flex flex-col gap-6" htmlFor="süperPlusPed">
                <span className="font-normal text-lg">Süper+ Ped</span>
                <span className="text-white px-3 py-1 rounded-md w-fit bg-[rgba(0,0,0,0.5)] flex justify-center">{context.data.süperPlusPed[1]}</span>
                <input type="range" name="süperPlusPed" onChange={e => context.change({süperPlusPed: ['Süper+ Ped' , Number(e.target.value), 37.48]})} value={context.data.süperPlusPed[1]} step={10} min={0} max={60}/>
                <div className="flex justify-between">
                    <span>0</span>
                    <span>60</span>
                </div>
            </label>
        </div>
    )
}