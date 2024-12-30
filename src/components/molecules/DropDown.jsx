import React, { useState } from 'react'
import { UILabel } from '../atoms/UILabel'

export const DropDown = ({ label = '', options  = [], valueDefault = '', onClickCus }) => {
    const [value, setValue] = useState("All")
    return (
        <div className="block p-4 w-[30%]">
            <div className="relative w-full group">
                <UILabel 
                    tagCus='label'
                    classCus="text-white"
                    >
                    {label}
                </UILabel>
                <button className="py-2.5 px-3 w-full md:text-sm text-site bg-white border border-dimmed focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded text-gray-300 ">
                    {value}
                </button>
                <div
                    className="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-full w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
                    <div
                        onClick={()=>{onClickCus(valueDefault);setValue(valueDefault)}}
                        className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                        {valueDefault}
                    </div>
                    {
                        !!options && 
                            options.map((item,  index)=>(
                                <div
                                    key={'IDOptions-'+index}
                                    onClick={()=>{onClickCus(item);setValue(item)}}
                                    className="w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md">
                                    {item}
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
