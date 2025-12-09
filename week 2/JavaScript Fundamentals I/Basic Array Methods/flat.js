const nested = [1, [2, 3],
    [4, [5, 6]]
];
const flat1 = nested.flat(); // Flatten 1 level


const flat2 = nested.flat(2); // Flatten 2 levels  


const deepNested = [1, [2, [3, [4, [5]]]]];
const completelyFlat = deepNested.flat(Infinity); // Flatten all levels


// API returns nested categories
const apiResponse = {
    categories: [
        "Electronics", ["Phones", ["Smartphones", "Feature Phones"]],
        "Computers", ["Laptops", ["Gaming", "Business"]]
    ]
};

const allCategories = apiResponse.categories.flat(Infinity);

console.log(allCategories.length); // 8

function searchCategory(query) {
    return allCategories.filter(cat =>
        cat.toLowerCase().includes(query.toLowerCase())
    );
}

console.log(searchCategory("phone"));
// ["Phones", "Smartphones", "Feature Phones"]