"use client"
import { useState, createContext, useEffect } from "react";
import CustomPackage from "@/components/custom-package";


type DataType = {
    standart:       [string, number, number],
    süperPed:       [string, number, number],
    süperPlusPed:   [string, number, number],
    günlük:         [string, number, number],
    süperGünlük:    [string, number, number],
    miniTampon:     [string, number, number],
    standartTampon: [string, number, number],
}
let Data: DataType = {
    standart:       ['', 0, 0],
    süperPed:       ['', 0, 0],
    süperPlusPed:   ['', 0, 0],
    günlük:         ['', 0, 0],
    süperGünlük:    ['', 0, 0],
    miniTampon:     ['', 0, 0],
    standartTampon: ['', 0, 0],
}

export const DataCtx = createContext<DataType | any>(Data);

export default function Home() {
    const [ data, setData ] = useState(Data);

    function change(fields: Partial<DataType>)  {
        setData(prev => {
            return { ...prev, ...fields }
        });
    }

    function handleRemove(fields: Partial<DataType>){
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    useEffect(() => {
    }, [data]);
    
    return (
        <main className="w-full h-fit flex justify-center items-center">
            <DataCtx.Provider value={{data, change, handleRemove}}>
                <CustomPackage />
            </DataCtx.Provider>
        </main>
    )
}
