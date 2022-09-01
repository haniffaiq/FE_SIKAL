import React from 'react';
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import {
    BsPlus,
    BsSearch,
    BsEyeFill,
    BsBookmarkFill,
    BsFillArrowLeftSquareFill,
    BsPeopleFill,
    BsTerminalFill,
    BsFillArrowRightSquareFill,
    BsArrowLeftSquare,
    BsFillBookmarkFill

} from 'react-icons/bs'
import { AiFillFire, AiFillMessage, AiOutlineDatabase, AiOutlineSetting } from 'react-icons/ai'
import { BiPencil, BiTimeFive } from 'react-icons/bi'
import { IoMdArrowRoundUp } from 'react-icons/io'
import { MdNightlightRound, MdFeedback, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaCog } from 'react-icons/fa'
import logoDisjarhal from '../../assets/logoDisjarhal.png'
import './SideBar.css'
// const data = [
//     {
//         name: "Hanif",
//         title : "Software Engineer"
//     }
// ]

const data = [
    {
        name: 'Aplikasi',
        items: [
            {
                title: 'Utilitas',
                icon: AiOutlineSetting,
                item: [
                    {
                        subtitle: 'User Manager',
                        link: '#'
                    },
                    {
                        subtitle: 'User Group',
                        link: '#'
                    },
                    {
                        subtitle: 'Change Password',
                        link: '#'
                    },
                    {
                        subtitle: 'Log User',
                        link: '#'
                    },
                ]
            },
        ]
    },
    {
        name: 'Pembinaan SDM',
        items: [
            {
                title: 'Data Master',
                icon: AiOutlineDatabase,
                item: [
                    {
                        subtitle: 'Pangkat Korps',
                        link: '#'
                    },
                    {
                        subtitle: 'Korps',
                        link: '#'
                    },
                    {
                        subtitle: 'Golongan',
                        link: '#'
                    },
                    {
                        subtitle: 'Jabatan',
                        link: '#'
                    },
                    {
                        subtitle: 'Satuan Kerja',
                        link: '#'
                    },
                    {
                        subtitle: 'Status',
                        link: '#'
                    },
                    {
                        subtitle: 'Pendidikan',
                        link: '#'
                    },
                ]
            },
            {
                title: 'Management Data',
                icon: BiPencil,
                item: [
                    {
                        subtitle: 'Data Personel',
                        link: '#'
                    },
                ]
            },

        ]
    },
    {
        name: 'Riset dan Sejarah',
        items: [
            {
                title: 'Data Master',
                icon: AiOutlineDatabase,
                item: [
                    {
                        subtitle: 'Jenis Dokumen',
                        link: '#'
                    },
                    {
                        subtitle: 'Status Pengelokaan',
                        link: '#'
                    },
                    {
                        subtitle: 'Status Publikasi',
                        link: '#'
                    },
                ]
            },
            {
                title: 'Management Data',
                icon: BiPencil,
                item: [
                    {
                        subtitle: 'Riset Situs',
                        link: '#'
                    },
                    {
                        subtitle: 'Riset Pustaka',
                        link: '#'
                    },
                    {
                        subtitle: 'Riset Benda',
                        link: '#'
                    },
                    {
                        subtitle: 'Riset Narasumber',
                        link: '#'
                    },
                    {
                        subtitle: 'Status Publikasi',
                        link: '#'
                    },
                ]
            },

        ]
    },
    {
        name: 'Historigrafi',
        items: [
            {
                title: 'Data Master',
                icon: AiOutlineDatabase,
                item: [
                    {
                        subtitle: 'jenis Media',
                        link: '#'
                    },
                    {
                        subtitle: 'Status Publikasi',
                        link: '#'
                    },

                ]
            },
            {
                title: 'Management Data',
                icon: BiPencil,
                item: [
                    {
                        subtitle: 'Penulisan',
                        link: '#'
                    },
                    {
                        subtitle: 'Produksi',
                        link: '#'
                    },

                ]
            },

        ]
    },
    {
        name: 'Dokumen Dan Arsip',
        items: [
            {
                title: 'Data Master',
                icon: AiOutlineDatabase,
                item: [
                    {
                        subtitle: 'Kotama Satker',
                        link: '#'
                    },
                    {
                        subtitle: 'Kelompok Produk',
                        link: '#'
                    },
                    {
                        subtitle: 'Jenis Dokumen',
                        link: '#'
                    },

                    {
                        subtitle: 'Lokasi Dokumen',
                        link: '#'
                    },

                    {
                        subtitle: 'Klasifikasi Dokumen',
                        link: '#'
                    },

                    {
                        subtitle: 'Penilaian Dokumen',
                        link: '#'
                    },
                    {
                        subtitle: 'Kondisi Dokumen',
                        link: '#'
                    },


                ]
            },
            {
                title: 'Management Data',
                icon: BiPencil,
                item: [
                    {
                        subtitle: 'Data Dokumen',
                        link: '#'
                    },
                    {
                        subtitle: 'Data Arsip',
                        link: '#'
                    },

                ]
            },

        ]
    },

    {
        name: 'Museum Dan Monumen',
        items: [
            {
                title: 'Data Master',
                icon: AiOutlineDatabase,
                item: [
                    {
                        subtitle: 'Kotama Satker',
                        link: '#'
                    },
                ]
            },
            {
                title: 'Management Data',
                icon: BiPencil,
                item: [
                    {
                        subtitle: 'Data Museum',
                        link: '#'
                    },
                    {
                        subtitle: 'Data Galeri',
                        link: '#'
                    },
                    {
                        subtitle: 'Data Monumen',
                        link: '#'
                    },
                    {
                        subtitle: 'Koleksi Benda',
                        link: '#'
                    },
                    {
                        subtitle: 'Koleksi Tak Benda',
                        link: '#'
                    },
                    {
                        subtitle: 'Data Monumen',
                        link: '#'
                    },
                ]
            },

        ]
    },
    {
        name: 'Lainnya',
        items: [
            {
                title: 'Dokumentasi',
                icon: BsFillBookmarkFill,
                item: [
                    {}
                ]
            },
            {
                title: 'History Perubahan',
                icon: BiTimeFive,
                item: [
                    {}
                ]
            },

        ]
    },
]

const datafooter = [

    {
        name: '',
        items: [
            {
                title: 'Docs',
                icon: BsBookmarkFill,
            },
            {
                title: 'Changelog',
                icon: BsTerminalFill,
            },
            {
                title: 'Feedback',
                icon: MdFeedback,
            },
            {
                title: 'Invite people',
                icon: BsPeopleFill,
            },
        ]
    },
]
const SideBar = () => {
    const [active, setActive] = useState(false)
    const controls = useAnimation()
    const controlText = useAnimation()
    const controlTitleText = useAnimation()


    const showMore = () => {
        controls.start({
            width: '300px',
            transition: { duration: 1.5 }
        })
        controlText.start({
            opacity: 1,
            display: 'block',
            transition: { delay: 0.5 }
        })
        controlTitleText.start({
            opacity: 1,
            transition: { delay: 1 }
        })

        setActive(true)
    }

    const showLess = () => {
        controls.start({
            width: '10px',
            transition: { duration: 1.5 }
        })

        controlText.start({
            opacity: 0,
            display: 'block',
            transition: { duration: 0.5 }
        })

        controlTitleText.start({
            opacity: 0,
            transition: { duration: 1 }
        })

        setActive(false)

    }



    useEffect(() => {
        showMore()
    }, [])
    return (
        <motion.div animate={controls} className='max-w-[300px] border-r broder-gray-700 relative flex flex-col min-h-screen bg-gray-100 group'>
            <div className='flex place-content-center inline-block align-middle bg-gray-200 pb-10 pt-10'>
                <motion.img animate={controlText} src={logoDisjarhal} className="max-w-[70px] max-h-[70px]" />
                <motion.p animate={controlText} className=' text-xl font-bold flex justify-center items-center py-6 opacity-0 group-hover:opacity-100  heading-side font-bold group-hover:translate-x-6 transition duration-300 ease-in-out'>DISJARHAL</motion.p>
            </div>
            {active && <BsFillArrowLeftSquareFill onClick={showLess} className='hidden absolute cursor-pointer text-3xl -right-4 top-10 bg-white group-hover:block' />}
            {!active && <BsFillArrowRightSquareFill onClick={showMore} className='absolute cursor-pointer text-3xl -right-4 top-10 bg-white' />}

            {/* <BsFillArrowLeftSquareFill className='hidden absolute cursor-pointer text-3xl -right-4 top-10 bg-white group-hover:block ' /> */}


            {/* Sidebar Item */}

            {data.map((group, index) => (
                <div key={index} className="pl-4 text-sm font-bold mb-2 border-t-2 broder-gray-700">
                    <motion.p animate={controlText} className='item-title uppercase text-gray-400 font-bold'>{group.name}</motion.p>
                    {group.items.map((group2, index) => (
                        <div key={index} className="flex-col">
                            <div className='px-4 py-1 cursor-pointer flex hover:scale-110 text-sky-500 transition duration-300 ease-in-out container-item'>
                                <group2.icon className='icon-subtitle text-2xl text-gray-500 ' />
                                <motion.p animate={controlText} className='item-subtitle capitalize text-gray-500 font-bold ml-4'>{group2.title}</motion.p>
                            </div>
                            {group2.item.map((child, index2) => (
                                <div key={index2} className='px-4 py-1 cursor-pointer flex hover:scale-110 text-sky-500 transition duration-300 ease-in-out container-item'>
                                    <motion.p animate={controlText} className='item-subtitle capitalize text-gray-500 font-normal text-xs ml-4'>{child.subtitle}</motion.p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </motion.div>
    );
};



// const SideBar = () => {
//     const data = [
//         {
//             name: "Hanif",
//             title : "Software Engineer"
//         }
//     ]
//     return (
//         <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
//             <p className="text-3xl text-gray-700 font-bold mb-5">
//                 Welcome!
//             </p>
//             <p className="text-gray-500 text-lg">
//                 {data[0].name} sebagai {data[0].title} akan menggunakan Tailwind CSS disokin ygy
//             </p>
//         </div>
//     );
// };

export default SideBar;