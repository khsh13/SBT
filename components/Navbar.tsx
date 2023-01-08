/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const menu = [{ label: "About", route: "/" }, { label: "Features", route: "/features" },{label: "SignUp", route: "/signup"},{label: "FAQs", route: "/password"}]
    return (
        <div className="w-full h-fit bg-black text-[#0CCF89] flex flex-row justify-start gap-12 items-center sticky top-0 z-[100] ">
            <img src="./logo.png" height={80} width={100} alt="logo" className="pl-5 py-1" />
            {menu.map((item, index) => {
                return (
                    <div key={index} className="text-xl font-semibold">
                        <Link href={item.route}>
                            {item.label}
                        </Link>
                    </div>
                )
            })}
            <div className="text-xl font-semibold">
                More &gt;
            </div>
        </div>
    )
}

export default Navbar