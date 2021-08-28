const idCheck = (id)=>{
    if(id.length===24){
        return id;
    }else{
        return '111111111111111111111111'
    }
}

module.exports = idCheck;