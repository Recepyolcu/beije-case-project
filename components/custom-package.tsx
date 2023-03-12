import { useEffect, useState, useContext } from "react";
import { DataCtx } from "@/app/page";
import Image from "next/image";
import { GrPowerCycle } from 'react-icons/gr';
import { RiCloseLine } from 'react-icons/ri';
import Ped from "./products/ped";
import GünlükPed from "./products/dailyPed";
import Tampon from "./products/tampon";



export default function CustomPackage() {
    const [ tab, setTab ] = useState("0");
    const [ totalPrice, setTotalPrice ] = useState('0,00');
    const [ showPackage, setShowPackage ] = useState(false);
    const context = useContext(DataCtx);    
    
    const handleChangeTab = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTab(event.currentTarget.id);
    }

    const handleShowPackage = () => {
        setShowPackage(show => !show);
    }

    const pedler = () => {
        if(context.data.standart[1] || context.data.süperPed[1] || context.data.süperPlusPed[1]){
            let text = '';
            if(context.data.standart[0] && context.data.standart[1] > 0) text += context.data.standart[1] + ' ' + context.data.standart[0] + ' ';
            if(context.data.süperPed[0] && context.data.süperPed[1] > 0) text += context.data.süperPed[1] + ' ' + context.data.süperPed[0] + ' ';
            if(context.data.süperPlusPed[0] && context.data.süperPlusPed[1] > 0) text += context.data.süperPlusPed[1] + ' ' + context.data.süperPlusPed[0];
            return {
                name: 'Ped Paketleri',
                text: text
            }
        };
    } 
    const günlükler = () => {
        if(context.data.günlük[1] || context.data.süperGünlük[1]) {
            let text = '';
            if(context.data.günlük[0] && context.data.günlük[1] > 0) text += context.data.günlük[1] + ' ' + context.data.günlük[0] + ' ';
            if(context.data.süperGünlük[0] && context.data.süperGünlük[1] > 0) text += context.data.süperGünlük[1] + ' ' + context.data.süperGünlük[0];
            return {
                name: 'Günlük Ped Paketleri',
                text: text
            }
        };
    }
    const tamponlar = () => {
        if(context.data.miniTampon[1] || context.data.standartTampon[1]) {
            let text = '';
            if(context.data.miniTampon[0] && context.data.miniTampon[1] > 0) text += context.data.miniTampon[1] + ' ' + context.data.miniTampon[0] + ' ';
            if(context.data.standartTampon[0] && context.data.standartTampon[1] > 0) text += context.data.standartTampon[1] + ' ' + context.data.standartTampon[0];
            return {
                name: 'Tampon Paketleri',
                text: text
            }
        };
    }

    const total = (): string => {
        let total = 0;
        let text = '';
        total += context.data.günlük[2] * context.data.günlük[1] / 10;
        total += context.data.miniTampon[2] * context.data.miniTampon[1] / 10;
        total += context.data.standart[2] * context.data.standart[1] / 10;
        total += context.data.standartTampon[2] * context.data.standartTampon[1] / 10;
        total += context.data.süperGünlük[2] * context.data.süperGünlük[1] / 10;
        total += context.data.süperPed[2] * context.data.süperPed[1] / 10;
        total += context.data.süperPlusPed[2] * context.data.süperPlusPed[1] / 10;
        if(total){
            let splitText = total.toString().split('.');
            if(splitText[1] == undefined) splitText[1] = '00';
            else splitText[1] = splitText[1].slice(0, 2);
            text = splitText[0] + ',' + splitText[1];
        }
        if(total == 0) return '0,00';
        return text;
    }
    
    useEffect(() => {
        setTotalPrice(total());
    }, [pedler, günlükler, tamponlar, showPackage])
    
    return (
        
        <div className="max-tablet:gap-20 max-tablet:max-w-[1000px] max-mobile:flex-col max-mobile:gap-0 max-w-[1150px] pt-[152px] pb-[96px] flex items-baseline gap-32">
            <div className="max-mobile:p-5 flex flex-col gap-20">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h1 className="max-mobile:text-2xl font-medium text-3xl text-[rgba(0,0,0,0.9)]">Kendi Paketini Oluştur</h1>
                        <a className="max-mobile:hidden" href="#">Nasıl Çalışır?</a>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <p className="text-[rgba(0,0,0,0.6)]">Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.</p>
                    </div>
                </div>
                <div className={tab == '0' ? "flex flex-col items-start" : tab == '1' ? "flex flex-col items-center" : "flex flex-col items-end"}>
                    <ul className="w-full flex justify-between text-sm font-semibold">
                        <li className="w-full text-center flex justify-center"><button id="0" className={tab == '0' ? 'text-black p-3 ' : 'text-[rgba(0,0,0,0.6)]'} onClick={handleChangeTab}>beije Ped</button></li>
                        <li className="w-full text-center flex justify-center"><button id="1" className={tab == '1' ? 'text-black p-3 ' : 'text-[rgba(0,0,0,0.6)]'} onClick={handleChangeTab}>beije Günlük Ped</button></li>
                        <li className="w-full text-center flex justify-center"><button id="2" className={tab == '2' ? 'text-black p-3 ' : 'text-[rgba(0,0,0,0.6)]'} onClick={handleChangeTab}>beije Tampon</button></li>
                    </ul>
                    <div className="w-1/3 bg-black h-[3px]"></div>
                </div>
                <div className="max-mobile:mt-6">
                    {tab == '0' ? <Ped {...context} change={context.change}/> : tab == '1' ? <GünlükPed {...context.data} change={context.change} /> : <Tampon {...context.data} change={context.change}/>}
                </div>
            </div>

            <div className="max-mobile:hidden min-w-[460px] flex flex-col items-center gap-7 bg-white rounded-2xl p-9">
                <h1 className="font-medium text-3xl w-full">Özel Paketin</h1>
                <div className="shadow-md rounded-md p-3 w-full flex items-center gap-2">
                    <GrPowerCycle />
                    <p>2 ayda 1 gönderim</p>
                </div>
                <div>
                    <Image className="rounded-lg" src={'/packet.webp'} width={420} height={200} alt={'package'}></Image>
                </div>
                <div className="w-full mt-10 flex flex-col gap-9">
                    {pedler() && 
                    <div className="p-5 flex flex-col items-start shadow-md rounded-lg">
                        <p className="font-semibold text-xl">{pedler()?.name}</p>
                        <span className="text-neutral-500">{pedler()?.text}</span>
                        <button onClick={e => context.handleRemove({standart: ['', 0, 0], süperPed: ['', 0, 0], süperPlusPed: ['', 0, 0]})} className="font-semibold mt-2">Paketten Çıkar</button>
                    </div>
                    }
                    {günlükler() && 
                    <div className="p-5 flex flex-col items-start shadow-md rounded-lg">
                        <p className="font-semibold text-xl">{günlükler()?.name}</p>
                        <span className="text-neutral-500">{günlükler()?.text}</span>
                        <button onClick={e => context.handleRemove({günlük: ['', 0, 0], süperGünlük: ['', 0, 0]})} className="font-semibold mt-2">Paketten Çıkar</button>
                    </div>
                    }
                    {tamponlar() && 
                    <div className="p-5 flex flex-col items-start shadow-md rounded-lg">
                        <p className="font-semibold text-xl">{tamponlar()?.name}</p>
                        <span className="text-neutral-500">{tamponlar()?.text}</span>
                        <button onClick={e => context.handleRemove({miniTampon: ['', 0, 0], standartTampon: ['', 0, 0]})} className="font-semibold mt-2">Paketten Çıkar</button>
                    </div>
                    }
                    <button className={(totalPrice != '0,00') ? "bg-footer-bg text-white font-medium text-lg w-full p-3 rounded-full cursor-pointer" : "bg-neutral-200 text-neutral-400 font-medium text-lg w-full p-3 rounded-full cursor-default"} disabled={(pedler()?.text != '' || günlükler()?.text != '' || tamponlar()?.text != '') ? true : false}>Sepete Ekle (₺{totalPrice})</button>
                </div>
            </div>

            <div className="max-mobile:flex hidden w-full px-5">
                <button onClick={e => handleShowPackage()} className="bg-footer-bg text-white font-medium text-lg w-full p-3 rounded-full cursor-pointer shadow-lg">Paketini Gör</button>
            </div>
            {showPackage &&
            <div className="bg-[rgba(0,0,0,0.3)] h-screen w-full z-40 absolute top-0 left-0 flex justify-center items-center">
                <div className="flex flex-col gap-6 bg-white p-7 z-50 rounded-lg">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-2xl">Özel Paketin</h1>
                        <button onClick={e => handleShowPackage()}>
                            <RiCloseLine className="text-3xl"/>
                        </button>
                    </div>
                    <div className="shadow-md rounded-md p-3 w-full flex items-center gap-2">
                        <GrPowerCycle />
                        <p>2 ayda 1 gönderim</p>
                    </div>
                    <div>
                        <Image className="rounded-lg" src={'/packet.webp'} width={420} height={200} alt={'package'}></Image>
                    </div>
                    <div className="w-full mt-10 flex flex-col gap-9">
                        {pedler() && 
                        <div className="p-5 flex flex-col items-start shadow-md rounded-lg">
                            <p className="font-semibold text-xl">{pedler()?.name}</p>
                            <span className="text-neutral-500">{pedler()?.text}</span>
                            <button onClick={e => context.handleRemove({standart: ['', 0, 0], süperPed: ['', 0, 0], süperPlusPed: ['', 0, 0]})} className="font-semibold mt-2">Paketten Çıkar</button>
                        </div>
                        }
                        {günlükler() && 
                        <div className="p-5 flex flex-col items-start shadow-md rounded-lg">
                            <p className="font-semibold text-xl">{günlükler()?.name}</p>
                            <span className="text-neutral-500">{günlükler()?.text}</span>
                            <button onClick={e => context.handleRemove({günlük: ['', 0, 0], süperGünlük: ['', 0, 0]})} className="font-semibold mt-2">Paketten Çıkar</button>
                        </div>
                        }
                        {tamponlar() && 
                        <div className="p-5 flex flex-col items-start shadow-md rounded-lg">
                            <p className="font-semibold text-xl">{tamponlar()?.name}</p>
                            <span className="text-neutral-500">{tamponlar()?.text}</span>
                            <button onClick={e => context.handleRemove({miniTampon: ['', 0, 0], standartTampon: ['', 0, 0]})} className="font-semibold mt-2">Paketten Çıkar</button>
                        </div>
                        }
                        <button className={(totalPrice != '0,00') ? "bg-footer-bg text-white font-medium text-lg w-full p-3 rounded-full cursor-pointer" : "bg-neutral-200 text-neutral-400 font-medium text-lg w-full p-3 rounded-full cursor-default"} disabled={(pedler()?.text != '' || günlükler()?.text != '' || tamponlar()?.text != '') ? true : false}>Sepete Ekle (₺{totalPrice})</button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}