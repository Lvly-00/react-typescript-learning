function Primitives() {
    // boolean: can only be true or false
    let isActive: boolean = true;

    // boolean with type inference (TypeScript automatically knows it's boolean)
    let hasPermission = false;

    // string: used for text
    let username: string = "Jane Doe";

    // number: used for whole numbers
    let age: number = 21;

    // number: can also store decimals
    let weight: number = 45.6;

    // template literal: use backticks (`) to combine text and variables
    // ${} allows embedding variables and expressions
    let speech: string = `Hi, I'm ${username}. I'm ${age} years old, weigh ${weight} kg,
    and I'm currently ${isActive ? "active" : "inactive"} on the team.
    My team leader has ${hasPermission ? "approved" : "denied"} my request.`;

    // Symbol: unique identifier, useful for creating private-like object properties
    const id: symbol = Symbol('id')
    const secret: symbol = Symbol('secret')
    const title: symbol = Symbol('title')

    // Example object using symbols as unique keys
    const user = {
        username: 'Alice',  // normal string key
        [id]: 101,          // unique symbol key
        [secret]: 'Klee is my Pride and Joy', // another symbol key
        [title]: 'Dodo-King'
    };

    return (
        <div>
            <h1>Primitives</h1>

            {/* Displaying string variable */}
            <p>Username: {username}</p>

            {/* Displaying number variable */}
            <p>Age: {age}</p>

            {/* Ternary operator: condition ? valueIfTrue : valueIfFalse */}
            <p>Status: {isActive ? "Active" : "Inactive"}</p>

            {/* Another ternary example */}
            <p>Permission: {hasPermission ? "Granted" : "Denied"}</p>

            {/* Displaying a template literal */}
            <p>{speech}</p>

            <br />

            <h2>Unique Key Identifiers</h2>
            <p>Name: {user.username}</p>

            {/* Symbol keys: unique and do not conflict with string keys */}
            <p>ID: {user[id]}</p>
            <p>Secret: {user[secret]}</p>
            <p>Title: {user[title]}</p>



        </div>
    );
}

export default Primitives;

{/* -------------------------
          LEARNING NOTES
      -------------------------
      1. BOOLEAN: true/false values, can be inferred or explicitly typed.
      2. STRING: text data type, can be concatenated or used in template literals.
      3. NUMBER: integers or decimals.
      4. TEMPLATE LITERALS: use backticks (`) and ${} to embed variables and expressions.
      5. TERNARY OPERATOR: condition ? valueIfTrue : valueIfFalse, useful for conditional rendering.
      6. SYMBOL: unique identifiers, can be used as object keys to avoid collisions.
      7. JSX: use {} to embed JavaScript expressions inside HTML.
      */}