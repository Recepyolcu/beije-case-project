import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaSpotify } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-footer-bg w-full px-[144px] py-[80px] flex flex-col gap-16 text-gray">
            <div className="flex gap-8">
                <div className="flex min-w-[517px]">
                    <div className="flex flex-col gap-6">
                        <div>
                            <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1001 426" width="56.39" height="24"><style></style><path className="fill-white" d="M191.13 291.98c-19.73 21.7-44.58 32.35-74.97 32.35-11.84 0-24.86-3.16-38.67-9.47-13.81-6.31-24.07-15-30.78-26.04v32.35H.95V0H47.9v141.65c6.71-11.05 16.57-19.73 30.38-25.65 13.81-6.31 26.83-9.47 39.06-9.47 30.78 0 55.64 11.05 74.57 33.14 19.34 22.1 28.8 47.35 28.8 75.36.01 29.61-9.85 55.25-29.58 76.95zM47.11 215.43c0 18.54 5.92 34.33 17.36 47.35 11.83 12.63 27.22 18.94 45.77 18.94 18.54 0 33.93-6.31 45.37-18.94 11.84-13.02 17.76-28.8 17.76-47.35s-5.92-34.33-17.76-47.35c-11.44-13.02-26.83-19.34-45.37-19.34-18.55 0-33.94 6.31-45.77 19.34-11.44 13.03-17.36 28.81-17.36 47.35zM295.67 229.64c.39 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.44 15.39 42.61 15.39 26.44 0 45.38-11.05 56.82-32.75l33.93 22.49c-17.76 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34 20.12-21.31 45.37-31.96 75.76-31.96 31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.23 46.17 27.23 78.91 0 6.31-.4 11.05-.79 14.6h-159.8zm2.36-35.51h110.48c-1.58-29.6-24.86-47.74-54.84-47.74-28.8 0-51.3 18.94-55.64 47.74zM498.06 20.52c12.23-12.63 31.17-12.63 43.4 0 12.23 12.23 12.23 31.17 0 43.4-12.23 12.23-31.17 12.23-43.4 0-12.23-12.23-12.23-31.17 0-43.4zm45.37 300.66h-46.95v-210.7h46.95v210.7zM648.38 110.48v235.56c0 53.27-25.65 79.71-76.55 79.71-7.5 0-14.6-1.18-21.3-3.16v-41.04c3.55 1.18 7.5 1.58 11.83 1.58 28.02 0 38.67-10.66 38.67-42.22V110.48h47.35zm7.5-68.26c0 16.97-14.2 30.77-31.57 30.77-16.97 0-30.78-13.81-30.78-30.77 0-16.97 13.81-31.17 30.78-31.17 17.36 0 31.57 14.2 31.57 31.17zM737.15 229.64c.4 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.43 15.39 42.61 15.39 26.43 0 45.37-11.05 56.82-32.75l33.93 22.49c-17.75 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34 20.12-21.31 45.38-31.96 75.76-31.96 31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.22 46.17 27.22 78.91 0 6.31-.39 11.05-.79 14.6H737.15zm2.37-35.51H850c-1.58-29.6-24.86-47.74-54.85-47.74-28.8 0-51.29 18.94-55.63 47.74z"></path><path d="M1000.95 291.38c0 9.05-6.91 15.72-12.84 21.65-5.93 5.93-12.6 10.84-21.65 10.84s-15.08-5.55-21.01-11.48c-5.93-5.93-10-11.96-10-21.01s-.65-19.8 5.28-25.73c5.93-5.93 16.68-9.15 25.73-9.15s17.18 5.84 23.11 11.77 11.38 14.06 11.38 23.11z"></path></svg>
                        </div>
                        <div>
                            <h3 className="font-semibold">Arayı açmayalım!</h3>
                            <p className="text-sm">Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.</p>
                        </div>
                        <div className="w-full">
                            <form className="w-full flex gap-4" action="">
                                <input type="email" name="mail" placeholder="e-mail adresin" className="w-full p-[9px] px-4 bg-transparent border-2 placeholder-dark-gray border-neutral-600 rounded-lg" />
                                <input type="submit" value="Gönder" className="bg-white text-footer-bg font-bold p-2 px-4 rounded-full" />
                            </form>
                        </div>
                        <div>
                            <small className="font-medium text-[11px]">Abone olarak, beije KVKK ve Gizlilik politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.</small>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 justify-center w-full text-white">
                    <nav className='flex gap-16'>
                        <ul className="flex flex-col gap-6">
                            <li><a href="https://beije.co/packets">Paketler</a></li>
                            <li><a href="https://beije.co/product/trial">Deneme Paketi</a></li>
                            <li><a href="https://www.linkedin.com/company/beije-tr/">Ekibimize Katıl</a></li>
                        </ul>
                        <ul className='flex flex-col gap-6'>
                            <li><a href="https://www.dongu.beije.co/">Blog</a></li>
                            <li><a href="https://beije.co/know-us/faqs">Sıkça Sorulan Sorular</a></li>
                            <li><a href="https://beije.co/know-us/why-beije">Biz Kimiz?</a></li>
                        </ul>
                    </nav>
                    <div>
                        <ul className='flex flex-col gap-6'>
                            <li>
                                <a className='flex items-center gap-3' href="https://www.facebook.com/beijewomen/">
                                    <FaFacebookF className='text-[25px] text-gray'/>
                                    <p>Facebook</p>
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-3' href="https://www.instagram.com/beijewomen/">
                                    <FaInstagram className='text-[25px] text-gray'/>
                                    <p>Instagram</p>
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-3' href="https://twitter.com/beijewomen">
                                    <FaTwitter className='text-[25px] text-gray'/>
                                    <p>Twitter</p>
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-3' href="https://www.linkedin.com/company/beije-tr/?originalSubdomain=tr">
                                    <FaLinkedin className='text-[25px] text-gray'/>
                                    <p>Linkedin</p>
                                </a>
                            </li>
                            <li>
                                <a className='flex items-center gap-3' href="https://open.spotify.com/user/ma20bga4ewhwt96kx1p92f2uv">
                                    <FaSpotify className='text-[25px] text-gray'/>
                                    <p>Spotify</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-t-2 border-dark-gray">
                <div className='mt-[30px] mb-[60px] flex justify-between text-dark-gray text-[13px]'>
                    <div className='font-semibold'>2023 beije. Tüm hakları saklıdır.</div>
                    <div>
                        <ul className='flex gap-6 font-medium'>
                            <li><a href="">KVKK Aydınlatma Metni</a></li>
                            <li><a href="">Üyelik Sözleşmesi</a></li>
                            <li><a href="">Gizlilik Politikası</a></li>
                            <li><a href="">Çerez Politikası</a></li>
                            <li><a href="">Test Sonuçları</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-4 font-semibold text-lg'>
                        <button>EN</button>
                        <div className='h-[18px] w-[3px] bg-gray'></div>
                        <button>TR</button>
                    </div>
                </div>
                <div className='flex gap-2 justify-center'>
                    <Image src='/master.svg' alt='master' width={50} height={26}></Image>
                    <Image src='/visa.svg' alt='visa' width={50} height={26}></Image>
                </div>
            </div>
        </footer>
    )
}