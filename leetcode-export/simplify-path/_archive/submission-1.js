/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const directories = path.split("/");
    // console.log(arr);
    const stack = [];
    let cur;

    for(const dir of directories){ 
        // console.log(dir)
        if(!dir || dir === ".") continue
        if(dir === ".."){
            if(stack.length) stack.pop()    
        } else stack.push(dir)
        
    }
    console.log(stack)

    return "/" + stack.join("/")
    
};