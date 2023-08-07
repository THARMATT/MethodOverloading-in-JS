class employee{
  login(){
    console.log(`employee has loggedin `)
    
  }
  logout(){
    console.log(  `employee has looged out`)
    
  }
  requestLeaves(leaves){
    console.log(`no of leaves are ${leaves} leaves`)
  }
}
class programmer extends employee{
  requestCofeee(no){
    console.log(`employee has requested ${no}cofees`)
  }
    requestLeaves(leaves){
    super.requestLeaves(3)
      console.log(`one extra is granted `)
    
  }
}
let e=new employee()
let p=new programmer()
p.login()
p.logout()
e.logout()
p.requestCofeee(3)
p.requestLeaves(3)
e.requestLeaves(3)
