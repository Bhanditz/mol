# $mol_dict

Dictionary with extenden keys support:

- Primitives is used by value
- POJO and Arrays is used by value (Be carefull, POJO with different fields order is different keys due to JSON.stringify)
- Other objects is used by reference 

## Usage example

```
const dict = new $mol_dict
dict.set( { foo : 123 } , 'bar' )
dict.has({ foo : 123 }) // true
dict.get({ foo : 123 }) // 'bar'
dict.delete({ foo : 123 })
```

## API

Same as [native `Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
