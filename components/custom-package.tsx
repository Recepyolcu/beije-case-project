import Image from "next/image";
import { GrPowerCycle } from 'react-icons/gr';

export default function CustomPackage() {
    return (
        <div className="max-w-[1150px] flex gap-32">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h1 className="font-medium text-3xl text-[rgba(0,0,0,0.9)]">Kendi Paketini Oluştur</h1>
                        <a href="#">Nasıl Çalışır?</a>
                    </div>
                    <div>
                        <p className="text-[rgba(0,0,0,0.6)]">Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve miktarlardan, sana özel bir paket oluşturalım.</p>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <ul className="w-full flex justify-between text-sm font-semibold">
                        <li className="w-full p-3 text-center"><button>beije Ped</button></li>
                        <li className="w-full p-3 text-center"><button>beije Günlük Ped</button></li>
                        <li className="w-full p-3 text-center"><button>beije Tampon</button></li>
                    </ul>
                    <div className="w-1/3 bg-black h-[3px]"></div>
                </div>
                <div className="flex flex-col gap-5">
                    
                </div>
            </div>
            <div className="min-w-[460px] flex flex-col items-center gap-7 bg-white rounded-2xl p-9">
                <h1 className="font-medium text-3xl w-full">Özel Paketin</h1>
                <div className="shadow-md rounded-md p-3 w-full flex items-center gap-2">
                    <GrPowerCycle />
                    <p>2 ayda 1 gönderim</p>
                </div>
                <div>
                    <Image className="rounded-lg" src={'/packet.webp'} width={420} height={200} alt={'package'}></Image>
                </div>
                <div className="w-full mt-10">
                    <button className="bg-neutral-200 text-neutral-400 font-medium text-lg w-full p-3 rounded-full" disabled>Sepete Ekle ({})</button>
                </div>
            </div>
        </div>
    )
}