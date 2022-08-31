import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType";

const stateDefaut = {
    dannhSachGheDangDat:[
    ]
}

const BaiTapDatVeReducer = (state = stateDefaut,action)=>{
    switch(action.type){
        case DAT_GHE:{
            let danhSachGheDangDatUpdate = [...state.dannhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index !==-1){
                //nếu người dùng click vào ghế có trang mảng => remove đi
                danhSachGheDangDatUpdate.splice(index,1)
            }else{
                //nếu người dùng click vào ghế => push vào mảng

                danhSachGheDangDatUpdate.push(action.ghe)
            }
            // cập nhật lại state
            state.dannhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}

        }
        case HUY_GHE:{
            let danhSachGheDangDatUpdate = [...state.dannhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if(index !==-1){
                //nếu người dùng click vào ghế có trang mảng => remove đi
                danhSachGheDangDatUpdate.splice(index,1)
            }
            state.dannhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}

        }
        default: return{...state}
    }
}

export default BaiTapDatVeReducer;
