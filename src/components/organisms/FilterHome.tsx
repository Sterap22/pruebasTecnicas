import  { useEffect, useState } from 'react';
import dataBooks from '../../assets/products.json';
import { BooksCard } from '../molecules/BooksCard';
import '../../assets/styles/BooksCard.css';
import { DropDown } from '../molecules/DropDown';
import { UILabel } from '../atoms/UILabel';
import InputGrups from '../molecules/InputGrups';
import { IBook } from '../../Interfaces/IBooks';
import { useForm } from '../../hooks/useForm';
import { IFilter } from '../../Interfaces/IFilter';
import { UIModal } from '../atoms/UIModal';

export const FilterHome = () => {
    const [books, setBooks] = useState<IBook[]>([]); // Libros filtrados
    const [allBooks, setAllBooks] = useState<IBook[]>([]); // Todos los libros
    const [categories, setCategories] = useState<string[]>([]); // Categorías de libros
    const { handlerChange, search, range } = useForm<IFilter>({
            search:'',
            range: ''
        });

    useEffect(() => {
        const booksList = dataBooks.library.map((x) => x.book);
        const uniqueCategories = [...new Set(booksList.map((book) => book.genre))];
        setAllBooks(booksList);
        setBooks(booksList);
        setCategories(uniqueCategories);
    }, []);

    const filter = (keyword: string, key: string) => {
        const filteredBooks = (keyword !== 'All' || !keyword)?
            allBooks.filter((book) => book[key as keyof IBook]?.toString().toLowerCase().includes(keyword.toLowerCase())):
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
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center'>
                <InputGrups
                    tagCus='span'
                    classLabelCus='text-white'
                    classDivCus='block p-4 w-[90%]'
                    classInputCus='w-[100%] p-2 border border-gray-300 rounded-md text-black'
                    typeCus='text'
                    labelcus='Palabra clave'
                    placeholderCus='Busqueda'
                    styleLabelCus={{ fontSize: '15px' }}
                    onChageCus={({target})=> {handlerChange('search',target.value);filter(target.value,'title')}}
                    valueCus={search}
                />
                <DropDown
                    label='Genero'
                    valueDefault='All'
                    options={categories}
                    onClickCus={filter}
                />
                <InputGrups
                    tagCus='span'
                    classLabelCus='text-white'
                    classDivCus='block p-4 w-[90%]'
                    classInputCus='w-[100%] p-2 border border-gray-300 rounded-md text-black'
                    typeCus='range'
                    labelcus='Pagina'
                    placeholderCus='Busqueda'
                    styleLabelCus={{ fontSize: '15px' }}
                    onChageCus={({target})=> {console.log(target.value,'valor');handlerChange('range',target.value);filter(target.value,'pages')}} //TO DO: Ajustar filtrado por numero depaginas 
                    valueCus={range}
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
                            classCus='bg-cover bg-center h-[250px] w-[80%] rounded-md cursor-pointer'
                            cover={book.cover}
                            synopsis={book.synopsis}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
