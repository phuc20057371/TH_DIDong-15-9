var promise = new Promise(function(resolve, reject) {
    resolve(); // Thực hiện giải quyết thành công ngay lập tức
});


promise.then(
    function () {
        console.log('1!');
    }
).then(
    function () {
        console.log('2!');
     }
).then(
    function () {
        console.log('3!');
    }
)
