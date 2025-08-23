const carMakers = ['Ford', 'Toyota'];
// const carMakers: string[] = ['Ford', 'Toyota'];
// const carMakers: string[] = [];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla']];

// Help with inference when extracting the values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible valies
// carMakers.push(100);

// Help with map()
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2020-10-10');
importantDates.push(new Date());
