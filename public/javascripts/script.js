Handlebars.registerHelper('blog', function(n, block) {
    var accum = '';
    for(var i = 0; i < data; ++i) {
        //block.data.index = i;
        //block.data.first = i === 0;
        //block.data.last = i === (n - 1);
        //accum += block.fn(this);
        console.log('dddddddd = ',data[i]);
    }
    return accum;
});