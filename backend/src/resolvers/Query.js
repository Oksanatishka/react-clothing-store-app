const { forwardTo } = require('prisma-binding');

const Query = {
    items: forwardTo('db'),
    item: forwardTo('db'),
    itemsConnection: forwardTo('db')
    // this was going to return a promise
    // items(parent, args, ctx, info) {
    //     return ctx.db.query.items();
    // }

    // async items(parent, args, ctx, info) {
    //     const items = await ctx.db.query.items();
    //     return items;
    // }

    // dogs(parent, args, ctx, info) {
    //     // return [{ name: 'Snickers' }, { name: 'Sunny' }];
    //     global.dogs = global.dogs || [];
    //     return global.dogs;
    // }
};

module.exports = Query;
