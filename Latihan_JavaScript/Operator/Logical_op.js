let a = 2;
let b = 3;
let c = 6;
let d = 8;

/* AND operator */
2 < 3 && 6 > 8; // true && false = false
2 > 3 && 6 < 8; // false && true = false

/* OR operator */
2 < 3 || 6 > 8; // true || false = true
2 > 3 || 6 < 8; // false || true = true

/* Not operator */
!(a < 2);          //! true = false
!(a < 2 && b > 3);//! true && true = true = false