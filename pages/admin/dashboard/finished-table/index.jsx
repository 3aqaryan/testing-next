import React from 'react'
import TableProducts from '../components/TablesBoth/TableProducts/TableProducts'
import MainLayout from '../layout/MainLayout'

export default function FinishedTable() {
  return (
    <MainLayout>
      <div className='productTable'>
        <TableProducts />
      </div>
    </MainLayout>
  )
}
