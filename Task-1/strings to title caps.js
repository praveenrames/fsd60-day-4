(function() {
    let str = "my name praveen kumar software engineer";
    let titleCapsStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    console.log(titleCapsStr);
})();