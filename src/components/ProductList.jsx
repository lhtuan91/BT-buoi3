import React, { Component } from 'react';
import ProductItem from './ProductItem';

const arrDataPhone = [  
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
];

class ProductList extends Component {
    state = {
        spChiTiet: { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" }
    }
    xemChiTiet = (prodClick) =>{
        console.log(prodClick);
        //Thay đổi state = prod click
        this.setState({
            spChiTiet:prodClick
        })
    }
    renderProduct = () => {
        return arrDataPhone.map((prod,index)=> {
            return <div className='col-3' key={index}>
                <ProductItem prod={prod} xemChiTiet={this.xemChiTiet} /> 
            </div>
        })
    }
    render() {
        let {maSP,tenSP,hinhAnh,manHinh,ram,rom,heDieuHanh,cameraSau,cameraTruoc,giaBan} = this.state.spChiTiet;
        return (
            <div className='container mt-5'>
                <div className='row'>
                    {this.renderProduct()}
                </div>
                <div className='mt-3'>
                    <div className='row'>
                        <div className='col-4'>
                            <h3>{tenSP}</h3>
                            <img src={hinhAnh} alt='...' height={350} className="w-100" style={{objectFit:'contain'}} />
                        </div>
                        <div className='col-8'>
                            <h3>Thông tin chi tiết</h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Màn hình</th>
                                        <td>{manHinh}</td>
                                    </tr>
                                    <tr>
                                        <th>Hệ điều hành</th>
                                        <td>{heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <th>Cam trước</th>
                                        <td>{cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <th>Cam sau</th>
                                        <td>{cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <th>Ram</th>
                                        <td>{ram}</td>
                                    </tr>
                                    <tr>
                                        <th>Rom</th>
                                        <td>{rom}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;