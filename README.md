# mongoose-tree-recursive

Using [mongoose-path-tree](https://github.com/swayf/mongoose-path-tree) for creating category hierarchy

Using [Async](https://github.com/caolan/async) and recursive function for saving [Mongoose](https://github.com/Automattic/mongoose) model

# Usage

```
   git clone https://github.com/leecris/mongoose-tree-recursive.git
   cd mongoose-tree-recursive
   npm install
   node app
```

# Issues

+ If you face issues like `Cannot find module '../build/Release/bson'`
+ Please locate `node_modules/mongoose-path-tree/package.json`
+ Change `mongoose` to `4.x.x` in `dependencies` block
