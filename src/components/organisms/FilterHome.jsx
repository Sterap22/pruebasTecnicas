import React, { useEffect, useState } from 'react';
import InputGrups from '../molecules/InputGrups';
import { UILabel } from '../atoms/UILabel';
import dataBooks from '../../assets/products.json';
import { BooksCard } from '../molecules/BooksCard';
import '../../assets/styles/BooksCard.css';
import { DropDown } from '../molecules/DropDown';

export const FilterHome = () => {
    const [books, setBooks] = useState([]); // Libros filtrados
    const [allBooks, setAllBooks] = useState([]); // Todos los libros
    const [categories, setCategories] = useState([]); // Categorías de libros

    useEffect(() => {
        const booksList = dataBooks.library.map((x) => x.book);
        const uniqueCategories = [...new Set(booksList.map((book) => book.genre))];
        setAllBooks(booksList);
        setBooks(booksList);
        setCategories(uniqueCategories);
    }, []);

    const filterGenre = (keyword) => {
        const filteredBooks = keyword !== 'All'?
            allBooks.filter(({ genre }) => genre.toLowerCase() === keyword.toLowerCase()):
            allBooks;
        setBooks(filteredBooks);
    };

    if (books.length === 0 && allBooks.length === 0) {
        return <div>Loading...</div>;
    }

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
                    labelcus='Palabra clave'
                    placeholderCus='Busqueda'
                    styleLabelCus={{ fontSize: '15px' }}
                />
                <DropDown
                    label='Genero'
                    valueDefault='All'
                    options={categories}
                    onClickCus={filterGenre}
                />
                <InputGrups
                    tagCus='span'
                    classLabelCus='text-white'
                    classDivCus='block p-4 w-[30%]'
                    classInputCus='w-[100%] p-2 border border-gray-300 rounded-md text-black'
                    typeCus='range'
                    labelcus='Pagina'
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
                    {books.map((book, index) => (
                        <BooksCard
                            key={'Card-' + index}
                            classCus='bg-cover bg-center h-[250px] w-[200px] rounded-md cursor-pointer'
                            cover={book.cover}
                            synopsis={book.synopsis}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
