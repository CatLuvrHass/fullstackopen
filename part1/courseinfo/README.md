# par1

Introduction to React. 

1a:

    - A Component

    - JSX

    - Multiple Components

    - props: passing data to components.

    - notes.


1b: 

    - Variables: use let and const.

    - Arrays: use immutable data structures. use functional programming methods such as ``concat``(creates a new array with new items) and not ``push``.

    use of ``map.()`` function is frequently useful in React. snippet: 
    ```const t = [1, 2, 3]
    const m1 = t.map(value => value * 2)
    console.log(m1)   // [2, 4, 6] is printed``` 

    destructuring assignment is useful. snippet:
    ```const t = [1, 2, 3, 4, 5]
    const [first, second, ...rest] = t
    console.log(first, second)  // 1, 2 is printed
    console.log(rest)          // [3, 4, 5] is printed ```
    
    - Objects: object literals, values of properties can be any type at all. Can be retrieved with "dot" notation.
    e.g

    ```
    const object = {
        name: 'hassan ajaj',
        age:27,
        education: 'MSc',
    }
    console.log(object1.name) // hassan ajaj is printed
    ```

    can fill with dot notation or brackets:

        bracket notation allows for space in the property's name.
    ```
    object1.address = 'Dublin'
    object1['Year Of Birth'] = 1995
    ```

    - Functions

    - Object methods and "this"

    - Classes