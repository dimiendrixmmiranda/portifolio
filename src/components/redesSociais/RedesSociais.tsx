'use client'
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa'
import styles from './style.module.css'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaSquareGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
export default function RedesSociais() {
    return (
        <div>
            <ul className='grid grid-cols-3 gap-3 max-w-[350px] mx-auto sm:grid-cols-4 md:max-w-[550px] md:grid-cols-7 lg:grid-cols-4 xl:grid-cols-7 xl:max-w-[550px]'>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.facebook}`}>
                            <div className='flex items-center gap-2'>
                                <FaFacebook className='text-4xl' />
                                <p className='text-xl font-black hidden'>Facebook</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.instagram}`}>
                            <div className='flex items-center gap-2'>
                                <AiFillInstagram className='text-4xl' />
                                <p className='text-xl font-black hidden'>Instagram</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.tiktok}`}>
                            <div className='flex items-center gap-2'>
                                <FaTiktok className='text-4xl' />
                                <p className='text-xl font-black hidden'>TikTok</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.whatsapp}`}>
                            <div className='flex items-center gap-2'>
                                <IoLogoWhatsapp className='text-4xl' />
                                <p className='text-xl font-black hidden'>WhatsApp</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.github}`}>
                            <div className='flex items-center gap-2'>
                                <FaSquareGithub className='text-4xl' />
                                <p className='text-xl font-black hidden'>GitHub</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.linkedin}`}>
                            <div className='flex items-center gap-2'>
                                <FaLinkedin className='text-4xl' />
                                <p className='text-xl font-black hidden'>Linkedin</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
                <li className='flex justify-center'>
                    <Link href={'/'}>
                        <button className={`${styles["blob-btn"]} ${styles.email}`}>
                            <div className='flex items-center gap-2'>
                                <MdEmail className='text-4xl' />
                                <p className='text-xl font-black hidden'>Email</p>
                            </div>
                            <span className={styles["blob-btn__inner"]}>
                                <span className={styles["blob-btn__blobs"]}>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                    <span className={styles["blob-btn__blob"]}></span>
                                </span>
                            </span>
                        </button>
                    </Link>
                </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='hidden'>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
                                                        0 1 0 0 0  
                                                        0 0 1 0 0  
                                                        0 0 0 21 -7" result="goo"></feColorMatrix>
                        <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}