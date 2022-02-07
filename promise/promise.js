const promise = new Promise((resolve, reject)=>{
  const orderable = ["피자","치킨","햄버거"];
  orderable.includes("피자") ? resolve("30분 후 도착") : reject("품절된 메뉴");
})

const success = () => {
  console.log("주문완료",promise)
}

const error = () => {
  console.log("주문거절",promise)
}

const order = promise.then(success).catch(error);





