function outerFunction() {
    var outer = 1;
    function innerFunction(){
        document.write(outer);
    }
    innerFunction();
}

outerFunction();