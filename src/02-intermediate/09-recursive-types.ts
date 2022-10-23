type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [1, 2, [12, [123]]]];
nums.push(1);
nums.push([1, [21]]);

//JSON
type JSONPrimitives = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitives | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON('str');
isJSON(12);
isJSON({ a: [1, 2, 3], v: { x: 'asd' } });
isJSON(true);
isJSON(null);
