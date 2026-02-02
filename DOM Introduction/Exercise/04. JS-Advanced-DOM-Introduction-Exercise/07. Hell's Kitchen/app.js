function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const text = document.querySelector('#inputs textarea').value;
      const data = JSON.parse(text);

      const restaurants = getRestaurants(data);

      restaurants.sort((a, b) => b.averageSalary - a.averageSalary);
      const bestRestaurant = restaurants[0];

      const bestRestaurantpElement = document.getElementById('bestRestaurant').children[2];
      bestRestaurantpElement.textContent =
         `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      const workersPElement = document.getElementById('workers').children[2];
      workersPElement.textContent = '';

      bestRestaurant.workers.forEach(worker => {
         workersPElement.textContent += `Name: ${worker.workerName} With Salary: ${worker.salary} `;
      });
   }

   function getRestaurants(data) {
      let result = [];

      for (const input of data) {
         let [restaurant, workersString] = input.split(' - ');

         let bestSalary = 0;
         let workers = [];

         let existingRes = result.find(r => r.name === restaurant);

         if (existingRes) {
            bestSalary = existingRes.bestSalary;
            workers = existingRes.workers;
         }

         workersString = workersString.split(', ');
         for (const worker of workersString) {
            let [workerName, salary] = worker.split(' ');

            salary = Number(salary);

            if (bestSalary < salary) {
               bestSalary = salary;
            }

            workers.push({ workerName, salary });
         }

         workers = workers.sort((a, b) => b.salary - a.salary);

         const totalSalary = workers.reduce((sum, w) => sum + w.salary, 0);
         const averageSalary = totalSalary / workers.length;

         if (existingRes) {
            existingRes.workers = workers;
            existingRes.bestSalary = bestSalary;
            existingRes.averageSalary = averageSalary;
         } else {
            result.push({
               name: restaurant,
               workers,
               bestSalary,
               averageSalary
            });
         }
      }

      return result;
   }
}