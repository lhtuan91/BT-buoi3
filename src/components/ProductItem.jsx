import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {prod, xemChiTiet} = this.props;
        return (
          <div className='card' id={'phone_' + prod.maSP}>
            <img src={prod.hinhAnh} className="w-100" height={350} alt="..." style={{ objectFit: 'contain' }}/>
            <div className='card-body'>
                <p className='fw-bolder'>{prod.tenSP}</p>
                <div className='d-flex flex-row' style={{gap:5}}>
                    <button className='btn btn-success'>Thêm giỏ hàng</button>
                    <button className='btn btn-warning' onClick={() => {
                        xemChiTiet(prod)
                    }}>Xem chi tiết</button>
                </div>
                
            </div>
          </div>
        )
    }
}

export default ProductItem;