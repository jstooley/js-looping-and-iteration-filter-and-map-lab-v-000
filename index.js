function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver =>{ return driver.revenue > revenue });
};

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => {return driver.name});
}

function exactMatch(driver, object) {
  let key = Object.keys(object)[0];
  return driver.filter(function (element){return element[key] === object[key];});

}
