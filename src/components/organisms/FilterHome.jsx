import React from 'react'
import InputGrups from '../molecules/InputGrups'
import { UILabel } from '../atoms/UILabel'
import dataBooks from '../../assets/products.json'
import { BooksCard } from '../molecules/BooksCard'
import '../../assets/styles/BooksCard.css'

export const FilterHome = () => {
    const books = dataBooks.library;
    console.log(' libros', dataBooks.library);
    
    return (
        <div>
            <UILabel tagCus='h4' classCus='text-center p-2 mt-6 text-white' styleCus={{ fontSize: '2rem' }}>
                Filtra tus libros
            </UILabel>
            {/* Filtros para los libros */}
            <div className='flex justify-center'>
                <InputGrups
                    tagCus='span'
                    classLabelCus='text-white'
                    classDivCus='block p-4 w-[30%]'
                    classInputCus='w-[100%] p-2 border border-gray-300 rounded-md text-black'
                    typeCus='text'
                    labelcus='palabra clave'
                    placeholderCus='Busqueda'
                    styleLabelCus={{ fontSize: '15px' }}
                />
                <InputGrups
                    tagCus='span'
                    classLabelCus='text-white'
                    classDivCus='block p-4 w-[30%]'
                    classInputCus='w-[100%] p-2 border border-gray-300 rounded-md text-black'
                    typeCus='text'
                    labelcus='Genero'
                    placeholderCus='Busqueda'
                    styleLabelCus={{ fontSize: '15px' }}
                />
                <InputGrups
                    tagCus='span'
                    classLabelCus='text-white'
                    classDivCus='block p-4 w-[30%]'
                    classInputCus='w-[100%] p-2 border border-gray-300 rounded-md text-black'
                    typeCus='text'
                    labelcus='Genero'
                    placeholderCus='Busqueda'
                    styleLabelCus={{ fontSize: '15px' }}
                />
            </div>
            <div>
                <UILabel tagCus='h4' classCus='text-center p-2 mt-1 text-white' styleCus={{ fontSize: '2rem' }}>
                    Libros
                </UILabel>
                {/* Card de los libros */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 m-auto w-[80%]'>
                    { !!books &&
                        books.map((books)=>{
                            return(<BooksCard
                                    key={books.id}
                                    classCus='bg-cover bg-center h-[250px] w-[200px] rounded-md cursor-pointer'
                                    props={books.book}
                                 />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
