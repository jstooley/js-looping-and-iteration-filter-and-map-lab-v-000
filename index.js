function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver =>{ return driver.revenue > revenue });
};

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => {return driver.name});
}

function exactMatch(driver, obj) {
  const key = Object.keys(obj);
  return driver.filter( element => {return element[key] === obj[key];});

}
