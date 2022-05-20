// Список курсов
let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];


// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

courses.sort((a, b) => {

        if ((!a.prices[0] || a.prices[0] === 0) && (!b.prices [0] || b.prices[0] === 0)) {

            if (!a.prices[1] || a.prices[1] === 0) {
                return -1;
            }
            if (!b.prices[1] || b.prices[1] === 0) {
                return 1;
            }

            if (a.prices[1] < b.prices[1]) {
                return -1;
            }

            if (a.prices[1] > b.prices[1]) {
                return 1;
            }
        }

        if(a.prices[0] < b.prices[0]) {
            return -1;
        }
        if(a.prices[0] > b.prices[0]) {
            return 1;
        }

        return 0;
    }
);

console.log("sorted courses:");
console.log(courses);

let filter = requiredRange3;

console.log(`filtered courses:  (filter: [${filter}])`);
console.log(courses.filter((value) => {

    // [null,y]
    if (!filter[0]) {
        if (value.prices[0] <= filter[1] && filter[1] <= value.prices[1]) {
            return true;
        }
        if (!value.prices[1] && value.prices[0] <= filter[1]) {
            return true;
        }
        if (value.prices[1] && value.prices[1] <= filter[1]) {
            return true;
        }
    }

    // [x,null]
    if (!filter[1]) {
        if (value.prices[0] <= filter[0] && filter[0] <= value.prices[1]) {
            return true;
        }
        if (value.prices[0] >= filter[0] || value.prices[1] >= filter[0]) {
            return true;
        }
    }

    // [x,y]
    if (filter[0] && filter[1]) {
        if (value.prices[0] <= filter[0] && filter[0] <= value.prices[1]) {
            return true;
        }
        if (value.prices[0] <= filter[1] && filter[1] <= value.prices[1]) {
            return true;
        }
        if (value.prices[0] <= filter[1] && value.prices[0]) {
            return true;
        }
    }
}));

