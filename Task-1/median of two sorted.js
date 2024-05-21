(function(arr1, arr2) {
    const mergeArrays = (a, b) => {
        let merged = [], i = 0, j = 0;
        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                merged.push(a[i]);
                i++;
            } else {
                merged.push(b[j]);
                j++;
            }
        }
        return merged.concat(a.slice(i)).concat(b.slice(j));
    };

    const mergedArray = mergeArrays(arr1, arr2);
    const mid = mergedArray.length / 2;
    console.log((mergedArray[mid - 1] + mergedArray[mid]) / 2);
})([1, 3, 5], [2, 4, 6]);