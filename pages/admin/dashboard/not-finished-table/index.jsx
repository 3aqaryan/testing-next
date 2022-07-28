import React from 'react'
import NotFinishedTableProducts from '../components/TablesBoth/NotFinishedTableProducts/NotFinishedTableProducts'
import MainLayout from '../layout/MainLayout'

export default function NotFinishedTable() {
  return (
    <MainLayout>
      <div className='productTable'>
        <NotFinishedTableProducts />
      </div>
    </MainLayout>
  )
}
