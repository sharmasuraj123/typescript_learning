function getFirstElement<T>(arr: T[]) :T|undefined{
  return arr[0];
}

const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
if (el !== undefined) console.log(el.toLowerCase());



