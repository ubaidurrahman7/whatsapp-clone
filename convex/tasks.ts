import { query, mutation } from "./_generated/server";
export const getTasks = query({
  args: {},
  handler: async (ctx, args) => {
    await ctx.db.query("");
  },
});
