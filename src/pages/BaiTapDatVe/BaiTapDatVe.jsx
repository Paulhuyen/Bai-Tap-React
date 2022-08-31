import React, { Component } from 'react';
import './BaiTapDatVe.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import DanhSachHangGheData from '../../Data/DanhSachGhe.json'
import HangGhe from './HangGhe';

export default class BaiTapDatVe extends Component {
  renderHangGhe = ()=>{
    return DanhSachHangGheData.map((hangGhe, index)=>{
      return <div key={index} >
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
    })
  }


  render() {
    return (
      <div className='bg-home bookingMovie'>
          <div className="bg-header">
            <div className="container">
                <div className="row">
                    <div className="col-8 pt-4">
                      <div className="text-center">
                      <div className=" text-light display-6">DAT VÉ XEM PHIM CYBERLEARN</div>
                         <h4 className='text-white' style={{fontSize:'15px'}}>Màn Hình</h4>
                         <div className='mt-3' style={{display:'flex', flexDirection:'row',justifyContent:'center'}}>
                            <div className="screen"></div>
                         </div>
                         {this.renderHangGhe()}

                      </div>
                    </div>
                    <div className="col-4  pt-4">
                         <div className="text-light text-center" style={{fontSize:'36px'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                         <ThongTinDatGhe/>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
