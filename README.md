# node-vargs


## argument parsing description schema
Argument schema is an array, where each alement could be any of [`string`, `number`, `null`, `undefned`, `object`, `Array.<string>`, `Array.<object>`]. Depending on type of element, they are parsed differently

|Type| Description| Example|
|----|-----|---|
|`string`, `number`, `null`, `undefined` | default value| self explanatery|
|`Array.<string>` |  each element of is expected to be a string and is a possible type for argument  | ['function', 'boolean']|
|`Array.<object>` |  key of each element is expected to be a type and value is expected to be it's default value  | [{string:'John'}, {boolean:false]|
| `object`| in this case key will be name of the parsed argument and value can be any of the above values| {age : 12}
