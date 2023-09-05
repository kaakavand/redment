"use client"

import ItemComponent from '@/core/ItemComponent';
import groupById from '@/functions/groupById';
import { useDataContext } from '@/store/store';
import Image from 'next/image'

export default function Home() {
  const { data, setData } = useDataContext();


  return (
    <main className="flex flex-col gap-4 h-full sm:flex-row">
      <section className='bg-white rounded-lg shadow-md w-full p-4'>
        <h2 className='text-slate-600 font-bold p-2 text-center'>
          All Data
        </h2>
        <hr />
        <button className='bg-slate-500 transition-all duration-300 hover:bg-slate-700 text-white py-2 my-1 px-4 border border-slate-700 w-full rounded' onClick={() => setData(data.map(el => (!el.selected && el.checked) ? ({ ...el, selected: true, checked: false }) : ({ ...el, checked: false })))}>
          ADD
        </button>
        <ul className=''>
          {
            groupById(data.filter(el => !el.selected)).map(el => <ItemComponent key={el.id} obj={el} />)
          }
        </ul>
      </section>
      <section className='bg-white rounded-lg shadow-md w-full p-4'>
        <h2 className='text-slate-600 font-bold p-2 text-center'>
          Selected Data
        </h2>
        <hr />
        <button className='bg-slate-500 transition-all duration-300 hover:bg-slate-700 text-white py-2 my-1 px-4 border border-slate-700 w-full rounded' onClick={() => setData(data.map(el => (el.selected && el.checked) ? ({ ...el, selected: false, checked: false }) : ({ ...el, checked: false })))}>
          Selected Data
        </button>
        <ul className=''>
          {
            groupById(data.filter(el => el.selected)).map(el => <ItemComponent key={el.id} obj={el} />)
          }
        </ul>
      </section>
    </main>
  )
}
