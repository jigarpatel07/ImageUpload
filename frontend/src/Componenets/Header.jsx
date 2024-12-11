import React from 'react'

const navData = [
    {
        title: "Home",
        link: "",
    },
    {
        title: "About",
        link: "",
    },
    {
        title: "Contact",
        link: "",
    },
]
function Header() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl whitespace-nowrap dark:text-white"><span className='font-semibold'>Flow</span><i>bite</i></span>
                </a>

                <div className="w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navData.map((item, index) => (
                            <li key={index}>
                                <a href={item.link} className="block py-2 px-3 hover:text-blue-700" aria-current="page">{item.title}</a>
                            </li>
                        ))}


                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header
