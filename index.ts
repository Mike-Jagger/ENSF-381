let w: unknown = 1;

console.log(typeof w);

w = {
    letter: "hey",
    unknownFunction: () => {
        console.log("I think therefore I am");
    }
} as { unknownFunction: () => void }

console.log(w);

if (w !== null && typeof w === 'object') {
    console.log((w as { letter: string }).letter);
    (w as { unknownFunction: Function }).unknownFunction();
}