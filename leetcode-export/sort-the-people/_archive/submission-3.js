/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
    /** Approach
     * 1. create a hash map combining both arrays
     * 2. Sort heights array using inbuilt sort function
     * 3. Create a blank array and iterate the heights array, get the corresponding values from hash table and return it
     */
    const hashedValues = new Map()

    for (let i = 0; i < heights.length; i++) {
        hashedValues.set(heights[i], names[i])
    }
    heights.sort((a, b) => b - a)
    // let sortedNames = []
    // for (let i = 0; i < heights.length; i++) {
    //     sortedNames.push(hashedValues.get(heights[i])
    //     )
    // }
    return heights.map(e=> hashedValues.get(e))
}

// const sortPeople = (names, height) => {
//     let profiles = []
//     for (let i = 0; i < height.length; i++) {
//         profiles.push([height[i], names[i]])
//     }
//     profiles.sort((a, b) => b[0] - a[0])
//     return profiles.map(e => e[1])
// }