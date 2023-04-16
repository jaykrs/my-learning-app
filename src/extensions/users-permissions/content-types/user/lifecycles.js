module.exports = {
    beforeCreate(event) {
      const { data, where, select, populate } = event.params;
      console.log("before");
      // let's do a 20% discount everytime
      event.params.data.emailotp = "22033";
      event.params.data.phoneotp = "44033";
      console.log(data);
    },
  
    afterCreate(event) {
      const { result, params } = event;
  console.log("after");
      // do something to the result;
    },
  };