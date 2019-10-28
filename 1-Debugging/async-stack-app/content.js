const content = (opts, c = 20) => {
    const produce = (cb) => {
        if (--c) setTimeout(produce, 10, cb);
        cb(null, opts.ohoh);
    }

    return produce;
}

module.exports = content;