import React, { Component } from 'react';
import { connect } from 'react-redux';
import { huyGheAction } from '../../redux/actions/BaiTapDatVeAction';
import { HUY_GHE } from '../../redux/type/BaiTapDatVeType';

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className=' mt-4'>
        <button className='gheDuocChon'></button> <span className='mx-2 text-light'>Ghế Đã Đặt</span><br />
        <button className='gheDangChon my-2'></button> <span className='mx-2 text-light'>Ghế Đang Chọn</span><br />
        <button className='ghe' style={{marginLeft:'0%'}}></button> <span className='mx-2 text-light'>Ghế Chưa Đặt</span>
        <div className="mt-5">
            <table className='table' border="2" style={{fontSize: 20}}>
                <thead className='text-light' style={{fontSize:'25px'}}>
                    <tr>
                        <th>Số Ghế</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='text-warning'>
                    {this.props.dannhSachGheDangDat.map((gheDangDat, index)=>{
                        return <tr key={index}>
                            <td>{gheDangDat.soGhe}</td>
                            <td>{(gheDangDat.gia).toLocaleString()}</td>
                            <td><button className='btn btn-danger' onClick={()=>{
                                this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                            }}>Huỷ</button></td>
                        </tr>
                    })}

                </tbody>
                <tfoot className='text-light'>
                    <tr>
                        <th>Tổng Tiền</th>
                        <th>{this.props.dannhSachGheDangDat.reduce((tongTien, gheDangDat, index)=>{
                            return tongTien += gheDangDat.gia;
                        }, 0).toLocaleString()}</th>
                       <th></th>

                    </tr>
                </tfoot>
            </table>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state =>{
    return {
        dannhSachGheDangDat: state.BaiTapDatVeReducer.dannhSachGheDangDat,
    }
}
export default connect(mapStateToProps)(ThongTinDatGhe);