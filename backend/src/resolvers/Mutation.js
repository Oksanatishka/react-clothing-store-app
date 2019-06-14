const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: Check if they are logged in
        // ctx.db.mutation.createItem   - that actually returns a promise,
        const item = await ctx.db.mutation.createItem(
            {
                data: {
                    ...args
                }
            },
            info
        );

        return item;
    }
    // createDog(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     // create dog
    //     const newDog = { name: args.name };
    //     global.dogs.push(newDog);
    //     return newDog;
    //     // console.log(args);
    // }
};

module.exports = Mutations;
