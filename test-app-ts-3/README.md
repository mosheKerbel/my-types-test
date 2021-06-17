1. Override `my-lib` types
2. Cherry pick only the types that you want
3. Make sure not to use an `import` statement, in order to have an ambient module.

### Ambient modules VS local modules
Basically, TypeScript has two kind of module types declaration: "local" (normal modules) and ambient (global). The second kind allows to write global modules declaration that are merged with existing modules declaration. What are the differences between this files?

d.ts files are treated as an ambient module declarations only if they don't have any imports. If you provide an import line, it's now treated as a normal module file, not the global one, so augmenting modules definitions doesn't work.

So that's why all the solutions we discussed here don't work. But fortunately, since TS 2.9 we are able to import types into global modules declaration using import() syntax:
