import Blank from './pages/Blank'
import { Routes, Route } from 'react-router-dom'
import UpdateItem from './pages/UpdateItem/UpdateItem'
import MainLayout from './layout/MainLayout'
import AddProduct from './pages/AddProduct'


function Dashboard() {
    return (
        <div>
            {/* <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<AddProduct />} />
                    <Route path='finished-table' element={<Table />} />
                    <Route path='not-finished-table' element={<NotFinishedTable />} />
                    <Route path='favorites-table' element={<Blank />} />
                    <Route path='settings' element={<Blank />} />
                    <Route path='update-item' element={<UpdateItem />} />
                    <Route path='stats' element={<Blank />} />
                </Route>
            </Routes> */}
            <MainLayout>
                <AddProduct />
            </MainLayout>
        </div>
    )
}

export default Dashboard
