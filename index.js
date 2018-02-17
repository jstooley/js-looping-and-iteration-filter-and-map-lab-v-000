function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(driver =>{ return driver.revenue > revenue });
};

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => {return driver.name});
}

function exactMatch(drivers, object){
  return drivers.filter(driver => {
        let matches = false;
    for (const key in object){
        matches = driver[key] === object[key]
        }
    return matches
  });
}