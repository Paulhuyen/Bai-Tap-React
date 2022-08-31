import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../../redux/actions/BaiTapDatVeAction';
class HangGhe extends Component {
    renderGhe = () =>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
          let cssGheDaDat = '';
          let disabled = false;
          //trạng thái đã đặt ghế
          if(ghe.daDat){
            cssGheDaDat = 'gheDuocChon';
            disabled = true;
          }
          //xét trạng thái đang đặt
          let cssGheDangDat = '';
          let indexGheDangDat = this.props.dannhSachGheDangDat.findIndex(gheDangDat=> gheDangDat.soGhe === ghe.soGhe);
          if(indexGheDangDat !== -1){
            cssGheDangDat = 'gheDangChon';
            // disabled = true;
          }

          return <button disabled={disabled} onClick={()=>{
             this.props.datGhe(ghe)
          }}className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
            {ghe.soGhe}
          </button>
        })
      }
      renderSoHang = ()=>{
        return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button className='rowNumber'>{hang.soGhe}</button>
        })
      }
      renderHangGhe = ()=>{
        if(this.props.soHangGhe ===0){
            return <div className=''>
                {this.props.hangGhe.hang}{this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang}{this.renderGhe()}
            </div>
        }
      }
  render() {
    // let {HangGhe} = this.props
    return ( 
      <div className='text-light text-left mt-3' style={{fontSize:30}}>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
  dannhSachGheDangDat: state.BaiTapDatVeReducer.dannhSachGheDangDat
}
}
const mapDispatchToProps = (dispatch) =>{
  return {
    datGhe: (ghe)=>{
      dispatch(datGheAction(ghe))
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(HangGhe);