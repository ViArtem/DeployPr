function splitFN(fullname) {
    let fulln = fullname.split(' ').filter(word => word != '')
    
    if (fulln.length < 2) {
        return false
    }else
    return fulln
   
}

//console.log(splitFN('ffslog')); 
export{splitFN}
