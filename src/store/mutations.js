export default {
    increment(state,val) {
        state.city = val
        try{
            if(localStorage.city){
                localStorage.city = val
            }
        }catch(e){}
    }
}